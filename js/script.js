const app = new Vue({

  el: '#app',

  data: {
    numbersOfMail: 10,
    emails: [],
    isLoading: true,
    httpError: false,
    
  },
  methods:{

    getEmail(){

      for(let i = 0; i < this.numbersOfMail; i++){

        this.isLoading = true;

        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) =>{
          const data = response.data;
          console.log('email estratta: ',data.response);
          const email = data.response;
          this.emails.push(email);
          this.isLoading = false;
        })
        .catch((error) =>{
          console.log('Fail',error);
          this.httpError = true;
        })

      }
      
    }

  },
  mounted(){
    
    this.getEmail();
    

  }






})