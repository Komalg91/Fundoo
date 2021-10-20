import noteService from "../../services/noteservice"

const noteservice = new noteService();

const state = {
    notes: []
}

const getters = {
    allNotes: (state) => state.notes
}

const actions = {
    async get_notes({commit}){
        await noteservice.getAllnotes().then( response => {
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
                await noteservice.getAllnotes().then( response => {
                    this.notes = response.data;
                    commit('setnotes', response.data);
                    }).catch(() => console.log("Error")); 
                }).catch(() => console.log("Error"));
        },

        async archive_note({commit}, index){
        const token1 = JSON.parse(localStorage.getItem('Login'));
        console.log("display notes", token1[0]._TKN)
        const headers = {
              'x-auth-token': token1[0]._TKN
          }
        //   const notesdisplay =  this.notes[index];
          const id = index
          console.log("display notes", headers);
          console.log(id)
        await noteservice.archivenotes(headers,id).then( async ()  => {
            await noteservice.getAllnotes().then( response => {
                this.notes = response.data;
                commit('setnotes', response.data);
                }).catch(() => console.log("Error")); 
            }).catch(() => console.log("Error"));
        
        console.log(this.notes);
    }
}

const mutations = {
    setnotes: (state, notes) => (state.notes = notes),
}


export default{
    state, getters, actions, mutations
}