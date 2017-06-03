import * as React from "react";
import * as styles from "./ModeChangerStyle.css";
import {BrushToolButton} from "./brush/BrushToolButton";
import {FillToolButton} from "./fill/FillToolButton";
import {HandToolButton} from "./hand/HandToolButton";
import {TextToolButton} from "./text/TextToolButton";
import {ClipToolButton} from "./clip/ClipToolButton";
import {EyedropperToolButton} from "./eyedropper/EyedropperToolButton";
import {EraserToolButton} from "./eraser/EraserToolButton";
import {EditorProperties} from "@s2study/draw-editor/lib/EditorProperties";
import {Changer} from "@s2study/draw-editor/lib/Changer";
import {ReactElement} from "react";

export class ModeItem {
	mode: number;
	thickness: number;
	selected: boolean;

	constructor(mode: number, thickness: number = 0, selected: boolean = true) {
		this.mode = mode;
		this.selected = selected;
		this.thickness = thickness;
	}
}
export interface ModeChangerProps {
	modeItems: ModeItem[];
	editorProperties: EditorProperties;
	changer: Changer;
	onSelect: ModeChangerHandler;
}
export interface ModeChangerHandler {
	(index: number): void;
}
export class ModeChanger extends React.Component<ModeChangerProps, any> {

	private modes: {[key: number]: (item: ModeItem, i: number) => ReactElement<any> };

	constructor(props: ModeChangerProps) {
		super(props);

		this.modes = {};

		this.modes[this.props.changer.STROKE_MODE] = ( item: ModeItem, i: number) => {
			return <BrushToolButton
				editorProperties={this.props.editorProperties}
				key={i}
				selected={item.selected}
				thickness={item.thickness}
				onSelect={() => {
					this.props.onSelect(i);
				}}
			/>;
		};
		this.modes[this.props.changer.FILL_MODE] = ( item: ModeItem, i: number) => {
			return <FillToolButton
				editorProperties={this.props.editorProperties}
				key={i}
				selected={item.selected}
				onSelect={() => {
					this.props.onSelect(i);
				}}
			/>;
		};
		this.modes[this.props.changer.HAND_TOOL_MODE] = ( item: ModeItem, i: number) => {
			return <HandToolButton
				editorProperties={this.props.editorProperties}
				key={i}
				selected={item.selected}
				onSelect={() => {
					this.props.onSelect(i);
				}}
			/>;
		};
		this.modes[this.props.changer.TEXT_MODE] = ( item: ModeItem, i: number) => {
			return <TextToolButton
				editorProperties={this.props.editorProperties}
				key={i}
				selected={item.selected}
				onSelect={() => {
					this.props.onSelect(i);
				}}
			/>;
		};
		this.modes[this.props.changer.CLIP_MODE] = ( item: ModeItem, i: number) => {
			return <ClipToolButton
				key={i}
				selected={item.selected}
				onSelect={() => {
					this.props.onSelect(i);
				}}
			/>;
		};
		this.modes[this.props.changer.EYEDROPPER_MODE] = ( item: ModeItem, i: number) => {
			return <EyedropperToolButton
				editorProperties={this.props.editorProperties}
				key={i}
				selected={item.selected}
				onSelect={() => {
					this.props.onSelect(i);
				}}
			/>;
		};
		this.modes[this.props.changer.ERASER_MODE] = ( item: ModeItem, i: number) => {
			return <EraserToolButton
				editorProperties={this.props.editorProperties}
				key={i}
				selected={item.selected}
				onSelect={() => {
					this.props.onSelect(i);
				}}
			/>;
		};
	}

	render() {
		return (
			<div className={styles.container}>
				{this.props.modeItems.map((item, i) => {
					return this.modes[i](item, i);
				})}
			</div>
		);
	}
}
