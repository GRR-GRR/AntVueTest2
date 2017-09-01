<template>
  <div class="layout">
    <OffCanvasComponent></OffCanvasComponent>
    <HeaderComponent></HeaderComponent>
    <MainComponent></MainComponent>
    <FooterComponent></FooterComponent>
  </div>
</template>

<script>
import FooterComponent from './FooterComponent.vue'
import HeaderComponent from './HeaderComponent.vue'
import MainComponent from './MainComponent.vue'
import OffCanvasComponent from './OffCanvasComponent.vue'

export default {
  name: 'layout',
  data () {
    return {
      msg: 'layout'
    }
  },
  components: {
    FooterComponent,
    OffCanvasComponent,
    HeaderComponent,
    MainComponent
  }
}
</script>