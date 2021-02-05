<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
      <router-link :to="{ name: 'JobDetails', params: { id: job.id }}">
        <h2>{{ job.title }}</h2>
      </router-link> <!-- VERY IMPORTANT!!!!! <router-link> gets resolved to anchor tags(<a></a>) in the browser, so if you want to style your <router-link>, style <a></a> tags rather -->
  </div>
</template>

<script>
export default {
    data(){
        return {
            jobs: [
                {title: "UI designer", id: 1, detail: "lorem"},
                {title: "Web developer", id: 2, detail: "lorem"},
                {title: "Graphic designer", id: 3, detail: "lorem"}
            ]
        }
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