import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';

import AdditionalInfoBox from '@/components/AdditionalInfoBox/AdditionalInfoBox.vue';

@Component({
  components: {
    AdditionalInfoBox,
  },
})
export default class AdditionalInfo extends Vue {
  @Prop() private infoBoxes!: any;

  @Prop() private headline!: string;
}
