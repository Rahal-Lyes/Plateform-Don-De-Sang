<template>
  <div>
    <br /><br />
    <form class="text-center form">
      <div class="firstname">
        <label class="mb-10 mx-auto p-2">Enter Your FirstName:</label>
        <input
          type="text"
          class="mt-10 mx-auto p-2"
          placeholder="Name"
          v-model="user.name"
        />
      </div>
      <br />

      <div class="email">
        <label class="mt-6 mx-auto p-2">Enter Your Email:</label>
        <input
          type="email"
          class="mt-6 mt-auto p-2"
          placeholder="email"
          v-model="user.email"
        /><br />
      </div>

      <button class="btn btn-outline-success m-10" v-on:click="handleClick">Cliquez ici</button>
 
      <button class="btn btn-primary" type="button" :on-click="login()">Button</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "Signin",

  data() {
    return {
      user: {
        name: "",
        email: "",
      },
      clicked: false,
    };
  },
  methods: {
    login() {},
    handleClick: function () {
      // Méthode appelée lors du clic sur le bouton
      this.clicked = true;
    },
  },
};
</script>

