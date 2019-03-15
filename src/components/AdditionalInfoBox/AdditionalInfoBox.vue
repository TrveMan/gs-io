<template>
  <div class="additional-info-box">
    <span class="info-label">{{ infos.label }}</span>
    <span class="info-value"><Value :value="infos.value" /></span>
  </div>
</template>

<script lang="ts" src='./AdditionalInfoBox.ts'>
</script>

<style scoped lang="scss" src='./AdditionalInfoBox.scss'></style>
