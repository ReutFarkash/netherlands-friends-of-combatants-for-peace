// UI strings per locale. Keep keys identical across locales.
export const languages = {
  en: 'English',
  nl: 'Nederlands',
  he: 'עברית',
  ar: 'العربية',
} as const;

/** Right-to-left locales. */
export const rtlLocales = ['he', 'ar'] as const;
export const isRtl = (locale: Locale): boolean =>
  (rtlLocales as readonly string[]).includes(locale);

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

  // ⚠️ AI-DRAFT TRANSLATION — pending native-speaker review by the chapter.
  // Politically sensitive terms (occupation/כיבוש, Nakba/נכבה) need confirming.
  // Movement name uses its official Hebrew form "לוחמים לשלום".
  he: {
    'site.title': 'ידידי לוחמים לשלום בהולנד',
    'site.shortTitle': 'ידידי לוחמים לשלום',

    'nav.home': 'בית',
    'nav.about': 'אודות',
    'nav.events': 'אירועים',
    'nav.getInvolved': 'הצטרפו',
    'nav.contact': 'צרו קשר',

    'cta.donate': 'תרומה',
    'cta.subscribe': 'הרשמה',

    'home.mission':
      'אנו פועלים בהולנד כאחת מקבוצות התמיכה הרבות ברחבי העולם הקשורות לתנועת לוחמים לשלום. אנו פועלים יחד בדרכים לא־אלימות כדי לשים קץ לכיבוש ולהביא שלום, שוויון וביטחון לכל בני האדם באזור.',

    'home.instagram.title': 'מהאינסטגרם שלנו',
    'home.instagram.body':
      'עקבו אחר ‎@nlfcfpeace‎ לעדכונים, פעולות ואירועים קרובים.',
    'home.instagram.cta': 'עקבו באינסטגרם',

    'about.title': 'אודות',
    'about.placeholder':
      'טקסט זמני. לוחמים לשלום היא תנועה של ישראלים ופלסטינים שהניחו את נשקם ופועלים יחד בדרכים לא־אלימות נגד הכיבוש ולמען עתיד של שלום, שוויון וביטחון. קבוצת הידידים בהולנד היא אחת מקבוצות התמיכה הרבות בעולם הקשורות לתנועה.',
    'about.note':
      'זהו טקסט זמני שיוחלף במילים של הקבוצה עצמה.',

    'events.title': 'אירועים',
    'events.intro': 'מפגשים, טקסים ופעולות — קרובים ואחרונים.',
    'events.empty': 'אין אירועים מתוכננים כעת — בקרו שוב בקרוב.',
    'events.upcoming': 'קרובים',
    'events.past': 'אירועים שהיו',
    'events.dateTbc': 'התאריך טרם נקבע',
    'events.locationLabel': 'מיקום',
    'events.details': 'פרטים',

    'involved.title': 'הצטרפו',
    'involved.subscribe.title': 'הרשמה לרשימת התפוצה',
    'involved.subscribe.body':
      'הצטרפו לרשימת התפוצה שלנו כדי לשמוע על אירועים, פעולות ודרכים לתמוך בתנועה.',
    'involved.subscribe.placeholder':
      'כאן ישובץ טופס ההרשמה לרשימת התפוצה.',
    'involved.donate.title': 'תרומה',
    'involved.donate.body':
      'תרומתכם מסייעת לקיים את עבודתנו. התרומות מעובדות באופן מאובטח באמצעות Mollie.',

    'contact.title': 'צרו קשר',
    'contact.intro': 'צרו קשר או עקבו אחרינו ברשתות החברתיות.',
    'contact.emailLabel': 'אימייל',
    'contact.followLabel': 'עקבו אחרינו',

    'footer.affiliation':
      'קבוצת תמיכה עצמאית המזוהה עם תנועת לוחמים לשלום.',
    'footer.parentMovement': 'התנועה',
    'footer.credit': 'האתר נבנה על ידי',
    'language.switch': 'שפה',
  },

  // ⚠️ AI-DRAFT TRANSLATION — pending native-speaker review by the chapter.
  // Modern Standard Arabic. Sensitive terms (occupation/الاحتلال, Nakba/النكبة)
  // need confirming. Movement name uses "مقاتلون من أجل السلام".
  ar: {
    'site.title': 'أصدقاء مقاتلون من أجل السلام في هولندا',
    'site.shortTitle': 'أصدقاء مقاتلون من أجل السلام',

    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.events': 'الفعاليات',
    'nav.getInvolved': 'شارك معنا',
    'nav.contact': 'اتصلوا بنا',

    'cta.donate': 'تبرّع',
    'cta.subscribe': 'اشترك',

    'home.mission':
      'نعمل في هولندا كواحدة من مجموعات الدعم العديدة حول العالم المرتبطة بحركة مقاتلون من أجل السلام. نعمل معًا بالوسائل اللاعنفية لإنهاء الاحتلال وتحقيق السلام والمساواة والأمن لجميع الناس في المنطقة.',

    'home.instagram.title': 'من حسابنا على إنستغرام',
    'home.instagram.body':
      'تابعوا ‎@nlfcfpeace‎ للحصول على التحديثات والأنشطة والفعاليات القادمة.',
    'home.instagram.cta': 'تابعونا على إنستغرام',

    'about.title': 'من نحن',
    'about.placeholder':
      'نص مؤقّت. مقاتلون من أجل السلام حركة من الإسرائيليين والفلسطينيين الذين ألقوا سلاحهم ويعملون معًا بالوسائل اللاعنفية ضد الاحتلال ومن أجل مستقبل من السلام والمساواة والأمن. مجموعة الأصدقاء في هولندا واحدة من مجموعات الدعم العديدة حول العالم المرتبطة بالحركة.',
    'about.note':
      'هذا نص مؤقّت سيُستبدل بكلمات المجموعة نفسها.',

    'events.title': 'الفعاليات',
    'events.intro': 'لقاءات ومراسم وأنشطة — قادمة وحديثة.',
    'events.empty': 'لا توجد فعاليات مجدولة حاليًا — عودوا قريبًا.',
    'events.upcoming': 'القادمة',
    'events.past': 'فعاليات سابقة',
    'events.dateTbc': 'موعد لم يُؤكَّد بعد',
    'events.locationLabel': 'المكان',
    'events.details': 'التفاصيل',

    'involved.title': 'شارك معنا',
    'involved.subscribe.title': 'اشترك في النشرة',
    'involved.subscribe.body':
      'اشتركوا في نشرتنا البريدية لتصلكم أخبار الفعاليات والأنشطة وطرق دعم الحركة.',
    'involved.subscribe.placeholder':
      'سيتم تضمين نموذج الاشتراك في النشرة هنا.',
    'involved.donate.title': 'تبرّع',
    'involved.donate.body':
      'تساعد مساهمتكم في استمرار عملنا. تتم معالجة التبرعات بأمان عبر Mollie.',

    'contact.title': 'اتصلوا بنا',
    'contact.intro': 'تواصلوا معنا أو تابعونا على وسائل التواصل الاجتماعي.',
    'contact.emailLabel': 'البريد الإلكتروني',
    'contact.followLabel': 'تابعونا',

    'footer.affiliation':
      'مجموعة دعم مستقلة منتسبة إلى حركة مقاتلون من أجل السلام.',
    'footer.parentMovement': 'الحركة الأم',
    'footer.credit': 'الموقع من إنشاء',
    'language.switch': 'اللغة',
  },
} as const;

export type UIKey = keyof (typeof ui)['en'];

export function useTranslations(locale: Locale) {
  return function t(key: UIKey): string {
    return ui[locale][key] ?? ui[defaultLocale][key];
  };
}
