import { useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import LoginScreen from './LoginScreen';
import type { Screen } from './types';

export default function App() {
  const [screen, setScreen] = useState<Screen>('login');
  const [toast, setToast] = useState<string | null>(null);

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
            {screen === 'login' ? (
              <LoginScreen setScreen={setScreen} showToast={showToast} />
            ) : (
              <div className="flex h-full flex-col justify-between bg-[radial-gradient(circle_at_top,#fffaf6_0%,#f7f1e7_48%,#f2eadf_100%)] px-8 pb-10 pt-28 text-[#2f261d]">
                <div className="space-y-6">
                  <div className="inline-flex h-16 w-16 items-center justify-center rounded-[24px] bg-[#FE2C55]/12 text-[#FE2C55] shadow-[0_18px_40px_rgba(254,44,85,0.16)]">
                    <CheckCircle2 size={34} strokeWidth={2.4} />
                  </div>
                  <div className="space-y-3">
                    <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#caa189]">Auth Ready</p>
                    <h1 className="text-4xl font-bold leading-tight">登录注册模块已完成</h1>
                    <p className="text-sm font-bold leading-relaxed text-[#8f7f6d]">
                      这个目录现在只负责登录注册流程，可以单独部署到认证域名或子路径。
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[32px] border border-[#eadfce] bg-white/82 p-6 shadow-[0_18px_40px_rgba(103,81,58,0.06)]">
                    <div className="flex items-start gap-3">
                      <div className="mt-1 rounded-2xl bg-[#fff0f4] p-2.5 text-[#FE2C55]">
                        <Sparkles size={18} />
                      </div>
                      <div className="space-y-2">
                        <h2 className="text-base font-bold">部署建议</h2>
                        <p className="text-sm leading-relaxed text-[#7d6f61]">
                          把当前 `auth-standalone/` 设为部署根目录，构建产物直接使用 `dist/`。
                        </p>
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={() => setScreen('login')}
                    className="h-14 w-full rounded-2xl bg-[#FE2C55] text-sm font-black text-white shadow-[0_18px_40px_rgba(254,44,85,0.22)] transition-transform active:scale-95"
                  >
                    返回登录页
                  </button>
                </div>
              </div>
            )}
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
