import * as React from 'react';
import * as styles from './LayerTabStyle.scss';
export class LayerTab extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (React.createElement("div", {className: styles.item}, React.createElement("div", {onClick: () => { this.props.select(); }, className: this.props.selected ? styles.item__selected : styles.item__unselected}, (() => {
            if (this.props.selected) {
                return React.createElement("span", {className: "material-icons"}, "radio_button_checked");
            }
            return React.createElement("span", {className: "material-icons"}, "radio_button_unchecked");
        })())));
    }
}
//# sourceMappingURL=LayerTab.js.map