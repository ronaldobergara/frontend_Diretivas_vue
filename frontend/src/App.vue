<template>
  <ButtonStyled text="Cadastro" color="primary" :user="user" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import ButtonStyled from '@/components/ButtonStyled.vue'

export default defineComponent({
  components: { ButtonStyled },
  data() {
    return {
      user: {
        id: 1,
        name: 'Kaori'
      }
    }
  }
})
</script>

<style scoped></style>
