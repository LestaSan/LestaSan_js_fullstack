const strategies = {
    // isNonEmpty: function(value, errorMsg) {
    //     if (value.trim() === '') {
    //         return {
    //             status: false,
    //             msg: errorMsg
    //         }
    //     } else {
    //         return {
    //             status: true
    //         }
    //     }
    // },
    // minLength: function(value, len, errorMsg) {
    //     if (value.trim().length < len) {
    //         return {
    //             status: false,
    //             msg: errorMsg
    //         }
    //     } else {
    //         return {
    //             status: true
    //         }
    //     }
    // },
    // maxLength: function(value, len, errorMsg) {
    //     if (value.trim().length > len) {
    //         return {
    //             status: false,
    //             msg: errorMsg
    //         }
    //     } else {
    //         return {
    //             status: true
    //         }
    //     }
    // },
    // isMobilePhone: function(value, errorMsg) {
    //     if (!/^1[3456789][0-9]{9}$/.test(value)) {
    //         return {
    //             status: false,
    //             msg: errorMsg
    //         }
    //     } else {
    //         return {
    //             status: true
    //         }
    //     }
    // },
    // isEmail: function() {

    // }
    isNonEmpty: function(value, errorMsg) {
        if (value.trim() === '') {
            return errorMsg
        }
    },
    minLength: function(value, len, errorMsg) {
        if (value.trim().length < len) {
            return errorMsg
        } 
    },
    maxLength: function(value, len, errorMsg) {
        if (value.trim().length > len) {
            return errorMsg 
        } 
    },
    isMobilePhone: function(value, errorMsg) {
        if (!/^1[3456789][0-9]{9}$/.test(value)) {
            return errorMsg
        } 
    },
    isEmail: function() {

    }
}