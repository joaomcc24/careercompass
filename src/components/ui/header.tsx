'use client';

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useAuth } from "@/contexts/AuthContext"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { LogOut, User, Settings } from "lucide-react"

export default function Header() {
  const { user, logout, loading } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
    }
  };

  return (
    <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white">
      <Link className="flex items-center justify-center" href="/">
        <span className="font-bold text-xl">CareerCompass.pt</span>
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6 items-center">
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
          Início
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/company">
          Empresas
        </Link>
        <Link className="text-sm font-medium hover:underline underline-offset-4" href="/roadmaps">
          Roadmaps
        </Link>
        
        {loading ? (
          <div className="w-8 h-8 border-2 border-gray-300 border-t-blue-600 rounded-full animate-spin" />
        ) : user ? (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                <Avatar className="h-8 w-8">
                  <AvatarImage src={user.photoURL || undefined} alt="Avatar" />
                  <AvatarFallback>
                    {user.displayName?.charAt(0) || user.email?.charAt(0) || 'U'}
                  </AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <div className="flex items-center justify-start gap-2 p-2">
                <div className="flex flex-col space-y-1 leading-none">
                  {user.displayName && (
                    <p className="font-medium">{user.displayName}</p>
                  )}
                  <p className="w-[200px] truncate text-sm text-gray-600">
                    {user.email}
                  </p>
                </div>
              </div>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild>
                <Link href="/profile">
                  <User className="mr-2 h-4 w-4" />
                  Perfil
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/settings">
                  <Settings className="mr-2 h-4 w-4" />
                  Definições
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={handleLogout}>
                <LogOut className="mr-2 h-4 w-4" />
                Sair
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        ) : (
          <div className="flex gap-2">
            <Link href="/auth/signin">
              <Button variant="ghost" size="sm">
                Entrar
              </Button>
            </Link>
            <Link href="/auth/signup">
              <Button size="sm">
                Registar
              </Button>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}