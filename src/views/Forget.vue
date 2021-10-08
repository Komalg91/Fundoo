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
            <h2>Find your email</h2>
            <h3>Enter recovery email</h3>
          </div>
            <div class="row_content_left">
                <div class="row3">
                    <div class="row_item">
                        <label for="email" class="custom-field">
                          <input v-model="email" type="text" name="email" id="email" class="inputfield signinp">
                          <span class="placeholder">Email</span>
                        </label>
                    </div>
                    <p class="error"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-exclamation-circle-fill" viewBox="0 0 16 16">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z"/>
                    </svg> Enter an email</p>
                    <div class="error_msg"></div>

                </div>  
                <div class="row_bottom">
                    <input @submit="validate" type="submit" value="Next" class="submit_button_forget">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'ForgetPassword',
  
}
</script>

<style lang="scss" scoped>
@import './style.scss'
</style>