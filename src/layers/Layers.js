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
var styles = require("./LayersStyle.css");
var LayerRemoveButton_1 = require("./remove/LayerRemoveButton");
var LayerTab_1 = require("./layer/LayerTab");
var LayerAddButton_1 = require("./add/LayerAddButton");
var Layers = (function (_super) {
    __extends(Layers, _super);
    function Layers(props) {
        return _super.call(this, props) || this;
    }
    Layers.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.container },
            React.createElement(LayerRemoveButton_1.LayerRemoveButton, { action: function () {
                    _this.props.remove(_this.props.selected);
                }, disabled: !this.props.canRemove }),
            Array.apply(0, Array(this.props.count)).map(function (el, i) {
                return React.createElement(LayerTab_1.LayerTab, { key: i, selected: i === _this.props.selected, select: function () {
                        _this.props.select(i);
                    } });
            }),
            React.createElement(LayerAddButton_1.LayerAddButton, { action: function () {
                    _this.props.add();
                }, disabled: !this.props.canAdd })));
    };
    return Layers;
}(React.Component));
exports.Layers = Layers;
//# sourceMappingURL=Layers.js.map