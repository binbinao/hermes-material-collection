window.slideDataMap.set(9, `
<div class="w-[1440px] h-[810px] shadow-2xl relative overflow-hidden slide-bg">
    <div class="w-[1350px] h-[720px] mx-auto my-[45px] relative">
        <!-- Grid background -->
        <div class="absolute inset-0 opacity-15" style="background-image: linear-gradient(rgba(37,99,235,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(37,99,235,0.15) 1px, transparent 1px); background-size: 40px 40px;"></div>

        <!-- Scan line effect -->
        <div class="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
        <div class="absolute top-1/2 left-0 right-0 h-16 bg-gradient-to-b from-cyan-500/15 via-transparent to-cyan-500/15"></div>

        <!-- Corner accents -->
        <div class="absolute top-6 left-6 w-20 h-20 border-t-2 border-l-2 border-blue-500/50"></div>
        <div class="absolute bottom-6 right-6 w-20 h-20 border-b-2 border-r-2 border-purple-500/50"></div>

        <div class="relative z-10 flex items-center justify-center h-full">
            <div class="text-center">
                <div class="text-xl font-bold text-cyan-400 mb-5 tracking-widest" style="font-family: 'Montserrat', sans-serif;">
                    <span class="inline-block border border-cyan-500 px-5 py-2 rounded">&lt; CHAPTER 3 /&gt;</span>
                </div>
                <h1 class="text-5xl font-bold text-white mb-4 tracking-wide" style="font-family: 'Montserrat', 'Noto Sans SC', sans-serif;">
                    Chapter 3 基础设施层
                </h1>
                <p class="text-lg text-cyan-300 mb-8 max-w-[800px] mx-auto leading-relaxed" style="font-family: 'Inter', 'Noto Sans SC', sans-serif;">
                    Profile 多实例 &middot; MoA 多模型推理 &middot; Observability 可观测性
                </p>
                <!-- Key data highlights -->
                <div class="flex items-center justify-center gap-8 mt-4 flex-wrap">
                    <div class="flex items-center gap-2 bg-blue-500/10 border border-blue-500/30 rounded-lg px-4 py-2">
                        <div class="w-2 h-2 rounded-full bg-blue-400"></div>
                        <span class="text-sm text-blue-300 font-medium">&lt;500MB / 实例可跑 20+ Profile</span>
                    </div>
                    <div class="flex items-center gap-2 bg-cyan-500/10 border border-cyan-500/30 rounded-lg px-4 py-2">
                        <div class="w-2 h-2 rounded-full bg-cyan-400"></div>
                        <span class="text-sm text-cyan-300 font-medium">MoA 5 次 API 调用</span>
                    </div>
                    <div class="flex items-center gap-2 bg-purple-500/10 border border-purple-500/30 rounded-lg px-4 py-2">
                        <div class="w-2 h-2 rounded-full bg-purple-400"></div>
                        <span class="text-sm text-purple-300 font-medium">10+ OTLP 后端 fan-out</span>
                    </div>
                </div>
                <div class="flex items-center justify-center gap-2 mt-8">
                    <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                    <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 0.2s;"></div>
                    <div class="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style="animation-delay: 0.4s;"></div>
                </div>
            </div>
        </div>
    </div>
</div>
`);
