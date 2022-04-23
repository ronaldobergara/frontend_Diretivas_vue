<template>
  <ButtonStyled @click="show = !show" text="Toggle" />

  <transition
    enter-active-class="animate__animated animate__backInDown"
    leave-active-class="animate__animated animate__backOutDown"
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
  }
})
</script>

<style scoped></style>
