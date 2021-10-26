import { mapActions, mapGetters } from 'vuex';

export default {
    props: ["note"],
    name: 'Displaynotes',

    methods: {
        ...mapActions(["get_notes","deleteforever_note","delete_note"]),
        
        changebg(color, note){
            note.bgcolor = color;
            console.log("note with bgcolor", note);
            this.bgcolor_note(note);
        },
        deleteforever_note_btn(note){
            this.deleteforever_note(note);
        },
        restore_note_btn(note){
            this.delete_note(note);
        },
    },

    computed: mapGetters(["allNotes","getarchiveNotes"])
}