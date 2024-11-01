import { Poll } from "../../PollStore/PollStore"

function Card(poll: Poll) {
  return (
    <button >
      {poll.title}
    </button>
  )
}

export { Card }