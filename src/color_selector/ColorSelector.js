import * as React from 'react';
import * as styles from './ColorSelectorStyle.scss';
import { ColorItem } from "./color_item/ColorItem";
export class ColorValue {
    constructor(color, selected) {
        this.color = color;
        this.selected = selected;
    }
}
export class ColorSelectorState {
    constructor(colors, palette) {
        this.colors = colors;
        this.palette = palette;
    }
}
export class ColorSelector extends React.Component {
    constructor(props) {
        super(props);
        this.state = new ColorSelectorState(props.colors.map((color, i) => {
            return new ColorValue(color, props.selectedIndex === i);
        }));
    }
    selectColor(color, index) {
        this.setState(new ColorSelectorState(this.state.colors.map((colorValue, i) => {
            return new ColorValue(colorValue.color, i === index);
        })));
        this.props.onSelect(color);
    }
    render() {
        return (React.createElement("div", {className: styles.container}, this.state.colors.map((colorValue, index) => {
            return React.createElement(ColorItem, {key: index, color: colorValue.color, selected: colorValue.selected, onSelect: () => {
                this.selectColor(colorValue.color, index);
            }});
        })));
    }
}
//# sourceMappingURL=ColorSelector.js.map