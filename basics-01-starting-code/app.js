const app = Vue.createApp ({
    // property name
    data() {
        // 항상 객체(object)를 반환함 - 배열x, 숫자 x, 문자열 x
        return {
            courseGoal: 'Finish the course and learn vue!',
            vueLink: 'https://vuejs.org/'
        };
        
    },
    // 메서드 및 함수로 만들어진 객체를 가짐
    methods: {
        outputGoal() {
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return 'Learn Vue!';
            } else {
                return 'Master Vue!'
            }
        }
    }
});

// html의 section과 연결하겠단 의미.
app.mount('#user-goal'); //mount에는 문자열이 필요. 