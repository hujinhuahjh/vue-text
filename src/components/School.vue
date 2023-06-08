<template>
	<div class="demo">
		<h2>学校名称：{{name}}</h2>
		<h2>学校地址：{{address}}</h2>
	</div>
</template>

<script>
	// 向外暴漏对象
	export default {
		
		name:"School",
		data(){
			return {
				name:"长沙大学",
				address:"洪山路"
			}
		}
	}
	
</script>

<style>
	.demo{
		background-color: orange;
	}
</style>
