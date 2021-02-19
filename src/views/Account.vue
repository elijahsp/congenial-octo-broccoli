<template>
  <div class="account">
    <button class="wew" v-on:click="home">Home</button>
    <br/>
    <br/>
    <h1>Manage Accounts</h1>
    
    <p id="notif"></p>
    <div id="asdf"></div>
    
    
    <AccountList v-bind:account="account" v-on:del-account="deleteAccount" />
    <br/>
    <br/>
    <h2>Add Account</h2>
    <AddAccount v-on:add-account="addAccount"/>
  </div>
</template>
<script src="./account.js">

</script>
<style scoped>
.wew {
    float: right;
}
</style>