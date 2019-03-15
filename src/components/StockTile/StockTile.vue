<template>
  <div class="gs-stock-tile"
       v-bind:class="{ 'gs-state-active': active }"
       v-on:click="openTile">
    <div class="base-infos">
      <h1 class="stock-name">{{ name }}</h1>
      <div class="stock-info">
        <span class="current-value">{{ price }}</span>
        <span class="pers-changes">{{ changePct }} %</span>
      </div>
    </div>
    <div class="additional-infos" v-if="active">
      <AdditionalInfoBox v-for="info in additionalInfos"
                         :key="info.label"
                         :infos="info" />
    </div>
  </div>
</template>

<script lang="ts" src='./StockTile.ts'></script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss" src='./StockTile.scss'></style>
