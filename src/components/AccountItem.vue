<template>
  <div class="account-item" >
    <p>
      
      {{account.username}}
      <button @click="$emit('del-account', account.username)" class="del">x</button>
      </p>
  </div>
</template>

<script>
export default {
  name: "AccountItem",
  props: ["account"],
  methods: {
    /*markComplete() {
      this.todo.completed = !this.todo.completed;
    }*/
  }
}
</script>


<style scoped>
.del {
    background: #ff0000;
    color: #fff;
    border: none;
    padding: 5px 9px;
    border-radius: 50%;
    cursor: pointer;
    
  }
  
</style>