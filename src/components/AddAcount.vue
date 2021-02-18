<template>
    <div>
        <form @submit.prevent="addAccount">
      <input type="text" v-model="username" name="username" placeholder="Username"><br/><br/>
      <input type="text" v-model="password" name="password" placeholder="Password"><br/><br/>
      <input type="submit" value="Submit" class="btn">
    </form>
    </div>
</template>
<script>
export default {
    name: "AddAccount",
    data(){
        return{
            username: '',
            password: ''
        }
    },methods: {
    addAccount() {
        if(!this.username||!this.password)
        return
        else{
      const newAccount = {
        username: this.username,
        password: this.password
        //completed: false
      }
      // Send up to parent
      this.$emit('add-account', newAccount)
      //console.log(newAccount)
      this.username = '';
      this.password = '';}
    },
    }

}
</script>