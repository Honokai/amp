'use client';
import Comment from "@/components/shared/Comment";
import Comments from "@/components/shared/Comments";
import Rating from "@/components/shared/Rating";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation"

function Page() {
  const params = useParams()
  const manga_name = decodeURIComponent(params.manga_name as string)
  const rating = 2
  
  return (
    <div className="py-6">
      <div className="m-auto">
        <div className="container">
          <div className="flex">
            <span>
              <Image src="https://m.media-amazon.com/images/I/51CcaF9O78L._SY445_SX342_.jpg" className="m-auto rounded" width={200} height={400} alt={`Manga cover for ${manga_name}`}/>
            </span>
            <div className="ml-4">
              <h1 className="text-2xl">{manga_name}</h1>
              <div className="flex flex-col mt-2">
                Status: <span className="text-success">Ongoing</span>
              </div>
              <div className="flex flex-col mt-2">
                Chapters: <span>215</span>
              </div>
              <div className="flex flex-col mt-2">
                Current chapter: <span>215</span>
              </div>
              <div className="flex flex-col mt-2">
                <span className="text-primary">Rating</span>
                <Rating enabled alwaysVisible={true} rating={rating}/>
              </div>
            </div>
          </div>
          <div>
            <span className="text-lg">Chapters available</span>
            <hr className="my-2" />
            <ScrollArea className="h-60 border border-secondary/50 p-4 mt-2 rounded">
              {Array(100).fill(1).map((i, index) => (
                <Link className="hover:text-accent block" href={"#"} key={index}>Test {index}</Link>
              ))}
            </ScrollArea>
          </div>
          <Comments />
        </div>
      </div>
    </div>
  )  
}

export default Page