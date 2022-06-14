<template>
  <div class="flex flex-col gap-y-8">
    <div class="">
      <h2 class="font-serif text-5xl"></h2>
      <input
        v-model="character"
        class="w-full h-full bg-white border-2 rounded-full px-10 align-center pt-6 pb-8 my-4 text-2xl font-serif"
        placeholder="漢字を入力"
      />
    </div>

    <h2 class="font-serif text-5xl font-extrabold">
      類似した<br />
      漢字
    </h2>
    <p v-if="$fetchState.pending">検知中…</p>
    <p v-else-if="$fetchState.error">
      例外が発生しました。<NuxtLink to="https://twitter.com/yudukikun5120"
        >@yudukikun5120</NuxtLink
      >までご連絡ください。
    </p>
    <div
      id="affinities"
      class="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-3 gap-5 place-content-center"
    >
      <div v-for="affinity in affinities">
        <KanjiCard
          :glyph="affinity"
          reading="おなじ・くりかえし・のま"
        ></KanjiCard>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      character: "",
      affinities: [],
    };
  },

  created() {
    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1) + min);
    };

    const randomKanji = () => {
      const codeUnit = getRandomIntInclusive(0x4E00, 0x9FFF);
      return String.fromCodePoint(codeUnit);
    };

    this.character = randomKanji();
  },

  async fetch() {
    let character, affinities;

    ({ character, affinities } = await this.$http.$get(
      `/kanji-clustering-api/affinities?character=${this.character}`
    ));
    this.affinities = affinities;
  },

  watch: {
    character: "$fetch",
  },
};
</script>
