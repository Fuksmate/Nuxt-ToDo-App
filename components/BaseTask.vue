
<template>
    <div class="baseTask">
        <div v-bind:class="{'class1': class1}" class="baseTask--title">{{ title(index) }} </div>
         <input v-model="class1" class="baseTask--checkbox" type="checkbox" id="scales" name="scales">
    </div>
</template>

<script>
export default {
  name: 'BaseTask',
  props: ['index'],
  data() {
    return {
      class1: false
    }
  },
  methods: {
    title(index) {

      return this.$store.state.options.data.title[index];
    },
  },
}
</script>

<style lang="scss">
.baseTask {
    background-color: #fff;
    color: #2E2A2A;
    height: 100px;
    position: relative;
    &--title {
        font-size: 16px;
        padding: 10px;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    &--checkbox{
        position: absolute;
        top: 45%;
        right: 2%;

    }
}
input[type=checkbox] {
    transform: scale(1.5);
}
.class1{
 text-decoration: line-through;
}
</style>
