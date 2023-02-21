
const { createApp } = Vue

createApp({
    data() {
        return {
           message: 'Hello Vue!',
           author: 'Opportunity'
        }
    }, 
    methods: {        
        getAuthor() {
            return "template provided by " + this.author; 
        }    
    }
}).mount('#app')