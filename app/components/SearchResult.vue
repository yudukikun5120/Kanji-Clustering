<template>
  <div class="flex flex-col gap-y-8">
    <h2 class="text-4xl font-extrabold">
      類似した漢字
    </h2>

    <div class="flex flex-col gap-y-6">
      <div class="flex border dark:border-gray-700">
        <button class="bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition ease-in-out px-4" @click="copyURLToClickboard()">
          🔗
        </button>
        <input
          v-model="character"
          type="search"
          maxlength="1"
          pattern="^[一-龠]?$"
          class="w-full bg-white dark:bg-gray-800 px-5 pt-3 pb-3 text-xl"
          placeholder="漢字を入力"
        >
      </div>
      <p v-if="error" class="text-red-600 bg-red-50 p-4 rounded">
        <strong>API接続エラー:</strong>
        漢字クラスタリングAPIに接続できません。しばらくしてからお試しください。
        <br>
        <small>エラーが続く場合は<NuxtLink to="https://twitter.com/yudukikun5120" class="underline">@yudukikun5120</NuxtLink>までご連絡ください。</small>
      </p>

      <div
        id="affinities"
        class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-5 place-content-center"
        :class="{ 'animate-pulse': pending }"
      >
        <div v-for="(affinity, index) in affinities" :key="index">
          <KanjiCard
            :glyph="affinity"
            reading="おなじ・くりかえし・のま"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const getRandomIntInclusive = (min, max) => {
  const minimum = Math.ceil(min)
  const maximum = Math.floor(max)
  return Math.floor(Math.random() * (maximum - minimum + 1) + minimum)
}

const randomKanji = () => String.fromCodePoint(getRandomIntInclusive(0x4e00, 0x9fff))
const queryCharacter = Array.isArray(route.query.character)
  ? route.query.character[0]
  : route.query.character
const character = ref(queryCharacter || randomKanji())
const debouncedCharacter = refDebounced(character, 250)

const { data: affinities, pending, error } = await useFetch('/kanji-clustering-api/affinities', {
  query: computed(() => ({
    character: debouncedCharacter.value,
    sets: 'jis_level_1 jis_level_2'
  })),
  transform: (data) => data?.affinities || [],
  server: false,
  default: () => [],
  retry: 2,
  retryDelay: 1000
})

const toast = useToast()
const { copy } = useClipboard({ legacy: true })

const copyURLToClickboard = async () => {
  try {
    const url = new URL('/', window.location.origin)
    url.searchParams.set('character', character.value)
    await copy(url.toString())
    toast.add({
      title: 'コピー完了',
      description: 'URLがクリップボードにコピーされました',
      color: 'success'
    })
  } catch {
    toast.add({
      title: 'コピー失敗',
      description: 'URLのコピーに失敗しました',
      color: 'error'
    })
  }
}
</script>
