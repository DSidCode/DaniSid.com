import React, { useEffect, useState } from 'react';

const evolutions = [
  { id: 'theme-legacy', phase: '01', name: 'Legacy (Startup)', color: '#FF2A2A', icon: 'fa-fire' },
  { id: 'theme-ocean', phase: '02', name: 'Deep Ocean (Corp)', color: '#38BDF8', icon: 'fa-water' },
  { id: 'theme-apex', phase: '03', name: 'Maison Core (Dark)', color: '#C5A059', icon: 'fa-crown' },
  { id: 'theme-vintage', phase: '04', name: 'Vintage Mafia (Muted)', color: '#009099', icon: 'fa-user-secret' },
  { id: 'theme-pastel', phase: '05', name: 'Pastel Canvas', color: '#6EFBFF', icon: 'fa-palette' },
  { id: 'theme-nigredo', phase: '06', name: 'Nigredo (Dark)', color: '#D4AF37', icon: 'fa-moon' },
  { id: 'theme-albedo', phase: '06', name: 'Albedo (Light)', color: '#1A1A1A', icon: 'fa-sun' }
];

export default function ThemeSwitcher() {
  const [currentIndex, setCurrentIndex] = useState(2); // Iniciar en Apex Predator

  useEffect(() => {
    // Recuperar el tema guardado, por defecto Apex Predator
    const savedTheme = localStorage.getItem('app-theme') || 'theme-apex';
    const index = evolutions.findIndex(e => e.id === savedTheme);
    if (index !== -1) {
      setCurrentIndex(index);
    }
    document.documentElement.className = savedTheme;
  }, []);

  const cycleTheme = () => {
    const nextIndex = (currentIndex + 1) % evolutions.length;
    const nextTheme = evolutions[nextIndex];
    
    setCurrentIndex(nextIndex);
    localStorage.setItem('app-theme', nextTheme.id);
    document.documentElement.className = nextTheme.id;
  };

  const toggleLightDark = () => {
    const isDark = currentEvo.id === 'theme-nigredo';
    const isLight = currentEvo.id === 'theme-albedo';
    
    let targetIndex = 5; // Default to Nigredo
    if (isDark) targetIndex = 6; // Go to Albedo
    if (isLight) targetIndex = 5; // Go to Nigredo

    setCurrentIndex(targetIndex);
    localStorage.setItem('app-theme', evolutions[targetIndex].id);
    document.documentElement.className = evolutions[targetIndex].id;
  };

  const currentEvo = evolutions[currentIndex];

  return (
    <div className="fixed bottom-6 left-6 z-50 flex items-center gap-3">
      {/* Botón Principal (Bucle) */}
      <button 
        onClick={cycleTheme}
        className="text-white p-3 rounded-full shadow-2xl border transition-all duration-300 flex items-center justify-center w-14 h-14 relative group overflow-hidden"
        style={{ 
          backgroundColor: 'var(--color-ds-surface)',
          borderColor: currentEvo.color,
          boxShadow: `0 0 20px ${currentEvo.color}33`
        }}
        title="Ciclo Evolutivo (Cambiar Tema)"
      >
        <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity" style={{ backgroundColor: currentEvo.color }}></div>
        <i className={`fa-solid ${currentEvo.icon} text-xl transition-transform group-hover:scale-110`} style={{ color: currentEvo.color }}></i>
      </button>

      {/* Info Flotante de Evolución */}
      <div className="bg-[var(--color-ds-surface)]/90 backdrop-blur-md px-4 py-2 rounded-full border shadow-xl flex items-center gap-3 pointer-events-none" style={{ borderColor: 'var(--color-ds-border)' }}>
        <span className="font-mono text-xs font-bold" style={{ color: currentEvo.color }}>EVO.{currentEvo.phase}</span>
        <span className="font-sans text-xs text-white uppercase tracking-widest">{currentEvo.name}</span>
      </div>

      {/* Interruptor Claro/Oscuro (Solo para Quimera, o salta a Quimera) */}
      <button 
        onClick={toggleLightDark}
        className="bg-[var(--color-ds-surface)] text-[var(--color-ds-text)] p-3 rounded-full shadow-xl border border-[var(--color-ds-border)] transition-all duration-300 flex items-center justify-center w-12 h-12 hover:scale-110"
        title="Modo Alquímico (Claro/Oscuro)"
      >
        <i className={`fa-solid ${currentEvo.id === 'theme-albedo' ? 'fa-moon' : 'fa-sun'} text-lg`}></i>
      </button>
    </div>
  );
}
