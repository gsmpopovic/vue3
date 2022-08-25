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
      assignments: [
        { name: "1", completed: false, id: 1, tag : 'a' },
        { name: "2", completed: false, id: 2, tag : 'a' },
        { name: "3", completed: false, id: 3, tag : 'b' },
      ],
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

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.completed),
        completed: this.assignments.filter((a) => a.completed),
      };
    },


  },
};
