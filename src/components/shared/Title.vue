<template>
  <h1 :class="['title', size, color === 'white' ? 'white_c' : 'black_c' , klass]">
    <slot></slot>
  </h1>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import { Size } from '@/utils/enum/size.enum';
@Component({
  components: {}
})
export default class Title extends Vue {

@Prop({default: ''})
  klass: string | undefined;
 
 @Prop({default: 'small'})
  size: 'small' | 'medium' | 'large' | undefined;

  @Prop({default: 'black'})
  color: 'white' | 'black' | undefined;

}
</script>
<style lang="scss">
@import '@/assets/scss/variables';
.title {

  &.small {
    font-size: 2.2rem;
  }

  &.medium {
    font-size: 4.2rem;
  }

  &.large {
    font-size: 6.2rem;
  }

  &.white_c {
    color: white;
    background-color: transparent !important;
  }

  &.black_c {
    color: black;
    background-color: transparent !important;
  }
}
</style>