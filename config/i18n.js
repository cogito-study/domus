module.exports = {
  'en-us': {
    path: 'en',
    locale: 'en-us',
    siteLanguage: 'en',
    ogLang: 'en_US',
    category: 'Category',
    categories: 'Categories',
    was: 'was',
    were: 'were',
    tagged: 'tagged with',
    recent: 'Recent',
    projects: 'projects',
    allCategories: 'All categories',
    entries: 'entries',
    pages: {
      about: 'about us',
      contact: 'contact',
      blog: 'blog',
    },
    sections: {
      hero: {
        messages: [
          {
            text: `Hey man! Do we have some notes for tomorrow's exam?`,
            type: 'received',
            delay: 500,
          },
          { text: `😅 Of course we do...`, type: 'sent', delay: 1100 },
          { text: `https://cogito.study`, type: 'sent', delay: 1400 },
          { text: `NEXT DAY`, type: 'date', delay: 2000 },

          { text: `Saved my life! Beers on me next time! 🙌`, type: 'received', delay: 2000 },
          {
            text: `Aaand also, does cogito have Corporate Finance notes too?`,
            type: 'received',
            delay: 2300,
          },
        ],
      },
      testimonials: 'Our users said...',
      usecase: 'Use cases',
      contact: 'Contact us',
      privacy: 'Privacy policy',
      terms: 'Terms & Conditions',
    },
    buttons: {
      login: 'log in',
      register: 'register',
      more: 'find out more',
    },
  },
  hu: {
    path: 'hu',
    locale: 'hu',
    siteLanguage: 'hu',
    ogLang: 'hu_HU',
    category: 'Category',
    categories: 'Categories',
    was: 'was',
    were: 'were',
    tagged: 'tagged with',
    recent: 'Recent',
    projects: 'projects',
    allCategories: 'All categories',
    entries: 'entries',
    pages: {
      about: 'rólunk',
      contact: 'elérhetőség',
    },
    sections: {
      hero: {
        messages: [
          {
            text: `Haver mondd hogy van jegyzeted a holnaputáni vizsgára...`,
            type: 'received',
            delay: 500,
          },
          { text: `😅 Naná hogy van`, type: 'sent', delay: 1100 },
          { text: `https://cogito.study`, type: 'sent', delay: 1400 },
          { text: `MÁSNAP`, type: 'date', delay: 2000 },

          {
            text: `Sima ötös, el sem hiszem. Fussunk össze jövőhéten, a sört én állom! 🙌`,
            type: 'received',
            delay: 2000,
          },
          {
            text: `Ha már itt tartunk.. 🙄 Válgazdból is vannak jegyzetek itt?`,
            type: 'received',
            delay: 2300,
          },
        ],
      },
      testimonials: 'Felhasználóink mondták...',
      usecase: 'Funkciók',
      contact: 'Elérhetőség',
      privacy: 'Adatvédelmi szabályzat',
      terms: 'Általános szerződési feltételek',
    },
    buttons: {
      login: 'bejelentkezés',
      register: 'regisztráció',
      more: 'tudj meg többet',
    },
  },
};
