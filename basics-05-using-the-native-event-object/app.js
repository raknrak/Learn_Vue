const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: '',
      //fullname: ''
    };
  },
  watch: {
    /** name(value) { // name이 변경될 때마다 재실행
      console.log('Running again...1')
      //return
      if (value === '') {
        this.fullname = '';
      } else {
        //this.fullname = value + ' ' + 'raknrak';
        this.fullname = value + ' ' + this.lastName;
      }
    },
    lastName(value){
      console.log('Running again...2')
      if (value === '') {
        this.fullname = '';
      } else {
        this.fullname = this.name + ' ' + value;
      }
    }*/
  },
  // 의존성이 변경되는 경우메만 running agian.
  computed: {
    fullname(){
      console.log('Running again...')
      if(this.name ==='' || this.lastName ===''){
        return '';
      }
      // return this.name + ' ' + 'raknrak';
      return this.name + ' ' + this.lastName;
    }
  },
  methods: {
    outputFullname() {
      console.log('Running again...')
      if (this.name === '') {
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
    resetInput() {
      this.name = '';
    }
  }
});

app.mount('#events');
