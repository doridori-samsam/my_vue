const app = Vue.createApp({
  data() {
    return {
      currentUserInput: "",
      message: "Vue is great!",
    };
  },
  methods: {
    saveInput(event) {
      this.currentUserInput = event.target.value;
    },
    setText() {
      this.message = this.$refs.userText.value;
      //console.dir(this.$refs.userText);
    },
  },
  beforeCreate() {
    console.log("before create!");
    //http request to server, timer.... anything you need to do.
  },
  created() {
    console.log("created!");
  },
  beforeMount() {
    console.log("before mount!");
  },
  mounted() {
    console.log("mounted!");
  },
  beforeUpdate() {
    console.log("before update!");
  },
  updated() {
    console.log("updated!");
  },
  unmounted() {
    console.log("unmounted!");
  },
});

const app2 = Vue.createApp({
  template: `<p>{{favoriteMeal}}</p>`,
  data() {
    return {
      favoriteMeal: "Pizza",
    };
  },
});

app.mount("#app");

setTimeout(function () {
  app.unmount();
}, 3000);

app2.mount("#app2");
