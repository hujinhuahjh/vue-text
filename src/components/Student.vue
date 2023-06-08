<template>
	<div>
		<h2>学生名称：{{name}}</h2>
		<h2>学生年龄：{{age}}</h2>
		<h2>学生性别：{{sex}}</h2>
	</div>
</template>

<script>
	export default{
		name:'Student',
		data(){
			return{
 					// name:"张三",
 					// age:18
		 }
		},
		//简单的声明  接受，使用该组件时  传递的属性和属性值
		// props:["name","sex","age"]
		props:{
			name:{
				type:String,
				required: true
			},
			age:{
				type: Number,
				default: 99
			},
			sex:{
				type:String
			}
		}
	}
</script>

<style>
</style>
