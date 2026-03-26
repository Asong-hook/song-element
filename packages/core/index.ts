import { makeInstall } from "@song-element/utils";
import components from "./components";

const install = makeInstall(components);

export * from "./components";
export default install;
