import * as React from "react";
import * as styles from "./MenuBarStyle.css";
import {RedoButton} from "./redo/RedoButton";
import {UndoButton} from "./undo/UndoButton";
import {SaveButton} from "./save/SaveButton";
import {DownloadButton} from "./download/DownloadButton";

export interface MenuBarProps {
	canDownload: boolean;
	canUndo: boolean;
	canRedo: boolean;
	canSave: boolean;
	download(): void;
	undo(): void;
	redo(): void;
	save(): void;
}
export class MenuBar extends React.Component<MenuBarProps, any> {
	constructor(props: MenuBarProps) {
		super(props);
	}

	render() {
		return (
			<div className={styles.container}>
				{(() => {
					if (this.props.canDownload) {
						return (
							<DownloadButton action={() => {this.props.download(); }} disabled={false}/>
						);
					}
				})()}
				<RedoButton action={() => {this.props.redo(); }} disabled={!this.props.canRedo}/>
				<UndoButton action={() => {this.props.undo(); }} disabled={!this.props.canUndo}/>
				{(() => {
					if (this.props.canSave) {
						return (
							<SaveButton action={() => {this.props.save(); }} disabled={false}/>
						);
					}
				})()}
			</div>
		);
	}
}

