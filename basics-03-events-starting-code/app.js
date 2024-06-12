const app = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  methods: {
    add() {
      // data property 참조
      this.counter = this.counter + 1;

    },
    reduce(){
      this.counter = this.counter - 1;
    }
  }
});

app.mount('#events');
