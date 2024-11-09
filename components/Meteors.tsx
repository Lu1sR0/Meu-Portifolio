import Meteors from "@/components/ui/meteors";

export function MeteorDemo() {
  return (
    <div className="relative flex h-screen w-full flex-col items-center justify-center pointer-events-none z-10">
      <Meteors number={30} />
    </div>
  );
}
