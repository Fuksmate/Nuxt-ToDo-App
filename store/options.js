export const state = () => ({
    data: [],
})

export const mutations = {
    ADD_TODO (state, title) {
      state.data = title;
      console.log(title);
      console.log("asd");
    },
  }
  