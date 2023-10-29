import Settings from "../Settings/Settings";

const SidebarProfile = () => {
  return (
    <Settings>
      <div className="sticky inset-x-0 bottom-0 border-t dark:border-neutral-800 rounded-t-2xl dark:bg-neutral-950 cursor-pointer">
        <div className="flex items-center gap-2 p-4 hover:bg-neutral-200 dark:hover:bg-neutral-900/20 rounded-t-2xl">
          <img
            alt="Man"
            src="https://source.unsplash.com/random/?korea,night"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="">
            <p className="text-xs">
              <strong className="block font-medium">username</strong>

              <span className="opacity-50"> settings </span>
            </p>
          </div>
        </div>
      </div>
    </Settings>
  );
};

export default SidebarProfile;
