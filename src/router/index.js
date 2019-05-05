import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
<<<<<<< HEAD
import index from '@/components/index'
=======
import login from '@/components/login'
import register from '@/components/register'
>>>>>>> 2c93fa1c4c6207b3acc7cd5f18bbfbfa463c42bf

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
<<<<<<< HEAD
    {
      path: '/index',
      name: 'index',
      component: index
    }
=======
		{
		  path: '/login',
		  name: 'login',
		  component: login
		},
		{
		  path: '/register',
		  name: 'register',
		  component: register
		}
>>>>>>> 2c93fa1c4c6207b3acc7cd5f18bbfbfa463c42bf
  ]
}
)
