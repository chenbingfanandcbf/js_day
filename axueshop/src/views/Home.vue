<template>
    <div>
      <div class="box">
        <div class="box1">
          <ul>
            <li>👇</li>
            <li>
              <img src="/images/3.jpg" alt="">
              <p>PAGES</p>
            </li>
            <li>
              <img src="/images/1.jpg" alt="">
              <p>NOTES</p>
            </li>
            <li>
              <img src="/images/2.jpg" alt="">
              <p>CONSOL</p>
            </li>
          </ul>
        </div>
        <div class="box2">
          <p>
            <img src="/images/4.jpg" alt="">
          </p>
          <div class="box2-1">
            <div class="box2-11">
            <p>PAGES</p>
            <h3>作品首页<span><img src="/images/7.jpg" alt=""><img src="/images/8.jpg" alt=""></span></h3>
            </div>
              <input type="text" name="" id="" placeholder="Search">
            <div class="box2-12">
            <ul>
              <p class="p1"><img src="/images/6.jpg" alt="">作品说明</p>
              <li>
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;作品首页
              </li>
              <li>
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;版本更新
              </li>
              <li>
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;信息结构图
              </li>
            </ul>
            <ul>
              <p class="p1"><img src="/images/6.jpg" alt="">全局说明</p>
              <li>
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;网路异常
              </li>
              <li>
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;账户异常
              </li>
              <li>
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;升级提醒
              </li>
              <li>
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;数据加载
              </li>
              <li>
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;空数据
              </li>
              <li>
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;常用手势
              </li>
              <li>
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;公共说明
              </li>
              <li class="li">
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;组件/规范
              </li>
              <li class="li">
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;需求清单
              </li>
            </ul>
            <ul>
              <p class="p1"><img src="/images/6.jpg" alt="">高保真原型</p>
              <li class="l1">
                <img src="/images/6.jpg" alt="">&nbsp;&nbsp;登录
              </li>
              <li>
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;引导页
              </li>
              <li>
                <img src="/images/5.jpg" alt="">&nbsp;&nbsp;登录
              </li>
            </ul>
            </div>
          </div>
        </div>
        <div class="box3"></div>
      </div>
    </div>
</template>

<script>
export default {
    data() {
        return {

        };
    },
    mounted() {

    },
    methods: {

    },
};
</script>

<style scoped lang="scss">
html,body{
  width: 100%;
  height: 100%;
  position: relative;
}
.box{
  width: 100%;
  height: 100%;
  display: flex;
}
.box1{
  width: 70px;
  height: 100%;
  text-align: center;
  background: #8f949a;
  position: absolute;
  top: 0%;
  left: 0;
ul{
  width: 69px;
  height: 100%;
  background: #8f949a;
  color: white;
  li{
    background: #8f949a;
  }
  img{
    width: 100%;
    height: 78px;
  }
}
}
.box2{
  width: 245px;
  height: 100%;
  background: #f5f5f5;
  position: absolute;
  top: 0;
  left: 70px;
  p{
    padding: 0;
    margin: 0;
    width: 100%;
    height: 45px;
    img{
      width: 100%;
      height: 100%;
    }
}
.box2-1{
  .box2-11{
  border-bottom: solid 1px #999;
  }
  width: 100%;
  height: 81px;
  p{
    width: 100%;
    height: 20px;
    margin-top: 30px;
    // font-size: 13px;
  }
  h3{
    width: 100%;
    height: 30px;
    line-height: 30px;
    padding: 0;
    margin: 0;
    margin-bottom: 20px;
    span{
      float: right;
      img{
        padding-left: 10px;
      }
    }
  }
  input{
    width: 90%;
    height: 30px;
    border: 0;
    line-height: 30px;
    background: white;
    color: #ddd;
    margin-top: 5px;
    margin-left: 10px;
  }
  .box2-12{
    width: 90%;
    height: 100%;
    margin-left: 20px;
  ul{
    width: 100%;
    background: #f5f5f5;
    margin: 0;
    .p1{
      width: 100%;
      height: 40px;
      line-height: 40px;
      margin: 0;
      img{
        width: 35px;
        height: 13px;
      }
    }
    li{
      line-height: 30px;
      padding-left: 47px;
    }
    .li{
      padding-left: 27px;
    }
    .l1{
      padding-left: 20px;
    }
  }
}
  }
}
</style>
