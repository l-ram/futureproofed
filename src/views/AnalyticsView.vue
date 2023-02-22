<script lang="ts">

import Vue from "vue";
import axios from  'axios';

// import { db } from "@/firebase/config";
// import { doc, getDoc } from "firebase/firestore";


// // get firebase data
// const docRef = doc(db, "emissionData");
// const docSnap = await getDoc(docRef);

// if (docSnap.exists()) {
//   console.log('Document data:', docSnap.data());
// } else {
//   console.log("No such data")
// }

// API array

const apiData: [] = []
const url = 'https://swapi.dev/api/people/10'


export default Vue.extend({
  name: "AnalyticsVue",
  data() {
    return {
      // docSnap,
      apiData
    }
  },
  mounted() {
    axios.get('https://api.example.com/items')
      .then(response => {
        this.apiData: = response.data;
      })
      .catch(error => {
        console.log(error);
      });
} 



console.log(apiData);

</script>


<template>
  <div>
    <div class="analytics" v-for="(person) in apiData" :key="person">
      <h1>{{ person }}</h1>
    </div>
  </div>
</template>