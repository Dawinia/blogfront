<template>
    <el-container>
        <el-header>
            <el-menu :default-active="this.$route.path" class="el-menu-demo" router mode="horizontal" @select="handleSelect">
                <el-menu-item :index="child.name" v-for="(child,indexj) in navList" :key="indexj">
                    {{child.navItem}}
                </el-menu-item>
            </el-menu>
        </el-header>
        <el-main>
            <router-view class="homeRouterView"/>
        </el-main>
    </el-container>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                activeIndex: 2,
                navList: [
                    {name: '/user', navItem: '发现项目'},
                    {name: '/article', navItem: '社区动态'},
                    {name: '/user', navItem: '发布项目'},
                    {name: '/user', navItem: '个人中心'},
                    {name: '/user', navItem: '管理员中心'},
                ]
            }
        },
        methods: {
            handleSelect(tab, event) {
                console.log(tab, event);
            }
        }
    }

</script>

<style scoped>
    .el-menu-vertical-demo {
        width: 200px;
    }
</style>