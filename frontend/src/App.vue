<template>
  <form>
    <input type="text" placeholder="Nome" v-model.lazy="form.name" />

    <input type="number" placeholder="Idade" v-model.number="form.age" />

    <textarea rows="2" placeholder="Descrição" v-model.trim="form.message"></textarea>

    <input type="checkbox" v-model="form.newsletter" /> Newsletter <br />

    <input type="radio" name="color" value="vermelho" v-model="form.color" /> Vermelho
    <input type="radio" name="color" value="verde" v-model="form.color" /> Verde
    <input type="radio" name="color" value="azul" v-model="form.color" /> Azul

    <select v-model="form.fruit">
      <option disabled selected>Selecione uma fruta</option>
      <option value="uva">Uva</option>
      <option value="banana">Banana</option>
      <option value="morango">Morango</option>
    </select>
  </form>

  <p>Nome: {{ form.name }}</p>
  <p>Idade: {{ form.age }}</p>
  <p>Mensagem: {{ form.message }}</p>
  <p>Newsletter: {{ form.newsletter }}</p>
  <p>Cor: {{ form.color }}</p>
  <p>Fruta: {{ form.fruit }}</p>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  data() {
    return {
      form: {
        name: '',
        age: 0,
        message: '',
        newsletter: false,
        color: '',
        fruit: ''
      }
    }
  },
  methods: {
    send() {
      // axios.post('/register', this.form)
    }
  }
})
</script>

<style scoped>
input[type='email'],
input[type='text'],
select,
textarea {
  display: block;
}

form {
  padding-bottom: 1rem;
  border-bottom: 2px solid #000;
}
</style>
