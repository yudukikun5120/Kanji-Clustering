<template>
  <div class="flex flex-col gap-y-8">
    <h2 class="text-4xl font-extrabold">
      類似した漢字
    </h2>

    <div class="flex flex-col gap-y-6">
      <div class="flex border dark:border-gray-700">
        <button class="bg-gray-100 dark:bg-gray-700 px-4" @click="copyURLToClickboard()">
          🔗
        </button>
        <input
          v-model="character"
          type="search"
          maxlength="1"
          pattern="^[一-龠]?$"
          class="w-full bg-white dark:bg-gray-800 px-5 pt-3 pb-3 text-xl"
          placeholder="漢字を入力"
        />
      </div>
      <p v-if="$fetchState.error">
        例外が発生しました。<NuxtLink to="https://twitter.com/yudukikun5120"
          >@yudukikun5120</NuxtLink
        >までご連絡ください。
      </p>

      <div
        id="affinities"
        class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-5 place-content-center"
        v-bind:class="{ 'animate-pulse': $fetchState.pending }"
      >
        <div v-for="affinity in affinities">
          <KanjiCard
            :glyph="affinity"
            reading="おなじ・くりかえし・のま"
          ></KanjiCard>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import KanjiCard from "./KanjiCard.vue";
export default {
  data() {
    return {
      character: String,
      affinities: Array,
    };
  },
  created() {
    if (this.$route.query.character) {
      this.character = this.$route.query.character;
    } else {
      const getRandomIntInclusive = (min, max) => {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min);
      };
      const randomKanji = () => {
        const codeUnit = getRandomIntInclusive(0x4e00, 0x9fff);
        return String.fromCodePoint(codeUnit);
      };
      this.character = randomKanji();
    }
  },
  methods: {
    copyURLToClickboard() {
      this.$copyText(`${location.origin}?character=${this.character}`);
    },
  },
  async fetch() {
    try {
      const res = await this.$http.$get(
        `/kanji-clustering-api/affinities?character=${this.character}&sets=jis_level_1+jis_level_2`
      );
      const { affinities } = res;
      this.affinities = affinities;
    } catch (e) {
      console.error(e);
    }
  },
  watch: {
    character: "$fetch",
  },
  components: { KanjiCard },
};
</script>
