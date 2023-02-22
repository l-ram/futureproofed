<script lang="js">

import Vue from "vue";
import axios from 'axios';

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

const url = 'https://swapi.dev/api/planets/'

interface ISwapiPlanetsData {
	name: string
	rotation_period: "23",
	orbital_period: "304",
	diameter: "10465",
	climate: string,
	gravity: string,
	terrain: string,
	surface_water: "1",
	population: "200000",
	residents: string[],
	films: string[],
	created: string,
	edited: string,
	url: string
}

export default Vue.extend({
	name: "AnalyticsVue",
	data() {
		return {
			// docSnap,
			apiData: {}
		}
	},
	mounted() {
		axios
			.get(url)
			.then(response => (this.apiData = response.data.results))
	}
});


</script>

<template>
	<div>
		<!-- <div v-for="(planet, idx) in apiData" :key="idx" :planet="planet" class="analytics">
			
			</div> -->

		<main class="grid">

			<article v-for="(planet, idx) in apiData" :key="idx" :planet="planet">
				<img src={{planet.}} alt="Sample photo">
				<div class="text">
					<h3>{{ planet.name }}</h3>
					<p>Collaboratively administrate empowered markets via plug-and-play networks.</p>
					<h4>Going forward</h4>
					<img src="/pix/stock/css_grid_placement_lines_and_tracks.png" alt="Sample photo">
					<p>Seamlessly visualize quality intellectual capital without superior collaboration and brain storming.
					</p>
					<p>Proactively envisioned multimedia based expertise and cross-media growth strategies.</p>
					<button>Here's why</button>
				</div>
			</article>

		</main>





	</div>
</template>

<style>
.analytics {
	font-size: .75em;
}


.grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
	grid-gap: 20px;
}

.grid>article {
	border: 1px solid #ccc;
	border-radius: 15px;
	box-shadow: 2px 2px 6px 0px rgba(0, 0, 0, 0.3);
}

.grid>article img {
	max-width: 100%;
}

.text {
	padding: 0 20px 20px;
}

.text>button {
	background: gray;
	border-radius: 5px;
	border: 0;
	color: white;
	padding: 10px;
	width: 100%;
}

.grid>article:nth-child(1) {
	grid-column: span 2;
	grid-row: span 2;
}
</style>