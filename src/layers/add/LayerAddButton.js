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
var styles = require("./LayerAddButtonStyle.css");
var LayerAddButton = (function (_super) {
    __extends(LayerAddButton, _super);
    function LayerAddButton(props) {
        return _super.call(this, props) || this;
    }
    LayerAddButton.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.item },
            React.createElement("div", { onClick: function () {
                    if (!_this.props.disabled) {
                        _this.props.action();
                    }
                }, className: this.props.disabled ? styles.item__add_disabled : styles.item__add },
                React.createElement("span", { className: "material-icons" }, "add"))));
    };
    return LayerAddButton;
}(React.Component));
exports.LayerAddButton = LayerAddButton;
//# sourceMappingURL=LayerAddButton.js.map