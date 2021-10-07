<template>
  <div class="register_container">
      <div class="rows">
          <span class="letter1">F</span>
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
                <router-link to="/foo" :class="router_link">Sign in instead</router-link>
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
.rows{
    padding: 0;
    min-width: 40vw;
    width: 40%;
    margin: 0 auto;
    border: 1px solid #dadce0;
    padding: 3%;
    text-align: left;
    border-radius: 2%;
    margin-top: 20vh;
    // display: flex;
}
.row_content_left{
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
    
}
.rows .comments_p{
    margin-top: 0%;
    font-size: 0.7rem;
}
.row_item{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.row1{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0% 10%;
    margin-bottom: 4vh;
    width: 100%;
}
.row3{
    display: grid;
    grid-template-columns: 1fr;
    gap: 0% 10%;
    margin-bottom: 4vh;
    width: 100%;
}
// .row2{

// }
.row_item .inputfield{
    margin-top: 2vh;
    border: 1px solid #dadce0;
    font-size: 1rem;
    padding: 0.3rem;
    width: 100%;

}

input[type="submit"] {
    // flex: 2;
    padding: 10px 20px;
    border: 1px solid #1a73e8;
    border-radius: 5px;
    color: #FFFFFF;
    cursor: pointer;
    background-color:#1a73e8;
}
.error{
    margin-top:1vh;
    color: red;
    font-size: 0.8em;
}
svg{
    color: red;
}
input[type=text]{
    border: 2px solid red;
    border-radius: 4px;
}
input[type=text]:focus{
    border-width: thick;
    border: 0px solid rgb(26, 115, 232) !important;
    outline-color: rgb(26, 115, 232);
}
.comments_p{
    display: none;
}
.row_bottom{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.router_link{
    color: #1a73e8; 
}
a{
    text-decoration: none;
    font-size: 0.9rem;
}
@media screen and (max-width:700px){
    .row1{
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>