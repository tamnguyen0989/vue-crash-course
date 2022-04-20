<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <div v-if="isLogged">
              <p class="h3 fw-bold text-success">Welcome User</p>
              <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae totam ratione veniam corporis dolorum fugit deleniti reprehenderit at quaerat! Nostrum ex assumenda laudantium ullam. Quidem?</p>
            </div>
            <div v-if="!isLogged">
              <p class="h3 fw-bold text-danger">Thank you!</p>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum nemo suscipit soluta quisquam excepturi mollitia asperiores labore quod voluptate, officiis provident accusamus deserunt laborum pariatur ut aspernatur maiores officia. Sint?</p>
            </div>
            <div>
              <button v-if="!isLogged" @click="login()" class="btn btn-success btn-sm m-1">Login</button>
              <button v-if="isLogged" @click="logout()" class="btn btn-danger btn-sm m-1">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AuthUser",
  data: function () {
    return {
      isLogged: false,
    };
  },
  methods: {
    login: function () {
      this.isLogged = true;
    },
    logout: function () {
      this.isLogged = false;
    },
  },
};
</script>

<style>
</style>