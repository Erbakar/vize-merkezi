import React from 'react';
import { motion } from 'motion/react';
import { Lock, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const KVKK = () => {
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
              <Lock size={24} />
            </div>
            <h1 className="text-3xl font-serif font-bold text-zinc-900">KVKK Aydınlatma Metni</h1>
          </div>

          <div className="prose prose-zinc max-w-none space-y-6 text-zinc-600">
            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">1. Veri Sorumlusu</h2>
              <p>6698 sayılı Kişisel Verilerin Korunması Kanunu ("KVKK") uyarınca, kişisel verileriniz veri sorumlusu sıfatıyla Cezayir Vize Merkezi tarafından aşağıda açıklanan kapsamda işlenebilecektir.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">2. İşleme Amaçları</h2>
              <p>Kişisel verileriniz; vize başvuru süreçlerinin yönetilmesi, randevu takibi, konsolosluk bildirimleri ve yasal yükümlülüklerin yerine getirilmesi amaçlarıyla işlenmektedir.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">3. Veri Sahibi Hakları</h2>
              <p>KVKK'nın 11. maddesi uyarınca; verilerinizin işlenip işlenmediğini öğrenme, düzeltilmesini isteme ve silinmesini talep etme haklarına sahipsiniz.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-zinc-900 mb-3">4. Başvuru</h2>
              <p>Haklarınızı kullanmak için yazılı dilekçenizi ofis adresimize veya kayıtlı e-posta adresimize iletebilirsiniz.</p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default KVKK;
