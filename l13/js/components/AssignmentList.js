import assignment from './Assignment.js';

import Tags from "./Tags.js";


export default {

    template : `
    <Tags :tags='tags' v-model='selectedTag'></Tags>

    <section v-show="assignments.length" class='p-6'>
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