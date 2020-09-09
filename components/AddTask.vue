<template>
    <div class="columns">
      <input
        @value="title"
        type="text"
        ref="titleInput"
        placeholder="Title"
      >
      <input
        @value="description"
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
import BaseTask from '~/components/BaseTask.vue'
import AddTask from '~/components/AddTask.vue'
export default {
  name: 'IndexPage',
  data () {
    return {
      title: '',
      description: '',
    }
  },
  components: {

  },
  methods: {
    addTask() {
      this.$store.commit('options/ADD_TODO', 'asd'); 
      this.reset();
    },
    reset() {
      const input = this.$refs.titleInput
      const inputa = this.$refs.descriptionInput
      input.value = ''
      inputa.value = ''
    }
  },
}
</script>

<style lang="scss">
</style>
