import * as drawchat from "@s2study/draw-api";
import Message = drawchat.structures.Message;
import DrawHistory = drawchat.history.DrawHistory;

import * as React from "react";
import * as ReactDOM from "react-dom";
import {EditorRoot} from "./EditorRoot";

export default function (
	history: DrawHistory,
	width?: number,
	height?: number,
	id: string = "root",
	saveJSON: (message: Message) => any = null,
	disableDownload: boolean = true
): void {
	ReactDOM.render(
		<EditorRoot
			history={history}
			save={saveJSON}
			disableDownload = {disableDownload}
			canvasWidth = {width}
			canvasHeight = {height}
		/>,
		document.getElementById(id)
	);
}
