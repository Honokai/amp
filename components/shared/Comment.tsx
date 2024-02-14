import { ReactElement, useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";

function Comment(): ReactElement {
  const [replying, setReplying] = useState(false)

  return (
    <div className="flex bg-background flex-col border border-accent p-2 rounded-sm">
      <div className="flex flex-row items-center pl-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>O_O</AvatarFallback>
        </Avatar>
        <span className="ml-4 text-primary">
          USER_NAME
        </span>
      </div>
      <div className="mt-2 py-2 pl-4 text-accent-foreground">
        user comment somewhere
      </div>
      <div className="py-2 pl-4">
        <Button onClick={(e) => setReplying(!replying)} variant={'outline'}>Reply</Button>
      </div>  
      <div className={`${replying ? '' : 'hidden' } py-2 px-4`}>
        <Textarea placeholder="Replying to user" />
      </div>
    </div>
  )
}

export default Comment