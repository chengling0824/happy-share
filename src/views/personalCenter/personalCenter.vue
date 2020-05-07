<template>
	<div class="content">
		<el-menu mode="horizontal" 
            active-text-color="#01aee7" 
            active-background-color=""
			default-active="1">
            <el-menu-item index="1"><router-link to="/personalCenter/collection" class="nav-item">我的收藏</router-link></el-menu-item>
            <el-menu-item index="2"><router-link to="/personalCenter/personalWorks" class="nav-item">我的发布</router-link></el-menu-item>
            <el-menu-item index="3"><router-link to="/personalCenter/favourite" class="nav-item">最近点赞</router-link></el-menu-item>
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
		this.$router.push('/personalCenter/collection');
		this.initUser();
	}
}
</script>