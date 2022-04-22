<template>
    <div>
        <p class="p"><span><</span>结果</p>
        <p class="p1">
            <img src="/img/66.jpg" alt="">
        </p>
        <h1>
            提交成功，等待居民支付
        </h1>
        <p class="p2">
            签约信息已提交，居民支付后可完成签约
        </p>
        <p>
        <button class="b1">查看签约进度</button>
        </p>
        <p>
        <button class="b2">返回首页</button>
        </p>
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
.p1{
    width: 100%;
    height: 100px;
    text-align: center;
    img{
        width: 70px;
        height: 70px;
    }
}
h1{
    width: 100%;
    height: 40px;
    line-height: 40px;
    font-weight: normal;
    text-align: center;
}
.p2{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
}
.b1{
    width: 95%;
    height: 50px;
    line-height: 50px;
    color: white;
    background: #3fd4a9;
    border: 0;
    border-radius: 5px;
    margin-left: 10px;
}
.b2{
    width: 95%;
    height: 50px;
    line-height: 50px;
    color: #3fd4a9;
    border: solid 1px #ddd;
    border-radius: 5px;
    background: white;
    margin-left: 10px;
}
</style>
