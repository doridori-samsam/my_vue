const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
      fullName: "",
    };
  },
  watch: {},
  computed: {
    // computed property의 의존값(this.name)을 의식한다. computed property값을 캐시에 저장하고
    // 의존값이 변경된 경우에만 재계산한다.
    fullname() {
      if (this.name === "") {
        return "";
      }
      return this.name + " " + "Park";
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
