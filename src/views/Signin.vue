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
                <div class="row2 row3">
                    <div class="row_item">
                        <label for="username">Email</label>
                        <input v-model="email" type="text" name="username" id="username" class="inputfield">
                    </div>
                    <p class="error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg> Enter an email</p>
                    <div class="error_msg"></div>

                </div>
                <div class="row2 row3">
                    <div class="row_item">
                        <label for="fname">Password</label>
                        <input v-model="password" type="text" name="password" id="fname" class="inputfield">
                    </div>
                    <p class="error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg> Enter a password</p>
                    <div class="error_msg"></div>

                </div>  
                <div class="row_bottom">
                    <router-link to="/register"><span>Create account</span></router-link>
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
  
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>