<template>
    <div class="headerComponent">
        <!-- <a href="#" class="logo"></a> -->
        <el-menu  class="navbar"
            mode="horizontal" 
            active-text-color="#01aee7" 
            active-background-color="">
            <el-menu-item index="1"><router-link to="/index" class="nav-item">首页</router-link></el-menu-item>
            <el-menu-item index="2">
                <router-link to="/worksIndex" class="nav-item">作品</router-link>
            </el-menu-item>
            
            <el-menu-item index="3"><router-link to="/personalCenter" class="nav-item">我的</router-link></el-menu-item>
            <el-menu-item index="4"><router-link to="/lineExtraction" class="nav-item">一键线稿</router-link></el-menu-item>
        </el-menu>
        
        <div class="search_bar">
            <div>
                <input type="text" class="input" id="q" name="q" maxlength="20">
                <input type="submit" class="btn search_btn" value>
            </div>
        </div>

        <el-menu class="navbar" mode="horizontal" text-color="#666" active-text-color="#01aee7">
            <el-menu-item>
                <el-popover
                    trigger="hover" width="150px">
                <div class="user-notice-pop-header">
                    <a href="" class="nickname">olina_c</a>
                    <i class="el-icon-setting"></i>
                </div>
                 <ul>
                    <li>
                        <!-- <img src="https://www.udongman.cn/statics/images/content-detail/pic_zuopin.png" alt> -->
                        <p >发布管理</p>
                    </li>
                </ul>
                <div class="login-status" slot="reference">
                    <img src="https://sso3.udongman.cn/uploadfile/avatar/17/3/162311/45x45.jpg?ver=1574835601" alt="">
                </div>
                </el-popover>
            </el-menu-item>
            <!-- <el-menu-item index="5">
                <router-link to="/news">
                <el-popover
                    trigger="hover" width="150px">
                    <p>回复我的</p>
                    <p>收到的赞</p>
                    <span slot="reference">消息</span>
                </el-popover>
                </router-link>
            </el-menu-item> -->
            <el-menu-item>
                    <el-button><router-link to="/postWork">发布作品</router-link></el-button>
            </el-menu-item>
        </el-menu>

    </div>
</template>
<script>

</script>
<style scoped>
a{
    text-decoration: none;
    color: #666;
}
a:hover {
    text-decoration: none;
    color: #01aee7
}
li{
    list-style: none;
}
.el-menu-item:focus,.el-menu-item:hover {
    outline: none;
    color: #409EFF;
    background-color: #ecf5ff
}
.headerComponent{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    min-width: 1100px;
    height: 60px;
    background: #fff;
    z-index: 1000;
    box-shadow: 0 0 0 0 rgba(0,0,0,0.1), 0 0 0 0 rgba(0,0,0,0.1), 0 0 10px 0 rgba(0,0,0,0.1), 0 0 0 0 rgba(0,0,0,0.1);
    /*text-align: left;*/
}
.headerComponent .logo {
    display: inline-block;
    width: 93px;
    height: 28px;
    margin-top: 16px;
    margin-right: 40px;
    background: url(../assets/images/global/udm-logo.png) no-repeat;
}
.headerComponent .navbar{
    display: inline-block;
    vertical-align: top;
}
.nav-item{
    display: inline-block;
    width: 100%;
    height: 100%;
}
.more-nav{
    padding: 0;
    width: 60px;
}
.more-drop{
    width: 100%;
    height: 100%;
}
.headerComponent .search_bar{
    position: relative;
    display: inline-block;
    width: 260px;
    height: 36px;
    background: #f0f0f0;
    margin: 10px 20px;
    border-radius: 4px;
    border-color: #e5e5e5;
    border: 1px solid #D7D7D5;
    zoom: 1;
    vertical-align: top;
}
.sim_select{
    position: absolute;
    left: 10px;
    top: 8px;
    padding-right: 10px;
    border-right: 1px solid #d7d7d5;
}
.headerComponent .search_bar .input{
    float: left;
    height: 32px;
    width: 200px;
    padding-right: 14px;
    margin-left: 14px;
    margin-top: 3px;
    padding: 0 10px;
    border: none;
    background: transparent;
    line-height: 32px;
}
.headerComponent .search_bar .search_btn{
    width: 18px;
    height: 18px;
    margin-top: 10px;
    border: none;
    background: url(../assets/images/global/ic_search_n.png) no-repeat;
    cursor: pointer;
}

.el-icon-setting{
    display: inline-block;
    margin-left: 80px;
}
.upload-entry .el-button{
    line-height: 35px;
    padding: 0 20px;
    background: #02b0e9;
    border-radius: 5px;
    border: 0;
    color: #fff;
    font-size: 14px;
    font-family: 'MicrosoftYaHeiUI';
    cursor: pointer;
}
.upload-entry-ul{
    justify-content: space-around;
    height: 60px;
    padding: 10px;
    border-radius: 10px;
    background: #fff;
    border-radius: 6px;
}
.upload-entry-ul li{
    display: inline-block;
    width: 76px;
    text-align: center;
    cursor: pointer;
}

.el-button:hover{
    background: #02b0e9;
    color: #fff;
}
</style>