import { cn } from "@/lib/utils";

type TSkeletonProps = {
  className?: string;
};

const Skeleton = ({ className }: TSkeletonProps) => {
  return (
    <div
      className={cn(
        "animate-pulse h-4 w-[550px] rounded-md bg-white/5",
        className
      )}
    />
  );
};

export default Skeleton;
