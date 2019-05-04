<template>
  <div id="app">
    <img src="./assets/logo.png">
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
	margin-right: -25%;
	margin-top:-15px;
}
p a{
	color: darkgrey;
}
html,body{
	background: linear-gradient(to bottom right,#a04fff,#6a37fd);
	
	overflow: hidden;
	height: 100%;
}
</style>
