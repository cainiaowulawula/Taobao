<template>
  <div id="app">
    <img src="./assets/logo.png">
		<p>
				<router-link to="./login">登录</router-link>
				<router-link to="./register">注册</router-link>
				
		</p>
		<router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
p{
	margin-left: auto;
	margin-bottom: 20px;
	margin-top: 10px;
}

</style>
