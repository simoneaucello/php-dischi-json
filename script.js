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
          console.log(this.diskList);
        });
      }
    },

    mounted(){
      this.getApi();
    }

}).mount('#app')