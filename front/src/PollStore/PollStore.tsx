import ky from "ky";
import { create } from "zustand";
import { PollStore, Poll, Card } from './PollStore.ts';

const urlPolls = 'http://localhost:3000/api/polls'
const api = ky.create({ prefixUrl: urlPolls })

export const usePollStore = create<PollStore>()((set, get) => ({
  polls: null,
  completedPolls: null,
  card: null,
  getPolls: async () => {
    try {
      const res = await api.get('/').json<Poll[]>();
      set({ polls: res });
    } catch (error) {
      console.log(error)
    }

  },
  getCard: async (id) => {
    try {
      const res = await api.get(`/${id}`).json<Card[]>();
      set({ card: res });
    } catch (error) {
      console.log(error)
    }
  },
  voteAnswer: async (idPoll, idAnswer) => {
    try {
      await api.post(`/${idPoll}/vote?idAnswer=${idAnswer}`);
      set({ completedPolls: [...get().completedPolls!, { idPoll, idAnswer }] })
    }
    catch (error) {
      console.log(error)
    }
  },
  createPoll: async (bodyPoll) => {
    try {
      await api.post('/', { json: bodyPoll });
      set({ polls: [...get().polls!, { idPoll: get().polls!.length, title: bodyPoll.title }] })
    } catch (error) {
      console.log(error)
    }
  },
  removePoll: async (idPoll) => {
    try {
      await api.delete(`/${idPoll}`)
    } catch (error) {
      console.log(error)
    }
  },


}))