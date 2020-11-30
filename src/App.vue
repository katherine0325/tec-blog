<template>
  <div id="app">
    <div class="header">
      <div class="dark">
        <h1>Katherine的技术博客</h1>
      </div>
    </div>
    <div class="section">
      <div class="main">
        <router-view/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

.header {
  height: 300px;
  background-image: linear-gradient(135deg,#79f1a4,#0e5cad);
  text-align: center;
  display: flex;
  align-items: flex-end;
}

.header .dark {
  margin: 0 auto;
  width: 800px;
  height: 150px;
  background-color: rgba(8,105,132,.52);
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.header .dark h1 {
  line-height: 120px;
  display: block;
  font-size: 2.4em;
  -webkit-margin-before: 0.67em;
  -webkit-margin-after: 0.67em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
  font-weight: bold;
  color: #a9e4f5;
}

.section {
  background-color: #f7f8fa;
  padding-bottom: 60px;
}

.section .main {
  margin: 0 auto;
  width: 800px;
  background: #fff;
  box-shadow: 0 1px 2px 0 rgba(0,0,0,.05);
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}
</style>
