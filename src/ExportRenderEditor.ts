import * as api from "@s2study/draw-api";
import Message = api.structures.Message;

import RenderEditor from "./RenderEditor";
import History from "@s2study/draw-history/lib";

const history = History.createInstance();
const s2study: any = (<any>window).s2study ? (<any>window).s2study : {};
if (!(<any>window).s2study) {
	(<any>window).s2study = s2study;
}

s2study.render = (
	saveJSON: (message: Message) => any = null,
	width?: number,
	height?: number,
	disableDownload: boolean = true,
	id: string = "root"
) => {
	RenderEditor(
		history,
		width,
		height,
		id,
		saveJSON,
		disableDownload
	);
};

