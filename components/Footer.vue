<template>
    <footer class="flex flex-col gap-5 items-center py-8 bg-gray-100 dark:bg-gray-800">
        <ProductHuntBadge></ProductHuntBadge>
        <div class="text-center">
            <address>
                <p class="text-sm text-gray-800 dark:text-gray-200">
                    Made with ❤️ by
                    <a href="https://yudukikun5120.me" class="font-semibold">@yudukikun5120</a>
                </p>
            </address>
        </div>
    </footer>
</template>

<script>
import Vue from 'vue';
import ProductHuntBadgeVue from "./ProductHuntBadge.vue";

export default Vue.extend({
    name: "Footer",
    components: { ProductHuntBadgeVue }
});
</script>