<template lang="html">
  <el-menu theme="dark" class="el-menu-demo" mode="horizontal">
    <el-menu-item index="1"><a href="/homework2/#/posts">All Posts</a></el-menu-item>
    <el-menu-item index="2"><a href="/homework2#/posts/new">New Posts</a></el-menu-item>
    <el-menu-item index="3"><el-button type="danger" @click.native="logOut">Log Out</el-button></el-menu-item>
  </el-menu>
  <!-- <div class="left-sidenav">
    <md-toolbar>
      <md-button class="md-icon-button" @click.native="toggleLeftSidenav">
        <md-icon>menu</md-icon>
      </md-button>
      <h2 class="md-title">Homework 2</h2>
    </md-toolbar>
    <md-sidenav class="md-left" ref="leftSidenav">
      <md-toolbar class="md-large">
        <div class="md-toolbar-container">
          <h3 class="md-title">Sidenav content</h3>
        </div>
        <md-list>
          <md-list-item>
            <router-link :to="{ name: 'Posts.index' }">
              <span>All post</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <router-link :to="{ name: 'Posts.new' }">
              <span>New post</span>
            </router-link>
          </md-list-item>

          <md-list-item>
            <md-button class="md-raised md-primary" @click.native="logOut">
              <span>Log out</span>
            </md-button>
          </md-list-item>
        </md-list>
      </md-toolbar>
    </md-sidenav>
  </div> -->
</template>
<script>
import usersAPI from '@/api/users.js'
export default {
  methods: {
    // toggleLeftSidenav () {
    //   this.$refs.leftSidenav.toggle()
    // },
    logOut () {
      usersAPI.logout(function () {
      })
    }
  }
}
</script>

<style lang="css">
</style>
