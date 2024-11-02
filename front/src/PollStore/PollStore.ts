interface Poll {
  id: number,
  title: string
}

interface CreatePoll {
  title: string,
  answer: string[]
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

interface Survey {
  poll: Poll,
  ans: Answer[]
}

interface PollStore {
  polls: Poll[] | [],
  completedPolls: compPolls[] | [],
  survey: Survey | undefined,
  getPolls: () => void,
  getSurvey: (idPoll: number, callback?: (survey: Survey) => void) => void,
  createPoll: (body: CreatePoll) => void,
  voteAnswer: (idPoll: number, idAnswer: number) => void,
  removePoll: (title: string) => void,
}


export type {
  PollStore,
  Poll,
  CreatePoll,
  Survey
}