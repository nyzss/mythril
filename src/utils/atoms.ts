import { atomWithStorage } from "jotai/utils";
import { UserPreferences } from "../types/types";

export const userPreferencesAtom = atomWithStorage<UserPreferences>(
  "user-preferences",
  {
    colorMode: "dark",
  }
);

// manga history thingy that also syncs up according to the logged in id of the user etc..
