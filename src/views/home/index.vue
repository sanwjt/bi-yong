<!--
 * @Author: your name
 * @Date: 2020-07-11 17:35:12
 * @LastEditTime: 2020-07-12 21:24:54
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bi-yong/src/views/index.vue
--> 
<template>
<div class="home_content">
  <!-- 顶部倒计时 -->
  <div class="header">
    <span class="text">距离活动开始还有</span>
    <div class="timeBox">
       <span class="time">10</span>
       <span>天</span>
       <span class="time">20</span>
       <span>时</span>
       <span class="time">2</span>
       <span>分</span>
       <span class="time">1</span>
       <span>秒</span>
    </div>
  </div>

  <!-- 报名按钮 -->
  <div class="buttonbox">
      <div class="button">
          报名
      </div>
  </div>

  <div class="content_inner">
    <!-- tab-list -->
    <ul class="tabBox">
      <li 
        v-for="(i, index) of tabList"
        :key="index"
      >
        {{i}}
      </li>
    </ul>

      <!-- 点击tab 显示对应内容 -->
    <div>
      <tabContent></tabContent>
    </div>

    <!-- 总冠名 -->
    <div>
      <div class="title">
        <div class="qiezuo"></div>
        <h3>总冠名</h3>
        <div class="qieyou"></div>
      </div>
      <div class="comanyLogo">
        <ul>
          <li>
            <img src="~@/assets/WechatIMG10.jpeg" alt="">
          </li>
        </ul>
      </div>
    </div>


    <!-- 协作方 -->
    <div>
      <div class="title">
        <div class="qiezuo"></div>
        <h3>协作方</h3>
        <div class="qieyou"></div>
      </div>
      <div class="comanyLogo">
        <ul>
          <li>
            <img src="~@/assets/WechatIMG10.jpeg" alt="">
          </li>
          <li>
            <img src="~@/assets/WechatIMG10.jpeg" alt="">
          </li>
          <li>
            <img src="~@/assets/WechatIMG10.jpeg" alt="">
          </li>
        </ul>
      </div>
    </div>

    <!-- 合作机构 -->
    <div>
      <div class="title">
        <div class="qiezuo"></div>
        <h3>合作机构</h3>
        <div class="qieyou"></div>
      </div>
      <div class="joinCompany">
        <ul>
          <li>
            <img src="~@/assets/he1.png" alt="">
          </li>
          <li>
            <img src="~@/assets/he1.png" alt="">
          </li>
          <li>
           <img src="~@/assets/he1.png" alt="">
          </li>
           <li>
            <img src="~@/assets/he1.png" alt="">
          </li>
          <li>
           <img src="~@/assets/he1.png" alt="">
          </li>
          <li>
           <img src="~@/assets/he1.png" alt="">
          </li>
        </ul>
      </div>
    </div>


  </div>
</div>

</template>

<script>

import tabContent from './components/tabContent'
export default {
  name: 'home',
  components:{
    tabContent,
  },
  props: {
    msg: String
  },
  data(){
    return{
      tabList:['交易所','钱包','工具','媒体','公链','DeFi','云算力','自媒体']
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less">
  .home_content{
      background: url('~@/assets/bg.png') no-repeat;
      background-size: 100%;
      background-color: #0C0D0D; 
      .header{
          height: 410px;
          overflow: hidden;
          text-align: center;
          position: relative;
          .text{
            position: absolute;
            color:#FBE5B5;
            font-size: 9px;
            bottom:75px;
            left: 50%;
            transform: translate(-50%,0);
          }
          .timeBox {
            color:#FBE5B5;
            position: absolute;
            display: inline-block;
            bottom:40px;
            left: 50%;
            transform: translate(-50%,0);
            display: flex;
            align-items: center;
            .time{
              display: inline-block;
              height: 22px;
              width:22px;
              background:rgba(250, 224, 172, .2);
              margin-left: 4px;
              margin-right: 4px;
              line-height: 22px;
            }
          }
      }

    .buttonbox{
      text-align: center;
    }
    .button{
      display: inline-block;
      margin-top:48px;
      width: 242px;
      height: 42px;
      background: url('~@/assets/anniu11.png') no-repeat center;
      text-align: center;
      line-height: 42px;
      font-size: 18px;
    } 
    .content_inner{
      padding-left: 20px;
      padding-right: 20px;
      margin-top: 40px;
    }
    .tabBox{
      color:#1A1612;
      font-size: 14px;
      margin-bottom: 24px;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      li{
        width: 70px;
        height: 31px;
        text-align: center;
        line-height: 31px;
        background:  url('~@/assets/fenlei.png') no-repeat center;

        box-sizing: border-box;
        margin-bottom: 16px;
      }
    }

        .title{
          color:rgba(197, 145, 90, 1);
          // padding-left: 41px;
          // padding-right: 41px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 56px;
          div{
            width:105px;
            height: 9px;
          }
          h3{
            font-size: 15px;
            color: rgba(197, 145, 90, 1);
            text-align: center;
          }
          .qiezuo{
              background: url('~@/assets/zuo2.png') no-repeat center;
              background-size: 100%;
            }
          .qieyou{
              background: url('~@/assets/you2.png') no-repeat center;
              background-size: 100%;
            }
      }

      .comanyLogo{
        margin-top: 20px;
        ul{
          display: flex;
          justify-content: space-around;
           flex-wrap: wrap;
        }
        li{
          width: 108px;
          height: 47px;
          img{
            width: 100%;
          }
        }
      }

      .joinCompany{
          margin-top: 20px;
        ul{
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
        }
        li{
          width: 63px;
          height: 28px;
          img{
            width: 100%;
          }
        }
      }
  }
</style>
