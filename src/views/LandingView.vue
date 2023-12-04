<template>
    <div class="login-form">
      <img class="logo" src="../assets/logo-no-background.png" alt="">

      <form @submit.prevent="login">
        <label class="label">login</label>
        <div class="pair">
            <label for="username">username:</label>
            <input type="text" v-model="username" required />
        </div>

        <div class="pair">
            <label for="password">password:</label>
            <input type="password" v-model="password" required />
        </div>
        
        <button type="submit">login</button>
        <a class="guest-link" @click="sendGuestEntry()" href="#">proceed as guest</a>
      </form>
    </div>
    <FooterBar />

</template>
  
  <script>
import FooterBar from './partials/FooterBar.vue';

  export default {
    name: "Login",
    data() {
      return {
        username: '',
        password: '',
      };
    },
    methods: {
      login() {
        console.log('Username:', this.username);
        console.log('Password:', this.password);
      },
    },
    components:{
        FooterBar
    }
  };
  </script>
  
  <style scoped>
    .login-form{
        padding: 5%;
        width: 100%;
        height: 100%;
    }

    img{
        margin-left: 22.5%;
        margin-right: 22.5%;
        width: 55%;
    }

    form{
        background-color:rgba(0, 0, 0, 0.2);
        display: flex;
        flex-direction: column;
        margin-top: 1%;
        margin-left: 25%;
        margin-right: 25%;
        width: auto;
        color:#938C8C;
        padding: 1.5%;
        border-radius: 10px;
    }

    .pair{
        width: 70%;
        display: flex;
        flex-direction: row;
        margin-top: 2.5%;
        margin-bottom: 1.25%;
        margin-left: 15%;
        margin-right: 15%;
    }

    .pair input{
        border-radius: 10px;
        padding-left: 1%;
        border: none;
    }

    button{
        margin-top: 5%;
        background-color: #B9A79F;
        border: none;
        border-radius: 10px;
        padding: 10px 0;
        width: 40%;
        margin-left: 30%;
        margin-right: 30%;
        font-size: 1.25em;
        font-weight: bold;
        color: #3B322C;
    }

    .guest-link{
        border: none;
        width: 40%;
        margin-left: 30%;
        margin-right: 30%;
        color: white;
        text-align: center;
        text-decoration: underline;
    }

    .guest-link:hover{
        border: none;
        color: #3B322C;
        background-color: rgba(0, 0, 0, 0);
    }

    button:hover{
        background-color: #A9928A;
    }
    .pair label{
        text-align: center;
        width: 30%;
        font-size: 1.5em;
        font-weight: bold;
    }

    .pair input{
        width: 70%;
        color: #3B322C !important;
    }

    .label{
        width: 100%;
        font-weight: bold;
        font-size: 1.5rem;
        text-align: center;
        margin-bottom: 2.5%;
    }
  </style>
  