<template>
    <header class="header">
        <span
            ><img src="../assets/kcc.png" alt="kcc" class="logo" />

            <h1>Turnstile Dashboard</h1>

            <p class="aside" id="this"></p>
        </span>
        <div id="nav"></div>
    </header>
</template>
<script>
function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById("this").innerHTML = h + ":" + m + ":" + s;
    setTimeout(startTime, 500);
}
function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    } // add zero in front of numbers < 10
    return i;
}
setTimeout(startTime, 500);

export default {
    name: "Header",
    methods: {},
};
</script>

<style scoped>
.logo {
    float: left;
    height: 10%;
    width: 10%;
}
.aside {
    float: right;
}
.header {
    background: #0000CD;
    color: #fff;
    text-align: center;
    padding: 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 24px;
}
</style>
