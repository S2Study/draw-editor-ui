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
var styles = require("./LayerTabStyle.css");
var LayerTab = (function (_super) {
    __extends(LayerTab, _super);
    function LayerTab(props) {
        return _super.call(this, props) || this;
    }
    LayerTab.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.item },
            React.createElement("div", { onClick: function () {
                    _this.props.select();
                }, className: this.props.selected ? styles.item__selected : styles.item__unselected }, (function () {
                if (_this.props.selected) {
                    return React.createElement("span", { className: "material-icons" }, "radio_button_checked");
                }
                return React.createElement("span", { className: "material-icons" }, "radio_button_unchecked");
            })())));
    };
    return LayerTab;
}(React.Component));
exports.LayerTab = LayerTab;
//# sourceMappingURL=LayerTab.js.map