<template>
  <div class="dataView">

    <div class="list-bg">
      <div v-for="(headCategory, index) in listHeadCategory" :key="headCategory">
        <h3 class="list-head">{{ headCategory }}</h3>

        <div v-for="subCats in listSubCategories">
          <div class="sub-list">
            {{ subCats.title }}
          </div>
          <div class="buildings" v-for="building in subCats.buildings" :key="building">
            {{ building }}
          </div>

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

<style scoped>
.dataView {
  background-color: #cecece;
  position: relative;
  padding-left: 8%;
  padding-top: 10%;
}
</style>

<style>
.list-bg {
  border-radius: 15px;
  width: 70%;
}

.list-head {
  background-color: #f6f6f6;
  position: relative;
  border-radius: 5px 5px 0 0;
  margin: 0.15em;
}

.sub-list {
  position: relative;
  background-color: #52d9915e;
  border-radius: 5px 5px 0 0;
}

.buildings {
  position: relative;
  background-color: #dadada;
  left: 5%;
  width: 92%;
  margin: 0.15em;
  border-radius: 2px;
}

</style>