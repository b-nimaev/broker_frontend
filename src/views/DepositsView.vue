<template>
  <h4>Депозиты</h4>
  <hr />
  <table class="table table-striped">
    <thead>
      <tr>
        <th width="1%" scope="col">#</th>
        <th width="5%" scope="col">uid</th>
        <th width="5%" scope="col">username</th>
        <th width="15%" scope="col">first_name</th>
        <th width="10%" scope="col">email</th>
        <th width="20%" scope="col">action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(user, index) in users" :key="user">
        <th scope="row">{{ index }}</th>
        <th>{{ user.id }}</th>
        <td>{{ user.username }}</td>
        <td>{{ user.first_name }}</td>
        <td>{{ user.email }}</td>
        <td>
          <button
            :data-user-id="user.id"
            @click="accept"
            class="btn btn-success"
          >
            Подтвердить
          </button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  data() {
    return {
      users: "",
    };
  },
  methods: {
    accept: async function (e) {
      let id = e.target.getAttribute("data-user-id");
      await this.$axios({
        method: "post",
        url: "https://localhost:8443/user/removeProposal",
        data: {
          id: id,
        },
      }).then((response) => {
        console.log(response)
      });
    },
  },
  async beforeCreate() {
    await this.$axios({
      method: "post",
      url: "https://localhost:8443/user/getUsers",
    }).then((response) => {
      this.users = response.data;
    });
  },
};
</script>

<style lang="scss" scoped>
tbody {
  button {
    color: #fff;
    &:hover,
    &:active,
    &:focus {
      color: #fff;
    }
  }
  td,
  th {
    vertical-align: middle;
    color: #fff;
  }
}

.table-striped > tbody > tr:nth-of-type(odd) > * {
  --bs-table-accent-bg: rgb(255 255 255 / 5%);
  color: #ffffff;
}
</style>