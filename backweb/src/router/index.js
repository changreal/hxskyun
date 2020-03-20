import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Container from "../container/Container";
import StandardEdit from "../components/StandardEdit";
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      name: 'Container',
      component: Container,
      Children: [
        {path: '/', name: '标准编辑页', component: StandardEdit,}
      ]
    },
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
