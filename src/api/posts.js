import Vue from 'vue'
import store from '../store'
export default {
  getPosts (callback, errCallback) {
    Vue.$http.get('/posts.json')
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      store.dispatch('logout')
    })
  },
  getPost (uid, callback, errCallback) {
    // Formatted string in JS is wrapped by ` not '
    Vue.$http.get(`/posts/${uid}.json`)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  },
  createPost (params, callback, errCallback) {
    var postParams = { post: params }
    Vue.$http.post('/posts.json', postParams)
    .then(function (response) {
      callback(response.data)
    })
    .catch(function (response) {
      errCallback(response)
    })
  }
}
