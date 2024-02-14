'use client'
import { ReactElement, useEffect, useState } from "react";
import MangaCard from "./MangaCard";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import { Loader2 } from "lucide-react";
import { TManga } from "../shared/types";

function FeaturedManga(): ReactElement {
  const items: TManga[] = [
    {name: "Featured manga", description: "jasduikw", rating: 4.5},
    {name: "Featured manga", description: "jasduikw", rating: 4.5},
    {name: "Featured manga", description: "jasduikw", rating: 4.5},
    {name: "Featured manga", description: "jasduikw", rating: 4.5},
    {name: "Featured manga", description: "jasduikw", rating: 3.2},
    {name: "Featured manga", description: "jasduikw", rating: 3.2},
    {name: "Featured manga", description: "jasduikw", rating: 3.2},
    {name: "Featured manga", description: "jasduikw", rating: 4.5},
    {name: "Featured manga", description: "jasduikw", rating: 2.5},
    {name: "Featured manga", description: "jasduikw", rating: 2.5},
    {name: "Featured manga", description: "jasduikw", rating: 2.5},
    {name: "Featured manga", description: "jasduikw", rating: 4.5},
    {name: "Featured manga", description: "jasduikw", rating: 4.5},
  ]
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
    }, 3000)
  }, [])

  return (
    <section className="bg-card py-2 overflow-hidden rounded-lg">
      <div className="px-4">
        <h1 className="text-xl">Featured Mangas</h1>
        <h3 >Most viewed this week</h3>
      </div>
      <div className={`${loading ? 'flex justify-center' : 'px-16'}`}>
        {loading ? (
            <Loader2 className="animate-spin h-8 w-8 mr-3 stroke-blue-500"/>
          ) : (
            <Carousel>
              <CarouselContent className="py-2 px-1">
                  {items.map(manga => (
                    <CarouselItem className="md:basis-1/4 xl:basis-1/4 2xl:basis-2/12" key={Math.random()}>
                      <MangaCard key={Math.random()} manga={manga} />
                    </CarouselItem>
                  ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
        )}
      </div>
    </section>
  )
} 

export default FeaturedManga