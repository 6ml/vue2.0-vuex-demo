<template>
  <div id="wrapper">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo nav" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to="/home" class="menu-item">首页</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/time-entries" class="menu-item">计划列表</router-link>
      </el-menu-item>
    </el-menu>
    <el-row :gutter="20" class="contentWrapper">
      <el-col :span="4" :offset="2">
        <sidebar></sidebar>
      </el-col>
      <el-col :span="15">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar.vue'

  export default {
    components: {'sidebar': Sidebar},
    mounted: function(){
      // this.$store.dispatch('getPlans')
      // this.$store.dispatch('getTotalTime')
    },
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        // console.log(key, keyPath);
      }
    }
  }
</script>

<style>
  .text-center {
    text-align: center;
  }

  .contentWrapper {
    width: 100%;
  }

  .nav {
    margin-bottom: 15px;
  }

  .menu-item{
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
  }

  .menu-item:hover, .menu-item:active, .menu-item:focus {
    text-decoration: none;
  }
</style>
