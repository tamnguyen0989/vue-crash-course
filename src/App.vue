<template>
  <div class="container mt-3">
    <div class="grid">
      <div class="row">
        <div class="col">
          <p class="h3 text-success fw-bold">App Component</p>
          <p class="fst-italic">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, ex
            repellat obcaecati quod velit aliquam sunt nostrum consequatur dolor
            non dignissimos a impedit, maxime nisi. Error maiores officiis iusto
            ratione?
          </p>
        </div>
      </div>
    </div>

    <!-- <div class="container">
      <div class="grid">
        <div class="row">
          <div class="col">
            <Customer name="Tam" age="32" job="Developer" />
          </div>
        </div>
      </div>
    </div> -->

    <!-- <div class="container mt-3">
      <div class="row">
        <div class="col">
          <Employee />
        </div>
      </div>
    </div>-->

    <!-- <div class="container mt-3">
      <div class="row">
        <div class="col">
          <Counter />
        </div>
      </div>
    </div> -->

    <!-- <div class="container mt-3">
      <div class="row">
        <div class="col">
          <Greeting />
        </div>
      </div>
    </div> -->

    <!-- <div class="container mt-3">
      <div class="row">
        <div class="col">
          <Register />
        </div>
      </div>
    </div> -->

    <!-- <div class="container mt-3">
      <div class="row">
        <div class="col">
          <AuthUser />
        </div>
      </div>
    </div> -->

    <div class="container mt-3">
      <div class="row">
        <div class="col">
          <UserList />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import UserList from "@/components/UserList";
import AuthUser from "@/components/AuthUser";
import Register from "@/components/Register";
import Greeting from "@/components/Greeting";
import Counter from "@/components/Counter";
import Employee from "@/components/Employee";
import Customer from "@/components/Customer";
export default {
  components: {
    Customer,
    Employee,
    Counter,
    Greeting,
    Register,
    AuthUser,
    UserList,
  },
};
</script>

<style>
@import "./styles.css";
</style>
