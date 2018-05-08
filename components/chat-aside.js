Vue.component('chat-aside', {
  template:
    `<aside class="aside">
      <h3>Online People</h3>
      <ul>
        <li v-for="person in this.$store.getters.people">
          {{ person.name }}
        </li>
      </ul>
      <hr/>
      <h4>Add</h4>
      <input type="text" id="aside-input-name"/>
      <button id="aside-button-add" @click="addPerson">Add</button>
      <hr/>
      <h4>Remove</h4>
      <select id="aside-select-name">
        <option v-for="person in this.$store.getters.people" v-bind:value="person.key">{{ person.name }}</option>
      </select>
      <button id="aside-button-remove" @click="removePerson">Remove</button>
    </aside>`,
    methods: {
      addPerson() {
        var name = document.getElementById('aside-input-name').value;
        this.$store.dispatch('addPerson', name);
      },
      removePerson() {
        var key = document.getElementById('aside-select-name').value;
        this.$store.dispatch('removePerson', key);
      }
    }
});
