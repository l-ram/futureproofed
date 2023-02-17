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

        <div class="user-components">
            <font-awesome-icon class="item1" icon="fa-solid fa-bell" />
            <font-awesome-icon class="item2" icon="fa-solid fa-circle-user" />
        </div>
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


.item1 {

    padding: 1em
}

.item2 {
    font-size: 12;
    padding: 1em;
}

</style>