import { reactive } from "vue";

export const todoData = reactive({
  tasks: [
    { id: 0, category: "502722136", name: "Marcell" },
    { id: 1, category: "502722108", name: "Gaby" },
    { id: 2, category: "502722135", name: "Jojo" },
  ],
  categories: [
    { category: "5027221" },
    { category: "5027221" },
    { category: "5027221" },
  ],
  createTask(task) {
    this.tasks.push(task);
  },
  deleteTask(taskId) {
    const taskIndex = this.tasks.findIndex((task) => task.id === taskId);
    console.log(taskIndex)
    if (taskIndex !== -1) {
      this.tasks.splice(taskIndex, 1);
    }
  },
  editTask(updatedTask) {
    const taskIndex = taskstore.tasks.findIndex((task) => task.id === updatedTask.id);
    if (taskIndex !== -1) {
      taskstore.tasks.splice(taskIndex, 1, updatedTask);
    } else {
      taskstore.tasks.splice(taskIndex + 1, 1, updatedTask);
    }
  }
  
});
