const app = Vue.createApp({
  data() {
    return {
      counter: 20,
      name: "",
      confirmedName: "",
      fullName: "",
      lastName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;
        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    //의존성 하나가 변경될 때마다 실행하는 함수를 watch에 지정해 줄 수 있다. 메소드 명을 data에 있는 property이름으로 설정한다.
    //value는 watch 프로퍼티의 마지막 값을 인수로 가져온다. second parameter는 watch property의 이전 값이 된다.
    // name(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + " " + "Park";
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    // computed property의 의존값(this.name)을 의식한다. computed property값을 캐시에 저장하고
    // 의존값이 변경된 경우에만 재계산한다.
    // 출력값을 동적으로 계산할 때에는 computed로!
    fullname() {
      console.log("computed func");
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "this.lastName";
    },
  },
  methods: {
    outputFullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Park";
    },
    add(num) {
      this.counter = this.counter + num;
      console.log(this.counter);
    },
    setName(event, lastName) {
      this.name = event.target.value;
    },
    confirmInput() {
      this.confirmedName = this.name;
    },
    submitForm() {
      // event.preventDefault();
      alert("logged in!");
    },
    resetInput() {
      this.name = "";
      this.confirmedName = "";
    },
  },
});

app.mount("#events");
