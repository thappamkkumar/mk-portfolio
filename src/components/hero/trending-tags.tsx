const tags = [
  "Next.js",
  "TypeScript",
  "Realtime Apps",
  "System Design",
  "WebSockets",
  "PostgreSQL",
];

const TrendingTags = () => {
  return (
    <div
      className="
        flex
        flex-wrap
        items-center
        justify-center
        gap-3
      "
    >
      {tags.map((tag) => (
        <button
          key={tag}
          className="
            rounded-full
            border
            border-zinc-800
            bg-zinc-900/70
            px-4
            py-2
            text-xs
            text-white
            backdrop-blur-xl
            transition-all
            duration-300
            cursor-pointer
            hover:border-zinc-700
            hover:bg-zinc-800
            hover:text-zinc-200
          "
        >
          <span className="text-emerald-400 pe-2">#</span>
          {tag}
        </button>
      ))}
    </div>
  );
};

export default TrendingTags;
