<template>
    <div class="columns">
        <form @submit="addTask" class="medium-1">
            <input
                @value="title"
                type="text"
                placeholder="Title"
            >
            <input
                @value="description"
                type="text"
                placeholder="Description"
            >
            <input
                type="submit"
                value="Add"
            >
        </form>
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
    addTask: function (){
      console.log("siema");
    },
  },
}
</script>

<style lang="scss">
</style>
