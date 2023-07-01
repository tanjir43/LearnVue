import { createRouter, createWebHistory } from 'vue-router';

import Dashboard from '../views/Dashboard.vue';
import Login from '../views/Login.vue';
import Register from '../views/Register.vue';
import DefaultLayout from '../components/DefaultLayout.vue';
import AuthLayout from '../components/AuthLayout.vue';
import Surveys from '../views/Surveys.vue'; 
import ForgotPassword from '../views/ForgotPassword.vue';
import MyProfile from '../views/MyProfile.vue';
import store from '../store';
import SurveyView from '../views/SurveyView.vue';

const routes  = [
    {
        path        : '/',
        redirect    : '/dashboard',
        name        : 'Dashboard',
        component   :  DefaultLayout,
        meta        : { requiresAuth: true },
        children    :  [
            {path   :   '/dashboard', name: 'Dashboard', component: Dashboard },
            {path   :   '/surveys',   name: 'Surveys',   component: Surveys},
            {path   :   '/my-profile', name: 'MyProfile', component: MyProfile },
            {path   :   '/surveys/create', name: "SurveyCreate", component: SurveyView },
            {path   :   '/surveys/:id',    name: "SurveyView",   component: SurveyView },
        ],
        
    },

    {
        path        : '/auth',
        redirect    : '/login',
        name        : 'Auth',
        component   : AuthLayout,
        meta        : { isGuest: true},
        children    :   [
            {path   :   '/login',           name: 'Login',          component:  Login },
            {path   :   '/register',        name: 'Register',       component:  Register },
            {path   :   '/forgot-password', name: 'ForgotPassword', component:  ForgotPassword },
        ]
    },


];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

router.beforeEach((to, from, next) => {
    if (to.meta.requiresAuth && !store.state.user.token) {
        next({ name: 'Login' });
    }else if(store.state.user.token && (to.meta.isGuest)){
        next({name : 'Dashboard'});
    }else {
        next()
    }
  });
  
  

export default router;

