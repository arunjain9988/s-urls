<template>
  <h1>Url Shortening Service</h1>
  <form >
    <input v-model="url" type="url" name="url"  class="rounded" placeholder="Enter url to shorten">
    <button v-on:click.prevent="onSubmit" type="submit" class="rounded">Submit</button>
    <h3 v-if="shorted">Your Shorten Url: <a :href="`https://s-urls.herokuapp.com/${shortenurl}`" target="_blank">s-urls.herokuapp.com/{{shortenurl}}</a></h3>
  </form>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld
  },
  data () {
    return {
      url:"",
      shorted:false,
      shortenurl:""
    }
  },
  methods : {
    onSubmit() {
      this.axios.post('https://s-urls.herokuapp.com/?fullurl='+this.url)
      .then((res) => {
        console.log(res);
        this.shorted=true;
        this.shortenurl=res.data;
      })
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
