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
	<div class="analytics">
		<h1 class="title">Star Wars planets from SWAPI API</h1>

		<main class="grid">
			<article v-for="(planet, idx) in apiData" :key="idx" :planet="planet">
				<img src="../assets/star-wars-tatooine.jpg" alt="Sample photo">
				<div class="text">
					<!-- Name -->
					<h3>{{ planet.name }}</h3>
					<!-- Stats -->
					<p>{{ planet.climate.charAt(0).toUpperCase() + planet.climate.slice(1) }}</p>
					<h4>{{ planet.terrain.charAt(0).toUpperCase() + planet.terrain.slice(1) }}</h4>
					<!-- Image -->
					<font-awesome-icon icon="fa-solid fa-jedi" />
					<p>Population: {{ planet.population }}</p>
					<!-- Text over -->
					<p>Diameter:{{ planet.diameter }}</p>
					<p>Surface water:{{ planet.surface_water }}</p>
					<button> <a v-bind:href="planet.url">Visit planet</a></button>
				</div>
			</article>
		</main>





	</div>
</template>

<style>
.analytics {
	position: relative;
	padding-left: 80px;
	padding-top: 80px;
	font-size: .75em;
}

.title {
	text-align: center;
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
	border-radius: 15px 15px 0 0;
}

.text {
	padding: 0 20px 20px;
}

.text>button {
	color: black;
	background: gray;
	border-radius: 5px;
	border: 0;
	padding: 10px;
	width: 100%;
	text-decoration: none;
}

.grid>article:nth-child(1) {
	grid-column: span 2;
	grid-row: span 2;
}
</style>