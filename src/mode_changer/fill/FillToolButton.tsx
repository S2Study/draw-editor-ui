import * as React from "react";
import * as styles from "./FillToolButtonStyle.css";
import {EditorProperties} from "@s2study/draw-editor/lib/EditorProperties";

export interface FillToolButtonProps {
	key: any;
	editorProperties: EditorProperties;
	selected?: boolean;
	onSelect: () => any;
}
export class FillToolButton extends React.Component<FillToolButtonProps, any> {

	constructor(props: FillToolButtonProps) {
		super(props);
	}

	render() {
		let color = this.props.editorProperties.color;
		let style: any = {};
		if (this.props.selected) {
			style.color = `rgb(${color.r},${color.g},${color.b})`;
		}
		return (
			<div className={styles.item}>
				<div
					onClick={() => {
						this.props.onSelect();
					}}
					className={this.props.selected ? styles.item__circle_selected : styles.item__circle}>
					<div className={styles.item__circle_cell}>
						<span style={style} className="material-icons">format_paint</span>
					</div>
				</div>
			</div>
		);
	}
}
