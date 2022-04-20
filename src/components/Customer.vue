<template>
  <div class="container">
    <div class="row">
      <div class="col">
        <h3>Customer</h3>
        <ul class="list-group">
          <li class="list-group-item">
            Name: {{name}}
          </li>
          <li class="list-group-item">
            Age: {{age}}
          </li>
          <li class="list-group-item">
            Job: {{job}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Customer",
  props: {
    name: { type: String, required: true },
    age: { type: Number, required: true },
    job: { type: String, required: true },
  },
};
</script>

<style>
</style>