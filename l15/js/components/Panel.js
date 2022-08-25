export default {
    template : `
    

<section :class="{
    
    'w-80  rounded-lg p-6 m-6' : true,
    
    'text-white bg-gray-700 border border-gray-600' : theme == 'dark',
    'bg-gray-100 border border-gray-200' : theme == 'light',
    
}">
<div class="flex justify-between" >


</div>

<h2 v-if="$slots.heading">
<slot name ="heading" />
</h2>

<slot/>

</section>

    `,

    // can use slots or props for dynamic content in components

    props : {
        "heading" : String,
        "theme" : {
            "type" : String, 
            "default" : "dark"
        }
    }

    /* 
    
    <template v-slot:prop-name> 
    content goes here
    </template>
    
    */
}