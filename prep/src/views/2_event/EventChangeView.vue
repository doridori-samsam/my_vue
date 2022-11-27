<template>
  <div>
    <select name="" id="" @change="changeCity" v-model="selectedCity">
      <option value="">===도시 선택===</option>
      <option :value="city.code" :key="city.code" v-for="city in cityList">
        {{ city.title }}
      </option>
    </select>
    <br />
    <select name="" id="">
      <option value="" :key="gu.guCode" v-for="gu in selectedGuList">
        {{ gu.guTitle }}
      </option>
    </select>
    <br />
    <select name="" id="">
      <option
        :value="gu.guCode"
        :key="gu.guCode"
        v-for="gu in guList.filter((gu) => gu.cityCode === selectedCity)"
      >
        {{ gu.guTitle }}
      </option>
    </select>
  </div>
</template>

<script>
export default {
  data() {
    return {
      selectedCity: '',
      cityList: [
        { code: '02', title: '서울' },
        { code: '051', title: '부산' }
      ],
      guList: [
        { cityCode: '02', guCode: '1', guTitle: '강남구' },
        { cityCode: '02', guCode: '2', guTitle: '송파구' },
        { cityCode: '02', guCode: '3', guTitle: '동작구' },
        { cityCode: '02', guCode: '4', guTitle: '마포구' },
        { cityCode: '051', gucode: '1', guTitle: '해운대구' },
        { cityCode: '051', gucode: '2', guTitle: '수영구' },
        { cityCode: '051', gucode: '3', guTitle: '영도구' },
        { cityCode: '051', gucode: '3', guTitle: '연제구' }
      ],
      selectedGuList: []
    }
  },
  methods: {
    changeCity() {
      console.log(this.selectedCity)
      this.selectedGuList = this.guList.filter(
        (gu) => gu.cityCode === this.selectedCity
      )
    }
  }
}
</script>

<style></style>
