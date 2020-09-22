import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    status: "",
    token: localStorage.getItem("token") || "",
    user: {},
  },
  mutations: {
    auth_request(state) {
      state.status = "loading";
    },
    auth_success(state, token, user) {
      state.status = "success";
      state.token = token;
      state.user = user;
    },
    auth_error(state) {
      state.status = "error";
    },
    logout(state) {
      state.status = "";
      state.token = "";
    },
  },
  actions: {
    signin({ commit }, user) {
      console.log(user);
      var bodyFormData = new FormData();
      bodyFormData.append("username", user.username);
      bodyFormData.append("password", user.password);
      return new Promise((resolve, reject) => {
        commit("auth_request");
        axios({
          url: "/back_api/auth",
          data: bodyFormData,
          method: "POST",
          headers: { "Content-Type": "multipart/form-data" },
        })
          .then((resp) => {
            const token = resp.data.data.token;
            console.log(token);
            // const user = resp.data.user;
            // localStorage.setItem("token", token);
            // axios.defaults.headers.common["Authorization"] = token;
            // commit("auth_success", token, user);
            resolve(resp);
          })
          .catch((err) => {
            // commit("auth_error");
            // localStorage.removeItem("token");
            // reject(err);
          });
      });
    },
  },
  getters: {},
});
