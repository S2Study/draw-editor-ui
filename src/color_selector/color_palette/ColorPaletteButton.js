import * as React from 'react';
import * as styles from './ColorPaletteButtonStyle.scss';
export class ColorPalette extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (React.createElement("div", {className: styles.item}, React.createElement("div", {className: styles.item__circle}, React.createElement("div", {className: styles.item__circle_cell}, React.createElement("span", {className: "material-icons"}, "palette")))));
    }
}
//# sourceMappingURL=ColorPaletteButton.js.map