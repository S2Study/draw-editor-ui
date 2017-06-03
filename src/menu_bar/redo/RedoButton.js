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
var styles = require("./RedoButtonStyle.css");
var RedoButton = (function (_super) {
    __extends(RedoButton, _super);
    function RedoButton(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    RedoButton.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.item },
            React.createElement("div", { onClick: function () {
                    if (!_this.props.disabled) {
                        _this.props.action();
                    }
                }, className: this.props.disabled ? styles.item__square_disabled : styles.item__square },
                React.createElement("div", { className: styles.item__square_cell },
                    React.createElement("span", { className: "material-icons" }, "redo")))));
    };
    return RedoButton;
}(React.Component));
exports.RedoButton = RedoButton;
//# sourceMappingURL=RedoButton.js.map