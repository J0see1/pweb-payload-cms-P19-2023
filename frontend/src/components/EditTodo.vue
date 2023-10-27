<template>
  <section class="edit-todo">
    <div>
      <div v-if="!editable">{{ todo.content }}</div>
      <input
        v-else
        v-model="editedContent"
        @keydown.enter="saveTodo"
        @keydown.esc="cancelEdit"
        @input="updateEditedContent"
      />
      <button @click="toggleEdit">{{ editable ? "Cancel" : "Edit" }}</button>
      <button v-if="editable" @click="saveTodo">Save</button>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    todo: Object,
  },
  data() {
    return {
      editable: false,
      editedContent: this.todo.content,
    };
  },
  methods: {
    toggleEdit() {
      this.editable = !this.editable;
    },
    saveTodo() {
      this.editable = false;
      this.$emit("save", this.todo, this.editedContent); // Emit the todo and edited content
    },
    cancelEdit() {
      this.editable = false;
      this.editedContent = this.todo.content;
    },
  },
};
</script>
