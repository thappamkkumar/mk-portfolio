export const getActiveSection = (
  entries: IntersectionObserverEntry[],
  setActiveSection: (value: string) => void
) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      setActiveSection(`#${entry.target.id}`);
    }
  });
};
