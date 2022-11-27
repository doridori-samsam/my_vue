const app = Vue.createApp({
  data() {
    return {
      firstOutput: "",
      secondOutput: "",
    };
  },
  methods: {
    showAlert() {
      alert("Hello");
    },
    setKeyDown(event) {
      this.firstOutput = event.target.value;
    },
    setEnter(event) {
      this.secondOutput = event.target.value;
    },
  },
});

app.mount("#assignment");
