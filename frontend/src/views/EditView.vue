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
          <div class="border rounded-md px-3 py-2 border-gray-400 focus:outline-none focus:border-blue-500">
            <input v-model="name"/>
          </div>
        </div>
        <div class="flex flex-col">
          <select v-model="inputCategory" class="border-2 py-1 border-gray-400 rounded-md">
              <option value="">Select a category</option>
              <option v-for="category in categories" :value="category.id" :key="category">
                {{ category.name }}
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
import qs from "qs";

export default {
  data() {
    return {
      name: "",
      inputCategory: "",
      categories: [],
      id: this.$route.params.id,
    };
  },
  methods: {
   async updateTask() {
    const stringifiedQuery = qs.stringify({
      where: {
        id: {
          contains: this.id,
        },
      },
    },{ addQueryPrefix: true });

    try {
      const req = await fetch(`http://localhost:3100/api/Todo/${stringifiedQuery}`, {
        method: "PATCH", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: this.name,
          Category: this.inputCategory,
        }),
      })
      const data = await req.json()
      if (data) {
        window.alert('Task has been created successfully');
        this.$router.push({ path: '/' });
      }
    } catch (err) {
      console.log(err)
    }
   },
   
   async getCategories() {
        await fetch('http://localhost:3100/api/Category')
        .then((response) => response.json())
        .then((data) => {
            console.log(data.docs);
            this.categories = data.docs;
        })
        .catch((error) => {
            console.error(error)
        })
    },
  },
  mounted() {
    console.log(this.id)
    this.getCategories()
    document.title = "Edit Task"; 
  }
};
</script>

