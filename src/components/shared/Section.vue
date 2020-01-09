<template>
  <div :class="[isFirst ? 'first_section' : 'section', klass]">
    <slot></slot>
  </div>
</template>
<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Section extends Vue {
  @Prop({ default: false })
  isFirst: boolean | undefined;

  @Prop({ default: "" })
  klass: string | undefined;
}
</script>
<style lang="scss">
.section {
  padding: 10px 20px;
  min-height: 100vh;
}

.first_section {
  padding: 10px 20px;
  min-height: 88vh;
}
</style>