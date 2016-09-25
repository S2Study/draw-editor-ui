import * as React from 'react';
import * as styles from './EditorMainStyle.scss';
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}
export class EditorMainState {
    constructor(editor) {
        this.editor = editor;
    }
}
export class EditorMain extends React.Component {
    constructor(props) {
        super(props);
        this.state = new EditorMainState(props.editor);
    }
    componentDidMount() {
        this.state.editor.reRender();
        this.state.editor.start();
        let element = document.getElementById(this.props.id);
        this.state.mouseMove = (event) => {
            if (!this.state.click) {
                return;
            }
            this.state.moving = true;
            let point = this.getOffset(element, event);
            this.props.editor.canvas.touchMove(point.x, point.y);
        };
        this.state.mouseDown = (event) => {
            this.state.click = true;
            let point = this.getOffset(element, event);
            this.props.editor.canvas.touchStart(point.x, point.y);
        };
        this.state.mouseUp = (event) => {
            this.drop(element, event);
        };
        this.state.mouseOut = (event) => {
            if (!this.state.moving) {
                return;
            }
            this.drop(element, event);
        };
        element.addEventListener('mousemove', this.state.mouseMove);
        element.addEventListener('mousedown', this.state.mouseDown);
        document.addEventListener('mouseup', this.state.mouseUp);
        element.addEventListener('mouseout', this.state.mouseOut);
    }
    getCursor() {
        let mode = this.state.editor.mode;
        switch (mode.getMode()) {
            case mode.CHANGING:
                return "wait";
            case mode.CLIP_MODE:
                return "url(http://test.png),crosshair";
            case mode.ERASER_MODE:
                return "url(http://test.png),default";
            case mode.EYEDROPPER_MODE:
                return "url(http://test.png),default";
            case mode.FILL_MODE:
                return "url(http://test.png),default";
            case mode.TEXT_MODE:
                return "url(http://test.png),text";
            case mode.STROKE_MODE:
                return "url(http://test.png),default";
            case mode.HAND_TOOL_MODE:
                return "url(http://test.png),move";
            default:
                return "auto";
        }
    }
    drop(element, event) {
        this.state.click = false;
        this.state.moving = false;
        let point = this.getOffset(element, event);
        this.props.editor.canvas.touchEnd(point.x, point.y);
    }
    componentWillMount() {
        this.state.editor.stop();
        let element = document.getElementById(this.props.id);
        if (element == null) {
            return;
        }
        element.removeEventListener('mousemove', this.state.mouseMove);
        element.removeEventListener('mousedown', this.state.mouseDown);
        document.removeEventListener('mouseup', this.state.mouseUp);
        element.removeEventListener('mouseout', this.state.mouseOut);
        this.state.mouseMove = null;
        this.state.mouseDown = null;
        this.state.mouseUp = null;
    }
    getOffset(element, event) {
        let mouseX = event.pageX;
        let mouseY = event.pageY;
        let rect = element.getBoundingClientRect();
        let positionX = rect.left + window.pageXOffset;
        let positionY = rect.top + window.pageYOffset;
        return new Point(mouseX - positionX, mouseY - positionY);
    }
    render() {
        let style = {
            width: this.props.editor.getWidth(),
            height: this.props.editor.getHeight(),
            cursor: this.getCursor()
        };
        return (React.createElement("div", {className: styles.container}, React.createElement("div", {style: style, className: styles.container__background}, React.createElement("div", {style: style, id: this.props.id, className: styles.container__canvas}))));
    }
}
export default EditorMain;
//# sourceMappingURL=EditorMain.js.map