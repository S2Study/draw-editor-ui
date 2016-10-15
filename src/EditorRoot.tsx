import * as drawchat from "@s2study/draw-api";

import DrawchatEditor = drawchat.editor.DrawEditor;
import Color = drawchat.editor.Color;
import DrawchatLayers = drawchat.editor.DrawEditorLayers;
import DrawchatEditorProperties = drawchat.editor.DrawEditorProperties;
import DrawchatModeChanger = drawchat.editor.DrawEditorModeChanger;
import DrawchatRenderer = drawchat.renderer.DrawchatRenderer;
import DrawHistory = drawchat.history.DrawHistory;
import Message = drawchat.structures.Message;

import * as React from "react";
import * as styles from "./EditorRootStyle.css";
import {MenuBar} from "./menu_bar/MenuBar";
import CanvasContainer from "./canvas_container/CanvasContainer";
import {ColorSelector} from "./color_selector/ColorSelector";
import {ModeChanger, ModeItem} from "./mode_changer/ModeChanger";
import {Layers} from "./layers/Layers";
import {EditorMain} from "./canvas_container/EditorMain";
import Renderer from "@s2study/draw-canvas2d-renderer";
import Editor from "@s2study/draw-editor";

export class EditorRootState {
	editor: DrawchatEditor;
	colors: Color[];
	modeItems: ModeItem[];
	latest: number;
	currentLayer: number = -1;
	layerCount: number = 0;
	modeChangeFirst: boolean = true;
	canvasId: string;

	constructor(
		editor: DrawchatEditor,
		canvasId: string
	) {
		this.editor = editor;
		this.canvasId = canvasId;
		this.latest = -1;
		this.colors = [
			{r: 0, g: 0, b: 0},
			{r: 255, g: 255, b: 0},
			{r: 255, g: 0, b: 255},
			{r: 0, g: 255, b: 255}
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
	history: DrawHistory;
	canvasElement?: string;
	canvasWidth?: number;
	canvasHeight?: number;
	disableDownload?: boolean;
	save?: (message: Message) => void;
}

export class EditorRoot extends React.Component<EditorRootProps, EditorRootState> {

	constructor(props: EditorRootProps) {
		super(props);
		const canvasId = props.canvasElement == null ? "editorCanvas" : props.canvasElement;
		const renderer = Renderer.createDOMRenderer(
			canvasId,
			props.canvasWidth == null ? 600 : props.canvasWidth,
			props.canvasHeight == null ? 400 : props.canvasHeight
		);
		this.state = new EditorRootState(Editor.createInstance(
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
			this.state.layerCount = count;
			this.state.currentLayer = current;
			if (count === 0) {
				layers.addLayer().then(() => {
					this.refresh();
				});
				return true;
			}
			if (count >= 0 && current >= 0 && current < count) {
				this.state.latest = current;
				return this.complementMode();
			}
			if (this.state.latest >= 0 && this.state.latest < count) {
				layers.setCurrent(this.state.latest).then(() => {
					this.refresh();
				});
				return true;
			}
			this.state.latest = count - 1;
			layers.setCurrent(count - 1).then(() => {
				this.refresh();
			});
			return true;
		});
	}

	private complementMode(): boolean {
		let mode = this.state.editor.mode.getMode();
		if (
			(mode >= 0 && mode !== this.state.editor.mode.CHANGING)
			|| (mode === this.state.editor.mode.CHANGING && !this.state.modeChangeFirst)
		) {
			return false;
		}
		this.state.modeChangeFirst = false;
		this.modeSelect(0);
		return true;
	}

	download(uri: string) {

		const name     = "draw.png";
		const a = document.createElement("a");
		a.download = name;
		a.target   = "_blank";

		if (window.navigator.msSaveBlob) {
			// for IE
			const xhr = new XMLHttpRequest();
			xhr.open("GET", uri);
			xhr.responseType = "blob";

			xhr.onloadend = function() {
				if (xhr.status !== 200) return;
				window.navigator.msSaveBlob(xhr.response, name);
			};
			xhr.send();
			return;
		}

		// for Firefox
		a.href = uri;
		document.body.appendChild(a);
		a.click();
		document.body.removeChild(a);
	};

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
		this.state.modeItems = this.state.modeItems.map((item, i) => {
			return new ModeItem(item.mode, item.thickness, i === index);
		});
		let selected = this.state.modeItems[index];
		this.state.editor.mode.changeMode(selected.mode).then(() => {
			this.state.editor.properties.thickness = selected.thickness;
			this.refresh();
		});
	}

	render() {
		let count = this.state.layerCount;
		let current = this.state.currentLayer;
		return (
			<div className={styles.container}>
				<div className={styles.canvasContainer}>
					<CanvasContainer id={this.state.canvasId} editor={this.state.editor}/>
				</div>
				<div className={styles.canvasContainer}>
					<EditorMain id={this.state.canvasId + "_eventLayer"} editor={this.state.editor}/>
				</div>
				<div className={styles.menuBar}>
					<MenuBar
						canDownload={!this.props.disableDownload}
						canRedo={this.state.editor.canRedo()}
						canUndo={this.state.editor.canUndo()}
						canSave={this.props.save != null}
						download={() => {
							this.state.editor.createImageURI().then((uri) => {
								this.download(uri);
							});
						}}
						undo={() => {
							this.state.editor.undo().then(() => {
								this.refresh();
							});
						}}
						redo={() => {
							this.state.editor.redo().then(() => {
								this.refresh();
							});
						}}
						save={() => {
							this.state.editor.generateMessage().then((message) => {
								this.props.save(message);
							});
						}}
					/>
				</div>
				<div className={styles.modeChanger}>
					<ModeChanger
						editorProperties={this.state.editor.properties}
						modeItems={
							this.state.modeItems
						}
						changer={
							this.state.editor.mode
						} onSelect={(index:number) => {
							this.modeSelect(index);
						}}
					/>
				</div>
				<div className={styles.layers}>
					<Layers
						selected={current}
						count={count}
						canAdd={count < 10}
						canRemove={current >= 0 && 	current < count}
						add={() => {
							this.state.editor.layers.addLayer().then(() => {
								this.refresh();
							});
						}}
						select={(i:number) => {
							this.state.editor.layers.setCurrent(i).then(() => {
								this.refresh();
							});
						}}
						remove={(i:number) => {
							this.state.editor.layers.remove(i).then(() => {
								this.refresh();
							});
						}}
					/>
				</div>
				<div className={styles.colorSelector}>
					<ColorSelector
						colors={
							this.state.colors
						}
						onSelect={(color) => {
							this.state.editor.properties.color = {r:color.r,g:color.g,b:color.b};
							this.refresh();
						}}
					/>
				</div>
			</div>
		);
	}
}
export default EditorRoot;
