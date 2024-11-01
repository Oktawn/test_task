interface Poll {
  id: number,
  title: string
}

interface CreatePoll {
  title: string,
  answers: string[]
}

interface compPolls {
  id: number,
  idAnswer: number
}

interface Answer {
  id: number,
  answer: string,
  ans_count: number
}

interface Card {
  poll: Poll,
  ans: Answer[]
}

interface PollStore {
  polls: Poll[] | [],
  completedPolls: compPolls[] | [],
  card: Card | null,
  getPolls: () => void,
  getCard: (idPoll: number) => void,
  createPoll: (body: CreatePoll) => void,
  voteAnswer: (idPoll: number, idAnswer: number) => void,
  removePoll: (idPoll: number) => void,
}


export type {
  PollStore,
  Poll,
  CreatePoll,
  Card
}