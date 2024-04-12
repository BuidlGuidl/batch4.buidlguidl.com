import Link from "next/link";
import { Batch4Address } from "./Batch4Address";
import { Batch4Avatar } from "./Batch4Avatar";
import { useTheme } from "next-themes";
import { GlobeAltIcon } from "@heroicons/react/24/solid";

const Batch4AddressDisplay = ({ address, index }: { address: string; index: number }) => {
  const { resolvedTheme } = useTheme();
  const isDarkMode = resolvedTheme === "dark";

  return (
    <div className="flex flex-col items-center justify-center rounded-lg p-5 bg-base-content shadow-md">
      <div className="mx-auto h-32 w-32 rounded-full overflow-hidden shadow-lg mb-4 relative">
        <Batch4Avatar address={address} size={128} />
      </div>
      <h3 className="text-lg font-semibold text-center text-primary">Builder {index + 1}</h3>
      <div className="text-secondary text-sm text-center mt-1">
        <Batch4Address address={address} format="short" size="base" />
      </div>
      <div className="mt-4">
        <Link href={`/builders/${address}`} passHref>
          <button
            className={`flex items-center justify-center gap-2 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors cursor-pointer ${
              isDarkMode ? "bg-blue-600 text-white" : "bg-blue-200 text-black"
            }`}
          >
            <GlobeAltIcon className="h-6 w-6" />
            View Profile
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Batch4AddressDisplay;
