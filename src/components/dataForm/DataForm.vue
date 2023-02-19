
<template>
    <section>

        <div class="container">


            <ul class="breadcrumb">
                <li><a href="#">Company facilities</a></li>
                <li><a href="#">Stationary combustion</a></li>
                <li><a href="#">Office 1</a></li>
            </ul>

            <div id="onClose"></div>
            <div>
                <h1>Heating main building</h1>
            </div>

            <div class="headings">
                <h3>Data</h3>
                <h3>History</h3>
                <h3>Details</h3>
                <h3>Activity</h3>
                <h3>Notes</h3>
            </div>

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

            <div class="divider">

            </div>

            <div class="note">
                <p>Add note</p>
            </div>

            <div class="attachment">
                <p>Add attachment</p>
            </div>

            <div></div>


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
import { db } from '../../firebase/config'
import { collection, addDoc } from '@firebase/firestore';

interface IHandleSubmit {
    [key: string]: {
        type: string;
        value: number;
        unit: string;
    }
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
            console.log("click");
            let emissionData: IHandleSubmit = {
                type: this.type,
                value: this.value,
                unit: this.unit,
            }
            console.log(emissionData);

            addDoc(collection(db, "emissionData"), emissionData);

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
section {
    margin-top: 10%;
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

/* Breadcrumbs */

.breadcrumb {
    font: .75em sans-serif;
    list-style: none;
}

.breadcrumb p {
    margin: 0;
}

.breadcrumb li {
    display: inline-block;
    margin-bottom: .2em;
}

.breadcrumb li a {
    background-color: var(--sidebar-bg-color);
    box-sizing: border-box;
    color: #fff;
    display: block;
    max-height: 2em;
    padding: .5em 1em .5em 1.5em;
    position: relative;
    text-decoration: none;
    transition: .25s;
}

.breadcrumb li a:before {
    border-top: 1em solid transparent;
    border-bottom: 1em solid transparent;
    border-left: 1em solid #fff;
    content: "";
    position: absolute;
    top: 0;
    right: -1.25em;
    z-index: 1;
}

.breadcrumb li a:after {
    border-top: 1em solid transparent;
    border-bottom: 1em solid transparent;
    border-left: 1em solid var(--sidebar-bg-color);
    content: "";
    position: absolute;
    top: 0;
    right: -1em;
    transition: .25s;
    z-index: 1;
}

.breadcrumb li a:hover {
    background-color: var(--sidebar-item-active);
}

.breadcrumb li a:hover:after {
    border-left-color: var(--sidebar-item-active);
}

.breadcrumb li:last-child a {
    background-color: var(--sidebar-item-active);
    pointer-events: none;
}

.breadcrumb li:last-child a:after {
    border-left-color: var(--sidebar-item-active);
}

/* End breadcrumbs */

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