<template>
  <div>
    <h1 id=weew>{{ msg }}</h1>
  </div>
</template>
<script>

export default {
  name: "tests",
  data() {
    return {
      title: "",
    };
  },
  props: {
    msg: String,
  },
  
};
</script>