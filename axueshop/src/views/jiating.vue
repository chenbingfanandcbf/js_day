<template>
    <div>
        <h2><span>《-</span>选择家庭成员</h2>
        <p class="a">A</p>
        <div class="name">
            <div class="img">
                <img src="/img/111.jpg" alt="">
            </div>
            <div class="con">
            <p>
                王嫣然&nbsp;&nbsp;&nbsp;&nbsp;   26岁 &nbsp;&nbsp;&nbsp;&nbsp;  <img src="/img/333.jpg" alt="">
            </p>
            <p>
                <button class="btn1">低血糖</button>
                <button class="btn2">颈椎病</button>
            </p>
            </div>
        </div>
        <div class="name">
            <div class="img">
                <img src="/img/222.jpg" alt="">
            </div>
            <div class="con">
            <p>
                王嫣然 &nbsp;&nbsp;&nbsp;&nbsp;  26岁&nbsp;&nbsp;&nbsp;   <img src="/img/333.jpg" alt="">
            </p>
            <p>
                <button class="btn3">高血压</button>
            </p>
            </div>
        </div>
        <p class="a">B</p>
        <div class="name">
            <div class="img">
                <img src="/img/111.jpg" alt="">
            </div>
            <div class="con">
            <p>
                王嫣然&nbsp;&nbsp;&nbsp;&nbsp;   26岁 &nbsp;&nbsp;&nbsp;&nbsp;  <img src="/img/333.jpg" alt="">
            </p>
            <p>
                <button class="btn1">低血糖</button>
                <button class="btn2">颈椎病</button>
            </p>
            </div>
        </div>
        <div class="name">
            <div class="img">
                <img src="/img/222.jpg" alt="">
            </div>
            <div class="con">
            <p>
                王嫣然 &nbsp;&nbsp;&nbsp;&nbsp;  26岁&nbsp;&nbsp;&nbsp;   <img src="/img/333.jpg" alt="">
            </p>
            <p>
                <button class="btn3">高血压</button>
            </p>
            </div>
        </div>
        <p class="a">C</p>
        <div class="name">
            <div class="img">
                <img src="/img/111.jpg" alt="">
            </div>
            <div class="con">
            <p>
                王嫣然&nbsp;&nbsp;&nbsp;&nbsp;   26岁 &nbsp;&nbsp;&nbsp;&nbsp;  <img src="/img/333.jpg" alt="">
            </p>
            <p>
                <button class="btn1">低血糖</button>
                <button class="btn2">颈椎病</button>
            </p>
            </div>
        </div>
        <div class="name">
            <div class="img">
                <img src="/img/222.jpg" alt="">
            </div>
            <div class="con">
            <p>
                王嫣然 &nbsp;&nbsp;&nbsp;&nbsp;  26岁&nbsp;&nbsp;&nbsp;   <img src="/img/333.jpg" alt="">
            </p>
            <p>
                <button class="btn3">高血压</button>
            </p>
            </div>
        </div>
        <p class="a">D</p>
        <div class="name">
            <div class="img">
                <img src="/img/111.jpg" alt="">
            </div>
            <div class="con">
            <p>
                王嫣然&nbsp;&nbsp;&nbsp;&nbsp;   26岁 &nbsp;&nbsp;&nbsp;&nbsp;  <img src="/img/333.jpg" alt="">
            </p>
            <p>
                <button class="btn1">低血糖</button>
                <button class="btn2">颈椎病</button>
            </p>
            </div>
        </div>
        <div class="name">
            <div class="img">
                <img src="/img/222.jpg" alt="">
            </div>
            <div class="con">
            <p>
                王嫣然 &nbsp;&nbsp;&nbsp;&nbsp;  26岁&nbsp;&nbsp;&nbsp;   <img src="/img/333.jpg" alt="">
            </p>
            <p>
                <button class="btn3">高血压</button>
            </p>
            </div>
        </div>
        <p class="a">E</p>
        <div class="name">
            <div class="img">
                <img src="/img/111.jpg" alt="">
            </div>
            <div class="con">
            <p>
                王嫣然&nbsp;&nbsp;&nbsp;&nbsp;   26岁 &nbsp;&nbsp;&nbsp;&nbsp;  <img src="/img/333.jpg" alt="">
            </p>
            <p>
                <button class="btn1">低血糖</button>
                <button class="btn2">颈椎病</button>
            </p>
            </div>
        </div>
        <div class="name">
            <div class="img">
                <img src="/img/222.jpg" alt="">
            </div>
            <div class="con">
            <p>
                王嫣然 &nbsp;&nbsp;&nbsp;&nbsp;  26岁&nbsp;&nbsp;&nbsp;   <img src="/img/333.jpg" alt="">
            </p>
            <p>
                <button class="btn3">高血压</button>
            </p>
            </div>
        </div>
        <p class="a">F</p>
        <div class="name">
            <div class="img">
                <img src="/img/111.jpg" alt="">
            </div>
            <div class="con">
            <p>
                王嫣然&nbsp;&nbsp;&nbsp;&nbsp;   26岁 &nbsp;&nbsp;&nbsp;&nbsp;  <img src="/img/333.jpg" alt="">
            </p>
            <p>
                <button class="btn1">低血糖</button>
                <button class="btn2">颈椎病</button>
            </p>
            </div>
        </div>
        <div class="name">
            <div class="img">
                <img src="/img/222.jpg" alt="">
            </div>
            <div class="con">
            <p>
                王嫣然 &nbsp;&nbsp;&nbsp;&nbsp;  26岁&nbsp;&nbsp;&nbsp;   <img src="/img/333.jpg" alt="">
            </p>
            <p>
                <button class="btn3">高血压</button>
            </p>
            </div>
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

        var a = 4 >= 6 || true && 1 || false;
        console.log(a)
    },
    methods: {
    },
};
</script>

<style scoped lang="scss">
.a{
    width: 100%;
    height: 40px;
    line-height: 40px;
    background-color:#f7fafd ;
    padding: 20px;
}
h2{
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    span{
        float: left;
    }
}
.name{
    width:100%;
    height: 100px;
    display: flex;
    border-bottom: solid 1px #dddddd;
    .img{
        width: 20%;
        height: 85%;
        img{
            width: 100%;
            height: 100%;
            padding: 10px;
        }
    }
    .con{
        flex: 1;
        margin-left: 25px;
        button{
            width: 80px;
            height: 30px;
        }
        .btn1{
            background: #fff8e4;
            color: #fddb78;
            border: 0;
        }
        .btn2{
            background: #fff1f0;
            color: #fa7480;
            border: 0;
            margin-left: 10px;
        }
        .btn3{
            background: #f1f2fe;
            color: #6c76f4;
            border: 0;
            margin-left: 10px;
        }
    }
}
</style>