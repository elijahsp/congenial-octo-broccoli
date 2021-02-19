<<<<<<< HEAD
<template>
  <div>
    <div v-bind:key="account.username" v-for="account in account">
      <AccountItem v-bind:account="account" v-on:del-account="$emit('del-account', account.username)" />
    </div>
  </div>
</template>

<script>
import AccountItem from './AccountItem.vue';

export default {
  name: "AccountList",
  components: {
    AccountItem
  },
  props: ["account"]
}
</script>

<style scoped>

</style>

=======
<template>
  <div>
    <div v-bind:key="account.username" v-for="account in account">
      <AccountItem v-bind:account="account" v-on:del-account="$emit('del-account', account.username)" />
    </div>
  </div>
</template>

<script>
import AccountItem from './AccountItem.vue';

export default {
  name: "AccountList",
  components: {
    AccountItem
  },
  props: ["account"]
}
</script>

<style scoped>

</style>

>>>>>>> refs/remotes/turnstile-app/master
