const app = Vue.createApp({
  data() {
    return {
      goalA: "finish the course and learn Vue",
      goalB: "<h2>Master Vue and build amazing apps!</h2>",
      vueLink: "https://vuejs.org/",
    };
  },
  methods: {
    outputGoal() {
      const randomNumber = Math.random();
      if (randomNumber < 0.5) {
        return this.goalA;
      } else {
        return this.goalB;
      }
    },
  },
});
app.mount("#user-goal");
