const app = new Vue({
  el: '#app',
  data: {
    albums: [],
  },
  created() {
    // Ottenere dati dalle API
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then( response => {
        // successo
        console.log(response.data);
        this.albums = response.data.response;
      })
      .catch(error => {
        // in caso di errore
        console.log(error);
      });
  },
});
