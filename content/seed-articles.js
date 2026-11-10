// Seed articles loaded into the database on first run.
import { yemenTaiz } from "./articles/yemen-taiz-siege.js";
// After the first run, all editing happens in the admin area (/admin) —
// changes made there are stored in the database, not in this file.
//
// IMPORTANT FOR THE EDITOR: these six pieces were researched and drafted as
// launch samples, using sources verified on 10 November 2026. Review every
// article before you put your name to it publicly, and re-check fast-moving
// figures (casualty counts, case numbers) on the day you publish.

export const seedArticles = [
  yemenTaiz,
  // ─────────────────────────────────────────────────────────────── SUDAN
  {
    slug: "el-fasher-after-the-fall",
    title: "El-Fasher After the Fall: A City Trapped Between Violence, Fear and International Indifference",
    dek: "A year after the Rapid Support Forces seized the capital of North Darfur, a city of more than a million people has been reduced to fewer than 70,000. The evidence of what happened is mounting. The will to act on it is not.",
    kicker: "Sudan · One year on",
    section: "conflict",
    type: "Report",
    tags: ["Sudan", "Darfur", "Human Rights", "Accountability"],
    featured: true,
    editorsPick: true,
    publishedAt: "2026-11-09T07:00:00.000Z",
    lastVerified: "2026-11-10",
    hero: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/36/ElFasherDarfurSudan_RomanDeckert18022015.jpg/1920px-ElFasherDarfurSudan_RomanDeckert18022015.jpg",
      alt: "Displaced women sit beside sacks of charcoal for sale at a market in El Fasher, North Darfur.",
      caption:
        "Archive photograph, February 2015: displaced women sell charcoal at a market in El Fasher. The image predates the current war and the city's capture by the RSF in October 2025; it is used to show the city and its long history of displacement, not recent events.",
      credit: "Roman Deckert",
      license: "CC BY-SA 4.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/4.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:ElFasherDarfurSudan_RomanDeckert18022015.jpg",
    },
    ledger: [
      { kind: "fact", text: "The RSF took control of El Fasher in late October 2025 after a siege that began in 2024. It was the Sudanese army's last major stronghold in Darfur." },
      { kind: "fact", text: "Humanitarian organisations estimate that fewer than 70,000 people remain in a city whose pre-war population was more than one million (Amnesty International, October 2026)." },
      { kind: "fact", text: "Amnesty International interviewed 25 people in August and September 2026 — 19 residents and six humanitarian workers — who described detention, torture, killings, ransom demands and forced labour." },
      { kind: "allegation", text: "More than 6,000 people are believed to have been killed in the assault on the city and along the escape routes. The final toll has not been independently established." },
      { kind: "official", text: "The RSF has previously denied targeting civilians while acknowledging abuses by some of its fighters." },
      { kind: "official", text: "The United Arab Emirates denies arming the RSF. Amnesty International and UN experts have reported evidence of continued supply in breach of the Darfur arms embargo." },
      { kind: "unresolved", text: "How many people were killed, where the missing are, and whether any commander will face trial." },
    ],
    sources: [
      { title: "Sudan: El Fasher civilians suffer unlawful killings, detention and torture one year after city's capture by the RSF", publisher: "Amnesty International", url: "https://www.amnesty.org/en/latest/news/2026/10/sudan-el-fasher-civilians-suffer-unlawful-killings-detention-and-torture-one-year-after-citys-capture-by-the-rsf-new-testimony/", date: "October 2026" },
      { title: "Darfur survivors vow to tell story of those killed after Sudan camp attacks", publisher: "Al Jazeera", url: "https://aljazeera.com/features/2026/11/3/darfur-survivors-vow-to-tell-story-of-those-killed-after-sudan-camp-attacks", date: "3 November 2026" },
      { title: "El-Fasher becomes 'ghost town' as RSF crimes continue on anniversary of takeover", publisher: "The New Arab", url: "https://www.newarab.com/news/el-fasher-becomes-ghost-town-rsf-crimes-continue", date: "October 2026" },
      { title: "Yale Humanitarian Research Lab satellite analysis of El Fasher, as reported", publisher: "Breakthrough News", url: "https://breakthroughnews.org/2026/11/05/vegetation-is-claiming-el-fasher-one-year-after-it-was-depopulated-by-the-rsf/", date: "5 November 2026" },
      { title: "Darfur situation (ICC-02/05) — referred by UN Security Council Resolution 1593", publisher: "International Criminal Court", url: "https://www.icc-cpi.int/darfur", date: "" },
    ],
    body: `
In the satellite images, the markets of El Fasher are turning green. According to an analysis by the Yale Humanitarian Research Lab published on 28 October, vegetation has begun to grow over at least five of the city's market areas — the signature, its analysts wrote, of an "absent pattern of life". Only one neighbourhood, Daraja Oula, still shows consistent signs of human activity, and that activity is centred on the Rapid Support Forces.

A year after the RSF seized the capital of North Darfur, that is what remains of a city that once held more than a million people. Humanitarian organisations now estimate the population at fewer than 70,000.

This is not a story about a city that emptied. It is a story about a city that was emptied — and about how much the world knew, and how little it did, before, during and after.

## What happened

Sudan's war began on 15 April 2023, when the long rivalry between the Sudanese Armed Forces (SAF), led by General Abdel Fattah al-Burhan, and the RSF, led by Mohamed Hamdan Dagalo, known as Hemedti, turned into open fighting in Khartoum. Within months the RSF had taken most of Darfur. El Fasher, the regional capital of North Darfur, held out.

By 2024 the city was under siege. Its population was swollen by people who had already fled earlier violence, many of them living in camps such as Zamzam and Abu Shouk on the city's edges. In April 2025 the RSF overran Zamzam. In late October 2025, after more than a year of encirclement, bombardment and starvation, El Fasher fell.

What followed has been documented by survivors, humanitarian workers, satellite analysts and human rights researchers. More than 6,000 people are believed to have been killed in the assault on the city and on the routes out of it. That figure is an estimate, not a count, and it may never be finalised: many of those who fled have not been accounted for.

## What the evidence shows

In August and September 2026, Amnesty International interviewed 25 people — 19 residents and six humanitarian workers. Their accounts, published in October, describe a city still governed by fear a year after its capture.

> "A pervasive pall of fear hangs over El Fasher today." — Agnès Callamard, Secretary General, Amnesty International

According to Amnesty's findings, schools have been turned into de facto detention centres where women, children and older or injured men are held in conditions of extreme hunger. Detainees described witnessing killings and torture in prisons including Shala. Most were released only after their families paid ransoms — which, according to residents' accounts reported by Al Jazeera, can reach $10,000 — or after they escaped.

Survivors also described forced labour: men and women made to collect corpses and rubble, or to cook and clean for fighters without pay. Amnesty reported that people from the Zaghawa and Masalit communities were more likely to be detained and abused — a pattern that echoes the ethnic dimension of violence in Darfur since 2003, and of the RSF's campaign in West Darfur in 2023.

Some humanitarian organisations have returned since September 2026. But according to Amnesty, the RSF closely monitors their movements and residents are not free to speak to them. Officials assess that famine — the most severe level on the Integrated Food Security Phase Classification scale — is highly likely in North Darfur, including El Fasher, in the coming months.

## Who is responsible

The immediate responsibility for abuses committed in El Fasher since October 2025 lies with those who controlled the city: the RSF. The documentation of killings, arbitrary detention, torture and forced labour is now extensive, and it comes from multiple independent sources.

The RSF has previously denied targeting civilians while acknowledging abuses by some of its fighters. That distinction — between the conduct of a force and the conduct of individuals within it — is one that the evidence increasingly strains. Detention in schools, ransom systems and forced labour require organisation.

Responsibility does not stop with one armed group. The SAF has also been accused by UN investigators and rights groups of serious violations elsewhere in the war, including indiscriminate aerial bombardment of populated areas. The people of El Fasher were trapped between two forces that have both shown disregard for civilian life.

And there is the question of supply. Amnesty International has called on states to halt arms transfers to the United Arab Emirates until it stops supplying the RSF in violation of the UN arms embargo on Darfur. The UAE denies arming the RSF. That denial should be reported. So should the volume of evidence that contradicts it, which has been accumulating in reports by UN experts, researchers and journalists since 2023.

## Who benefits, and who suffers

Control of El Fasher gave the RSF control of every state capital in Darfur, consolidating a territorial base in western Sudan from which it has sought political legitimacy, including through a rival administration. For the RSF's backers, it strengthened a partner with access to gold, trade routes and borders with Chad, Libya and the Central African Republic.

The people who suffer are easier to name. They are the residents who did not survive the assault; the survivors detained in schools; the families paying ransoms they cannot afford; the hundreds of thousands who fled to Tawila, to other parts of Darfur, or across the border into Chad, where towns such as Adre were already hosting vast numbers of Sudanese refugees.

## The international response

The war in Sudan has never lacked statements. In January 2025, the United States determined that members of the RSF and allied militias had committed genocide in Darfur. A diplomatic group of the United States, Saudi Arabia, the UAE and Egypt — the so-called Quad — proposed in September 2025 a humanitarian truce followed by a political process. As of this writing, no durable ceasefire has taken hold, and the war is now in its fourth year.

Amnesty's recommendations are specific: the immediate release of everyone arbitrarily detained; an end to torture, unlawful killings and forced labour; an immediate ceasefire and the deployment of an international force to protect civilians; a halt to arms supplies to all parties; and the extension of the UN Security Council's Darfur arms embargo to the rest of Sudan.

None of these is new. Each has been proposed before. The gap between what is documented and what is done is the real subject of this story.

## The question of accountability

The International Criminal Court has jurisdiction over Darfur through a referral by the UN Security Council in 2005, Resolution 1593. That referral produced the first ICC trial concerning the region: in October 2025 the court convicted Ali Kushayb, a former Janjaweed militia leader, for crimes committed two decades earlier. The verdict demonstrated that accountability is possible. It also showed how long it can take.

> The gap between what is documented and what is done is the real subject of this story.

The evidence from El Fasher — survivor testimony, satellite imagery, the records of humanitarian groups — is being gathered now, while memories are fresh and sites are still visible from orbit. Whether it is ever used in a courtroom will depend on decisions taken not in Darfur but in New York, The Hague, Abu Dhabi, Washington and the capitals of Sudan's neighbours.

## What remains unanswered

How many people were killed in El Fasher, and where are the missing? Who commanded the units that ran detention sites in the city's schools? What weapons and vehicles were used in the assault, and how did they enter Sudan? Why did repeated warnings, over more than a year of siege, not produce protection for civilians? And will anyone who gave orders in El Fasher ever be required to answer for them?

AL-HAQQ will continue to follow these questions. If you have documentation relevant to this reporting, you can write to the editor through our contact page.
`,
  },

  // ─────────────────────────────────────────────────────────────── EBOLA / DRC
  {
    slug: "ebola-crisis-in-congo-regional-security",
    title: "The Ebola Crisis in Congo: When an Outbreak Becomes a Regional Security Concern",
    dek: "The Bundibugyo outbreak in eastern Congo is now the largest Ebola epidemic the country has recorded. It is spreading in a region where armed conflict, displacement and distrust have made the work of health workers dangerous — and where there is still no approved vaccine.",
    kicker: "DR Congo · Public health",
    section: "conflict",
    type: "Report",
    tags: ["DR Congo", "Uganda", "Public Health", "Regional Security"],
    editorsPick: true,
    publishedAt: "2026-11-05T07:00:00.000Z",
    lastVerified: "2026-11-10",
    updateNote:
      "Developing story. Case figures are taken from the WHO Disease Outbreak News of 8 October 2026 (data to 6 October). Later national figures are higher; check WHO for the latest.",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Health_workers_prepare_to_bury_an_infant_during_the_Ebola_breakout_in_Bembi_in_DR_Congo_%C2%A9_UNOCHA_Priscilla_Lecomte_%28No_cropped%29.jpg",
      alt: "Red Cross volunteers in protective equipment prepare a safe and dignified burial near Bunia, Ituri province.",
      caption:
        "Bembei, 17km from Bunia, Ituri, August 2026: Democratic Republic of Congo Red Cross volunteers carry out a safe and dignified burial of an infant after an alert about a suspected Ebola case.",
      credit: "Priscilla Lecomte / UN OCHA",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
      sourceUrl:
        "https://commons.wikimedia.org/wiki/File:Health_workers_prepare_to_bury_an_infant_during_the_Ebola_breakout_in_Bembi_in_DR_Congo_%C2%A9_UNOCHA_Priscilla_Lecomte_(No_cropped).jpg",
    },
    ledger: [
      { kind: "fact", text: "WHO reported 8,728 confirmed cases and 4,205 confirmed deaths in DR Congo as of 6 October 2026 — a crude case fatality ratio of 48.2%." },
      { kind: "fact", text: "Cases have been confirmed in 64 health zones across seven provinces: Bas-Uélé, Haut-Uélé, Ituri, North Kivu, South Kivu, Sud-Ubangi and Tshopo. Ituri is the epicentre." },
      { kind: "fact", text: "There is no licensed vaccine or approved specific treatment for Bundibugyo virus disease. Clinical trials of candidate treatments and vaccines are under way." },
      { kind: "official", text: "WHO assesses the risk in DR Congo as \"very high\". The event has been declared a Public Health Emergency of International Concern." },
      { kind: "fact", text: "Uganda recorded 20 confirmed cases before declaring its outbreak over. Cases linked to the DRC have also been confirmed in Kenya and among international responders evacuated to Europe." },
      { kind: "unresolved", text: "How many cases have gone undetected in areas responders cannot safely reach." },
    ],
    sources: [
      { title: "Ebola disease caused by Bundibugyo virus — Democratic Republic of the Congo (DON619)", publisher: "World Health Organization", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON619", date: "8 October 2026" },
      { title: "Ebola disease caused by Bundibugyo virus, DRC & Uganda (DON613)", publisher: "World Health Organization", url: "https://www.who.int/emergencies/disease-outbreak-news/item/2026-DON613", date: "2026" },
      { title: "Ebola outbreak — DRC 2026 (situation page)", publisher: "World Health Organization", url: "https://www.who.int/emergencies/situations/ebola-outbreak---drc-2026", date: "Ongoing" },
      { title: "Ongoing outbreak in the Democratic Republic of the Congo", publisher: "WHO Regional Office for Africa", url: "https://www.afro.who.int/health-topics/ebola-disease/outbreak-drc-26", date: "Ongoing" },
      { title: "Safety fears limit Ebola response in Congo, with more than 12 attacks recorded", publisher: "Associated Press (via WSB-TV)", url: "https://www.wsbtv.com/news/world/safety-fears-limit/GAE52QJMLY3Q3FA57YEC3MNMTU/", date: "18 July 2026" },
    ],
    body: `
Ebola has visited the Democratic Republic of Congo many times. But the outbreak now moving through the country's north-east is different in three ways that matter. It is caused by Bundibugyo virus, a species for which there is no licensed vaccine. It is the largest Ebola outbreak the country has ever recorded. And it is spreading through a region where armed conflict, mass displacement and deep distrust of authority have made the basic tasks of an outbreak response — finding cases, tracing contacts, burying the dead safely — dangerous.

## What happened

The outbreak was confirmed in May 2026 in Ituri province, after samples from patients with haemorrhagic symptoms tested negative for the more familiar Zaire ebolavirus and were sent for further analysis. Sequencing identified Bundibugyo virus. It is only the second documented Bundibugyo outbreak in the DRC, after one in 2012.

Within days, the World Health Organization had declared the outbreak a Public Health Emergency of International Concern. In its Disease Outbreak News published on 8 October, WHO reported 8,728 confirmed cases and 4,205 confirmed deaths in the DRC as of 6 October — a crude case fatality ratio of 48.2%. Cases had been confirmed in 64 health zones across seven of the country's 26 provinces, with Ituri the epicentre and Beni, Katwa, Rwampara, Bunia and Mandima among the worst-affected health zones.

National situation reports compiled since then put the number of confirmed cases well above 10,000. AL-HAQQ uses WHO's published figure as its reference point and will update this article as WHO publishes new data.

WHO assesses the risk in the DRC as "very high".

## Why it spread

Ebola spreads through contact with the bodily fluids of sick people and the bodies of the dead. Containing it depends on detecting cases quickly, isolating patients, following up their contacts and ensuring burials are safe. Each of those steps depends on trust and access.

In eastern Congo, both are scarce. Ituri and North Kivu have endured decades of conflict involving dozens of armed groups. Millions of people have been displaced, many more than once. People on the move are harder to trace, and crowded displacement sites make transmission easier.

The 2018–2020 Ebola epidemic in North Kivu and Ituri — the second-largest in history — showed what happens when an outbreak meets insecurity. Treatment centres were attacked and health workers were killed. Community resistance, rooted in suspicion of outsiders and of a response that was sometimes better funded than the health system around it, slowed containment for months.

## The danger to health workers

That history is repeating. In July, the Associated Press reported that at least a dozen attacks on health facilities and workers had been recorded in the worst-affected region. According to the response's incident manager, many were carried out by angry crowds who stormed treatment centres or targeted teams in the field. Some responders had been held captive. Several humanitarian partners temporarily withdrew staff from remote hotspots to Bunia, the provincial capital, which is relatively safer.

Health workers in Ituri have also gone on strike over unpaid salaries — a reminder that the people expected to contain the outbreak are themselves working inside a weak and underfunded system.

> The people expected to contain the outbreak are themselves working inside a weak and underfunded system.

The risk to responders is not only from violence. In early October, a healthcare worker who had tested positive for Bundibugyo virus while working on the response was medically evacuated to the Netherlands. Earlier, a doctor returning from a humanitarian mission was confirmed as a case in France. Frontline staff — national and international — are among those most exposed.

## A regional security concern

Ebola does not stop at borders, and eastern Congo's borders are porous by design: they are lines across communities that share languages, markets and families. Uganda declared an outbreak in May after an imported case, recorded 20 confirmed cases and later declared the outbreak over. In October, Kenya confirmed a case in a resident of the DRC who had travelled through Uganda, prompting contact tracing in both countries.

The region's governments therefore face the same dilemma they faced in 2019: border controls may slow the virus, but closing crossings also drives people towards informal routes where no one is screening them, and damages livelihoods that depend on cross-border trade.

There is also a security dimension in the narrower sense. Parts of North Kivu are controlled by the M23 armed group, and other areas of Ituri and North Kivu are contested by armed groups including the ADF. A public health response requires access negotiated with whoever controls the ground. When health becomes entangled with conflict — when armed actors can grant or deny access to vaccinators — epidemics become a matter of politics.

## The response

WHO, the DRC's health ministry, Africa CDC and partners including the Red Cross and medical NGOs have deployed teams for surveillance, isolation, treatment, contact tracing and safe burials. Because there is no approved vaccine or specific treatment for Bundibugyo virus disease, much of the scientific response is happening in parallel: WHO has convened advisory groups to prioritise candidate vaccines, and patient enrolment in a clinical trial of treatments began in July.

The absence of a licensed vaccine is itself a story about priorities. Vaccines against Zaire ebolavirus transformed outbreak responses after 2019. Research on other Ebola species — which, by definition, affect fewer people until they suddenly do — received far less investment.

## Who suffers, and what remains unanswered

The people who suffer most are those with the least protection: families in remote health zones, displaced people in crowded sites, and health workers who are unpaid, under-equipped and sometimes attacked.

Several questions remain open. How many cases are going undetected in areas responders cannot safely reach? Will candidate vaccines be available at scale in time to change the course of this outbreak? Who will pay for a response that may need to continue for many months? And will the lessons of 2018–2020 — that community trust is not a soft add-on but the foundation of epidemic control — be applied this time?
`,
  },

  // ─────────────────────────────────────────────────────────────── KENYA
  {
    slug: "eastleigh-collapsed-building-who-is-accountable",
    title: "Eastleigh's Collapsed Building: Beyond the Rubble, Who Is Accountable?",
    dek: "Eight people died when an 18-storey building under construction came down on 9th Street in October. Shops were trading on its lower floors without an occupation certificate. More than two weeks later, no one has been charged — and the agencies responsible for building safety disagree about who should have stopped it.",
    kicker: "Kenya · Accountability",
    section: "investigations",
    type: "Investigation",
    tags: ["Kenya", "Accountability", "Governance"],
    editorsPick: true,
    publishedAt: "2026-11-08T07:00:00.000Z",
    lastVerified: "2026-11-10",
    hero: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/12/Garissa_Market%2C_Eastleigh_in_Nairobi.jpg/1920px-Garissa_Market%2C_Eastleigh_in_Nairobi.jpg",
      alt: "A busy street of shops and multi-storey commercial buildings in Eastleigh, Nairobi.",
      caption:
        "Archive photograph: commercial buildings around Garissa Market in Eastleigh, Nairobi. This image does not show the building that collapsed on 23 October 2026 and was taken years earlier; it shows the dense commercial district in which the collapse occurred.",
      credit: "Dan Kori / korispective.de",
      license: "CC BY-SA 2.0",
      licenseUrl: "https://creativecommons.org/licenses/by-sa/2.0",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Garissa_Market,_Eastleigh_in_Nairobi.jpg",
    },
    ledger: [
      { kind: "fact", text: "An 18-storey building under construction on 9th Street, Eastleigh, collapsed at about 1pm on Friday 23 October 2026." },
      { kind: "fact", text: "The search was called off after 15 days. Eight bodies were recovered and four people were rescued alive. Three people remain unaccounted for (Eastleigh Voice, 6 November)." },
      { kind: "official", text: "Governor Johnson Sakaja said the building had approval for construction but no certificate of occupation, so trading on the ground floor was illegal." },
      { kind: "official", text: "The National Construction Authority named 9th Street Plaza Limited as developer and Stromax Holdings E.A Limited as contractor, and said the project was registered on 30 July 2025." },
      { kind: "allegation", text: "Preliminary reports cited by Kenyan media indicate the developer had not obtained all required approvals. This conflicts with the governor's statement and has not been resolved." },
      { kind: "official", text: "The structural engineer listed in NCA records has denied being in charge of the construction." },
      { kind: "unresolved", text: "Whether the building was inspected before it collapsed, who allowed shops to operate inside it, and why no one has yet been charged." },
    ],
    sources: [
      { title: "Several people missing after multistorey building collapses in Kenya", publisher: "Al Jazeera (with AP and AFP)", url: "https://www.aljazeera.com/news/2026/10/23/many-feared-trapped-after-multistorey-building-collapses-in-kenya", date: "23 October 2026" },
      { title: "Eastleigh building collapse: Rescue operation ends after 15 days with eight bodies recovered", publisher: "The Eastleigh Voice", url: "https://eastleighvoice.co.ke/eastleigh/420741/eastleigh-building-collapse-rescue-operation-ends-after-15-days-with-eight-bodies-recovered", date: "6 November 2026" },
      { title: "Revealed: Developer, contractor behind collapsed Eastleigh building amid questions over enforcement", publisher: "People Daily", url: "https://peopledaily.digital/news/revealed-developer-contractor-behind-collapsed-eastleigh-building-amid-questions-over-enforcement", date: "October 2026" },
      { title: "Structural engineer listed for collapsed building denies being in charge", publisher: "Citizen Digital", url: "https://citizen.digital/article/the-structural-engineer-listed-as-being-in-charge-of-the-collapsed-18-storey-building-along-first-av-n393504", date: "October 2026" },
      { title: "Eastleigh building collapse: Fatalities rise to six as operation nears conclusion with no arrests", publisher: "Daily Nation", url: "https://nation.africa/kenya/counties/nairobi/eastleigh-building-collapse-fatalities-rise-to-six-as-operation-nears-conclusion-with-no-arrests-5659630", date: "November 2026" },
      { title: "Eastleigh building collapse: Who failed Kenyans?", publisher: "Daily Nation", url: "https://nation.africa/kenya/counties/nairobi/eastleigh-building-collapse-who-failed-kenyans--5646896", date: "October 2026" },
    ],
    body: `
Joseph Kaula was plastering on the fifth floor when the building began to give way. He told the Associated Press that he was the last person to walk out. "The whole area was filled with dust," he said.

At about 1pm on Friday 23 October, an 18-storey building under construction on 9th Street in Eastleigh — one of Nairobi's busiest commercial districts, a short distance from Yusuf Haji Avenue — collapsed onto itself. More than ten of its upper floors were still being built. Its basement and ground floor were already rented out to traders, including an electronics shop, a butchery and a grocery.

The search lasted 15 days. When it was called off on 6 November, eight bodies had been recovered and four people had been rescued alive. Three people remain unaccounted for and will now be treated as missing persons.

> "Today we are calling off the exercise after having managed to reach all the basements of the building which collapsed." — Simon Osumba, Nairobi North County Commissioner

The rubble has been searched. The harder question has not: who allowed this to happen?

## What we know

Interior Minister Kipchumba Murkomen said that 67 workers were on site at the time of the collapse; one was injured and the rest escaped. The people who died were mostly not construction workers. According to Murkomen, about 11 people who occupied the shops on the lower floors were initially unaccounted for.

That detail is central. A building still under construction should not have been open to the public. Nairobi Governor Johnson Sakaja said the building had been approved for construction but had no certificate of occupation — which means, by his own account, that the shops operating on its ground floor were doing so illegally.

According to the National Construction Authority (NCA), the project was registered on 30 July 2025. The NCA has named 9th Street Plaza Limited as the developer and Stromax Holdings E.A Limited as the contractor. The structural engineer listed in its records as responsible has publicly denied being in charge of the construction.

## What remains disputed

Here the official accounts diverge. Governor Sakaja said the county had approved construction. Preliminary reports cited in Kenyan media indicate that the developer had not obtained approval from all the relevant authorities. Both cannot be fully true. The approval file — what was approved, when, by whom, and for how many floors — is the single most important document in this case. It has not been published.

It is also not yet known whether the building was inspected at any point before it came down.

## The approval chain

In Kenya, responsibility for building safety is divided. County governments approve building plans and issue occupation certificates. The National Construction Authority registers contractors and projects and is mandated to oversee construction standards. The National Building Inspectorate audits structures. Professional bodies regulate the architects and engineers who sign off on designs and supervise construction.

In principle, that is several layers of protection. In practice, it can mean that each layer assumes another is responsible. After the collapse, Governor Sakaja argued that county governments need stronger enforcement powers, describing existing penalties as a "slap on the wrist". The collapse has exposed open disagreement between the governor and national agencies over who is responsible for enforcing construction standards.

> A building still under construction should not have been open to the public.

The scale of the underlying problem is not in dispute. According to figures cited by AFP, Kenya's National Building Inspectorate found that 87 percent of buildings it audited nationwide last year either failed to meet standards or lacked approvals. The Eastleigh collapse came less than a year after a building collapsed in South C, Nairobi, in January 2026 — an incident the NCA said would be examined by a formal inquiry.

## Who is accountable

Accountability in a case like this has several addresses, and each should be examined on the evidence rather than assumed:

**The developer and contractor.** They built the structure and, on the governor's account, allowed it to be occupied without a certificate. Police said they launched a manhunt for the building's owner. As of this writing, AL-HAQQ has found no report of an arrest or charge.

**The professionals.** Every multi-storey building should have a structural engineer and other qualified professionals responsible for its design and supervision. If the engineer named in official records was not supervising the work, who was?

**Nairobi City County.** The county approved construction, according to the governor, and is responsible for occupation certificates and enforcement. Why were shops able to trade inside a building under construction on one of the city's busiest streets?

**National regulators.** The NCA registered the project. Was it ever inspected? If inspectors visited, what did they find, and what was done?

**The prosecution process.** The Office of the Director of Public Prosecutions said Nairobi City County had not submitted an inquiry file to it concerning alleged malpractice linked to the development. Investigators are reported to be examining the roles of county officials, the developer, contractors and regulators.

## Who suffers

The families of the dead and missing have accused the government of neglect and are demanding compensation and accountability. The county has committed to support with DNA testing, burial costs, mortuary bills and transport. Traders who lost stock and livelihoods, and neighbours whose buildings were damaged — police warned of a possible second collapse because the structure was leaning on an adjacent building — face their own losses.

## What remains unanswered

AL-HAQQ is seeking answers to the following questions, and will publish responses from the parties named:

- What exactly did Nairobi City County approve, and for how many storeys?
- Was the building inspected by the county, the NCA or the National Building Inspectorate before 23 October?
- Who authorised, or failed to prevent, the occupation of the ground floor and basement?
- Who was supervising construction on site?
- Why has no one been charged more than two weeks after eight people died?

Kenya has held inquiries into building collapses before. The test of this one is whether it ends with published findings and consequences — or with another file that no one reads until the next building falls.

*If you have information relevant to this investigation, contact the editor. AL-HAQQ protects its sources.*
`,
  },

  // ─────────────────────────────────────────────────────────────── SOMALIA
  {
    slug: "somalia-at-a-crossroads-foreign-forces-withdraw",
    title: "Somalia at a Crossroads: What Happens When Foreign Forces Begin to Withdraw?",
    dek: "Uganda, the first country to send troops to Somalia under the African Union in 2007, has begun to bring them home. The African Union mission's mandate expires at the end of December and its funding is unresolved. Al-Shabaab has not gone anywhere.",
    kicker: "Somalia · Security",
    section: "east-africa",
    type: "Analysis",
    tags: ["Somalia", "Uganda", "Regional Security", "African Union"],
    editorsPick: true,
    publishedAt: "2026-11-07T07:00:00.000Z",
    lastVerified: "2026-11-10",
    hero: {
      src: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cc/Amisom_Uganda_07Btn_15_%286440669991%29.jpg/1920px-Amisom_Uganda_07Btn_15_%286440669991%29.jpg",
      alt: "Ugandan soldiers of the African Union mission walk near the frontline in the Balaad area of Mogadishu.",
      caption:
        "Archive photograph, November 2011: Ugandan soldiers serving with the African Union Mission in Somalia (AMISOM) near the frontline on the northern edge of Mogadishu, at a time when AU forces were pushing al-Shabaab out of the capital.",
      credit: "Stuart Price / AU-UN IST, via AMISOM Public Information",
      license: "CC0 (public domain dedication)",
      licenseUrl: "https://creativecommons.org/publicdomain/zero/1.0/",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Amisom_Uganda_07Btn_15_(6440669991).jpg",
    },
    ledger: [
      { kind: "official", text: "Uganda's military said on 2 November 2026 that it had begun a phased withdrawal from Somalia, with all forces out by the end of 2027." },
      { kind: "fact", text: "Ugandan forces in Somalia number roughly 4,500 under the African Union mission (AUSSOM) and about 2,000 under bilateral agreements with the Federal Government." },
      { kind: "official", text: "Somalia's government says the troops leaving first were serving under a bilateral arrangement, not as part of AUSSOM." },
      { kind: "fact", text: "AUSSOM's UN Security Council authorisation runs to 31 December 2026. The United States has said it will end support for AUSSOM through UN mechanisms from 2027." },
      { kind: "allegation", text: "One Somali outlet has reported a claim that the UAE pledged money to Uganda in connection with the withdrawal. AL-HAQQ has found no corroboration." },
      { kind: "unresolved", text: "Who will fund the mission in 2027, and whether Somali forces can hold territory that foreign troops currently secure." },
    ],
    sources: [
      { title: "Uganda begins withdrawing peacekeeping troops that helped repel militants in Somalia", publisher: "Associated Press (via ABC News)", url: "https://abcnews.com/International/wireStory/uganda-begins-withdrawing-peacekeeping-troops-helped-repel-militants-137764218", date: "2 November 2026" },
      { title: "Uganda Says Troops Have Begun Leaving Somalia, Ending 20-Year Mission", publisher: "Dawan Africa", url: "https://www.dawan.africa/news/uganda-says-troops-have-begun-leaving-somalia-ending-20-year-mission", date: "November 2026" },
      { title: "Uganda Begins Withdrawing Troops from Somalia After Two Decades", publisher: "allAfrica", url: "https://allafrica.com/stories/202611030127.html", date: "3 November 2026" },
      { title: "With AUSSOM's Funding Challenges Here to Stay, What Are the Options for the Mission's Future in Somalia?", publisher: "IPI Global Observatory", url: "https://theglobalobservatory.org/2026/01/with-aussoms-funding-challenges-here-to-stay-what-are-the-options-for-the-missions-future-in-somalia/", date: "January 2026" },
      { title: "AU's Somalia peace mission cannot deliver on funding pledges alone", publisher: "Institute for Security Studies", url: "https://issafrica.org/iss-today/au-s-somalia-peace-mission-cannot-deliver-on-funding-pledges-alone", date: "October 2025" },
    ],
    body: `
In March 2007, the first Ugandan soldiers of the African Union Mission in Somalia landed in Mogadishu, a city then largely controlled by militias and the Islamic Courts movement from which al-Shabaab emerged. Nearly twenty years later, Uganda has begun bringing its soldiers home.

On 2 November, Uganda's military announced a phased withdrawal. The first contingent has already returned. According to the army's spokesperson, Colonel Chris Magezi, troops deployed under bilateral agreements with Somalia's Federal Government will be repatriated first, and those serving under the African Union Support and Stabilisation Mission in Somalia (AUSSOM) will draw down gradually. All Ugandan forces are to be out by the end of 2027.

It is the most significant change to Somalia's security architecture since the African Union mission began. It comes at a moment when almost everything else about that architecture is uncertain.

## What is happening

Uganda has roughly 4,500 troops in Somalia under AUSSOM and about 2,000 more under bilateral arrangements. Somalia's government has emphasised that the troops leaving first were serving bilaterally, not as part of AUSSOM — a distinction that matters diplomatically, because it frames the withdrawal as a bilateral adjustment rather than a collapse of the African Union mission.

But the timing cannot be separated from the mission's wider troubles. The UN Security Council's authorisation for AUSSOM runs only to 31 December 2026. The UN's political mission in Somalia has wound down. And the mission's funding remains unresolved: a proposal to finance AUSSOM partly through UN assessed contributions, under Security Council Resolution 2719, did not go ahead, and the United States has said it will end its support for AUSSOM through UN mechanisms from 2027. An analysis published in January 2026 found that no funding had been pledged for the mission for the year.

## Why it is happening

Uganda has not given a single public reason for the timing, and AL-HAQQ will not invent one. Several factors are on the record. Troop-contributing countries have long complained about delayed reimbursements and shrinking international support. The mission has been under pressure to hand over to Somali forces since its predecessor, ATMIS, began drawing down in 2022. And the rules of the mission itself envisaged a transition to Somali-led security.

> The question is not whether foreign forces should one day leave Somalia. It is whether anyone has planned for the day after.

There is also a geopolitical dimension. Somalia has become an arena of competition between external powers, including Turkey and the United Arab Emirates, both of which have trained Somali forces and pursued commercial and strategic interests in the country. One Somali outlet has reported a claim that the UAE pledged a large sum to Uganda in connection with the withdrawal. AL-HAQQ has found no corroboration of that claim, and we report it only because it is circulating and should be tested, not repeated.

## The threat that remains

Al-Shabaab, al-Qaeda's affiliate in East Africa, has survived two decades of military pressure. It governs territory, collects taxes, runs courts and can strike Mogadishu. In 2025 it launched a series of coordinated offensives in the Middle Shabelle and Hiiraan regions, pushing Somali forces out of towns they had recently taken, including the strategic district of Moqokori.

The lesson of those offensives was that territory taken from al-Shabaab is only held when local forces, local administrations and basic services follow. Where they do not, the group returns.

## Somalia's capacity

The Somali National Army has grown and has gained experience, including through the government-led offensives that began in 2022 with the support of clan militias. But it remains uneven: dependent on external pay and training, divided by clan and political loyalties, and stretched across long supply lines. Disputes between the Federal Government and federal member states over elections, resources and the constitution have repeatedly diverted attention from the war against al-Shabaab.

## Who benefits, and who bears the cost

If the withdrawal leaves gaps that Somali forces cannot fill, the immediate beneficiary is al-Shabaab. External powers with bilateral military arrangements may also gain influence as the multilateral mission weakens.

The cost falls first on Somali civilians in contested areas — in the Shabelle valleys, in Hiiraan, in Lower Shabelle — who live with the consequences of territory changing hands. It also falls on Somalia's neighbours. Kenya and Ethiopia, both of which have troops in Somalia, have suffered al-Shabaab attacks on their own soil, from Westgate in 2013 to Garissa University in 2015.

## What remains unanswered

Will the Security Council renew AUSSOM's mandate before 31 December, and on what terms? Who will pay for the mission in 2027? Will other troop-contributing countries — including Ethiopia, Kenya, Egypt, Djibouti and Burundi — adjust their own deployments? Is there a credible plan for Somali forces to hold the areas that Ugandan troops currently secure?

The question is not whether foreign forces should one day leave Somalia. Somalis have every reason to want their own institutions to guarantee their security. The question is whether anyone has planned for the day after.
`,
  },

  // ─────────────────────────────────────────────────────────────── MOZAMBIQUE
  {
    slug: "mozambique-forgotten-war-cabo-delgado",
    title: "Mozambique's Forgotten War: The Human Cost of the Cabo Delgado Insurgency",
    dek: "Nine years after the first attacks in Mocímboa da Praia, people in Mozambique's northernmost province are still fleeing. Construction has resumed on a $20 billion gas project. The insurgency it was halted by has not ended.",
    kicker: "Mozambique · Conflict",
    section: "conflict",
    type: "Report",
    tags: ["Mozambique", "Human Rights", "Regional Security"],
    publishedAt: "2026-11-03T07:00:00.000Z",
    lastVerified: "2026-11-10",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/9/93/Igreja_Cat%C3%B3lica_destruida_em_Mocimboa_da_Praia.jpg",
      alt: "The damaged shell of a Catholic church in Mocímboa da Praia, Cabo Delgado.",
      caption:
        "A Catholic church destroyed in Mocímboa da Praia, Cabo Delgado, photographed in 2024. The town, where the insurgency's first attack took place in October 2017, was held by insurgents for a year from August 2020.",
      credit: "Francisco Jr. / VOA Português",
      license: "Public domain (Voice of America)",
      licenseUrl: "https://commons.wikimedia.org/wiki/File:Igreja_Cat%C3%B3lica_destruida_em_Mocimboa_da_Praia.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Igreja_Cat%C3%B3lica_destruida_em_Mocimboa_da_Praia.jpg",
    },
    ledger: [
      { kind: "fact", text: "IOM counted 1,235 people fleeing attacks in four Cabo Delgado districts between 14 and 27 October 2026." },
      { kind: "fact", text: "IOM estimated 449,876 internally displaced people and 673,517 returnees in June 2026. These are separate categories and should not be added together." },
      { kind: "fact", text: "TotalEnergies lifted force majeure on Mozambique LNG in November 2025 and announced full resumption of construction on 29 January 2026. First production is targeted for 2029." },
      { kind: "official", text: "President Daniel Chapo called on 26 October 2026 for stronger African cooperation to protect strategic minerals, gas and oil." },
      { kind: "fact", text: "Human rights groups have documented abuses against civilians by insurgents, Mozambican security forces and private military contractors over the course of the conflict." },
      { kind: "unresolved", text: "Whether the gas project will bring development to local communities — or deepen the grievances that fuel recruitment." },
    ],
    sources: [
      { title: "1,235 flee attacks in northern Mozambique in two weeks (IOM data)", publisher: "The Rio Times", url: "https://www.riotimesonline.com/mozambique-cabo-delgado-1235-flee-attacks-two-weeks-2026", date: "October 2026" },
      { title: "Mozambique's Chapo urges African resource security cooperation amid Cabo Delgado insurgency", publisher: "bne IntelliNews", url: "https://www.intellinews.com/mozambique-s-chapo-urges-african-resource-security-cooperation-amid-cabo-delgado-insurgency-478855", date: "October 2026" },
      { title: "Resumption of $20bn Cabo Delgado gas project reignites both hope and resentment", publisher: "allAfrica", url: "https://allafrica.com/stories/202606150004.html", date: "15 June 2026" },
      { title: "A War Without Headlines: Mozambique's Insurgency and the Global Security Blind Spot", publisher: "Small Wars Journal", url: "https://smallwarsjournal.com/2026/01/26/a-war-without-headlines-mozambiques-insurgency-and-the-global-security-blind-spot/", date: "26 January 2026" },
      { title: "US and Mozambique deepen defence partnership", publisher: "Trends N Africa", url: "https://trendsnafrica.com/us-and-mozambique-deepen-defence-partnership-amid-cabo-delgado-insurgency-and-lng-resurgence/", date: "November 2026" },
      { title: "\"What I saw is death\": War crimes in Mozambique's forgotten cape", publisher: "Amnesty International", url: "https://www.amnesty.org/en/documents/afr41/3545/2021/en/", date: "March 2021" },
    ],
    body: `
In the last two weeks of October, 1,235 people fled attacks in four districts of Cabo Delgado, according to the International Organization for Migration. They were not the first to flee, and they will not be the last. The insurgency in Mozambique's northernmost province is now in its ninth year. It has displaced hundreds of thousands of people. Outside southern Africa, it barely registers.

## What happened

On 5 October 2017, armed men attacked police posts in the coastal town of Mocímboa da Praia. The group behind the attack was known locally as al-Shabaab — no relation to the Somali group — and later pledged allegiance to the Islamic State, which has claimed attacks in the province since 2019.

The violence escalated quickly. Insurgents beheaded civilians, burned villages and abducted children. In August 2020 they captured Mocímboa da Praia itself and held it for a year. In March 2021, they attacked Palma, the town next to the construction site of a vast liquefied natural gas project led by TotalEnergies. Dozens of people were killed, and the company declared force majeure and withdrew.

In July 2021, Rwandan troops deployed at the invitation of Mozambique's government, followed by a regional force from the Southern African Development Community (SAMIM). They retook key towns, including Mocímboa da Praia. SAMIM withdrew in 2024. Rwandan forces remain. The insurgency, weakened but not defeated, adapted: smaller groups, more mobile, operating in the interior and in districts further south.

## The human cost

In June 2026, IOM estimated that there were 449,876 internally displaced people in Cabo Delgado and 673,517 people who had returned to their areas of origin. Those are different populations measured at the same time, and should not be added together — but together they describe a province in which a large share of the population has been uprooted at least once.

In June alone, according to reports, attacks attributed to the Islamic State's Mozambique affiliate displaced more than 21,000 people, many now living in displacement sites in Ancuabe, Chiúre and Montepuez districts. Returnees often come back to destroyed homes, absent services and the constant possibility of another attack.

Abuses have not been committed only by insurgents. In a 2021 report, Amnesty International documented war crimes by the insurgents, by Mozambican security forces and by a private military company contracted by the government. That pattern — civilians abused by every armed actor that claims to be fighting for or against them — is common to many of the conflicts AL-HAQQ covers, and it is one reason trust between communities and the state remains so fragile.

## Gas, grievance and the economics of war

Cabo Delgado is one of Mozambique's poorest provinces. It is also one of its richest in resources: rubies, graphite, timber and, offshore, some of the largest natural gas reserves discovered in Africa this century.

> A province rich in resources and poor in almost everything else is a place where grievance finds recruits.

Researchers have long argued that the insurgency's roots lie less in global jihadism than in local grievance: youth unemployment, land dispossession, perceived exclusion from resource wealth, and a sense among many residents that decisions about the province are made in Maputo for the benefit of others. The Islamic State's brand provided an ideology and connections; local conditions supplied the recruits.

The TotalEnergies-led Mozambique LNG project, valued at around $20 billion, is the largest private investment in Africa. The consortium lifted force majeure in November 2025 and announced the full resumption of construction on 29 January 2026, with first production targeted for 2029, subject to execution and security conditions.

For the government, the project promises revenue that could transform the national budget. For residents who were relocated to make way for it, or who live near the heavily protected site, the question is what it will bring them. Analysts have warned that restarting the project without addressing local grievances could fuel recruitment into the insurgency. A security perimeter around a gas plant is not the same as security for the province.

## The responses

On 26 October, President Daniel Chapo called for stronger African cooperation to protect strategic minerals, natural gas and oil. In early November, a delegation from the US military's Africa Command visited Maputo and reaffirmed commitments to defence and security cooperation, though no new agreement, funding or deployment was announced.

The emphasis on protecting resources is understandable. It also illustrates the problem: the most consistent international attention to Cabo Delgado has followed the gas.

## Why the world is not watching

The conflict lacks the features that tend to attract sustained international coverage. It is far from major capitals and from the countries that dominate global news. Foreign journalists have faced restrictions on access, and Mozambican journalists have been detained. One Mozambican community radio journalist, Ibraimo Mbaruco, disappeared in Palma in April 2020 and has not been found. The insurgents rarely speak to the press. And the victims are rural, poor and Portuguese- or Swahili-speaking, in a global media system that privileges other languages and places.

## What remains unanswered

Who is financing and supplying the insurgents today? What will happen if Rwanda's deployment ends? Will LNG revenues reach the people of Cabo Delgado, and through what mechanisms? Will anyone be held accountable for abuses by state forces and contractors, as well as by insurgents? And how long can a war continue, displacing tens of thousands each year, before the world decides it is worth paying attention?
`,
  },

  // ─────────────────────────────────────────────────────────────── SYRIA
  {
    slug: "after-assad-syria-new-political-era",
    title: "After Assad: Has Syria Entered a New Political Era, or Simply a New Chapter of Uncertainty?",
    dek: "Almost two years after the fall of Bashar al-Assad, Ahmed al-Sharaa has won recognition abroad and consolidated control at home. The harder tests — accountability for sectarian killings, the place of minorities, and whether institutions can outlast their founder — have not yet been passed.",
    kicker: "Syria · Transition",
    section: "international",
    type: "Analysis",
    tags: ["Syria", "Diplomacy", "Geopolitics", "Human Rights"],
    editorsPick: true,
    publishedAt: "2026-11-06T07:00:00.000Z",
    lastVerified: "2026-11-10",
    hero: {
      src: "https://upload.wikimedia.org/wikipedia/commons/c/cd/Syrians_celebrate_the_fall_of_Assad_at_the_Umayyad_mosque%2C_14_December_2024.jpg",
      alt: "Crowds gather in the courtyard of the Umayyad Mosque in Damascus to celebrate the fall of the Assad government.",
      caption:
        "Damascus, 14 December 2024: crowds at the Umayyad Mosque mark the first Friday prayers after the fall of the Assad government. Taken from Voice of America video.",
      credit: "Voice of America",
      license: "Public domain (Voice of America)",
      licenseUrl: "https://commons.wikimedia.org/wiki/File:Syrians_celebrate_the_fall_of_Assad_at_the_Umayyad_mosque,_14_December_2024.jpg",
      sourceUrl: "https://commons.wikimedia.org/wiki/File:Syrians_celebrate_the_fall_of_Assad_at_the_Umayyad_mosque,_14_December_2024.jpg",
    },
    ledger: [
      { kind: "fact", text: "Bashar al-Assad's government fell on 8 December 2024. Ahmed al-Sharaa was named transitional president in January 2025." },
      { kind: "fact", text: "A constitutional declaration ratified on 13 March 2025 set a five-year transitional period, to 2030." },
      { kind: "fact", text: "The UN Commission of Inquiry reported in March 2026 that at least 1,707 people, mostly Druze civilians, were killed in Suwayda in 2025. A separate UN report described about 1,426 people, mostly Alawite civilians, killed on the coast in early 2025." },
      { kind: "official", text: "Syria's own national committee on the Suwayda events said violations were individual rather than systematic. Critics say its report named no suspects and set no timeline for accountability." },
      { kind: "official", text: "At the UN General Assembly in September 2026, al-Sharaa said armed non-state groups had been brought under government control and that more than 3.5 million displaced people and refugees had returned. These figures have not been independently verified." },
      { kind: "unresolved", text: "When Syrians will choose their leaders by direct vote, and whether courts will try those responsible for sectarian killings since 2024." },
    ],
    sources: [
      { title: "Syria in 2026: Interim government and Kurdish integration", publisher: "House of Commons Library", url: "https://commonslibrary.parliament.uk/research-briefings/cbp-10430/", date: "2026" },
      { title: "Syria begins 'new phase of revival', President Al-Sharaa tells General Assembly", publisher: "UN News", url: "https://news.un.org/en/story/2026/09/1168411", date: "September 2026" },
      { title: "UN says 1,700 killed in Syria's Suweida violence, cites possible war crimes", publisher: "Al-Monitor", url: "https://www.al-monitor.com/originals/2026/03/un-says-1700-killed-syrias-suweida-violence-cites-possible-war-crimes", date: "March 2026" },
      { title: "Syrian national committee submits final report on Suwayda events", publisher: "Enab Baladi", url: "https://english.enabbaladi.net/archives/2026/03/national-committee/", date: "March 2026" },
      { title: "Syria's investigation into 'Suweida events' falls short of justice, say critics", publisher: "The New Arab", url: "https://www.newarab.com/news/syrias-investigation-suweida-events-falls-short-justice", date: "March 2026" },
      { title: "Syria: Transition and U.S. Policy", publisher: "Congressional Research Service", url: "https://www.congress.gov/crs-product/RL33487", date: "2026" },
      { title: "Instability in Syria — Global Conflict Tracker", publisher: "Council on Foreign Relations", url: "https://www.cfr.org/global-conflict-tracker/conflict/conflict-syria", date: "Updated November 2026" },
    ],
    body: `
On 8 December 2024, the Assad family's 54-year rule over Syria ended in a matter of days. An offensive led by Hayat Tahrir al-Sham (HTS) swept from Idlib through Aleppo, Hama and Homs to Damascus. Bashar al-Assad fled to Moscow. Syrians who had spent their lives under one of the most brutal surveillance states in the world opened its prisons, and crowds filled the Umayyad Mosque.

Almost two years later, the question that matters is not whether Assad's fall was a turning point. It plainly was. The question is what kind of state is being built in its place — and who gets to decide.

## The new order

Ahmed al-Sharaa, the HTS leader formerly known by the nom de guerre Abu Mohammed al-Jolani, was named transitional president in January 2025. In March 2025 he ratified a constitutional declaration establishing a five-year transitional period to 2030, concentrating considerable power in the presidency. A new People's Assembly, chosen through an indirect process with a portion of seats appointed by the president, held its first session in 2026.

Abroad, his rehabilitation has been remarkably fast. Western and Arab governments lifted most sanctions. The UN Security Council removed al-Sharaa's terrorist designation in November 2025. He has addressed the UN General Assembly, visited Western capitals and, on 5 November 2026, signed a defence cooperation agreement and more than $400 million in development loans with Saudi Arabia, according to Reuters.

At the General Assembly in September 2026, al-Sharaa told world leaders that Syria had begun "a new phase of revival". He said that weapons held by non-state groups had been brought under government control, security institutions rebuilt and sanctions lifted, and that more than 3.5 million displaced people and refugees had returned. Those are his government's claims; they have not been independently verified.

## The violence of the transition

The other side of the ledger is sectarian killing.

In March 2025, after attacks on security forces by Assad loyalists on the coast, government-aligned forces and armed groups carried out mass killings in Alawite communities. A UN report described about 1,426 people killed, most of them Alawite civilians. In July 2025, fighting in Suwayda between Druze militias, Bedouin tribal fighters and government forces led to further killings. The UN Commission of Inquiry reported in March 2026 that at least 1,707 people were killed in Suwayda governorate, the majority Druze civilians, and cited possible war crimes.

> A transition is measured not by who it welcomes in foreign capitals, but by who it protects at home.

The government established national inquiries into both episodes. Their findings diverge from the UN's. The head of the national committee on Suwayda said the violations were individual rather than systematic; the coastal inquiry also found no systematic pattern and denied that kidnappings had occurred. Critics, including Syrian rights organisations, say the national reports named no suspects, offered no compensation mechanism and set no timeline for prosecutions. Damascus has said that accountability remains a priority and has recommended human rights vetting and training for all members of the security forces.

## The Kurdish question

In March 2025, al-Sharaa and the commander of the Kurdish-led Syrian Democratic Forces (SDF), Mazloum Abdi, signed an agreement in principle to integrate the SDF into state institutions. Implementation stalled. In January 2026, government forces launched an offensive into SDF-held territory and took control of roughly 80 percent of the north-east, including camps holding Islamic State detainees, according to a UK parliamentary briefing.

The offensive strengthened Damascus's territorial control. It also raised questions — for Kurds, and for other communities — about whether integration into the new state is a negotiation or a demand.

## Who benefits

Inside Syria, the clearest beneficiaries are those who now hold power: al-Sharaa and the networks that brought him to Damascus. Turkey, his longest-standing patron, has gained a friendly government on its southern border. Gulf states have gained influence in a country that was, under Assad, an Iranian ally. Iran and Hezbollah have lost a strategic corridor. Russia has retained a diminished presence. Israel, which seized additional territory in the south after Assad's fall and has carried out repeated strikes, has entered US-facilitated security talks with Damascus.

Millions of ordinary Syrians have also benefited — from the end of the Assad security state, the release of detainees, and the possibility of return. That should not be understated.

## Who is at risk

Syria's minorities — Alawites, Druze, Kurds and Christians among them — have the most to lose from a state that is strong but not accountable. So do Syrians of any background who want a political voice that the transitional structure does not yet provide. The Islamic State, which has continued to claim attacks, is ready to exploit any grievance and any security gap.

## What remains unanswered

When will Syrians vote for their leaders directly? Will a permanent constitution protect minority rights in law and in practice? Will anyone be tried for the killings on the coast and in Suwayda? Can the security forces, drawn heavily from former armed groups, become a professional national institution? And can institutions be built that would survive their founder?

Assad's fall opened a door. Whether Syria walks through it into a genuinely new political era — or into a new chapter of uncertainty under different management — will be decided by the answers to those questions, not by the warmth of its reception abroad.
`,
  },
];
