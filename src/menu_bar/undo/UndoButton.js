import * as React from 'react';
import * as styles from './UndoButtonStyle.scss';
export class UndoButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", {className: styles.item}, React.createElement("div", {onClick: () => {
            if (!this.props.disabled) {
                this.props.action();
            }
        }, className: this.props.disabled ? styles.item__square_disabled : styles.item__square}, React.createElement("div", {className: styles.item__square_cell}, React.createElement("span", {className: "material-icons"}, "undo")))));
    }
}
//# sourceMappingURL=UndoButton.js.map