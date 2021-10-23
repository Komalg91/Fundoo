import { mapActions, mapGetters } from 'vuex';

export default{
methods: {
    ...mapActions(["getarchive_note"]),

    getarchivenote(){
        this.getarchive_note();
    },
    route_archive(){
        this.$router.push('./displayarch')
    },
    route_display(){
        this.$router.push('./dashboard')
    },
    route_trash(){
        this.$router.push('./displaydel')
    }
},
computed: mapGetters(["allNotes"]),
// data() {
//         return{
//             nav_array: [
//                 {
//                     title1: "Keep",
//                     title2: "Notes",
//                     svgimg: require('../assets/lightbulb_black_24dp.svg')
//                 },
//                 {
//                     title1: "Reminders",
//                     title2: "Reminders",
//                     svgimg: require('../assets/lightbulb_black_24dp.svg')
//                 },
//                 {
//                     title1: "Keep",
//                     title2: "Edit labels",
//                     svgimg: require('../assets/lightbulb_black_24dp.svg')
//                 },
//                 {
//                     title1: "Archieve",
//                     title2: "Archieve",
//                     svgimg: require('../assets/lightbulb_black_24dp.svg')
//                 },
//                 {
//                     title1: "Trash",
//                     title2: "Trash",
//                     svgimg: require('../assets/lightbulb_black_24dp.svg')
//                 },
//             ]
//         }
//     }
}