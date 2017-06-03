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
var styles = require("./LayerRemoveButtonStyle.css");
var LayerRemoveButton = (function (_super) {
    __extends(LayerRemoveButton, _super);
    function LayerRemoveButton(props) {
        return _super.call(this, props) || this;
    }
    LayerRemoveButton.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.item },
            React.createElement("div", { onClick: function () {
                    if (!_this.props.disabled) {
                        _this.props.action();
                    }
                }, className: this.props.disabled ? styles.item__del_disabled : styles.item__del },
                React.createElement("span", { className: "material-icons" }, "clear"))));
    };
    return LayerRemoveButton;
}(React.Component));
exports.LayerRemoveButton = LayerRemoveButton;
//# sourceMappingURL=LayerRemoveButton.js.map