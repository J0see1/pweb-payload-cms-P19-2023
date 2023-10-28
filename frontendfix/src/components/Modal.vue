<script>
export default {
  props: {
    isModal: Boolean,
  },
  emits: ["close-modal"],
};
</script>

<template>
  <Transition name="modal-outer">
    <div
      v-show="isModal"
      class="absolute w-full bg-black bg-opacity-25 backdrop-blur-sm h-screen top-0 left-0 flex justify-center px-8"
      @click="$emit('close-modal')"
    >
      <Transition name="modal-inner">
        <div
          v-if="isModal"
          class="p-7 rounded-lg relative flex flex-col gap-3 bg-white self-start mt-36 w-[26rem]"
          @click.stop
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="1.2em"
            viewBox="0 0 384 512"
            class="absolute right-5 top-4 cursor-pointer"
            @click="$emit('close-modal')"
          >
            <path
              d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"
            />
          </svg>
          <slot />
        </div>
      </Transition>
    </div>
  </Transition>
</template>

<style scoped>
.modal-outer-enter-active,
.modal-outer-leave-active {
  transition: opacity 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-outer-enter-from,
.modal-outer-leave-to {
  opacity: 0;
}

.modal-inner-enter-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02) 0.15s;
}

.modal-inner-leave-active {
  transition: all 0.3s cubic-bezier(0.52, 0.02, 0.19, 1.02);
}

.modal-inner-enter-from {
  opacity: 0;
  transform: scale(0.8);
}

.modal-inner-leave-to {
  transform: scale(0.8);
}
</style>
