const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 语法检查 关闭
  lintOnSave:false,
  // 代理服务器配置
  deServer:{
	// 目标服务器
	proxy:"http://localhost:8080"
  }
})
