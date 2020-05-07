<template>
<div class="content">	
	<div class="main-image">
		
		<el-carousel indicator-position="inside" height="420px" :interval="3000" arrow="always">
			<el-carousel-item v-for="(item,index) in carouselImg" :key="index">
				<img :src="item">
			</el-carousel-item>
		</el-carousel>
	</div>
		<div class="container-main-box">

		
		<!-- 推荐作品（作品页希望改成组合式卡片布局） -->
		<section class="works-recommend">
			<div class="types-title">
				<span>推荐作品</span>
				<router-link to="/worksIndex" class="more">查看更多 </router-link>>
			</div>
				<el-row :gutter="20" >
					<el-col :span="6">
						<img src="https://i.udongman.cn/image/2019/1127/20191127011523184.jpg">
						<img src="https://i.udongman.cn/image/2019/1126/20191126113105826.jpg">
						<!-- <img src="https://i.udongman.cn/image/2019/0928/20190928071634388.jpg" alt=""> -->
						<!-- <img src="https://i.udongman.cn/image/2019/0928/20190928074306275.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0901/20190901124100526.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0815/20190815031757389.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0730/20190730050959271.jpg" alt=""> -->

						<!-- <img src="http://i.udongman.cn/image/2019/0423/20190423125151712.jpg" alt=""> -->
						
						<!-- <img src="http://i.udongman.cn/image/2019/0305/20190305033354381.jpg" alt="">
						<img src="http://i.udongman.cn/image/2019/0128/20190128075441676.jpg" alt="">
						<img src="http://i.udongman.cn/image/2018/1224/20181224102334976.jpg" alt="">
						<img src="http://i.udongman.cn/image/2018/0728/20180728025421880.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0928/20190928071512670.jpg" alt=""> -->
					</el-col>
					<el-col :span="6">
						<img src="https://i.udongman.cn/image/2019/1119/20191119085558750.jpg">
						<img src="https://i.udongman.cn/image/2019/1114/20191114033255433.jpg">
						<img src="https://i.udongman.cn/image/2019/1127/20191127043235781.jpg">
						<!-- <img src="https://i.udongman.cn/image/2019/0928/20190928074343419.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0928/20190928061827177.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0831/20190831073318865.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0815/20190815031355895.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0724/20190724125917666.png" alt=""> -->
						<!-- <img src="http://i.udongman.cn/image/2019/0423/20190423125209772.jpg" alt=""> -->
						<!-- <img src="http://i.udongman.cn/image/2019/0303/20190303123111833.jpg" alt="">
						<img src="http://i.udongman.cn/image/2019/0119/20190119074714365.jpg" alt="">
						<img src="http://i.udongman.cn/image/2018/1221/20181221062954931.jpg" alt="">
						<img src="http://i.udongman.cn/image/2019/0613/20190613092215625.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/1003/20191003050846975.jpg" alt=""> -->
					</el-col>
					<el-col :span="6">
						<img src="https://i.udongman.cn/image/2019/1107/20191107085806225.jpg">
						<img src="https://i.udongman.cn/image/2019/1025/20191025120008332.jpg">
						<img src="https://i.udongman.cn/image/2019/1011/20191011012955495.jpg">
						<!-- <img src="https://i.udongman.cn/image/2019/0928/20190928074232457.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0914/20190914053204809.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0827/20190827095445803.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0802/20190802065134378.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0723/20190723111904112.png" alt=""> -->
						<!-- <img src="http://i.udongman.cn/image/2019/0323/20190323113559475.jpg" alt="">
						<img src="http://i.udongman.cn/image/2019/0109/20190109084712533.jpg" alt="">
						<img src="http://i.udongman.cn/image/2018/1213/20181213040451979.jpg" alt="">
						<img src="http://i.udongman.cn/image/2019/0625/20190625054604972.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/1007/20191007035147572.jpg" alt=""> -->
					</el-col>
					<el-col :span="6">
						<img src="https://i.udongman.cn/image/2019/1010/20191010071112930.png">
						<img src="https://i.udongman.cn/image/2019/1123/20191123060720141.jpg">
						<img src="https://i.udongman.cn/image/2019/1113/20191113035513447.jpg">
						<!-- <img src="https://i.udongman.cn/image/2019/0928/20190928074259210.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0915/20190915013648564.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0823/20190823035728989.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0731/20190731125329751.jpg" alt="">
						<img src="http://i.udongman.cn/image/2019/0708/20190708035118570.jpg" alt=""> -->
						<!-- <img src="http://i.udongman.cn/image/2019/0405/20190405124457550.jpg" alt="">
						<img src="http://i.udongman.cn/image/2019/0129/20190129102739637.jpg" alt="">
						<img src="http://i.udongman.cn/image/2019/0115/20190115075858338.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0911/20190911120022573.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/0907/20190907104354241.jpg" alt="">
						<img src="https://i.udongman.cn/image/2019/1127/20191127043235781.jpg" alt=""> -->
					</el-col>
					
				</el-row>
				<p><router-link to="worksIndex" class="bottom-more">到底啦！去看看其他作品吧！</router-link></p>
		</section>
	</div>
</div>	

</template>
<style lang="css" src="../../assets/css/index.css" ></style>

<script>
export default{
	data(){
		return{
			carouselImg:[
				require("../../assets/images/banner/1.jpg"),
				require("../../assets/images/banner/2.jpg"),
				require("../../assets/images/banner/3.jpg"),
				require("../../assets/images/banner/4.jpg"),
			]
		}
	}
}

</script>

