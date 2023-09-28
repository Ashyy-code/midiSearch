<template>
    <router-view />
</template>

<script>
import axios from 'axios';
export default {
    mounted(){
        this.loadMidiData();
    },
    methods:{
        async loadMidiData(){
            await axios.get("https://ashypls-001-site1.ftempurl.com/FFXIVMidis.aspx",{contentType:'application/json'}).then(
                response =>{
                    this.$store.state.midiData = response.data;
                    this.$store.state.midiDataFiltered = response.data;
                    this.$store.state.appLoaded = true;
                    //document.querySelector("input").focus();
                }
            )
        }
    }
}
</script>

<style>

</style>