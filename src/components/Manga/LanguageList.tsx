import { TranslatedLanguage } from "../../types/chapter";
import { Listbox } from "@headlessui/react";
import { useAtom } from "jotai";
import { userPreferencesAtom } from "../../utils/atoms";
import { ChevronDown } from "lucide-react";
import Button from "../Main/Button";

const LanguageList = ({ list }: { list: TranslatedLanguage[] }) => {
  const [user, setUser] = useAtom(userPreferencesAtom);

  const setLanguage = (t: TranslatedLanguage) => {
    setUser((prev) => ({ ...prev, preferredLanguage: t }));
  };

  const currentLanguage = user.preferredLanguage?.toUpperCase();

  return (
    <Listbox value={user.preferredLanguage} onChange={setLanguage}>
      <Listbox.Button>
        <Button variant="secondary" className="flex flex-row">
          {currentLanguage || "language"}
          <span>
            <ChevronDown />
          </span>
        </Button>
      </Listbox.Button>
      <div className="relative">
        <Listbox.Options className="bg-neutral-100 dark:bg-neutral-900 absolute border-2 border-neutral-950 dark:border-neutral-600 rounded-md">
          <Listbox.Option
            value={undefined}
            disabled={!list}
            className="px-6 py-4 flex justify-center items-center dark:bg-neutral-950/30 rounded-lg hover:bg-rose-400/50  cursor-pointer"
          >
            none
          </Listbox.Option>
          {list.map((lang, index) => (
            <Listbox.Option
              key={index}
              value={lang}
              disabled={!lang}
              className="px-6 py-4 flex justify-center items-center dark:bg-neutral-950/30 rounded-lg hover:bg-rose-400/50  cursor-pointer"
            >
              {lang.toUpperCase()}
            </Listbox.Option>
          ))}
        </Listbox.Options>
      </div>
    </Listbox>
  );
};

export default LanguageList;
