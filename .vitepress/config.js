import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/GlobalHost-Bot-Showcase/',
  title: 'GlobalHost Community',
  description: 'A developer-focused Discord community for learning, projects and helping each other.',
  lang: 'en-GB',
  appearance: 'dark',
  themeConfig: {
    darkModeSwitch: false,
    logo: {
      src: '/GlobalHost.png',
      alt: 'GlobalHost'
    },
    nav: [
      { text: 'Community', link: '/' },
      { text: 'Server Tools', link: '/docs/FEATURES' },
      { text: 'Why GlobalHost?', link: '/why-globalhost' },
      { text: 'Architecture', link: '/architecture' },
      { text: 'Command Reference', link: '/commands/' }
    ],
    sidebar: [
      {
        text: 'Community',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'All Tools', link: '/docs/FEATURES' },
          { text: 'Why GlobalHost?', link: '/why-globalhost' },
          { text: 'Architecture', link: '/architecture' },
          { text: 'Setup Notes', link: '/setup' }
        ]
      },
      {
        text: 'Server Tools',
        items: [
          { text: 'AutoMod', link: '/features/automod' },
          { text: 'Raid Alerts & Lockdown', link: '/features/raid-alerts' },
          { text: 'Moderation Tools', link: '/features/moderation' },
          { text: 'Forum Review', link: '/features/forum-review' },
          { text: 'Support Tickets', link: '/features/support-tickets' },
          { text: 'Community Tools', link: '/features/community-tools' }
        ]
      },
      {
        text: 'Project Reference',
        items: [
          { text: 'All Commands', link: '/commands/' },
          { text: 'Developer Tools', link: '/commands/developer-tools' },
          { text: 'Moderation Commands', link: '/commands/moderation' }
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/4Y44N-KH4L3D/GlobalHost-Bot-Showcase' }
    ],
    footer: {
      message: 'GlobalHost community and server tools',
      copyright: 'Community showcase'
    }
  }
})
