'use client'
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { ReactElement } from "react";

export default function Viewer(): ReactElement {
  return (
    <div className="p-2">
      <div className="flex px-1 justify-center">
        <div className="flex items-center text-sm">
          <span className="mr-2">Reading</span>
          <Select defaultValue="apple">
            <SelectTrigger className="w-[180px]">
              <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Fruits</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline" className="ml-2 px-2 py-1"><ArrowLeft width={15}/>Prev</Button>
        <Button variant="outline" className="ml-2 px-2 py-1">Next<ArrowRight width={15}/></Button>
      </div>
      <ScrollArea className="h-[80vh] pt-4">
        <section className="container flex flex-col items-center [&>*:not(first)]:mt-2">
          <Image src={"https://sm.ign.com/t/ign_pt/screenshot/default/jujutsu-kaisen-0-personagens-principais_f7ny.1920.jpg"} height={1000} width={500} alt="page of manga"/>
          <Image src={"https://sm.ign.com/t/ign_pt/screenshot/default/jujutsu-kaisen-0-personagens-principais_f7ny.1920.jpg"} height={1000} width={500} alt="page of manga"/>
          <Image src={"https://sm.ign.com/t/ign_pt/screenshot/default/jujutsu-kaisen-0-personagens-principais_f7ny.1920.jpg"} height={1000} width={500} alt="page of manga"/>
          <Image src={"https://sm.ign.com/t/ign_pt/screenshot/default/jujutsu-kaisen-0-personagens-principais_f7ny.1920.jpg"} height={1000} width={500} alt="page of manga"/>
          <Image src={"https://sm.ign.com/t/ign_pt/screenshot/default/jujutsu-kaisen-0-personagens-principais_f7ny.1920.jpg"} height={1000} width={500} alt="page of manga"/>
          <Image src={"https://sm.ign.com/t/ign_pt/screenshot/default/jujutsu-kaisen-0-personagens-principais_f7ny.1920.jpg"} height={1000} width={500} alt="page of manga"/>
          <Image src={"https://sm.ign.com/t/ign_pt/screenshot/default/jujutsu-kaisen-0-personagens-principais_f7ny.1920.jpg"} height={1000} width={500} alt="page of manga"/>
          <Image src={"https://sm.ign.com/t/ign_pt/screenshot/default/jujutsu-kaisen-0-personagens-principais_f7ny.1920.jpg"} height={1000} width={500} alt="page of manga"/>
          <Image src={"https://sm.ign.com/t/ign_pt/screenshot/default/jujutsu-kaisen-0-personagens-principais_f7ny.1920.jpg"} height={1000} width={500} alt="page of manga"/>
          <Image src={"https://sm.ign.com/t/ign_pt/screenshot/default/jujutsu-kaisen-0-personagens-principais_f7ny.1920.jpg"} height={1000} width={500} alt="page of manga"/>
        </section>
      </ScrollArea>
    </div>
  )
}