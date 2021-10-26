import { mapActions, mapGetters } from 'vuex';

export default{
    data(){
        return{
            showuser: false,
        }
    },

    computed: mapGetters(["getuserdetails"]),
    methods: {
        ...mapActions(["get_user"]),
        logout_user(){
            localStorage.removeItem('Login');
            this.$router.push('./login');
        }
    },
    created(){
        this.get_user();
        // const temp = this.get_user().toString();
        // console.log("temp", temp);
    },
    mounted(){
        console.log("created store", this.$store.getters.getuserdetails);
    }
}