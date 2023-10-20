import { atomWithStorage } from "jotai/utils";
import { ColorMode } from "../types/types";

const colorModeAtom = atomWithStorage<ColorMode>("colorMode", "dark");

export { colorModeAtom };
