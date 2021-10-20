
<template>
  <div class="register_container">
    <div class="row_container">
      <div class="row_left">
        <div class="row_heading">
          <span class="letter1">F</span>
          <span class="letter2">u</span>
          <span class="letter3">n</span>
          <span class="letter1">d</span>
          <span class="letter4">o</span>
          <span class="letter2">o</span>
          <h2>Create your fundoo account</h2>
        </div>
        <div class="row_content_left">
                    <div class="row1 row2">
                        <div class="row_item right-margin">
                                <input v-model="state.firstName" type="text" name="firstname" id="firstName" class="inputfield" required=''>
                                <label for="firstName" alt='Firstname' placeholder='Firstname' class="placeholder"></label>
                        </div>
                        <!-- <p class="error" v-if="v$.firstName.$error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>{{v$.firstName.$errors[0].$message }} </p> -->

                        <div class="row_item">
                            <input v-model="state.lastName" type="text" name="lastname" id="lastName" class="inputfield" required=''>
                            <label for="lastName" alt='Lastname' placeholder='Lastname' class="placeholder"></label>
                        </div>
                        <p class="error" v-if="(v$.firstName.$error)"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>{{v$.firstName.$errors[0].$message}} </p>
                        <p class="error" v-if="(v$.lastName.$error)"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>{{v$.lastName.$errors[0].$message}} </p>
                        <!-- <p class="error" v-else><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>{{v$.firstName.$errors[0].$message}} {{v$.firstName.$errors[0].$message}} </p> -->
                    </div>
                    <div class="row2 row3">
                        <div class="row_item">
                            <input v-model="state.email" type="text" name="email" id="email" class="inputfield" required=''>
                            <label for="email" alt='Email' placeholder='Email' class="placeholder"></label>
                            <p v-if="!v$.email.$error" class="comments_p">You can use letters, numbers, periods</p>
                        </div>
                        <p class="error" v-if="v$.email.$error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>{{v$.email.$errors[0].$message }} </p>
                        <!-- <div class="error_msg"></div> -->
                        <span class="use_email">Use my current email address instead</span>
                    </div>
                    <!-- <p class="comments_p">You can use letters, numbers, periods</p> -->


                    <div class="row3 row2">
                        <div class="row_item">
                            <input v-model="state.password" type="text" name="password" id="password" class="inputfield" required='' :class="[error? 'error-border' : '']">
                            <label for="password" alt='Password' placeholder='Password' class="placeholder"></label>
                            <p v-if="!v$.password.$error" class="comments_p">Use 8 or more characters with a mix of letters, numbers & symbols</p>
                            <div class="error_msg"></div>
                        </div>
                        
                        <p class="error" v-if="v$.password.$error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>{{v$.password.$errors[0].$message }} </p>
                        <div class="show_password">
                          <input type="checkbox" name="show_password" id="show_password_id">
                          <label for="show_password_id">Show password</label>
                        </div>
                        <!-- <div class="row_item">
                            <label for="cpassword" class="custom-field">
                                <input v-model="state.cpassword" type="text" name="cpassword" id="cpassword" class="inputfield" required=''>
                                <span class="placeholder">Confirm password</span>
                            </label>
                            <div class="error_msg"></div>

                        </div>
                        <p class="error" v-if="v$.cpassword.$error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>{{v$.cpassword.$errors[0].$message }} </spanp>
                        </div>-->
                    </div>

                    <div class="row_bottom">
                        <button @click="submitForm" class="submit_button">Submit</button>
                            <!-- <input @submit="validate" type="submit" value="Submit" class="submit_button">  -->
                        <router-link to="/login"><span>Sign in instead</span></router-link>
                    </div>
                </div>   
      </div>
      <div class="row_right">
        <div class="image_content">
          <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" alt="" srcset="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import axios from "axios";

import useValidate from '@vuelidate/core';
import { required, email, minLength, helpers } from '@vuelidate/validators';
import {reactive, computed} from 'vue';
export default {
  name: 'Registration',
  
  setup(){
      const state = reactive({
          firstName: '',
            lastName: '',
            email: '',
            password: '',
      })
  
  const firstNamevalid = (value) => {
      let regex = /^([A-Z]{1})([a-zA-Z]{2,})$/;
       return regex.test(value);
  };
  const lastNamevalid = (value) => {
      let regex = /^([A-Z]{1})([a-zA-Z]{2,})$/;
       return regex.test(value);
  };

   const rules = computed(() => {
      return {
          firstName: {
              required: helpers.withMessage('Enter firstname', required),
              firstNamevalid: helpers.withMessage('Firstname is invalid', firstNamevalid)
          },
          lastName: {
              required: helpers.withMessage('Enter lastname', required),
              lastNamevalid: helpers.withMessage('Lastname is invalid', lastNamevalid)
          },
            email: {
              required: helpers.withMessage('Enter an email', required), 
              email
            },
            password: {
              required: helpers.withMessage('Enter a password', required),  
              minLength: helpers.withMessage('Atleast 8 characters required', minLength(8))
              },
      }
  })

  const v$ = useValidate(rules,state)
  return {
      state, v$
  }
  },
//   data(){
//       return{
//           fundooperson: {
//             firstName: 'Komal',
//             lastName: 'Ghanwat',
//             email: 'komalghanwat@mail.com',
//             password: 'Komal@123',
//           }
//   }
//   },
//   validations(){
//       return {
//         firstName: {required},
//         lastName: {required},
//         email: {required},
//         password: {required},
//         cpassword: {required}
//       }
//   },
  methods: {
      submitForm() {
          this.v$.$validate();
          if(!this.v$.$error){ 
              let fundooperson = {
                  firstName: this.state.firstName,
                  lastName: this.state.lastName,
                  email: this.state.email,
                  password: this.state.password
              }
              axios.post('http://localhost:3000/persons/registerPersons', fundooperson).then(() => {
                console.log("Success");
                this.$router.push('/login');
              }).catch(() => console.log("Error"));
            // 

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
@import './style2.scss';


</style>