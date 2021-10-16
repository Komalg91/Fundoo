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
            <h2>Change password</h2>
            <!-- <h3>Use your google account</h3> -->
          </div>
            <div class="row_content_left">
                <div class="row3">
                    <div class="row_item">
                        <div class="small_head">
                            <p>Create a strong password</p>
                        </div>
                    </div>
                </div>
                <div class="row3">
                    <div class="row_item">
                        <input v-model="state.password" type="text" name="password" id="password" class="inputfield" required=''>
                        <label for="password" alt='Password' placeholder='Password' class="placeholder"></label>
                    </div>
                    <div class="error" v-if="v$.password.$error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg>
                    <p>{{v$.password.$errors[0].$message }} </p>
                    </div>

                </div>
                <!-- <div class="row3">
                    <div class="row_item">
                        <label for="password" class="custom-field">
                            <input v-model="password" type="text" name="password" id="password" class="inputfield signinp">
                            <span class="placeholder">Create password</span>
                        </label>
                    </div>
                    <div class="error_msg"></div>

                </div> -->
                <!-- <div class="row3">
                    <div class="row_item">
                        <label for="cpassword" class="custom-field">
                            <input v-model="cpassword" type="text" name="cpassword" id="cpassword" class="inputfield signinp">
                            <span class="placeholder">Confirm Password</span>
                        </label>
                    </div>
                    <p class="error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg> Enter a password</p>
                    <div class="error_msg"></div>

                </div>   -->
                <div class="row_bottom">
                    <button @click="submitForm" class="submit_button">Submit</button>

                    <!-- <input @submit="validate" type="submit" value="Save password" class="submit_button"> -->
                    <router-link to="/"><span>Skip</span></router-link>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

import axios from "axios";

import useValidate from '@vuelidate/core';
import { required, minLength} from '@vuelidate/validators';
import {reactive, computed} from 'vue';

export default {
  name: 'Reset',
  setup(){
      const state = reactive({
            password: ''
      })
  

   const rules = computed(() => {
      return {
            password: {required, minLength: minLength(6)},
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
                  password: this.state.password
              }
              const headers = {
                  'x-auth-token': this.$route.params.token
              }
              console.log(headers);
              axios.patch('http://localhost:3000/persons/resetpassword', fundooperson, {headers}).then(() => 
              {
                  console.log(this.$route.params.token);
                  console.log("Success")
            }).catch(() => console.log("Error"));
            

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