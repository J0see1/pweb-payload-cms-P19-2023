<template>
  <section class="create-todo">
    <h3>CREATE A TO DO LIST</h3>

    <!-- Open the modal when the button is clicked -->
    <button @click="openModal">Create ToDo</button>

    <!-- Show the modal component when modalVisible is true -->
    <Modal v-if="modalVisible" @close="closeModal">
      <form @submit.prevent="addTodo">
        <!-- Your form fields go here -->
        <h4>What do you want to add to your todo list?</h4>
        <input
          type="text"
          name="content"
          id="content"
          placeholder="e.g. make a video"
          v-model="input_content"
        />

        <h4>Pick a category</h4>
        <div class="options">
          <label>
            <input
              type="radio"
              name="category"
              id="category1"
              value="business"
              v-model="input_category"
            />
            <span class="bubble business"></span>
            <div>Business</div>
          </label>

          <label>
            <input
              type="radio"
              name="category"
              id="category2"
              value="personal"
              v-model="input_category"
            />
            <span class="bubble personal"></span>
            <div>Personal</div>
          </label>

          <label>
            <input
              type="radio"
              name="category"
              id="category3"
              value="school"
              v-model="input_category"
            />
            <span class="bubble school"></span>
            <div>School</div>
          </label>

          <label>
            <input
              type="radio"
              name="category"
              id="category4"
              value="groceries"
              v-model="input_category"
            />
            <span class="bubble groceries"></span>
            <div>Groceries</div>
          </label>
        </div>

        <input type="submit" value="Add todo" />
      </form>
    </Modal>
  </section>

  <section class="todo-list">
    <h3>TODO LIST</h3>
    <div class="list" id="todo-list">
      <div
        v-for="todo in todos_asc"
        :class="`todo-item ${todo.done && 'done'}`"
      >
        <label>
          <input type="checkbox" v-model="todo.done" />
          <span
            :class="`bubble ${
              todo.category == 'business'
                ? 'business'
                : todo.category == 'personal'
                ? 'personal'
                : todo.category == 'school'
                ? 'school'
                : todo.category == 'groceries'
                ? 'groceries'
                : ''
            }`"
          ></span>
        </label>

        <div class="todo-content">
          <EditTodo :todo="todo" @save="updateTodo" />
        </div>

        <div class="actions">
          <button class="delete" @click="removeTodo(todo)">Delete</button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted, computed, watch } from "vue";
import Modal from "./Modal.vue"; // Import the Modal component
import EditTodo from "./EditTodo.vue"; // Import the EditTodo component

const todos = ref([]);
const name = ref("");
const input_content = ref("");
const input_category = ref(null);

const todos_asc = computed(() =>
  todos.value.sort((a, b) => {
    return a.createdAt - b.createdAt;
  })
);

watch(name, (newVal) => {
  localStorage.setItem("name", newVal);
});

watch(
  todos,
  (newVal) => {
    localStorage.setItem("todos", JSON.stringify(newVal));
  },
  {
    deep: true,
  }
);

const addTodo = () => {
  if (input_content.value.trim() === "" || input_category.value === null) {
    return;
  }

  todos.value.push({
    content: input_content.value,
    category: input_category.value,
    done: false,
    editable: false,
    createdAt: new Date().getTime(),
  });
};

const removeTodo = (todo) => {
  todos.value = todos.value.filter((t) => t !== todo);
};

onMounted(() => {
  name.value = localStorage.getItem("name") || "";
  todos.value = JSON.parse(localStorage.getItem("todos")) || [];
});

const modalVisible = ref(false);

const openModal = () => {
  modalVisible.value = true;
};

const closeModal = () => {
  modalVisible.value = false;
};

const updateTodo = (todo, editedContent) => {
  const index = todos.value.findIndex((t) => t === todo);

  if (index !== -1) {
    todos.value[index].content = editedContent;
    localStorage.setItem("todos", JSON.stringify(todos.value));
  }
};
</script>
