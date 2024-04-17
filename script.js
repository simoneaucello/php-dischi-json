const { createApp } = Vue;

createApp({

    data(){
      return{
        apiUrl: 'server.php',
        diskList: []
      }
    },

    methods:{
      getApi(){
        axios.get(this.apiUrl)
        .then((result) => {
          this.diskList = result.data;
        });
      }
    },

    mounted(){
      this.getApi();
    }

}).mount('#app')