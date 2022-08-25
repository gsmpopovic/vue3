import assignment from './Assignment.js';

import Tags from "./Tags.js";


export default {

    template : `

<div class="flex items-center justify-between">

<section v-show="assignments.length" class='w-80 bg-gray-700 border border-gray-600 rounded-lg text-white p-6 m-6'>
<div class="flex justify-between" >

<Tags :tags='tags' v-model='selectedTag'></Tags>

</div>

<h2>{{title}}</h2>
<ul>

<assignment    

v-for='assignment in assignmentsByTag'
:key='assignment.id'
:assignment='assignment'

> </assignment>
</ul>
<slot/>

</section>
</div>

    `,

    components : { Tags:Tags, 'assignment' : assignment},
    props : {
        'assignments' : Array, 
        'title' : String
},

data(){

  return {
    selectedTag : 'all'

  }
},

      methods: {

      },
        computed : {
          tags(){
            return ['all', ... new Set(this.assignments.map( elem => elem.tag))];
          },

          assignmentsByTag(){
            if(this.selectedTag == "all"){
              return this.assignments;
            } else {
              return this.assignments.filter(elem => elem.tag == this.selectedTag);
            }
          }
        }

}