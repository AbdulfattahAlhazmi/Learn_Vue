const {createApp, defineComponent} = Vue


const app = Vue.createApp({
    data(){
        return{
            hour: 0,
            minute: 0,
            second:0
        }
    },
    watch:{
        hour: function(v){
            this.minute = v *60
            console.log('Run Hours')
        },
        minute: function(v){
            this.hour = v /60
            this.second = v * 60
            console.log('Run Minutes')
        },
        second: function(v){
            this.minute = v /60
            console.log('Run Seconds')
        }
    },
}).mount('#app')

