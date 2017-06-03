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
var styles = require("./ColorItemStyle.css");
var Color_1 = require("@s2study/draw-editor/lib/Color");
var ColorItem = (function (_super) {
    __extends(ColorItem, _super);
    function ColorItem(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {
            onSelect: props.onSelect
        };
        return _this;
    }
    ColorItem.prototype.selectColor = function () {
        this.props.onSelect();
    };
    ColorItem.prototype.getColor = function () {
        return this.props.color ? this.props.color : new Color_1.ColorImpl(0, 0, 0);
    };
    ColorItem.prototype.render = function () {
        var _this = this;
        var color = this.getColor();
        var spanStyle = {
            color: "rgb(" + color.r + "," + color.g + "," + color.b + ")"
        };
        return (React.createElement("div", { className: styles.item },
            React.createElement("div", { onClick: function (event) { return _this.selectColor(); }, className: this.props.selected ? styles.item__circle_selected + " " + styles.item__circle : styles.item__circle },
                React.createElement("div", { className: styles.item__circle_cell },
                    React.createElement("span", { className: "material-icons", style: spanStyle }, "format_color_fill")))));
    };
    return ColorItem;
}(React.Component));
exports.ColorItem = ColorItem;
//# sourceMappingURL=ColorItem.js.map