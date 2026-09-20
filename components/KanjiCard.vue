<template>
  <!-- <div class="bg-white aspect-square flex justify-center items-center shadow-md py-20"><span class="text-6xl">㒤</span></div> -->
  <div
    class="relative py-8 px-3 xl:px-8 max-w-sm mx-auto bg-gray-100 hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700 rounded-xl space-y-2 xl:py-4 xl:flex xl:items-center xl:space-y-0 xl:space-x-14 transition ease-in-out"
    @click="copyKanjiToClickboard(glyph)"
    @mouseenter="setHoverFlag()"
    @mouseleave="setHoverFlag()"
  >
    <div class="flex flex-col">
      <span
        class="inline-block align-middle mx-auto sh-24 rounded-full text-5xl xl:mx-0 xl:shrink-0 text-center"
        :class="{ 'animate-spin': isSpinning() }"
      >
        {{ glyph }}
      </span>
    </div>

    <div class="text-center space-y-2 xl:text-left">
      <div class="space-y-1 mx-auto">
        <!-- <p class="leading-5 text-black font-serif">
                        {{reading}}
                    </p> -->
        <p class="text-sm text-gray-500 font-medium font-mono">
          {{ unicodeCodePoint }}
        </p>
      </div>
    </div>

    <div
      v-if="copyHoverFlag"
      class="absolute -top-1 right-3 sm:top-1 sm:right-4"
    >
      <span class="pt-2 text-xs text-gray-400 font-semibold"> コピー </span>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  glyph: {
    type: String,
    default: ''
  },
  reading: {
    type: String,
    default: ''
  }
})

const route = useRoute()
const copyHoverFlag = ref(false)

const unicodeCodePoint = computed(() => {
  const codePoint = props.glyph.codePointAt(0)
  return codePoint === undefined ? '' : `U+${codePoint.toString(16).toUpperCase()}`
})

const toast = useToast()
const { copy } = useClipboard({ legacy: true })

const copyKanjiToClickboard = async (kanji) => {
  try {
    await copy(kanji)
    toast.add({
      title: 'コピー完了',
      description: `漢字「${kanji}」がクリップボードにコピーされました`,
      color: 'success'
    })
  } catch {
    toast.add({
      title: 'コピー失敗',
      description: 'コピーに失敗しました',
      color: 'error'
    })
  }
}

const isSpinning = () => {
  return route.query.spin === 'true'
}

const setHoverFlag = () => {
  copyHoverFlag.value = !copyHoverFlag.value
}
</script>
