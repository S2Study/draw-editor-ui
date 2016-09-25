import * as React from 'react';
import * as styles from './CanvasContainerStyle.scss';
export class CanvasContainer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        let style = {
            width: this.props.editor.getWidth(),
            height: this.props.editor.getHeight()
        };
        return (React.createElement("div", {className: styles.container}, React.createElement("div", {style: style, className: styles.container__background}, React.createElement("div", {style: style, id: this.props.id, className: styles.container__canvas}))));
    }
}
export default CanvasContainer;
//# sourceMappingURL=CanvasContainer.js.map