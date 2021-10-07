<template>
  <div class="register_container">
      <div class="rows">
        <div class="row_content_left">
            <div class="row2">
                <div class="row_item">
                    <label for="username" placeholder="Username"></label>
                    <input type="text" name="username" id="username" class="inputfield" placeholder="">
                </div>
            </div>
            <div class="row2">
                <div class="row_item">
                    <label for="fname">Password</label>
                    <input type="text" name="password" id="fname" class="inputfield" placeholder="password">
                </div>
            </div>
            <div class="row2">
                <input type="submit" value="Login">

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
label[placeholder]{
    margin-top: 5em;
}
.rows{
    padding: 0;
    min-width: 30vw;
    width: 30%;
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
.row2{
    margin-bottom: 4vh;
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
    flex: 2;
    padding: 10px;
    border: 1px solid #1a73e8;
    color: #FFFFFF;
    cursor: pointer;
    background-color:#1a73e8;
}
input:focus{
    background: pink;
}
@media screen and (max-width:700px){
    .row1{
        grid-template-columns: repeat(1, 1fr);
    }
}
</style>