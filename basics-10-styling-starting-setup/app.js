const app = Vue.createApp({

    data (){
        return {
            boxAselected: false,
            boxBselected: false,
            boxCselected: false
        };

    },

    // computed(){

    // }, 

    methods: {
        boxSelected(box){
            if(box ==='A'){
                // this.boxAselected = true;                
                this.boxAselected = !this.boxAselected;// 토글로 수정
            } else if (box === 'B') {
                //this.boxBselected = true;
                this.boxBselected = !this.boxBselected;
            } else if( box === 'C') {
                //this.boxCselected = true;
                this.boxCselected = !this.boxCselected;
            }
        }
    },
});

app.mount('#styling');