const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      confirmedName: "",
    };
  },
  methods: {
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
