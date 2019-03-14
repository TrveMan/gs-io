<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <StockTile name="Hello Fresh"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
// import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import StockTile from '@/components/StockTile/StockTile.vue'; // @ is an alias to /src

@Component({
  components: {
    StockTile,
  },
})
export default class Home extends Vue {}
</script>
