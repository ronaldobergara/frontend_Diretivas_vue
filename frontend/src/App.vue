<template>
  <ButtonStyled text="Botão" @passarinho="action($event)" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  components: { ButtonStyled },
  methods: {
    action(event: string) {
      console.log(event)
    }
  }
})
</script>

<style scoped></style>
