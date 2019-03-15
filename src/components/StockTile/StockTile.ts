import {
  Component,
  Prop,
  Emit,
  Vue,
} from 'vue-property-decorator';

import AdditionalInfo from '@/components/AdditionalInfo/AdditionalInfo.vue';
import Value from '@/components/Value.vue';
import Depot from '@/config/depot.config';
@Component({
  components: {
    AdditionalInfo,
    Value,
  },
})
export default class StockTile extends Vue {
  @Prop() private stockData!: StockData;

  private active: boolean = false;

  private name: string = this.stockData.name;

  private price: number = parseFloat(this.stockData.price);

  private changeAbs: number = parseFloat(this.stockData.day_change);

  private changePct: number = parseFloat(this.stockData.change_pct);

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
        value: this.shares,
      },
      {
        label: 'Wert',
        value: this.currentValue,
      },
    ];
  }

  get currentValue() {
    return this.price * this.shares;
  }

  get buyValue() {
    return this.initialPrice * this.shares;
  }

  get totalChangeAbs() {
    return this.price - this.initialPrice;
  }

  get totalChangePct() {
    return ((this.price - this.initialPrice) / this.price) * 100;
  }

  get totalValueChange() {
    return this.totalChangeAbs * this.shares;
  }

  get currentStockInfo() {
    return Depot.stocks.filter(stock => stock.symbol === this.stockData.symbol);
  }

  get initialPrice() {
    if (!this.currentStockInfo.length) {
      return 42;
    }

    return this.currentStockInfo[0].initialPrice;
  }

  get shares() {
    if (!this.currentStockInfo.length) {
      return 1;
    }

    return this.currentStockInfo[0].shares;
  }
}
