const app = Vue.createApp({
  data() {
    return {
      class1: "",
      class2: "",
      toggle: false,
    };
  },
  methods: {
    toggleClick() {
      this.toggle = !this.toggle;
    },
  },
});

app.mount("#assignment");
