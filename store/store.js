const store = new Vuex.Store({
  state: {
    messages: [],
    people: []
  },
  getters: {
    messages: state => {
      return state.messages;
    },
    people: state => {
      return state.people;
    }
  },
  mutations: {
    addMessage: (state, payload) => {
      var newEntry = firebaseMessagesRef.push();
      newEntry.set({
        message: payload.newMessage.message,
        name: payload.newMessage.name
      });
    },
    addPerson: (state, payload) => {
      var newPerson = firebasePeopleRef.push();
      newPerson.set({
        name: payload.name
      });
    },
    removePerson: (state, payload) => {
      var person = firebaseDatabaseRef.ref('people/' + payload.key);
      person.remove();
    },
    setMessages: (state, payload) => {
      var list = Object.values(payload);
      var keys = Object.keys(payload);
      state.messages = [];
      for (var i = 0; i < list.length; i++) {
        var msg = list[i];
        state.messages.push({
          message: msg.message,
          name: msg.name,
          key: keys[i]
        });
      };
    },
    setPeople: (state, payload) => {
      var list = Object.values(payload);
      var keys = Object.keys(payload);
      state.people = [];
      for (var i = 0; i < list.length; i++) {
        var person = list[i];
        state.people.push({
          name: person.name,
          key: keys[i]
        });
      }
    }
  },
  actions: {
    addMessage (context, newMessage) {
      context.commit('addMessage', { newMessage });
    },
    addPerson (context, name) {
      context.commit('addPerson', { name });
    },
    removePerson (context, key) {
      context.commit('removePerson', { key });
    },
    getFirebaseMessages (context) {
      firebaseMessagesRef.on("value", function (snapshot) {
        context.commit('setMessages', snapshot.val());
      });
    },
    getFirebasePeople (context) {
      firebasePeopleRef.on("value", function (snapshot) {
        context.commit('setPeople', snapshot.val());
      })
    }
  }
})
