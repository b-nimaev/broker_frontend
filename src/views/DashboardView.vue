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
            <router-view v-slot="{ Component }">
              <transition name="fade">
                <component :is="Component" />
              </transition>
            </router-view>
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
.wrapper {
  position: absolute;
  top: 0;
  transition: 2s ease;
  width: 100%;
  padding: 30px;
  background: #44444417;
  border-radius: 12px;
  padding: 30px;
  box-shadow: 6px 6px 0px 1px #721ebf1c;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

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
  width: 100%;
  color: #fff;
  position: relative;
  min-height: 200px;
}

</style>
