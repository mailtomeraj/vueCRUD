<script setup>
import axios from "axios";
import { onMounted, reactive, ref } from "vue";
import ConfirmDeleteModel from "@/components/ConfirmDeleteModel.vue";

const allWonders = ref([]);
const itemIdToDelete = ref(0);
onMounted(async () => {
  const response = await axios.get("http://localhost:3000/wonders");
  allWonders.value = response.data;
});

const models = reactive({
  deleteModel: false,
});

const handleDelete = (id) => {
  itemIdToDelete.value = id;
  models.deleteModel = true;
};

const confirmDelete = async () => {
  await axios.delete(`http://localhost:3000/wonders/${itemIdToDelete.value}`);

  allWonders.value = allWonders.value.filter(
    (_) => _.id !== itemIdToDelete.value
  );
  models.deleteModel = false;
};
</script>

<template>
  <div
    class="max-w-screen-xl flex flex-wrap items-center justify-end mx-auto p-4"
  >
    <RouterLink to="/AddWonders">
      <button
        type="button"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
      >
        ADD WONDER
      </button>
    </RouterLink>
  </div>

  <div
    class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4"
  >
    <div
      class="relative max-w-sm rounded overflow-hidden shadow-lg mb-12"
      v-for="item in allWonders"
      :key="item.id"
    >
      <img class="w-full" :src="item.imageUrl" alt="Sunset in the mountains" />
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">{{ item.name }}</div>
        <p class="text-gray-700 text-base">Location - {{ item.location }}</p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <RouterLink :to="`/EditWonders/${item.id}`">
          <button
            type="button"
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Edit Wonder
          </button></RouterLink
        >

        <button
          @click="($event) => handleDelete(item.id)"
          id="deleteButton"
          data-modal-target="deleteModal"
          data-modal-toggle="deleteModal"
          class="text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
          type="button"
        >
          Delete
        </button>

        <ConfirmDeleteModel
          @confirmDeleteClicked="confirmDelete"
          v-if="models.deleteModel"
          v-model="models.deleteModel"
        />
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
