import { resolveRating } from "@/utils/functions"
import { StarIcon, StarHalfIcon } from "lucide-react"
import { MouseEvent, useCallback, useState } from "react"

type TRatingProps = {
  rating: number,
  alwaysVisible?: boolean,
  enabled?: boolean
}

export default function Rating({ rating, alwaysVisible, enabled }: TRatingProps) {
  const stars = resolveRating(rating)

  const [mouseIn, setMouseIn] = useState<boolean>(false)
  
  function handleMouseEvent(event: MouseEvent<HTMLDivElement, globalThis.MouseEvent>, type: 'entrada'|'saida') {
    setMouseIn(!mouseIn)
  }

  /**
   * @todo
   * call whatever api to publish user rate
   */
  function rate(value: number) {
    alert(`classificao inserida ${value}`)
  }

  return (
    <div onMouseLeave={(e) => enabled && handleMouseEvent(e, 'saida')} onMouseEnter={(e) => enabled && handleMouseEvent(e, 'entrada')} className={`${!alwaysVisible ? 'invisible group-hover:visible ' : ''}py-2 flex items-center`}>
      <span>{rating}</span>
      <span className="flex ml-2 items-center">
        {mouseIn ? (
          <div className="flex flex-row-reverse">
            <button onClick={(e) => rate(5)} className="peer p-0 m-0 peer-hover:[&>*]:fill-yellow-300">
              <StarIcon className="peer stroke-yellow-800 peer-hover:fill-yellow-600 hover:fill-yellow-600"/>
            </button>
            <button onClick={(e) => rate(4)} className="peer p-0 m-0 peer-hover:[&>*]:fill-yellow-300">
              <StarIcon className="peer stroke-yellow-800 peer-hover:fill-yellow-600 hover:fill-yellow-600"/>
            </button>
            <button onClick={(e) => rate(3)} className="peer p-0 m-0 peer-hover:[&>*]:fill-yellow-300">
              <StarIcon className="peer stroke-yellow-800 peer-hover:fill-yellow-600 hover:fill-yellow-600"/>
            </button>
            <button onClick={(e) => rate(2)} className="peer p-0 m-0 peer-hover:[&>*]:fill-yellow-300">
              <StarIcon className="peer stroke-yellow-800 peer-hover:fill-yellow-600 hover:fill-yellow-600"/>
            </button>
            <button onClick={(e) => rate(1)} className="peer p-0 m-0 peer-hover:[&>*]:fill-yellow-300">
              <StarIcon className="peer stroke-yellow-800 peer-hover:fill-yellow-600 hover:fill-yellow-600"/>
            </button>
          </div>
        ) : (
          <>
          {stars.map((val, index) => {
            return val == 1 ? (
              <StarIcon key={index} className="fill-yellow-600 stroke-yellow-800"/>
              ) : (
                <StarHalfIcon key={index} className="fill-yellow-600 stroke-yellow-800"/>
              )
          }) }
          </>
        )}
        
      </span>
    </div>
  )
}