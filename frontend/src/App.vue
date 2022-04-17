<template>
  <h1 :class="['static', { 'text-danger': hasError }, className]">Hello Kaori</h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      isActive: true,
      hasError: true,
      className: 'teste'
    }
  }
})
</script>
