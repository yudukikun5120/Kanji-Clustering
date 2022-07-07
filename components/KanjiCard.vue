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
        v-bind:class="{ 'animate-spin': isSpinning() }"
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
    </div>

    <div
      v-if="copyHoverFlag"
      class="absolute -top-1 right-3 sm:top-1 sm:right-4"
    >
      <span class="pt-2 text-xs text-gray-400 font-semibold"> コピー </span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    glyph: String,
    reading: String,
  },

  data() {
    return {
      copyHoverFlag: false,
    };
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
        this.$toast.show("クリップボードにコピーしました", { duration: 3000 });
      } catch (e) {
        console.log(e);
      }
    },

    isSpinning() {
      return this.$route.query.spin === "true";
    },

    setHoverFlag() {
      this.copyHoverFlag = !this.copyHoverFlag;
    },
  },
};
</script>
