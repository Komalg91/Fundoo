import axios from "axios";

export default class noteService{
    getAllnotes() {
        return axios.get('http://localhost:3000/persons/notes/getnotes');
    }

    addnotes(notes_add, headers) {
        return axios.post('http://localhost:3000/persons/notes/addnotes', notes_add, {headers});
    }

    archivenotes(headers, id){
        console.log("noteservices", headers);
        return axios.patch(`http://localhost:3000/persons/notes/updateNote/${id}`, {headers});
    }


}