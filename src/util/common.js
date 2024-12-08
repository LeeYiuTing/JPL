import {showConfirmDialog, showFailToast, showLoadingToast, showNotify, showSuccessToast, showToast} from 'vant';

let module = {};

/**
 * 展示提示方法
 * @param msg 文字
 * @param type 类型
 * @param icon 图标
 */
module.showTips = (msg, type, icon) => {
    if (!type && !icon) {
        //仅文字
        showToast(msg);
    } else if (msg && icon) {
        //文字和图标
        showToast({
            message: msg,
            icon: icon,
        });
    } else if (msg && type) {
        //文字和类型
        if (type === 'success') {
            showSuccessToast(msg);
        } else if (type === 'fail') {
            showFailToast(msg);
        } else if (type === "loading") {
            showLoadingToast({
                message: msg ? msg: '加载中...',
                forbidClick: true,
                duration: 500,
            });
        }
    }
}

/**
 * 显示通知
 * @param msg
 * @param level
 */
module.showNotify = (msg,level) => {
    showNotify({
        message: msg,
        type: level,
        duration: 1000
    });
}

/**
 * 打乱数组
 * @param array
 * @returns {*}
 */
module.shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        // 生成一个随机索引
        let j = Math.floor(Math.random() * (i + 1));

        // 交换当前元素与随机选中的元素
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

export default module;
