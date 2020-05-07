<template>
	<div class="content">	
		<!-- <p>双击画作可为大大点赞哦！</p> -->
		<!-- <p>（画作左下角放置画家头像及姓名，右下角放置查看大图按钮。鼠标覆上画作时显示）</p> -->
		<el-row :gutter="20" >
			<el-col :span="6">
				<!-- <img src="https://i.udongman.cn/image/2019/1128/20191128033811555.jpg" alt=""> -->
				<div><router-link to="workDetails">
					<img src="https://i.udongman.cn/image/2019/1126/20191126113105826.jpg">
				</router-link></div>
				
				<!-- <img src="https://i.udongman.cn/image/2019/1123/20191123024112467.jpg" alt=""> -->
				<img src="https://i.udongman.cn/image/2019/1119/20191119085558750.jpg">
				<img src="https://i.udongman.cn/image/2019/1031/20191031105626789.gif" alt="">
				<!-- <img src="https://i.udongman.cn/image/2019/0928/20190928071634388.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0928/20190928074306275.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0901/20190901124100526.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0815/20190815031757389.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0730/20190730050959271.jpg" alt="">
				<img src="http://i.udongman.cn/image/2019/0423/20190423125151712.jpg" alt="">
				<img src="http://i.udongman.cn/image/2019/0305/20190305033354381.jpg" alt="">
				<img src="http://i.udongman.cn/image/2019/0128/20190128075441676.jpg" alt="">
				<img src="http://i.udongman.cn/image/2018/1224/20181224102334976.jpg" alt="">
				<img src="http://i.udongman.cn/image/2018/0728/20180728025421880.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0928/20190928071512670.jpg" alt="">
				<img src="http://i.udongman.cn/image/2019/0115/20190115075858338.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0911/20190911120022573.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0907/20190907104354241.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1031/20191031123021450.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1028/20191028063947138.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1006/20191006045431906.png" alt="">
				<img src="https://i.udongman.cn/image/2019/0919/20190919050318633.jpg" alt=""> -->
			</el-col>
			<el-col :span="6">
				<img src="https://i.udongman.cn/image/2019/1024/20191024083554680.png" alt="">
				<img src="https://i.udongman.cn/image/2019/1127/20191127044330643.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1124/20191124052218862.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1122/20191122072156470.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1119/20191119053513961.jpg" alt="">
				<!-- <img src="https://i.udongman.cn/image/2019/1114/20191114033255433.jpg">
				<img src="https://i.udongman.cn/image/2019/0928/20190928074343419.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0928/20190928061827177.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0831/20190831073318865.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0815/20190815031355895.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0724/20190724125917666.png" alt="">
				<img src="http://i.udongman.cn/image/2019/0423/20190423125209772.jpg" alt="">
				<img src="http://i.udongman.cn/image/2019/0303/20190303123111833.jpg" alt="">
				<img src="http://i.udongman.cn/image/2019/0119/20190119074714365.jpg" alt="">
				<img src="http://i.udongman.cn/image/2018/1221/20181221062954931.jpg" alt="">
				<img src="http://i.udongman.cn/image/2019/0613/20190613092215625.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1003/20191003050846975.jpg" alt="">
				<img src="http://i.udongman.cn/image/2019/0405/20190405124457550.jpg" alt="">
				<img src="http://i.udongman.cn/image/2019/0129/20190129102739637.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0731/20190731125329751.jpg" alt="">
				<img src="http://i.udongman.cn/image/2019/0708/20190708035118570.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1031/20191031123228254.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1013/20191013111507243.png" alt="">
				<img src="https://i.udongman.cn/image/2019/1007/20191007044455419.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0918/20190918010845218.png" alt=""> -->
			</el-col>
			<el-col :span="6">
				<img src="https://i.udongman.cn/image/2019/1127/20191127011523184.jpg">
				<!-- <img src="https://i.udongman.cn/image/2019/1123/20191123060853245.jpg" alt=""> -->
				<!-- <img src="https://i.udongman.cn/image/2019/1122/20191122072055813.jpg" alt=""> -->
				<!-- <img src="https://i.udongman.cn/image/2019/1117/20191117040314143.jpg" alt=""> -->
				<img src="https://i.udongman.cn/image/2019/1031/20191031123734357.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1107/20191107085806225.jpg">
				<!-- <img src="https://i.udongman.cn/image/2019/1025/20191025120008332.jpg">
				<img src="https://i.udongman.cn/image/2019/1011/20191011012955495.jpg">
				<img src="https://i.udongman.cn/image/2019/0928/20190928074232457.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0914/20190914053204809.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0827/20190827095445803.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0802/20190802065134378.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0723/20190723111904112.png" alt="">
				<img src="http://i.udongman.cn/image/2019/0323/20190323113559475.jpg" alt="">
				<img src="http://i.udongman.cn/image/2019/0109/20190109084712533.jpg" alt="">
				<img src="http://i.udongman.cn/image/2018/1213/20181213040451979.jpg" alt="">
				<img src="http://i.udongman.cn/image/2019/0625/20190625054604972.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1007/20191007035147572.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1031/20191031123611464.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1011/20191011035332735.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1006/20191006122218624.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0918/20190918122330663.jpg" alt=""> -->
			</el-col>
			<el-col :span="6">
				<img src="https://i.udongman.cn/image/2019/1126/20191126112450785.jpg" alt="">
				<!-- <img src="https://i.udongman.cn/image/2019/1123/20191123060720141.jpg"> -->
				<img src="https://i.udongman.cn/image/2019/1127/20191127043235781.jpg" alt="">
				<!-- <img src="https://i.udongman.cn/image/2019/1031/20191031124111293.jpg" alt=""> -->
				<img src="https://i.udongman.cn/image/2019/1115/20191115072326922.png" alt="">
				<!-- <img src="https://i.udongman.cn/image/2019/1010/20191010071112930.png">
				<img src="https://i.udongman.cn/image/2019/1113/20191113035513447.jpg">
				<img src="https://i.udongman.cn/image/2019/0928/20190928074259210.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0915/20190915013648564.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0823/20190823035728989.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1031/20191031123430106.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1011/20191011025623803.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/1011/20191011110144701.png" alt="">
				<img src="https://i.udongman.cn/image/2019/0919/20190919054706709.jpg" alt="">
				<img src="https://i.udongman.cn/image/2019/0913/20190913061107194.jpg" alt=""> -->
			</el-col>
		</el-row>

	</div>
</template>
<style scoped>
	.content{
		/*width: 1400px;*/
		background-color: #fff;
	}
</style>