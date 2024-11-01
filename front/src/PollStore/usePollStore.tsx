import ky from "ky";
import { create } from "zustand";
import { PollStore, Poll, Card } from './PollStore.ts';
import { persist } from "zustand/middleware";

const urlPolls = 'http://localhost:8080/api/polls'
const api = ky.create({ prefixUrl: urlPolls })

export const usePollStore = create<PollStore>()(persist((set, get) => ({
  polls: [],
  completedPolls: null,
  card: null,
  getPolls: async () => {
    try {
      const res = await api.get('').json<Poll[]>();
      console.log("store res", res);
      const test = Object.values(res);
      console.log("store test", test);
      set({ polls: test });
      console.log("store polls", get().polls)
    } catch (error) {
      console.log(error)
    }

  },
  getCard: async (id) => {
    try {
      const res = await api.get(`/${id}`).json<Card>();
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
      set({ polls: get().polls!.filter(p => p.idPoll !== idPoll) })
    } catch (error) {
      console.log(error)
    }
  }
}), {
  name: "poll-store",
}))