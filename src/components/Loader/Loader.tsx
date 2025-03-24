import { Loader as LoaderIcon } from "lucide-react";

const Loader = () => {
  return (
    <div className="grid h-screen w-screen place-content-center">
      <LoaderIcon className="animate-spin" />
    </div>
  );
};

export default Loader;
