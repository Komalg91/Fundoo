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
        // toggle_note(){
        //     // document.querySelector('.title_class').style.display = "unset";
        //     document.querySelector('.toggle_btn').style.display = "flex";
        //     // document.querySelector('.takenote_text_btn').style.display = "none";
        // },
        toggle_none(){
            
            // document.querySelector('.title_class').style.display = "none";
            // document.querySelector('.toggle_btn').style.display = "none";
            // document.querySelector('.takenote_text_btn').style.display = "flex";

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