<template>
	<div>
		<button @click="login">登录</button>
	</div>
</template>

<script>

export default{
	name : 'login',
	methods : {
		login(){
			this.axios.post("/login.do", {username:'root', password:123}).then(
				response => {
					console.log(response.data);
				},error => {
					console.log("访问失败");
				}
			)
		}
	}
}

</script>
