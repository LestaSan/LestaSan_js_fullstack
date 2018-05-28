const TV = {
    open: function() {
        console.log('打开电视');
    },
    close: function() {
        console.log('关闭电视');
    }
}

const AirConditional = {
    // 统一的接口
    open: function() {
        console.log('打开电视');
    },
    close: function() {
        console.log('关闭电视');
    }
}

function setCommon(obj) {
    // obj.open();
    // obj.close();
}