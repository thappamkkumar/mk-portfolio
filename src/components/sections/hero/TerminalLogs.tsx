import { terminalLogs } from "@/data/terminalLogs";

export default function TerminalLogs() {
  return (
    <div className="mt-8 space-y-4 font-mono text-xs ">
      <div className="text-zinc-300">
        <span className="text-lime-300/80">
          {">"}
        </span>{" "}
        boot: initializing developer profile...
      </div>

      <div className="space-y-3 pt-4 max-w-[200px]  ">
        {terminalLogs.map((item) => (
          <div
            key={item.label}
            className="grid grid-cols-2 gap-2"
          >
            <div className="text-zinc-400">
              <span className="text-lime-300/80">
          		{">"}
		  </span>{" "} 
		  {item.label}
		</div>

            <div className="text-lime-300/80">
              {item.status}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
