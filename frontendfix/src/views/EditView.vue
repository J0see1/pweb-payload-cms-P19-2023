<template>
  <div class="flex justify-center items-center mt-20">
    <div class="p-4 w-1/2">
      <h2 class="text-2xl font-bold text-gray-700 mb-4 flex items-center">
        <div @click="$router.go(-1)" >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
            class="cursor-pointer"
          />
        </svg>
        </div>
        Edit Task
      </h2>
      <div class="flex flex-col gap-4">
        <div class="flex flex-col">
          <label class="text-gray-700 font-semibold">Name</label>
          <input
            v-model="inputNewName"
            class="border rounded-md px-3 py-2 border-gray-400 focus:outline-none focus:border-blue-500"
          />
        </div>
        <div class="flex flex-col">
          <select v-model="inputCategory" class="border-2 py-1 border-gray-400 rounded-md">
              <option value="">Select a category</option>
              <option v-for="category in todoData.categories" :value="category" :key="category">
                {{ category }}
              </option>
          </select>
        </div>
      </div>
      <button
        @click="updateTask(this.id)"
        class="px-4 py-2 mt-4 bg-gray-700 text-gray-100 font-bold text-sm rounded-lg hover:bg-gray-800 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
      >
        Submit
      </button>
    </div>
  </div>
</template>

<script>
import { todoData } from "../api/categoryServices";
export default {
  data() {
    return {
      todoData,
      id: this.$route.params.id,
      inputNewName: "",
      inputNewCategory: "",
    };
  },
  methods: {
    getTaskById() {
      const task = this.todoData.tasks.find((task) => task.id === parseInt(this.id) || task.id === this.id);
      if (task) {
        this.inputNewName = task.name;
        this.inputNewCategory = task.category;
      }
    },
    updateTask(index){
        const updatedTask = {
            id: index,
            name: this.inputNewName,
            category: this.inputNewCategory,
        };
        todoData.editTask(updatedTask)
        this.$router.push('/');
    }
  },
  mounted() {
    this.getTaskById();
  },
};
</script>

