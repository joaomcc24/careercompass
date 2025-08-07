// app/auth/signup/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useAuth } from '@/contexts/AuthContext';
import { Alert, AlertDescription } from "@/components/ui/alert";
import { CheckCircle2, Eye, EyeOff } from 'lucide-react';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { signUp, signInWithGoogle } = useAuth();
  const router = useRouter();

  const passwordValidation = {
    length: password.length >= 6,
    hasNumber: /\d/.test(password),
    hasLetter: /[a-zA-Z]/.test(password)
  };

  const isPasswordValid = Object.values(passwordValidation).every(Boolean);
  const passwordsMatch = password === confirmPassword && confirmPassword !== '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!isPasswordValid) {
      setError('A senha não cumpre os requisitos');
      return;
    }

    if (!passwordsMatch) {
      setError('As senhas não coincidem');
      return;
    }

    setLoading(true);

    try {
      await signUp(email, password);
      // TODO: guardar username no Firestore
      router.push('/dashboard');
    } catch (error: any) {
      if (error.code === 'auth/email-already-in-use') {
        setError('Este email já está registado');
      } else if (error.code === 'auth/weak-password') {
        setError('Senha muito fraca');
      } else if (error.code === 'auth/invalid-email') {
        setError('Email inválido');
      } else {
        setError('Erro ao criar conta. Tenta novamente.');
      }
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleSignUp = async () => {
    setError('');
    setLoading(true);

    try {
      await signInWithGoogle();
      router.push('/dashboard');
    } catch (error: any) {
      setError('Erro ao registar com Google');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div className="text-center">
          <h2 className="mt-6 text-3xl font-bold text-gray-900">
            Criar conta nova
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Ou{' '}
            <Link href="/auth/signin" className="font-medium text-blue-600 hover:text-blue-500">
              entra na tua conta existente
            </Link>
          </p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Registo</CardTitle>
            <CardDescription>
              Cria a tua conta CareerCompass
            </CardDescription>
          </CardHeader>
          <CardContent>
            {error && (
              <Alert variant="destructive" className="mb-4">
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <Input
                  id="name"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="João Silva"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  placeholder="exemplo@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Senha
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>

                {/* Password Requirements */}
                {password && (
                  <div className="mt-2 space-y-1">
                    <div className={`flex items-center text-xs ${passwordValidation.length ? 'text-green-600' : 'text-gray-500'}`}>
                      <CheckCircle2 className={`h-3 w-3 mr-1 ${passwordValidation.length ? 'text-green-600' : 'text-gray-300'}`} />
                      Mínimo 6 caracteres
                    </div>
                    <div className={`flex items-center text-xs ${passwordValidation.hasLetter ? 'text-green-600' : 'text-gray-500'}`}>
                      <CheckCircle2 className={`h-3 w-3 mr-1 ${passwordValidation.hasLetter ? 'text-green-600' : 'text-gray-300'}`} />
                      Pelo menos uma letra
                    </div>
                    <div className={`flex items-center text-xs ${passwordValidation.hasNumber ? 'text-green-600' : 'text-gray-500'}`}>
                      <CheckCircle2 className={`h-3 w-3 mr-1 ${passwordValidation.hasNumber ? 'text-green-600' : 'text-gray-300'}`} />
                      Pelo menos um número
                    </div>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmar senha
                </label>
                <div className="relative">
                  <Input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    placeholder="••••••••"
                    className="pr-10"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  >
                    {showConfirmPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </button>
                </div>

                {confirmPassword && (
                  <div className={`flex items-center text-xs mt-1 ${passwordsMatch ? 'text-green-600' : 'text-red-600'}`}>
                    <CheckCircle2 className={`h-3 w-3 mr-1 ${passwordsMatch ? 'text-green-600' : 'text-red-300'}`} />
                    {passwordsMatch ? 'Senhas coincidem' : 'Senhas não coincidem'}
                  </div>
                )}
              </div>

              <Button
                type="submit"
                className="w-full"
                disabled={loading || !isPasswordValid || !passwordsMatch || !email || !name}
              >
                {loading ? 'A criar conta...' : 'Criar Conta'}
              </Button>
            </form>

            <div className="mt-6">
              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-gray-300" />
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-2 bg-white text-gray-500">Ou regista-te com</span>
                </div>
              </div>

              <div className="mt-6">
                <Button
                  onClick={handleGoogleSignUp}
                  variant="outline"
                  className="w-full"
                  disabled={loading}
                >
                  Continuar com Google
                </Button>
              </div>
            </div>

            <div className="mt-4 text-center text-xs text-gray-600">
              Ao criares conta, concordas com os{' '}
              <Link href="/terms" className="text-blue-600 hover:text-blue-500">
                Termos de Serviço
              </Link>{' '}
              e{' '}
              <Link href="/privacy" className="text-blue-600 hover:text-blue-500">
                Política de Privacidade
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}