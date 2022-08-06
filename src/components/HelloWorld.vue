<template>
  <div class="hello">
    <!-- <h2 class="text-center">{{ msg }}</h2> -->
    <div class="container">
      <div class="row">
        <div class="box col-md-6 m-auto" :class="{ disabled: disabled }">
          <form @submit.prevent="login">
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Логин</label>
              <input
                type="text"
                class="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                v-model="username"
              />
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label"
                >Пароль</label
              >
              <input
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                v-model="password"
              />
            </div>

            <button type="submit" class="btn btn-primary">Войти</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      username: "",
      password: "",
      disabled: false
    };
  },
  props: {
    msg: String,
  },
  methods: {
    login: async function () {
      this.disabled = true
      await this.$axios({
        method: "post",
        url: "https://localhost:8443/user/auth",
        data: {
          username: this.username,
          password: this.password,
        },
      }).then((response) => {

        if (!response.data) {
          this.username = null
          this.password = null
          this.disabled = false

          return false;
        }

        this.$router.push("dashboard")

      });
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.hello {
  text-align: left;
}

.box {
  padding: 30px;
}

.disabled {
  z-index: -1;
  position: relative;
  &:after {
    content: '';
    height: 100%;
    width: 100%;
    background: #eeeeee50;
    position: absolute;
    top: 0;
    left: 0;
    border-radius: 12px;
  }
}
</style>
