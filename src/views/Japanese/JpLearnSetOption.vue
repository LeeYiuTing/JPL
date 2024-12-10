<template>
    <div class="JpLearnSetOption">
        <van-nav-bar
            title="假名闯关设置"
        />
        <div class="form-title">类型选择</div>
        <van-radio-group v-model="kanaType">
            <van-cell-group inset>
                <van-cell title="平假" clickable @click="kanaType = 1">
                    <template #right-icon>
                        <van-radio :name="1"/>
                    </template>
                </van-cell>
                <van-cell title="片假" clickable @click="kanaType = 2">
                    <template #right-icon>
                        <van-radio :name="2"/>
                    </template>
                </van-cell>
            </van-cell-group>
        </van-radio-group>

        <div class="form-title">题型</div>
        <van-radio-group v-model="quesType">
            <van-cell-group inset>
                <van-cell title="听音" clickable @click="quesType = 1">
                    <template #right-icon>
                        <van-radio :name="1"/>
                    </template>
                </van-cell>
                <van-cell title="听写" clickable @click="quesType = 2">
                    <template #right-icon>
                        <van-radio :name="2"/>
                    </template>
                </van-cell>
            </van-cell-group>
        </van-radio-group>


        <div class="form-title">行选择</div>
        <van-cell-group inset>
            <van-field v-for="index in [0,1,2,3,4,5,6,7,8,9,10]">
                <template #extra>
                    <div class="kana-list">
                        <van-row gutter="28" justify="space-between">
                            <van-col v-for="item in kanaList[index]">
                                <div class="show-kana">{{ kanaType === 1 ? item.Hiragana : item.Katakana }}</div>
                            </van-col>
                        </van-row>
                        <van-checkbox v-model="selectRow[index]"></van-checkbox>
                    </div>
                </template>
            </van-field>
        </van-cell-group>

        <van-button round type="success" size="large" @click="goLearn" class="lock-to-bottom">Go!</van-button>
    </div>
</template>

<script>
import {ref, onMounted} from 'vue';
import router from "../../router/router";
import kana from "/src/config/kana.json";
import {useRoute} from 'vue-router';
import common from "../../util/common";

export default {
    name: 'JpLearnSetOption',
    setup() {
        const kanaType = ref(1);
        const rowNum = ref(1);
        const quesType = ref(1);
        const obfuscation = ref(false);
        const kanaList = ref(kana);
        const selectRow = ref({});
        const route = useRoute();

        onMounted(() => {
            //读取query
            if (route.query.kanaType) {
                kanaType.value = Number(route.query.kanaType);
            }
            if (route.query.rowNum) {
                rowNum.value = Number(route.query.rowNum);
            }
            if (route.query.quesType) {
                quesType.value = Number(route.query.quesType);
            }
            if (route.query.rowIndex) {
                let rowIndexList = route.query.rowIndex.split(',');
                rowIndexList.forEach(index=>{
                    index = Number(index);
                    selectRow.value[index] = true;
                })
            }
        });

        /**
         * 选择行
         * @param index
         */
        const changeSelectRow = (index) =>{
            selectRow.value[index] =!selectRow.value[index];
        };

        //去学习
        const goLearn = () => {
            //判断是否有选择
            let rowIndexList = [];
            Object.keys(selectRow.value).forEach(key=>{
                if (selectRow.value[key]) {
                    rowIndexList.push(Number(key));
                }
            })

            //判断是否有选择
            if (rowIndexList.length === 0) {
                common.showTips('请选择行',)
                return;
            }

            //判断假名是否少于4个且是听音模式
            let count = 0;
            rowIndexList.forEach(index=>{
                kanaList.value[index].forEach(kana=>{
                    if (kana.Hiragana) {
                        count += 1;
                    }
                })
            })
            if (count < 4 && quesType.value === 1) {
                common.showTips('听音模式请选择大于4个假名',)
                return;
            }

            let rowIndex = rowIndexList.join(',');

            let path = "/JpLearnTY";
            if (quesType.value === 2) {
                path = "/JpLearnTX";
            }
            //将当前参数设置到query
            router.push({
                query: {
                    kanaType: kanaType.value,
                    quesType: quesType.value,
                    rowIndex: rowIndex,
                }
            });
            common.showTips('跳转中...','loading')
            setTimeout(()=>{
                router.push(
                    {
                        path: path,
                        query: {
                            kanaType: kanaType.value,
                            rowIndex: rowIndex,
                        }
                    }
                )
            },800)
            //跳转
        };
        return {
            //data
            kanaType,
            rowNum,
            obfuscation,
            kanaList,
            quesType,
            selectRow,
            //func
            goLearn,
            changeSelectRow,
        };
    },
};

</script>

<style scoped lang="less">
.JpLearnSetOption {
    margin-bottom: 70px;

    .stepper-right {
        /* 设置步进器为inline-block，以便与输入框在同一行显示 */
        display: inline-block;
        /* 移除默认的边距 */
        margin: 0;
        /* 根据需要调整垂直对齐 */
        vertical-align: middle;
    }

    .show-kana {
        font-size: 17px;
        width: 18px;
    }

    .kana-list{
        display: flex;
        width: 100%;
        justify-content: space-between;
    }
}
</style>