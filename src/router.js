import Vue from 'vue'
import Router from 'vue-router'

const CreditCardForm = () => import('./views/CreditCardForm.vue')
const StyleGuide = () => import('./views/StyleGuide.vue')
const ThreeDim = () => import('./views/ThreeDim.vue')

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: { name: 'CreditCardForm' }
    },
    {
      path: '/credit-card-form',
      name: 'CreditCardForm',
      component: CreditCardForm
    },
    {
      path: '/style-guide',
      name: 'StyleGuide',
      component: StyleGuide
    },
    {
      path: '/3d',
      name: 'ThreeDim',
      component: ThreeDim
    }
  ]
})

export default router
