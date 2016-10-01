import * as drawchat from "@s2study/draw-api";

import DrawchatEditorProperties = drawchat.editor.DrawEditorProperties;
import * as React from "react";
import * as styles from "./EraserToolButtonStyle.css";

export interface EraserToolButtonProps {
	key: any;
	editorProperties: DrawchatEditorProperties;
	selected?: boolean;
	onSelect: ()=>any;
}
export class EraserToolButton extends React.Component<EraserToolButtonProps, any> {
	constructor(props: EraserToolButtonProps) {
		super(props);
	}

	render() {
		let style: any = {};
		if (this.props.selected) {
			style.color = `rgb(255,255,255)`;
		}
		return (
			<div className={styles.item}>
				<div
					onClick={() => { this.props.onSelect(); }}
					className={this.props.selected ? styles.item__circle_selected : styles.item__circle}>
					<div className={styles.item__circle_cell}>
						<span style={style} className="material-icons">panorama_fish_eye</span>
					</div>
				</div>
			</div>
		);
	}
}
