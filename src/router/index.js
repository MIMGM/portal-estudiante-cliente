import { createRouter, createWebHistory } from 'vue-router'
import AdminLayout from '../layout/Admin.vue'
import Dashboard from '../views/Dashboard.vue'
import Estudiantes from '../views/Estudiantes.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'



const routes = [
  {
    path: '/',
    name: 'AdminLayout',
    component: AdminLayout,
    children: [ 
      {
        path: '/',
        name: 'Dashboard',
        component: Dashboard
      },
      {
        path: '/estudiantes',
        name: 'Estudiantes',
        component: Estudiantes
      },

    ]
  },
  //fuera de los hijos
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },

  
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
