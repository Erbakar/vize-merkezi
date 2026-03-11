import React from 'react';
import { motion } from 'motion/react';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const TermsOfService = () => {
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
              <FileText size={24} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-zinc-900">Kullanım Şartları</h1>
          </div>

          <div className="prose prose-zinc max-w-none space-y-6 text-zinc-600">
            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">1. Hizmet Kapsamı</h2>
              <p>Cezayir Vize Merkezi, Cezayir vize başvuruları için danışmanlık hizmeti sunan özel bir kuruluştur. Konsolosluk adına karar verme yetkimiz bulunmamaktadır.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">2. Sorumluluk Reddi</h2>
              <p>Vize onay veya red kararı tamamen Cezayir Konsolosluğu'nun inisiyatifindedir. Danışmanlık ücretleri, başvurunun sonucundan bağımsız olarak tahsil edilir ve iade edilmez.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">3. Bilgi Doğruluğu</h2>
              <p>Kullanıcılar, başvuru formlarında ve sundukları belgelerde verdikleri bilgilerin doğruluğundan bizzat sorumludur. Yanlış beyanlardan doğacak sonuçlardan firmamız sorumlu tutulamaz.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">4. Değişiklik Hakları</h2>
              <p>Firmamız, hizmet şartlarını ve ücretlerini önceden haber vermeksizin güncelleme hakkını saklı tutar.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default TermsOfService;
