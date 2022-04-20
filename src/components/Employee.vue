<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>Employee</h3>
        <ul class="list-group">
          <li class="list-group-item">Name: {{ this.employee.name }}</li>
          <li class="list-group-item">Age: {{ this.employee.age }}</li>
          <li class="list-group-item">Job: {{ this.employee.job }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Employee",
  data: function () {
    return {
      employee: {
        name: "Tien Nguyen",
        age: "34",
        job: "Saler",
      },
    };
  },
};
</script>

<style></style>
