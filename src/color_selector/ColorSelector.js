"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var styles = require("./ColorSelectorStyle.css");
var ColorItem_1 = require("./color_item/ColorItem");
var ColorValue = (function () {
    function ColorValue(color, selected) {
        this.color = color;
        this.selected = selected;
    }
    return ColorValue;
}());
exports.ColorValue = ColorValue;
var ColorSelectorState = (function () {
    function ColorSelectorState(colors, palette) {
        this.colors = colors;
        this.palette = palette;
    }
    return ColorSelectorState;
}());
exports.ColorSelectorState = ColorSelectorState;
var ColorSelector = (function (_super) {
    __extends(ColorSelector, _super);
    function ColorSelector(props) {
        var _this = _super.call(this, props) || this;
        _this.state = new ColorSelectorState(props.colors.map(function (color, i) {
            return new ColorValue(color, props.selectedIndex === i);
        }));
        return _this;
    }
    ColorSelector.prototype.selectColor = function (color, index) {
        this.setState(new ColorSelectorState(this.state.colors.map(function (colorValue, i) {
            return new ColorValue(colorValue.color, i === index);
        })));
        this.props.onSelect(color);
    };
    ColorSelector.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.container }, this.state.colors.map(function (colorValue, index) {
            return React.createElement(ColorItem_1.ColorItem, { key: index, color: colorValue.color, selected: colorValue.selected, onSelect: function () {
                    _this.selectColor(colorValue.color, index);
                } });
        })));
    };
    return ColorSelector;
}(React.Component));
exports.ColorSelector = ColorSelector;
//# sourceMappingURL=ColorSelector.js.map