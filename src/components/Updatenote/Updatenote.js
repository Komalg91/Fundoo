import { mapActions } from 'vuex';
import Notebuttons from '../Notebuttons/Notebuttons.vue' 

export default {
    name:'Takenote',
    data() {
        return {
            notes_add: {
                title: '',
                description: ''
            },
            // note: this.note,
            color_array:[
                {
                    color: "#ffffff"
                },
                {
                    color: "#f28b82"
                },
                {
                    color: "#fbbc04"
                },
                {
                    color: "#fff475"
                },
                {
                    color: "#ccff90"
                },
                {
                    color: "#a7ffeb"
                },
                {
                    color: "#cbf0f8"
                },
                {
                    color: "#aecbfa"
                },
                {
                    color: "#d7aefb"
                },
                {
                    color: "#fdcfe8"
                },
                {
                    color: "#e6c9a8"
                },
                {
                    color: "#e8eaed"
                }
            ],
        }
    },
    props: ["notes"],
    components: {
        Notebuttons
    },
    methods: {
        ...mapActions(["update_notes"]),
        // toggle_note(){
        //     // document.querySelector('.title_class').style.display = "unset";
        //     document.querySelector('.toggle_btn').style.display = "flex";
        //     // document.querySelector('.takenote_text_btn').style.display = "none";
        // },
        changebg(color, note){
            note.bgcolor = color;
            console.log("note with bgcolor", note);
            this.bgcolor_note(note);
        },
        update_note(note){
            console.log("displaynotes", note);
            note.title =  this.title,
            note.description = this.description
            console.log("displaynotes2", note);
            this.update_notes(note)
        },
        // toggle_none(){
            
        //     // document.querySelector('.title_class').style.display = "none";
        //     // document.querySelector('.toggle_btn').style.display = "none";
        //     // document.querySelector('.takenote_text_btn').style.display = "flex";

        //     let notes_add = {
        //         title: this.title,
        //         description: this.description
        //     }

        //     this.update_notes(notes_add);

            

        //     // const token1 = JSON.parse(localStorage.getItem('Login')).token;
        //     // console.log("add notes", token1);
        //     // const headers = {
        //     //       'x-auth-token': token1
        //     //   }
        //     //   console.log("add notes", headers);
        //     //   console.log('add notes', notes_add);
        //     // if((this.title !== null) || (this.description !== null)){
        //     //     axios.post('http://localhost:3000/persons/notes/addnotes', notes_add, {headers}).then(() => console.log("add notes Success")).catch(() => console.log("add notes Error"));
        //     // }
        // }
    },
    // created(){
    //     console.log(this.note);
    // }

}