import drawchat from "@s2study/draw-api";

import DrawchatEditor = drawchat.editor.DrawEditor;
import Color = drawchat.editor.Color;
import DrawchatLayers = drawchat.editor.DrawEditorLayers;
import DrawchatEditorProperties = drawchat.editor.DrawEditorProperties;
import DrawchatModeChanger = drawchat.editor.DrawEditorModeChanger;

import * as React from "react";
import * as ReactDOM from "react-dom";
import History from "@s2study/draw-history/lib";
import {EditorRoot} from "./EditorRoot";

const history = History.createInstance();
ReactDOM.render(
	<EditorRoot history={history}/>,
	document.getElementById("root")
);
