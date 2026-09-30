import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Code2, Target, Lightbulb, Zap } from 'lucide-react';
import { T } from '../i18n';

export default function ProjectModal({ project, onClose }) {
  const [activeMedia, setActiveMedia] = useState(0);

  // Volver a la primera captura al cambiar de proyecto
  useEffect(() => {
    setActiveMedia(0);
  }, [project]);

  // Bloquear scroll del body cuando el modal está abierto
  useEffect(() => {
    if (project) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [project]);

  // Cerrar con la tecla Escape
  useEffect(() => {
    if (!project) return;
    const onKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [project, onClose]);

  if (!project) return null;

  const { caseStudy = {}, stack = [] } = project;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        className="fixed inset-0 z-[100] flex items-start md:items-center justify-center bg-black/80 backdrop-blur-md p-0 sm:p-6 md:p-12 overflow-y-auto"
      >
        {/* Cerrar siempre visible en móvil */}
        <button
          onClick={onClose}
          className="md:hidden fixed top-3 right-3 z-[110] p-3 rounded-full bg-[var(--color-ds-bg)]/90 border border-[var(--color-ds-border)] text-[var(--color-ds-text)] shadow-lg"
          aria-label={T.modal.close}
        >
          <X size={20} />
        </button>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-6xl bg-[var(--color-ds-bg)] sm:border border-[var(--color-ds-border)] shadow-2xl flex flex-col md:flex-row md:min-h-[600px] min-h-full sm:min-h-0 my-auto"
        >
          {/* Columna Izquierda: Galería Visual */}
          <div className="w-full md:w-1/2 lg:w-3/5 bg-[var(--color-ds-surface)] border-b md:border-b-0 md:border-r border-[var(--color-ds-border)] relative flex flex-col items-center justify-center px-4 pt-12 pb-6 md:p-8">
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[var(--color-ds-border)]"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--color-ds-border)]"></div>
              <div className="w-3 h-3 rounded-full bg-[var(--color-ds-border)]"></div>
            </div>
            
            {/* Imagen Principal + Miniaturas */}
            {project.media && project.media.length > 0 ? (
              <>
                <img
                  src={project.media[activeMedia] || project.media[0]}
                  alt={T.modal.preview(project.title, activeMedia + 1, project.media.length)}
                  className="w-full max-h-[60vh] object-contain shadow-2xl border border-[var(--color-ds-border)]"
                />
                {project.media.length > 1 && (
                  <div className="flex flex-wrap justify-center gap-2 mt-4">
                    {project.media.map((src, i) => (
                      <button
                        key={src}
                        onClick={() => setActiveMedia(i)}
                        className={`w-16 h-10 border overflow-hidden transition-all ${i === activeMedia ? 'border-[var(--color-ds-primary)] opacity-100' : 'border-[var(--color-ds-border)] opacity-50 hover:opacity-100'}`}
                        title={T.modal.shot(i + 1)}
                      >
                        <img src={src} alt="" className="w-full h-full object-cover object-top" />
                      </button>
                    ))}
                  </div>
                )}
              </>
            ) : (
              <div className="w-full aspect-[16/10] border border-dashed border-[var(--color-ds-border)] bg-[var(--color-ds-bg)] flex flex-col items-center justify-center text-[var(--color-ds-muted)]">
                <Code2 size={48} className="mb-4 opacity-50" />
                <p className="font-mono text-xs uppercase tracking-widest">{T.modal.placeholder}</p>
                <p className="font-sans text-xs mt-2 opacity-60">{T.modal.waiting(project.title)}</p>
              </div>
            )}
          </div>

          {/* Columna Derecha: Narrativa del Case Study */}
          <div className="w-full md:w-1/2 lg:w-2/5 p-6 sm:p-8 md:p-12 flex flex-col h-full bg-[var(--color-ds-bg)] relative md:overflow-y-auto md:max-h-[90vh]">
            
            {/* Header / Título */}
            <div className="mb-10">
              <div className="flex items-center justify-between mb-2">
                <span className="font-mono text-[var(--color-ds-primary)] font-bold">[{project.id}]</span>
                <button 
                  onClick={onClose}
                  className="hidden md:block p-2 text-[var(--color-ds-muted)] hover:text-white bg-red-500/10 hover:bg-red-500 transition-colors rounded-full md:absolute md:top-6 md:right-6"
                  title={T.modal.closeEsc}
                  aria-label={T.modal.close}
                >
                  <X size={20} />
                </button>
              </div>
              <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tighter text-[var(--color-ds-text)] mb-2 leading-none">
                {project.title}
              </h2>
              <p className="font-mono text-[10px] text-[var(--color-ds-muted)] uppercase tracking-widest">
                {project.subtitle}
              </p>
            </div>

            {/* Narrativa */}
            <div className="flex-1 space-y-8 mb-12">
              <div>
                <h3 className="text-sm font-bold text-[var(--color-ds-text)] mb-3 uppercase flex items-center gap-2">
                  <Target size={16} className="text-[var(--color-ds-primary)]" /> {T.modal.problem}
                </h3>
                <p className="font-mono text-[var(--color-ds-muted)] text-xs leading-relaxed">
                  {caseStudy.problem || T.modal.pending.problem}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[var(--color-ds-text)] mb-3 uppercase flex items-center gap-2">
                  <Lightbulb size={16} className="text-[var(--color-ds-primary)]" /> {T.modal.solution}
                </h3>
                <p className="font-mono text-[var(--color-ds-muted)] text-xs leading-relaxed">
                  {caseStudy.solution || T.modal.pending.solution}
                </p>
              </div>

              <div>
                <h3 className="text-sm font-bold text-[var(--color-ds-text)] mb-3 uppercase flex items-center gap-2">
                  <Zap size={16} className="text-[var(--color-ds-primary)]" /> {T.modal.result}
                </h3>
                <p className="font-mono text-[var(--color-ds-muted)] text-xs leading-relaxed">
                  {caseStudy.result || T.modal.pending.result}
                </p>
              </div>

              {/* Stack Técnico */}
              {stack.length > 0 ? (
                <div className="pt-4 border-t border-[var(--color-ds-border)]">
                  <h3 className="text-[10px] font-mono text-[var(--color-ds-muted)] mb-3 uppercase tracking-widest">{T.modal.stack}</h3>
                  <div className="flex flex-wrap gap-2">
                    {stack.map((tech, i) => (
                      <span key={i} className="px-3 py-1 bg-[var(--color-ds-surface)] border border-[var(--color-ds-border)] text-xs font-mono text-[var(--color-ds-text)]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="pt-4 border-t border-[var(--color-ds-border)]">
                  <h3 className="text-[10px] font-mono text-[var(--color-ds-muted)] mb-3 uppercase tracking-widest">{T.modal.stack}</h3>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[var(--color-ds-surface)] border border-[var(--color-ds-border)] text-xs font-mono text-[var(--color-ds-muted)]">{T.modal.stackPending}</span>
                  </div>
                </div>
              )}
            </div>

            {/* CTA */}
            {(project.url || project.github) && (
              <div className="mt-auto pt-6 border-t border-[var(--color-ds-border)]">
                <a 
                  href={project.url || project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-full flex items-center justify-center gap-3 px-6 py-4 font-mono text-sm font-bold text-black uppercase transition-all bg-[var(--color-ds-primary)] hover:bg-white hover:scale-[1.02]"
                >
                  {project.url ? T.modal.live : T.modal.code} <ExternalLink size={18} />
                </a>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
