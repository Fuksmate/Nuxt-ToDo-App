<template>
    <div class="columns addTask small-4">
      <input
        @value="data.title"
        type="text"
        ref="titleInput"
        placeholder="Title"
<<<<<<< HEAD
        maxlength="48"
=======
>>>>>>> 49dd285b34ced216a53461e9ed48707466043b00
      >
      <input
        type="submit"
        value="Add"
        @click="addCategory"
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
      }
    }
  },
  methods: {
    toStore() {
      this.$store.commit('options/ADD_TODO', this.data); 
    },
    addCategory() {
      const title = this.$refs.titleInput;
      if(title.value === ''){
        return
      }else {
        this.data.title = title.value;
        this.toStore();
        title.value = ''
      }
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
