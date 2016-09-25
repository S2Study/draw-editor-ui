import DrawchatEditor = drawchat.editor.DrawchatEditor;
import Color = drawchat.editor.Color;
import DrawchatLayers = drawchat.editor.DrawchatLayers;
import DrawchatEditorProperties = drawchat.editor.DrawchatEditorProperties;
import DrawchatModeChanger = drawchat.editor.DrawchatModeChanger;

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import History from "@s2study/draw-history/lib";
import {EditorRoot} from "./EditorRoot";

const history = History.createInstance();
ReactDOM.render(
	<EditorRoot history={history}/>,
	document.getElementById("root")
);
