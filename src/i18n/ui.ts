// UI strings per locale. EN + NL are complete; HE + AR are a partial AI
// machine-translation draft (chrome + homepage), pending native review — keys
// they don't define fall back to English (see useTranslations).
export const languages = {
  en: 'English',
  nl: 'Nederlands',
  he: 'עברית',
  ar: 'العربية',
} as const;

export type Locale = keyof typeof languages;
export const defaultLocale: Locale = 'en';

// Hebrew + Arabic render right-to-left.
export const rtlLocales = ['he', 'ar'] as const;
export const isRtl = (locale: Locale): boolean =>
  (rtlLocales as readonly string[]).includes(locale);

export const ui = {
  en: {
    'site.title': 'Netherlands Friends of Combatants for Peace',
    'site.shortTitle': 'NL Friends of CfP',

    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.overview': 'Overview',
    'nav.ourStory': 'Our Story',
    'nav.values': 'Our Values',
    'nav.whatWeDo': 'What We Do',
    'nav.team': 'Team',
    'nav.events': 'Events',
    'nav.news': 'News',
    'nav.getInvolved': 'Get Involved',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Close',

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
    'contact.intro':
      'We’d love to hear from you — whether you have a question, want to help, or would like to support the movement from the Netherlands.',
    'contact.emailLabel': 'Email',
    'contact.followLabel': 'Follow us',
    'contact.bring':
      'Want us to bring a film screening or a talk to your group, school or community? Just send us a message.',

    // About
    'about.lead':
      'Netherlands Friends of Combatants for Peace is a volunteer support group, based in the Netherlands, connected to Combatants for Peace — the Israeli–Palestinian movement working non-violently to end the occupation and build a future of peace, equality and security for everyone living between the Jordan River and the Mediterranean Sea.',
    'about.movementTitle': 'The movement',
    'about.movementBody':
      'Combatants for Peace is a grassroots, bi-national movement of Israelis and Palestinians. Many of its members once took an active part in the conflict — as soldiers in the Israeli army or as fighters in the Palestinian struggle — and have chosen to lay down their weapons and work together, non-violently, for peace.',
    'about.chapterTitle': 'What we do from the Netherlands',
    'about.chapterBody':
      'As one of many support groups around the world, we help carry the movement’s message here: sharing their work, hosting film screenings and events, and growing a community of people in the Netherlands who stand for a just and peaceful future for Palestinians and Israelis alike.',
    'about.exploreTitle': 'Learn more',

    // Our Story
    'story.title': 'Our Story',
    'story.lead':
      'Combatants for Peace began with an unlikely meeting — between people who had stood on opposite sides of the same conflict.',
    'story.beginningTitle': 'How it began',
    'story.beginningBody':
      'In 2005, a group of Israeli combat veterans who had refused to serve in the occupied territories met with a group of former Palestinian fighters. Both sides had reached the same decision: to stop taking part in the cycle of violence and to look for another way. After meeting quietly over the course of a year, they founded Combatants for Peace together in 2006.',
    'story.uniqueBody':
      'It is the only peace movement in the world founded and run jointly by former combatants from both sides of an active conflict. Today its members also include many people — women and men — who never carried a weapon but share the same commitment to non-violence.',
    'story.foundersTitle': 'From enemies to partners',
    'story.foundersBody':
      'Co-founders Chen Alon, an Israeli, and Sulaiman Khatib, a Palestinian, have twice been nominated together for the Nobel Peace Prize. Their journey — and the movement’s — is told in the films Disturbing the Peace (2016) and There Is Another Way (2025).',

    // Our Values (the movement’s own six)
    'values.title': 'Our Values',
    'values.lead': 'Six values guide the movement’s work — in its own words.',
    'values.nonviolence.title': 'Nonviolence',
    'values.nonviolence.body':
      'Non-violence as both a tactic and a way of life — peaceful, creative resistance.',
    'values.coresistance.title': 'Co-resistance',
    'values.coresistance.body':
      'Israeli and Palestinian partners resisting oppression together, while openly acknowledging the deep imbalance of power between them.',
    'values.liberation.title': 'Collective Liberation',
    'values.liberation.body':
      'The Israeli and Palestinian struggles for dignity and freedom are bound together. As the movement puts it: nobody is free until everybody is free.',
    'values.justice.title': 'Peace rooted in Justice & Equality',
    'values.justice.body':
      'A real peace built on justice and equality — not simply an end to the fighting or a return to how things were.',
    'values.humanity.title': 'Shared Humanity',
    'values.humanity.body':
      'Not “us or them,” but “us and them” — refusing to treat suffering as a competition.',
    'values.transformation.title': 'Personal Transformation',
    'values.transformation.body':
      'Change begins with the individual. The founders’ own journey, from enemies to allies, is proof that it is possible.',

    // What We Do
    'do.title': 'What We Do',
    'do.lead':
      'The movement’s work takes many forms — on the ground, in classrooms and in public.',
    'do.ceremonies.title': 'Joint ceremonies',
    'do.ceremonies.body':
      'Each year the movement holds the Joint Israeli–Palestinian Memorial Ceremony, together with the Parents Circle–Families Forum, where bereaved families from both sides mourn together. In 2023 it drew more than 15,000 people in person and around 200,000 online. The movement also holds a Joint Nakba Remembrance Ceremony.',
    'do.education.title': 'Education',
    'do.education.body':
      'Israeli and Palestinian “Freedom Schools” and courses help people understand the reality of the occupation and imagine an alternative.',
    'do.ground.title': 'On the ground',
    'do.ground.body':
      'Members take part in olive harvests and tree planting, and offer protective presence to communities in the West Bank and the Jordan Valley.',
    'do.advocacy.title': 'Advocacy & community',
    'do.advocacy.body':
      'Monthly joint protests, a bi-national women’s group, speaking tours abroad, and work within a wider human-rights coalition.',
    'do.hereTitle': 'And here in the Netherlands',
    'do.hereBody':
      'From the Netherlands, we mainly bring this work to a Dutch audience — through film screenings, talks and events. See our Events page for what’s coming up.',

    // Get Involved (additions)
    'involved.lead':
      'There are several ways to support a just and peaceful future for Israelis and Palestinians from here in the Netherlands.',
    'involved.attend.title': 'Come to an event',
    'involved.attend.body':
      'Join a film screening, talk or action. Upcoming gatherings are listed on our Events page.',
    'involved.attend.cta': 'See events',
    'involved.follow.title': 'Follow along',
    'involved.follow.body':
      'Follow @nlfcfpeace on Instagram for updates, actions and upcoming events.',

    // Team
    'team.title': 'Team',
    'team.lead':
      'Netherlands Friends of Combatants for Peace is run by a small group of volunteers.',
    'team.placeholder':
      'We’re still putting together short introductions to the people behind the chapter. Check back soon — or get in touch if you’d like to get involved.',

    // News
    'news.title': 'News',
    'news.lead':
      'The quickest way to follow what we’re doing is on Instagram, where we post updates, actions and upcoming events.',

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
    'nav.overview': 'Overzicht',
    'nav.ourStory': 'Ons verhaal',
    'nav.values': 'Onze waarden',
    'nav.whatWeDo': 'Wat we doen',
    'nav.team': 'Team',
    'nav.events': 'Activiteiten',
    'nav.news': 'Nieuws',
    'nav.getInvolved': 'Doe mee',
    'nav.contact': 'Contact',
    'nav.menu': 'Menu',
    'nav.close': 'Sluiten',

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
    'contact.intro':
      'We horen graag van je — of je nu een vraag hebt, wilt helpen, of de beweging vanuit Nederland wilt steunen.',
    'contact.emailLabel': 'E-mail',
    'contact.followLabel': 'Volg ons',
    'contact.bring':
      'Wil je dat we een filmvertoning of een lezing bij jouw groep, school of gemeenschap verzorgen? Stuur ons gerust een bericht.',

    // About
    'about.lead':
      'Netherlands Friends of Combatants for Peace is een vrijwilligersgroep in Nederland, verbonden aan Combatants for Peace — de Israëlisch–Palestijnse beweging die zich geweldloos inzet om de bezetting te beëindigen en te bouwen aan een toekomst van vrede, gelijkheid en veiligheid voor iedereen tussen de Jordaan en de Middellandse Zee.',
    'about.movementTitle': 'De beweging',
    'about.movementBody':
      'Combatants for Peace is een binationale grassroots-beweging van Israëli’s en Palestijnen. Veel leden hebben ooit actief deelgenomen aan het conflict — als soldaat in het Israëlische leger of als strijder in de Palestijnse strijd — en hebben ervoor gekozen hun wapens neer te leggen en samen, geweldloos, aan vrede te werken.',
    'about.chapterTitle': 'Wat we vanuit Nederland doen',
    'about.chapterBody':
      'Als een van de vele steungroepen wereldwijd helpen we de boodschap van de beweging hier uit te dragen: we delen hun werk, organiseren filmvertoningen en evenementen, en bouwen aan een gemeenschap in Nederland die staat voor een rechtvaardige en vreedzame toekomst voor Palestijnen en Israëli’s.',
    'about.exploreTitle': 'Lees meer',

    // Our Story
    'story.title': 'Ons verhaal',
    'story.lead':
      'Combatants for Peace begon met een onwaarschijnlijke ontmoeting — tussen mensen die aan tegenovergestelde kanten van hetzelfde conflict hadden gestaan.',
    'story.beginningTitle': 'Hoe het begon',
    'story.beginningBody':
      'In 2005 ontmoette een groep Israëlische oud-strijders die hadden geweigerd in de bezette gebieden te dienen een groep voormalige Palestijnse strijders. Beide kanten hadden dezelfde beslissing genomen: stoppen met deelnemen aan de cyclus van geweld en op zoek gaan naar een andere weg. Na een jaar lang in stilte bijeen te zijn gekomen, richtten ze in 2006 samen Combatants for Peace op.',
    'story.uniqueBody':
      'Het is de enige vredesbeweging ter wereld die gezamenlijk is opgericht en wordt geleid door voormalige strijders van beide kanten van een actief conflict. Tegenwoordig bestaan de leden ook uit veel mensen — vrouwen en mannen — die nooit een wapen hebben gedragen, maar dezelfde toewijding aan geweldloosheid delen.',
    'story.foundersTitle': 'Van vijanden tot partners',
    'story.foundersBody':
      'Medeoprichters Chen Alon, een Israëli, en Sulaiman Khatib, een Palestijn, zijn twee keer samen genomineerd voor de Nobelprijs voor de Vrede. Hun verhaal — en dat van de beweging — wordt verteld in de films Disturbing the Peace (2016) en There Is Another Way (2025).',

    // Onze waarden (de zes van de beweging)
    'values.title': 'Onze waarden',
    'values.lead':
      'Zes waarden vormen de leidraad voor het werk van de beweging — in haar eigen woorden.',
    'values.nonviolence.title': 'Geweldloosheid',
    'values.nonviolence.body':
      'Geweldloosheid als zowel tactiek als manier van leven — vreedzaam, creatief verzet.',
    'values.coresistance.title': 'Gezamenlijk verzet',
    'values.coresistance.body':
      'Israëlische en Palestijnse partners die samen verzet bieden tegen onderdrukking, met open erkenning van de diepe ongelijkheid in macht tussen hen.',
    'values.liberation.title': 'Collectieve bevrijding',
    'values.liberation.body':
      'De Israëlische en Palestijnse strijd voor waardigheid en vrijheid zijn met elkaar verbonden. Zoals de beweging het zegt: niemand is vrij totdat iedereen vrij is.',
    'values.justice.title': 'Vrede geworteld in recht en gelijkheid',
    'values.justice.body':
      'Een echte vrede gebouwd op rechtvaardigheid en gelijkheid — niet simpelweg een einde aan de gevechten of een terugkeer naar hoe het was.',
    'values.humanity.title': 'Gedeelde menselijkheid',
    'values.humanity.body':
      'Niet “wij of zij,” maar “wij en zij” — weigeren om lijden als een wedstrijd te behandelen.',
    'values.transformation.title': 'Persoonlijke transformatie',
    'values.transformation.body':
      'Verandering begint bij het individu. De eigen reis van de oprichters, van vijanden tot bondgenoten, is het bewijs dat het mogelijk is.',

    // Wat we doen
    'do.title': 'Wat we doen',
    'do.lead':
      'Het werk van de beweging kent vele vormen — op de grond, in klaslokalen en in het openbaar.',
    'do.ceremonies.title': 'Gezamenlijke ceremonies',
    'do.ceremonies.body':
      'Elk jaar houdt de beweging de Gezamenlijke Israëlisch–Palestijnse Herdenkingsceremonie, samen met het Parents Circle–Families Forum, waar nabestaanden van beide kanten samen rouwen. In 2023 trok deze meer dan 15.000 mensen ter plaatse en ongeveer 200.000 online. De beweging houdt ook een Gezamenlijke Nakba-herdenkingsceremonie.',
    'do.education.title': 'Educatie',
    'do.education.body':
      'Israëlische en Palestijnse “Freedom Schools” en cursussen helpen mensen de realiteit van de bezetting te begrijpen en zich een alternatief voor te stellen.',
    'do.ground.title': 'Op de grond',
    'do.ground.body':
      'Leden nemen deel aan olijfoogsten en het planten van bomen, en bieden beschermende aanwezigheid aan gemeenschappen op de Westelijke Jordaanoever en in de Jordaanvallei.',
    'do.advocacy.title': 'Belangenbehartiging en gemeenschap',
    'do.advocacy.body':
      'Maandelijkse gezamenlijke protesten, een binationale vrouwengroep, spreekreizen in het buitenland, en werk binnen een bredere mensenrechtencoalitie.',
    'do.hereTitle': 'En hier in Nederland',
    'do.hereBody':
      'Vanuit Nederland brengen we dit werk vooral bij een Nederlands publiek — via filmvertoningen, lezingen en evenementen. Bekijk onze pagina Activiteiten voor wat eraan komt.',

    // Doe mee (aanvullingen)
    'involved.lead':
      'Er zijn verschillende manieren om vanuit Nederland een rechtvaardige en vreedzame toekomst voor Israëli’s en Palestijnen te steunen.',
    'involved.attend.title': 'Kom naar een evenement',
    'involved.attend.body':
      'Bezoek een filmvertoning, lezing of actie. Aankomende bijeenkomsten staan op onze pagina Activiteiten.',
    'involved.attend.cta': 'Bekijk activiteiten',
    'involved.follow.title': 'Blijf op de hoogte',
    'involved.follow.body':
      'Volg @nlfcfpeace op Instagram voor updates, acties en aankomende activiteiten.',

    // Team
    'team.title': 'Team',
    'team.lead':
      'Netherlands Friends of Combatants for Peace wordt gerund door een kleine groep vrijwilligers.',
    'team.placeholder':
      'We stellen nog korte introducties samen van de mensen achter de afdeling. Kom binnenkort terug — of neem contact op als je wilt meedoen.',

    // Nieuws
    'news.title': 'Nieuws',
    'news.lead':
      'De snelste manier om te volgen wat we doen is via Instagram, waar we updates, acties en aankomende evenementen plaatsen.',

    'footer.affiliation':
      'Een onafhankelijke steungroep, verbonden aan Combatants for Peace.',
    'footer.parentMovement': 'Moederbeweging',
    'footer.credit': 'Gemaakt door',
    'language.switch': 'Taal',
  },

  // ⚠️ Hebrew — AI machine-translation draft (chrome + homepage), native review
  // pending. Untranslated keys (the new content-page bodies) fall back to EN.
  he: {
    'site.title': 'ידידי לוחמים לשלום בהולנד',
    'site.shortTitle': 'ידידי לוחמים לשלום',

    'nav.home': 'בית',
    'nav.about': 'אודות',
    'nav.overview': 'סקירה',
    'nav.ourStory': 'הסיפור שלנו',
    'nav.values': 'הערכים שלנו',
    'nav.whatWeDo': 'מה אנחנו עושים',
    'nav.team': 'הצוות',
    'nav.events': 'אירועים',
    'nav.news': 'חדשות',
    'nav.getInvolved': 'הצטרפו',
    'nav.contact': 'צרו קשר',
    'nav.menu': 'תפריט',
    'nav.close': 'סגירה',

    'cta.donate': 'תרומה',
    'cta.subscribe': 'הרשמה',

    'home.hero.eyebrow': 'הסניף ההולנדי · לוחמים לשלום',
    'home.hero.headline': 'ישראלים ופלסטינים, זה לצד זה.',
    'home.mission':
      'אנו פועלים בהולנד כאחת מקבוצות התמיכה הרבות ברחבי העולם הקשורות לתנועת לוחמים לשלום. אנו פועלים יחד בדרכים לא־אלימות כדי לשים קץ לכיבוש ולהביא שלום, שוויון וביטחון לכל בני האדם באזור.',

    'home.instagram.title': 'מהאינסטגרם שלנו',
    'home.instagram.body':
      'עקבו אחר ‎@nlfcfpeace‎ לעדכונים, פעולות ואירועים קרובים.',
    'home.instagram.cta': 'עקבו באינסטגרם',

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

  // ⚠️ Arabic — AI machine-translation draft (chrome + homepage), native review
  // pending. Untranslated keys (the new content-page bodies) fall back to EN.
  ar: {
    'site.title': 'أصدقاء مقاتلون من أجل السلام في هولندا',
    'site.shortTitle': 'أصدقاء مقاتلون من أجل السلام',

    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.overview': 'نظرة عامة',
    'nav.ourStory': 'قصتنا',
    'nav.values': 'قيمنا',
    'nav.whatWeDo': 'ما الذي نقوم به',
    'nav.team': 'الفريق',
    'nav.events': 'الفعاليات',
    'nav.news': 'الأخبار',
    'nav.getInvolved': 'شارك معنا',
    'nav.contact': 'اتصلوا بنا',
    'nav.menu': 'القائمة',
    'nav.close': 'إغلاق',

    'cta.donate': 'تبرّع',
    'cta.subscribe': 'اشترك',

    'home.hero.eyebrow': 'الفرع الهولندي · مقاتلون من أجل السلام',
    'home.hero.headline': 'إسرائيليون وفلسطينيون، جنبًا إلى جنب.',
    'home.mission':
      'نعمل في هولندا كواحدة من مجموعات الدعم العديدة حول العالم المرتبطة بحركة مقاتلون من أجل السلام. نعمل معًا بالوسائل اللاعنفية لإنهاء الاحتلال وتحقيق السلام والمساواة والأمن لجميع الناس في المنطقة.',

    'home.instagram.title': 'من حسابنا على إنستغرام',
    'home.instagram.body':
      'تابعوا ‎@nlfcfpeace‎ للحصول على التحديثات والأنشطة والفعاليات القادمة.',
    'home.instagram.cta': 'تابعونا على إنستغرام',

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
    // HE/AR are partial drafts — any key they don't define falls back to English.
    const dict = ui[locale] as Partial<Record<UIKey, string>>;
    return dict[key] ?? ui[defaultLocale][key];
  };
}
