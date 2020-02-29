import Vue from 'vue'
import Router from 'vue-router'

const CreditCardForm = () => import('./views/CreditCardForm.vue')
const StyleGuide = () => import('./views/StyleGuide.vue')

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
    }
  ]
})

export default router
