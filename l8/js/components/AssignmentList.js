import assignment from './Assignment.js';

export default {

    template : `
    <section v-show="assignments.length" class='p-6'>
    <h2>{{title}}</h2>
    <ul>

    <assignment    
    
    v-for='assignment in assignments'
    :key='assignment.id'
    :assignment='assignment'
    
    > </assignment>
    </ul>
  </section>
    `,

    components : {'assignment' : assignment},
    props : {
        'assignments' : Array, 
        'title' : String
},

      methods: {},

}