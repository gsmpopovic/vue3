import AssignmentList from "./AssignmentList.js";

export default {
  template: `
    <AssignmentList :assignments='filters.inProgress' title='In Progress'></AssignmentList>

    <AssignmentList :assignments='filters.completed' title='Completed'></AssignmentList>
    
    <form v-on:submit.prevent="add">

    <input v-model='form.name' type="text" class="bg-gray-200" placeholder="new assignment"/>
    <button type="submit" class="bg-gray-600">Add</button>
    </form>
    `,

  components: { AssignmentList: AssignmentList },

  data() {
    return {
      assignments: [
        { name: "1", completed: false, id: 1 },
        { name: "2", completed: false, id: 2 },
        { name: "3", completed: false, id: 3 },
      ],
      form : {
        name : null
      }
    };
  },
  methods: {
    add(){

      let id = this.assignments.length + 1;
      let completed = false; 
      let name = this.form.name;

      this.assignments.push({
        name:name, 
        completed:completed,
        id:id
      });

      this.form.name = '';

    }
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
