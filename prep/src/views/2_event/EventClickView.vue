<template>
  <div>
    <button @click="increaseCounter">Add</button>
    <p>{{ counter }}</p>
    <button @click="decreaseCounter">Subtract</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      counter: 0
    }
  },
  methods: {
    increaseCounter() {
      this.counter += 1
    },
    decreaseCounter() {
      this.counter -= 1
    }
  }
}
</script>

<style></style>
