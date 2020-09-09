export const state = () => ({
    data: {
        title: [],
        description: [],
    }
})

export const mutations = {
    ADD_TODO (state, data) {
      state.data.title.push(data.title);
      state.data.description.push(data.description);
    },
  }
  