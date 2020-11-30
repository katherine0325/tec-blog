<template>
  <div>
    <router-link :to="{path: '/article', query: {article_number: item.number}}" v-for="(item, index) in list" :key="item.id">
      <article-line :number="index + 1" :title="item.title" :date="item.created_at.slice(0, 10)"></article-line>
    </router-link>
  </div>
</template>

<script src="./home.js"></script>
<style scoped src="./home.css"></style>
