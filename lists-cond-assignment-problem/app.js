const app = Vue.createApp({
  data() {
    return {
      setAssignment: "",
      assignments: [],
      show: true,
    };
  },
  computed: {
    buttonCaption() {
      return this.show ? "Hide List" : "Show List";
    },
  },
  methods: {
    addAssignment() {
      this.assignments.push(this.setAssignment);
      this.setAssignment = "";
    },
    showToggle() {
      this.show = !this.show;
    },
  },
});

app.mount("#assignment");
