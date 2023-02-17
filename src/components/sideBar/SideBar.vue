<script lang="ts">

export default {
    props: {},
}
</script>

<template>
    <div class="sidebar">

        <router-link to="/" class="link"><font-awesome-icon icon="fa-solid fa-home" /> Home</router-link>
        <router-link to="data" class="link"><font-awesome-icon icon="fa-solid fa-list-check" />Data</router-link>
        <router-link to="analytics" class="link"><font-awesome-icon icon="fa-solid fa-chart-line" />Analytics</router-link>
        <router-link to="plan" class="link"><font-awesome-icon icon="fa-solid fa-map-location-dot" />Plan</router-link>

        <span class="lower-icon">
            <font-awesome-icon icon="fa-solid fa-mug-hot" />
        </span>

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
.sidebar {
    color: white;
    background-color: var(--sidebar-bg-color);
    height: 90%;
    width: 45px;
    float: left;
    position: fixed;
    z-index: 1;
    top: 10%;
    left: 0;
    bottom: 0;
    padding: 1em;
    transition: 0.3s ease;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    display: flex;
    flex-direction: column;
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
    position: absolute;
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