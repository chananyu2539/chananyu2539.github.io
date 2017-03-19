<template>
  <div class="comment">
    <el-card class="box-card">
      <span>User: {{ comment.user.email }}</span>
      <br>
      <span>Comment: {{ comment.content }}</span>
    </el-card>
  </div>
</template>

<script>

export default {
  name: 'comment',
  props: {
    comment: {
      type: Object,
      required: false,
      default: {}
    }
  }
}
</script>

<style scoped>
  .md-list-item {
    padding-left: 40px;
  }
</style>
