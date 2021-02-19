<template>
    <div class="Login">
        <tests />

        <div class="main">
            <form @submit.prevent="login">
		<p class="err" id=errorText></p>
                <input type="text" v-model="username" name="title" />
                <br />
                <br />
                <input
                    type="password"
                    v-model="password"
                    name="title"
                /><br /><br />
                <button type="submit" value="submit">Login</button>
            </form>
        </div>
    </div>
</template>
<script src="./Login.js"></script>
<style scoped>
.main {
    border-radius: 25px;
    margin: auto;
    background: #add8e6;
    color: #fff;
    padding-top: 50px;
    padding-right: 10px;
    padding-bottom: 50px;
    padding-left: 10px;
    height: 50%;
    width: 50%;
}
.err {
	color: red;
	font-family: Arial, Helvetica, sans-serif;
}
</style>
