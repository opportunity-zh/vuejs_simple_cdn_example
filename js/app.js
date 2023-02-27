
const { createApp } = Vue

createApp({
    data() {
        return {
           message: 'Hello Vue!',
           author: 'Opportunity',
           cars: ['Volvo', 'VW', 'Opel', 'Ferrari']
        }
    }, 
    methods: {        
        getAuthor() {
            return "template provided by " + this.author; 
        }    
    }
}).mount('#app')