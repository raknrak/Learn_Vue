const app = Vue.createApp({
  data() {
    return {      
      counter: 0,
      name: ''
    };
  },
  methods: {
    setName(event, lastName){
      this.name = event.target.value + ' ' + lastName;

    },

    add(num) {
      // data property 참조
      // this.counter = this.counter + 1;
      this.counter = this.counter + num;

    },
    reduce(num){
      //this.counter = this.counter - 1;
      this.counter = this.counter - num;
      //this.counter --;
    }
  }
});

app.mount('#events');
