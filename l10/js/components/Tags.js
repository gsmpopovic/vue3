export default {
    
    template : `
    
    <button @click="selectTag(tag)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" v-for='tag in tags'>{{tag}}</button>
    `,

    props : {
        tags : Array
    },

    data(){
        return {
            selectedTag : ''
        }
    },

    methods : {

        selectTag(tag){
this.selectedTag = tag; 
this.$emit("selectTag", this.selectedTag);
        }

    }

}