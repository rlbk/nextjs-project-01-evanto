import { ArrowLeftIcon, ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";

type TPaginationControlsProps = {
  nextPath: string;
  previousPath: string;
};

const PaginationControls = ({
  nextPath,
  previousPath,
}: TPaginationControlsProps) => {
  return (
    <section className="flex justify-between w-full">
      {!!previousPath ? (
        <Link
          href={previousPath}
          className="text-white px-5 py-3 bg-white/5 rounded-md opacity-75 flex items-center gap-x-2 hover:opacity-100 transition text-sm"
        >
          <ArrowLeftIcon /> Previous
        </Link>
      ) : (
        <div></div>
      )}
      {!!nextPath && (
        <Link
          href={nextPath}
          className="text-white px-5 py-3 bg-white/5 rounded-md opacity-75 flex items-center gap-x-2 hover:opacity-100 transition text-sm"
        >
          Next <ArrowRightIcon />
        </Link>
      )}
    </section>
  );
};

export default PaginationControls;
