interface Poll {
  idPoll: number,
  title: string
}

interface CreatePoll {
  title: string,
  answers: string[]
}

interface compPolls {
  idPoll: number,
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
  polls: Poll[] | null,
  completedPolls: compPolls[] | null,
  card: Card[] | null,
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