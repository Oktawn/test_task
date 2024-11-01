
import { Poll } from "../../PollStore/PollStore"


function Card({ title }: Poll) {
  return (
    <div className="card">
      <h2>{title}</h2>
    </div>
  )
}

export { Card }