import Vue from 'vue';
import Router from 'vue-router';

import About from './views/about.vue';
import Instructions from './views/instructions.vue';
import Home from './views/home.vue';
import Rubric from './views/rubric.vue';
import Evaluation from './views/evaluation.vue';

Vue.use(Router);

export default new Router({
  routes: [
		{
			name: 'about',
			path: '/about',
			component: About
		},
    {
      name: 'home',
      path: '/',
      component: Home
		},
		{
      name: 'instructions',
      path: '/intructions',
      component: Instructions
    },
    {
      name: 'rubric',
      path: '/rubric',
      component: Rubric
		},
		{
			name: 'evaluation',
			path: '/rubric/evaluation',
			component: Evaluation
		}
  ]
});
