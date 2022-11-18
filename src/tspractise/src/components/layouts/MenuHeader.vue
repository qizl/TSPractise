<template>
    <div>
        <ul>
            <li>
                <router-link to="/home">首页</router-link>
            </li>
            <li>
                <router-link to="/basictypes">Basic Types</router-link>
            </li>
            <li>
                <router-link to="/variabledeclarations">Variable Declarations</router-link>
            </li>
        </ul>
        <h2>{{ $route.meta.title }} {{ ($route.meta.describe ? '-' : '') }} {{ $route.meta.describe }}</h2>
    </div>
</template>

<script setup lang="ts"></script>

<style scoped>
ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}
</style>