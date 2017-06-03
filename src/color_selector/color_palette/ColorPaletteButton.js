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
var styles = require("./ColorPaletteButtonStyle.css");
var ColorPalette = (function (_super) {
    __extends(ColorPalette, _super);
    function ColorPalette(props) {
        var _this = _super.call(this, props) || this;
        _this.state = {};
        return _this;
    }
    ColorPalette.prototype.render = function () {
        return (React.createElement("div", { className: styles.item },
            React.createElement("div", { className: styles.item__circle },
                React.createElement("div", { className: styles.item__circle_cell },
                    React.createElement("span", { className: "material-icons" }, "palette")))));
    };
    return ColorPalette;
}(React.Component));
exports.ColorPalette = ColorPalette;
//# sourceMappingURL=ColorPaletteButton.js.map