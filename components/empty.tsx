import Image from "next/image";

interface EmptyProps {
  label: string;
}

export const Empty = ({ label }: EmptyProps) => {
  return (
    <div className="h-full p-20 flex flex-col items-center justify-center">
      <div className="relative size-72">
        <Image fill src="/empty.png" alt="Emopty" />
      </div>
      <p className="text-muted-foreground text-sm text-center mt-4">{label}</p>
    </div>
  );
};
