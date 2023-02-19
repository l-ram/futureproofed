
<template>
    <section>
        <div class="container">
            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="fullName">Type</label>
                    <input type="text" id="type" v-model="type">
                </div>

                <div class="form-group">
                    <label for="email">Value:</label>
                    <input type="number" value="number" id="value" v-model="value">
                </div>

                <div class="form-group">
                    <label for="massage">Unit:</label>
                    <input type="text" id="unit" v-model="unit">
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>

        <div>
            <p>Result</p>
            <p>Type: {{ type }}</p>
            <p>Value: {{ value }}</p>
            <p>Unit: {{ unit }}</p>
        </div>
    </section>
</template>

<script lang="ts">
import { projectFirestore } from '../firebase/config'

interface IHandleSubmit {
    type: string;
    value: number;
    unit: string
}


export default {
data() {
    return {
        type: '',
        value: 0,
        unit: ''
    }
},
methods: {
  handleSubmit() {
    let userMessage:IHandleSubmit = {
      type: this.type,
      value: this.value,
      unit: this.unit,
    }
    projectFirestore.collection('userMessages').add(userMessage)
  }
}
}

// Every key is the emission source of type string, and the value of each key is a object containing the emission data
interface IEmissionEntry {
  [source: string]: {
    type: string;
    value: number;
    unit: string;
  }
}

</script>

<style>
* {
    box-sizing: border-box;
    font-family: "Montserrat";
}

section {
    height: 100vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.container {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    box-shadow: 0px 0px 20px #00000033;
    border-radius: 8px;
}

.form-group {
    margin-top: 20px;
    font-size: 20px;
    color: #9e9e9e;
}

.form-group input,
.form-group textarea {
    width: 100%;
    padding: 5px;
    font-size: 18px;
    border: 1px solid rgba(128, 128, 128, 0.199);
    margin-top: 5px;
}

textarea {
    resize: vertical;
}

button {
    width: 100%;
    border: none;
    padding: 20px;
    font-size: 24px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
}
</style>