<template>
  <div id="app">
    <b-alert show variant="danger">
      <b-icon-exclamation-triangle-fill></b-icon-exclamation-triangle-fill>
      このアプリには市販教科書の内容が多く含まれています。絶対にURLやパスワード等を公開しないでください
    </b-alert>

    <b-alert show variant="primary">
      期末試験形式で問題をランダムに出してくれるだけのアプリです。答えは出ませんので振り返りはセルフサービスでお願いします。
    </b-alert>

    <HelloWorld />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
