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
                this.boxAselected = true;                
            } else if (box === 'B') {
                this.boxBselected = true;
            } else if( box === 'C') {
                this.boxCselected = true;
            }
        }
    },
});

app.mount('#styling');