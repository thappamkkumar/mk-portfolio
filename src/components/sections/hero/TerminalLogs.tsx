import { terminalLogs } from "@/data/terminalLogs";

export default function TerminalLogs() {
  return (
    <div className="mt-8 space-y-4 font-mono text-sm">
      <div className="text-zinc-300">
        <span className="text-lime-400">
          {">"}
        </span>{" "}
        boot: initializing developer profile...
      </div>

      <div className="space-y-3 pt-4">
        {terminalLogs.map((item) => (
          <div
            key={item.label}
            className="flex items-center justify-between"
          >
            <span className="text-zinc-400">
              {item.label}
            </span>

            <span className="text-lime-400">
              {item.status}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
