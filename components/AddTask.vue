<template>
    <div class="columns">
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
import BaseTask from '~/components/BaseTask.vue'
import AddTask from '~/components/AddTask.vue'
export default {
  name: 'IndexPage',
  data () {
    return {
      data: {
        title: '',
        description: '',
      }
    }
  },
  components: {

  },
  methods: {
    toStore() {
      this.$store.commit('options/ADD_TODO', this.data); 
    },
    addTask() {
      const title = this.$refs.titleInput
      const description = this.$refs.descriptionInput
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
</style>
