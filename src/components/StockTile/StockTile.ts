import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';

import AdditionalInfoBox from '@/components/AdditionalInfoBox/AdditionalInfoBox.vue';

@Component({
  components: {
    AdditionalInfoBox,
  },
})
export default class StockTile extends Vue {
  @Prop() private name!: string;

  private active: boolean = false;

  private value: number = 9.20;

  private absoluteChange: number = -0.04;

  private percentualChange: number = -0.43;

  private initialValue: number = 7.4;

  private stockCount: number = 5;

  additionalInfos: object[] = [
    {
      label: 'Kaufwert',
      value: this.initialValue,
      unit: '€',
    },
    {
      label: 'Bestand',
      value: this.stockCount,
      unit: 'Stk.',
    },
    {
      label: 'Wert',
      value: this.currentValue,
      unit: '€',
    },
    {
      label: 'G/V %',
      value: 4.3,
      unit: '%',
    },
    {
      label: 'G/V €',
      value: this.stockChangeAbsolute,
      unit: '€',
    },
    {
      label: 'G/V Ges.',
      value: 117.34,
      unit: '€',
    },
  ];

  @Emit()
  openTile() {
    this.active = !this.active;
  }

  get currentValue() {
    return this.value * this.stockCount;
  }

  get buyValue() {
    return this.initialValue * this.stockCount;
  }

  get stockChangeAbsolute() {
    return this.value - this.initialValue;
  }

  get stockChangePercentual() {
    return this.value - this.initialValue;
  }
}
