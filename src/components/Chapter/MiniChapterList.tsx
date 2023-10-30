import { Fragment, useState } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { Check, ChevronDown } from "lucide-react";
import { TChapter } from "../../types/chapter";
import { Link } from "react-router-dom";
import Button from "../Main/Button";

const MiniChapterList = ({
  chapters,
  current,
}: {
  chapters: TChapter[] | undefined;
  current: string;
}) => {
  if (!chapters) return <>Loading...</>;
  const currentSelected = chapters.find((chap) => chap.id === current);
  const [selected, setSelected] = useState(currentSelected || chapters[0]);

  return (
    <div className="w-36">
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white dark:bg-neutral-800 py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white/75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm">
            <span className="block truncate">
              {selected.attributes.chapter}{" "}
              <span>{selected.attributes.title}</span>
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
              {chapters.map((chapter) => (
                <Link to={"/chapter/" + chapter.id} key={chapter.id}>
                  <Listbox.Option
                    className={({ active }) =>
                      `relative cursor-pointer select-none py-2 pl-10 pr-4 ${
                        active
                          ? "bg-rose-300/30 dark:bg-rose-400/10 "
                          : "text-neutral-950 dark:text-neutral-100"
                      }`
                    }
                    value={chapter}
                  >
                    {({ selected }) => (
                      <>
                        <span
                          className={`block truncate  ${
                            selected ? "font-medium" : "font-normal"
                          }`}
                        >
                          {chapter.attributes.chapter}
                        </span>
                        {selected ? (
                          <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-rose-400/90">
                            <Check className="text-rose-400" />
                            {/* <CheckIcon className="h-5 w-5" aria-hidden="true" /> */}
                          </span>
                        ) : null}
                      </>
                    )}
                  </Listbox.Option>
                </Link>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};
export default MiniChapterList;
