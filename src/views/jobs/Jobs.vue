<template>
  <h1>Jobs</h1>
  <div v-if="jobs.length">
      <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id }}">
        <h2>{{ job.title }}</h2>
      </router-link> <!-- VERY IMPORTANT!!!!! <router-link> gets resolved to anchor tags(<a></a>) in the browser, so if you want to style your <router-link>, style <a></a> tags rather -->
      </div>
  </div>
  <div v-else>
      <p>Loading jobs...</p>
  </div>
</template>

<script>
export default {
    // this is inside Jobs.vue
    data(){
        return {
            jobs: []
        }
    },
    mounted(){ // we are using the mounted life cycle hook here, so that immediately the component has been mounted in the DOM, of course via the root componenet(in our case App.vue), then we fetch() the json data, set it equal to our jobs array variable, then cycle through it and display it via our template tag, we use a jobs array variable because we are expecting an array from the API
        fetch('http://localhost:3000/jobs') // the fetch() API is a built-in JS method that allows us to make HTTP requests to servers or API's, it takes an endpoint as an argument. It is asynchronous and returns a promise
        .then( response => response.json()) // inside the json file that is sent back to us, if the value of that json is an object, json() will parse that value into a JS object, if the json value we got back was an array, json() will parse it into a JS array, so json() does not only parse objects, it also parses arrays, basically any data type I guess
        .then( data => this.jobs = data)
        .catch(err => console.log(err.message))// remember, the .catch() method is used to catch any errors associated with the asynchronous funtions, it takes in a callback function which is fired when an error occurs, and it passes the error object as an argument to the callback function, this error object has a message property which tells the kind of error
    }
}
</script>

<style>
    .job h2{
        background: #f4f4f4;
        padding: 20px;
        border-radius: 10px;
        margin: 10px auto;
        max-width: 600px;
        cursor: pointer;
        color: #444;
    }
    .job h2:hover{
        background: #ddd;
    }
    .job a{
        text-decoration: none;
    }
</style>