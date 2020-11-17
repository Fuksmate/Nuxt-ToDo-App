export const state = () => ({
    data: {
        title: [],
        task: [],
    }
})

export const mutations = {
    ADD_TODO (state, data) {
      state.data.title.push(data.title)
    },
    ADD_TASK (state, data) {
      state.data.task.push(data.task)
    },
  }
  