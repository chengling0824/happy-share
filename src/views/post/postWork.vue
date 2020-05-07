

<template>
	<div class="content">
        <div class="uploadTitle">
            <h1>发布作品</h1>
            <span>温馨提示：标识“</span> 
            <a class="required">●</a>
            <span>”为必填项，请填写完整后再发布哦~</span>
        </div>

        <div class="multi-image" id="mulImage_box">
            <div class="title-box">
                <a class="required">●</a>
                <span>上传图片</span>
            </div>
            <div class="upIntroBox" id="uploader">
                <div id="filePicker" class="filePicker">上传图片</div>
                <p class="info0">支持jpg/png格式，单张图片不超过10M，最多20张图片</p>
                <div class="imgBox filePicker">
                    <div class="queueList" >
                        <div class="upBox">
                            <!-- <input type="file" name="file" class="webuploader-element-invisible" id="residence_photo" multiple="multiple" accept="image/*"> -->
                            <div class="upBtn" id="upBtn"></div>
                            <p class="info1">点击上传图像</p>
                            <p class="info2">支持jpg/png格式<br>不超过10M</p>
                        </div>
                    </div>
                    <div class="statusBar" >
                        <div class="progress">
                            <span class="text">0%</span>
                            <span class="percentage"></span>
                        </div>    
                        <div class="info"></div>
                    </div>
                </div>
            </div>
        </div>
        <div class="upload-cover" id="upCover_box">
            <div class="title-box">
                <a class="required">●</a>
                <span>作品封面</span>
                <span class="info">当前裁剪尺寸：1200*1200，建议尺寸：800*800或以上</span>
            </div>
            <div class="coverRow">
                <div class="cover-prior">
                    <div class="img-container cropper-bg">
                        <div class="upCoverBtn-prior">
                            <div class="upCoverBtn-1"></div>
                            <input type="file" accept="image/*" class="upCoverBtn-2" value>
                            <p>点击上传封面</p>
                        </div>
                        <img class="cropper" src="" id="cropperImg" alt="Picture" >
                    </div>
                    <a class="re-upload">重新上传</a>
                </div>
                <div class="cover-after">
                    <div class="img-preview preview-lg" ></div>
                    <div class="cover-title"></div>
                    <div class="cover-avatar"></div>
                    <div class="cover-username"></div>
                    <div class="cover-pageviews"></div>
                    <span class="preview-tag">封面预览</span>
                </div>
            </div>  
        </div>
        <div class="upload-info">
            <div class="title-box">
                <a class="required">●</a>
                <span>作品信息</span>
            </div>
            <div class="upload-title">
                <label for="upload_title">作品标题：</label>
                <input type="text" id="upload_title" class="uploadTitle-input" placeholder="请输入素材标题" >
                <span class="txtInput-info">30/30</span>
            </div>
            <div class="upload-type">
                <label for="upload_type">作品类型：</label>
                <select name="" id="upload_type" class="uploadType-chose">
                    <option disabled selected style="color: #cccccc" value="0">请选择作品类型</option>
                    <option value="">原创</option>
                    <option>二改</option>
                    <option>转载</option>
                </select>
            </div>
            <!-- <div class="upload-tag">
                <label for="input_tags">作品标签：</label>
                <div class="tagInput-box" id="tags">
                    <input class="input_content" placeholder="按下回车创建标签" />
                    <input type="text" class="input_tags" id="input_tags" name="" value="故事漫画" />
                </div>
                <span class="txtInput-info"></span>
                <ul class="tag-provide" id="tag_provide">
                    <li>测试</li>
                    <li>故事漫画</li>
                    <li>故事</li>
                    <li>漫画</li>
                    <li>特殊效果</li>
                    <li>笔刷</li>
                </ul>
            </div> -->
            <div class="upload-brief">
                <label for="">作品简介：</label>
                <textarea name="" id="describe_inp" class="describe-inp" placeholder="请输入作品介绍，临摹作品请注明作品来源"></textarea>
                <span class="txtInput-info">280/280</span>
            </div>
        </div>
        <span id='sub_Btn' class='uploadButton'>提交发布</span>
        <div id="__nc" class="sliding">
            <div id="nc" style="display: none;"></div>
        </div>
	</div>
</template>

<style lang="css" src="../../assets/css/webuploader.css" scoped></style>  
<style lang="css" src="../../assets/css/upload.css" scoped></style>  
