const { createApp } = Vue;

createApp({

    data(){
      return{
        apiUrl: 'server.php',
        diskList: [],
        newSong:{
          title: "",
          author: "",
          year: null,
          poster: "",
          genre: ""
        }
      }
    },

    methods:{
      getApi(){
        axios.get(this.apiUrl)
        .then((result) => {
          this.diskList = result.data;
        });
      },

      addNewSong(){
        /*
        1. strutturo i dati per inviarli in POST  a server.php
        2. invio con axios in POST i dati
        3. con i dati che ricevo aggiorno la lista delle songs
        */

        const data = new FormData();
        data.append("newSongTitle", this.newSong.title);
        data.append("newSongAuthor", this.newSong.author);
        data.append("newSongYear", this.newSong.year);
        data.append("newSongPoster", this.newSong.poster);
        data.append("newSongGenre", this.newSong.genre);

        axios.post(this.apiUrl, data)
        .then(result => {
          this.diskList = result.data;
          this.newSong.title = '';
          this.newSong.author = '';
          this.newSong.year = '';
          this.newSong.poster = '';
          this.newSong.genre = '';
        })
      },

      removeSong(index){
        const songToDelete = this.diskList[index];

        if(confirm(`Sei sicuro di voler eliminare il brano ${songToDelete.title}?`));
        const data = new FormData();
        data.append('indexToDelete', index);

        axios.post(this.apiUrl, data)
        .then(result => {
          this.diskList = result.data;
        })


      }
    },

    mounted(){
      this.getApi();
    }

}).mount('#app')