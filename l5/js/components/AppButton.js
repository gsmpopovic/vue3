export default {

    template : `
    <div>
        <button class="p-5 bg-gray-200" disabled="processing" v-on:click="toggle">
        <slot />
        </button>
    </div>
    `,

    data(){
return {
processing : false,
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