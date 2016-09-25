import * as React from 'react';
import * as styles from './LayerRemoveButtonStyle.scss';
export class LayerRemoveButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", {className: styles.item}, React.createElement("div", {onClick: () => {
            if (!this.props.disabled) {
                this.props.action();
            }
        }, className: this.props.disabled ? styles.item__del_disabled : styles.item__del}, React.createElement("span", {className: "material-icons"}, "clear"))));
    }
}
//# sourceMappingURL=LayerRemoveButton.js.map