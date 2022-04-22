<template>
    <div>
        <p class="p"><span><</span>填写签约信息</p>
        <p class="a">签约信息</p>
        <p class="p1"><strong>签约机构</strong>&nbsp;&nbsp;&nbsp;&nbsp;洛西社区卫生服务站<a href="#">></a></p>
        <p class="p1"><strong>签约团队</strong>&nbsp;&nbsp;&nbsp;&nbsp;李明明团队<a href="#">></a></p>
        <p class="p1"><strong>签约医生</strong>&nbsp;&nbsp;&nbsp;&nbsp;李明明</p>
        <p class="p1"><strong>服务包</strong>&nbsp;&nbsp;&nbsp;&nbsp;老人服务包<a href="#">></a></p>
        <p class="p1"><strong>签约周期</strong>&nbsp;&nbsp;&nbsp;&nbsp;1年</p>
        <p class="p1"><strong>生效日期</strong>&nbsp;&nbsp;&nbsp;&nbsp;2020年09月01日<a href="#">></a></p>
        <p class="p1"><strong>费用</strong>&nbsp;&nbsp;&nbsp;&nbsp;<span>￥120</span><a href="#">></a></p>
        <div class="p3">
            <p>
                <strong>备注</strong>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </p>
        </div>
        <button>提交</button>
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
body,html{
    width: 100%;
    height: 100%;
    background-color: #f7fafd;
}
.p{
    width: 100%;
    height: 30px;
    line-height: 30px;
    text-align: center;
    span{
        float: left;
    }
}
.a{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color:#f7fafd ;
    padding: 20px;
}
.p1{
    width: 90%;
    height: 50px;
    line-height: 50px;
    border-bottom: solid 1px #ddd;
    color: #000;
    padding-left: 20px;
    span{
        color: red;
    }
    a{
        float: right;
    }
    strong{
        color: #ddd;
    }
}
.p3{
    margin-bottom: 70px;
}
button{
    width: 100%;
    height: 50px;
    background: #3fd4a9;
    border: 0;
    border-radius: 10px;
    color: #fff;
}
</style>
