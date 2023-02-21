<template>
  <div>

    <div class="list" v-for="(headCategory, index) in listHeadCategory" :key="headCategory">
      {{ index }}
      <h1>{{ headCategory }}</h1>

      <div class="sub-list" v-for="(fossilFuels, index) in listSubCategories"
      :key="fossilFuels">
      {{ index }}
      <h2>{{ fossilFuels }}</h2>


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
  [
    {
      fossilFuels: [{
        buildings: ["HeadQuarters", "Office1", "Office2", "Office3", "Factory 1", "Office2"]
      }]
    }
  ],
  [
    {
      processes: [{
        empty: []
      }]
    }
  ]
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