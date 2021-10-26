import { mapActions } from 'vuex';

export default {
    name:'Takenote',
    data() {
        return {
            notes_add: {
                title: '',
                description: ''
            },
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
    methods: {
        ...mapActions(["add_notes"]),
        changebg(color){
            this.bgcolor = color;
        },
        delete_note_btn(){
            this.isdeleted = true;
        },
        archive_note_btn(){
            this.isarchieved = true;
        },
        toggle_note(){
            document.querySelector('.title_class').style.display = "unset";
            document.querySelector('.toggle_btn').style.display = "flex";
            document.querySelector('.takenote_text_btn').style.display = "none";
        },
        toggle_none(){
            
            document.querySelector('.title_class').style.display = "none";
            document.querySelector('.toggle_btn').style.display = "none";
            document.querySelector('.takenote_text_btn').style.display = "flex";

            let notes_add = {
                title: this.title,
                description: this.description,
                bgcolor: this.bgcolor,
                isdeleted: this.isdeleted,
                isarchieved: this.isarchieved
                
            }

            this.add_notes(notes_add);
            console.log(notes_add);

            

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