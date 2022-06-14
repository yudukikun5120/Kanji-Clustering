<template>
  <!-- <div class="bg-white aspect-square flex justify-center items-center shadow-md py-20"><span class="text-6xl">㒤</span></div> -->
  <div
    class="py-8 px-3 xl:px-8 max-w-sm mx-auto bg-gray-100 hover:bg-gray-200 rounded-xl space-y-2 xl:py-4 xl:flex xl:items-center xl:space-y-0 xl:space-x-14 transition ease-in-out"
    @click="copyKanjiToClickboard(glyph)"
  >
    <div class="flex flex-col">
      <span
        class="inline-block align-middle mx-auto sh-24 rounded-full text-5xl font-serif xl:mx-0 xl:shrink-0 text-center"
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
          {{ UTF16CodeUnit }}
        </p>
      </div>
      <!-- <button class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            Message
        </button> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    glyph: String,
    reading: String,
  },

  computed: {
    UTF16CodeUnit() {
      const codeUnit = this.glyph.charCodeAt().toString(16).toUpperCase();
      return `U+${codeUnit}`;
    },
  },

  methods: {
    async copyKanjiToClickboard(kanji) {
      try {
        await this.$copyText(kanji);
        this.$toast.show("クリップボードにコピーしました", {
          icon: "content_copy",
        });
      } catch (e) {
        console.log(e);
      }
    },
  },
};
</script>
