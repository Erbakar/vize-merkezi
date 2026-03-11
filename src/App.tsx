import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { 
  FileText, 
  CheckCircle2, 
  Info, 
  CreditCard, 
  Plane, 
  Briefcase, 
  MapPin, 
  Phone, 
  Mail, 
  ChevronRight, 
  Globe, 
  ShieldCheck,
  Clock,
  Menu,
  X,
  MessageSquare
} from 'lucide-react';
import { ALGERIA_VISA_DATA, VisaCategory } from './constants';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import KVKK from './components/KVKK';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const NavLinks = () => (
    <>
      <Link to="/" className="hover:text-emerald-600 transition-colors">Ana Sayfa</Link>
      {isHomePage ? (
        <>
          <a href="#visas" className="hover:text-emerald-600 transition-colors">Vize Türleri</a>
          <a href="#process" className="hover:text-emerald-600 transition-colors">Süreç</a>
        </>
      ) : (
        <>
          <Link to="/#visas" className="hover:text-emerald-600 transition-colors">Vize Türleri</Link>
          <Link to="/#process" className="hover:text-emerald-600 transition-colors">Süreç</Link>
        </>
      )}
      <a href="#contact" className="px-5 py-2.5 bg-zinc-900 text-white rounded-full hover:bg-emerald-600 transition-all shadow-md">Hemen Başvur</a>
    </>
  );

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-10 h-10 bg-emerald-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-emerald-200">
            <Globe size={24} />
          </div>
          <span className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-zinc-900' : 'text-zinc-900'}`}>
            Cezayir<span className="text-emerald-600">Vize</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-600">
          <NavLinks />
        </div>

        <button className="md:hidden text-zinc-900" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass border-t border-zinc-100 p-6 flex flex-col gap-4 md:hidden"
          >
            <NavLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
    <div className="absolute inset-0 z-0">
      <img 
        src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?q=80&w=1920&auto=format&fit=crop" 
        alt="Algeria Landscape" 
        className="w-full h-full object-cover opacity-10"
        referrerPolicy="no-referrer"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-zinc-50/50 via-zinc-50 to-zinc-50"></div>
    </div>

    <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6">
          <ShieldCheck size={14} /> Resmi Vize Danışmanlık Merkezi
        </div>
        <h1 className="text-5xl md:text-7xl font-serif font-bold leading-[1.1] text-zinc-900 mb-6">
          Cezayir Yolculuğunuz <br />
          <span className="text-emerald-600 italic font-normal">Burada Başlar.</span>
        </h1>
        <p className="text-lg text-zinc-600 mb-8 max-w-lg leading-relaxed">
          Ticari ve turistik vize başvurularınızda uzman kadromuzla yanınızdayız. 
          Hızlı, güvenilir ve profesyonel danışmanlık hizmetiyle vize sürecinizi kolaylaştırın.
        </p>
        <div className="flex flex-wrap gap-4">
          <a href="#visas" className="px-8 py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition-all shadow-xl shadow-emerald-200 flex items-center gap-2">
            Vize Türlerini İncele <ChevronRight size={20} />
          </a>
          <a href="#contact" className="px-8 py-4 bg-white text-zinc-900 border border-zinc-200 rounded-xl font-bold hover:bg-zinc-50 transition-all">
            Bize Ulaşın
          </a>
        </div>

        <div className="mt-12 flex items-center gap-8">
          <div>
            <div className="text-3xl font-bold text-zinc-900">3-4</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest">İş Gününde Sonuç</div>
          </div>
          <div className="w-px h-10 bg-zinc-200"></div>
          <div>
            <div className="text-3xl font-bold text-zinc-900">%98</div>
            <div className="text-xs text-zinc-500 uppercase tracking-widest">Başarı Oranı</div>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative"
      >
        <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
          <img 
            src="https://images.unsplash.com/photo-1541410965313-d53b3c16ef17?q=80&w=800&auto=format&fit=crop" 
            alt="Algeria City" 
            className="w-full aspect-[4/5] object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="absolute -bottom-10 -left-10 z-20 glass p-6 rounded-2xl shadow-xl max-w-[240px] animate-bounce-slow">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-8 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <CheckCircle2 size={18} />
            </div>
            <span className="font-bold text-sm">Hızlı Onay</span>
          </div>
          <p className="text-xs text-zinc-500">Başvurularınız titizlikle incelenir ve en kısa sürede sonuçlandırılır.</p>
        </div>
        <div className="absolute -top-10 -right-10 w-64 h-64 bg-emerald-400/10 rounded-full blur-3xl -z-10"></div>
      </motion.div>
    </div>
  </section>
);

const VisaSection = () => {
  const [activeTab, setActiveTab] = useState<'business' | 'tourist'>('business');
  const data = ALGERIA_VISA_DATA[activeTab];

  return (
    <section id="visas" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold text-zinc-900 mb-4">Vize Kategorileri</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Seyahat amacınıza uygun vize türünü seçerek gerekli evrakları ve ücretleri inceleyebilirsiniz.</p>
        </div>

        <div className="flex justify-center mb-12">
          <div className="inline-flex p-1 bg-zinc-100 rounded-2xl">
            <button 
              onClick={() => setActiveTab('business')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'business' ? 'bg-white text-emerald-600 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              <Briefcase size={18} /> Ticari Vize
            </button>
            <button 
              onClick={() => setActiveTab('tourist')}
              className={`px-8 py-3 rounded-xl font-bold text-sm transition-all flex items-center gap-2 ${activeTab === 'tourist' ? 'bg-white text-emerald-600 shadow-sm' : 'text-zinc-500 hover:text-zinc-700'}`}
            >
              <Plane size={18} /> Turistik Vize
            </button>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div 
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid lg:grid-cols-3 gap-12"
          >
            <div className="lg:col-span-2 space-y-8">
              <div className="grid md:grid-cols-2 gap-6">
                {data.requirements.map((req, idx) => (
                  <div key={idx} className="p-6 rounded-2xl border border-zinc-100 hover:border-emerald-100 hover:bg-emerald-50/30 transition-all">
                    <h3 className="font-bold text-zinc-900 mb-4 flex items-center gap-2">
                      <FileText size={18} className="text-emerald-600" /> {req.title}
                    </h3>
                    <ul className="space-y-3">
                      {req.items.map((item, i) => (
                        <li key={i} className="text-sm text-zinc-600 flex gap-2">
                          <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0"></div>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-8 bg-zinc-900 text-white rounded-3xl shadow-2xl sticky top-24">
                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                  <CreditCard size={20} className="text-emerald-400" /> Vize Ücretleri
                </h3>
                <div className="space-y-4 mb-8">
                  {data.fees.map((fee, idx) => (
                    <div key={idx} className="flex justify-between items-center pb-4 border-b border-white/10">
                      <span className="text-zinc-400 text-sm">{fee.type}</span>
                      <span className="font-bold text-lg">{fee.price}</span>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-white/5 rounded-xl text-xs text-zinc-400 leading-relaxed mb-8">
                  <Info size={14} className="inline mr-1 mb-1" /> {data.extraFees}
                </div>
                <button className="w-full py-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-xl font-bold transition-all shadow-lg shadow-emerald-900/20">
                  Hemen Başvuruyu Başlat
                </button>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

const ProcessSection = () => (
  <section id="process" className="section-padding bg-zinc-50">
    <div className="max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-serif font-bold text-zinc-900 mb-4">Başvuru Süreci</h2>
        <p className="text-zinc-500">4 Adımda kolay ve hızlı vize başvurusu.</p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {[
          { icon: <FileText />, title: "Evrak Hazırlığı", desc: "Gerekli belgeleri uzmanlarımızın yardımıyla eksiksiz hazırlayın." },
          { icon: <CheckCircle2 />, title: "Kontrol & Onay", desc: "Belgeleriniz titizlikle incelenir ve hatalar düzeltilir." },
          { icon: <Plane />, title: "Konsolosluk Süreci", desc: "Başvurunuz konsolosluğa iletilir ve takip edilir." },
          { icon: <Clock />, title: "Vize Teslimi", desc: "3-4 iş günü içinde vizeniz hazır hale gelir." }
        ].map((step, idx) => (
          <div key={idx} className="relative group">
            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-emerald-600 shadow-sm mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
              {step.icon}
            </div>
            <h3 className="font-bold text-zinc-900 mb-2">{step.title}</h3>
            <p className="text-sm text-zinc-500 leading-relaxed">{step.desc}</p>
            {idx < 3 && <div className="hidden md:block absolute top-8 left-20 w-full h-px border-t border-dashed border-zinc-300 -z-10"></div>}
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="section-padding bg-white">
    <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
      <div>
        <h2 className="text-4xl font-serif font-bold text-zinc-900 mb-6">Sorularınız mı var? <br /> <span className="text-emerald-600">Bizimle İletişime Geçin.</span></h2>
        <p className="text-zinc-500 mb-10 leading-relaxed">
          Cezayir vizesi hakkında merak ettiğiniz her şeyi uzman danışmanlarımıza sorabilirsiniz. 
          Size en kısa sürede dönüş yapacağız.
        </p>

        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
              <Phone size={20} />
            </div>
            <div>
              <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Telefon</div>
              <div className="font-bold text-zinc-900">+90 532 437 91 97</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
              <Mail size={20} />
            </div>
            <div>
              <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold">E-Posta</div>
              <div className="font-bold text-zinc-900">bilgi@cezayirvize.com</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
              <MapPin size={20} />
            </div>
            <div>
              <div className="text-xs text-zinc-400 uppercase tracking-widest font-bold">Adres</div>
              <div className="font-bold text-zinc-900">Levent, Büyükdere Cd. No:123, İstanbul</div>
            </div>
          </div>
        </div>
      </div>

      <div className="p-10 glass rounded-3xl shadow-2xl">
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Ad Soyad</label>
              <input type="text" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="John Doe" />
            </div>
            <div className="space-y-2">
              <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">E-Posta</label>
              <input type="email" className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="john@example.com" />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Vize Türü</label>
            <select className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all appearance-none bg-white">
              <option>Ticari Vize</option>
              <option>Turistik Vize</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-xs font-bold text-zinc-500 uppercase tracking-wider">Mesajınız</label>
            <textarea rows={4} className="w-full px-4 py-3 rounded-xl border border-zinc-200 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none transition-all" placeholder="Nasıl yardımcı olabiliriz?"></textarea>
          </div>
          <button className="w-full py-4 bg-zinc-900 text-white rounded-xl font-bold hover:bg-emerald-600 transition-all shadow-lg">
            Mesaj Gönder
          </button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-zinc-950 text-zinc-400 py-12 px-6">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <Globe size={20} className="text-emerald-500" />
        <span className="text-white font-bold tracking-tight">CezayirVize</span>
      </div>
      <div className="flex gap-8 text-sm">
        <Link to="/gizlilik-politikasi" className="hover:text-white transition-colors">Gizlilik Politikası</Link>
        <Link to="/kullanim-sartlari" className="hover:text-white transition-colors">Kullanım Şartları</Link>
        <Link to="/kvkk" className="hover:text-white transition-colors">KVKK</Link>
      </div>
      <div className="text-sm">
        © 2026 Cezayir Vize Merkezi. Tüm hakları saklıdır.
      </div>
    </div>
  </footer>
);

const WhatsAppWidget = () => (
  <div className="fixed bottom-8 right-8 z-50">
    <a 
      href="https://wa.me/905324379197" 
      target="_blank" 
      rel="noopener noreferrer"
      className="w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-[#128C7E] transition-all transform hover:scale-110"
    >
      <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    </a>
  </div>
);

const Home = () => (
  <>
    <Hero />
    <VisaSection />
    <ProcessSection />
    <ContactSection />
  </>
);

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gizlilik-politikasi" element={<PrivacyPolicy />} />
          <Route path="/kullanim-sartlari" element={<TermsOfService />} />
          <Route path="/kvkk" element={<KVKK />} />
        </Routes>
        <Footer />
        <WhatsAppWidget />
      </div>
    </BrowserRouter>
  );
}
