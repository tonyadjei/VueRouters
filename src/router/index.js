import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Jobs from '../views/jobs/Jobs.vue'
import JobDetails from '../views/jobs/JobDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home // remember to import components when you are in the /src/router/index.js file
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/jobs/:id', //this is a path that uses a route parameter, note, route parameters can be accessed with $route.params.<name>
    name: 'JobDetails',
    component: JobDetails,
    props: true // this implies that, since this path uses a route parameter, when it receives a route parameter from the params object, it should send that route parameter as a prop to the destination of that final path(eventually to the component that is used for that path, which in our case is JobDetails.vue)
  },

  // example of making a redirect : What is the use or essence of redirects? to redirect the page from one link to another, for example, if a link is no longer in use, we can redirect requests to that old link to a newer link
  {
    path: '/all-jobs',
    redirect: '/jobs'
  },

  // catchall 404
  {
    path: '/:catchAll(.*)', //special path, using a route parameter which is a regex expression that cathces all routes that are not registered in the routes array, inside the /router/index.js file, so it cathes all those routes, then from there we can display a component
    name: 'NotFound',
    component: NotFound
  }

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router