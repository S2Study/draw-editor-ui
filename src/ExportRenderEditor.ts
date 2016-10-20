import * as api from "@s2study/draw-api";
import Message = api.structures.Message;

import RenderEditor from "./RenderEditor";
import * as RenderViewer from "./RenderViewer";
import History from "@s2study/draw-history/lib";
import DrawHistoryEditSession = api.history.DrawHistoryEditSession;

const s2study: any = (<any>window).s2study ? (<any>window).s2study : {};
if (!(<any>window).s2study) {
	(<any>window).s2study = s2study;
}
if (!s2study.draw) {
	s2study.draw = {};
}

s2study.draw.loadEditor = (
	id: string = "root",
	saveJSON: (message: Message) => any = null,
	width?: number,
	height?: number,
	disableDownload: boolean = true,
) => {
	const history = History.createInstance();
	RenderEditor(
		history,
		id,
		width,
		height,
		saveJSON,
		disableDownload
	);
};

s2study.draw.render = (
	id: string,
	message: Message,
	width?: number,
	height?: number,
) => {
	RenderViewer.renderMessage(id, message, width, height);
};

