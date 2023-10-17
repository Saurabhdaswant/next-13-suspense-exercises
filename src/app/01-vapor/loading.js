import LibraryGameCardSkeleton from "@/components/LibraryGameCardSkeleton/LibraryGameCardSkeleton";

export default function Loading() {
  return (
    <section className="max-width-wrapper">
      <header className="library-header">
        <h1>My games</h1>
      </header>
      <div className="game-grid">
        {[...Array(8)].map(() => (
          <LibraryGameCardSkeleton />
        ))}
      </div>
    </section>
  );
}
