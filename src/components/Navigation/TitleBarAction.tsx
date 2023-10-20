const Action = ({
  children,
  action,
}: {
  children: React.ReactNode;
  action: () => void;
}) => {
  return (
    <button
      className="inline-flex justify-center items-center w-10 h-10 hover:bg-neutral-200 dark:hover:bg-neutral-900"
      onClick={action}
    >
      {children}
    </button>
  );
};
export default Action;
