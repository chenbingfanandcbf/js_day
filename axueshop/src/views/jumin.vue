<template>
    <div>
        <p class="p"><span><</span>新建居民档案</p>
        <h1 class="h1">居民基本信息</h1>
        <p class="p1"><strong>真实姓名</strong><span>*</span>&nbsp;&nbsp;&nbsp;&nbsp;请填写居民的真实姓名</p>
        <p class="p1"><strong>身份证号</strong><span>*</span>&nbsp;&nbsp;&nbsp;&nbsp;请填写居民的身份证号</p>
        <p class="p1"><strong>性别</strong><span>*</span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请填写居民性别<a href="#">></a></p>
        <p class="p1"><strong>出生日期</strong><span>*</span>&nbsp;&nbsp;&nbsp;&nbsp;请选择居民的出生日期<a href="#">></a></p>
        <p class="p1"><strong>手机号码</strong><span>*</span>&nbsp;&nbsp;&nbsp;&nbsp;居民登录账号，请正确填写</p>
        <p class="p1"><strong>登陆密码</strong><span>*</span>&nbsp;&nbsp;&nbsp;&nbsp;8位以上的数字和字母组合</p>
        <p class="p2"><strong>现居地</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请填写现居地</p>
        <div class="box">
            <p class="p1"><strong>居民标签</strong>&nbsp;&nbsp;&nbsp;&nbsp;点击选择居民标签</p>
            <div class="box1">
                <p>高血压</p>
                <p>冠心病</p>
                <p>高血糖</p>
                <p>高血脂</p>
                <p>高血压</p>
                <p>冠心病</p>
                <p>高血糖</p>
                <p>高血脂</p>
            </div>
        </div>
        <p class="p3"></p>
        <p class="p1"><strong>关联家人</strong>&nbsp;&nbsp;&nbsp;&nbsp;请选择该居民家人信息<a href="#">></a></p>
        <p class="p1"><strong>立即签约</strong>&nbsp;&nbsp;&nbsp;&nbsp;<a href="#"><img src="/img/55.jpg" alt=""></a></p>
        <p class="p3"></p>
        <div class="btn">
            <button>下一步</button>
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
.p{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    span{
        float: left;
    }
}
.h1{
    width: 100%;
    height: 70px;
    line-height: 70px;
    background: #f7fafd;
    font-weight: normal;
}
.p1{
    width: 90%;
    height: 50px;
    line-height: 50px;
    border-bottom: solid 1px #ddd;
    color: #ddd;
    padding-left: 20px;
    span{
        color: red;
    }
    a{
        float: right;
    }
    strong{
        color: #000;
    }
}
.p2{
    width: 90%;
    height: 50px;
    line-height: 50px;
    border-bottom: solid 1px #ddd;
    color: #ddd;
    padding-left: 20px;
    box-shadow: 10px 10px 10px #f7f7f7;
}
.box{
    width: 90%;
    height: 150px;
    .box1{
        width: 100%;
        height: 100px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        text-align: center;
        margin: auto;
        p{
            width: 70px;
            height: 30px;
            padding: 0;
            margin: 0;
            padding-left: 10px;
            line-height: 30px;
            border: solid 1px #ddd;
            color: #ddd;
        }
    }
}
.p3{
    width: 100%;
    height: 10px;
    background: #ddd;
}
.btn{
    width: 100%;
    height: 70px;
    button{
        width: 100%;
        height: 100%;
        color: white;
        background: #42d4ae;
        border: 0;
        border-radius: 10px;
    }
}
</style>
