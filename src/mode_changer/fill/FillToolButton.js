import * as React from 'react';
import * as styles from './FillToolButtonStyle.scss';
export class FillToolButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let color = this.props.editorProperties.color;
        let style = {};
        if (this.props.selected) {
            style.color = `rgb(${color.r},${color.g},${color.b})`;
        }
        return (React.createElement("div", {className: styles.item}, React.createElement("div", {onClick: () => { this.props.onSelect(); }, className: this.props.selected ? styles.item__circle_selected : styles.item__circle}, React.createElement("div", {className: styles.item__circle_cell}, React.createElement("span", {style: style, className: "material-icons"}, "format_paint")))));
    }
}
//# sourceMappingURL=FillToolButton.js.map