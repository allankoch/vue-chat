Vue.component('chat-footer', {
  template:
    `<footer class="footer">
      <input type="text" id="footer-input-message">
      <button @click="addNessage">Add message</button>
      <select id="footer-input-person">
        <option v-for="person in this.$store.state.people" v-bind:value="person.key">
          {{ person.name }}
        </option>
      </select>
    </footer>`,
    methods: {
        addNessage() {
          var text = document.getElementById('footer-input-message').value;
          var inputPerson = document.getElementById('footer-input-person');
          var opt = inputPerson.options[inputPerson.selectedIndex];
          var newMessage = {
            name: opt.text,
             message: text
           };
          this.$store.dispatch('addMessage', newMessage);
        }
    }
});
