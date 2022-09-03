<template>

        <!-- <h3>我是Home页面</h3> -->
        <el-container style="height:100%">
            <el-aside width="auto">
                
                <common-aside></common-Aside>
            
            </el-aside>
            <el-container>
                <el-header>
                    <common-header></common-header>
                </el-header>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>

</template>
<script>
    import CommonAside from '../src/components/CommonAside.vue';
    import CommonHeader from '@/components/CommonHeader.vue';

    export default{
        name: 'Home',
        components: {
            CommonAside,
            CommonHeader
        },
        data(){
            return {}
        }
    }
</script>
<style lang="less" scoped>
.el-header{
    background-color: #333;
}
.el-main{
    padding-top: 0;
}
</style>