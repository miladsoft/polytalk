import { Injectable } from '@angular/core';

export interface Language {
  code: string;
  name: string;
  flag: string;
  flagImage: string; // Add this new property
}

export interface LearningContent {
  words: { [key: string]: string };
  numbers: { [key: string]: string };
  sentences: { [key: string]: string };
}

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  private languages: Language[] = [
    {
      code: 'en',
      name: 'English',
      flag: '🇬🇧',
      flagImage: '/assets/flags/gb.png',
    },
    {
      code: 'el',
      name: 'Greek',
      flag: '🇬🇷',
      flagImage: '/assets/flags/gr.png',
    },
    {
      code: 'me',
      name: 'Montenegrin',
      flag: '🇲🇪',
      flagImage: '/assets/flags/me.png',
    },
    {
      code: 'bg',
      name: 'Bulgarian',
      flag: '🇧🇬',
      flagImage: '/assets/flags/bg.png',
    },
    {
      code: 'cs',
      name: 'Czech',
      flag: '🇨🇿',
      flagImage: '/assets/flags/cz.png',
    },
    {
      code: 'fi',
      name: 'Finnish',
      flag: '🇫🇮',
      flagImage: '/assets/flags/fi.png',
    },
    {
      code: 'hu',
      name: 'Hungarian',
      flag: '🇭🇺',
      flagImage: '/assets/flags/hu.png',
    },
    {
      code: 'et',
      name: 'Estonian',
      flag: '🇪🇪',
      flagImage: '/assets/flags/ee.png',
    },
    {
      code: 'hr',
      name: 'Croatian',
      flag: '🇭🇷',
      flagImage: '/assets/flags/hr.png',
    },
    {
      code: 'hy',
      name: 'Armenian',
      flag: '🇦🇲',
      flagImage: '/assets/flags/am.png',
    },
    {
      code: 'sk',
      name: 'Slovak',
      flag: '🇸🇰',
      flagImage: '/assets/flags/sk.png',
    },
    {
      code: 'sl',
      name: 'Slovenian',
      flag: '🇸🇮',
      flagImage: '/assets/flags/si.png',
    },
    {
      code: 'uk',
      name: 'Ukrainian',
      flag: '🇺🇦',
      flagImage: '/assets/flags/ua.png',
    },
  ];

  private content: { [key: string]: LearningContent } = {
    en: {
      words: {
        // Essential Nouns
        water: 'water',
        food: 'food',
        restaurant: 'restaurant',
        bathroom: 'bathroom',
        hospital: 'hospital',
        hotel: 'hotel',
        airport: 'airport',
        train: 'train',
        bus: 'bus',
        taxi: 'taxi',
        // Common Adjectives
        good: 'good',
        bad: 'bad',
        big: 'big',
        small: 'small',
        hot: 'hot',
        cold: 'cold',
        // Essential Verbs
        'to eat': 'to eat',
        'to drink': 'to drink',
        'to sleep': 'to sleep',
        'to go': 'to go',
        'to help': 'to help',
        thanks: 'thanks',
      },
      numbers: {
        '0': 'zero',
        '1': 'one',
        '2': 'two',
        '3': 'three',
        '4': 'four',
        '5': 'five',
        '6': 'six',
        '7': 'seven',
        '8': 'eight',
        '9': 'nine',
        '10': 'ten',
        '20': 'twenty',
        '30': 'thirty',
        '40': 'forty',
        '50': 'fifty',
        '100': 'hundred',
        '1000': 'thousand',
      },
      sentences: {
        // Greetings
        Hello: 'Hello',
        'Good morning': 'Good morning',
        'Good afternoon': 'Good afternoon',
        'Good night': 'Good night',
        Goodbye: 'Goodbye',
        // Essential Phrases
        'How are you?': 'How are you?',
        'I am fine': 'I am fine',
        'Thank you': 'Thank you',
        "You're welcome": "You're welcome",
        Please: 'Please',
        'Excuse me': 'Excuse me',
        "I'm sorry": "I'm sorry",
        // Emergency Phrases
        'I need help': 'I need help',
        'I am lost': 'I am lost',
        "I don't understand": "I don't understand",
        'Do you speak English?': 'Do you speak English?',
        'Where is the bathroom?': 'Where is the bathroom?',
        // Practical Phrases
        'How much does it cost?': 'How much does it cost?',
        'Can you help me?': 'Can you help me?',
        'I would like...': 'I would like...',
        'The check, please': 'The check, please',
      },
    },
    hy: {
      words: {
        // Essential Nouns
        water: 'ջուր',
        food: 'ուտելիք',
        restaurant: 'ռեստորան',
        bathroom: 'զուգարան',
        hospital: 'հիվանդանոց',
        hotel: 'հյուրանոց',
        airport: 'օդանավակայան',
        train: 'գնացք',
        bus: 'ավտոբուս',
        taxi: 'տաքսի',
        // Common Adjectives
        good: 'լավ',
        bad: 'վատ',
        big: 'մեծ',
        small: 'փոքր',
        hot: 'տաք',
        cold: 'սառը',
        // Essential Verbs
        'to eat': 'ուտել',
        'to drink': 'խմել',
        'to sleep': 'քնել',
        'to go': 'գնալ',
        'to help': 'օգնել',
        thanks: 'շնորհակալություն',
      },
      numbers: {
        '0': 'զրո',
        '1': 'մեկ',
        '2': 'երկու',
        '3': 'երեք',
        '4': 'չորս',
        '5': 'հինգ',
        '6': 'վեց',
        '7': 'յոթ',
        '8': 'ութ',
        '9': 'ինը',
        '10': 'տասը',
        '20': 'քսան',
        '30': 'երեսուն',
        '40': 'քառասուն',
        '50': 'հիսուն',
        '100': 'հարյուր',
        '1000': 'հազար',
      },
      sentences: {
        // Greetings
        Hello: 'Բարև',
        'Good morning': 'Բարի լույս',
        'Good afternoon': 'Բարի օր',
        'Good night': 'Բարի գիշեր',
        Goodbye: 'Ցտեսություն',
        // Essential Phrases
        'How are you?': 'Ինչպե՞ս եք',
        'I am fine': 'Ես լավ եմ',
        'Thank you': 'Շնորհակալություն',
        "You're welcome": 'Խնդրեմ',
        Please: 'Խնդրում եմ',
        'Excuse me': 'Ներեցեք',
        "I'm sorry": 'Ներողություն',
        // Emergency Phrases
        'I need help': 'Ինձ օգնություն է պետք',
        'I am lost': 'Ես մոլորվել եմ',
        "I don't understand": 'Ես չեմ հասկանում',
        'Do you speak English?': 'Անգլերեն խոսու՞մ եք',
        'Where is the bathroom?': 'Որտե՞ղ է զուգարանը',
        // Practical Phrases
        'How much does it cost?': 'Ինչքա՞ն է արժե',
        'Can you help me?': 'Կարո՞ղ եք ինձ օգնել',
        'I would like...': 'Ես կցանկանայի...',
        'The check, please': 'Հաշիվը, խնդրում եմ',
      },
    },
    sk: {
      words: {
        water: 'voda',
        food: 'jedlo',
        restaurant: 'reštaurácia',
        bathroom: 'kúpeľňa',
        hospital: 'nemocnica',
        hotel: 'hotel',
        airport: 'letisko',
        train: 'vlak',
        bus: 'autobus',
        taxi: 'taxi',
        good: 'dobrý',
        bad: 'zlý',
        big: 'veľký',
        small: 'malý',
        hot: 'horúci',
        cold: 'studený',
        'to eat': 'jesť',
        'to drink': 'piť',
        'to sleep': 'spať',
        'to go': 'ísť',
        'to help': 'pomôcť',
        thanks: 'ďakujem',
      },
      numbers: {
        '0': 'nula',
        '1': 'jeden',
        '2': 'dva',
        '3': 'tri',
        '4': 'štyri',
        '5': 'päť',
        '6': 'šesť',
        '7': 'sedem',
        '8': 'osem',
        '9': 'deväť',
        '10': 'desať',
        '20': 'dvadsať',
        '30': 'tridsať',
        '40': 'štyridsať',
        '50': 'päťdesiat',
        '100': 'sto',
        '1000': 'tisíc',
      },
      sentences: {
        Hello: 'Ahoj',
        'Good morning': 'Dobré ráno',
        'Good afternoon': 'Dobrý deň',
        'Good night': 'Dobrú noc',
        Goodbye: 'Dovidenia',
        'How are you?': 'Ako sa máš?',
        'I am fine': 'Mám sa dobre',
        'Thank you': 'Ďakujem',
        "You're welcome": 'Prosím',
        Please: 'Prosím',
        'Excuse me': 'Prepáčte',
        "I'm sorry": 'Prepáč',
        'I need help': 'Potrebujem pomoc',
        'I am lost': 'Stratil som sa',
        "I don't understand": 'Nerozumiem',
        'Do you speak English?': 'Hovoríte po anglicky?',
        'Where is the bathroom?': 'Kde je kúpeľňa?',
        'How much does it cost?': 'Koľko to stojí?',
        'Can you help me?': 'Môžete mi pomôcť?',
        'I would like...': 'Chcel by som...',
        'The check, please': 'Účet, prosím',
      },
    },
    sl: {
      words: {
        water: 'voda',
        food: 'hrana',
        restaurant: 'restavracija',
        bathroom: 'kopalnica',
        hospital: 'bolnišnica',
        hotel: 'hotel',
        airport: 'letališče',
        train: 'vlak',
        bus: 'avtobus',
        taxi: 'taksi',
        good: 'dober',
        bad: 'slab',
        big: 'velik',
        small: 'majhen',
        hot: 'vroč',
        cold: 'hladen',
        'to eat': 'jesti',
        'to drink': 'piti',
        'to sleep': 'spati',
        'to go': 'iti',
        'to help': 'pomagati',
        thanks: 'hvala',
      },
      numbers: {
        '0': 'nič',
        '1': 'ena',
        '2': 'dva',
        '3': 'tri',
        '4': 'štiri',
        '5': 'pet',
        '6': 'šest',
        '7': 'sedem',
        '8': 'osem',
        '9': 'devet',
        '10': 'deset',
        '20': 'dvajset',
        '30': 'trideset',
        '40': 'štirideset',
        '50': 'petdeset',
        '100': 'sto',
        '1000': 'tisoč',
      },
      sentences: {
        Hello: 'Zdravo',
        'Good morning': 'Dobro jutro',
        'Good afternoon': 'Dober dan',
        'Good night': 'Lahko noč',
        Goodbye: 'Nasvidenje',
        'How are you?': 'Kako si?',
        'I am fine': 'V redu sem',
        'Thank you': 'Hvala',
        "You're welcome": 'Prosim',
        Please: 'Prosim',
        'Excuse me': 'Oprostite',
        "I'm sorry": 'Oprosti',
        'I need help': 'Potrebujem pomoč',
        'I am lost': 'Izgubljen sem',
        "I don't understand": 'Ne razumem',
        'Do you speak English?': 'Ali govorite angleško?',
        'Where is the bathroom?': 'Kje je kopalnica?',
        'How much does it cost?': 'Koliko stane?',
        'Can you help me?': 'Mi lahko pomagate?',
        'I would like...': 'Rad bi...',
        'The check, please': 'Račun, prosim',
      },
    },
    uk: {
      words: {
        // Essential Nouns
        water: 'вода',
        food: 'їжа',
        restaurant: 'ресторан',
        bathroom: 'ванна кімната',
        hospital: 'лікарня',
        hotel: 'готель',
        airport: 'аеропорт',
        train: 'потяг',
        bus: 'автобус',
        taxi: 'таксі',
        // Common Adjectives
        good: 'добрий',
        bad: 'поганий',
        big: 'великий',
        small: 'маленький',
        hot: 'гарячий',
        cold: 'холодний',
        // Essential Verbs
        'to eat': 'їсти',
        'to drink': 'пити',
        'to sleep': 'спати',
        'to go': 'йти',
        'to help': 'допомогти',
        thanks: 'дякую',
      },
      numbers: {
        '0': 'нуль',
        '1': 'один',
        '2': 'два',
        '3': 'три',
        '4': 'чотири',
        '5': 'п\'ять',
        '6': 'шість',
        '7': 'сім',
        '8': 'вісім',
        '9': 'дев\'ять',
        '10': 'десять',
        '20': 'двадцять',
        '30': 'тридцять',
        '40': 'сорок',
        '50': 'п\'ятдесят',
        '100': 'сто',
        '1000': 'тисяча',
      },
      sentences: {
        // Greetings
        Hello: 'Привіт',
        'Good morning': 'Добрий ранок',
        'Good afternoon': 'Добрий день',
        'Good night': 'Добраніч',
        Goodbye: 'До побачення',
        // Essential Phrases
        'How are you?': 'Як справи?',
        'I am fine': 'У мене все добре',
        'Thank you': 'Дякую',
        "You're welcome": 'Будь ласка',
        Please: 'Будь ласка',
        'Excuse me': 'Перепрошую',
        "I'm sorry": 'Вибачте',
        // Emergency Phrases
        'I need help': 'Мені потрібна допомога',
        'I am lost': 'Я заблукав',
        "I don't understand": 'Я не розумію',
        'Do you speak English?': 'Ви розмовляєте англійською?',
        'Where is the bathroom?': 'Де знаходиться ванна кімната?',
        // Practical Phrases
        'How much does it cost?': 'Скільки це коштує?',
        'Can you help me?': 'Можете мені допомогти?',
        'I would like...': 'Я б хотів...',
        'The check, please': 'Рахунок, будь ласка',
      },
    },
  };

  getLanguages(): Language[] {
    return [...this.languages].sort((a, b) => a.name.localeCompare(b.name));
  }

  getContent(languageCode: string): LearningContent | undefined {
    return this.content[languageCode];
  }
}
