import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    // Bloquear scroll del body cuando el modal está abierto
    document.body.style.overflow = 'hidden';

    // Cerrar con tecla ESC
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEsc);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [onClose]);

  if (!project) return null;

  // Función para cerrar el modal al hacer clic en el fondo (overlay)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const isInternalFrame = project.isInternalFrame;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-navy-space/80 backdrop-blur-md p-4" 
        onClick={handleOverlayClick}
      >
        <motion.div 
          initial={{ scale: 0.9, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          exit={{ scale: 0.9, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          className={`relative bg-navy-space/90 border border-cyan-acento/30 shadow-[0_0_50px_rgba(6,214,160,0.15)] rounded-2xl overflow-hidden max-h-[90vh] w-full ${isInternalFrame ? 'max-w-5xl' : 'max-w-3xl'} flex flex-col md:flex-row`}
        >
          <button 
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-cyan-acento/10 text-cyan-acento rounded-full hover:bg-cyan-acento hover:text-navy-space transition-colors" 
            onClick={onClose} 
            aria-label="Cerrar modal"
          >
            ✕
          </button>

          <div className="w-full md:w-1/2 bg-black/50 flex items-center justify-center overflow-hidden min-h-[250px]">
            {isInternalFrame ? (
              <div className="w-full h-full min-h-[400px]">
                <iframe src={project.projectUrl} title={project.name} className="w-full h-full border-0"></iframe>
              </div>
            ) : project.isVideo ? (
              <video src={project.imageUrl} autoPlay loop muted playsInline className="w-full h-full object-cover"></video>
            ) : project.imageUrl ? (
              <img src={project.imageUrl} alt={`Vista detallada de ${project.name}`} className="w-full h-full object-cover" />
            ) : (
              <div className="text-cyan-acento/50 font-mono flex flex-col items-center">
                <span className="text-4xl mb-2">⌬</span>
                <span>Concept Phase</span>
              </div>
            )}
          </div>

          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col overflow-y-auto custom-scrollbar">
            <h2 className="text-2xl font-bold font-mono text-white mb-4 drop-shadow-[0_0_8px_rgba(6,214,160,0.4)]">
                {project.name}
            </h2>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
                {project.description}
            </p>

            {project.skills && project.skills.length > 0 && (
              <div className="mb-8">
                <h3 className="text-cyan-acento text-xs font-bold tracking-widest uppercase mb-3">Stack Técnico</h3>
                <div className="flex flex-wrap gap-3">
                  {project.skills.map((skill, index) => (
                    <div key={index} className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-lg">
                        <img src={skill.icon} alt={skill.name} className="w-5 h-5" title={skill.name} />
                        <span className="text-xs text-slate-300 font-medium">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            <div className="mt-auto pt-4">
                {!isInternalFrame && project.projectUrl !== "#" && (
                <a 
                    href={project.projectUrl} 
                    className="inline-flex items-center justify-center w-full md:w-auto bg-cyan-acento text-navy-space font-bold px-6 py-3 rounded-lg hover:bg-white hover:shadow-[0_0_20px_rgba(6,214,160,0.4)] transition-all" 
                    target="_blank" 
                    rel="noopener noreferrer"
                >
                    {project.linkText || "System Link [↗]"}
                </a>
                )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectModal;