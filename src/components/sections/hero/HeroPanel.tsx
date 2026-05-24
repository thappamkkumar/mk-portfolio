import TerminalHeader from "./TerminalHeader";
import TerminalLogs from "./TerminalLogs";
import StatusRow from "./StatusRow";
import TechStackCard from "./TechStackCard";

export default function HeroPanel() {
  return (
    <div className="flex flex-col p-5     ">
      <TerminalHeader />

      <TerminalLogs />

      <StatusRow />

      <div className="mt-6">
        <TechStackCard />
      </div>

      
    </div>
  );
}
