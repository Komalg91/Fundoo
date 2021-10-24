import { mapActions, mapGetters } from 'vuex';

export default {
    data(){
        return{    
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
    props: ["note"],
    name: 'Displaynotes',

    methods: {
        ...mapActions(["get_notes","archive_note","delete_note","getarchive_note","bgcolor_note"]),
        
        changebg(color, note){
            note.bgcolor = color;
            console.log("note with bgcolor", note);
            this.bgcolor_note(note);
        },
        delete_note_btn(note){
            this.delete_note(note);
        },
        archive_note_btn(note){
            console.log("inside archive function", note);
            this.archive_note(note);
        },
    },

    computed: mapGetters(["allNotes","getarchiveNotes"])
}