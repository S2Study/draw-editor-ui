import * as React from 'react';
import * as styles from './ClipToolButtonStyle.scss';
export class ClipToolButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", {className: styles.item}, React.createElement("div", {onClick: () => { this.props.onSelect(); }, className: this.props.selected ? styles.item__circle_selected : styles.item__circle}, React.createElement("div", {className: styles.item__circle_cell}, React.createElement("span", {className: "material-icons"}, "crop_free")))));
    }
}
//# sourceMappingURL=ClipToolButton.js.map