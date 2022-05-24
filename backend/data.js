import bcrypt from 'bcryptjs';
const data = {
  users: [
    {
      name: 'Nasim',
      email: 'admin@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Ali',
      email: 'user@example.com',
      password: bcrypt.hashSync('123456'),
      isAdmin: false,
    },
  ],
    products: [
      {
        _id: '1',
        name: 'Mavi Erkek Siyah tişört',
        slug: 'nike-slim-shirt',
        category: 'Tişört',
        image: '/images/product-1.jpg', // 679px × 829px
        price: 120,
        countInStock: 10,
        brand: 'Mavi',
        rating: 4.5,
        numReviews: 10,
        description: 'Mavi nin Erkek Koleksiyonundan Mavi Logo Baskılı Siyah Tişört Normal Kesim Kısa Kol Model Ölçüleri: Boy 187 cm Kalça: 95 cm Model Üzerindeki Ürün Bedeni Jeanler İçin, Bel: 30 Boy: 32 Diğer Ürünlerde: L Materiel:%100 Pamuk Season:21ILK2 Gender:Erkek Sleeve:Kısa Kol Fit:Normal Kesim',
      },
      {
        _id: '2',
        name: 'Adidas Koşu Ayakkabı',
        slug: 'adidas-run-sneakers',
        category: 'Shirts',
        image: '/images/product-2.jpg',
        price: 250,
        countInStock: 20,
        brand: 'Adidas',
        rating: 4.0,
        numReviews: 10,
        description: 'Bu koşu ayakkabısı, arkadaşlarınla parkta yürüyüş yapmak ve sonrasında kahve içmek için idealdir. File sayası ile olağanüstü bir nefes alabilirlik sağlayan ayakkabı, gün boyu konfor sunar. Model, dayanıklı kauçuk dış tabanı ile yoğun günler için sağlam bir yol arkadaşıdır.',
      },
      {
        _id: '3',
        name: 'Mavi Logo Baskılı Kadın Tişör',
        slug: 'Mavi-fit-tshirt',
        category: 'Tişört',
        image: '/images/product-3.jpg',
        price: 25,
        countInStock: 15,
        brand: 'Mavi',
        rating: 4.5,
        numReviews: 14,
        description: 'Mavi nin Kadın Koleksiyonundan Miav Baskılı Beyaz Tişört Normal Kesim Kısa Kol Model Ölçüleri: Boy: 178 cm Bel: 60 cm Göğüs: 86 cm Kalça: 88 cm Model Üzerindeki Ürün Bedeni Jeanler İçin, Bel: 25 Boy: 32 Diğer Ürünlerde: S Gender:Kadın Sleeve:Kısa Kol Fit:Normal Kesim',
      },
      {
        _id: '4',
        name: 'Avva Erkek Siyah Comfort Slim Fit Jean Pantolon',
        slug: 'Avva-jean',
        category: 'Pants',
        image: '/images/product-4.jpg',
        price: 65,
        countInStock: 5,
        brand: 'Avva',
        rating: 4.5,
        numReviews: 10,
        description: 'Avva Erkek Siyah Comfort Slim Fit Jean Pantolon E003512 İlkbahar/Yaz Sezonu Ürünüdür.',
      },
    ],
  };
  export default data;