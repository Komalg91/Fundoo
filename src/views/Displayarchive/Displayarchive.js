import { mapActions, mapGetters } from 'vuex';
import Sidebar from '../../components/Sidebar/Sidebar.vue';
import Navheader from '../../components/Navheader/Navheader.vue';


export default {
    data(){
        return{
            mystyle: {
                backgroundColor: "#777",
                height: "20px",
                width: "20px"
            },
            mystyle2:{
                 backgroundColor: "#b6c912",
                 height: "20px",
                 width: "20px"
            }
        }
    },
    name: 'Displaynotes',
    components: {
        Sidebar, Navheader
    },
    // data(){
    //     return {
    //         notes: []
    //     }
    // },
    methods: {
        ...mapActions(["getarchive_note","archive_note"]),

        async unarchive_btn(note){
            await this.archive_note(note);
        },
        redcolor(note){
            note.bgcolor = "#777";
            console.log(note.bgcolor);
        }
    },
    created(){
        // this.get_notes();
        this.getarchive_note();
    },
    computed: mapGetters(["getarchiveNotes"])

    //     noteservice.getAl.then(
    //         response => {
    //             this.notes = response.data;
    //         }).catch(() => console.log("Error"));
    // }
}