import { defineConfig } from "vitepress";

export default defineConfig({
  title: "TaskRatchet",
  themeConfig: {
    logo: "/logo.png",
    nav: [
      { text: "FAQ", link: "/help/faq" },
      { text: "Help", link: "/help" },
      { text: "Twitter", link: "https://twitter.com/TaskRatchet" },
      { text: "Privacy", link: "/privacy" },
      { text: "Terms", link: "/terms" },
      { text: "Log In", link: "https://app.taskratchet.com/" },
    ],
    sidebar: {
      "/help": [
        {
          text: "Getting Started",
          items: [
            { text: "How It Works", link: "/help/works" },
            { text: "Working with Tasks", link: "/help/working-with-tasks" },
            { text: "Frequently Asked Questions", link: "/help/faq" },
          ],
        },
        {
          text: "Documentation",
          items: [
            { text: "API", link: "/help/api" },
            { text: "Glossary", link: "/help/glossary" },
            { text: "Integrations", link: "/help/integrations" },
            { text: "Interfaces", link: "/help/interfaces" },
            { text: "Timezones", link: "/help/timezones" },
          ],
        },
        {
          text: "Company",
          items: [
            { text: "Climate", link: "https://climate.stripe.com/JS6ptt" },
            {
              text: "Feature Suggestions",
              link: "https://taskratchet.consider.it/",
            },
            { text: "Friends & Competitors", link: "/help/friends" },
            { text: "Open Source", link: "/help/open-source" },
            { text: "Transparency", link: "/help/transparency" },
          ],
        },
      ],
    },
  },
});
