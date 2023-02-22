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

const url = 'https://swapi.dev/api/people/10'

interface IApiData {
	"name": string,
	"height": number,
	"mass": number,
	"hair_color": string,
	"skin_color": string,
	"eye_color": string,
	"birth_year": string,
	"gender": string,
	"homeworld": string,
	"films": string[],
	"species": string[],
	"vehicles": string[],
	"starships": [
		"https://swapi.dev/api/starships/12/",
		"https://swapi.dev/api/starships/22/"
	],
	"created": "2014-12-09T13:50:51.644000Z",
	"edited": "2014-12-20T21:17:56.891000Z",
	"url": "https://swapi.dev/api/people/1/"
}
}

export default Vue.extend({
  name: "AnalyticsVue",
  data() {
    return {
      // docSnap,
      apiData : {}
    }
  },
    mounted () {
    axios
      .get(url)
      .then(response => (this.apiData = response))
  }
} )


</script>

<template>
  <div>
    <div class="analytics" v-for="(person) in apiData" v-bind:key=person.name>
      <h1>{{ person }}</h1>
    </div>
  </div>
</template>