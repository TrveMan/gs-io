import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

@Component
export default class AdditionalInfoBox extends Vue {
  @Prop() private infos!: any;

  private label: string = this.infos.label;

  get value(): string {
    const roundedValue = Math.round(this.infos.value * 100) / 100;
    return roundedValue.toLocaleString('de-DE', { minimumFractionDigits: 2 });
  }
}
