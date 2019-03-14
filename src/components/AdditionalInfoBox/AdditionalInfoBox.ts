import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class AdditionalInfoBox extends Vue {
  @Prop() private infos!: any;

  private label: string = this.infos.label;

  private value: number = Math.round(this.infos.value * 100) / 100;
}
