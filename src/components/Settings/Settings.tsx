import { useSetAtom } from "jotai";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { userPreferencesAtom } from "../../utils/atoms";

const Settings = ({ children }: { children: React.ReactNode }) => {
  let [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  const setUserPreferences = useSetAtom(userPreferencesAtom);

  const toggleColorMode = () => {
    setUserPreferences((prev) =>
      prev.colorMode === "dark"
        ? { ...prev, colorMode: "light" }
        : { ...prev, colorMode: "dark" }
    );
  };

  return (
    <>
      <div onClick={openModal}>{children}</div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25 dark:bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-neutral-950 p-6 text-left align-middle shadow-xl transition-all ">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-neutral-950 dark:text-neutral-50"
                  >
                    Settings
                  </Dialog.Title>

                  <button
                    className="px-3 py-2 font-bold text-xl rounded-md bg-neutral-200 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-100"
                    onClick={toggleColorMode}
                  >
                    Toggle dark mode
                  </button>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Settings;
