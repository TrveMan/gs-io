<template>
  <span>{{formatedValue}}</span>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import formatValue from '@/js/helper/formatValue';

@Component
export default class Value extends Vue {
  @Prop() private value!: number;

  get formatedValue() {
    return formatValue(this.value);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
