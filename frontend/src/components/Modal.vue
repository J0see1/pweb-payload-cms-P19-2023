<template>
  <div class="modal">
    <div class="modal-content">
      <div class="button-direction">
        <button @click="closeModal">Close</button>
      </div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style scoped>
/* Add your modal styles here */
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-content {
  background-color: rgb(255, 255, 255);
  padding: 20px;
  border-radius: 5px;
}

/* Add any other styling you need for the modal */
</style>

<!-- <template>
  <div>
    <button @click="showModal = true">Open Modal</button>

    <div v-if="showModal" class="modal">
      <div class="modal-content">
        <span @click="showModal = false" class="close">&times;</span>
        <p>Modal content goes here...</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false,
    };
  },
};
</script> -->
