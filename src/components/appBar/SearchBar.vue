<script lang="ts">

export default {
    props: {},
}

</script>

<template>
    <div class="search-box">
        <button class="btn-search"><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></button>
        <input type="text" class="input-search" placeholder="Search...">
    </div>
</template>

<style>
.search-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: auto;
    width: fit-content;
    height: fit-content;
    position: relative;
    padding: 1em;
}

.input-search {
    height: 20px;
    width: 50px;
    border-style: none;
    padding: 10px;
    font-size: 18px;
    letter-spacing: 2px;
    outline: none;
    border-radius: 25px;
    transition: all .5s ease-in-out;
    background-color: var(--sidebar-item-hover);
    padding-right: 40px;
    color: #fff;
}

.input-search::placeholder {
    color: rgba(255, 255, 255, .5);
    font-size: 12px;
    letter-spacing: 2px;
    font-weight: 100;
}

.btn-search {
    padding-right: .7em;
    border-style: none;
    font-size: 12px;
    cursor: pointer;
    position: absolute;
    right: 15px;
    color: #ffffff;
    background-color: transparent;
}

.btn-search:focus~.input-search {
    width: 150px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    transition: all 500ms cubic-bezier(0, 0.9, 0.35, 1);
}

.input-search:focus {
    width: 150px;
    border-radius: 0px;
    background-color: transparent;
    border-bottom: 1px solid rgba(255, 255, 255, .5);
    transition: all 500ms cubic-bezier(0, 0.9, 0.35, 1);
}

</style>