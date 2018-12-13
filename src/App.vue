<template>
  <div id="app">
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

    <router-link to="/home">Go to home</router-link>
    <router-link to="/life?id=123">Go to life</router-link>
    <router-link to="/content/123">Go to content</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import Axios from "axios";

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
    }
  },
  methods: {
    getMsg: function() {
      console.log(this.$refs.code);
      this.$refs.code.style.background = "red";
    },
    getJson() {
      let api = "../package.json";
      this.$http.get(api).then(
        res => {
          console.log(res.body);
        },
        function() {}
      );
    },
    getJson1() {
      let api = "../package.json";
      Axios.get(api).then(
        res => {
          console.log(res.data);
        },
        function() {}
      );
    }
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
