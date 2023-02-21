<template>
  <div>

    <div class="list" v-for="(headCategory, index) in listHeadCategory" :key="headCategory">
      {{ index }}
      <h1>{{ headCategory }}</h1>

      <div class="sub-list" v-for="subCats in listSubCategories">
        <div>
          {{ subCats.title }}
        </div>
        <div v-for="building in subCats.buildings" :key="building"
        >
          {{ building }}
        </div>



      </div>


    </div>

    <DataForm />

  </div>
</template>

<script lang="ts">

import Vue from "vue";
import DataForm from '../components/dataForm/DataForm.vue';

const listHeadCategory = {
  catName: "Company Facilities"
}

const listSubCategories = [
  {
    title: "Fossil Fuels",
    buildings: ["HeadQuarters", "Office1", "Office2", "Office3", "Factory 1", "Office2"]
  },
  {
    title: "Processes"
  }
]


export default Vue.extend({
  name: "DataView",
  data() {
    return {
      listHeadCategory,
      listSubCategories
    }
  },
  components: {
    DataForm,
  },
  methods: {
  }
});

</script> 