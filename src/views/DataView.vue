<template>
  <div class="dataView">

    <div class="list-bg">
      <div v-for="(headCategory) in listHeadCategory" :key="headCategory">
        <h3 class="list-head"> <font-awesome-icon icon="fa-solid fa-arrow-down" />  {{ headCategory }}</h3>

        <div v-for="subCats in listSubCategories" :key="subCats.title">
          <div class="sub-list">
            <font-awesome-icon icon="fa-solid fa-arrow-down" /> {{ subCats.title }}
          </div>
          <div class="buildings" v-for="building in subCats.buildings" :key="building">
            <font-awesome-icon icon="fa-solid fa-arrow-right" /> {{ building }}
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
  position: relative;
  padding-left: 80px;
  padding-top: 80px;
}
</style>

<style>
.list-bg {
  border-radius: 15px;
  width: 70%;
  text-align: left;
}

.list-head {
  background-color: #f6f6f6;
  position: relative;
  border-radius: 5px 5px 0 0;
  margin-bottom: 0.15em;
  padding: .5em;
  padding-left: 1em;
}

.sub-list {
  position: relative;
  background-color: #52d9915e;
  border-radius: 5px 5px 0 0;
  padding: .5em;
  padding-left: 1em;
  cursor: pointer;

}

.buildings {
  position: relative;
  background-color: #dadada;
  left: 5%;
  width: 89%;
  margin: 0.15em;
  border-radius: 2px;
  padding: .5em;
  padding-left: 1em;
  cursor: pointer;
}

.buildings:hover {
  background-color: #b3b3b3;
  transition: 0.2s;
}

</style>