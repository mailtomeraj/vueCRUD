<script setup>
import axios from "axios";
import { reactive, ref, onMounted } from "vue";
import { useRouter } from 'vue-router';
import { useRoute } from "vue-router";


let updateWonder = reactive({
  name: "",
  location: "",
  imageUrl: "",
});
const router = useRouter()
const route = useRoute();

onMounted(async () => {
  const response = await axios.get(`http://localhost:3000/wonders/${route.params.id}`);
  updateWonder.name = response.data.name;
  updateWonder.location = response.data.location;
  updateWonder.imageUrl = response.data.imageUrl;

});
const editWonders = async () => {
  
await axios.put(`http://localhost:3000/wonders/${route.params.id}`, updateWonder)

router.push('/')
};
</script>

<template>
  <form @submit.prevent="editWonders" class="max-w-lg mx-auto py-12">
    <div class="mb-5">
      <label
        for="Name"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Name</label
      >
      <input
        type="text"
        id="Name"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Name"
        v-model="updateWonder.name"
        required
      />
    </div>
    <div class="mb-5">
      <label
        for="Location"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Location</label
      >
      <input
        type="text"
        id="Location"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="updateWonder.location"
        required
      />
    </div>
    <div class="mb-5">
      <label
        for="imageUrl"
        class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >Image URL</label
      >
      <input
        type="text"
        id="imageURL"
        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        v-model="updateWonder.imageUrl"
        required
      />
    </div>
    <button
      type="submit"
      class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Submit
    </button>
  </form>
</template>

<style lang="scss" scoped></style>
