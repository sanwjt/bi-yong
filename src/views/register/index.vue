<!--
 * @Author: your name
 * @Date: 2020-07-11 17:42:16
 * @LastEditTime: 2020-07-11 19:00:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bi-yong/src/views/register/index.vue
--> 
<template>
  <div class="content">
     <div class="header"> 
       <div class="qiezuo">
       </div>
       <section class="text">
         <p>企业报名需填写以下信息</p>
         <p>报名时间截止为  2020年7月26日</p>
         <p>（以下均为必填项）</p>
       </section>
      <div class="qieyou">
      </div>
     </div>
    
  </div>
</template>

<script>
export default {
  name: 'register',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.content{
  background: #0C0D0D;
  padding: 0 21px;
  padding-top: 35px;
}
.header{
  font-size:12px;
  font-family:PingFang SC;
  font-weight:400;
  color:rgba(251,229,181,1);
  display: flex;
  justify-content: space-between;
  .text{
   width: 176px;
   text-align: center;
  }

  div {
    height: 100%;
    width: 55px;
    height: 36px;
  }

  .qiezuo{
    background: url('~@/assets/qiyeyou.png') no-repeat center;
    background-size: 100%;
  }
  .qieyou{
      background: url('~@/assets/qiyezuo.png') no-repeat center;
    background-size: 100%;
  }
}

h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
