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
var styles = require("./EraserToolButtonStyle.css");
var EraserToolButton = (function (_super) {
    __extends(EraserToolButton, _super);
    function EraserToolButton(props) {
        return _super.call(this, props) || this;
    }
    EraserToolButton.prototype.render = function () {
        var _this = this;
        var style = {};
        if (this.props.selected) {
            style.color = "rgb(255,255,255)";
        }
        return (React.createElement("div", { className: styles.item },
            React.createElement("div", { onClick: function () {
                    _this.props.onSelect();
                }, className: this.props.selected ? styles.item__circle_selected : styles.item__circle },
                React.createElement("div", { className: styles.item__circle_cell },
                    React.createElement("span", { style: style, className: "material-icons" }, "panorama_fish_eye")))));
    };
    return EraserToolButton;
}(React.Component));
exports.EraserToolButton = EraserToolButton;
//# sourceMappingURL=EraserToolButton.js.map