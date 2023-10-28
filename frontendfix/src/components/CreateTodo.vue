<script>
import { todoData } from "../api/categoryServices";
export default {
  emits: ["close-modal"],
  data() {
    return {
      todoData,
      inputTask: "",
      inputCategory: "",
    };
  },
  methods: {
    addTask() {
      if (
        this.inputTask === "" ||
        this.inputCategory === ""
      )
        return;
      const newTask = {
        id: Date.now().toString(),
        name: this.inputTask,
        category: this.inputCategory,
      };
      todoData.createTask(newTask);
      this.inputTask = "";
      this.inputCategory = "";
      this.$emit("close-modal");
    },
  },
};
</script>

<template>
  <span class="text-gray-700 font-bold text-2xl">Create Task</span>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-1">
      <label class="text-gray-700 font-semibold">Name</label>
      <input
        v-model="inputTask"
        class="border-2 py-1 border-gray-400 rounded-md"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-gray-700 font-semibold">Category</label>
      <select v-model="inputCategory" class="border-2 py-1 border-gray-400 rounded-md">
        <option value="">Select a category</option>
        <option v-for="category in todoData.categories" :value="category" :key="category">
          {{ category }}
        </option>
      </select>
    </div>
  </div>
  <button
    @click="addTask"
    class="px-4 py-2 mt-1 bg-gray-700 w-fit h-fit text-gray-100 font-bold text-sm rounded-xl hover:scale-110 transition-all hover:ease-in-out hover:duration-300"
  >
    Submit
  </button>
</template>