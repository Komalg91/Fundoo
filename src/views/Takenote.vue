<template>
    <div class="container">
        <div class="take_note_container">
            <div class="take_note_content">
                <div class="take_title">
                    <input type="text" class="title_class" name="" id="" placeholder="Title" v-model="title">
                    <!-- <span class="take_note_text">Take a note...</span> -->
                </div>

                <div class="take_note">
                    <input type="text" class="note_class" name="" id="" @focus="toggle_note" placeholder="Take a note..." v-model="description">
                    <!-- <span class="take_note_text">Take a note...</span> -->
                </div>  

                <div class="toggle_btn">
                    <div class="toggle_item">
                        <button class="reminder_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 22c1.1 0 2-.9 2-2h-4c0 1.1.9 2 2 2zm6-6v-5c0-3.07-1.63-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.64 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2zm-2 1H8v-6c0-2.48 1.51-4.5 4-4.5s4 2.02 4 4.5v6z"/></svg>
                        </button>
                        <button class="collaborator_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g>
                            <path d="M20,9V6h-2v3h-3v2h3v3h2v-3h3V9H20z M9,12c2.21,0,4-1.79,4-4c0-2.21-1.79-4-4-4S5,5.79,5,8C5,10.21,6.79,12,9,12z M9,6 c1.1,0,2,0.9,2,2c0,1.1-0.9,2-2,2S7,9.1,7,8C7,6.9,7.9,6,9,6z M15.39,14.56C13.71,13.7,11.53,13,9,13c-2.53,0-4.71,0.7-6.39,1.56 C1.61,15.07,1,16.1,1,17.22V20h16v-2.78C17,16.1,16.39,15.07,15.39,14.56z M15,18H3v-0.78c0-0.38,0.2-0.72,0.52-0.88 C4.71,15.73,6.63,15,9,15c2.37,0,4.29,0.73,5.48,1.34C14.8,16.5,15,16.84,15,17.22V18z"/></g></svg>
                        </button>
                        <button class="archieve_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"/></svg>
                        </button>
                        <button class="delete_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
                        </button>
                        <button class="color_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><g><g><path d="M12,22C6.49,22,2,17.51,2,12S6.49,2,12,2s10,4.04,10,9c0,3.31-2.69,6-6,6h-1.77c-0.28,0-0.5,0.22-0.5,0.5 c0,0.12,0.05,0.23,0.13,0.33c0.41,0.47,0.64,1.06,0.64,1.67C14.5,20.88,13.38,22,12,22z M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8 c0.28,0,0.5-0.22,0.5-0.5c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16 c2.21,0,4-1.79,4-4C20,7.14,16.41,4,12,4z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></g></g></g></g></svg>
                        </button>
                        <button class="more_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="18px" viewBox="0 0 24 24" width="18px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2z"/></svg>
                            <div class="dropmenu">
                                <span>Delete note</span>
                                <span>Add label</span>
                            </div>
                        </button>
                        <!-- <button class="archieve_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/>
                            <path d="M20.54 5.23l-1.39-1.68C18.88 3.21 18.47 3 18 3H6c-.47 0-.88.21-1.16.55L3.46 5.23C3.17 5.57 3 6.02 3 6.5V19c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V6.5c0-.48-.17-.93-.46-1.27zM6.24 5h11.52l.81.97H5.44l.8-.97zM5 19V8h14v11H5zm8.45-9h-2.9v3H8l4 4 4-4h-2.55z"/></svg>
                        </button>
                        <button class="delete_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000">
                            <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"/></svg>
                        </button>
                        <button class="color_btn">
                            <svg xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="24px" viewBox="0 0 24 24" width="24px" fill="#000000"><g><rect fill="none" height="24" width="24"/></g><g><g><g><g><path d="M12,22C6.49,22,2,17.51,2,12S6.49,2,12,2s10,4.04,10,9c0,3.31-2.69,6-6,6h-1.77c-0.28,0-0.5,0.22-0.5,0.5 c0,0.12,0.05,0.23,0.13,0.33c0.41,0.47,0.64,1.06,0.64,1.67C14.5,20.88,13.38,22,12,22z M12,4c-4.41,0-8,3.59-8,8s3.59,8,8,8 c0.28,0,0.5-0.22,0.5-0.5c0-0.16-0.08-0.28-0.14-0.35c-0.41-0.46-0.63-1.05-0.63-1.65c0-1.38,1.12-2.5,2.5-2.5H16 c2.21,0,4-1.79,4-4C20,7.14,16.41,4,12,4z"/><circle cx="6.5" cy="11.5" r="1.5"/><circle cx="9.5" cy="7.5" r="1.5"/><circle cx="14.5" cy="7.5" r="1.5"/><circle cx="17.5" cy="11.5" r="1.5"/></g></g></g></g></svg>
                        </button> -->
                    </div>
                    <div class="toggle_item2">
                        <button @click="toggle_none">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="display_container">
        <div class="add_notes">
            <p> {{notes_add.title}} </p>
            <p> {{notes_add.description}} </p>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
    name:'Takenote',
    data() {
        return {
            notes_add: {
                title: '',
                description: ''
            }
        }
    },
    methods: {
        ...mapActions(["add_notes"]),
        toggle_note(){
            document.querySelector('.title_class').style.display = "unset";
            document.querySelector('.toggle_btn').style.display = "flex";
        },
        toggle_none(){
            
            document.querySelector('.title_class').style.display = "none";
            document.querySelector('.toggle_btn').style.display = "none";
            let notes_add = {
                title: this.title,
                description: this.description
            }

            this.add_notes(notes_add);

            

            // const token1 = JSON.parse(localStorage.getItem('Login')).token;
            // console.log("add notes", token1);
            // const headers = {
            //       'x-auth-token': token1
            //   }
            //   console.log("add notes", headers);
            //   console.log('add notes', notes_add);
            // if((this.title !== null) || (this.description !== null)){
            //     axios.post('http://localhost:3000/persons/notes/addnotes', notes_add, {headers}).then(() => console.log("add notes Success")).catch(() => console.log("add notes Error"));
            // }
        }
    }

}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');

body{
    margin: 0;
    padding: 0;
    width: 100%;
    overflow-x: hidden;
}
*{
    box-sizing: border-box;
}
.container{
    margin: 0 auto;
    padding: 0;
    width: 90%;
    // background-color: burlywood;
}
.take_note_container{
    min-height: 20vh;
    // min-width: 600px;
    width: 100%;
    position: relative;

}
.take_note_content{
    min-height: 10vh;
    width: 100%;
    position: absolute;
    // padding: 4px 16px 12px 16px;
    // border: 1px solid #000;
    border-radius: 10px;
    box-shadow: 1px 2px 2px 0px rgb(65 69 73 / 10%), 1px 3px 3px 1px rgb(65 69 73 / 15%) ;
}
// .take_note_text{
//     letter-spacing: .01428571em;
//     font-family: 'Roboto', sans-serif;
//     font-size: .875rem;
//     font-weight: 400;
//     line-height: 1.25rem;   
// }

input[type=text]{
    width: 100%;
    line-height: 2;
    border: none;
    outline: none;
    white-space: normal;
    word-wrap: break-word;
    overflow-wrap: break-word;
}
.take_note ::placeholder{
    font-family: 'Roboto', sans-serif;    
    font-size: 0.8rem;
    font-weight: 550;
    line-height: 3;
    color: #202124;
}

.take_title, .take_note{
    padding: 4px 16px 12px 16px;
}
.toggle_btn{
    padding: 4px 16px 12px 0px;
}
// .toggle_btn button:hover{

// }


.take_title ::placeholder{
    color: rgba(0,0,0,0.6);
    font-family: 'Roboto', sans-serif;    
    font-size: 1rem;
    font-weight: 550;
}

.take_title input[type=text]{
    display: none;
}

.take_note input[type=text]:focus + .take_title input[type=text]{
        display: unset;
}
.toggle_btn{
    display: none;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

.toggle_btn button{
    background-color: transparent;
    outline: none;
    border: none;
    
}
.toggle_item{
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
}
.toggle_item button{
    width: 40px;
    height: 40px;
    margin: 0 8px;
}
@media screen and (max-width:930px) {
    .toggle_item button{
        margin: 0 3px;
    }
}

@media screen and (max-width:700px) {
    .container{
        width: 80%;
    }
    .toggle_item button{
        width: 30px;
        height: 30px;
    }
}
@media screen and (max-width:600px) {
    .toggle_btn{
        flex-direction: column;
        // align-items: flex-end;
    }
    .toggle_item2{
        align-self: flex-end;
        padding: 8px 24px;
    }
}
@media screen and (max-width:400px) {
    .container{
        width: 80%;
    }
    .take_note_container{
        margin: 5% auto auto 30%;
    }
    .toggle_item button{
        width: 32px;
    }
}
</style>