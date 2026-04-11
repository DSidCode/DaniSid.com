import React from 'react';
import { motion } from 'framer-motion';

const TerminalHero = () => {
    return (
        <section id="home" className="section relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-32 pb-20">
            {/* El fondo global de App.jsx ya provee los Glow Blobs, aquí solo agregamos un ligero viñeteado central para contraste si es necesario */}
            
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="container mx-auto px-4 w-full flex flex-col lg:flex-row items-center gap-12"
            >
                {/* Columna Izquierda: Texto y CTAs */}
                <div className="w-full lg:w-3/5 text-left z-10 flex flex-col justify-center">
                    <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.2 }}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-900/30 border border-cyan-500/30 text-cyan-400 text-xs md:text-sm font-mono mb-6 w-max"
                    >
                        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                        Disponibilidad Inmediata para Proyectos Remote
                    </motion.div>

                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-outfit text-white leading-tight mb-4 drop-shadow-lg">
                        <span className="block text-slate-300 text-2xl md:text-3xl font-light mb-2">Daniel Sid_</span>
                        Soluciones Web <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                           & Orquestación IA
                        </span>
                    </h1>
                    
                    <p className="text-lg md:text-xl text-slate-300 font-outfit leading-relaxed max-w-2xl mb-10 opacity-90">
                        No soy solo un programador. Transmuto diseño premium, código limpio y automatización con Inteligencia Artificial para construir plataformas que <strong>escalan y venden</strong>. El 100% de la ingeniería digital de tu negocio, en un solo socio estratégico.
                    </p>

                    <div className="flex flex-col sm:flex-row items-start gap-4">
                        <a href="#projects" className="inline-flex items-center justify-center gap-2 bg-cyan-acento text-navy-space font-bold px-8 py-4 rounded-xl hover:bg-white hover:shadow-[0_0_30px_rgba(6,214,160,0.4)] transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto">
                            Ver Casos de Estudio <i className="ri-arrow-right-line"></i>
                        </a>
                        <a href="/cv/cv-es.html" target="_blank" className="inline-flex items-center justify-center gap-2 glass-card text-white font-medium px-8 py-4 rounded-xl hover:text-cyan-acento transition-all duration-300 transform hover:-translate-y-1 w-full sm:w-auto border border-slate-700">
                            Descargar CV Tech <i className="ri-file-download-line text-lg"></i>
                        </a>
                    </div>
                </div>

                {/* Columna Derecha: Tarjetas de Valor (Proof) */}
                <div className="w-full lg:w-2/5 flex flex-col gap-4 z-10">
                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 }}
                        className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1"
                    >
                        <div className="w-12 h-12 rounded-xl bg-purple-500/20 flex items-center justify-center flex-shrink-0 text-purple-400 text-2xl border border-purple-500/30">
                            <i className="ri-quill-pen-line"></i>
                        </div>
                        <div>
                            <h3 className="text-white font-bold font-outfit text-xl mb-1">UX/UI Premium</h3>
                            <p className="text-slate-400 text-sm font-outfit leading-relaxed">Diseños limpios, psicológicamente atractivos y enfocados en reducir la fricción del usuario (Glassmorphism, Tailwind).</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 }}
                        className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1"
                    >
                        <div className="w-12 h-12 rounded-xl bg-cyan-500/20 flex items-center justify-center flex-shrink-0 text-cyan-400 text-2xl border border-cyan-500/30">
                            <i className="ri-braces-line"></i>
                        </div>
                        <div>
                            <h3 className="text-white font-bold font-outfit text-xl mb-1">WebOps & React</h3>
                            <p className="text-slate-400 text-sm font-outfit leading-relaxed">Arquitecturas modernas (SPA), código escalable y despliegues robustos usando el ecosistema de Linux y entornos Cloud.</p>
                        </div>
                    </motion.div>

                    <motion.div 
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 }}
                        className="glass-card p-6 rounded-2xl flex items-start gap-4 hover:-translate-y-1"
                    >
                        <div className="w-12 h-12 rounded-xl bg-amber-500/20 flex items-center justify-center flex-shrink-0 text-amber-400 text-2xl border border-amber-500/30">
                            <i className="ri-robot-2-line"></i>
                        </div>
                        <div>
                            <h3 className="text-white font-bold font-outfit text-xl mb-1">AI Orchestration</h3>
                            <p className="text-slate-400 text-sm font-outfit leading-relaxed">Integración de modelos de IA (Gemini, ChatGPT) para programar más rápido, no reinventar la rueda y automatizar procesos core.</p>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
            
            {/* Tech Stack Banner Inferior */}
            <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 }}
                className="absolute bottom-4 left-0 w-full overflow-hidden border-t border-slate-800/50 bg-navy-space/30 py-4 backdrop-blur-sm hidden md:flex"
            >
                <div className="container mx-auto px-4 flex items-center justify-center gap-8 text-slate-500 font-mono text-xs opacity-70">
                    <span className="flex items-center gap-2"><i className="ri-reactjs-line text-lg text-cyan-600"></i> REACT.JS</span>
                    <span className="flex items-center gap-2"><i className="ri-tailwind-css-fill text-lg text-cyan-600"></i> TAILWIND</span>
                    <span className="flex items-center gap-2"><i className="ri-magic-line text-lg text-purple-600"></i> FRAMER MOTION</span>
                    <span className="flex items-center gap-2"><i className="ri-ubuntu-line text-lg text-orange-600"></i> LINUX / WEBOPS</span>
                    <span className="flex items-center gap-2"><i className="ri-openai-fill text-lg text-emerald-600"></i> AI DEV</span>
                </div>
            </motion.div>
        </section>
    );
};

export default TerminalHero;
