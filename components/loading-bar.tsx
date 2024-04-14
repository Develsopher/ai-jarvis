import Image from "next/image";

export const Loadingbar = () => {
  return (
    <div className="h-full flex flex-col gap-y-4 items-center justify-center">
      <div className="size-10 relative animate-spin">
        <Image alt="Logo" fill src="/logo.png" />
      </div>
    </div>
  );
};
