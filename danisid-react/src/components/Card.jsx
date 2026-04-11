import React from 'react';

const Card = ({ title, icon, children, type = "default", badge }) => {
  const styles = {
    default: "glass-card hover:-translate-y-1.5",
    warning: "bg-amber-950/20 border-amber-500/20 backdrop-blur-md shadow-lg shadow-amber-900/5 hover:shadow-amber-500/10 hover:border-amber-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:bg-amber-900/20",
    info: "bg-cyan-950/20 border-cyan-500/20 backdrop-blur-md shadow-lg shadow-cyan-900/5 hover:shadow-cyan-500/10 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:bg-cyan-900/20",
    success: "bg-emerald-950/20 border-emerald-500/20 backdrop-blur-md shadow-lg shadow-emerald-900/5 hover:shadow-emerald-500/10 hover:border-emerald-500/40 transition-all duration-300 hover:-translate-y-1.5 hover:bg-emerald-900/20"
  };
  
  return (
    <div className={`p-8 rounded-3xl border ${styles[type]}`}>
      <div className="flex justify-between items-center mb-6">
        <h3 className="font-bold text-slate-100 flex items-center gap-3 text-lg md:text-xl tracking-wide font-outfit">
          <span className={type === 'default' ? 'text-cyan-400' : ''}>{icon}</span>
          {title}
        </h3>
        {badge && (
          <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-slate-800 text-slate-300 border border-slate-700">
            {badge}
          </span>
        )}
      </div>
      <div className="text-slate-300 text-base md:text-lg leading-relaxed font-outfit">
         {children}
      </div>
    </div>
  );
};

export default Card;
