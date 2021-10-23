import noteService from "../../services/noteservice"

const noteservice = new noteService();

const state = {
    notes: [],
    archnotes: [],
    delnotes: [],
    user: []
}

const getters = {
    allNotes: (state) => state.notes,
    getarchiveNotes: (state) => state.archnotes,
    getdeleteNotes: (state) => state.delnotes,
    getuserdetails: (state) => state.user
}

const actions = {
    //Notes
        async get_notes({commit}){
            const token1 = JSON.parse(localStorage.getItem('Login'));
            console.log("display notes", token1[0]._TKN)
            const headers = {
                'x-auth-token': token1[0]._TKN
            }
            await noteservice.getAllnotes(headers).then( response => {
                    this.notes = response.data;
                    commit('setnotes', response.data);
                }).catch(() => console.log("Error"));         
            },

        async add_notes({commit}, notes_add){
            const token1 = JSON.parse(localStorage.getItem('Login'));
            console.log("display notes", token1[0]._TKN)
            const headers = {
                'x-auth-token': token1[0]._TKN
            }
            await noteservice.addnotes(notes_add, headers).then( async ()  => {
                await noteservice.getAllnotes(headers).then( response => {
                    this.notes = response.data;
                    commit('setnotes', response.data);
                    }).catch(() => console.log("Error")); 
                }).catch(() => console.log("Error"));
        },

        async update_notes({commit}, notes_add){
            console.log(notes_add);
            const token1 = JSON.parse(localStorage.getItem('Login'));
            console.log("display notes", token1[0]._TKN)
            const headers = {
                'x-auth-token': token1[0]._TKN
            }
            await noteservice.updatenotes(notes_add, headers).then( async ()  => {
                await noteservice.getAllnotes(headers).then( response => {
                    this.notes = response.data;
                    commit('setnotes', response.data);
                    }).catch(() => console.log("Error")); 
                }).catch(() => console.log("Error"));
        },

        async delete_note({commit}, note){
            const token1 = JSON.parse(localStorage.getItem('Login'));
            const headers = {
                'x-auth-token': token1[0]._TKN
            }
            await noteservice.deletenotes(headers, note).then( async ()  => {
                await noteservice.getAllnotes(headers).then( response => {
                    // this.notes = response.data;
                    commit('setnotes', response.data);
                    }).catch(() => console.log("Error")); 
                }).catch(() => console.log("Error"));
        },

        async archive_note({commit}, note){
        const token1 = JSON.parse(localStorage.getItem('Login'));
        console.log("archive notes", token1[0]._TKN)
        const headers = {
              'x-auth-token': token1[0]._TKN
          }
        //   const notesdisplay =  this.notes[index];
        //   const id = note._id
        //   console.log("display notes", headers);
        //   console.log(id)
        await noteservice.archivenotes(headers, note).then( async ()  => {
            await noteservice.getAllnotes(headers).then( response => {
                // this.notes = response.data;
                commit('setnotes', response.data);
                }).catch(() => console.log("Error")); 
            }).catch(() => console.log("Error"));
        
        console.log(this.notes);
    },

    async bgcolor_note({commit}, note){
        const token1 = JSON.parse(localStorage.getItem('Login'));
        console.log("archive notes", token1[0]._TKN)
        const headers = {
            'x-auth-token': token1[0]._TKN
        }
        await noteservice.updatebgcolor(headers, note).then(async ()  => {
            await noteservice.getAllnotes(headers).then( response => {
                // this.notes = response.data;
                commit('setnotes', response.data);
                }).catch(() => console.log("Error")); 
            }).catch(() => console.log("Error"));
    },

    async getarchive_note({commit}){
        const token1 = JSON.parse(localStorage.getItem('Login'));
        console.log("get archive", token1[0]._TKN)
        const headers = {
              'x-auth-token': token1[0]._TKN
          }
        //   console.log("get archive store", note.userid);
        await noteservice.getarchivenotes(headers).then( 
            // async ()  => {
        //     await noteservice.getAllnotes().then( response => {
        //         this.notes = response.data;
        //         commit('setnotes', response.data);
        //         }).catch(() => console.log("Error")); 
        //     }
            (response) =>{
            // console.log("success", note._id);
            // this.archnotes = response.data;
            // const userid = note.userid;
            commit('setarchivenotes', response.data)
            console.log(response.data);}
        ).catch(() => console.log("Error"));
    },
    
    async getdel_note({commit}){
        const token1 = JSON.parse(localStorage.getItem('Login'));
        console.log("get archive", token1[0]._TKN)
        const headers = {
              'x-auth-token': token1[0]._TKN
          }
        //   console.log("get archive store", note.userid);
        await noteservice.getdeletenotes(headers).then( 
            // async ()  => {
        //     await noteservice.getAllnotes().then( response => {
        //         this.notes = response.data;
        //         commit('setnotes', response.data);
        //         }).catch(() => console.log("Error")); 
        //     }
            (response) =>{
            // console.log("success", note._id);
            // this.archnotes = response.data;
            // const userid = note.userid;
            commit('setdeletenotes', response.data)
            console.log(response.data);}
        ).catch(() => console.log("Error"));
    },

    //Users
    async get_user({commit}){
        const token1 = JSON.parse(localStorage.getItem('Login'));
        console.log("display notes", token1[0]._TKN)
        const headers = {
            'x-auth-token': token1[0]._TKN
        }
        await noteservice.getuser(headers).then( response => {
            console.log(response.data, typeof(response.data))
                commit('setuser', response.data);
            }).catch(() => console.log("Error"));         
        },

}

const mutations = {
    setnotes: (state, notes) => (state.notes = notes),
    setarchivenotes: (state, notes2) => (state.archnotes = notes2),
    setdeletenotes: (state, notesdel) => (state.delnotes = notesdel),
    setuser: (state, userdetails) => (state.user = userdetails)
    // setarchivenotes: (state, ) => (state.notes = state.notes.filter(note => note.userid !== userid))
}


export default{
    state, getters, actions, mutations
}