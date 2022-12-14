<template>
  <li>
    <h2>{{ friend.name }}</h2>
    <button @click="toggleDetails">Show Details</button>
    <ul v-if="detailsVisible">
      <li><strong>Phone:</strong> {{ friend.phone }}</li>
      <li><strong>Email:</strong> {{ friend.email }}</li>
    </ul>
  </li>
</template>

<script>
export default {
  data() {
    return {
      detailsVisible: false,
      friend: {
        id: "manuel",
        name: "Manuel Lorenz",
        phone: "023 393 1938",
        email: "manuel@local.com",
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsVisible = !this.detailsVisible;
    },
  },
};
</script>

<style></style>
