import * as React from 'react';
import * as styles from './LayerAddButtonStyle.scss';
export class LayerAddButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", {className: styles.item}, React.createElement("div", {onClick: () => {
            if (!this.props.disabled) {
                this.props.action();
            }
        }, className: this.props.disabled ? styles.item__add_disabled : styles.item__add}, React.createElement("span", {className: "material-icons"}, "add"))));
    }
}
//# sourceMappingURL=LayerAddButton.js.map