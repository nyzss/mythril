import Settings from "../Settings/Settings";

const SidebarProfile = () => {
  return (
    <Settings>
      <div className="sticky inset-x-0 bottom-0 border-t dark:border-neutral-800 rounded-t-2xl dark:bg-neutral-950">
        <div className="flex items-center gap-2 p-4 hover:bg-neutral-200 dark:hover:bg-neutral-900/20 rounded-t-2xl">
          <img
            alt="Man"
            src="https://source.unsplash.com/random/?korea,night"
            className="h-10 w-10 rounded-full object-cover"
          />

          <div className="">
            <p className="text-xs">
              <strong className="block font-medium">Okan Emre Koca</strong>

              <span className="opacity-50"> oknakoca@gmail.com </span>
            </p>
          </div>
        </div>
      </div>
    </Settings>
  );
};

export default SidebarProfile;
