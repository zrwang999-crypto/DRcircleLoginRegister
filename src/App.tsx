import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import LoginScreen from './LoginScreen';
import type { Screen } from './types';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [toast, setToast] = useState<string | null>(null);
  const [showConsentModal, setShowConsentModal] = useState(true);

  const showToast = (message: string) => {
    setToast(message);
    window.setTimeout(() => setToast(null), 1800);
  };

  return (
    <div className="min-h-screen bg-[#f3ede5] px-4 py-6 font-sans">
      <div className="mx-auto h-[874px] max-w-[402px] overflow-hidden rounded-[56px] border-[8px] border-[#f5f5f5] bg-[#f8f4ed] shadow-[0_0_120px_rgba(0,0,0,0.12)] relative">
        <div className="pointer-events-none absolute inset-x-0 top-0 z-[100] flex h-10 items-center justify-between px-10">
          <span className="mt-3 text-[13px] font-black tracking-tight text-[#4f3d2d]">9:41</span>
          <div className="mt-3 flex h-[30px] w-[110px] items-center justify-center gap-1.5 overflow-hidden rounded-full border border-black/5 bg-dark shadow-2xl">
            <div className="h-1.5 w-1.5 animate-pulse rounded-full bg-indigo-500 shadow-[0_0_8px_rgba(99,102,241,0.8)]"></div>
            <div className="h-0.5 w-6 rounded-full bg-white/20"></div>
          </div>
          <div className="mt-3 flex scale-90 items-center gap-1.5">
            <div className="relative h-2.5 w-5 overflow-hidden rounded-[3px] bg-[#ded2c4] ring-[1px] ring-[#cdbdab]">
              <div className="absolute inset-y-0 left-0 w-3/4 bg-[#4f3d2d]"></div>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={screen}
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.01 }}
            transition={{ duration: 0.25, ease: [0.32, 0.72, 0, 1] }}
            className="h-full"
          >
            <div className="relative h-full">
              <LoginScreen setScreen={setScreen} showToast={showToast} />
              <AnimatePresence>
                {showConsentModal && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-[300] flex items-center justify-center bg-[rgba(72,56,39,0.18)] backdrop-blur-sm px-6"
                  >
                    <motion.div
                      initial={{ scale: 0.96, y: 12 }}
                      animate={{ scale: 1, y: 0 }}
                      exit={{ scale: 0.96, y: 12 }}
                      className="w-full max-w-[340px] rounded-[32px] bg-white p-6 text-left shadow-2xl border border-[#eadfce]"
                    >
                      <h3 className="text-center text-[26px] font-black text-[#111111]">用户协议与隐私政策</h3>
                      <p className="mt-6 text-[18px] leading-[1.7] text-[#6b7280]">
                        欢迎来到DR圈！我们非常重视您的个人信息和隐私保护，为了方便您了解相关内容，我们将通过
                        <span className="text-[#3b82f6]">《用户协议》</span>
                        和
                        <span className="text-[#3b82f6]">《隐私政策》</span>
                        向您说明，请您在使用产品服务前务必仔细阅读详细信息。如您同意，请点击“同意”开始接受我们的服务。
                      </p>

                      <div className="mt-10 space-y-4">
                        <button
                          onClick={() => setShowConsentModal(false)}
                          className="h-16 w-full rounded-[28px] bg-[#FE2C55] text-xl font-black text-white shadow-[0_18px_40px_rgba(254,44,85,0.22)]"
                        >
                          同意
                        </button>
                        <button
                          onClick={() => setShowConsentModal(false)}
                          className="h-12 w-full text-lg font-medium text-[#c0c0c0]"
                        >
                          不同意
                        </button>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </AnimatePresence>

        <AnimatePresence>
          {toast && (
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              className="absolute left-1/2 top-1/2 z-[150] -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full border border-white/40 bg-[rgba(47,38,29,0.82)] px-6 py-3 text-xs font-bold text-white shadow-2xl"
            >
              {toast}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
