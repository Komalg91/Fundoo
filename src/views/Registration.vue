<template>
  <div class="register_container">
      <div class="rows">
          <div class="row_heading">
            <span class="letter1">F</span>
            <span class="letter2">u</span>
            <span class="letter3">n</span>
            <span class="letter1">d</span>
            <span class="letter4">o</span>
            <span class="letter2">o</span>
            <h2>Create an account</h2>
          </div>
        <div class="row_content_left">
            <div class="row1 row2">
                <div class="row_item">
                    <label for="fname">First name</label>
                    <input v-model="fname" type="text" name="firstname" id="fname" class="inputfield">
                </div>
                <div class="row_item">
                    <label for="lname">Last name</label>
                    <input v-model="lname" type="text" name="lastname" id="lname" class="inputfield">
                </div>
                <p class="error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg> Enter first and last names</p>
                <div class="error_msg"></div>

            </div>
            <div class="row2 row3">
                <div class="row_item">
                    <label for="username">Username</label>
                    <input v-model="email" type="text" name="username" id="username" class="inputfield">
                </div>
                <p class="error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg> Choose a Mail address</p>
                <div class="error_msg"></div>

            </div>
                <p class="comments_p">You can use letters, numbers, periods</p>


            <div class="row1 row2">
                <div class="row_item">
                    <label for="fname">Password</label>
                    <input v-model="password" type="text" name="password" id="fname" class="inputfield">
                    <div class="error_msg"></div>

                </div>
                <div class="row_item">
                    <label for="lname">Confirm password</label>
                    <input v-model="cpassword" type="text" name="password2" id="lname" class="inputfield">
                    <div class="error_msg"></div>

                </div>
                <p class="error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                </svg> Enter password</p>
            </div>
                <p class="comments_p">Use 8 or more characters with a mix of letters, numbers & symbols</p>

            <div class="row_bottom">
                <router-link to="/login"><span>Sign in instead</span></router-link>
                <input @submit="validate" type="submit" value="Submit" class="submit_button">

            </div>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Registration',
  data(){
      return{
      errors:{},
      fname: null,
      lname: null,
      email: null,
      password: null,
      cpassword: null
  }
  },
//   methods: {
//       validate: function(e){
//           this.errors = [];
//           if(!this.fname){
//               this.errors
//           }
//       }
//   }
  
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>