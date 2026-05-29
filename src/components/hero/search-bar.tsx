import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div
      className="
        mx-auto
        flex
        h-14
        w-full
        max-w-2xl
        items-center
        gap-3
        rounded-2xl
        border
        border-zinc-800
        bg-zinc-900/70
        px-5
        backdrop-blur-xl
        transition-all
        duration-300
        hover:border-zinc-700
      "
    >
      <Search
        className="
          h-5
          w-5
          text-zinc-500
        "
      />

      <input
        type="text"
        placeholder="Search projects, skills or commands..."
        className="
          h-full
          w-full
          bg-transparent
          text-sm
          text-zinc-200
          outline-none
          placeholder:text-zinc-500
        "
      />

      <div
        className="
          hidden
          rounded-lg
          border
          border-zinc-700
          bg-zinc-800
          px-2
          py-1
          text-xs
          text-zinc-400
          sm:block
        "
      >
        ⌘ K
      </div>
    </div>
  );
};

export default SearchBar;
