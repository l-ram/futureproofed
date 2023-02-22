<script lang="ts">

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

const url = 'https://swapi.dev/api/planets/'

interface ISwapiApiPlanetData {
	name: string
	rotation_period: string,
	orbital_period: string,
	diameter: string,
	climate: string,
	gravity: string,
	terrain: string,
	surface_water: string,
	population: string,
	residents: string[],
	films: string[],
	created: string,
	edited: string,
	url: string
}

interface DataObjectType {
	apiData: ISwapiApiPlanetData[];
}

export default Vue.extend({
	name: "AnalyticsVue",
	data(): DataObjectType {
		return {
			// docSnap,
			apiData: []
		};
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
				<img src="" alt="Sample photo">
				<div class="text">
					<!-- Name -->
					<h3>{{ planet.name }}</h3>
					<!-- Stats -->
					<p>{{ planet.climate}}</p>
					<h4>{{ planet.terrain.charAt(0).toUpperCase() + planet.terrain.slice(1) }}</h4>
					<!-- Image -->
					<img src="/pix/stock/css_grid_placement_lines_and_tracks.png" alt="Sample photo">
					<p>Seamlessly visualize quality intellectual capital without superior collaboration and brain storming.
					</p>
					<!-- Text over -->
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