"use client"

import { Clock, Search, Star, Target, Users } from "lucide-react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Header from "@/components/ui/header"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Progress } from "@/components/ui/progress"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function RoadmapsList() {
  const roadmaps = [
    {
      id: 1,
      title: "Frontend Developer - React",
      description: "Roadmap completo para conseguir trabalho como Frontend Developer em empresas portuguesas",
      duration: "6-8 meses",
      difficulty: "Intermediário",
      followers: 1234,
      rating: 4.8,
      reviews: 156,
      progress: 58,
      skills: 12,
      completedSkills: 7,
      targetCompanies: ["Farfetch", "OutSystems", "Talkdesk"],
      category: "Frontend",
      isFollowing: true,
    },
    {
      id: 2,
      title: "Backend Developer - Node.js",
      description: "Torna-te um Backend Developer especializado em Node.js e APIs RESTful",
      duration: "7-9 meses",
      difficulty: "Intermediate",
      followers: 892,
      rating: 4.6,
      reviews: 98,
      progress: 0,
      skills: 15,
      completedSkills: 0,
      targetCompanies: ["Talkdesk", "Feedzai", "Unbabel"],
      category: "Backend",
      isFollowing: false,
    },
    {
      id: 3,
      title: "Full Stack Developer - MERN",
      description: "Roadmap completo para Full Stack com MongoDB, Express, React e Node.js",
      duration: "10-12 meses",
      difficulty: "Advanced",
      followers: 756,
      rating: 4.7,
      reviews: 67,
      progress: 0,
      skills: 20,
      completedSkills: 0,
      targetCompanies: ["OutSystems", "Farfetch", "Prozis"],
      category: "Full Stack",
      isFollowing: false,
    },
    {
      id: 4,
      title: "Data Scientist - Python",
      description: "Especializa-te em Data Science com Python, Machine Learning e AI",
      duration: "8-10 meses",
      difficulty: "Advanced",
      followers: 634,
      rating: 4.5,
      reviews: 89,
      progress: 0,
      skills: 18,
      completedSkills: 0,
      targetCompanies: ["Feedzai", "Unbabel", "Talkdesk"],
      category: "Data Science",
      isFollowing: false,
    },
    {
      id: 5,
      title: "DevOps Engineer - AWS",
      description: "Torna-te especialista em DevOps com foco em AWS e Kubernetes",
      duration: "6-8 meses",
      difficulty: "Advanced",
      followers: 445,
      rating: 4.4,
      reviews: 52,
      progress: 0,
      skills: 14,
      completedSkills: 0,
      targetCompanies: ["Farfetch", "OutSystems", "Feedzai"],
      category: "DevOps",
      isFollowing: false,
    },
    {
      id: 6,
      title: "Mobile Developer - React Native",
      description: "Desenvolve apps mobile com React Native para iOS e Android",
      duration: "5-7 meses",
      difficulty: "Intermediate",
      followers: 567,
      rating: 4.3,
      reviews: 78,
      progress: 0,
      skills: 11,
      completedSkills: 0,
      targetCompanies: ["Farfetch", "Prozis", "Unbabel"],
      category: "Mobile",
      isFollowing: false,
    },
  ]

  return (
    <div className="flex flex-col min-h-screen">
      <Header/>
      <div className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Roadmaps de Carreira</h1>
            <p className="text-gray-600 mt-2">Escolhe o teu percurso para conseguir o job dos teus sonhos</p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <div className="flex flex-col sm:flex-row gap-4 mb-6">
              <div className="relative flex-1">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input placeholder="Pesquisar roadmaps..." className="pl-10" />
              </div>
              <TabsList className="grid w-full sm:w-auto grid-cols-3 sm:grid-cols-6">
                <TabsTrigger value="all">Todos</TabsTrigger>
                <TabsTrigger value="frontend">Frontend</TabsTrigger>
                <TabsTrigger value="backend">Backend</TabsTrigger>
                <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
                <TabsTrigger value="data">Data</TabsTrigger>
                <TabsTrigger value="devops">DevOps</TabsTrigger>
              </TabsList>
              <Select>
                <SelectTrigger className="w-full sm:w-48">
                  <SelectValue placeholder="Dificuldade" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Todas</SelectItem>
                  <SelectItem value="beginner">Beginner</SelectItem>
                  <SelectItem value="intermediate">Intermediate</SelectItem>
                  <SelectItem value="advanced">Advanced</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <TabsContent value="all" className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold mb-4">Os Meus Roadmaps</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {roadmaps
                    .filter((r) => r.isFollowing)
                    .map((roadmap) => (
                      <Card key={roadmap.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <CardTitle className="text-lg mb-2">{roadmap.title}</CardTitle>
                              <CardDescription className="mb-3">{roadmap.description}</CardDescription>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{roadmap.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{roadmap.followers}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{roadmap.rating}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <div className="flex justify-between text-sm mb-2">
                                <span>Progresso</span>
                                <span className="font-medium">
                                  {roadmap.completedSkills}/{roadmap.skills} skills
                                </span>
                              </div>
                              <Progress value={roadmap.progress} className="w-full" />
                            </div>

                            <div>
                              <p className="text-sm font-medium mb-2">Empresas Alvo:</p>
                              <div className="flex flex-wrap gap-1">
                                {roadmap.targetCompanies.map((company) => (
                                  <Badge key={company} variant="outline" className="text-xs">
                                    {company}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <Button className="w-full">
                              Continuar Roadmap
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-4">Roadmaps Populares</h2>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {roadmaps
                    .filter((r) => !r.isFollowing)
                    .map((roadmap) => (
                      <Card key={roadmap.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader className="pb-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center gap-2 mb-2">
                                <CardTitle className="text-lg">{roadmap.title}</CardTitle>
                                <Badge
                                  variant="outline"
                                  className={
                                    roadmap.difficulty === "Beginner"
                                      ? "border-green-200 text-green-800"
                                      : roadmap.difficulty === "Intermediate"
                                        ? "border-yellow-200 text-yellow-800"
                                        : "border-red-200 text-red-800"
                                  }
                                >
                                  {roadmap.difficulty}
                                </Badge>
                              </div>
                              <CardDescription className="mb-3">{roadmap.description}</CardDescription>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-600">
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4" />
                              <span>{roadmap.duration}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Users className="h-4 w-4" />
                              <span>{roadmap.followers}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                              <span>{roadmap.rating}</span>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-4">
                            <div>
                              <p className="text-sm font-medium mb-2">Empresas Alvo:</p>
                              <div className="flex flex-wrap gap-1">
                                {roadmap.targetCompanies.map((company) => (
                                  <Badge key={company} variant="outline" className="text-xs">
                                    {company}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div className="flex items-center justify-between text-sm text-gray-600">
                              <span>{roadmap.skills} skills</span>
                              <span>{roadmap.reviews} reviews</span>
                            </div>

                            <div className="flex gap-2">
                              <Button className="flex-1">
                                Ver Detalhes
                              </Button>
                              <Button variant="outline" size="sm">
                                Seguir
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
