<template>
  <div v-if="!this.$store.state.appLoaded" class="loader">
      Loading Data..
  </div>
  <div v-if="this.$store.state.appLoaded" class="app-wrapper">
    <div class="search-wrap">
      <input type="text" v-model="this.$store.state.searchTerm" />
      <i class="fas fa-search"></i>
    </div>

    <div class="midis-wrapper">
      <a
        v-for="(midi, index) in this.$store.state.midiDataFiltered"
        :key="index"
        class="midi"
        :href="midi.link"
      >
      <i class="fas fa-file-audio"></i>
      <div class="midi-details">
        <span ttl>{{ midi.Title }}</span>
        <span cm>{{ midi.Comments.replace('Comment:','') }}</span>
      </div>
    </a>
    </div>
  </div>
</template>

<script>
import { stringifyQuery } from "vue-router";
import store from "../store";

export default {
  mounted(){
   
  },
  watch: {
    "$store.state.searchTerm": function () {
      //begin the filter
      store.state.midiDataFiltered = [];
      store.state.midiData.forEach((midi) => {
        if (
          midi.Title.toLowerCase().includes(
            store.state.searchTerm.toLowerCase()
          )
        ) {
          store.state.midiDataFiltered.push(midi);
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped>

.loader{
  width:100vw;
  height:100vh;
  display: grid;
  place-items: center;
  color:white;
}

.midis-wrapper{

  display:flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap:1rem;
  padding:1rem;

  a{
    text-decoration: none;
    color:unset;
  }

  .midi{
    width:100%;
    background:#959ea6;
    flex-grow:1;
    border-radius: .25rem;
    padding:.5rem;
    display:flex;
    justify-content: flex-start;
    align-items: flex-start;
    overflow: hidden;
    cursor: pointer;

    &:hover{
      background:#98a8b7;
    }

    
    .midi-details{
      display:flex;
      flex-direction: column;
      height:100%;
    }

    i{
      font-size:200%;
    }

    span{
      &[cm]{
        font-size:70%;
        color:#373f47;
      }
    }

  }

}
.search-wrap{
  position: relative;

  i{
    position: absolute;
    top:1rem;
    left:1rem;
    font-size:150%;
    color:white;
  }

  input{
    width:100%;
    padding:1rem;
    font-size: 100%;
    text-transform: uppercase;
    padding-left:3.5rem;
    border:0;
    outline:0;
    background:#121d28;
    color:white;
  }
}

</style>