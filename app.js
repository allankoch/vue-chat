Vue.config.devtools = true;

new Vue({
  store: store,
  el: '#app',
  created: function() {
    this.$store.dispatch('getFirebasePeople');
    this.$store.dispatch('getFirebaseMessages');
  }
});
