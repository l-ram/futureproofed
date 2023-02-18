<script lang="ts">

import Vue from "vue";

export default Vue.extend({
  name: "DataView",
  template: `
    <button id="submit" @click="getFormDataOnClick" type="button">
        Submit
    </button>`,
  components: {

  },
  methods: {
    getFormDataOnClick(event: Event) {
      console.log(event, 'heard event!');

      if (submitButton !== null) {
        submitButton.addEventListener('submit', (event) => {
          event.preventDefault();
          console.log("i'm running!!!")
        }
        )
      } else if {console.log("button is null!!!")};
    }
  }

});

// Every key is the emission source of type string, 
// and the value of each key is a object containing the emission data

interface IEmissionEntry {
  [source: string]: {
    type: string;
    value: number;
    unit: string;
  }
}

// Emissions array
const emissionEntries: IEmissionEntry[] = [];

// HTML form object
const emissionsForm = document.getElementById('formData');
const submitButton = document.getElementById('submit');

if (submitButton) {
  submitButton.addEventListener('submit', (event) => {
    event.preventDefault();
    console.log(event, 'heard event!')
  }
  )
}

// const getFormDataOnClick = (event: Event) => {

//   submitButton.addEventListener('submit', (event) => {
//     event.preventDefault();
//     console.log(event, 'heard event!')
//   }
//   )
// };

// emissionsForm.addEventListener('submit', function (event) {
//   event.preventDefault();

//   const source = (document.getElementById('source') as HTMLInputElement).value;
//   const type = (document.getElementById('type') as HTMLInputElement).value;
//   const value = (document.getElementById('value') as HTMLInputElement).valueAsNumber;
//   const unit = (document.getElementById('unit') as HTMLInputElement).value;

//   const formData: IEmissionEntry = {
//     [source]: {
//       type,
//       value,
//       unit
//     }
//   }
//   emissionEntries.push(formData);
//   console.log(emissionEntries);
// });

</script> 

<template>
  <div class="data">

    <form id="formData">
      <label for="">Emission Source</label>
      <select id="source" name="source">
        <option value="Headquarters">Headquarters</option>
        <option value="Office 1">Office 1</option>
        <option value="Office 2">Office 2</option>
        <option value="Office 3">Office 3"</option>
        <option value="Office 4">Office 4</option>
        <option value="Factory 1">Factory 1</option>
        <option value="Factory 2">Factory 2</option>
      </select>

      <label for="">Type:</label>
      <input id="type" placeholder="Energy" type="text" name="Energy" />

      <label for="value">Value:</label>
      <input id="value" type="number" placeholder="Value" name="Value" />

      <label for="">Unit:</label>
      <select id="units" name="Units">
        <option value="kWh">kWh</option>
        <option value="m3">m3</option>
        <option value="Liter">Liter</option>
      </select>

      <button id="submit" @click="getFormDataOnClick" type="button">
        Submit
      </button>

    </form>

  </div>
</template>

<style scoped>
.data {
  margin-top: 80px;
  margin-left: 5%
}
</style>