import { ArrowLeft, Building, Calendar, Globe, MapPin, Star, Users } from "lucide-react"
import Header from "@/components/ui/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Link from "next/link"

const companies = [
  {
    id: 1,
    name: "Farfetch",
    logo: "F",
    logoColor: "bg-red-600",
    description: "Global technology platform for the luxury fashion industry",
    location: "Porto, Lisboa",
    employees: "1,000+",
    sector: "E-commerce",
    rating: 4.2,
    reviews: 234,
    openJobs: 12,
    matchScore: 78,
    salaryRange: "€35k - €45k",
    techStack: ["React", "TypeScript", "Next.js", ".NET Core", "AWS"],
    hiring: true,
    founded: 2007,
    website: "https://farfetch.com",
    longDescription: "A Farfetch é uma plataforma global de tecnologia para a indústria da moda de luxo. Com sede no Porto e escritórios em Lisboa, a empresa conecta marcas de luxo, boutiques e consumidores em todo o mundo através de uma plataforma de e-commerce inovadora.",
    culture: "Ambiente internacional e dinâmico, com foco na inovação e tecnologia de ponta. A empresa promove diversidade e inclusão, oferecendo oportunidades de crescimento profissional.",
    benefits: ["Seguro de saúde", "Plano de pensões", "Horário flexível", "Trabalho remoto", "Formação contínua", "Ginásio na empresa"],
    offices: [
      { city: "Porto", address: "Rua da Lionesa, 446L, 4465-671 Leça do Balio", employees: 800 },
      { city: "Lisboa", address: "Av. da Liberdade, 110, 1269-046 Lisboa", employees: 200 }
    ]
  },
  {
    id: 2,
    name: "OutSystems",
    logo: "O",
    logoColor: "bg-blue-600",
    description: "Low-code platform for rapid application development",
    location: "Lisboa, Porto",
    employees: "1,500+",
    sector: "Software",
    rating: 4.5,
    reviews: 189,
    openJobs: 8,
    matchScore: 72,
    salaryRange: "€40k - €50k",
    techStack: ["JavaScript", "React", "C#", "SQL Server", "Azure"],
    hiring: true,
    founded: 2001,
    website: "https://outsystems.com",
    longDescription: "A OutSystems é líder mundial em plataformas low-code para desenvolvimento rápido de aplicações. Fundada em Lisboa, ajuda organizações a acelerar a transformação digital.",
    culture: "Cultura de inovação e excelência técnica, com equipas multiculturais e ambiente colaborativo.",
    benefits: ["Seguro de saúde", "Stock options", "Horário flexível", "Trabalho remoto", "Formação técnica", "Eventos de team building"],
    offices: [
      { city: "Lisboa", address: "Campus do Taguspark, Av. Prof. Dr. Cavaco Silva, 2740-120 Oeiras", employees: 1200 },
      { city: "Porto", address: "Rua de Cedofeita, 285, 4050-180 Porto", employees: 300 }
    ]
  }
]

export default function CompanyDetailPage({ params }: { params: { id: string } }) {
  const companyId = parseInt(params.id)
  const company = companies.find(c => c.id === companyId)

  if (!company) {
    return (
      <div className="flex flex-col min-h-screen">
        <Header/>
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Empresa não encontrada</h1>
            <Link href="/company">
              <Button>Voltar às empresas</Button>
            </Link>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-6">
            <Link href="/company">
              <Button variant="ghost" className="mb-4">
                <ArrowLeft className="h-4 w-4 mr-2"/>
                Voltar às empresas
              </Button>
            </Link>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`w-16 h-16 ${company.logoColor} rounded-lg flex items-center justify-center`}>
                      <span className="text-white font-bold text-2xl">{company.logo}</span>
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-2xl mb-1">{company.name}</CardTitle>
                          <CardDescription className="text-base">{company.description}</CardDescription>
                        </div>
                        {company.hiring && (
                          <Badge className="bg-green-100 text-green-800">
                            A contratar
                          </Badge>
                        )}
                      </div>
                      <div className="flex items-center gap-4 mt-3">
                        <div className="flex items-center gap-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400"/>
                          <span className="font-medium">{company.rating}</span>
                          <span className="text-gray-600">({company.reviews} reviews)</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4 text-gray-600"/>
                          <span className="text-gray-600">{company.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
              </Card>

              <Tabs defaultValue="overview" className="space-y-6">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="overview">Visão Geral</TabsTrigger>
                  <TabsTrigger value="jobs">Vagas ({company.openJobs})</TabsTrigger>
                  <TabsTrigger value="culture">Cultura</TabsTrigger>
                  <TabsTrigger value="offices">Escritórios</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Sobre a empresa</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-4">{company.longDescription}</p>
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-gray-600"/>
                          <span className="text-sm">Fundada em {company.founded}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Globe className="h-4 w-4 text-gray-600"/>
                          <a href={company.website} target="_blank" rel="noopener noreferrer" 
                             className="text-sm text-blue-600 hover:underline">
                            {company.website}
                          </a>
                        </div>
                        <div className="flex items-center gap-2">
                          <Users className="h-4 w-4 text-gray-600"/>
                          <span className="text-sm">{company.employees} funcionários</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Building className="h-4 w-4 text-gray-600"/>
                          <span className="text-sm">{company.sector}</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Tech Stack</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {company.techStack.map((tech) => (
                          <Badge key={tech} variant="outline" className="text-sm">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="jobs" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Vagas em Aberto</CardTitle>
                      <CardDescription>
                        {company.openJobs} posições disponíveis
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[...Array(Math.min(company.openJobs, 5))].map((_, i) => (
                          <div key={i} className="border rounded-lg p-4">
                            <div className="flex items-start justify-between">
                              <div>
                                <h4 className="font-medium">Frontend Developer</h4>
                                <p className="text-sm text-gray-600 mt-1">
                                  {company.location} • {company.salaryRange}
                                </p>
                                <p className="text-sm text-gray-500 mt-2">
                                  Desenvolvimento de interfaces modernas com React e TypeScript
                                </p>
                              </div>
                              <Button size="sm">Candidatar</Button>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="culture" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Cultura & Ambiente</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-700 mb-6">{company.culture}</p>
                      
                      <h4 className="font-medium mb-3">Benefícios</h4>
                      <div className="grid gap-2 md:grid-cols-2">
                        {company.benefits.map((benefit) => (
                          <div key={benefit} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-500 rounded-full"/>
                            <span className="text-sm">{benefit}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>

                <TabsContent value="offices" className="space-y-4">
                  <div className="grid gap-4 md:grid-cols-2">
                    {company.offices.map((office) => (
                      <Card key={office.city}>
                        <CardHeader>
                          <CardTitle className="text-lg">{office.city}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2">
                            <div className="flex items-start gap-2">
                              <MapPin className="h-4 w-4 text-gray-600 mt-0.5"/>
                              <span className="text-sm text-gray-700">{office.address}</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <Users className="h-4 w-4 text-gray-600"/>
                              <span className="text-sm text-gray-700">{office.employees} funcionários</span>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Match Score</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-2">
                      {company.matchScore}%
                    </div>
                    <p className="text-sm text-gray-600">
                      Compatibilidade com o teu perfil
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Salário Frontend</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center">
                    <div className="text-2xl font-bold mb-2">
                      {company.salaryRange}
                    </div>
                    <p className="text-sm text-gray-600">
                      Gama salarial típica
                    </p>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Ações</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button className="w-full" size="lg">
                    Ver Vagas Disponíveis
                  </Button>
                  <Button variant="outline" className="w-full">
                    Seguir Empresa
                  </Button>
                  <Button variant="outline" className="w-full">
                    Partilhar
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
