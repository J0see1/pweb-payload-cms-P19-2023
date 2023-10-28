<template>
  <span class="text-gray-700 font-bold text-2xl">Create User</span>
  <div class="flex flex-col gap-3">
    <div class="flex flex-col gap-1">
      <label class="text-gray-700 font-semibold">Name</label>
      <input
        v-model="inputName"
        class="border-2 py-1 border-gray-400 rounded-md"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-gray-700 font-semibold">NRP</label>
      <input
        v-model="inputNrp"
        class="border-2 py-1 border-gray-400 rounded-md"
      />
    </div>
    <div class="flex flex-col gap-1">
      <label class="text-gray-700 font-semibold">Email</label>
      <input
        v-model="inputEmail"
        class="border-2 py-1 border-gray-400 rounded-md"
      />
    </div>
  </div>
  <button
    @click="addUser"
    class="px-4 py-2 mt-1 bg-gray-700 w-fit h-fit text-gray-100 font-bold text-sm rounded-xl hover:scale-110 transition-all hover:ease-in-out hover:duration-300"
  >
    Submit
  </button>
</template>

<script>
import { userStore } from "../api/categoryServices.js";

export default {
  emits: ["close-modal"],
  data() {
    return {
      userStore,
      inputName: "",
      inputNrp: "",
      inputEmail: "",
    };
  },
  methods: {
    addUser() {
      if (
        this.inputName === "" ||
        this.inputNrp === "" ||
        this.inputEmail === ""
      )
        return;
      const newUser = {
        id: Date.now().toString(),
        name: this.inputName,
        nrp: this.inputNrp,
        email: this.inputEmail,
      };
      userStore.createUser(newUser);
      this.inputName = "";
      this.inputNrp = "";
      this.inputEmail = "";
      this.$emit("close-modal");
    },
  },
};
</script>