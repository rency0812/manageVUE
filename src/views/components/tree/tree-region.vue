<style>

</style>
<template>
    <Tree :data="treeData" v-model="treeData" ref="Tree" :show-checkbox="treeCheck"
          @on-select-change="handleSelectTree"></Tree>
</template>
<script>/* eslint-disable quotes,no-console,semi,linebreak-style,no-var,indent,linebreak-style,camelcase */
import Util from '../../../libs/util'

const GetTreeRegionUrl = require('../../../libs/api').GetTreeRegionUrl
export default {
    data() {
        return {
            treeCheck: false,
            treeData: [],
            treeParams: []
        }
    },
    methods: {
        handleSelectTree() {
            let self = this
            let selectData = this.$refs.Tree.getSelectedNodes()
            let newArr = new Array()
            for (var i in selectData) {
                newArr.push(selectData[i].name)
                if(selectData[i].name ==='wuhan'){
                    self.treeParams = ['wuhan']
                    console.log(JSON.stringify(self.treeParams))
                    return
                }

                if (selectData[i].children && selectData[i].children.length > 0) {
                    for (var j in selectData[i].children) {
                        newArr.push(selectData[i].children[j].name)
                        if (selectData[i].children[j].children && selectData[i].children[j].children.length > 0) {
                            for (var k in selectData[i].children[j]) {
                                newArr.push(selectData[i].children[j].children[k].name)
                            }
                        }
                    }
                }
                self.treeParams = newArr
            }
            self.treeParams = self.uniqueArray(self.treeParams)
            this.$emit('refreshtable', self.treeParams)
        },
        uniqueArray(array) {
            var newArr = [array[0]]
            for (var i = 1; i < array.length; i++) {
                var Item = array[i]
                var repeat = false
                for (var j = 0; j < newArr.length; j++) {
                    if (Item == newArr[j]) {
                        repeat = true
                        break
                    }
                }
                if (!repeat) {
                    newArr.push(Item)
                }
            }
            return newArr
        }
    },
    mounted() {
        let self = this
        if (localStorage.$tree_region) {
            self.treeData = JSON.parse(localStorage.$tree_region)
        } else {
            Util.ajax.post(GetTreeRegionUrl, {Account: 'ximoo'}).then(function (response) {
                console.log(response.data.ReturnValue.treeData)
                self.treeData = response.data.ReturnValue.treeData
                localStorage.$tree_region = JSON.stringify(response.data.ReturnValue.treeData)
            }).catch(function (error) {
                console.log(error)
            })
        }
    },
    computed: {}
}




</script>