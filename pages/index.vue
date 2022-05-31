<template>
  <v-col :class="theme">
    <v-container>
      <v-card flat color="transparent" class="d-flex justify-center mt-10 mb-2">
        <h1 class="text-color" @click="switchTheme">@kazuma0129</h1>
      </v-card>
      <v-card flat color="transparent" class="d-flex justify-center mt-2 mb-5">
        <h4 class="text-color">Software Engineer, Tokyo, Japan</h4>
      </v-card>
    </v-container>

    <v-container>
      <v-row align="center" justify="center" class="my-10">
        <About />
      </v-row>
    </v-container>

    <v-container>
      <v-card
        flat
        color="transparent"
        class="d-flex justify-center mt-10 mb-10"
      >
        <v-card
          v-for="(i, key) in links"
          :key="key"
          flat
          color="transparent"
          class="mx-3 sns"
        >
          <ExternalLink :href="i.url" :body="i.name" />
        </v-card>
      </v-card>
    </v-container>
  </v-col>
</template>

<script setup lang="ts">
import { Ref } from "vue";
import { links } from "../constants";

type Theme = "light" | "dark";
const theme = useState<Theme>("theme", () => "light");

const setThemeFactory = (prev: Ref<Theme>) => (next: Theme) =>
  (prev.value = next);
const setTheme = setThemeFactory(theme);

const switchTheme = () => {
  setTheme(theme.value === "light" ? "dark" : "light");
};

const checkThemePreferences = (window: Window): Theme => {
  const m = window.matchMedia;
  if (!m) {
    return "light";
  }
  if (m("(prefers-color-scheme: light)").matches) {
    return "light";
  }
  if (m("(prefers-color-scheme: dark)").matches) {
    return "dark";
  }
  return "light";
};

onMounted(() => {
  const userTheme = checkThemePreferences(window);
  setTheme(userTheme);
});
</script>

<style lang="scss">
.light {
  background: #c9d6ff; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    130deg,
    #c9d6ff,
    #e2e2e2,
    #ffe8df
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    130deg,
    #c9d6ff,
    #e2e2e2,
    #ffe8df
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }

  .text-color {
    color: #616161 !important;
    caret-color: #616161 !important;
  }
}

.dark {
  background: #313236; /* fallback for old browsers */

  .v-enter-active,
  .v-leave-active {
    transition: opacity 0.5s;
  }
  .v-enter,
  .v-leave-to {
    opacity: 0;
  }

  .text-color {
    color: #ffffff !important;
    caret-color: #ffffff !important;
  }
}
</style>
