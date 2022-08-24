import AssignmentList from "./AssignmentList.js";

export default {
  template: `
    <AssignmentList :assignments='filters.inProgress' title='In Progress'></AssignmentList>

    <AssignmentList :assignments='filters.completed' title='Completed'></AssignmentList>
    `,

  components: { AssignmentList: AssignmentList },

  data() {
    return {
      assignments: [
        { name: "1", completed: false, id: 1 },
        { name: "2", completed: false, id: 2 },
        { name: "3", completed: false, id: 3 },
      ],
    };
  },
  methods: {},

  computed: {
    filters() {
      return {
        inProgress: this.assignments.filter((a) => !a.completed),
        completed: this.assignments.filter((a) => a.completed),
      };
    },
  },
};
