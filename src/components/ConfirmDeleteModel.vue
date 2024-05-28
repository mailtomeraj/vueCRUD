<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import { onClickOutside } from '@vueuse/core';

const props = defineProps({
    modelValue : {
        type:Boolean,
        required:true
    }
})

const emits = defineEmits(['update:modelValue']);

const closeModel = () => {
    emits('update:modelValue', false)
}

const handleClose = (event) =>{
  if(event.key==='Escape')
  {
    closeModel ()
  }
}

const deleteModelRef = ref(null)
onClickOutside(deleteModelRef, closeModel)

onMounted(()=>{
    document.addEventListener('keyup', handleClose)
})
onUnmounted(()=>{
    document.removeEventListener('keyup', handleClose)
})


</script>

<template>
    <div class="fixed inset-0 z-40 min-h-full overflow-y-auto overflow-x-hidden transition flex items-center">
        <!-- overlay -->
        <div aria-hidden="true" class="fixed inset-0 w-full h-full bg-black/10 cursor-pointer">
        </div>
    
        <!-- Modal -->
        <div  class="relative w-full cursor-pointer pointer-events-none transition my-auto p-4">
            <div
                class="w-full py-2 bg-white cursor-default pointer-events-auto dark:bg-gray-800 relative rounded-xl mx-auto max-w-sm">
    
                <button @click="closeModel" tabindex="-1" type="button" class="absolute top-2 right-2 rtl:right-auto rtl:left-2">
                    <svg title="Close" tabindex="-1" class="h-4 w-4 cursor-pointer text-gray-400"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                        <path fill-rule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clip-rule="evenodd"></path>
                    </svg>
                    <span class="sr-only">
                        Close
                    </span>
                </button>
    
    
    
                <div class="space-y-2 p-2">
                    <div class="p-4 space-y-2 text-center dark:text-white">
                        <svg class="w-10 h-10 text-red-600 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
    
                        <p class="text-gray-500">
                            Are you sure you would like to do this?
                        </p>
                    </div>
                </div>
    
                <div class="space-y-2">
                    <div aria-hidden="true" class="border-t dark:border-gray-700 px-2"></div>
    
                    <div class="px-6 py-2">
                        <div class="grid gap-2 grid-cols-[repeat(auto-fit,minmax(0,1fr))]">
                            <button  @click="closeModel" type="button"
                                    class="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-gray-800 bg-white border-gray-300 hover:bg-gray-50 focus:ring-primary-600 focus:text-primary-600 focus:bg-primary-50 focus:border-primary-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:border-gray-600 dark:hover:border-gray-500 dark:text-gray-200 dark:focus:text-primary-400 dark:focus:border-primary-400 dark:focus:bg-gray-800">
                                    <span class="flex items-center gap-1">
                                        <span class="">
                                            Cancel
                                        </span>
                                    </span>
                                </button>
    
                            <button @click="$event => $emit('confirmDeleteClicked')" type="button"
                                    class="inline-flex items-center justify-center py-1 gap-1 font-medium rounded-lg border transition-colors outline-none focus:ring-offset-2 focus:ring-2 focus:ring-inset dark:focus:ring-offset-0 min-h-[2.25rem] px-4 text-sm text-white shadow focus:ring-white border-transparent bg-red-600 hover:bg-red-500 focus:bg-red-700 focus:ring-offset-red-700">
    
                                    <span class="flex items-center gap-1">
                                        <span class="">
                                            Confirm
                                        </span>
                                    </span>
    
                                </button>
                        </div>
                    </div>
                </div>
    
    
            </div>
        </div>
    </div>
</template>
