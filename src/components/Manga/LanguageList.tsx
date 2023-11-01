import { TranslatedLanguage } from "../../types/chapter";
import { Listbox, Transition } from "@headlessui/react";
import { useAtom } from "jotai";
import { userPreferencesAtom } from "../../utils/atoms";
import { Check, ChevronDown } from "lucide-react";
import Button from "../Main/Button";
import { Fragment } from "react";

const LanguageList = ({ list }: { list: TranslatedLanguage[] }) => {
  const [user, setUser] = useAtom(userPreferencesAtom);

  const setLanguage = (t: TranslatedLanguage) => {
    setUser((prev) => ({ ...prev, preferredLanguage: t }));
  };

  const currentLanguage = user.preferredLanguage;

  return (
    <div className="w-full">
      <Listbox value={currentLanguage} onChange={setLanguage}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-neutral-700/80 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              Language: {currentLanguage || "all"}
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronDown className="h-5 w-5 text-gray-400" />
            </span>
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white dark:bg-neutral-800 py-1 text-base shadow-lg ring-1 ring-black/5 focus:outline-none sm:text-sm">
              <Listbox.Option
                value={null}
                disabled={!list}
                className={({ active }) =>
                  `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                    active
                      ? "bg-rose-300/30 dark:bg-rose-400/10 "
                      : "text-neutral-950 dark:text-neutral-100"
                  }`
                }
              >
                none
              </Listbox.Option>
              {list.map((lang, index) => {
                return (
                  <Listbox.Option
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-rose-300/30 dark:bg-rose-400/10 "
                          : "text-neutral-950 dark:text-neutral-100"
                      }`
                    }
                    key={index}
                    value={lang}
                    disabled={!lang}
                  >
                    {currentLanguage === lang ? (
                      <>
                        <span className="font-bold text-rose-400 uppercase">
                          {lang}
                        </span>
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-rose-400/90">
                          <Check className="text-rose-400" />
                        </span>
                      </>
                    ) : (
                      <span className="uppercase">{lang}</span>
                    )}
                  </Listbox.Option>
                );
              })}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default LanguageList;
