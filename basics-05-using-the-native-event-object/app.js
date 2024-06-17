const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: ''
    };
  },
  // 의존성이 변경되는 경우메만 running agian.
  computed:{
    fullname(){
      console.log('Running again...')
      if(this.name ===''){
        return '';
      }
      return this.name + ' ' + 'raknrak';
    }
  },
  methods: {
    outputFullname(){
      console.log('Running again...')
      if(this.name ===''){
        return '';
      }
      return this.name + ' ' + 'raknrak';
    },
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
      // this.counter--;
    },
    resetInput(){
      this.name='';
    }
  }
});

app.mount('#events');
