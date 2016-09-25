import * as React from 'react';
import * as styles from './EraserToolButtonStyle.scss';
export class EraserToolButton extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let style = {};
        if (this.props.selected) {
            style.color = `rgb(255,255,255)`;
        }
        return (React.createElement("div", {className: styles.item}, React.createElement("div", {onClick: () => { this.props.onSelect(); }, className: this.props.selected ? styles.item__circle_selected : styles.item__circle}, React.createElement("div", {className: styles.item__circle_cell}, React.createElement("span", {style: style, className: "material-icons"}, "panorama_fish_eye")))));
    }
}
//# sourceMappingURL=EraserToolButton.js.map