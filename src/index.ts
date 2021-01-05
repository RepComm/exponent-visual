
import { Panel, EXPONENT_CSS_STYLES } from "@repcomm/exponent-ts";

import { Editor } from "./components/editor";

//Add the exponent styles
EXPONENT_CSS_STYLES.mount(document.head);

//Create a container panel for the elements
const container = new Panel()
.setId("container")
.mount(document.body);

const editor = new Editor()
.mount(container);
