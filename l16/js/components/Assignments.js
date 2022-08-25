import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";
import Panel from "./Panel.js";

export default {
  template: `

    <AssignmentList :assignments='filters.inProgress' title='In Progress'><AssignmentCreate @add="add"></AssignmentCreate>
    </AssignmentList>

    <AssignmentList :assignments='filters.completed' title='Completed'></AssignmentList>

    <Panel>
    <template v-slot:heading> 
    content goes here
    </template>
    </Panel>

        `,

  components: {Panel : Panel, AssignmentList: AssignmentList, AssignmentCreate : AssignmentCreate },

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

    fetch('http://localhost:3001/assignments')
    .then(response => response.json())
    .then(data => {

      this.assignments = data;
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
