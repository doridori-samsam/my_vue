<template>
  <div>
    <div :class="{ 'text-red': isActive, active: hasError }">클래스 바인딩</div>
    <button @click="change">바꾸기</button>
    <br />
    <br />
    <div :class="class2">클래스 바인딩2</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: false,
      hasError: false,
      class2: ['active', 'hasError']
    }
  },
  methods: {
    change() {
      this.isActive = !this.isActive
      this.hasError = !this.hasError
    }
  }
}
</script>

<style scoped>
.active {
  background-color: yellowgreen;
  font-weight: bold;
}

.text-red {
  color: red;
}
</style>
