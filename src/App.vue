<script setup lang="ts">
    import { RouterView } from "vue-router"
</script>

<template>
    <header>
        <p>
            <RouterLink :to="{name: 'home'}">M2 DFS</RouterLink>
        </p>
    </header>

    <RouterView />
</template>
