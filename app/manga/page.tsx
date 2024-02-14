import FeaturedManga from "@/components/manga/FeaturedManga";
import MangaCard from "@/components/manga/MangaCard";
import { TManga } from "@/components/shared/types";
import { randomUUID } from "crypto";

export default function Page() {
  const items: TManga[] = [
    {name: "testes", description: "asdhaskjdhiqweowq owqe iqwoeuqwoeuoq", rating: 4.5},
    {name: "testes", description: "asdhaskjdhiqweowq owqe iqwoeuqwoeuoq", rating: 4.5},
    {name: "testes", description: "asdhaskjdhiqweowq owqe iqwoeuqwoeuoq", rating: 4.5},
    {name: "testes", description: "asdhaskjdhiqweowq owqe iqwoeuqwoeuoq", rating: 4.5},
    {name: "testes", description: "asdhaskjdhiqweowq owqe iqwoeuqwoeuoq", rating: 3.2},
    {name: "testes", description: "asdhaskjdhiqweowq owqe iqwoeuqwoeuoq", rating: 3.2},
    {name: "testes", description: "asdhaskjdhiqweowq owqe iqwoeuqwoeuoq", rating: 3.2},
    {name: "testes", description: "asdhaskjdhiqweowq owqe iqwoeuqwoeuoq", rating: 4.5},
    {name: "testes", description: "asdhaskjdhiqweowq owqe iqwoeuqwoeuoq", rating: 2.5},
    {name: "testes", description: "asdhaskjdhiqweowq owqe iqwoeuqwoeuoq", rating: 2.5},
    {name: "testes", description: "asdhaskjdhiqweowq owqe iqwoeuqwoeuoq", rating: 2.5},
    {name: "testes", description: "asdhaskjdhiqweowq owqe iqwoeuqwoeuoq", rating: 4.5},
    {name: "testes", description: "asdhaskjdhiqweowq owqe iqwoeuqwoeuoq", rating: 4.5},
  ]
  
  return (
    <main className="w-screen">
      <section>
        
      </section>
      <section className="flex sm:flex-col xl:flex-row" aria-label="manga-grid">
        <div className="min-w-[10vw]">sidebar</div>
        <section className="py-4 px-6 sm:px-2 [&>*:not(first)]:mt-3 max-w-[89vw]">
          <FeaturedManga/>
          <div className="grid sm:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-10 gap-5 max-w-full">
            {items.map(manga => (
              <MangaCard key={randomUUID()} manga={manga} />
            ))}
          </div>
        </section>
      </section>
    </main>
  )
}