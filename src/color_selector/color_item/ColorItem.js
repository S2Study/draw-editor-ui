import * as React from 'react';
import * as styles from './ColorItemStyle.scss';
export class ColorItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            onSelect: props.onSelect
        };
    }
    // componentDidMount(){
    // }
    selectColor() {
        this.props.onSelect();
    }
    getColor() {
        return this.props.color ? this.props.color : { r: 0, g: 0, b: 0 };
    }
    render() {
        let color = this.getColor();
        var spanStyle = {
            color: `rgb(${color.r},${color.g},${color.b})`
        };
        return (React.createElement("div", {className: styles.item}, React.createElement("div", {onClick: (event) => this.selectColor(), className: this.props.selected ? styles.item__circle_selected + ' ' + styles.item__circle : styles.item__circle}, React.createElement("div", {className: styles.item__circle_cell}, React.createElement("span", {className: "material-icons", style: spanStyle}, "format_color_fill")))));
    }
}
//# sourceMappingURL=ColorItem.js.map