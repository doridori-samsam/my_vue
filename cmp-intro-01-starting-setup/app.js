const app = Vue.createApp({
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorez",
          phone: "122 989 3847",
          email: "manu@godmail.com",
        },
        {
          id: "julia",
          name: "Julia Jones",
          phone: "243 453 1313",
          email: "juli@local.com",
        },
      ],
    };
  },
});

app.component("friend-contact", {
  template: `
  <li>
  <h2>{{friend.name}}</h2>
  <button @click="toggleDetails">
  {{detailsVisible ? 'hide' : 'Show Details'}}
  </button>
  <ul v-if="detailsVisible">
  <li><strong>Phone:</strong> {{friend.phone}}</li>
  <li><strong>Email:</strong>{{friend.email}}</li>
  </ul>
  </li>
  `,
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorez",
        phone: "122 989 3847",
        email: "manu@godmail.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
});
app.mount("#app");
