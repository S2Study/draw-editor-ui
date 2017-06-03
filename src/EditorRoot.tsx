import * as React from "react";
import * as styles from "./EditorRootStyle.css";
import {MenuBar} from "./menu_bar/MenuBar";
import CanvasContainer from "./canvas_container/CanvasContainer";
import {ColorSelector} from "./color_selector/ColorSelector";
import {ModeChanger, ModeItem} from "./mode_changer/ModeChanger";
import {Layers} from "./layers/Layers";
import {EditorMain} from "./canvas_container/EditorMain";
import Renderer from "@s2study/draw-canvas2d-renderer";
import {Editor} from "@s2study/draw-editor/lib/Editor";
import * as editors from "@s2study/draw-editor";
import {Color} from "@s2study/draw-editor/lib";
import {history, renderer} from "@s2study/draw-api";
import DrawHistory = history.DrawHistory;
import DrawchatRenderer = renderer.DrawchatRenderer;
import {ColorFactory} from "@s2study/draw-editor/lib/Color";

export class EditorRootState {
	editor: Editor;
	colors: Color[];
	modeItems: ModeItem[];
	latest: number;
	currentLayer: number = -1;
	layerCount: number = 0;
	modeChangeFirst: boolean = true;
	canvasId: string;

	constructor(editor: Editor,
				canvasId: string) {
		this.editor = editor;
		this.canvasId = canvasId;
		this.latest = -1;
		this.colors = [
			ColorFactory.createInstance(0, 0, 0),
			ColorFactory.createInstance(255, 255, 0),
			ColorFactory.createInstance(255, 0, 255),
			ColorFactory.createInstance(0, 255, 255),
		];
		this.modeItems = [
			new ModeItem(editor.mode.STROKE_MODE, 1),
			new ModeItem(editor.mode.STROKE_MODE, 12),
			new ModeItem(editor.mode.STROKE_MODE, 24),
			// new ModeItem(editor.mode.FILL_MODE),
			new ModeItem(editor.mode.HAND_TOOL_MODE),
			// new ModeItem(editor.mode.TEXT_MODE),
			// new ModeItem(editor.mode.CLIP_MODE),
			new ModeItem(editor.mode.EYEDROPPER_MODE),
			new ModeItem(editor.mode.ERASER_MODE, 24),
		];
	}
}

export interface EditorRootProps {
	// editor:DrawchatEditor;
	history: DrawHistory;
	canvasElement?: string;
	canvasWidth?: number;
	canvasHeight?: number;
}

export class EditorRoot extends React.Component<EditorRootProps, EditorRootState> {

	constructor(props: EditorRootProps) {
		super(props);
		const canvasId = props.canvasElement == null ? "editorCanvas" : props.canvasElement;

		const renderer: DrawchatRenderer = Renderer.createDOMRenderer(
			canvasId,
			props.canvasWidth == null ? 600 : props.canvasWidth,
			props.canvasHeight == null ? 400 : props.canvasHeight
		) as DrawchatRenderer;

		this.state = new EditorRootState(editors.createInstance(
			props.history,
			renderer
		), canvasId);
	}

	/**
	 * プロパティの補完
	 * @returns {boolean}
	 */
	private complementProps(): Promise<boolean> {
		let layers = this.state.editor.layers;
		return Promise.all([layers.layerCount(), layers.getCurrent()]).then((values) => {

			let count = values[0];
			let current = values[1];

			const _state: EditorRootState = this.state;
			_state.layerCount = count;
			_state.currentLayer = current;

			if (count === 0) {
				layers.addLayer().then(() => {
					this.refresh();
				});
				return true;
			}
			if (count >= 0 && current >= 0 && current < count) {
				_state.latest = current;
				return this.complementMode();
			}
			if (_state.latest >= 0 && _state.latest < count) {
				layers.setCurrent(_state.latest).then(() => {
					this.refresh();
				});
				return true;
			}
			_state.latest = count - 1;
			layers.setCurrent(count - 1).then(() => {
				this.refresh();
			});
			return true;
		});
	}

	private complementMode(): boolean {

		const _state: EditorRootState = this.state;
		let mode = _state.editor.mode.getMode();
		if (
			(mode >= 0 && mode !== _state.editor.mode.CHANGING)
			|| (mode === _state.editor.mode.CHANGING && !_state.modeChangeFirst)
		) {
			return false;
		}
		_state.modeChangeFirst = false;
		this.modeSelect(0);
		return true;
	}

	/**
	 * 画面リフレッシュ
	 */
	refresh(): void {
		this.complementProps().then((doing) => {
			if (!doing) {
				this.setState(this.state);
			}
		});
	}

	/**
	 * コンポーネントマウント時の処理
	 */
	componentDidMount(): void {
		this.complementProps().then(() => {
			return null;
		});
	}

	modeSelect(index: number): void {

		const _state: EditorRootState = this.state;
		_state.modeItems = _state.modeItems.map((item, i) => {
			return new ModeItem(item.mode, item.thickness, i === index);
		});
		let selected = _state.modeItems[index];
		_state.editor.mode.changeMode(selected.mode).then(() => {
			_state.editor.properties.thickness = selected.thickness;
			this.refresh();
		});
	}

	render() {

		const _state: EditorRootState = this.state;
		let count = _state.layerCount;
		let current = _state.currentLayer;
		return (
			<div className={styles.container}>
				<div className={styles.canvasContainer}>
					<CanvasContainer id={_state.canvasId} editor={_state.editor}/>
				</div>
				<div className={styles.canvasContainer}>
					<EditorMain id={_state.canvasId + "_eventLayer"} editor={_state.editor}/>
				</div>
				<div className={styles.menuBar}>
					<MenuBar
						canRedo={
							_state.editor.canRedo()
						}
						canUndo={
							_state.editor.canUndo()
						}
						canSave={false}
						undo={() => {
							_state.editor.undo().then(() => {
								this.refresh();
							});
						}}
						redo={() => {
							_state.editor.redo().then(() => {
								this.refresh();
							});
						}}
						save={() => {
							// 未実装
						}}
					/>
				</div>
				<div className={styles.modeChanger}>
					<ModeChanger
						editorProperties={_state.editor.properties}
						modeItems={
							_state.modeItems
						}
						changer={
							_state.editor.mode
						} onSelect={(index: number) => {
						this.modeSelect(index);
					}}
					/>
				</div>
				<div className={styles.layers}>
					<Layers
						selected={current}
						count={count}
						canAdd={count < 10}
						canRemove={current >= 0 && current < count}
						add={() => {
							_state.editor.layers.addLayer().then(() => {
								this.refresh();
							});
						}}
						select={(i: number) => {
							_state.editor.layers.setCurrent(i).then(() => {
								this.refresh();
							});
						}}
						remove={(i: number) => {
							_state.editor.layers.remove(i).then(() => {
								this.refresh();
							});
						}}
					/>
				</div>
				<div className={styles.colorSelector}>
					<ColorSelector
						colors={
							_state.colors
						}
						onSelect={(color) => {
							_state.editor.properties.color = ColorFactory.createInstance(color.r, color.g, color.b);
							this.refresh();
						}}
					/>
				</div>
			</div>
		);
	}
}
