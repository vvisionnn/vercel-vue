<template>
  <div class="container">
    <div class="login">
      <form @submit.prevent="onSubmit">
        <div>
          <input
            type="text"
            name="username"
            id="username"
            v-model="username"
            placeholder="username"
            required
          />
        </div>
        <div>
          <input
            type="password"
            name="password"
            id="password"
            v-model="password"
            placeholder="password"
            required
          />
        </div>
        <div>
          <button>
            SignIn
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "SignIn",
  data() {
    return {
      username: null,
      password: null,
    };
  },
  methods: {
    onSubmit() {
      const username = this.username;
      const password = this.password;

      // get token
      axios
        .get("/back_api/auth?username=" + username + "&password=" + password)
        .then((response) => {
          console.log(response.data["data"]["token"]);
          // window.alert(response.data["data"]["token"]);
          this.$router.replace("/");
        });

      // if (username == "test" && password == "test12345") {
      //   this.$router.replace("/");
      // } else {
      //   alert("error");
      // }
    },
  },
};
</script>

<style lang="scss" scoped></style>
