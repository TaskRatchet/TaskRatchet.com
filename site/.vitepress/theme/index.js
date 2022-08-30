import DefaultTheme from "vitepress/theme";
import "./custom.css";
import Video from "./components/Video.vue";
import VPFeature from "./components/VPFeature.vue";
import VPFeatures from "./components/VPFeatures.vue";
import BuiltBy from "./components/BuiltBy.vue";
import Uvi from "./components/Uvi.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    app.component("Video", Video),
      app.component("VPFeature", VPFeature),
      app.component("VPFeatures", VPFeatures),
      app.component("BuiltBy", BuiltBy),
      app.component("Uvi", Uvi);
  },
};
