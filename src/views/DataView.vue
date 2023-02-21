<template>

<div>

  <div class="list">
    <h2 v-for="building in buildings" :key="name">{{ building }}</h2>
  </div>

  <DataForm />

</div>

  
</template>

<script lang="ts">

import Vue from "vue";
import DataForm from '../components/dataForm/DataForm.vue';


export default Vue.extend({
  name: "DataView",
  data() {
    return {
        buildings: [
        "Headquarters", "Office1", "Office2", "Office3", "Office4", "Factory1", "Factory2"
      ]};
    }
  },
  components: {
    DataForm,

  },
  methods: {
  }
});

</script> 