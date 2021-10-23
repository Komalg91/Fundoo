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
                        <p class="error" v-if="v$.firstName.$error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>{{v$.firstName.$errors[0].$message }} </p>

                        <div class="row_item">
                            <input v-model="state.lastName" type="text" name="lastname" id="lastName" class="inputfield" required=''>
                            <label for="lastName" alt='Lastname' placeholder='Lastname' class="placeholder"></label>
                        </div>
                        <p class="error" v-if="v$.lastName.$error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>{{v$.lastName.$errors[0].$message }} </p>
                        <div class="error_msg"></div>
                    </div>
                    <div class="row2 row3">
                        <div class="row_item">
                            <input v-model="state.email" type="text" name="email" id="email" class="inputfield" required=''>
                            <label for="email" alt='Email' placeholder='Email' class="placeholder"></label>
                            <p class="comments_p">You can use letters, numbers, periods</p>

                        </div>
                        <p class="error" v-if="v$.email.$error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                        </svg>{{v$.email.$errors[0].$message }} </p>
                        <div class="error_msg"></div>
                        <span class="use_email">Use my current email address instead</span>
                    </div>
                    <!-- <p class="comments_p">You can use letters, numbers, periods</p> -->


                    <div class="row3 row2">
                        <div class="row_item">
                            <input v-model="state.password" type="text" name="password" id="password" class="inputfield" required=''>
                            <label for="password" alt='Password' placeholder='Password' class="placeholder"></label>
                            <p class="comments_p">Use 8 or more characters with a mix of letters, numbers & symbols</p>
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

  <div id="vue">
	<ul id="list">
		<li><span v-on:click="modal_1=!modal_1">modal_1</span></li>
    <li><span v-on:click="modal_2=!modal_2">modal_2</span></li>
    <li><span v-on:click="modal_3=!modal_3">modal_3</span></li>
	</ul>
	<div>
		<div class="c-modal" v-show="modal_1">
      <span>modal_1</span>
    </div>
    <div class="bg" v-show="modal_1" v-on:click="modal_1=!modal_1"></div>
	</div>
  <div>
		<div class="c-modal" v-show="modal_2">
      <span>modal_2</span>
    </div>
    <div class="bg" v-show="modal_2" v-on:click="modal_2=!modal_2"></div>
	</div>
  <div>
		<div class="c-modal" v-show="modal_3">
      <span>modal_3</span>
    </div>
    <div class="bg" v-show="modal_3" v-on:click="modal_3=!modal_3"></div>
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
  data(){
    return{
      modal_1: false,
          modal_2: false,
          modal_3: false
    }
  },
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
              required,
              firstNamevalid: helpers.withMessage('Firstname is invalid', firstNamevalid)
          },
          lastName: {
              required,
              lastNamevalid: helpers.withMessage('Lastname is invalid', lastNamevalid)
          },
            email: {required, email
            },
            password: {required, minLength: minLength(6)},
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
              axios.post('http://localhost:3000/persons/registerPersons', fundooperson).then(() => console.log("Success")).catch(() => console.log("Error"));
            // this.$router.push('/register');

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

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans&display=swap');


body{
  margin: 0;
  padding: 0;
  width: 100%;
  overflow-x: hidden;
}
*{
  box-sizing: border-box;
}
.c-modal {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
	margin: auto;
	width: 50%;
	height: 50%;
  padding: 12px;
  border: 1px solid red;
  border-radius: 5px;
  background-color: rgba(#fff, .4);
	z-index: 10001;
	opacity: 1;
  transition: .6s;
}

.bg {
  display: block;
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0,0,0,.6);
  z-index: 10000;
  opacity: 1;
  transition: .3s;
}

#list li {
  cursor: pointer;
}
.register_container{
  margin: 0;
  padding: 0;
}
.row_container{
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 748px;
  // width: 50%;
  margin: 0 auto;
  padding: 3%;
  border: 1px solid #dadce0;
  border-radius: 10px;
  margin-top: 10vh;
  text-align: left;
  min-height: auto;
}

.image_content img{
  width: 244px;
  height: 244px;
}
.row_left{
  padding-right: 5%;
}
.row_right{
  padding-left: 5%;
}

.row_heading{
    // width: 90%;
    margin: 0 auto;
}
.row_heading h2{
  margin-bottom: 0%;
  font-family: 'Open Sans', sans-serif;
  font-size: 1.4rem;
  font-weight: 590;
}
.row_heading span{
    font-size: 1.3rem;
    font-weight: 700;
    font-family: 'Roboto', sans-serif;
}
.letter1{
    color: rgb(66, 133, 244);
}
.letter2{
    color: rgb(234, 67, 53);
}
.letter3{
    color:rgb(251, 188, 5);
}
.letter4{
    color: rgb(52, 168, 83);
}
.row_content_left{
    display: flex;
    flex-direction: column;
    margin: 0 auto;   
}
.row1{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    // gap: 0% 10%;
    margin-bottom: 4vh;
}
.row2{
  padding-top: 4vh;
}
.row3{
    display: grid;
    grid-template-columns: 1fr;
    // gap: 0% 10%;
    // margin-bottom: 4vh;
    width: 100%;
}
.row_item{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.right-margin{
  margin-right: 8px;
}

.placeholder{
  font-size: 0.9rem;
  color: #5f6368;
}
.use_email{
    color: #1a73e8; 
    font-size: 0.9rem;
    font-weight: 550;
}

input[type="text"] {
    box-sizing: border-box;
    width: 100%;
    min-height: calc(3em + 2px);
    margin: 0 0 1em;
    padding: 6px 8px;
    border-radius: 4px;
    border: 1px solid #ccc;
    // border-radius: 1.5em;
    background: #fff;
    resize: none;
    outline: none;
  }
  input[type="text"][required]:focus {
    border: 2px solid #1a73e8;
  }
  input[type="text"][required]:focus + label[placeholder]:before {
    color: #1a73e8;
  }
  input[type="text"][required]:focus + label[placeholder]:before,
  input[type="text"][required]:valid + label[placeholder]:before {
    transition-duration: 0.2s;
    transform: translate(0, -1.6em) scale(0.9, 0.9);
    background-color: #FFFFFF;
    padding:0% 2%;
    margin: 0 0;
    font-size: 0.8rem;

  }
  input[type="text"][required]:invalid + label[placeholder][alt]:before {
    content: attr(alt);
  }
  input[type="text"][required] + label[placeholder] {
    display: block;
    pointer-events: none;
    line-height: 1.25em;
    margin-top: calc(-3em);
  }
  input[type="text"][required] + label[placeholder]:before {
    content: attr(placeholder);
    display: inline-block;
    margin: 0 calc(1em + 2px);
    padding: 0 2px;
    color: #898989;
    white-space: nowrap;
    // transition: 0.3s ease-in-out;
    // background-image: linear-gradient(to bottom, #fff, #fff);
    // background-size: 100% 5px;
    // background-repeat: no-repeat;
    // background-position: center;
  }

.error{
  margin-top:1vh;
  color: red;
  font-size: 0.8em;
}
svg{
    color: red;
}

.comments_p{
    // margin-top: 0%;
    color: #5f6368;
    font-size: 0.7rem;
    padding-top: 5px;
    margin-left: 10px;
    white-space: normal;
}
.show_password{
  display: flex;
  align-items: center;
  gap: 0 2%;
}
input[type=checkbox]{
  width: 1rem;
  height: 1rem; 
  // outline: 2px solid #000;
}
// #show_password_id:before{
//     content: '';
//     background: #fff;
//     border: 2px solid #5f6368;
//     display: inline-block;
//     vertical-align: middle;
//     width: 1rem;
//     height: 1rem;

//     text-align: center;   
// }
.show_password label{
  font-size: 14px;
  color: #202124;
}

.row_bottom{
    padding-top: 10vh;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
}
.row_bottom button{
    float: right;
}
.row_bottom span{
    color: #1a73e8; 
    font-size: 0.9rem;
    font-weight: 550;
}
a{
    text-decoration: none;
    font-size: 0.9rem;
    font-weight: 500;
    letter-spacing: 0.01em;
}
button {
    // flex: 2;
    padding: 10px 20px;
    border: 1px solid #1a73e8;
    border-radius: 5px;
    color: #FFFFFF;
    cursor: pointer;
    background-color:#1a73e8;
    font-size: 0.9rem;
} 

.row_item .signinp{
    font-size: 1.5rem;
    padding: 0.8rem;
}

.small_head p{
    font-size: 1rem;
    color: #202124;
    font-weight: 600;
    font-family: Arial, Helvetica, sans-serif;
}
@media screen and (max-width:900px){
    .row_container{
        flex-direction: column;
        width: 58%;
    }
    .row_right{
      display: none;
    }
}
@media screen and (max-width:600px){
    .row_container{
      width: 90%;
      border: none;
      align-items: unset;
      margin-top: 0%;
    }
    .row1{
        display: unset;
    }
    .row1 > .row_item:not(:first-child){
      padding-top: 5vh;
    }
    .right-margin{
      margin-right: 0%;
      margin-bottom: 5%;
    }
}
@media screen and (max-width:500px){
    .rows{
        width: 90%;
        border: none;
        margin-top: 0;
    }
}

</style>