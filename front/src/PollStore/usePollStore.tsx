import ky from "ky";
import { create } from "zustand";
import { PollStore, Poll, Survey } from './PollStore.ts';
import { persist } from "zustand/middleware";

const urlPolls = 'http://localhost:8080/api/polls/'
const api = ky.create({ prefixUrl: urlPolls })

export const usePollStore = create<PollStore>()(persist((set, get) => ({
  polls: [],
  completedPolls: [],
  survey: undefined,
  getPolls: async () => {
    try {
      const res = await api.get('').json<Poll[] | any>();
      set({ polls: res.polls });
    } catch (error) {
      console.log(error)
    }

  },
  getSurvey: async (id, callback) => {
    try {
      const res = await api.get(`${id}`).json<Survey | any>();
      set({ survey: res });
      if (callback)
        callback(res);
    } catch (error) {
      console.log(error)
    }
  },
  voteAnswer: async (idPoll, idAnswer) => {
    try {
      await api.post(`${idPoll}/vote?idAnswer=${idAnswer}`);
      set({ completedPolls: [...get().completedPolls!, { id: idPoll, idAnswer }] })
      get().getSurvey(idPoll);
    }
    catch (error) {
      console.log(error)
    }
  },
  createPoll: async (bodyPoll) => {
    try {
      await api.post('', { json: bodyPoll });
      set({ polls: [...get().polls!, { id: get().polls!.length, title: bodyPoll.title }] })
      get().getPolls();
    } catch (error) {
      console.log(error)
    }
  },
  removePoll: async (title) => {
    try {
      const poll = get().polls!.find(p => p.title.trim() === title.trim())
      if (!poll)
        return;
      await api.delete(`${poll!.id}`)
      set({ polls: get().polls!.filter(p => p.id !== poll!.id) });
      set({ completedPolls: get().completedPolls!.filter(p => p.id !== poll!.id) });
    } catch (error) {
      console.log(error)
    }
  }
}), {
  name: "poll-store",
  partialize: (state) => ({ polls: state.polls, completedPolls: state.completedPolls }),
}))