<template>
  <div class="row container">
    <div class="columns">
      <AddTask />
    </div>
    <main class="columns small-12">

      

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

  },
  methods: {
    addTask: function (){
      console.log("siema");
    },
  },
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

</style>
