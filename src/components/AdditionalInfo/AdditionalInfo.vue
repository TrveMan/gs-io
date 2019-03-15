<template>
  <div class="additional-info">
    <h3 class="additional-info__headline">{{headline}}</h3>
    <div class="additional-info__infos">
      <AdditionalInfoBox v-for="info in infoBoxes"
                        :key="info.label"
                        :infos="info" />
    </div>
  </div>
</template>

<script lang="ts" src='./AdditionalInfo.ts'>
</script>

<style scoped lang="scss" src='./AdditionalInfo.scss'></style>
