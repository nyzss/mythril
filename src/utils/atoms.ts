import { atomWithStorage } from "jotai/utils";
import { ColorMode } from "../types/types";

const colorModeAtom = atomWithStorage<ColorMode>("colorMode", "dark");

// manga history thingy that also syncs up according to the logged in id of the user etc..

export { colorModeAtom };
