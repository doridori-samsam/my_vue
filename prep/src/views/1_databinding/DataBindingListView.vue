<template>
  <div>
    <div>
      <select name="" id="">
        <option :value="city.code" :key="city.code" v-for="city in cities">
          {{ city.title }}
          {{ city.code }}
        </option>
      </select>
    </div>
    <br />
    <br />
    <div>
      <table>
        <thead>
          <tr>
            <th>제품번호</th>
            <th>제품명</th>
            <th>제품가격</th>
            <th>주문수량</th>
            <th>합계</th>
          </tr>
        </thead>
        <tbody>
          <tr :key="drink.drinkId" v-for="drink in drinkList">
            <td>{{ drink.drinkId }}</td>
            <td>{{ drink.drinkName }}</td>
            <td>{{ drink.price }}</td>
            <td><input type="number" name="" id="" v-model="drink.qty" /></td>
            <td>{{ drink.price * drink.qty }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cities: [
        { title: '서울', code: '02' },
        { title: '부산', code: '051' },
        { title: '제주', code: '064' }
      ],
      drinkList: [
        {
          drinkId: '1',
          drinkName: '코카콜라',
          price: 700,
          qty: 1
        },
        {
          drinkId: '2',
          drinkName: '오렌지쥬스',
          price: 2000,
          qty: 3
        },
        {
          drinkId: '3',
          drinkName: '우유',
          price: 1200,
          qty: 2
        },
        {
          drinkId: '4',
          drinkName: '박카스',
          price: 500,
          qty: 5
        },
        {
          drinkId: '5',
          drinkName: '커피',
          price: 3000,
          qty: 2
        }
      ]
    }
  }
}
</script>

<style>
table {
  color: brown;
}
</style>
