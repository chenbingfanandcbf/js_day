<template>
    <div>
        <h2 class="p"><span><</span>新建居民档案<a href="#">完成</a></h2>
        <p class="p0">家人信息</p>
        <p class="p1"><strong>选择家人</strong>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;请选择该居民家人信息<a href="#">></a></p>
        <p class="p1"><strong>与本人关系</strong>&nbsp;&nbsp;&nbsp;&nbsp;请选择家人与该居民关系<a href="#">></a></p>
        <p class="cla">+新增关联家人</p>
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
    font-weight: normal;
    span{
        float: left;
    }
    a{
        float: right;
        color: aquamarine;
        font-size: 15px;
    }
}
.p0{
    width: 100%;
    height: 60px;
    line-height: 50px;
    background: #ddd;
    color: #999;
}
.cla{
    width: 100%;
    height: 40px;
    text-align: center;
    color: #42d4ae;
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
</style>