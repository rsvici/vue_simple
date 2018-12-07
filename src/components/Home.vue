<template>
  <div id="home">
    <h2 @click="run()">{{msg}}</h2>
  </div>
</template>
<script>
export default {
  data(){
    return{
      msg:"I'm home"
    }
  },
  methods:{
    run(){
      alert('this is home')
    }
  }
}
</script>
<style lang="scss">
  #home{
    color: red;
  }
</style>


