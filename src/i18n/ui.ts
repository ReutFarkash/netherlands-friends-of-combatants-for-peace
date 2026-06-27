// UI strings per locale. Keep keys identical across locales.
export const languages = {
  en: 'English',
  nl: 'Nederlands',
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = 'en';

export const ui = {
  en: {
    'site.title': 'Netherlands Friends of Combatants for Peace',
    'site.shortTitle': 'NL Friends of CfP',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.events': 'Events',
    'nav.getInvolved': 'Get Involved',
    'nav.contact': 'Contact',

    'cta.donate': 'Donate',
    'cta.subscribe': 'Subscribe',

    'home.hero.eyebrow': 'Netherlands chapter · Combatants for Peace',
    'home.hero.headline': 'Israelis and Palestinians, side by side.',
    'home.mission':
      'We are based in the Netherlands as one of many worldwide support groups connected to Combatants for Peace. We are working together non-violently to end the occupation and bring peace, equality and security for all people in the area.',

    'home.instagram.title': 'From our Instagram',
    'home.instagram.body':
      'Follow @nlfcfpeace for updates, actions and upcoming events.',
    'home.instagram.cta': 'Follow on Instagram',

    'about.title': 'About',
    'about.placeholder':
      'Placeholder copy. Combatants for Peace is a movement of Israelis and Palestinians who have laid down their weapons and work together non-violently against the occupation and for a future of peace, equality and security. The Netherlands Friends group is one of many worldwide support groups connected to the movement.',
    'about.note':
      'This is placeholder text and will be replaced with the group’s own words.',

    'events.title': 'Events',
    'events.intro':
      'Upcoming and recent gatherings, ceremonies and actions.',
    'events.empty': 'No events are scheduled right now — check back soon.',
    'events.upcoming': 'Upcoming',
    'events.past': 'Past events',
    'events.dateTbc': 'Date to be confirmed',
    'events.locationLabel': 'Location',
    'events.details': 'Details',

    'involved.title': 'Get Involved',
    'involved.subscribe.title': 'Subscribe',
    'involved.subscribe.body':
      'Join our newsletter to hear about events, actions and ways to support the movement.',
    'involved.subscribe.placeholder':
      'Newsletter sign-up form will be embedded here.',
    'involved.donate.title': 'Donate',
    'involved.donate.body':
      'Your contribution helps sustain our work. Donations are processed securely via Mollie.',

    'contact.title': 'Contact',
    'contact.intro': 'Get in touch or follow us on social media.',
    'contact.emailLabel': 'Email',
    'contact.followLabel': 'Follow us',

    'footer.affiliation':
      'An independent supporter group affiliated with Combatants for Peace.',
    'footer.parentMovement': 'Parent movement',
    'footer.credit': 'Site by',
    'language.switch': 'Language',
  },
  nl: {
    'site.title': 'Netherlands Friends of Combatants for Peace',
    'site.shortTitle': 'NL Friends of CfP',

    'nav.home': 'Home',
    'nav.about': 'Over ons',
    'nav.events': 'Activiteiten',
    'nav.getInvolved': 'Doe mee',
    'nav.contact': 'Contact',

    'cta.donate': 'Doneer',
    'cta.subscribe': 'Aanmelden',

    'home.hero.eyebrow': 'Nederlandse afdeling · Combatants for Peace',
    'home.hero.headline': 'Israëli’s en Palestijnen, zij aan zij.',
    'home.mission':
      'Wij zijn gevestigd in Nederland en zijn een van de vele ondersteunende groepen die bij Combatants for Peace zijn aangesloten. Wij werken samen op geweldloze wijze om een einde te maken aan de bezetting en vrede, gelijkheid en veiligheid te brengen voor alle mensen in het gebied.',

    'home.instagram.title': 'Van onze Instagram',
    'home.instagram.body':
      'Volg @nlfcfpeace voor updates, acties en aankomende activiteiten.',
    'home.instagram.cta': 'Volg op Instagram',

    'about.title': 'Over ons',
    'about.placeholder':
      'Tijdelijke tekst. Combatants for Peace is een beweging van Israëli’s en Palestijnen die hun wapens hebben neergelegd en samen op geweldloze wijze werken tegen de bezetting en voor een toekomst van vrede, gelijkheid en veiligheid. De Nederlandse vriendengroep is een van de vele wereldwijde ondersteunende groepen die bij de beweging zijn aangesloten.',
    'about.note':
      'Dit is tijdelijke tekst die later wordt vervangen door de eigen woorden van de groep.',

    'events.title': 'Activiteiten',
    'events.intro':
      'Aankomende en recente bijeenkomsten, ceremonies en acties.',
    'events.empty':
      'Er staan momenteel geen activiteiten gepland — kom binnenkort terug.',
    'events.upcoming': 'Aankomend',
    'events.past': 'Afgelopen activiteiten',
    'events.dateTbc': 'Datum nog te bevestigen',
    'events.locationLabel': 'Locatie',
    'events.details': 'Details',

    'involved.title': 'Doe mee',
    'involved.subscribe.title': 'Aanmelden',
    'involved.subscribe.body':
      'Meld je aan voor onze nieuwsbrief en blijf op de hoogte van activiteiten, acties en manieren om de beweging te steunen.',
    'involved.subscribe.placeholder':
      'Hier wordt het aanmeldformulier voor de nieuwsbrief ingesloten.',
    'involved.donate.title': 'Doneer',
    'involved.donate.body':
      'Jouw bijdrage helpt ons werk voort te zetten. Donaties worden veilig verwerkt via Mollie.',

    'contact.title': 'Contact',
    'contact.intro': 'Neem contact op of volg ons op social media.',
    'contact.emailLabel': 'E-mail',
    'contact.followLabel': 'Volg ons',

    'footer.affiliation':
      'Een onafhankelijke steungroep, verbonden aan Combatants for Peace.',
    'footer.parentMovement': 'Moederbeweging',
    'footer.credit': 'Gemaakt door',
    'language.switch': 'Taal',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}
