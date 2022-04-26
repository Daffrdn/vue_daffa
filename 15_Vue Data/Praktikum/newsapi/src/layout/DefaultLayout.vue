<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">API</router-link>
        </nav>
        <router-view/>
    </div>
</template>

<script>
export default {
    name: 'DefaultLayout',
}
</script>