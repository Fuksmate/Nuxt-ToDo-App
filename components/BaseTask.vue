<template>
    <div class="baseTask">
        <div class="baseTask--title">{{ title(index) }} </div>
        <span class="baseTask--description">{{ description(index) }}</span>
        <input class="baseTask--checkbox" type="checkbox" id="scales" name="scales">
    </div>
</template>

<script>
export default {
  name: 'BaseTask',
  props: ['index'],
  methods: {
    title(index) {
      return this.$store.state.options.data.title[index];
    },
    description(index) {
      return this.$store.state.options.data.description[index];
    }
  },
}
</script>

<style lang="scss">
.baseTask {
    background-color: grey;
    color: #fff;
    height: 400px;
    position: relative;
    &--title {
        font-size: 18px;
        text-align: center;
        padding: 10px;
    }
    &--description {
        font-size:16px;
        padding: 20px;
    }
    &--checkbox {
        width: 50px;
        height: 50px;
        position: absolute;
        bottom: 10px;
        left: 50%;
        transform: translateX(-50%);
        cursor: pointer;
        border: 1px solid blue;
    }
}
</style>
