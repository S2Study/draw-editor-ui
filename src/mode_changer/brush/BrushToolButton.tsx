import * as React from "react";
import * as styles from "./BrushToolButtonStyle.css";
import {EditorProperties} from "@s2study/draw-editor/lib/EditorProperties";

export interface BrushToolButtonProps {
	key: any;
	thickness: number;
	editorProperties: EditorProperties;
	selected?: boolean;
	onSelect: () => any;
}

export class BrushToolButton extends React.Component<BrushToolButtonProps, any> {
	constructor(props: BrushToolButtonProps) {
		super(props);
	}

	render() {
		let color = this.props.editorProperties.color;
		let style: any = {
			fontSize: (18 + 0.5 * this.props.thickness)
		};
		if (this.props.selected) {
			style.color = `rgb(${color.r},${color.g},${color.b})`;
		}
		return (
			<div className={styles.item}>
				<div onClick={() => {
					this.props.onSelect();
				}}
				className={this.props.selected ? styles.item__circle_selected : styles.item__circle}>
					<div className={styles.item__circle_cell}>
						<span style={style} className="material-icons">brush</span>
					</div>
				</div>
			</div>
		);
	}
}
