<template>
  <UModal 
    v-model:open="isOpenModel" 
    title="使い方"
    description="漢字凝集解析の使い方を説明します"
  >
    <template #body>
      <p class="mb-4">漢字凝集解析の使い方:</p>
      <ol class="list-decimal list-inside space-y-2 mb-4">
        <li>右側の入力欄に漢字を1文字入力してください</li>
        <li>自動的に類似した漢字が表示されます</li>
        <li>漢字をクリックするとクリップボードにコピーされます</li>
        <li>🔗ボタンをクリックするとURLをコピーできます</li>
      </ol>
      
      <iframe
        src="https://scribehow.com/embed/__oSB8UpncTSyyeFBOR4g6AA"
        width="100%"
        height="480"
        allowfullscreen
        frameborder="0"
        class="rounded"
      />
    </template>
  </UModal>
</template>

<script setup>
const props = defineProps({
  isOpen: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:isOpen'])

const isOpenModel = computed({
  get: () => props.isOpen,
  set: value => emit('update:isOpen', value)
})
</script>
