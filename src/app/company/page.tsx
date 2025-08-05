import { Building, Filter, MapPin, Search, Star, TrendingUp, Users } from "lucide-react"
import Header from "@/components/ui/header";
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from "next/link"

export default function CompanyPage() {

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
    },
    {
      id: 3,
      name: "Talkdesk",
      logo: "T",
      logoColor: "bg-green-600",
      description: "Cloud-based contact center software",
      location: "Lisboa, Coimbra",
      employees: "800+",
      sector: "SaaS",
      rating: 4.1,
      reviews: 156,
      openJobs: 15,
      matchScore: 68,
      salaryRange: "€38k - €48k",
      techStack: ["React", "Node.js", "Python", "PostgreSQL", "AWS"],
      hiring: true,
    },
    {
      id: 4,
      name: "Feedzai",
      logo: "F",
      logoColor: "bg-purple-600",
      description: "AI-powered risk management for financial services",
      location: "Lisboa, Porto",
      employees: "600+",
      sector: "FinTech",
      rating: 4.3,
      reviews: 98,
      openJobs: 6,
      matchScore: 65,
      salaryRange: "€42k - €55k",
      techStack: ["Java", "Python", "React", "Kafka", "Kubernetes"],
      hiring: false,
    },
    {
      id: 5,
      name: "Unbabel",
      logo: "U",
      logoColor: "bg-orange-600",
      description: "AI-powered language operations platform",
      location: "Lisboa",
      employees: "300+",
      sector: "AI/ML",
      rating: 4.0,
      reviews: 67,
      openJobs: 4,
      matchScore: 62,
      salaryRange: "€36k - €46k",
      techStack: ["Python", "React", "Django", "PostgreSQL", "Docker"],
      hiring: true,
    },
    {
      id: 6,
      name: "Prozis",
      logo: "P",
      logoColor: "bg-yellow-600",
      description: "E-commerce platform for sports nutrition and lifestyle",
      location: "Porto",
      employees: "400+",
      sector: "E-commerce",
      rating: 3.9,
      reviews: 123,
      openJobs: 3,
      matchScore: 58,
      salaryRange: "€28k - €38k",
      techStack: ["PHP", "JavaScript", "MySQL", "Redis", "Docker"],
      hiring: true,
    },
  ]


  return (
    <div className="flex flex-col min-h-screen">
    <Header/>
    <div className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Empresas Portuguesas</h1>
            <p className="text-gray-600 mt-2">Descobre as melhores empresas tech em Portugal</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input placeholder="Pesquisar empresas..." className="pl-10" />
            </div>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Localização" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todas</SelectItem>
                <SelectItem value="lisboa">Lisboa</SelectItem>
                <SelectItem value="porto">Porto</SelectItem>
                <SelectItem value="coimbra">Coimbra</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full sm:w-48">
                <SelectValue placeholder="Setor" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="ecommerce">E-commerce</SelectItem>
                <SelectItem value="fintech">FinTech</SelectItem>
                <SelectItem value="saas">SaaS</SelectItem>
                <SelectItem value="aiml">AI/ML</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="h-4 w-4 mr-2" />
              Mais Filtros
            </Button>
          </div>

          <div className="grid gap-4 md:grid-cols-4 mb-8">
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Building className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-600">Total Empresas</span>
                </div>
                <p className="text-2xl font-bold mt-1">500+</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-green-600" />
                  <span className="text-sm text-gray-600">A Contratar</span>
                </div>
                <p className="text-2xl font-bold mt-1">234</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-purple-600" />
                  <span className="text-sm text-gray-600">Vagas Abertas</span>
                </div>
                <p className="text-2xl font-bold mt-1">1,247</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4">
                <div className="flex items-center gap-2">
                  <Star className="h-4 w-4 text-yellow-600" />
                  <span className="text-sm text-gray-600">Rating Médio</span>
                </div>
                <p className="text-2xl font-bold mt-1">4.2</p>
              </CardContent>
            </Card>
          </div>

          {/* Companies Grid */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {companies.map((company) => (
              <Card key={company.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-12 h-12 ${company.logoColor} rounded-lg flex items-center justify-center`}>
                        <span className="text-white font-bold text-lg">{company.logo}</span>
                      </div>
                      <div>
                        <CardTitle className="text-lg">{company.name}</CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <div className="flex items-center gap-1">
                            <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                            <span className="text-sm text-gray-600">{company.rating}</span>
                          </div>
                          <span className="text-sm text-gray-400">•</span>
                          <span className="text-sm text-gray-600">{company.reviews} reviews</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      {company.hiring && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          A contratar
                        </Badge>
                      )}
                      <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                        Match: {company.matchScore}%
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="mb-4">{company.description}</CardDescription>

                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="h-4 w-4" />
                      <span>{company.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="h-4 w-4" />
                      <span>{company.employees} funcionários</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Building className="h-4 w-4" />
                      <span>{company.sector}</span>
                    </div>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm font-medium mb-2">Tech Stack:</p>
                    <div className="flex flex-wrap gap-1">
                      {company.techStack.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {company.techStack.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{company.techStack.length - 3}
                        </Badge>
                      )}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t">
                    <div>
                      <p className="text-sm text-gray-600">Salário Frontend</p>
                      <p className="font-medium">{company.salaryRange}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm text-gray-600">{company.openJobs} vagas</p>
                      <Link href={`/company/${company.id}`}>
                        <Button size="sm" className="mt-1">
                          Ver Detalhes
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <Button variant="outline" size="lg">
              Carregar Mais Empresas
            </Button>
          </div>
        </div>
      </div>
    
    </div>
  )
}