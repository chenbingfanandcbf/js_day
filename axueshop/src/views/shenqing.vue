<template>
    <div>
        <p class="p1"><span><</span>待处理签约申请</p>
        <div class="c" v-for="(item, index) in lis" :key="index">
        <h2>{{item.name}} {{item.age}} <img :src="item.img"/><span><a href="#">待审核</a></span></h2>
        <p>身份证号&nbsp;&nbsp;{{item.sex}}</p>
        <p>签约团队&nbsp;&nbsp;&nbsp;&nbsp;{{item.td}}</p>
        <p>服务包&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.fwb}}</p>
      </div>
      <p class="p">
          没有更多了~
      </p>
    </div>
</template>

<script>
import data from '@/assets/data.json'
console.log(data);
export default {
    data() {
        return {
            lis:data.data
        };
    },
    mounted() {

    },
    methods: {

    },
};
</script>

<style scoped lang="scss">
.c{
  width: 90%;
  height: 200px;
  box-shadow: 10px 10px 10px #f7f7f7; 
  margin: auto;
  h2{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-weight: normal;
    span{
      float: right;
      a{
        color:red;
        font-size: 13px;
      }
    }
    button{
      font-size: 13px;
      height: 30px;
      line-height: 30px;
      border-radius: 5px;
      border: 0;
      background: #cbf;
      color: rgb(118, 84, 221);
    }
  }
}
.p{
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    padding: 0;
    margin: 0;
}
.p1{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    span{
        float: left;
    }
}
</style>