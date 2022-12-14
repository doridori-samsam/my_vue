<template>
  <section>
    <h2>My Friends</h2>
    <ul>
      <friend-contact></friend-contact>
      <friend-contact></friend-contact>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "023 393 1938",
          email: "manuel@local.com",
        },
        {
          id: "Peter",
          name: "Peter bread",
          phone: "223 595 2267",
          email: "peter@local.com",
        },
      ],
    };
  },
  methods: {},
  computed: {},
};
</script>
