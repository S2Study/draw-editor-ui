import * as React from 'react';
import * as styles from './RedoButtonStyle.scss';

export interface RedoButtonProps {
	action():void;
	disabled?:boolean;
}
export class RedoButton extends React.Component<RedoButtonProps, any> {

	constructor(props:RedoButtonProps) {
		super(props);
		this.state = {};
	}
	render() {
		return(
			<div className={styles.item}>
				<div onClick={()=>{
					if(!this.props.disabled){
						this.props.action();
					}
				}} className={
					this.props.disabled ? styles.item__square_disabled : styles.item__square
				}>
					<div className={styles.item__square_cell}>
						<span className="material-icons">redo</span>
					</div>
				</div>
			</div>
		);
	}
}

