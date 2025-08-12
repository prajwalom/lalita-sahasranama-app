export interface Verse {
  id: number;
  sanskrit: string;
  transliteration: string;
  meaningHindi: string;
  meaningEnglish: string;
}

export interface VerseGroup {
  id: number;
  verses: Verse[];
  groupSanskrit: string;
  groupNumber: number;
}

export const lalitaSahasranama: Verse[] = [
  {
    id: 1,
    sanskrit: "श्री माता",
    transliteration: "Śrī Mātā",
    meaningHindi: "पवित्र माता, सभी की माँ",
    meaningEnglish: "Sacred Mother, Mother of all"
  },
  {
    id: 2,
    sanskrit: "श्री महाराज्ञी",
    transliteration: "Śrī Mahārājñī",
    meaningHindi: "महान रानी, सर्वोच्च शासक",
    meaningEnglish: "Great Queen, Supreme Ruler"
  },
  {
    id: 3,
    sanskrit: "श्रीमत्सिंहासनेश्वरी",
    transliteration: "Śrīmatsiṃhāsaneśvarī",
    meaningHindi: "शेर के सिंहासन की स्वामी",
    meaningEnglish: "Goddess of the Lion Throne"
  },
  {
    id: 4,
    sanskrit: "चिदग्निकुण्डसम्भूता",
    transliteration: "Cidagnikuṇḍasambhūtā",
    meaningHindi: "चेतना की अग्नि से उत्पन्न",
    meaningEnglish: "Born from the fire of consciousness"
  },
  {
    id: 5,
    sanskrit: "देवकार्यसमुद्यता",
    transliteration: "Devakāryasamudyatā",
    meaningHindi: "देवताओं के कार्य में तत्पर",
    meaningEnglish: "Engaged in divine work"
  },
  {
    id: 6,
    sanskrit: "उद्यद्भानुसहस्राभा",
    transliteration: "Udyadbhānusahasrābhā",
    meaningHindi: "हज़ार सूर्य के समान चमकीली",
    meaningEnglish: "Shining like a thousand rising suns"
  },
  {
    id: 7,
    sanskrit: "चतुर्बाहुसमन्विता",
    transliteration: "Caturbāhusamanvitā",
    meaningHindi: "चार भुजाओं वाली",
    meaningEnglish: "Having four arms"
  },
  {
    id: 8,
    sanskrit: "रागस्वरूपपाशाढ्या",
    transliteration: "Rāgasvarūpapāśāḍhyā",
    meaningHindi: "प्रेम रूपी पाश से युक्त",
    meaningEnglish: "Rich with the noose of love"
  },
  {
    id: 9,
    sanskrit: "क्रोधाकाराङ्कुशोज्ज्वला",
    transliteration: "Krodhākārāṅkuśojjvalā",
    meaningHindi: "क्रोध रूपी अंकुश से दीप्तिमान",
    meaningEnglish: "Brilliant with the goad of anger"
  },
  {
    id: 10,
    sanskrit: "मनोरूपेक्षुकोदण्डा",
    transliteration: "Manorūpekṣukodaṇḍā",
    meaningHindi: "मन रूपी गन्ने का धनुष धारण करने वाली",
    meaningEnglish: "Bearing the sugarcane bow of the mind"
  },
  {
    id: 11,
    sanskrit: "पञ्चतन्मात्रसायका",
    transliteration: "Pañcatanmātrasāyakā",
    meaningHindi: "पांच तन्मात्राओं के बाण वाली",
    meaningEnglish: "Having arrows of the five subtle elements"
  },
  {
    id: 12,
    sanskrit: "निजारुणप्रभापूरमजज्ज्वद्ब्रह्माण्डमण्डला",
    transliteration: "Nijāruṇaprabhāpūramajjvadbrahmāṇḍamaṇḍalā",
    meaningHindi: "अपनी अरुण आभा से ब्रह्माण्ड को प्रकाशित करने वाली",
    meaningEnglish: "She whose reddish radiance illuminates the entire universe"
  },
  {
    id: 13,
    sanskrit: "चम्पकाशोकपुन्नागसौगन्धिकलसत्कचा",
    transliteration: "Campakāśokapunnāgasaugandhikalasatkacā",
    meaningHindi: "चम्पा, अशोक और सुगंधित फूलों से सुशोभित केश वाली",
    meaningEnglish: "Having hair adorned with champaka, ashoka and fragrant flowers"
  },
  {
    id: 14,
    sanskrit: "कुरुविन्दमणिश्रेणीकनत्कोटीरमण्डिता",
    transliteration: "Kuruvindamaṇiśreṇīkanatkotīramaṇḍitā",
    meaningHindi: "करोड़ों कुरुविंद मणियों से सुशोभित",
    meaningEnglish: "Adorned with millions of kuruvinda gems"
  },
  {
    id: 15,
    sanskrit: "अष्टमीचन्द्रविभ्राजदलिकस्थलशोभिता",
    transliteration: "Aṣṭamīcandravibhrājadalikasthalaśobhitā",
    meaningHindi: "अष्टमी के चांद की तरह चमकते मस्तक से शोभित",
    meaningEnglish: "Beautified by the forehead shining like the eighth day moon"
  },
  {
    id: 16,
    sanskrit: "मुखचन्द्रकलङ्काभमृगनाभिविशेषका",
    transliteration: "Mukhacandrakalaṅkābhamṛganābhiviśeṣakā",
    meaningHindi: "चांद के कलंक के समान मृगनाभि से विशेष",
    meaningEnglish: "Distinguished by a musk mark resembling the moon's spot"
  },
  {
    id: 17,
    sanskrit: "वदनस्मरमाङ्गल्यगृहतोरणचिल्लिका",
    transliteration: "Vadanasmaramāṅgalyagṛhatoraṇacillikā",
    meaningHindi: "मुख रूपी मंगल भवन के तोरण की शोभा",
    meaningEnglish: "The decorative arch of the auspicious mansion of her face"
  },
  {
    id: 18,
    sanskrit: "वक्त्रलक्ष्मीपरीवाहचलन्मीनाभलोचना",
    transliteration: "Vaktralakṣmīparīvāhacalanmīnābhalocanā",
    meaningHindi: "मुख की लक्ष्मी के प्रवाह में चलती मछली के समान नेत्र",
    meaningEnglish: "Eyes like fish swimming in the stream of facial beauty"
  },
  {
    id: 19,
    sanskrit: "नवचम्पकपुष्पाभनासादण्डविराजिता",
    transliteration: "Navacampakpuṣpābhanāsādaṇḍavirājitā",
    meaningHindi: "नए चम्पा के फूल के समान नासिका से विराजमान",
    meaningEnglish: "Graced with a nose like a fresh champaka flower"
  },
  {
    id: 20,
    sanskrit: "ताराकान्तितिरस्कारिनासाभरणभासुरा",
    transliteration: "Tārakāntitiraskārinásābharaṇabhāsurā",
    meaningHindi: "तारों की चमक को मात देने वाले नाक के आभूषण से चमकीली",
    meaningEnglish: "Brilliant with nose ornaments that eclipse the radiance of stars"
  }
];

// Group verses for auto-scroll (every 3 verses form a group)
export const verseGroups: VerseGroup[] = [
  {
    id: 1,
    groupNumber: 1,
    verses: lalitaSahasranama.slice(0, 3),
    groupSanskrit: "ॐ श्रीमाता श्रीमहाराज्ञी श्रीमत्-सिंहासनेश्वरी ।\nचिदग्नि-कुण्ड-सम्भूता देवकार्य-समुद्यता ॥ १॥"
  },
  {
    id: 2,
    groupNumber: 2,
    verses: lalitaSahasranama.slice(3, 6),
    groupSanskrit: "उद्यद्-भानु-सहस्राभा चतुर्-बाहु-समन्विता ।\nरागस्वरूप-पाशाढ्या क्रोधाकाराङ्कुशोज्ज्वला ॥ २॥"
  },
  {
    id: 3,
    groupNumber: 3,
    verses: lalitaSahasranama.slice(6, 9),
    groupSanskrit: "मनोरूपेक्षु-कोदण्डा पञ्च-तन्मात्र-सायका ।\nनिजारुण-प्रभापूर-मज्जद्-ब्रह्माण्ड-मण्डला ॥ ३॥"
  },
  {
    id: 4,
    groupNumber: 4,
    verses: lalitaSahasranama.slice(9, 12),
    groupSanskrit: "चम्पकाशोक-पुन्नाग-सौगन्धिक-लसत्कचा ।\nकुरुविन्द-मणि-श्रेणी-कनत्-कोटीर-मण्डिता ॥ ४॥"
  },
  {
    id: 5,
    groupNumber: 5,
    verses: lalitaSahasranama.slice(12, 15),
    groupSanskrit: "अष्टमी-चन्द्र-विभ्राज-दलिक-स्थल-शोभिता ।\nमुख-चन्द्र-कलङ्काभ-मृग-नाभि-विशेषका ॥ ५॥"
  },
  {
    id: 6,
    groupNumber: 6,
    verses: lalitaSahasranama.slice(15, 18),
    groupSanskrit: "वदन-स्मर-माङ्गल्य-गृह-तोरण-चिल्लिका ।\nवक्त्र-लक्ष्मी-परीवाह-चलन्-मीनाभ-लोचना ॥ ६॥"
  },
  {
    id: 7,
    groupNumber: 7,
    verses: lalitaSahasranama.slice(18, 20),
    groupSanskrit: "नव-चम्पक-पुष्पाभ-नासा-दण्ड-विराजिता ।\nतारकान्ति-तिरस्कारि-नासाभरण-भासुरा ॥ ७॥"
  }
];

export const inspirationalQuotes = [
  "सर्वमङ्गलमाङ्गल्ये शिवे सर्वार्थसाधिके। शरण्ये त्र्यम्बके गौरि नारायणि नमोऽस्तु ते॥",
  "या देवी सर्वभूतेषु शक्तिरूपेण संस्थिता। नमस्तस्यै नमस्तस्यै नमस्तस्यै नमो नमः॥",
  "ध्यानमूलं गुरोर्मूर्तिः पूजामूलं गुरोः पदम्। मन्त्रमूलं गुरोर्वाक्यं मोक्षमूलं गुरोः कृपा॥",
  "माँ ललिता का ध्यान करने से मन में शांति और भक्ति का भाव जागता है।",
  "The Divine Mother is the source of all creation, preservation, and transformation.",
  "In the sacred names lies the power to transform the heart and mind.",
  "Each name of the Divine Mother is a key to unlock the treasures of wisdom.",
  "Through devotion and surrender, the devotee finds peace and bliss.",
  "माँ ललिता की कृपा से सभी मनोकामनाएं पूर्ण होती हैं।",
  "Divine grace flows through sincere devotion and pure intention.",
  "The thousand names are like jewels, each one reflecting divine light.",
  "Before recitation, see the Mother's radiant form in your heart's temple.",
  "श्रद्धावान् लभते ज्ञानं - The faithful one attains knowledge.",
  "भक्तिर्एवैनां नयति भक्तिर्एवैनां दर्शयति - Devotion alone leads to Her, devotion alone reveals Her.",
  "मातृदेवो भव - Revere the Mother as God.",
  "सत्यं शिवं सुन्दरम् - Truth, Auspiciousness, Beauty - the nature of the Divine."
];

export const dailyVerses = [
  {
    sanskrit: "सर्वस्वरूपा",
    transliteration: "Sarvasvarūpā",
    meaningHindi: "सभी रूपों में निवास करने वाली",
    meaningEnglish: "She who dwells in all forms",
    significance: "This name reminds us that the Divine Mother is present in every being and form in the universe."
  },
  {
    sanskrit: "सर्वेश्वरी",
    transliteration: "Sarveśvarī",
    meaningHindi: "सभी की स्वामिनी",
    meaningEnglish: "Goddess of all",
    significance: "She is the supreme controller and ruler of all creation."
  },
  {
    sanskrit: "सर्वशक्तिमयी",
    transliteration: "Sarvaśaktimayī",
    meaningHindi: "सभी शक्तियों से युक्त",
    meaningEnglish: "Endowed with all powers",
    significance: "The Divine Mother possesses all cosmic powers and energies."
  },
  {
    sanskrit: "सर्वज्ञा",
    transliteration: "Sarvajñā",
    meaningHindi: "सभी कुछ जानने वाली",
    meaningEnglish: "All-knowing",
    significance: "She has complete knowledge of past, present, and future."
  },
  {
    sanskrit: "सर्वैश्वर्यप्रदायिनी",
    transliteration: "Sarvaiśvaryapradāyinī",
    meaningHindi: "सभी ऐश्वर्य प्रदान करने वाली",
    meaningEnglish: "Bestower of all prosperity",
    significance: "She grants both material and spiritual abundance to her devotees."
  },
  {
    sanskrit: "सर्वमङ्गला",
    transliteration: "Sarvamaṅgalā",
    meaningHindi: "सभी मंगलों की स्वामिनी",
    meaningEnglish: "Source of all auspiciousness",
    significance: "She brings good fortune and removes all obstacles from the devotee's path."
  },
  {
    sanskrit: "सद्गतिप्रदा",
    transliteration: "Sadgatiprādā",
    meaningHindi: "सद्गति प्रदान करने वाली",
    meaningEnglish: "Bestower of liberation",
    significance: "She grants the highest spiritual goal of moksha to sincere devotees."
  }
];

export { inspirationalQuotes }