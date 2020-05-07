<template>
    <div class="card-item">
        <el-card class="box-card" v-for="o in 4" :key="o">
            <div class="clearfix">
                <!-- <span>卡片名称</span> -->
                <div class="user_avatar">
                    <img src="../../assets/images/default/psu.jpg" />
                </div>
                <a class="user_name">用户1</a><span style="font-size:10px">点赞了你的作品</span>
                <p class="post_time">
                    2010-11-12
                </p>
                <el-button style="float: right; padding: 3px 0" type="text" class="operate">删除</el-button>
            </div>
            <!-- <div v-for="o in 4" :key="o" class="text item">
                {{'列表内容 ' + o }}
            </div> -->
        </el-card>
    </div>

    

</template>

<style scoped>
.clearfix:before,
.clearfix:after {
    display: table;
    content: "";
}
.clearfix:after {
    clear: both 
}
.box-card {
    width: 100%;
    margin-top: 10px;
}

.clearfix{
    position: relative;
}
.user_avatar {
    float: left;
    width: 42px;
    height: 42px;
    margin-right: 16px;
    cursor: pointer;
}
.user_avatar img {
    width: 100%;
    height: auto;
    border-radius: 50%;
}
.user_name {
    font-size: 13px;
    color: #666;
    display: inline-block;
    margin:0 10px;
    vertical-align: bottom;
    font-weight: bold;
}
.post_time{
    color: #999;
    font-size: 13px;
}
.operate{
    position: absolute;
    right: 40px;
    top: 20px;
}

.to-details{
    display: inline-block;
    margin-left: 20px;
    font-size: 14px;
    cursor: pointer;
}
.to-details:hover{
    color: cornflowerblue;
}

</style>