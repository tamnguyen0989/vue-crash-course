<template>
  <div class="contain">
    <div class="row">
      <div class="col">
        <p class="h3 fw-bold text-success">User List</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <p class="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam soluta ex nobis at quibusdam quasi, sint vero aspernatur, obcaecati modi, ea error dolorem voluptatum quas tempore porro repudiandae molestiae nemo!</p>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <table class="table table-hover table-striped text-center">
          <thead class="bg-success text-white">
            <tr>
              <th>Sno</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
              <th>Website</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="user in users" :key="user.id">
              <td>{{user.id}}</td>
              <td>{{user.name}}</td>
              <td>{{user.email}}</td>
              <td>{{user.address.city}}</td>
              <td>{{user.website}}</td>
              <td>{{user.company.name}}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import UserService from "@/services/UserService";
import USERS from "@/constants/User";

export default {
  name: "UserList",
  data: function () {
    return {
      // users: USERS
      users: UserService.getUsers(),
    };
  },
};
</script>

<style>
</style>