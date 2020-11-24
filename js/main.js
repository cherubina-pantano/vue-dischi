const app = new Vue({
  el: '#app',
  data: {
    albums: [],
    actualGenre: 'all',
  },
  created() {
    // Ottenere dati dalle API
    axios.get('https://flynn.boolean.careers/exercises/api/array/music')
      .then( response => {
        // successo
        // console.log(response.data);
        this.albums = response.data.response;
      })
      .catch(error => {
        // in caso di errore
        console.log(error);
      });
  },
  methods: {
    filterGenre() {
      axios.get('https://flynn.boolean.careers/exercises/api/array/music')
        .then( response => {
          // generi non filtrati
          let albumsList = response.data.response;

          // se la select è diversa da "all"
          if(this.actualGenre !== 'all') {
          // se genre dell'elemento attuale è uguale a quello selezionato ritorna negli elementi filtrati
            albumsList = albumsList.filter(album => album.genre
                          .toLowerCase() === this.actualGenre);
          }
          // selezione di "All"
          this.albums =  albumsList;
        })
        .catch(error => {
          // in caso di errore
          console.log(error);
        });
    }
  }  //fine methods
});
