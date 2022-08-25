export default {
    template : `
    
    <form v-on:submit.prevent="add" class="flex justify-around">

    <input v-model='form.name' type="text" class="bg-gray-200" placeholder="new assignment"/>
    <button type="submit" class="bg-green-600">Add</button>
    </form>

    `,

    data(){

        return {
            form : {
                name : ""
            }
        }
    },

    methods : {
        add(){

            this.$emit("add", this.form)

            this.form.name = '';
        }
    }

}