<template>
  <div class="dashboard">
    <div class="container">
      <h2>Бот брокер</h2>
      <hr />
      <div class="row">
        <div class="col-md-3">
          <ul>
            <li>
              <router-link to="/dashboard">Настройки бота</router-link>
            </li>
            <li>
              <router-link to="/dashboard/statistic">Статистика</router-link>
            </li>
            <li>
              <router-link to="/dashboard/deposits">Депозиты</router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-9">
          <main>
            <router-view></router-view>
          </main>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "DashboardView",
  components: {
    // HelloWorld
  },
};
</script>

<style lang="scss" scoped>
.dashboard {
  text-align: left;
}
img {
  width: 200px;
}

hr {
    border-color: #fff;
}
h2 {
    color: #fff;
}

ul {
  padding: 0;
  margin: 0;
  list-style-type: none;
  li {
    font-size: 24px;
    margin: 10px 0;
    a {
      text-decoration: none;
      color: #fff;
      padding-bottom: 2px;
      border-bottom: 1px solid #fff;
    }
  }
}

main {
  background: #44444417;
  border-radius: 12px;
  width: 100%;
  min-height: 600px px;
  padding: 30px;
  box-shadow: 6px 6px 0px 1px #721ebf1c;
  color: #fff;
}
</style>
