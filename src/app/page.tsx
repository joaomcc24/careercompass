import { ArrowRight, CheckCircle, MapPin, Target, TrendingUp, Users } from "lucide-react"
import Link from "next/link";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Header from "@/components/ui/header";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen ">
      <Header/>
      {/* min-h-screen -> adicionar? */}
      <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
            <div className="flex flex-col justify-center space-y-4 ml-3">
              <div className="space-y-2">
                <Badge className="w-fit">🧭 O teu GPS para o mercado português!</Badge>
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">From Lost to Hired </h1>
                <p className="maxx-w-[600px] text-gray-500 md:text-xl">O teu roadmap personalizado para conseguir o emprego dos teus sonhos em Portugal. Dados reais, 
                  empresas portuguesas, salários transparentes
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Link href="/company">
                  <Button size={"lg"} className="bg-blue-600 hover:bg-blue-700">Começar Roadmap Grátis </Button>
                </Link>
                <Button size={"lg"} variant="outline">Ver Demo</Button>
              </div>
              <div className="flex items-center gap-4 text-sm text-gray-500">
                <div className="flex items-center gap-1">
                <CheckCircle className="text-green-500"/>
                Grátis para começar
                </div>
                <div className="flex items-center gap-1">
                <CheckCircle className="text-green-500"/>
                Dados de 500+ empresas PT
                </div>
              </div>
            </div>
          <div className="flex items-center justify-center ml-auto">
            <div className="relative w-full max-w-md">
              <Card className="w-full">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                  <Target className="h-6 w-6 text-blue-600"/>
                  Frontend Developer
                  </CardTitle>
                  <CardDescription>Roadmap para variadas empresas a atuar em Portugal</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">React & Typescript</span>
                      <Badge variant={"secondary"}>Completo</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Next.js</span>
                      <Badge variant={"outline"}>Em progresso</Badge>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-sm">Testing (Jest/Cypress)</span>
                      <Badge variant={"outline"}>A seguir</Badge>
                    </div>
                  </div>

                  <div className="mt-4 pt-4 border-t">
                    <div className="flex items-center justify-between text-sm">
                    <span className="font-semibold">Progresso</span>
                    <span className="font-medium">60%</span>
                    </div>
                  <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                  </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-3">
          
          <div className="flex flex-col gap-2 items-center text-center space-y-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100">
              <Users className="h-6 w-6 text-blue-600"/>
            </div>
            <h3 className="text-2xl font-bold">2500+</h3>
            <p className="text-gray-500">Profissionais contratados</p>
          </div>
          
          <div className="flex flex-col gap-2 items-center text-center space-y-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100">
              <TrendingUp className="text-green-600 h-6 w-6"/>
            </div>
            <h3 className="text-2xl font-bold">€45k</h3>
            <p className="text-gray-500">Salário médio</p>
          </div>

          <div className="flex flex-col gap-2 items-center text-center space-y-2">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100">
              <MapPin className="text-purple-600"/>
            </div>
            <h3 className="text-2xl font-bold">500+</h3>
            <p className="text-gray-500">Empresas portuguesas</p>
          </div>

        </div>
      </div>
    </section>

    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
            Empresas que confiam em nós
          </h2>

          <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          Os nossos utilizadores trabalham nas melhores empresas portuguesas
          </p>
          
          </div>  
        </div> 
        <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-5 lg:gap-12">
            <div className="flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <span className="font-bold text-lg">Farfetch</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <span className="font-bold text-lg">Outsystems</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <span className="font-bold text-lg">Talkdesk</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <span className="font-bold text-lg">Feedzai</span>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <span className="font-bold text-lg">Unbabel</span>
              </div>
            </div>
        </div>       
      </div>
    </section>

    <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                Pronto para começar?
              </h2>
              <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                Junta-te a milhares de profissionais que já conseguiram o emprego dos seus sonhos
              </p>
            </div>
            <div className="space-x-4">
              <Link href="/company">
                <Button size="lg" variant="secondary">
                  Começar Roadmap Grátis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>


      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2025 CareerCompass.pt. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}
