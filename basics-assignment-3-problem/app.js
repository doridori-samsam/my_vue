const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  computed: {
    result() {
      if (this.number < 37) {
        return "Not there yet";
      } else if (this.number === 37) {
        return this.number;
      } else {
        return "Too much!";
      }
    },
  },
  watch: {
    result() {
      console.log("watcher executing...");
      const that = this;
      //will only works whenever result func in computed property returns something...
      setTimeout(() => {
        that.number = 0;
      }, 5000);
    },
  },

  methods: {
    add(num) {
      this.number = this.number + num;
      console.log(this.number);
    },
  },
});

app.mount("#assignment");
