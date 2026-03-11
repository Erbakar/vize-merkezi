export interface VisaRequirement {
  title: string;
  items: string[];
}

export interface VisaFee {
  type: string;
  price: string;
  note?: string;
}

export interface VisaCategory {
  id: 'business' | 'tourist';
  title: string;
  description: string;
  requirements: VisaRequirement[];
  fees: VisaFee[];
  extraFees?: string;
}

export const ALGERIA_VISA_DATA: Record<string, VisaCategory> = {
  business: {
    id: 'business',
    title: 'Cezayir Ticari (İş) Vizesi',
    description: 'İş seyahatleri, toplantılar ve ticari görüşmeler için gerekli vize türü.',
    requirements: [
      {
        title: 'Genel Belgeler',
        items: [
          'Eksiksiz bilgisayar ile doldurulmuş, tarihli ve imzalı 2 adet vize başvuru formu.',
          '35x45 mm ölçülerinde 2 adet güncel biyometrik fotoğraf (zımbalanmış).',
          'En az 6 ay geçerli ve yıpranmamış pasaport.',
          'T.C. Kimlik Kartı fotokopisi.',
          'İkametgâh belgesi (e-Devlet barkodlu).',
          'Tam vukuatlı nüfus kayıt örneği (e-Devlet barkodlu).',
        ]
      },
      {
        title: 'Cezayir\'den Gelen Belgeler',
        items: [
          'Cezayir’deki şirketten onaylı ticari davet mektubu (orijinal).',
          'Cezayirli şirkete ait ticaret sicil belgesi.',
        ]
      },
      {
        title: 'Türk Şirketi Belgeleri',
        items: [
          'Şirket dilekçesi (pozisyon, amaç ve süre belirten orijinal).',
          'Ticaret Sicil Gazetesi.',
          'İmza Sirküleri.',
          'Vergi Levhası (son sene).',
          'Faaliyet Belgesi (son 2 ay içinde).',
        ]
      },
      {
        title: 'Mesleki Ek Belgeler (SGK\'lılar)',
        items: [
          '4A SGK hizmet dökümü (barkodlu).',
          'SGK işe giriş bildirgesi.',
          'Son 3 aylık maaş bordrosu (kaşeli/imzalı).',
          'İş sözleşmesi.',
        ]
      }
    ],
    fees: [
      { type: '1 Aylık (Tek Giriş)', price: '180 Euro' },
      { type: '1 Aylık (Çift Giriş)', price: '200 Euro' },
      { type: '3 Aylık (Sınırsız Giriş)', price: '240 Euro' },
    ],
    extraFees: 'Türkiye dışında doğanlar için +100 Euro fark uygulanır. Fiyatlara KDV dahil değildir.'
  },
  tourist: {
    id: 'tourist',
    title: 'Cezayir Turistik Vizesi',
    description: 'Gezi, tatil ve turistik ziyaretler için gerekli vize türü.',
    requirements: [
      {
        title: 'Temel Belgeler',
        items: [
          'Bilgisayar ortamında doldurulmuş, imzalı 2 adet başvuru formu.',
          '45x35 mm ölçülerinde 2 adet güncel biyometrik fotoğraf.',
          'En az 6 ay geçerli pasaport ve ilk iki sayfa fotokopisi.',
          'Seyahat Sağlık Sigortası (tüm süreyi kapsayan).',
        ]
      },
      {
        title: 'Konaklama ve Ulaşım',
        items: [
          'Onaylı davet mektubu veya otel rezervasyon onayı.',
          'Gidiş-dönüş uçak bileti (başvuru kabulünden sonra).',
        ]
      },
      {
        title: 'Gelir ve Çalışma Belgeleri',
        items: [
          'İşveren belgesi veya çalışma/gelir belgesi.',
          'Son 3 aya ait banka hesap dökümü.',
        ]
      }
    ],
    fees: [
      { type: '1 Aylık (Tek Giriş)', price: '180 Euro' },
    ],
    extraFees: 'Türkiye dışında doğanlar için +50 Euro fark uygulanır. Fiyatlara KDV dahil değildir.'
  }
};
