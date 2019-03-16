<template>
  <header class="gs-header">
    <img alt="GS-iO Logo" class="gs-header__logo" src="../assets/logo_small.png">
    <h1 class="gs-header__headline">gipfelstürmer</h1>
  </header>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import formatValue from '@/js/helper/formatValue';

@Component
export default class Header extends Vue {
  @Prop() private value!: number;
}
</script>

<style scoped lang="scss">
  @import '../styles/colors.scss';
  @import '../styles/typography.scss';
  @import '../styles/base.scss';

  .gs-header {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 75vh;
    // max-height: 300px;

    &__logo {
      margin-top: -5px;
      height: 26px;
      margin-right: 10px;
    }

    &__headline {
      @extend %gs-typo__bold;
      font-size: 25px;
      // text-transform: uppercase;
      color: $gs-color__grey;
    }
  }
</style>
