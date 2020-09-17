<template>
    <div class="columns addTask small-4">
      <input
        @value="data.title"
        type="text"
        ref="titleInput"
        placeholder="Title"
      >
      <input
        @value="data.description"
        type="text"
        ref="descriptionInput"
        placeholder="Description"
      >
      <input
        type="submit"
        value="Add"
        @click="addTask"
      >
    </div>
</template>

<script>
export default {
  name: 'AddTask',
  data () {
    return {
      data: {
        title: '',
        description: '',
      }
    }
  },
  methods: {
    toStore() {
      this.$store.commit('options/ADD_TODO', this.data); 
    },
    addTask() {
      const title = this.$refs.titleInput;
      const description = this.$refs.descriptionInput;
      this.data.title = title.value;
      this.data.description = description.value;
      this.toStore();
      title.value = ''
      description.value = ''
    }
  },
}
</script>

<style lang="scss">
.addTask {
  position: absolute;
  left: 50%;
  top: 10%;
  transform: translate(-50%);
  input {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
  }
}
</style>
