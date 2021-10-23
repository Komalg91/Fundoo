import axios from "axios";

export default class noteService{
    getAllnotes(headers) {
        return axios.get('http://localhost:3000/persons/notes/getuseridnotes', {headers});
    }

    addnotes(notes_add, headers) {
        return axios.post('http://localhost:3000/persons/notes/addnotes', notes_add, {headers});
    }

    updatenotes(notes_add, headers) {
        // const id = note._id;
        // console.log("noteservices", headers);
        // console.log(note);
        return axios.patch('http://localhost:3000/persons/notes/updateNoteContent', notes_add, {headers});
    }

    archivenotes(headers, note){
        const id = note._id;
        console.log("noteservices", headers);
        console.log(note);
        return axios.patch(`http://localhost:3000/persons/notes/updateNote/${id}`,  note, { headers });
    }

    deletenotes(headers, note){
        const id = note._id;
        console.log("noteservices", headers);
        console.log(note);
        return axios.patch(`http://localhost:3000/persons/notes/updateNotedel/${id}`, note, {headers});
    }

    updatebgcolor(headers, note){
        const id = note._id;
        return axios.patch(`http://localhost:3000/persons/notes/changebgcolor/${id}`, note, {headers})
    }

    getarchivenotes(headers){
        return axios.get(`http://localhost:3000/persons/notes/getArchieveNoteId`, { headers })
    }

    getdeletenotes(headers){
        return axios.get(`http://localhost:3000/persons/notes/getDelNoteId`, { headers })
    }

    //User
    getuser(headers){
        return axios.get(`http://localhost:3000/persons/getPersonByToken`, { headers })
    }

}