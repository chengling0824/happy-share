<template>
<div class="content">
    <div class="one-line-draft">
        <p class="tit">
            <span>一键线稿</span>
        </p>
        <div class="line-img-box">
            <div class="left-block">
                <div class="img left-img">
                    <img src="https://i.udongman.cn/image/2019/0913/20190913061107194.jpg" alt="" id="changeImg">
                </div>
                <div class="btn upload-img">
                    上传图像
                    <input type="file" accept="image/png, image/jpeg, image/gif, image/jpg" value="" id="uploadImg">
                </div>
            </div>
            <div class="right-block">
                <div class="img right-img">
                    <!-- <img src="../images/ai-drawn/color.png" alt=""> -->
                    <div class="img-mark">
                        <div class="stay-tuned">正在绘制...</div>
                    </div>
                </div>
                <div class="btn download-img">
                    下载图像
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<style scoped>
.one-line-draft {
    width: 1200px;
    margin: 0 auto;
    background: #fff;
}
.one-line-draft .tit {
    padding: 24px 0 24px 30px;
    border-bottom: 1px solid #f0f0f0;
    font-size: 16px;
    color: #333333;
}
.one-line-draft .line-img-box {
    position: relative;
    padding-top: 48px;
    font-size: 0;
}
.one-line-draft .line-img-box .left-block {
    margin-right: 30px;
}
.one-line-draft .line-img-box div {
    width: 450px;
}
.one-line-draft .line-img-box > div {
    display: inline-block;
    text-align: center;
    vertical-align: top;
}
.one-line-draft .line-img-box .img {
    position: relative;
    display: inline-block;
    width: 450px;
    height: 600px;
    text-align: center;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
}
.one-line-draft .line-img-box .img img {
    width: 100%;
    height: 100%;
}
img {
    vertical-align: middle;
}
.one-line-draft .line-img-box .upload-img {
    /* background: #ebf8fc url(../images/ai-drawn/ic_upload.png) no-repeat; */
    background-position: 40px center;
} 
.one-line-draft .line-img-box div {
    width: 450px;
}
.btn {
    text-align: center;
    border: 0;
    cursor: pointer;
}
.one-line-draft .line-img-box .upload-img input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
    cursor: pointer;
}
.one-line-draft .line-img-box div {
    width: 450px;
}
.one-line-draft .line-img-box > div {
    display: inline-block;
    text-align: center;
    vertical-align: top;
}
.one-line-draft .line-img-box .img {
    position: relative;
    display: inline-block;
    width: 450px;
    min-height: 600px;
    text-align: center;
    box-shadow: 0 0 5px 0 rgba(0,0,0,0.2);
    border-radius: 5px;
}
.one-line-draft .line-img-box .img img {
    width: 100%;
}
.one-line-draft .line-img-box .img-mark {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(255,255,255,0.5);
    display: none;
}
.one-line-draft .line-img-box .stay-tuned {
    position: absolute;
    top: 50%;
    left: 50%;
    height: 50%;
    width: 160px;
    height: 50px;
    line-height: 50px;
    margin-left: -80px;
    margin-top: -25px;
    /* background: rgba(0,0,0,0.5) url(../images/ai-drawn/ic_pen.png) no-repeat; */
    background-position: 25px center;
    color: #fff;
    font-size: 16px;
    border-radius: 10px;
    padding-left: 30px;
    box-sizing: border-box;
}
.one-line-draft .line-img-box .right-img:after {
    position: absolute;
    content: '';
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
.one-line-draft .line-img-box .download-img {
    /* background: #ebf8fc url(../images/ai-drawn/ic_download.png) no-repeat; */
    background-position: 40px center;
}
.one-line-draft .line-img-box .btn {
    position: relative;
    display: inline-block;
    width: 162px;
    height: 32px;
    line-height: 32px;
    margin: 34px auto 42px;
    margin: 34px auto 42px;
    text-align: inherit;
    border: 1px solid #02b0e9;
    border-radius: 5px;
    color: #02b0e9;
    font-size: 14px;
    font-family: 'MicrosoftYaHeiUI';
    box-sizing: border-box;
}
.one-line-draft .line-img-box div {
    width: 450px;
}
.btn {
    text-align: center;
    border: 0;
    cursor: pointer;
}


</style>