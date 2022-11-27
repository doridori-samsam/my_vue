<template>
  <div>
    <input type="text" placeholder="hi" v-model="userId" />
    <button @click="myFunc()">클릭</button>
    <button @click="changeData()">변경</button>
    <br />
    <input type="text" v-model="num1" />+ <input type="text" v-model="num2" /> =
    <span>{{ num1 + num2 }}</span>
    <br />
    <input type="text" v-model.number="num3" />+
    <input type="text" v-model.number="num4" /> =
    <span>{{ num3 + num4 }}</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 'hello',
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0
    }
  },
  methods: {
    myFunc() {
      console.log(this.userId)
    },
    changeData() {
      this.userId = '바뀐 값'
    }
  }
}
</script>

<style></style>
