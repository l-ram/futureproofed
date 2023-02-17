<script lang="ts">

interface IEmissionSource  {
  category: string;
}

interface IMUnit {
  m3?: string;
  liter?: string;
  kWh?: string;
}

interface IEmissionData {
  energyType: string;
  unit: IMUnit[];
  value: number;
}

interface IEmissionEntry {
  [emissionSource: string]: {
    emissionData: IEmissionData[];
  }
}

// Emissions array
const emissionEntries:IEmissionEntry[] = []

const addEmissionEntryOnClick = (source:string, type:string, value: number, unit:IMUnit[]) => {
  
emissionEntries.push()

}

console.log(emissionEntries);


</script> 


<template>
  <div class="data">
    <h1>This is a data page</h1>
    <h1>This is a data page</h1>
    <h1>This is a data page</h1>
  </div>
</template>

<style scoped>
.data {
  margin-top: 80px;
  margin-left: 5%
}
</style>