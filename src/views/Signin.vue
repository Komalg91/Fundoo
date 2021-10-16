<template>
  <div class="register_container">
        <div class="rows">
          <div class="row_heading  text_sign">
            <span class="letter1">F</span>
            <span class="letter2">u</span>
            <span class="letter3">n</span>
            <span class="letter1">d</span>
            <span class="letter4">o</span>
            <span class="letter2">o</span>
            <h2>Sign in</h2>
            <h3>Use your google account</h3>
          </div>
            <div class="row_content_left">
                <div class="row3">
                    <div class="row_item">
                        <input v-model="state.email" type="text" name="email" id="email" class="inputfield" required=''>
                        <label for="email" alt='Email' placeholder='Email' class="placeholder"></label>
                    </div>
                    <div class="error" v-if="v$.email.$error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                    <p>{{v$.email.$errors[0].$message }} </p>
                    </div>
                    <div class="error_msg"></div>
                    <span class="use_email">Forgot email ?</span>

                </div>

                <div class="guest_mode">
                    <p>Not your computer?Use guest mode to sign in privately</p>
                </div>
                <div class="row3">
                    <div class="row_item">
                        <input v-model="state.password" type="text" name="password" id="password" class="inputfield" required=''>
                        <label for="password" alt='Password' placeholder='Password' class="placeholder"></label>
                    </div>
                    <div class="error" v-if="v$.password.$error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>
                        <p> {{v$.password.$errors[0].$message }}  </p>
                    </div>
                    <div class="error_msg"></div>

                </div>  
                <div class="row_bottom">
                    <router-link to="/dashboard"><button @click="submitForm" class="submit_button">Next</button></router-link>
                    <router-link to="/register"><span>Create account</span></router-link>

                    <!-- <input @submit="validate" type="submit" value="Submit" class="submit_button"> -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

import useValidate from '@vuelidate/core';
import { required, email, minLength, helpers} from '@vuelidate/validators';
import {reactive, computed} from 'vue';

export default {
  name: 'Login',
  setup(){
      const state = reactive({
            email: '',
            password: '',
      })
  

   const rules = computed(() => {
      return {
            email: {
                required: helpers.withMessage('Enter an email', required), 
                email
            },
            password: {
                required: helpers.withMessage('Enter a password', required), minLength: minLength(6)},
      }
  })

  const v$ = useValidate(rules,state)
  return {
      state, v$
  }
  },
  methods: {
      submitForm() {
          this.v$.$validate();
          if(!this.v$.$error){ 
              let fundooperson = {
                  email: this.state.email,
                  password: this.state.password
              }

              let loginuser = localStorage.getItem('Login');
                console.log(loginuser);
                if(loginuser!=null){
                    this.$router.push('/dashboard');
                }
                else{
                    this.router.push('./register');
                }

              axios.post('http://localhost:3000/persons/loginPersons', fundooperson).then((resp) => {
                  
                  console.log("Success");
                  console.log(resp.data.token);
                  localStorage.setItem("Login", JSON.stringify(resp.data))

                
                  }).catch(() => console.log("Error"));
            // this.$router.push('/loginPersons');

        //   console.log(this.v$);
          alert("Forrm submitted");
          }
          else{
              alert("Form failed");
          }
          
      }
  }
  
}

</script>

<style lang="scss" scoped>
@import './style.scss'
</style>