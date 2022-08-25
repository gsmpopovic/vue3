import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
  template: `

    <AssignmentList :assignments='filters.inProgress' title='In Progress'></AssignmentList>

    <AssignmentList :assignments='filters.completed' title='Completed'></AssignmentList>
    
<AssignmentCreate @add="add"></AssignmentCreate>
    `,

  components: {AssignmentList: AssignmentList, AssignmentCreate : AssignmentCreate },

  data() {
    return {
      assignments: [],
      form : {
        name : null
      },

    };
  },
  methods: {
    add(form){

      let id = this.assignments.length + 1;
      let completed = false; 
      let name = form.name;

      this.assignments.push({
        name:name, 
        completed:completed,
        id:id
      });

    },

  },

  created(){

    fetch('http://localhost:3001')
    .then(response => response.json())
    .then(data => {

      console.log(data);
    });
  },

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.completed),
        completed: this.assignments.filter((a) => a.completed),
      };
    },


  },
};
