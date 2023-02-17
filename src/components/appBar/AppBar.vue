<script lang="ts">

import SearchBar from './SearchBar.vue';

export default {
    name: 'AppBar',
    components: {
        SearchBar,
    }
};
</script>

<template>
    <div class="appbar">
        <img class="logo" :src="require('@/assets/SWEC-A.ST.png')" />
        <h1 class="title">Emission Data</h1>
        <SearchBar />
        <font-awesome-icon icon="fa-solid fa-bell" />
        <font-awesome-icon icon="fa-solid fa-circle-user" />
    </div>
</template>

<style>
:root {
    --sidebar-bg-color: #2f855a;
    --sidebar-item-hover: #38a169;
    --sidebar-item-active: #276749;
}
</style>

<style scoped>
.appbar {
    display: flex;
    flex-direction: row;
    align-items: center;
    color: white;
    background-color: var(--sidebar-bg-color);
    width: 100%;
    height: 10%;
    float: top;
    top: 0;
    left: 0;
    position: fixed;
    z-index: 2;

    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}

.logo {
    padding: 1em;
    max-height: 50px;
    max-width: 50px;
}

.link {
    display: flex;
    flex-direction: column;
    align-items: center;

    font-size: small;
    cursor: pointer;
    position: relative;
    font-weight: 100;
    user-select: none;

    margin: 0.1em 0;
    padding: 1em;
    border-radius: 0.25em;
    height: 1.5em;

    color: white;
    text-decoration: none;
}

.link:hover {
    transition: 0.4s ease-out;
    background-color: var(--sidebar-item-hover);
}

.link.router-link-exact-active {
    background-color: var(--sidebar-item-hover);
}


.link.active {
    background-color: var(--sidebar-item-hover);
}

.link .icon {
    flex-shrink: 0;
    width: 25px;
    margin-right: 10px;
}

.lower-icon {
    bottom: 0;
    padding: 0.75em;

    color: rgba(255, 255, 255, 0.7);
    transition: 0.2s linear;
}

.rotate-180 {
    transform: rotate(180deg);
    transition: 0.2s linear;
}
</style>