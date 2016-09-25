import * as React from 'react';
import * as styles from './MenuBarStyle.scss';
import { RedoButton } from "./redo/RedoButton";
import { UndoButton } from "./undo/UndoButton";
import { SaveButton } from "./save/SaveButton";
export class MenuBar extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", {className: styles.container}, React.createElement(RedoButton, {action: () => { this.props.redo(); }, disabled: !this.props.canRedo}), React.createElement(UndoButton, {action: () => { this.props.undo(); }, disabled: !this.props.canUndo}), React.createElement(SaveButton, {action: () => { this.props.save(); }, disabled: !this.props.canSave})));
    }
}
//# sourceMappingURL=MenuBar.js.map