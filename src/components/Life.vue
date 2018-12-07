<template>
  <div id="life">
    <p>生命周期函数--{{msg}}</p>
    <button @click="setMsg()">this is life Fun</button>

  </div>
</template>
<script>
export default {
  data(){
    return{
      msg:''
    }

  },
  methods:{
    setMsg(){
      this.msg="i am life fun"
    }
  },
  beforeCreate() {
    console.log('实例刚刚被创建')
  },
  mounted() {
    console.log('模板编译完成')
  },
}
</script>
