import * as api from "@s2study/draw-api";
import Message = api.structures.Message;
import DrawHistory = api.history.DrawHistory;
import DrawHistoryEditSession = api.history.DrawHistoryEditSession;

import * as React from "react";
import * as ReactDOM from "react-dom";
import {ViewerUI} from "./ViewerUI";
import History from "@s2study/draw-history/lib";

export function renderHistory(
	history: DrawHistory,
	id: string,
	width?: number,
	height?: number
) {
	ReactDOM.render(
		<ViewerUI
			history={history}
			canvasWidth = {width}
			canvasHeight = {height}
		/>,
		document.getElementById(id)
	);
}

export function renderMessage(
	id: string,
	message: Message,
	width?: number,
	height?: number
) {
	const history = History.createInstance();
	history.lock().then((
		session: DrawHistoryEditSession
	) => {
		try {
			if (message.canvas != null) {
				// const builder = session.addMoment();
				message.canvas.forEach((layer, index) => {
					session.addLayer(layer);
					// builder.putLayerMoment(String(index))
					// 	.addDraws(layer.draws)
					// 	.setTransForm(layer.transform)
					// 	.setClip(layer.clip).commit();
				});
				// builder.commit();
			}
		} finally {
			session.release();
		}
		renderHistory(
			history,
			id,
			width,
			height
		);
	});
}
