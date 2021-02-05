<template>
<!-- VERY VERY VERY VERY IMORTANT!!!!!!!!!!!!!!!!!:  when you are getting data like data in json format from an API, and using the data returned in your template of your component -->
<!-- please, please, please, always remember that, the browser will try to render what is in the template, and because the call to the API may take a few milliseconds to complete, -->
<!-- it is very likely that the browser will render the content of the template, which at that time, has no value becuase it has not yet been set to the value we are expecting from the API -->
<!-- it is therefore necessary, to make sure that, you don't access this data inside your template until it has been set to the value from the API call -->
<!-- so you can use a v-if to make sure that, the data has been set, before displaying its content inside the template -->
<!-- you can use the data itself as the condition for the v-if, null is a falsy value, so if we by default set the value of the data to null, v-if with a null value will evaluate to false, and hence the content will not show, when it is finally set to the value from the API, then it shows! -->
<!-- NOTE: AN EMPTY ARRAY [] IS NOT A FALSY VALUE -->

  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The job id is {{ id }}</p>
    <p>{{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading job details...</p>
  </div>
  
</template>

<script>
export default {
    props: ['id'],
    data(){
      return{
        job: null
      }
    },
    mounted(){
      fetch('http://localhost:3000/jobs/' + this.id)
      .then(response => response.json())
      .then(data => this.job = data)
      .catch(err => console.log(err.message))
    }
}

</script>

<style>

</style>