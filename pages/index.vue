<template>
  <div class="min-h-screen">
    <div
      class="min-h-screen bg-gray-50 dark:bg-gray-900 dark:text-white p-10 md:p-20 grid grid-cols-1 lg:grid-cols-2 gap-10">
      <AppSidebar
        class="space-y-6"
        :show-tutorial="showTutorial"
        @open-tutorial="showTutorial = true"
      />
      <div class="flex flex-col space-y-8">
        <div>
          <SearchResult/>
        </div>
      </div>
    </div>
    <AppFooter/>
    <AppTutorial :is-open="showTutorial" @update:is-open="showTutorial = $event" />
  </div>
</template>

<script setup>
const showTutorial = ref(false)
</script>
