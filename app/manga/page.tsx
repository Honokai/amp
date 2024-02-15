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
    <main className="w-screen flex">
      <section className="flex flex-1 sm:flex-col xl:flex-row" aria-label="manga-grid">
        <section className="py-4 px-6 sm:px-2 [&>*:not(first)]:mt-3 flex-[5] grid">
          <FeaturedManga/>
          <div className="grid sm:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-8 gap-5 max-w-full">
            {items.map(manga => (
              <MangaCard key={randomUUID()} manga={manga} />
            ))}
          </div>
        </section>
        <div className="flex-1">
          <h1>
            alkjdlaskjdlas
            asldkjasldjlasd
            asdkjasldj
          </h1>
        </div>
      </section>
    </main>
  )
}