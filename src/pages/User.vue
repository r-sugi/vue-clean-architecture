<template>
  <div>
    <UsersDetailContainer :id="$route.params.id" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import UsersDetailContainer from "@/containers/users/detail/index.vue";

export default Vue.extend({
  name: "user",
  components: {
    UsersDetailContainer
  }
});
</script>
