<template>
  <div class="resume">
    <div class="title">
      <el-divider content-position="center">个人简介</el-divider>
      <p><el-tag>xxxx大学</el-tag><el-tag>本科</el-tag></p>
    </div>
    <el-card class="box-card" style="margin-bottom: 20px;">
      <div class="text item">
        <el-row :gutter="110">
          <el-col :span="8">
            <div class="grid-content bg-purple">
              于20014.07月毕业于<span class="large">武昌工学院</span>，专科学历。在校专业为机电一体化。</div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
                毕业后做过<span class="large">设备维修</span> , <span class="large">售后工程师</span><br>2018年年初听从朋友建议转行IT，就找了一份轻松的工作游戏客服。<span class="large">开始自学前端</span>。年底辞职在家专心自学，<span class="large">并于2019年5月找到第一份前端工作</span>。
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content bg-purple">
                工作中比较自律，对待工作认真负责，有很强的<span class="large">求知欲</span>，喜欢<span class="large">不断学习</span>来提升自己。希望有一天能成为尤雨溪大佬那样，写一个框架。
            </div>
          </el-col>
        </el-row>
      </div>
      <div class='topMask square'></div><div class='topMask circular'></div>
    </el-card>
  </div>
</template>
<script>
export default {
  name: 'resume'
}
</script>
<style>
  .resume .grid-content.line{
    border-right: 1px solid #ddd;
    height: 150px;
  }
  .resume .el-card__header{
    background: #545c64;
  }
  .resume .el-card__body{
    padding: 50px 20px;
  }
  .resume .el-timeline-item__wrapper{
    top: -8px;
  }
  .resume .title p .el-tag{
    margin: 0px 5px;
    cursor: pointer;
  }
</style>
<style scoped>
  .resume{
    margin-top: 150px;
    font-size: 14px;
    text-align: left;
    padding: 0px 100px;
  }
  .intro{
    width: 200px;
    border: 1px solid #ddd;
    border-radius: 5px;
  }
  .text {
    font-size: 14px;
    text-align: left;
    line-height: 30px;
    text-indent: 2em;
  }
  .box-card{
    position: relative;
  }
  .item {
    display: inline-block;
    margin: 30px 50px;
  }
  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }
  .clearfix span{
    color: #fff;
    font-weight: bold;
  }
  .title p{
    color: #8c8888;
    font-size: 15px;
    margin-bottom: 80px;
    text-align: center;
  }
  .grid-content .large{
    font-size: 16px;
    color: #409EFF;
    font-weight: bold;
  }
  .topMask{
    width: 100px;
    height: 100px;
    background-color: rgba(68,138,255,0.2);
    transform: rotate(45deg);
    position: absolute;
  }
  .square{
    border-radius: 5px;
    top: 0px;
  }
  .circular{
    border-radius: 50%;
    top:80px;
    left: 80%;
    background-color: rgba(255, 208, 75,0.2);
  }
</style>