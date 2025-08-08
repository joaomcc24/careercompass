"use client"

import { Bell, Calendar, CheckCircle, Edit, Mail, MapPin, Settings, Star, Target, TrendingUp, User, Users } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function UserProfile() {
  const user = {
    id: "user_123",
    name: "João Silva",
    email: "joao.silva@email.com",
    avatar: "/placeholder.svg?height=80&width=80",
    location: "Lisboa, Portugal",
    bio: "Frontend Developer apaixonado por React e TypeScript. À procura de novas oportunidades em empresas inovadoras.",
    joinDate: "Janeiro 2024",
    github: "joaosilva",
    linkedin: "joao-silva-dev",
    website: "joaosilva.dev",
    skills: ["React", "TypeScript", "JavaScript", "HTML", "CSS", "Node.js"],
    interests: ["Frontend", "Full Stack", "UI/UX"],
    experience: "2-3 anos",
    currentGoal: "Frontend Developer",
    targetSalary: "€35k - €45k",
    preferredLocation: "Lisboa, Porto, Remote",
    notifications: {
      email: true,
      push: true,
      roadmapUpdates: true,
      jobAlerts: true,
      communityActivity: false,
    }
  }

  const activeRoadmaps = [
    {
      id: "roadmap_1",
      title: "Frontend Developer - React",
      progress: 58,
      completedSkills: 7,
      totalSkills: 12,
      startDate: "2024-01-15",
      estimatedCompletion: "2024-07-15",
      targetCompanies: ["Farfetch", "OutSystems", "Talkdesk"],
      status: "active",
      lastActivity: "2024-01-20"
    },
    {
      id: "roadmap_2", 
      title: "TypeScript Mastery",
      progress: 25,
      completedSkills: 3,
      totalSkills: 8,
      startDate: "2024-01-10",
      estimatedCompletion: "2024-04-10",
      targetCompanies: ["Farfetch", "Feedzai"],
      status: "paused",
      lastActivity: "2024-01-18"
    }
  ]

  const userStats = {
    totalSkillsCompleted: 10,
    consecutiveDays: 12,
    projectsCompleted: 3,
    communityPosts: 5,
    mentoringSessions: 2,
    jobApplications: 8,
    interviewsScheduled: 3,
    totalLearningHours: 45
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <header className="px-4 lg:px-6 h-14 flex items-center border-b bg-white">
        <button className="flex items-center justify-center">
          <Target className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-xl font-bold">CareerCompass.pt</span>
        </button>
        <nav className="ml-8 flex gap-6">
          <button
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Dashboard
          </button>
          <button
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Roadmaps
          </button>
          <button
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Empresas
          </button>
          <button
            className="text-sm font-medium text-gray-600 hover:text-gray-900"
          >
            Community
          </button>
        </nav>
        <div className="ml-auto flex items-center gap-4">
          <Button variant="ghost" size="sm">
            <Bell className="h-4 w-4" />
          </Button>
          <Avatar className="h-8 w-8 ring-2 ring-blue-600">
            <AvatarImage src={user.avatar || "/placeholder.svg"} />
            <AvatarFallback>JS</AvatarFallback>
          </Avatar>
        </div>
      </header>

      <div className="flex-1 bg-gray-50">
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg p-8 mb-8 shadow-sm">
            <div className="flex items-start gap-6">
              <div className="relative">
                <Avatar className="w-20 h-20">
                  <AvatarImage src={user.avatar || "/placeholder.svg"} />
                  <AvatarFallback className="text-2xl">JS</AvatarFallback>
                </Avatar>
                <Button size="sm" variant="outline" className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0">
                  <Edit className="h-3 w-3" />
                </Button>
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-4 mb-2">
                  <h1 className="text-3xl font-bold">{user.name}</h1>
                  <Badge variant="secondary" className="bg-green-100 text-green-800">
                    Ativo
                  </Badge>
                </div>
                <p className="text-gray-600 mb-3">{user.bio}</p>
                <div className="flex items-center gap-6 text-sm text-gray-600 mb-4">
                  <div className="flex items-center gap-2">
                    <MapPin className="h-4 w-4" />
                    <span>{user.location}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>Membro desde {user.joinDate}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4" />
                    <span>Objetivo: {user.currentGoal}</span>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm">
                    <Edit className="h-4 w-4 mr-2" />
                    Editar Perfil
                  </Button>
                  <Button variant="outline" size="sm">
                    <Settings className="h-4 w-4 mr-2" />
                    Definições
                  </Button>
                </div>
              </div>
              <div className="text-right">
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div>
                    <p className="text-2xl font-bold text-blue-600">{userStats.totalSkillsCompleted}</p>
                    <p className="text-sm text-gray-600">Skills</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-green-600">{userStats.consecutiveDays}</p>
                    <p className="text-sm text-gray-600">Dias</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-purple-600">{userStats.projectsCompleted}</p>
                    <p className="text-sm text-gray-600">Projetos</p>
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-orange-600">{userStats.jobApplications}</p>
                    <p className="text-sm text-gray-600">Candidaturas</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Tabs defaultValue="roadmaps" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="roadmaps">Meus Roadmaps</TabsTrigger>
              <TabsTrigger value="activity">Atividade</TabsTrigger>
              <TabsTrigger value="settings">Definições</TabsTrigger>
              <TabsTrigger value="stats">Estatísticas</TabsTrigger>
              <TabsTrigger value="achievements">Conquistas</TabsTrigger>
            </TabsList>

            <TabsContent value="roadmaps" className="space-y-6 mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                {activeRoadmaps.map((roadmap) => (
                  <Card key={roadmap.id} className={roadmap.status === 'paused' ? 'opacity-75' : ''}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">{roadmap.title}</CardTitle>
                        <Badge variant={roadmap.status === 'active' ? 'default' : 'secondary'}>
                          {roadmap.status === 'active' ? 'Ativo' : 'Pausado'}
                        </Badge>
                      </div>
                      <CardDescription>
                        Iniciado em {new Date(roadmap.startDate).toLocaleDateString('pt-PT')}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span>Progresso</span>
                            <span className="font-medium">
                              {roadmap.completedSkills}/{roadmap.totalSkills} skills
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

                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <span>Última atividade: {new Date(roadmap.lastActivity).toLocaleDateString('pt-PT')}</span>
                          <span>Conclusão: {new Date(roadmap.estimatedCompletion).toLocaleDateString('pt-PT')}</span>
                        </div>

                        <div className="flex gap-2">
                          <Button 
                            className="flex-1" 
                            variant={roadmap.status === 'active' ? 'default' : 'outline'}
                          >
                            {roadmap.status === 'active' ? 'Continuar' : 'Retomar'}
                          </Button>
                          <Button variant="outline" size="sm">
                            {roadmap.status === 'active' ? 'Pausar' : 'Arquivar'}
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}

                <Card className="border-dashed border-2 border-gray-300 hover:border-blue-400 transition-colors">
                  <CardContent className="flex flex-col items-center justify-center p-8 text-center">
                    <Target className="h-12 w-12 text-gray-400 mb-4" />
                    <h3 className="font-medium mb-2">Adicionar Novo Roadmap</h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Explora novos caminhos para a tua carreira
                    </p>
                    <Link href="/roadmaps">
                    <Button>
                      Explorar Roadmaps
                    </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="activity" className="space-y-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Atividade Recente</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <div className="flex-1">
                        <p className="font-medium">Completaste "CSS Grid Layout"</p>
                        <p className="text-sm text-gray-600">Frontend Developer - React • Há 2 horas</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                      <Users className="h-5 w-5 text-blue-600" />
                      <div className="flex-1">
                        <p className="font-medium">Juntaste-te ao grupo "React Portugal"</p>
                        <p className="text-sm text-gray-600">Community • Ontem</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
                      <Star className="h-5 w-5 text-purple-600" />
                      <div className="flex-1">
                        <p className="font-medium">Completaste o projeto "Portfolio Website"</p>
                        <p className="text-sm text-gray-600">Frontend Developer - React • Há 3 dias</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-orange-50 rounded-lg">
                      <Mail className="h-5 w-5 text-orange-600" />
                      <div className="flex-1">
                        <p className="font-medium">Candidataste-te à Farfetch</p>
                        <p className="text-sm text-gray-600">Frontend Developer • Há 5 dias</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6 mt-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Informação Pessoal</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input id="name" defaultValue={user.name} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" defaultValue={user.email} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="location">Localização</Label>
                      <Input id="location" defaultValue={user.location} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea id="bio" defaultValue={user.bio} />
                    </div>
                    <Button>Guardar Alterações</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Preferências de Carreira</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="goal">Objetivo Atual</Label>
                      <Input id="goal" defaultValue={user.currentGoal} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salary">Gama Salarial Pretendida</Label>
                      <Input id="salary" defaultValue={user.targetSalary} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="preferred-location">Localização Preferida</Label>
                      <Input id="preferred-location" defaultValue={user.preferredLocation} />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="experience">Experiência</Label>
                      <Input id="experience" defaultValue={user.experience} />
                    </div>
                    <Button>Guardar Preferências</Button>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Notificações</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Notificações por Email</p>
                        <p className="text-sm text-gray-600">Receber updates por email</p>
                      </div>
                      <Button variant="outline" size="sm">
                        {user.notifications.email ? 'Ativo' : 'Inativo'}
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Updates de Roadmaps</p>
                        <p className="text-sm text-gray-600">Novos conteúdos e skills</p>
                      </div>
                      <Button variant="outline" size="sm">
                        {user.notifications.roadmapUpdates ? 'Ativo' : 'Inativo'}
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Alertas de Vagas</p>
                        <p className="text-sm text-gray-600">Novas oportunidades de emprego</p>
                      </div>
                      <Button variant="outline" size="sm">
                        {user.notifications.jobAlerts ? 'Ativo' : 'Inativo'}
                      </Button>
                    </div>
                    <Separator />
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Atividade da Community</p>
                        <p className="text-sm text-gray-600">Respostas e menções</p>
                      </div>
                      <Button variant="outline" size="sm">
                        {user.notifications.communityActivity ? 'Ativo' : 'Inativo'}
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Links Sociais</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub</Label>
                      <Input id="github" defaultValue={user.github} placeholder="username" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input id="linkedin" defaultValue={user.linkedin} placeholder="profile-url" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="website">Website</Label>
                      <Input id="website" defaultValue={user.website} placeholder="https://..." />
                    </div>
                    <Button>Guardar Links</Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="stats" className="space-y-6 mt-6">
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <CheckCircle className="h-5 w-5 text-green-600" />
                      <span className="text-sm text-gray-600">Skills Completadas</span>
                    </div>
                    <p className="text-3xl font-bold">{userStats.totalSkillsCompleted}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <TrendingUp className="h-5 w-5 text-blue-600" />
                      <span className="text-sm text-gray-600">Horas de Aprendizagem</span>
                    </div>
                    <p className="text-3xl font-bold">{userStats.totalLearningHours}h</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="h-5 w-5 text-purple-600" />
                      <span className="text-sm text-gray-600">Projetos Completos</span>
                    </div>
                    <p className="text-3xl font-bold">{userStats.projectsCompleted}</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="h-5 w-5 text-orange-600" />
                      <span className="text-sm text-gray-600">Posts na Community</span>
                    </div>
                    <p className="text-3xl font-bold">{userStats.communityPosts}</p>
                  </CardContent>
                </Card>
              </div>

              <Card>
                <CardHeader>
                  <CardTitle>Progresso ao Longo do Tempo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                    <p className="text-gray-500">Gráfico de progresso (seria implementado com uma biblioteca de charts)</p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="achievements" className="space-y-6 mt-6">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                <Card className="border-yellow-200 bg-yellow-50">
                  <CardContent className="p-6 text-center">
                    <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Primeira Skill!</h3>
                    <p className="text-sm text-gray-600">Completaste a tua primeira skill</p>
                    <Badge className="mt-2 bg-yellow-600">Desbloqueado</Badge>
                  </CardContent>
                </Card>

                <Card className="border-blue-200 bg-blue-50">
                  <CardContent className="p-6 text-center">
                    <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Streak de 7 Dias</h3>
                    <p className="text-sm text-gray-600">Aprendeste durante 7 dias consecutivos</p>
                    <Badge className="mt-2 bg-blue-600">Desbloqueado</Badge>
                  </CardContent>
                </Card>

                <Card className="border-green-200 bg-green-50">
                  <CardContent className="p-6 text-center">
                    <CheckCircle className="h-12 w-12 text-green-600 mx-auto mb-4" />
                    <h3 className="font-bold mb-2">Primeiro Projeto</h3>
                    <p className="text-sm text-gray-600">Completaste o teu primeiro projeto</p>
                    <Badge className="mt-2 bg-green-600">Desbloqueado</Badge>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-gray-50 opacity-60">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-bold mb-2 text-gray-600">Community Hero</h3>
                    <p className="text-sm text-gray-500">Ajuda 10 pessoas na community</p>
                    <Badge variant="outline" className="mt-2">Bloqueado</Badge>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-gray-50 opacity-60">
                  <CardContent className="p-6 text-center">
                    <Target className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-bold mb-2 text-gray-600">Roadmap Master</h3>
                    <p className="text-sm text-gray-500">Completa um roadmap inteiro</p>
                    <Badge variant="outline" className="mt-2">Bloqueado</Badge>
                  </CardContent>
                </Card>

                <Card className="border-gray-200 bg-gray-50 opacity-60">
                  <CardContent className="p-6 text-center">
                    <Mail className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <h3 className="font-bold mb-2 text-gray-600">Job Hunter</h3>
                    <p className="text-sm text-gray-500">Candidata-te a 20 vagas</p>
                    <Badge variant="outline" className="mt-2">Bloqueado</Badge>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
