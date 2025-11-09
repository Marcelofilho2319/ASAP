<<<<<<< HEAD
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  // Simulação de login com Microsoft
  const handleMicrosoftLogin = async () => {
    setIsLoading(true);
    setShowMessage(false);

    // TODO: Implementar OAuth com Microsoft
    // const response = await fetch('/api/auth/microsoft');
    
    // Simulação de delay de autenticação
    setTimeout(() => {
      setIsLoading(false);
      setShowMessage(true);
      
      // Redirecionar para dashboard após "login"
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }, 2000);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@etec.sp.gov.br')) {
      handleMicrosoftLogin();
    } else {
      alert('Por favor, use seu email institucional da ETEC (@etec.sp.gov.br)');
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <img 
                src="/img/ASAP /images/photo1762708373.jpg" 
                alt="ASAP Logo" 
                className="h-24 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <CardTitle className="text-3xl font-bold text-[#1f8d50] dark:text-green-400">
              Login ASAP
            </CardTitle>
            <CardDescription className="text-base">
              Entre com sua conta institucional da ETEC
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Institucional</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu.nome@etec.sp.gov.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-base"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#1f8d50] hover:bg-[#15703d] text-white font-semibold text-base py-6"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Conectando...
                  </>
                ) : (
                  <>
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 23 23" fill="currentColor">
                      <path d="M11.5 0L0 6.5v10l11.5 6.5L23 16.5v-10L11.5 0zm0 2.3l9.2 5.2-9.2 5.2-9.2-5.2 9.2-5.2zm-9.2 12.4l9.2 5.2v-8.4l-9.2-5.2v8.4zm18.4 0v-8.4l-9.2 5.2v8.4l9.2-5.2z"/>
                    </svg>
                    Entrar com Microsoft
                  </>
                )}
              </Button>
            </form>

            {showMessage && (
              <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <AlertDescription className="text-green-800 dark:text-green-200">
                  Login realizado com sucesso! Redirecionando...
                </AlertDescription>
              </Alert>
            )}

            <div className="flex justify-center">
              <img 
                src="/img/Ornitorrinco-Acenando.gif" 
                alt="Dr. Doug acenando" 
                className="h-32 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p>
                Use sua conta institucional da ETEC para acessar a plataforma
              </p>
              <p className="text-xs">
                <strong>Nota:</strong> Este é um ambiente de desenvolvimento. 
                A integração com Microsoft OAuth será implementada em produção.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Espaço para API futura */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200 font-mono">
            {`// TODO: Implementar Microsoft OAuth API`}
            <br />
            {`// Endpoint: ${window.location.origin}/api/auth/microsoft`}
          </p>
        </div>
      </div>
    </div>
  );
=======
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Loader2 } from 'lucide-react';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const navigate = useNavigate();

  // Simulação de login com Microsoft
  const handleMicrosoftLogin = async () => {
    setIsLoading(true);
    setShowMessage(false);

    // TODO: Implementar OAuth com Microsoft
    // const response = await fetch('/api/auth/microsoft');
    
    // Simulação de delay de autenticação
    setTimeout(() => {
      setIsLoading(false);
      setShowMessage(true);
      
      // Redirecionar para dashboard após "login"
      setTimeout(() => {
        navigate('/dashboard');
      }, 1500);
    }, 2000);
  };

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.includes('@etec.sp.gov.br')) {
      handleMicrosoftLogin();
    } else {
      alert('Por favor, use seu email institucional da ETEC (@etec.sp.gov.br)');
    }
  };

  return (
    <div className="min-h-[calc(100vh-200px)] flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        <Card className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm shadow-2xl">
          <CardHeader className="text-center space-y-4">
            <div className="flex justify-center">
              <img 
                src="/img/ASAP /images/photo1762708373.jpg" 
                alt="ASAP Logo" 
                className="h-24 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>
            <CardTitle className="text-3xl font-bold text-[#1f8d50] dark:text-green-400">
              Login ASAP
            </CardTitle>
            <CardDescription className="text-base">
              Entre com sua conta institucional da ETEC
            </CardDescription>
          </CardHeader>

          <CardContent className="space-y-6">
            <form onSubmit={handleEmailSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email Institucional</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="seu.nome@etec.sp.gov.br"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="text-base"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-[#1f8d50] hover:bg-[#15703d] text-white font-semibold text-base py-6"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Conectando...
                  </>
                ) : (
                  <>
                    <svg className="mr-2 h-5 w-5" viewBox="0 0 23 23" fill="currentColor">
                      <path d="M11.5 0L0 6.5v10l11.5 6.5L23 16.5v-10L11.5 0zm0 2.3l9.2 5.2-9.2 5.2-9.2-5.2 9.2-5.2zm-9.2 12.4l9.2 5.2v-8.4l-9.2-5.2v8.4zm18.4 0v-8.4l-9.2 5.2v8.4l9.2-5.2z"/>
                    </svg>
                    Entrar com Microsoft
                  </>
                )}
              </Button>
            </form>

            {showMessage && (
              <Alert className="bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800">
                <AlertDescription className="text-green-800 dark:text-green-200">
                  Login realizado com sucesso! Redirecionando...
                </AlertDescription>
              </Alert>
            )}

            <div className="flex justify-center">
              <img 
                src="/img/Ornitorrinco-Acenando.gif" 
                alt="Dr. Doug acenando" 
                className="h-32 w-auto"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
            </div>

            <div className="text-center text-sm text-gray-600 dark:text-gray-400 space-y-2">
              <p>
                Use sua conta institucional da ETEC para acessar a plataforma
              </p>
              <p className="text-xs">
                <strong>Nota:</strong> Este é um ambiente de desenvolvimento. 
                A integração com Microsoft OAuth será implementada em produção.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Espaço para API futura */}
        <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
          <p className="text-sm text-blue-800 dark:text-blue-200 font-mono">
            {`// TODO: Implementar Microsoft OAuth API`}
            <br />
            {`// Endpoint: ${window.location.origin}/api/auth/microsoft`}
          </p>
        </div>
      </div>
    </div>
  );
>>>>>>> 3c2d5cf (ASAP)
}