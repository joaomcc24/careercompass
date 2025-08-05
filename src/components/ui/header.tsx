import Link from "next/link"
import { Target } from "lucide-react"
import { Button } from "./button"

export default function Header () {
    return (
     <header className="px-4 lg:px-6 h-15 flex items-center border-b">
        <Link className="flex items-center justify-center" href={"/"}>
          <Target className="h-6 w-6 text-blue-600"/>
          <span className="ml-2 text-xl font-bold">CareerCompass.pt</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href={"/"}>
          Início
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href={"/company"}>
          Empresas
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href={"#pricing"}>
          Preços
          </Link>
        </nav>
        <div className="ml-6 flex gap-2">
          <Button variant="ghost" size="sm">
          Entrar
          </Button>

          <Link href="/company">
            <Button size="sm">Começar grátis</Button>
          </Link>
        </div>
      </header>
      )
    }