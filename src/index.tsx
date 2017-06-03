import * as API from "@s2study/draw-api/lib";
import * as React from "react";
import {EditorRoot, EditorRootProps} from "./EditorRoot";
import {ReactElement} from "react";

export * from "./EditorRoot";
export {EditorRoot} from "./EditorRoot";
export class EditorRootFactory {
	static createInstance(
		history: API.history.DrawHistory,
		canvasElement?: string,
		canvasWidth?: number,
		canvasHeight?: number
	): ReactElement<EditorRootProps> {
		return <EditorRoot
					history={history}
					canvasElement={canvasElement}
					canvasWidth={canvasWidth}
					canvasHeight={canvasHeight}
				/>;
	}
}
export default EditorRootFactory;
