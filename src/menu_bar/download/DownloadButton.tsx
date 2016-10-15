import * as React from "react";
import * as styles from "./DownloadButtonStyle.css";

export interface DownloadButtonProps {
	action(): void;
	disabled?: boolean;
}
export class DownloadButton extends React.Component<DownloadButtonProps, any> {

	constructor(props: DownloadButtonProps) {
		super(props);
	}

	render() {
		return (
			<div className={styles.item}>
				<div onClick={() => {
					if(!this.props.disabled) {
						this.props.action();
					}
				}} className={
					this.props.disabled ? styles.item__square_disabled : styles.item__square
				}>
					<div className={styles.item__square_cell}>
						<span className="material-icons">file_download</span>
					</div>
				</div>
			</div>
		);
	}
}

