export default {

    template : `
    <div>
        <button 
        
        v-bind:class="{
            'p-5 border rounded' : true, 
            'bg-green-200' : type == 'primary',
            'bg-blue-200' : type == 'secondary',
            'bg-gray-200' : type == 'muted',
        }" 
        
        :disabled="processing" 
        
        v-on:click="toggle">
        
        <slot />
        
        </button>
    
    </div>
    `,

    props : {

        type : {
            type: String, 
            default: 'primary'
        },

        processing: {
            type : Boolean, 
            default : false
        }
    },

    methods : {
        toggle(){
            this.processing = !this.processing;
        }
    },
    mounted(){

        alert('hello world');

    }
}