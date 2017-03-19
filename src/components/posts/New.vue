<template>
  <div class="new-post">
    <el-card class="box-card">
      <h1>New Post</h1>
      <el-card class="box-card">
        <div class="">
          <label>Name</label>
          <el-input v-model="post.name" placeholder=""></el-input>
        </div>
      </el-card>
      <el-card class="box-card">
        <div class="">
          <label>Content</label>
          <el-input v-model="post.content" placeholder=""></el-input>
        </div>
      </el-card>
      <el-card class="box-card">
        <span style="flex: 1"></span>
        <el-button class="md-raised md-primary" @click.native="createPost">Save</el-button>
        <span style="flex: 1"></span>
      </el-card>
    </el-card>
  </div>
</template>

<script>
import PostsApi from '../../api/posts.js'
import router from '../../router'

export default {
  name: 'new-post',
  data () {
    return {
      post: {
        name: '',
        content: ''
      }
    }
  },
  methods: {
    createPost () {
      PostsApi.createPost(this.post,
        function (_post) {
          router.push({ name: 'Posts.index' })
        }
      )
    }
  }
}
</script>

<style scoped>

</style>
