<template>
  <div id="app">
    <v-home></v-home>
    <v-life></v-life>
    <h2 ref="code">{{msg}},{{obj.name}}</h2>
    <br>
    <!-- 这是一个组件 -->
    <ul>
      <li
        v-for="(key,item) in list"
        :key="item"
        :class="{red:key==2,blue:key==3}"
      >
        {{item}}
      </li>
    </ul>
    <ul>
      <li
        v-for="item in list1"
        :key="item.name"
      >
        {{item.name}}
      </li>
    </ul>
    <input
      type="text"
      v-model="msg"
    >

    <button v-on:click="getMsg()">获取表单的数据</button>
    <button @click="getMsg()">获取表单的数据2</button>

    <button @click="getJson()">请求数据</button>
    <button @click="getJson1()">请求数据1</button>

  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Life from "./components/Life.vue";
import Axios from "axios"

export default {
  data() {
    return {
      msg: "hello world",
      obj: {
        name: "sc"
      },
      list: [1, 2, 3, 45, 6, 7, 8, 9, 10],
      list1: [
        {
          name: "sc"
        },
        {
          name: "sc1"
        },
        {
          name: "sc2"
        }
      ]
    };
  },
  methods: {
    getMsg: function() {
      console.log(this.$refs.code);
      this.$refs.code.style.background = "red";
    },
    getJson() {
      let api="../package.json"
      this.$http.get(api).then((res)=> {
        console.log(res.body);
        
      }, function() {

      });
    },
    getJson1() {
      let api="../package.json"
      Axios.get(api).then((res)=> {
        console.log(res.data);
        
      }, function() {

      });
    },
  },
  components: {
    "v-home": Home,
    "v-life": Life
  }
};
</script>

<style>
.blue {
  color: blue;
}
.red {
  color: red;
}
</style>
