Vue.component('chat-body', {
  template:
    `<article class="main">
      <span v-for="message in this.$store.getters.messages">
        <chat-line v-bind:name="message.name" v-bind:message="message.message"></chat-line>
      </span>
    </article>`
});
