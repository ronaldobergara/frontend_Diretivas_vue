<template>
  <ButtonStyled @click="show = !show" text="Toggle" />

  <transition
    enter-active-class="animate__animated animate__backInDown"
    leave-active-class="animate__animated animate__backOutDown"
    @after-enter="afterEnter"
  >
    <h1 v-if="show">Kaori</h1>
  </transition>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'animate.css'

export default defineComponent({
  data() {
    return {
      show: false
    }
  },
  methods: {
    afterEnter: (element: HTMLElement) => {
      element.classList.add('teste')
    }
  }
})
</script>

<style scoped>
.teste {
  background: blue;
}
</style>
