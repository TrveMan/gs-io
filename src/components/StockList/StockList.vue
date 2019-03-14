<template>
  <div class="gs-stock-list">
    <StockTile v-for="stockData in stockList"
                        :key="stockData.symbol"
                        :stockData="stockData" />
  </div>
</template>

<script lang="ts" src='./StockList.ts'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src='./StockList.scss'></style>
