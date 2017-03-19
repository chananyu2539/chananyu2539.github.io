<template>
  <div class="new-post">
    <el-card class="box-card">
      <div class="">
        <el-form ref="form" :model="form" label-width="120px">
          <label>Add Comment</label>
          <el-input v-model="comment.content" placeholder=""></el-input>
        </el-form>
      </div>
    </el-card>
    <el-card class="box-card">
      <span style="flex: 1"></span>
      <el-button class="md-raised md-primary" @click.native="createComment">Save</el-button>
      <span style="flex: 1"></span>
    </el-card>
  </div>
</template>

<script>
import CommentsApi from '../../api/comments.js'
import router from '../../router'

export default {
  name: 'new-comment',
  data () {
    return {
      comment: {
        content: ''
      }
    }
  },
  props: {
    post: {
      type: Object,
      required: false,
      default: {}
    }
  },
  methods: {
    createComment () {
      var postId = this.post.id
      var content = this.comment.content
      this.comment.content = ''
      CommentsApi.createComment(postId, content,
        function (_comment) {
          console.log(_comment)
          router.push({ name: 'Posts.show', params: { post_id: postId }, query: { t: new Date() } })
        }
      )
    }
  }
}
</script>

<style scoped>
.md-list-item {
  padding-left: 40px;
}
</style>
