---
# https://vitepress.dev/reference/default-theme-home-page
layout: home
titleTemplate: false

hero:
  name: Utility Libraries
  text: different small but powerful utility libraries
  tagline: This website is in very early stages so be patient
  image:
    src: /utility-libraries.svg
    width: 512
    height: 512
  actions:
    - theme: brand
      text: Own Libraries
      link: /utility-libraries/
    - theme: alt
      text: 3rd Party
      link: /3rd-party/

features:
  - title: Self Developed
    details: Utility-Libraries offers various self developed packages to fill your needs.
    link: /utility-libraries/
    linkText: See our Libraries
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-code-xml"><path d="m18 16 4-4-4-4"/><path d="m6 8-4 4 4 4"/><path d="m14.5 4-5 16"/></svg>
  - title: 3rd-party
    details: Because we don't want to reinvent the wheel also have a collection of 3rd-party libraries that could help you.
    linkText: See other Libraries
    link: /3rd-party/
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54"/><path d="M7 3.34V5a3 3 0 0 0 3 3v0a2 2 0 0 1 2 2v0c0 1.1.9 2 2 2v0a2 2 0 0 0 2-2v0c0-1.1.9-2 2-2h3.17"/><path d="M11 21.95V18a2 2 0 0 0-2-2v0a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05"/><circle cx="12" cy="12" r="10"/></svg>
  - title: Open Source
    details: We are open source. This means everyone can look at our code or help develop new libraries.
    link: https://github.com/utility-libraries/
    linkText: Visit our Organisation
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
---

<!--
<script setup lang="ts">
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme';


const members = [
    {
        avatar: 'https://www.github.com/utility-libraries.png',
        name: 'Utility Libraries',
        title: 'Organisation',
        links: [
            { icon: 'github', link: 'https://github.com/utility-libraries' },
        ]
    },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      Utility-Libraries
    </template>
    <template #lead>
      Here are libraries under our organisation
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="small"
    :members="members"
  />
</VPTeamPage>
-->
