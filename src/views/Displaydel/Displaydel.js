import { mapActions, mapGetters } from 'vuex';
import Sidebar from '../../components/Sidebar/Sidebar.vue';
import Navheader from '../../components/Navheader/Navheader.vue';
import Notebuttons from '../../components/Notebuttons/Notebuttons.vue';



export default {
    name: 'Displaydel',
    components: {
        Sidebar, Navheader, Notebuttons
    },
    methods: {
        ...mapActions(["getdel_note","delete_note"]),

        delete_btn(note){
            this.delete_note(note);
        },
        redcolor(note){
            note.bgcolor = "#777";
            console.log(note.bgcolor);
        }
    },
    created(){
        // this.get_notes();
        this.getdel_note();
    },
    computed: mapGetters(["getdeleteNotes"])

    //     noteservice.getAl.then(
    //         response => {
    //             this.notes = response.data;
    //         }).catch(() => console.log("Error"));
    // }
}