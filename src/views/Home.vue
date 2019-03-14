<template>
  <div class="home">
    <StockList />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import StockList from '@/components/StockList/StockList.vue';

@Component({
  components: {
    StockList,
  },
})
export default class Home extends Vue {
  /* eslint-disable camelcase */
  private stockData: StockData = {
    symbol: 'AAPL',
    name: 'Apple Inc.',
    currency: 'USD',
    price: '183.73',
    price_open: '183.90',
    day_high: '184.10',
    day_low: '182.56',
    '52_week_high': '233.47',
    '52_week_low': '142.00',
    day_change: '2.02',
    change_pct: '1.11',
    close_yesterday: '181.71',
    market_cap: '866338374254',
    volume: '23439017',
    volume_avg: '27085573',
    shares: '4715280000',
    stock_exchange_long: 'NASDAQ Stock Exchange',
    stock_exchange_short: 'NASDAQ',
    timezone: 'EDT',
    timezone_name: 'America/New_York',
    gmt_offset: '-14400',
    last_trade_time: '2019-03-14 16:00:01',
  };
  /* eslint-enable camelcase */
}
</script>
