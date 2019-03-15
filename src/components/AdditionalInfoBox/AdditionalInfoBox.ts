import {
  Component,
  Prop,
  Vue,
} from 'vue-property-decorator';
import Value from '@/components/Value.vue';

@Component({
  components: {
    Value,
  },
})
export default class AdditionalInfoBox extends Vue {
  @Prop() private infos!: any;
}
