Vue.component('chat-line', {
  props: ['name', 'message'],
  template:
    `<div class="line">
      <span class="name">{{ name }}:</span> {{ message }}
    </div>`
});
