import * as React from 'react';
import * as styles from './ModeChangerStyle.scss';
import { BrushToolButton } from "./brush/BrushToolButton";
import { FillToolButton } from "./fill/FillToolButton";
import { HandToolButton } from "./hand/HandToolButton";
import { TextToolButton } from "./text/TextToolButton";
import { ClipToolButton } from "./clip/ClipToolButton";
import { EyedropperToolButton } from "./eyedropper/EyedropperToolButton";
import { EraserToolButton } from "./eraser/EraserToolButton";
export class ModeItem {
    constructor(mode, thickness, selected) {
        this.mode = mode;
        this.selected = selected;
        this.thickness = thickness;
    }
}
export class ModeChanger extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", {className: styles.container}, this.props.modeItems.map((item, i) => {
            switch (item.mode) {
                case this.props.changer.STROKE_MODE:
                    return React.createElement(BrushToolButton, {editorProperties: this.props.editorProperties, key: i, selected: item.selected, thickness: item.thickness, onSelect: () => {
                        this.props.onSelect(i);
                    }});
                case this.props.changer.FILL_MODE:
                    return React.createElement(FillToolButton, {editorProperties: this.props.editorProperties, key: i, selected: item.selected, onSelect: () => {
                        this.props.onSelect(i);
                    }});
                case this.props.changer.HAND_TOOL_MODE:
                    return React.createElement(HandToolButton, {editorProperties: this.props.editorProperties, key: i, selected: item.selected, onSelect: () => {
                        this.props.onSelect(i);
                    }});
                case this.props.changer.TEXT_MODE:
                    return React.createElement(TextToolButton, {editorProperties: this.props.editorProperties, key: i, selected: item.selected, onSelect: () => {
                        this.props.onSelect(i);
                    }});
                case this.props.changer.CLIP_MODE:
                    return React.createElement(ClipToolButton, {key: i, selected: item.selected, onSelect: () => {
                        this.props.onSelect(i);
                    }});
                case this.props.changer.EYEDROPPER_MODE:
                    return React.createElement(EyedropperToolButton, {editorProperties: this.props.editorProperties, key: i, selected: item.selected, onSelect: () => {
                        this.props.onSelect(i);
                    }});
                case this.props.changer.ERASER_MODE:
                    return React.createElement(EraserToolButton, {editorProperties: this.props.editorProperties, key: i, selected: item.selected, onSelect: () => {
                        this.props.onSelect(i);
                    }});
                default:
                    return null;
            }
        })));
    }
}
//# sourceMappingURL=ModeChanger.js.map