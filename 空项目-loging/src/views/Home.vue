<template>
  <div class="home">
    <el-button type="danger">点击按钮</el-button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  mounted() {
    this.$axios.get("https://api.it120.cc/small4/cms/news/list").then(res=>{
      console.log(res);
    })
  },
}
</script>
