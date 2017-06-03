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
var styles = require("./TextToolButtonStyle.css");
var TextToolButton = (function (_super) {
    __extends(TextToolButton, _super);
    function TextToolButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    TextToolButton.prototype.render = function () {
        var _this = this;
        var editorProp = this.props.editorProperties;
        var color = editorProp.color;
        var style = {};
        if (this.props.selected) {
            style.color = "rgb(" + color.r + "," + color.g + "," + color.b + ")";
            style.fontSize = editorProp.fontSize;
            style.fontWeight = editorProp.fontWeight;
        }
        return (React.createElement("div", { className: styles.item },
            React.createElement("div", { onClick: function () {
                    _this.props.onSelect();
                }, className: this.props.selected ? styles.item__circle_selected : styles.item__circle },
                React.createElement("div", { className: styles.item__circle_cell },
                    React.createElement("span", { style: style, className: "material-icons" }, "text_fields")))));
    };
    return TextToolButton;
}(React.Component));
exports.TextToolButton = TextToolButton;
//# sourceMappingURL=TextToolButton.js.map