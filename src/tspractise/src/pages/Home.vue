<template>
    <p>Vite + Vue3 + TS 学习项目</p>
    <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a><a href="https://vuejs.org/" target="_blank">
        <img src="../assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank">
        <img src="../assets/ts.png" class="logo ts" alt="TS logo" />
    </a>
    <p>本站点笔记来自<a href="https://vitejs.cn/" target="_blank">Vite文档</a>，<a href="https://cn.vuejs.org/"
            target="_blank">Vue3文档</a>，<a href="https://www.tslang.cn/docs/home.html" target="_blank">TS文档</a></p>
</template>

<script setup lang="ts"></script>

<style scoped>
.logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
}

.logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
    filter: drop-shadow(0 0 2em #42b883aa);
}

.logo.ts:hover {
    filter: drop-shadow(0 0 2em #47e708aa);
}
</style>