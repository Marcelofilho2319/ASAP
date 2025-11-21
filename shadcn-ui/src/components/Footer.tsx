import React, { useEffect, useState } from 'react';

const ORNITORRINCO_URL = '/img/ornitorrinco-andando.gif';
const ORNITORRINCO_ALT = 'Ornitorrinco andando';

export const Footer: React.FC = () => {
  const [ornitorrincoPos, setOrnitorrincoPos] = useState(-150);

  // Animação do ornitorrinco na footer
  useEffect(() => {
    let animationId: number;
    let lastTime = 0;
    const speed = 60; // pixels per second

    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const delta = (timestamp - lastTime) / 1000;

      setOrnitorrincoPos((prev) => {
        const newPos = prev + speed * delta;
        return newPos > window.innerWidth ? -150 : newPos;
      });

      lastTime = timestamp;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden border-t border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
              ASAP
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Apoio Sistêmico Acadêmico Psicológico - Plataforma de auxílio psicológico e denúncias para alunos da rede ETEC
            </p>
          </div>

          {/* Links Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Links Rápidos
            </h4>
            <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
              <li>
                <a href="/" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/team" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
                  Nossa Equipe
                </a>
              </li>
              <li>
                <a href="/articles" className="hover:text-teal-700 dark:hover:text-teal-400 transition-colors">
                  Artigos
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">
              Contato
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Email: contato@asap-etec.edu.br
            </p>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
              Telefone: (11) 3000-0000
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-sm text-gray-600 dark:text-gray-400">
          <p>
            &copy; {currentYear} ASAP - Todos os direitos reservados.
          </p>
        </div>
      </div>

      {/* Ornitorrinco Walking Animation */}
      <img
        src={ORNITORRINCO_URL}
        alt={ORNITORRINCO_ALT}
        className="absolute bottom-2 w-32 md:w-40 pointer-events-none"
        style={{ left: `${ornitorrincoPos}px`, opacity: 0.8 }}
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = 'none';
        }}
      />
    </footer>
  );
};
