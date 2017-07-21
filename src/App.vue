<template>
  <div id="wrapper">
    <el-menu theme="dark" :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
      <el-menu-item index="1">
        <router-link to="/home" class="menu-item">首页</router-link>
      </el-menu-item>
      <el-menu-item index="3">
        <router-link to="/time-entries" class="menu-item">计划列表</router-link>
      </el-menu-item>
    </el-menu>
    <el-row :gutter="20">
      <el-col :span="6">
        <sidebar></sidebar>
      </el-col>
      <el-col :span="16">
        <router-view></router-view>
      </el-col>
    </el-row>
  </div>
</template>

<!-- <template>
  <div id="wrapper">
    <nav class="navbar navbar-default">
      <div class="container">
        <a href="#" class="navbar-brand">
          <i class="glyphicon glyphicon-time"></i>
          计划板
        </a>
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/home">首页</router-link>
          </li>
          <li>
            <router-link to="/time-entries">计划列表</router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="col-sm-3">
        <sidebar></sidebar>
      </div>
      <div class="col-sm-9">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template> -->

<script>
  import Sidebar from './components/Sidebar.vue'

  export default {
    components: {'sidebar': Sidebar},
    mounted: function(){
      this.$store.dispatch('getPlans')
      this.$store.dispatch('getTotalTime')
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
