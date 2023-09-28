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
            await axios.get("https://ashypls.com/endpoints/apis/FFXIVMidis.aspx",{contentType:'application/json'}).then(
                response =>{
                    this.$store.state.midiData = response.data;
                    this.$store.state.midiDataFiltered = response.data;
                    this.$store.state.appLoaded = true;
                }
            )
        }
    }
}
</script>

<style>

</style>