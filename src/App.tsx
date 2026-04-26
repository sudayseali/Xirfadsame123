import { MessageCircle, Users, ShieldCheck, Info } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  const whatsappLink = "https://chat.whatsapp.com/Jog7T86YilI0BrKzbN7soS?mode=gi_t";

  return (
    <div className="min-h-screen bg-[#FFD700] flex flex-col font-sans p-6 md:p-12 text-black overflow-hidden relative">
      {/* Navbar area */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-black rounded-xl flex items-center justify-center rotate-3 border-2 border-transparent hover:rotate-6 transition-transform">
            <span className="text-white font-black text-2xl">S</span>
          </div>
          <span className="text-2xl md:text-3xl font-black tracking-tighter text-black uppercase">Suuqa Shaxaha</span>
        </div>
        <div className="bg-white px-4 py-2 md:px-6 md:py-2 rounded-full border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] font-bold text-xs md:text-base">
          TikTok Verified
        </div>
      </div>

      <div className="flex-grow flex flex-col md:flex-row gap-12 max-w-6xl mx-auto w-full">
        {/* Left Column (Hero & Link) */}
        <div className="flex flex-col justify-center w-full md:w-1/2">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black leading-none mb-6 text-black uppercase"
          >
            HELI SHAXAHA <br/>
            <span className="bg-black text-[#FFD700] px-4 inline-block mt-2">UGU FIICAN</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl font-bold text-black/80 max-w-md mb-10 leading-relaxed"
          >
            Ku soo dhawaaw fagaaraha ugu weyn ee iibka iyo iibsashada shaxaha. Haddi aad tahay iibiye ama iibsade, kani waa goobtaadii.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <a href={whatsappLink} 
              target="_blank"
              rel="noopener noreferrer"
              className="w-fit group relative inline-block">
              <div className="absolute inset-0 bg-black translate-x-2 translate-y-2 rounded-2xl transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative bg-[#25D366] text-white px-8 py-5 md:px-10 md:py-6 rounded-2xl border-4 border-black flex items-center space-x-3 md:space-x-4">
                <svg className="w-8 h-8 fill-current shrink-0" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.658 1.43 5.63 1.43h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                <span className="text-xl md:text-2xl font-black uppercase tracking-wide">Ku Biir Group-ka</span>
              </div>
            </a>
          </motion.div>
        </div>

        {/* Right Column (Cards) */}
        <div className="w-full md:w-1/2 flex items-center relative mt-12 md:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* Seller */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="bg-white p-6 md:p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl md:text-2xl font-black mb-2 uppercase">Qofka Iibinaya Shax</h3>
              <p className="font-bold text-black/70 text-sm md:text-base leading-snug">
                Qofkii shax iibinaya isma soo gelin karo group-ka, wuxuu toos ula soo xidhiidhayaa aniga (Admin-ka) si aan group-ka ugu soo dhigo shaxdiisa.
              </p>
            </motion.div>

            {/* Buyer */}
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="bg-[#FF5C00] p-6 md:p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
            >
              <div className="text-4xl mb-4 text-white">🛍️</div>
              <h3 className="text-xl md:text-2xl font-black mb-2 uppercase text-white">Qofka Iibsanaya Shax</h3>
              <p className="font-bold text-white/90 text-sm md:text-base leading-snug">
                Qofkii shax iibsanayo, wuxuu eegayaa shaxaha lasoo dhigo group-ka, kadibna wuxuu si toos ah u iibsanayaa shaxda uu ka helo.
              </p>
            </motion.div>

            {/* Admin Info */}
            <motion.div 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="sm:col-span-2 bg-[#00E0FF] p-6 md:p-8 rounded-3xl border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-xl md:text-2xl font-black mb-1 uppercase text-black">Sidee U Shaqeeyaa?</h3>
                <p className="font-bold text-black/70 text-sm md:text-base flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 shrink-0" />
                  Kusoo dhawaaw madasha oo aqri shuruudaha kahor inta aadan ku biirin group-ka. Waxaa maamula Admin la aamini karo.
                </p>
              </div>
              <div className="flex -space-x-4 shrink-0">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-black bg-pink-400 flex items-center justify-center"><Users className="w-4 h-4 text-white" /></div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-black bg-blue-400 flex items-center justify-center"><MessageCircle className="w-4 h-4 text-white" /></div>
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full border-4 border-black bg-green-400 flex items-center justify-center"><Info className="w-4 h-4 text-white" /></div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="mt-12 border-t-4 border-black pt-6 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="font-black text-xs md:text-sm uppercase tracking-widest text-center">© {new Date().getFullYear()} Suuqa Shaxaha</p>
        <div className="flex space-x-4 md:space-x-6">
          <span className="font-black text-xs md:text-sm uppercase">Amaan</span>
          <span className="font-black text-xs md:text-sm uppercase">Fudayd</span>
          <span className="font-black text-xs md:text-sm uppercase">Kalsooni</span>
        </div>
      </div>
    </div>
  );
}
