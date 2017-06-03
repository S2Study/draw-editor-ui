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
var styles = require("./MenuBarStyle.css");
var RedoButton_1 = require("./redo/RedoButton");
var UndoButton_1 = require("./undo/UndoButton");
var SaveButton_1 = require("./save/SaveButton");
var MenuBar = (function (_super) {
    __extends(MenuBar, _super);
    function MenuBar(props) {
        return _super.call(this, props) || this;
    }
    MenuBar.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: styles.container },
            React.createElement(RedoButton_1.RedoButton, { action: function () {
                    _this.props.redo();
                }, disabled: !this.props.canRedo }),
            React.createElement(UndoButton_1.UndoButton, { action: function () {
                    _this.props.undo();
                }, disabled: !this.props.canUndo }),
            React.createElement(SaveButton_1.SaveButton, { action: function () {
                    _this.props.save();
                }, disabled: !this.props.canSave })));
    };
    return MenuBar;
}(React.Component));
exports.MenuBar = MenuBar;
//# sourceMappingURL=MenuBar.js.map