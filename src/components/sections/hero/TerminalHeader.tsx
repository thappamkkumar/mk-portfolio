export default function TerminalHeader() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400" />

        <div className="h-3 w-3 rounded-full bg-yellow-400" />

        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>
	<div className="h-3 w-[1px] bg-white/50" />
      <div className="  text-xs text-zinc-400">
        system@portfolio
      </div>
    </div>
  );
}
