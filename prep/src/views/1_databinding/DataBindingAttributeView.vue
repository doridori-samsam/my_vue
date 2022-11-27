<template>
  <div>
    <input type="text" name="" id="" v-bind:value="userId" readonly />
    <input type="text" name="" id="" :value="userId" />
    <!-- v-bind는 생략가능하다. -->
    <!-- readonly 속성을 넣을 때 v-model 사용할 필요가 없다... v-bind로 단방향을 구현한다. -->
    <br />
    <br />
    <img :src="imgSrc" alt="" style="width: 120px; height: 140px" />
    <br />
    <input type="search" name="" id="" v-model="txt1" />
    <button :disabled="txt1 === ''">조회</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      userId: 'Samantha',
      imgSrc:
        'https://i0.wp.com/www.wnpl.info/wp-content/uploads/2020/08/Snoopy-Wallpaper-4.jpg?fit=800%2C600&ssl=1',
      txt1: ''
    }
  }
}
</script>

<style></style>
