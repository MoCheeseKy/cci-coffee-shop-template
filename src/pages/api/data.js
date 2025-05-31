const coffeData = [
  {
    id: 1,
    name: 'Iced Americano',
    description:
      'Espresso shoot yang dicampur dengan segelas air menghadirkan karakter, aroma, dan rasa yang ideal.',
    price: 22000,
    image_url: 'https://static.fore.coffee/product/Americano%20Iced.jpg',
    category: 'Americano Serries',
  },
  {
    id: 2,
    name: 'Hot Americano',
    description:
      'Espresso shoot yang dicampur dengan segelas air menghadirkan karakter, aroma, dan rasa yang ideal.',
    price: 25000,
    image_url: 'https://static.fore.coffee/product/Americano%20Hot.jpg',
    category: 'Americano Serries',
  },
  {
    id: 3,
    name: 'Iced Manuka Americano',
    description:
      'Americano dengan madu Manuka yang pas untuk jadi energy booster',
    price: 29000,
    image_url:
      'https://static.fore.coffee/product/Manuka%20Americano%20Iced.jpg',
    category: 'Americano Serries',
  },
  {
    id: 4,
    name: 'Hot Manuka Americano',
    description:
      'Americano dengan madu Manuka yang pas untuk jadi energy booster',
    price: 29000,
    image_url:
      'https://static.fore.coffee/product/Manuka%20Americano%20Hot.jpg',
    category: 'Americano Serries',
  },
  {
    id: 5,
    name: 'Triple Peach Americano',
    description:
      'Peach coffee perpaduan rasa kopi, tiga jenis buah peach dan aroma elderflower yang menciptakan sensasi kopi yang segar dan harmonis.',
    price: 29000,
    image_url:
      'https://static.fore.coffee/product/Triple%20Peach%20Americano%20(1).jpg',
    category: 'Americano Serries',
  },
  {
    id: 6,
    name: 'Berry Manuka Americano',
    description:
      'Perpaduan rasa Stroberi dan Manuka dengan Classic Blend Fore yang menyegarkan',
    price: 31000,
    image_url:
      'https://static.fore.coffee/product/Berry%20Manuka%20Americano%20(3).jpg',
    category: 'Americano Serries',
  },
  {
    id: 7,
    name: 'Iced Bumi Latte',
    description:
      'Sensasi lembut dan legit dari saus karamel dan butterscotch yang khas berpadu dengan kopi autentik Indonesia',
    price: 24000,
    image_url:
      'https://static.fore.coffee/product/Bumi%20Latte%20w%20Badge.jpg',
    category: 'Coffee',
  },
  {
    id: 8,
    name: 'Iced Cappuccino',
    description:
      'Paduan Espresso, susu hangat, dan lapisan foam tebal di atasnya tanpa gula tambahan.',
    price: 29000,
    image_url:
      'https://static.fore.coffee/product/Bumi%20Latte%20w%20Badge.jpg',
    category: 'Coffee',
  },
  {
    id: 9,
    name: 'Hot Cappuccino',
    description:
      'Paduan Espresso, susu hangat, dan lapisan foam tebal di atasnya tanpa gula tambahan.',
    price: 29000,
    image_url: 'https://static.fore.coffee/product/Cappucino%20Hot%20(1).jpg',
    category: 'Coffee',
  },
  {
    id: 10,
    name: 'Double Iced Shaken Latte',
    description: 'Paduan klasik 2 shot espresso dengan susu dan krim',
    price: 33000,
    image_url:
      'https://static.fore.coffee/product/Bumi%20Latte%20w%20Badge.jpg',
    category: 'Coffee',
  },
  {
    id: 11,
    name: 'Iced Café Latte',
    description:
      'Paduan espresso dengan susu sapi pilihan dan sedikit foam tanpa gula tambahan.',
    price: 29000,
    image_url: 'https://static.fore.coffee/product/Cafe%20Latte%20Iced.jpg',
    category: 'Coffee',
  },
  {
    id: 12,
    name: 'Hot Café Latte',
    description:
      'Paduan espresso dengan susu sapi pilihan dan sedikit foam tanpa gula tambahan.',
    price: 29000,
    image_url:
      'https://static.fore.coffee/product/Cafe%20Latte%20Hot%20(1).jpg',
    category: 'Coffee',
  },
  {
    id: 13,
    name: 'Nutty Oat Latte',
    description:
      'Espresso dari biji kopi khas nusantara dipadukan susu oat gluten-free dan sensasi nutty dari hazelnut.',
    price: 39000,
    image_url:
      'https://static.fore.coffee/product/Nutty%20Oat%20Latte%20Iced.jpg',
    category: 'Coffee',
  },
  {
    id: 14,
    name: 'Iced Buttercream Tiramisu Latte',
    description:
      'Lembutnya Buttercream Tiramisu sebagai topping kopi susu praline',
    price: 33000,
    image_url:
      'https://static.fore.coffee/product/Buttercream%20Tiramisu%20Latte.jpg',
    category: 'Coffee',
  },
  {
    id: 15,
    name: 'Hot Espresso',
    description: 'Ekstrak biji kopi Arabika murni tanpa campuran',
    price: 19000,
    image_url: 'https://static.fore.coffee/product/espresso173.jpg',
    category: 'Coffee',
  },
  {
    id: 16,
    name: 'Iced Caramel Praline Macchiato',
    description:
      'Latte dengan saus Praline dan karamel dengan rasa dan aroma manis.',
    price: 33000,
    image_url:
      'https://static.fore.coffee/product/Caramel%20Praline%20Macchiato%20Iced%20(1).jpg',
    category: 'Coffee',
  },
  {
    id: 17,
    name: 'Hot Caramel Praline Macchiato',
    description:
      'Latte dengan saus Praline dan karamel dengan rasa dan aroma manis.',
    price: 33000,
    image_url:
      'https://static.fore.coffee/product/Caramel%20Praline%20Macchiato%20Hot.jpg',
    category: 'Coffee',
  },
  {
    id: 18,
    name: 'Iced Aceh Gayo',
    description:
      'Kopi aromatik dengan taste notes coklat, butterscotch, dan rempah',
    price: 24000,
    image_url: 'https://static.fore.coffee/product/ICED%20COD.jpg',
    category: 'Coffee of The Day',
  },
  {
    id: 19,
    name: 'Hot Aceh Gayo',
    description:
      'Kopi aromatik dengan taste notes coklat, butterscotch, dan rempah',
    price: 24000,
    image_url: 'https://static.fore.coffee/product/COD_satuan-01.jpg',
    category: 'Coffee of The Day',
  },
  {
    id: 20,
    name: 'Iced Toraja Sapan',
    description: 'Kopi aromatik dengan notes citrus, rempah, dan molases',
    price: 24000,
    image_url: 'https://static.fore.coffee/product/ICED%20COD.jpg',
    category: 'Coffee of The Day',
  },
  {
    id: 21,
    name: 'Hot Toraja Sapan',
    description: 'Kopi aromatik dengan notes fruity dan citrus',
    price: 24000,
    image_url: 'https://static.fore.coffee/product/COD_satuan-02.jpg',
    category: 'Coffee of The Day',
  },
  {
    id: 22,
    name: 'Iced Bali Kintamani',
    description: 'Kopi aromatik dengan notes fruity dan citrus',
    price: 24000,
    image_url: 'https://static.fore.coffee/product/ICED%20COD.jpg',
    category: 'Coffee of The Day',
  },
  {
    id: 23,
    name: 'Hot Bali Kintamani',
    description:
      'Kopi aromatik dengan taste notes coklat, butterscotch, dan rempah',
    price: 24000,
    image_url: 'https://static.fore.coffee/product/COD_satuan-03.jpg',
    category: 'Coffee of The Day',
  },
  {
    id: 24,
    name: 'Iced Butterscotch Milk Crumble',
    description:
      'Butterscotch dengan paduan caramel, susu dengan sea salt cream dan caramel crumble sebagai topping.',
    price: 29000,
    image_url: 'https://static.fore.coffee/product/butterscotch.jpg',
    category: 'Fore Junior',
  },
  {
    id: 25,
    name: 'Iced Vanilla OCrumbs',
    description:
      'Perpaduan vanilla, butterscotch dan susu dilengkapi dengan saus karamel juga topping oreo yang gurih diatasnya',
    price: 29000,
    image_url: `https://static.fore.coffee/product/vanila%20o'crumbs.jpg`,
    category: 'Fore Junior',
  },
  {
    id: 26,
    name: 'Iced Choco Caramel Cloud',
    description:
      'Nikmatnya cream salted caramel dengan paduan dark chocolate yang cocok untuk ceriakan hari',
    price: 29000,
    image_url: 'https://static.fore.coffee/product/choco%20caramel%20cloud.jpg',
    category: 'Fore Junior',
  },
  {
    id: 27,
    name: 'Iced Kopi Dari Tani',
    description:
      'Paduan rasa dan aroma kopi Indonesia yang kuat bercampur dengan gula aren khas nusantara',
    price: 24000,
    image_url:
      'https://static.fore.coffee/product/Kopi%20dari%20Tani%20w%20Badge.jpg',
    category: 'Fore Signature',
  },
  {
    id: 28,
    name: 'Iced Butterscotch Sea Salt Latte',
    description:
      'Perpaduan butterscotch dan espresso house blend dengan topping cream sea salt yang lembut di atasnya',
    price: 33000,
    image_url: 'https://static.fore.coffee/product/Butterscoth%20Iced.jpg',
    category: 'Fore Signature',
  },
  {
    id: 29,
    name: 'Iced Buttercream Latte',
    description:
      'Nikmatnya Buttercream Coffee sebagai topping kopi susu karame',
    price: 31000,
    image_url: `https://static.fore.coffee/product/Buttercream%20Latte%20(1).jpg`,
    category: 'Fore Signature',
  },
  {
    id: 30,
    name: 'Iced Aren Latte',
    description:
      'Rasa alami gula aren berpadu sempurna dengan espresso premium. Menu terlaris Fore Coffee',
    price: 29000,
    image_url: 'https://static.fore.coffee/product/Aren%20Latte%20Ice.jpg',
    category: 'Fore Signature',
  },
  {
    id: 31,
    name: 'Hot Aren Latte',
    description:
      'Rasa alami gula aren berpadu sempurna dengan espresso premium. Menu terlaris Fore Coffee',
    price: 29000,
    image_url: `https://static.fore.coffee/product/Aren%20Latte%20Hot.jpg`,
    category: 'Fore Signature',
  },
  {
    id: 32,
    name: 'Iced Pandan Latte',
    description:
      'Latte dengan rasa dan aroma unik dari ekstrak pandan alami khas Fore Coffee',
    price: 29000,
    image_url: 'https://static.fore.coffee/product/Pandan%20Latte%20Iced.jpg',
    category: 'Fore Signature',
  },
];

module.exports = coffeData;
