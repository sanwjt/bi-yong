<!--
 * @Author: your name
 * @Date: 2020-07-11 17:42:16
 * @LastEditTime: 2020-07-11 23:03:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bi-yong/src/views/register/index.vue
--> 
<template>
  <div class="content">
    <!-- header -->
     <div class="header"> 
       <div class="qiezuo"></div>
       <section class="text">
         <p>企业报名需填写以下信息</p>
         <p>报名时间截止为  2020年7月26日</p>
         <p>（以下均为必填项）</p>
       </section>
       <div class="qieyou"></div>
       <img class="result" src="~@/assets/chenggong.png" alt="">
     </div>
     <!-- 表单 -->
     <form action=""  class="formBox">
       <!-- 类型 -->
       <div>  
          <select name="" id="" class="commonStyle">
            <option value='' disabled selected style='display:none;'>请选择APP类型</option>  
            <option value="name1">name1</option>
            <option value="name2">name2</option>
          </select>
          <p class="waring">APP类型选择错误</p>
       </div>
       <!-- 名称 -->
        <div>
          <input class="commonStyle" type="text" placeholder="请输入APP名称">
          <p class="waring">APP名称填写错误</p>
        </div>

      <!-- 上传 -->
        <div>
            <h3 class="logoItem">LOGO</h3>
            <span class="tips">只支持.jpg、png、jpeg 格式</span>

            <van-uploader
            v-model="fileList"
            multiple
            accept="image/png, image/jpeg,image/jpg"
            :max-count="1"
            upload-icon=null
            />
            <p class="waring" style="width:100px">LOGO上传错误</p>
        </div>
  
      <!-- 简介 -->
       <div>
        <van-field
          v-model="message"
          rows="4"
          autosize
          type="textarea"
          maxlength="500"
          placeholder="请输入APP简介..."
          show-word-limit
        />
         <p class="waring">APP简介上传内容需修改XXXXXXXXXXXXXXXXXXXXXX</p>
       </div>
      

        <h3 class="logoItem" style="margin-top:27px">联系方式</h3>
        <div> 
          <input class="commonStyle" type="text" placeholder="请输入手机号码" style="margin-top:15px">
           <p class="waring">手机号码上传错误</p>
        </div>
        <div>
           <input class="commonStyle" type="text" placeholder="请输入电子邮箱">
           <p class="waring">电子邮箱上传错误</p>
        </div>
     </form>

     <!-- 按钮 -->
     <div class="buttonbox">
        <div class="button">
            报名
        </div>
        <div class="button">
            修改信息
        </div>
        <div class="button">
            确认提交
        </div>
     </div>
     
     <div class="footer">如有任何问题，请添加微信：coinplay008</div>
  </div>
</template>

<script>
export default {
  name: 'register',
  props: {
    msg: String
  },
  data() {
    return {
      fileList: [],
      message:''
    };
  },
  methods:{
      // message(e){
      //   console.log(e)
      // }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
.waring{
  color:red;
  text-align: right;
  font-size: 9px;
  margin-top: 2px;
}
.content{
  background: #0C0D0D;
  padding: 0 21px;
  padding-top: 35px;
  padding-bottom: 21px;
}
.header{
  position: relative;
  font-size:12px;
  font-family:PingFang SC;
  font-weight:400;
  color:rgba(251,229,181,1);
  display: flex;
  justify-content: space-between;
  .text{
   width: 176px;
   text-align: center;
   p{
     margin-bottom: 2px;
   }
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

.formBox{
  .commonStyle {
    font-size:12px;
    width: 100%;
    height: 36px;
    padding:10px;
    background: #0C0D0D;
    color:rgba(251,229,181,.5);
    font-family:PingFang SC;
    margin-top: 27px;
    border:0.5px solid rgba(204,204,204,.5);
    box-sizing:border-box;
    // -webkit-box-shadow: 0 1px 1px -1px rgba(0, 0, 0, 0.5);
  }
  .logoItem{
    font-size: 14px;
    color:rgba(251,229,181,1);
    margin-top: 27px;
  }
  .tips{
    font-size:10px;
    font-family:PingFang SC;
    font-weight:400;
    color:rgba(102,102,102,1);
    margin-top: 7px;
    margin-bottom: 15px;
    display: block;
  }
  .van-uploader__preview-delete{
    color: #fbe5b5;

  }
  .van-uploader__preview-image{
    background: #1A1F26;
    border-radius:unset;
    padding:12px;
  }
  
  .van-field{
    background: #0C0D0D;
    border:0.5px solid rgba(204,204,204,.5);
    font-size: 12px;
    margin-top: 27px;
  
  }
  .van-field__control{
    color:rgba(251,229,181,.5);
  }
  .van-cell::after{
    border:none
  }

  .van-uploader__upload{
    border-radius: unset;
    height:100px;
    width: 100px;
    background:url('~@/assets/shangchuan.png') no-repeat center;
   border:0.5px dashed rgba(204,204,204,.5);
  }
  textarea::-webkit-input-placeholder {
    color: #999999;
   }
  input::-webkit-input-placeholder {
  color: #999999;
  }
}
.buttonbox{
  text-align: center;
}
.button{
  display: inline-block;
  margin-top:48px;
  width: 247px;
  height: 46px;
  background: url('~@/assets/anniu11.png') no-repeat center;
  text-align: center;
  line-height: 46px;
  font-size: 18px;
} 
.footer{
  color:#666666;
  font-size: 10px;
  text-align: center;
  margin-top: 15px;
}

.result{
  position: absolute;
  top: -5px;
  right: 0;
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
