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
var styles = require("./ClipToolButtonStyle.css");
var ClipToolButton = (function (_super) {
    __extends(ClipToolButton, _super);
    function ClipToolButton(props) {
        return _super.call(this, props) || this;
    }
    ClipToolButton.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.item },
            React.createElement("div", { onClick: function () {
                    _this.props.onSelect();
                }, className: this.props.selected ? styles.item__circle_selected : styles.item__circle },
                React.createElement("div", { className: styles.item__circle_cell },
                    React.createElement("span", { className: "material-icons" }, "crop_free")))));
    };
    return ClipToolButton;
}(React.Component));
exports.ClipToolButton = ClipToolButton;
//# sourceMappingURL=ClipToolButton.js.map