/*
* author LY
* data 2018-5-4
*/

// 服务于任何图片元素， 在img幕后，再将
// origin_src设置过去
var LazyLoadImage = (function() {
    // 变量的冒泡查找
    // const a = 1; 
    return {
        setSrc: function(ele) {
            const url =
                ele.getAttribute('origin_src')? 
                ele.getAttribute('origin_src'):'';
            if(!url) return;
            const oImg = document.createElement("img");
            // 不会影响页面,none会离开文档流
            // opacity: 0 这个会撑长页面
            oImg.style.display = 'none';

            document.body.appendChild(oImg);
            // 异步
            oImg.onload = function() {
                ele.src = url;
                // 不会立即执行
                // 后执行
                // console.log('图片下载完成');
                document.body.removeChild(this);   
                console.log(this);
            }
            // 先执行
            // console.log('设置src');
            oImg.src = url;
            //this 是oImg
            // console.log(this);
        }
    }
})();
// LazyLoadImage.setSrc();