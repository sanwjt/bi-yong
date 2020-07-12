<!--
 * @Author: your name
 * @Date: 2020-07-12 19:50:02
 * @LastEditTime: 2020-07-12 20:57:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /bi-yong/src/views/home/components/tabContent.vue
--> 
<template>
  <div class="tab_content">
     <!-- title -->
     <div class="title">
         <div class="qiezuo"></div>
         <h3>交易所</h3>
         <div class="qieyou"></div>
     </div>
     <!-- 投票 -->
     
     <div class="votebox">
       <ul>
          <li class="voteItem" v-for="(i,index) in voteArr" :key="index">
            <div class="voteContent">
              <p class="companyName">001交易所名称</p>
              <div class="headIcon">
                <img src="~@/assets/fenlei.png" alt="">
               </div>
              <p class="tickBox">
                <span class="tickCount">47</span>
                <span class="tickmenu">票</span>
              </p>
            </div>
            <div class="votebtn">投票</div>
          </li>
       </ul>
       <div class="btnbox">
         <div class="more">展开更多</div>
         <!-- <div class="lessbtn">收回</div> -->
       </div>
     </div>
  </div>
</template>

<script>
  export default {
    name: 'tabContent',
    components:{
      
    },
    props: {
      msg: String
    },
    data(){
      return{
        voteArr:[1,2,3,4,5]
      }
    }
  }
</script>


<style lang="less">
  .tab_content{
      .title{
          color:rgba(197, 145, 90, 1);
          // padding-left: 41px;
          // padding-right: 41px;
          display: flex;
          justify-content: space-between;
          align-items: center;
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
              background: url('~@/assets/zuo.png') no-repeat center;
              background-size: 100%;
            }
          .qieyou{
              background: url('~@/assets/you.png') no-repeat center;
              background-size: 100%;
            }
      }

      .votebox{
          ul{
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            margin-top: 22px;
          }
          .voteItem{
            width: 76px;
            height: 132px;
          
            background-size: 100%;
            margin-bottom: 17px;
            text-align: center;
           .voteContent{
             height: 93px;
             background: url('~@/assets/bg2.png') no-repeat center;
             background-size: 100%;
             margin-bottom: 14px;
             .companyName{
               font-size: 10px;
               display: inline-block;
               transform: scale(.7);
               width:81px;
               margin-top: 13px;
               color:#fff
             }
             .headIcon{
               height: 32px;
               width:32px;
               overflow: hidden;
               border-radius: 100%;
               background: #fff;
               display: inline-block;
               margin-top: 5px;
               margin-bottom: 5px;
               img{
                 width: 100%;
               }
             }
           }
           .votebtn{
             width: 60px;
             height: 22px;
             background: url('~@/assets/anniu4.png') no-repeat center;
             background-size: 100%;
             display: inline-block;
             line-height: 22px;
           }
          }

          .btnbox{
             text-align: center;
             color:rgba(197, 145, 90, 1);
             font-size: 10px;
             div{
               display: inline-block;
              //  width: 52px;
               padding-right: 12px;
             }
             .more{
               background: url('~@/assets/xia.png') no-repeat right;
               background-size: 8px;
             }
             .shang{
               background: url('~@/assets/shang.png') no-repeat right;
               background-size: 8px;
             }
          }
      }
  }
</style>