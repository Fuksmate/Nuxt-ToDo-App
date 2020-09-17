<template>
  <div>
    <div class="columns small-12 creativeTask">
      <AddTask />
    </div>
    <main class="row small-11 medium-9">
        <div v-for="(item, index) in this.$store.state.options.data.title" :key="index" class="columns small-12 medium-3">
          <BaseTask :index="index" />
          <br>
        </div>
    </main>
  </div>
</template>

<script>
import BaseTask from '~/components/BaseTask.vue'
import AddTask from '~/components/AddTask.vue'
export default {
  name: 'IndexPage',
  data () {
    return {
      messege: '',
    }
  },
  components: {
    AddTask,
    BaseTask

  },
}
</script>

<style lang="scss">
.creativeTask {
  height: 25vh;
  margin-bottom: 10px;
  position: relative;
}
</style>
