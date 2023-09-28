import { createStore } from "vuex";
export default createStore({
    state(){
        return{
            appLoaded:false,
            midiData:null,
            midiDataFiltered:null,
            searchTerm:null,
        }
    }
})