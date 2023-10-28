import { reactive } from "vue";

export const userStore = reactive({
  users: [
    { id: 0, nrp: "5027211036", name: "Inu", email: "inu@mail.com" },
    { id: 1, nrp: "5027211008", name: "Aloy", email: "aloy@mail.com" },
    { id: 2, nrp: "5027211035", name: "Rifki", email: "rifki@mail.com" },
  ],
  createUser(user) {
    this.users.push(user);
  },
  deleteUser(userId) {
    const userIndex = this.users.findIndex((user) => user.id === userId);
    console.log(userIndex)
    if (userIndex !== -1) {
      this.users.splice(userIndex, 1);
    }
  },
  editUser(updatedUser) {
    const userIndex = userStore.users.findIndex((user) => user.id === updatedUser.id);
    if (userIndex !== -1) {
      userStore.users.splice(userIndex, 1, updatedUser);
    } else {
      userStore.users.splice(userIndex + 1, 1, updatedUser);
    }
  }
  
});
