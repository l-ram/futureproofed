
<template>
    <section>

        <div class="container">

            <nav class="formNav">
                <ul class="breadcrumb">
                    <li><a href="#">Company facilities</a></li>
                    <li><a href="#">Stationary combustion</a></li>
                    <li><a href="#">Office 1</a></li>
                </ul>

                <div class="close">
                    <font-awesome-icon icon="fa-solid fa-xmark" />
                </div>

            </nav>

            <div>
                <h1>Heating main building</h1>
            </div>

            <div class="headings">
                <h4><a href="#">Data</a></h4>
                <h4><a href="#">History</a></h4>
                <h4><a href="#">Details</a></h4>
                <h4><a href="#">Activity</a></h4>
                <h4><a href="#">Notes</a></h4>
            </div>

            <div class="divider1">
                <div class="shadow"></div>
            </div>

            <form @submit.prevent="handleSubmit">
                <div class="form-group">
                    <label for="type">Type</label>
                    <input type="text" id="type" v-model="type">
                </div>

                <div class="form-group">
                    <label for="value">Value:</label>
                    <input type="number" value="number" id="value" v-model="value">
                </div>

                <div class="form-group">
                    <label for="unit">Unit:</label>
                    <select class="form-group-select" id="unit" name="units" v-model="unit">
                        <option value="kWh">KWh</option>
                        <option value="m3">M3</option>
                        <option value="liter">Liter</option>
                    </select>
                </div>

                <button type="submit">Submit</button>
            </form>

            <div class="divider2">
                <div class="shadow"></div>
            </div>

            <div class="note">
                <font-awesome-icon icon="fa-regular fa-note-sticky" />
                <p>Add note</p>
            </div>

            <div class="attachment">

                <input id="upload" class="upload" type="file"/>
                <label for="upload"><font-awesome-icon icon="fa-solid fa-paperclip" /> Add attachment</label>
            </div>

            <div></div>


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
        type: string;
        value: number;
        unit: string;
    }

</script>

<style>
section {
    margin-top: 10%;
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.close {
    position: relative;
    top: 5%;
    left: 10%;
    font-size: 24px;
}

.container {
    width: 90%;
    max-width: 500px;
    margin: 0 auto;
    padding: 20px;
    padding-left: 40px;
    box-shadow: 0px 0px 20px #00000033;
    border-radius: 8px;
}

/* Breadcrumbs */

.breadcrumb {
    font: .75em sans-serif;
    list-style: none;
    padding-right: -40px;
}

.breadcrumb p {
    margin: 0;
}

.breadcrumb li {
    display: inline-block;
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

.formNav {
    display: flex;
    flex-direction: row;
    justify-content: left;
}

label {
    margin-right: auto;
}

.form-group {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    font-size: 20px;
    color: #9e9e9e;
}

.form-group input,
.form-group textarea {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 50%;
    padding: 5px;
    font-size: 18px;
    border: 1px solid rgba(128, 128, 128, 0.199);
    margin-top: 5px;
}

.form-group-select {
    display: flex;
    flex-direction: column;
    align-content: center;
    width: 50%;
    padding: 5px;
    font-size: 18px;
    border: 1px solid rgba(128, 128, 128, 0.199);
    margin-top: 5px;
}

.headings, a {
    display: flex;
    flex-direction: row;
    ;
    padding: 1em;
    text-decoration: none;
    color: rgba(128,128,128);
}

.headings h4 {
    padding: .5em;
}

button {
    width: 30%;
    border: none;
    padding: 10px;
    font-size: 18px;
    border-radius: 8px;
    cursor: pointer;
    margin-top: 10px;
    margin-bottom: 10px;
}

button:active {
    scale: 75%;
}

button:hover {
    box-shadow: 6px 6px 2px 1px rgba(70, 255, 166, 0.1);
    transition: 0.5s;
}



.divider1 {
    margin: -20px auto 40px;
    width: 80%;
    position: relative;
}

.divider1 .shadow {
    overflow: hidden;
    height: 5px;
}

.divider1 .shadow:after {
    opacity: 25%;
    content: '';
    display: block;
    margin: -25px auto 0;
    width: 100%;
    height: 25px;
    border-radius: 125px/12px;
    box-shadow: 0 0 8px black;
}

.divider2 {
    margin: 15px auto 30px;
    width: 80%;
    position: relative;
}

.divider2 .shadow {
    overflow: hidden;
    height: 5px;
}

.divider2 .shadow:after {
    opacity: 25%;
    content: '';
    display: block;
    margin: -25px auto 0;
    width: 100%;
    height: 25px;
    border-radius: 125px/12px;
    box-shadow: 0 0 8px black;
}


.note,
.attachment {
    display: flex;
    flex-direction: row;
    cursor: pointer;
}

.upload {
    width: 0.1px;
	height: 0.1px;
	opacity: 0;
	overflow: hidden;
	position: absolute;
	z-index: -1;
}

</style>