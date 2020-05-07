<template>
    <el-row>
    <el-col :span="4" v-for="(o, index) in 4" :key="o" :offset="index > 0 ? 2 : 0">
        <el-card :body-style="{ padding: '0px' }" class="el-card">
        <img src="https://i.udongman.cn/image/2019/0913/20190913061107194.jpg" class="image">
        <div style="padding: 14px;">
            <span>标题</span>
            <div class="bottom clearfix">
            <time class="time">{{ currentDate }}</time>
            <el-button type="text" class="button">操作按钮</el-button>
            </div>
        </div>
        </el-card>
    </el-col>
    </el-row>

    

</template>

<style lang="css" src="../../assets/css/personalCenter/card.css" scoped>

</style>