import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-zinc-50 pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="inline-flex items-center gap-2 text-emerald-600 font-bold mb-8 hover:gap-3 transition-all">
          <ArrowLeft size={20} /> Ana Sayfaya Dön
        </Link>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="glass p-10 rounded-3xl shadow-xl"
        >
          <div className="flex items-center gap-4 mb-8">
            <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-2xl flex items-center justify-center">
              <Shield size={24} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-zinc-900">Gizlilik Politikası</h1>
          </div>

          <div className="prose prose-zinc max-w-none space-y-6 text-zinc-600">
            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">1. Veri Toplama</h2>
              <p>Cezayir Vize Merkezi olarak, kullanıcılarımızın gizliliğine önem veriyoruz. Web sitemiz üzerinden toplanan veriler, sadece vize danışmanlık hizmetlerimizi sunmak ve geliştirmek amacıyla kullanılmaktadır.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">2. Çerezler (Cookies)</h2>
              <p>Sitemiz, kullanıcı deneyimini iyileştirmek ve trafik analizi yapmak için çerezler kullanmaktadır. Tarayıcı ayarlarınızdan çerez kullanımını kısıtlayabilirsiniz.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">3. Üçüncü Taraf Paylaşımı</h2>
              <p>Kişisel verileriniz, yasal zorunluluklar veya vize başvuru süreci için gerekli olan resmi kurumlar dışında hiçbir üçüncü şahıs veya kurumla paylaşılmaz.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">4. İletişim</h2>
              <p>Gizlilik politikamız hakkında sorularınız için bilgi@cezayirvize.com adresi üzerinden bizimle iletişime geçebilirsiniz.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
