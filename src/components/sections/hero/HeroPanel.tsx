import TerminalHeader from "./TerminalHeader";
import TerminalLogs from "./TerminalLogs";
import StatusRow from "./StatusRow";
import TechStackCard from "./TechStackCard";

export default function HeroPanel() {
  return (
    <div className="flex flex-col p-5 sm:p-7">
      <TerminalHeader />

      <TerminalLogs />

      <StatusRow />

      <div className="mt-6">
        <TechStackCard />
      </div>

      <div className="mt-auto pt-6">
        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-500">
          <span>// building</span>
          <span>•</span>
          <span>learning</span>
          <span>•</span>

          <span className="text-lime-400">
            shipping
          </span>
        </div>
      </div>
    </div>
  );
}
