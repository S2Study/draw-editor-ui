import * as drawchat from "@s2study/draw-api";

import DrawchatRenderer = drawchat.renderer.DrawchatRenderer;
import DrawHistory = drawchat.history.DrawHistory;
import Message = drawchat.structures.Message;
import DrawchatViewer = drawchat.viewer.DrawchatViewer;

import * as React from "react";
import Renderer from "@s2study/draw-canvas2d-renderer";
import {Viewer} from "@s2study/draw-viewer/lib/Viewer";
import uuid from "./UUID";

export class ViewerUIState {

	viewer: DrawchatViewer;
	width: number;
	height: number;
	canvasId: string;

	constructor(
		viewer: DrawchatViewer,
		canvasId: string,
		width: number,
		height: number
	) {
		this.viewer = viewer;
		this.canvasId = canvasId;
		this.width = width;
		this.height = height;
	}
}

export interface ViewerUIProps {
	history: DrawHistory;
	canvasElement?: string;
	canvasWidth?: number;
	canvasHeight?: number;
}

function createState(
	props: ViewerUIProps
): ViewerUIState {

	const canvasId = props.canvasElement == null ? uuid() : props.canvasElement;
	const width = props.canvasWidth == null ? 600 : props.canvasWidth;
	const height = props.canvasHeight == null ? 400 : props.canvasHeight;
	const renderer = Renderer.createDOMRenderer(
		canvasId,
		width,
		height
	);
	const viewer = new Viewer(props.history, renderer);
	return new ViewerUIState(
		viewer,
		canvasId,
		width,
		height
	);
}

export class ViewerUI extends React.Component<ViewerUIProps, ViewerUIState> {

	constructor(props: ViewerUIProps) {
		super(props);
		this.state = createState(props);
	}

	componentWillReceiveProps(nextProps: ViewerUIProps): void {
		this.setState(createState(nextProps));
	}

	componentDidMount(): void {
		this.state.viewer.refresh();
	}

	render() {
		const styles = {
			container: {
				position: "relative",
				width: this.state.width,
				height: this.state.height
			},
			canvas: {
				position: "relative"
			}
		};
		return (
			<div style={styles.container}>
				<div style={styles.canvas} id={this.state.canvasId}/>
			</div>
		);
	}
}
export default ViewerUI;
