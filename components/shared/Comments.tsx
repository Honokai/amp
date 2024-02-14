import { ReactElement, useEffect, useState } from "react";
import Comment from "./Comment";
import { ScrollArea } from "../ui/scroll-area";
import { Skeleton } from "../ui/skeleton";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";

function Comments(): ReactElement {
 /**
  * @todo
  * call to api to recover comments for specific resource such as manga or anime
  */

  const comments = [
    {
      id: 543545,
      user: "someone's name",
      comment: "askdnjaslkjd laskj dlasjkld ",
      comments: [
        { id: 1232, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 343566, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 123, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 4242, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 434, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 55, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 5435, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
      ]
    },
    {
      id: 565,
      user: "someone's name",
      comment: "askdnjaslkjd laskj dlasjkld ",
      comments: [
        { id: 1232, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 343566, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 123, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 4242, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 434, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 55, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 5435, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
      ]
    },
    {
      id: 777,
      user: "someone's name",
      comment: "askdnjaslkjd laskj dlasjkld ",
      comments: [
        { id: 1232, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 343566, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 123, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 4242, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 434, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 55, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 5435, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
      ]
    },
    {
      id: 8686,
      user: "someone's name",
      comment: "askdnjaslkjd laskj dlasjkld ",
      comments: [
        { id: 1232, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 343566, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 123, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 4242, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 434, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 55, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
        { id: 5435, user: "someone's name", comment: "askdnjaslkjd laskj dlasjkld "},
      ]
    }
  ]

  const contador = comments.reduceRight((acc, value) => acc += value.comments.length + 1, 0)

  const [loading, setLoading] = useState(true)
  
  useEffect(() => {
    setTimeout(() => {
      setLoading(!loading)
    }, 3000)
  }, [])

  return (
    <div className="grid">
      <h1 className="py-2 text-lg">Comments {contador}</h1>
      {loading ? (
        <div className="grid gap-2 py-4">
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[400px]" />
              <Skeleton className="h-4 w-[300px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[400px]" />
              <Skeleton className="h-4 w-[300px]" />
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Skeleton className="h-12 w-12 rounded-full" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[400px]" />
              <Skeleton className="h-4 w-[300px]" />
            </div>
          </div>
        </div>
      ) : (
        <ScrollArea className="max-h-[50vh]">
          {comments.map((i, index) => (
            <div key={i.id}>
              <Comment />
              {i.comments.length > 0 ? (
                <Accordion type="single" collapsible className="px-4 py-0 m-0 w-full bg-secondary/20 mb-2">
                <AccordionItem value="item-1" className="border-0 ">
                  <AccordionTrigger className="py-2 hover:no-underline">Responses</AccordionTrigger>
                  <AccordionContent className="grid gap-2">
                    {i.comments?.map((i2, index2) => (
                      <Comment key={i2.id} />
                    ))}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              ) : ""}
            </div>
          ))}
        </ScrollArea>
      )}
    </div>
  )
}

export default Comments