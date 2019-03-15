import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';

import AdditionalInfo from '@/components/AdditionalInfo/AdditionalInfo.vue';
import Depot from '@/config/depot.config';
@Component({
  components: {
    AdditionalInfo,
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
  }

  get todayInfos(): {
    label:string,
    value: number,
  }[] {
    return [
      {
        label: '%',
        value: this.changePct,
      },
      {
        label: '€/Stk',
        value: this.changeAbs,
      },
      {
        label: 'Wert',
        value: this.price,
      },
    ];
  }

  get changeInfos(): {
    label:string,
    value: number,
  }[] {
    return [
      {
        label: '%',
        value: this.totalChangePct,
      },
      {
        label: '€/Stk',
        value: this.totalChangeAbs,
      },
      {
        label: 'Gesamt',
        value: this.totalValueChange,
      },
    ];
  }

  get depotInfos(): {
    label:string,
    value: number,
  }[] {
    return [
      {
        label: 'Kaufwert',
        value: this.initialPrice,
      },
      {
        label: 'Stück',
        value: this.stockCount,
      },
      {
        label: 'Wert',
        value: this.currentValue,
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
