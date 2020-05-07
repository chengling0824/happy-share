<template>
	<div class="content">
		<el-menu mode="horizontal" 
            active-text-color="#01aee7" 
            active-background-color=""
			default-active="1">
            <el-menu-item index="1"><router-link to="/news/myRestore" class="nav-item">收到回复</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/news/myFavour" class="nav-item">收到点赞</router-link></el-menu-item>
            <!-- <el-menu-item index="3"><router-link to="/news/myNotify" class="nav-item">系统通知</router-link></el-menu-item> -->
        </el-menu>

		<div class="content-wrap">
			<router-view></router-view>
		</div>

		
	</div>
</template>

<style lang="css" src="../../assets/css/personalCenter/personalCenter.css" scoped ></style>
<script>
export default {
	mounted: function() {
		this.$router.push('/news/myRestore');
		this.initUser();
	}
}
</script>