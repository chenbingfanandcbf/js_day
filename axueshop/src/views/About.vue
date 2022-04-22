<template>
    <div>
      <!-- {{lis}} -->
      <div class="box">
        <div class="box1">
          <h2><img src="/img/1.jpg" alt="">王明伟医生</h2>
        </div>
        <div class="box2">
          <h2><img src="/img/2.jpg" alt=""></h2>
        </div>
      </div>
      <div class="gr">
        <div class="a">
          
        <div>
          <p>已签约人数</p>
          <h2>1000</h2>
        </div>
        <div>
          <p>待签约人数</p>
          <h2>20</h2>
        </div>
        <div>
          <p>居民总数</p>
          <h2>1020</h2>
        </div>
        <div>
          <p>待处理服务量</p>
          <h2>10</h2>
        </div>
        <div>
          <p>服务总量</p>
          <h2>100</h2>
        </div>
        <div>
          <p>服务评价</p>
          <h2>4.9</h2>
        </div>
        </div>
        <div class="b">

        </div>
      </div>
      <div class="d">
        <div>
          <img src="/img/3.jpg" alt="">
          <p>新建档案</p>
        </div>
        <div>
          <img src="/img/5.jpg" alt="">
          <p>签约管理</p>
        </div>
        <div>
          <img src="/img/4.jpg" alt="">
          <p>服务管理</p>
        </div>
      </div>
      <h2 class="h2">
        签约申请(3)
        <span>查看全部></span>
      </h2>
      <!-- {{lis}} -->
      <div class="c" v-for="(item, index) in lis" :key="index">
        <h2>{{item.name}} {{item.age}} <img :src="'/img/'+item.img"/> <span><a href="#">待审核</a></span></h2>
        <p>身份证号&nbsp;&nbsp;{{item.sex}}</p>
        <p>签约团队&nbsp;&nbsp;&nbsp;&nbsp;{{item.td}}</p>
        <p>服务包&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.fwb}}</p>
      </div>
      <h2 class="h2">
        服务申请(8)
        <span>查看全部></span>
      </h2>
      <div class="c" v-for="(item, index) in lis" :key="index">
        <h2>{{item.name}} {{item.age}} <button>机构门诊</button> <span><a href="#">待审核</a></span></h2>
        <p>身份证号&nbsp;&nbsp;{{item.sex}}</p>
        <p>签约团队&nbsp;&nbsp;&nbsp;&nbsp;{{item.td}}</p>
        <p>服务包&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{item.fwb}}</p>
      </div>
      <!-- tab -->
      <div class="tab">
        <div class="tab1">
          <img src="/img/11.jpg" alt="">
          <p>首页</p>
        </div>
        <div class="tab2">
          <img src="/img/22.jpg" alt="">
          <p>居民</p>
        </div>
        <div class="tab3">
          <img src="/img/33.jpg" alt="">
          <p>消息</p>
        </div>
        <div class="tab4">
          <img src="/img/44.jpg" alt="">
          <p>我的</p>
        </div>
      </div>
      <!-- tab -->
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
.box{
  width: 90%;
  height: 100px;
  display: flex;
  justify-content: space-between;
  margin: auto;
  align-items: center;
  .box1{
    width: 50%;
    h2{
      font-weight: normal;
    }
  }
}
.gr{
  width: 90%;
  height: 360px;
  background-image: linear-gradient(#3fd4a9,#57d7c3);
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border-bottom-left-radius: 20px;
  margin: auto;
  position: relative;
  .a{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  div{
    width: 100px;
    height: 100px;
    color: white;
    text-align: center;
  }
  }
}
.d{
  width: 90%;
  height: 150px;
  background: #ffffff;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  position: absolute;
  top: 310px;
  left: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 10px 3px #f7f7f7; 
  div{
    text-align: center;
    width: 120px;
    height: 100px;
  }
}
.h2{
  width: 85%;
  height: 50px;
  line-height: 50px;
  font-weight: normal;
  margin: auto;

  span{
    font-size: 12px;
    color: #ddd;
    float: right;
  }
}
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
.tab{
  width: 100%;
  height: 50px;
  border-top: solid 1px #ddd;
  display: flex;
  justify-content: space-between;
  background: white;
  text-align: center;
  position: fixed;
  bottom: 0;
  left: 0;
  .tab1{
    img{
      width: 20px;
      height: 20px;
    }
    p{
      padding: 0;
      margin: 0;
    }
  }
  .tab2{
    img{
      width: 20px;
      height: 20px;
    }
    p{
      padding: 0;
      margin: 0;
    }
  }
  .tab3{
    img{
      width: 20px;
      height: 20px;
    }
    p{
      padding: 0;
      margin: 0;
    }
  }
  .tab4{
    img{
      width: 20px;
      height: 20px;
    }
    p{
      padding: 0;
      margin: 0;
    }
  }
}
</style>
