'use client'
import Image from "next/image";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card";
import Link from "next/link";
import Rating from "../shared/Rating";
import { TManga, TMangas } from "../shared/types";

type TMangaCardProps = {
  manga: TManga
}

function MangaCard({ manga }: TMangaCardProps) {
  const { name, rating, description } = manga

  return (
    <Link href={`/manga/${name}`}>
      <Card className="[&>*]:px-4 [&>*]:py-4 hover:bg-card-accent group hover:scale-[1.01] transition-transform duration-200">
        <CardHeader>
          <Image className="m-auto rounded" width={125} height={250} src="https://m.media-amazon.com/images/I/51CcaF9O78L._SY445_SX342_.jpg" alt="Manga cover image" />
        </CardHeader>
        <CardContent>
          <CardTitle>{name}</CardTitle>
          <CardDescription className="group-hover:text-wrap">{description}</CardDescription>
          <Rating rating={rating}/>
        </CardContent>
      </Card>
    </Link>
  )
}

export default MangaCard