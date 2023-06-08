<template>
	<div id="app">
  <!--    <img alt="Vue logo" src="./assets/logo.png">-->
  <!--    <HelloWorld msg="Welcome to Your Vue.js App"/>-->
  <!--    //增加：将字符串变成表达式-->
	  <!-- <School></School>
	  <Student name="李四" sex="女"  :age="11"></Student>
	  <button @click="text">点击访问测试接口</button>
	  <Login></Login> -->
	  
	  <router-link to="/login">登录</router-link>
	  <br>
	  <router-link to="/register">注册</router-link>
	  <router-view></router-view>
	</div>
  </template>
  
  <script>
  
  import School from "./components/School.vue"
  import Student from "./components/Student.vue"
  import Login from "./components/login.vue"
  import router from "./router"
//   import axios from 'axios';

  export default {
	name: 'App',
	components: {
    // eslint-disable-next-line vue/no-unused-components
    Student,
    // eslint-disable-next-line vue/no-unused-components
    School,
    Login
    // HelloWorld
    ,
    router
},
	data(){
        return{
            name:"李四"
        }
    },
    methods:{
        text(){
            this.axios.get("/register").then(
                Response => {
                    console.log("访问成功")
                },
                Error => {
                    console.log("访问失败")
                }
            )
        }
	}
  }
  </script>
  
  <style>
  #app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
  }
  </style>
  