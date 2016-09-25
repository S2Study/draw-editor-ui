import * as React from 'react';
import * as styles from './LayersStyle.scss';
import { LayerRemoveButton } from "./remove/LayerRemoveButton";
import { LayerTab } from "./layer/LayerTab";
import { LayerAddButton } from "./add/LayerAddButton";
export class Layers extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", {className: styles.container}, React.createElement(LayerRemoveButton, {action: () => {
            this.props.remove(this.props.selected);
        }, disabled: !this.props.canRemove}), Array.apply(0, Array(this.props.count)).map((el, i) => {
            return React.createElement(LayerTab, {key: i, selected: i === this.props.selected, select: () => {
                this.props.select(i);
            }});
        }), React.createElement(LayerAddButton, {action: () => {
            this.props.add();
        }, disabled: !this.props.canAdd})));
    }
}
//# sourceMappingURL=Layers.js.map