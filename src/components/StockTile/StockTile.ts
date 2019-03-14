import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';

import AdditionalInfoBox from '@/components/AdditionalInfoBox/AdditionalInfoBox.vue';
import Depot from '@/config/depot.config';
@Component({
  components: {
    AdditionalInfoBox,
  },
})
export default class StockTile extends Vue {
  @Prop() private stockData!: StockData;

  private active: boolean = false;

  private name: string = this.stockData.name;

  private price: number = parseFloat(this.stockData.price);

  private changeAbs: number = parseFloat(this.stockData.day_change);

  private changePct: number = parseFloat(this.stockData.change_pct);

  private stockCount: number = 5;

  @Emit()
  openTile() {
    this.active = !this.active;
    // this.price = this.price + 1;
  }

  get additionalInfos(): {
    label:string,
    value: number,
    unit: string
  }[] {
    return [
      {
        label: 'Kaufwert',
        value: this.initialPrice,
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
        value: this.totalChangePct,
        unit: '%',
      },
      {
        label: 'G/V €',
        value: this.totalChangeAbs,
        unit: '€',
      },
      {
        label: 'G/V Ges.',
        value: this.totalValueChange,
        unit: '€',
      },
    ];
  }

  get currentValue() {
    return this.price * this.stockCount;
  }

  get buyValue() {
    return this.initialPrice * this.stockCount;
  }

  get totalChangeAbs() {
    return this.price - this.initialPrice;
  }

  get totalChangePct() {
    return ((this.price - this.initialPrice) / this.price) * 100;
  }

  get totalValueChange() {
    return this.totalChangeAbs * this.stockCount;
  }

  get initialPrice() {
    const stockInfo = Depot.stocks.filter(stock => stock.symbol === this.stockData.symbol);
    if (!stockInfo.length) {
      return 42;
    }

    return stockInfo[0].initialPrice;
  }
}
