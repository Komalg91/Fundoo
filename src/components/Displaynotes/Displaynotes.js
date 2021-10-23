import { mapActions, mapGetters } from 'vuex';
import Updatenote from '../Updatenote/Updatenote.vue'

export default {
    data(){
        return{
            
            expand_box: false,
            color_array:[
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
                    color: "#aecbfa"
                },
                {
                    color: "#fdcfe8"
                },
                {
                    color: "#e6c9a8"
                },
            ],
            bgc:{
                backgroundColor: ''
            },
            mystyle: {
                backgroundColor: '',
                // height: "35px",
                // width: "35px",
            }
        }
    },
    name: 'Displaynotes',
    components: {
        Updatenote
    },
    // data(){
    //     return {
    //         notes: []
    //     }
    // },
    methods: {
        ...mapActions(["get_notes","archive_note","delete_note","getarchive_note"]),
        
        changebg: function(bgcolor){
            this.mystyle.backgroundColor = bgcolor
        },
        delete_note_btn(note){
            this.delete_note(note);
        },
        archive_note_btn(note){
            this.archive_note(note);
            // const token1 = JSON.parse(localStorage.getItem('Login'));
            // console.log("display notes", token1[0]._TKN)
            // const headers = {
            //       'x-auth-token': token1[0]._TKN
            //   }
            //   const notesdisplay =  this.notes[index];
            //   const id = index
            //   console.log("display notes", headers);
            //   console.log(id)
            // await axios.patch(`http://localhost:3000/persons/notes/updateNote/${id}`, {headers}).then(()=>{
            //     console.log("success archived zhala")
            //     }
            // ).catch(() => console.log("Error"));
        },

        getarchive_note_btn(note){
            this.getarchive_note(note);
        },

        redcolor(note){
            note.bgcolor = "#777";
            console.log(note.bgcolor);
        }
    },
    created(){
        this.get_notes();
    },
    // updated(){
    //     this.getarchive_note();
    // },
    computed: mapGetters(["allNotes","getarchiveNotes"])
    

    //     noteservice.getAl.then(
    //         response => {
    //             this.notes = response.data;
    //         }).catch(() => console.log("Error"));
    // }
}