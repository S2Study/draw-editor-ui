import * as React from 'react';
import * as styles from './SaveButtonStyle.scss';
export class SaveButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", {className: styles.item}, React.createElement("div", {onClick: () => {
            if (!this.props.disabled) {
                this.props.action();
            }
        }, className: this.props.disabled ? styles.item__square_disabled : styles.item__square}, React.createElement("div", {className: styles.item__square_cell}, React.createElement("span", {className: "material-icons"}, "file_upload")))));
    }
}
//# sourceMappingURL=SaveButton.js.map