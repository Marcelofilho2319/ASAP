import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  const [isDark, setIsDark] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [ornitorrincoPos, setOrnitorrincoPos] = useState(-150);
  const location = useLocation();

  // Modo noturno
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  // Animação do ornitorrinco
  useEffect(() => {
    let animationId: number;
    let lastTime = 0;
    const speed = 60;

    const animate = (timestamp: number) => {
      if (!lastTime) lastTime = timestamp;
      const delta = (timestamp - lastTime) / 1000;
      
      setOrnitorrincoPos(prev => {
        const newPos = prev + speed * delta;
        return newPos > window.innerWidth ? -150 : newPos;
      });
      
      lastTime = timestamp;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, []);

  const navItems = [
    { path: '/', label: 'Início' },
    { path: '/dashboard', label: 'Painel' },
    { path: '/chatbot', label: 'Dr. Doug' },
    { path: '/articles', label: 'Artigos' },
    { path: '/team', label: 'Equipe' },
    { path: '/login', label: 'Login' }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-[#e6f4f7] dark:bg-gray-900 transition-colors duration-300">
      {/* Header */}
      <header className="bg-[#1f8d50] dark:bg-gray-800 text-white shadow-lg transition-colors duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <img 
                src="/img/ASAP /images/ASAPETEC.jpg" 
                alt="ASAP Logo" 
                className="h-12 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <h1 className="text-xl md:text-2xl font-bold">ASAP - Psicologia ETEC</h1>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-semibold hover:text-green-200 transition-colors ${
                    location.pathname === item.path ? 'text-green-200 underline' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className="text-white hover:bg-green-700"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center gap-2">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDark(!isDark)}
                className="text-white hover:bg-green-700"
              >
                {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:bg-green-700"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <nav className="md:hidden mt-4 pb-4 flex flex-col gap-3">
              {navItems.map(item => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-semibold hover:text-green-200 transition-colors py-2 ${
                    location.pathname === item.path ? 'text-green-200 underline' : ''
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 dark:bg-gray-950 text-white py-6 relative overflow-hidden transition-colors duration-300">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm md:text-base">
            &copy; 2025 ASAP - Apoio Sistêmico Acadêmico Psicológico ETEC - Todos os direitos reservados.
          </p>
          <p className="text-xs mt-2 text-gray-400">
            Plataforma de auxílio psicológico e denúncias para alunos da rede ETEC
          </p>
        </div>
        
        {/* Ornitorrinco andando */}
        <img
          src="/img/ornitorrinco-andando.gif"
          alt="Ornitorrinco andando"
          className="absolute bottom-2 w-32 md:w-40"
          style={{ left: `${ornitorrincoPos}px` }}
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
      </footer>
    </div>
  );
}