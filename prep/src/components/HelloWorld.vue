<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      React만 써오다가 Vue공부를 위해 만든 연습용 페이지입니다. <br />별 기능은
      없습니다 ^__^
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

p {
  background-color: #42b983;
  font-weight: bold;
  color: white;
}
</style>
