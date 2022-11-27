<template>
  <div>
    <h1>Hello, {{ userName }}</h1>
    <p>{{ message }}</p>
  </div>
</template>
<script>
export default {
  // function keyword사용하지 않아도 된다.
  data() {
    return {
      userName: 'Sam Park',
      message: 'Welcome to the first Vue Project!',
      arr: [],
      obj: {}
    }
  }
}
</script>

<style scoped>
h1 {
  color: brown;
}
p {
  text-decoration: underline;
}
</style>
