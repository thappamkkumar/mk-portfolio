export default function TerminalHeader() {
  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center gap-2">
        <div className="h-3 w-3 rounded-full bg-red-400" />

        <div className="h-3 w-3 rounded-full bg-yellow-400" />

        <div className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      <div className="ml-4 text-xs text-zinc-400">
        system@portfolio
      </div>
    </div>
  );
}
