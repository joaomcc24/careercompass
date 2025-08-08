import Header from "@/components/ui/header"
import { GoogleAIBackend } from "firebase/ai"
import { getAuth } from "firebase/auth"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Bell, BookOpen, Calendar, CheckCircle, Clock, MapPin, Star, Target, TrendingUp, Users } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function Dashboard () {
    // const auth = getAuth()
    // const user = auth.currentUser
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <div className="flex-1 bg-gray-50">
            <div className="container mx-auto px-4 py-8">
                <div className="mb-8">
            <h1 className="text-3xl text-gray-900 font-bold ">Olá, utilizador!👋</h1>
            <p className="text-gray-600 mt-2">Continua o teu percurso para Frontend Developer</p>
                </div>
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                 <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-600" />
                  Frontend Developer - React
                </CardTitle>
                <CardDescription>Roadmap personalizado para Farfetch, OutSystems, Talkdesk</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Progresso Geral</span>
                    <span className="text-sm text-gray-500">7 de 12 skills</span>
                  </div>
                  <Progress value={58} className="w-full" />

                  <div className="grid gap-3 mt-6">
                    <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">HTML & CSS</p>
                          <p className="text-sm text-gray-600">Flexbox, Grid, Responsive</p>
                        </div>
                      </div>
                      <Badge variant="secondary" className="bg-green-100 text-green-800">
                        Completo
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">React Hooks</p>
                          <p className="text-sm text-gray-600">useState, useEffect, Custom Hooks</p>
                        </div>
                      </div>
                      <Badge variant="outline" className="border-blue-200 text-blue-800">
                        Em progresso
                      </Badge>
                    </div>

                    <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                      <div className="flex items-center gap-3">
                        <BookOpen className="h-5 w-5 text-gray-400" />
                        <div>
                          <p className="font-medium">TypeScript</p>
                          <p className="text-sm text-gray-600">Types, Interfaces, Generics</p>
                        </div>
                      </div>
                      <Badge variant="outline">Próximo</Badge>
                    </div>
                  </div>

                  <Button className="w-full mt-4">
                    Continuar Roadmap
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Estatísticas</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm">Skills completadas</span>
                    </div>
                    <span className="font-bold">7</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-blue-600" />
                      <span className="text-sm">Dias consecutivos</span>
                    </div>
                    <span className="font-bold">12</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-600" />
                      <span className="text-sm">Projetos completos</span>
                    </div>
                    <span className="font-bold">3</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg">Próximo Objetivo</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-red-600" />
                      <span className="font-medium">Farfetch</span>
                    </div>
                    <p className="text-sm text-gray-600">Frontend Developer - €35k-45k</p>
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Match Score</span>
                        <span className="font-medium">78%</span>
                      </div>
                      <Progress value={78} className="w-full" />
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full bg-transparent"
                    >
                      Ver Detalhes
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>   

          <div className="mt-8">
            <Tabs defaultValue="recommendations" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="recommendations">Recomendações</TabsTrigger>
                <TabsTrigger value="activity">Atividade</TabsTrigger>
                <TabsTrigger value="community">Community</TabsTrigger>
              </TabsList>

              <TabsContent value="recommendations" className="space-y-4 mt-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Projeto Recomendado</CardTitle>
                      <CardDescription>Para validar React Hooks</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-medium mb-2">Todo App com Context API</h4>
                      <p className="text-sm text-gray-600 mb-4">
                        Cria uma aplicação de tarefas usando useState, useEffect e Context API
                      </p>
                      <div className="flex gap-2">
                        <Badge variant="secondary">React</Badge>
                        <Badge variant="secondary">Hooks</Badge>
                        <Badge variant="secondary">Context</Badge>
                      </div>
                      <Button className="w-full mt-4 bg-transparent" variant="outline">
                        Começar Projeto
                      </Button>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Mentor Sugerido</CardTitle>
                      <CardDescription>Frontend Developer na OutSystems</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-3 mb-4">
                        <Avatar>
                          <AvatarImage src="/placeholder.svg?height=40&width=40" />
                          <AvatarFallback>MS</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">Maria Silva</p>
                          <p className="text-sm text-gray-600">5 anos experiência</p>
                        </div>
                      </div>
                      <p className="text-sm text-gray-600 mb-4">
                        Especialista em React e TypeScript, já mentorou 15+ developers
                      </p>
                      <Button className="w-full bg-transparent" variant="outline">
                        Conectar
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="activity" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Atividade Recente</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
                        <CheckCircle className="h-5 w-5 text-green-600" />
                        <div>
                          <p className="font-medium">Completaste "CSS Grid"</p>
                          <p className="text-sm text-gray-600">Há 2 horas</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
                        <Users className="h-5 w-5 text-blue-600" />
                        <div>
                          <p className="font-medium">Juntaste-te ao grupo "React Portugal"</p>
                          <p className="text-sm text-gray-600">Ontem</p>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>

              <TabsContent value="community" className="space-y-4 mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-lg">Discussões Populares</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <button
                        className="w-full p-3 border rounded-lg text-left hover:bg-gray-50"
                      >
                        <h4 className="font-medium mb-1">Como foi a vossa experiência na Farfetch?</h4>
                        <p className="text-sm text-gray-600 mb-2">23 respostas • Há 3 horas</p>
                        <Badge variant="outline" className="text-xs">
                          Frontend
                        </Badge>
                      </button>
                      <button
                        className="w-full p-3 border rounded-lg text-left hover:bg-gray-50"
                      >
                        <h4 className="font-medium mb-1">Salários em Portugal vs Remote</h4>
                        <p className="text-sm text-gray-600 mb-2">45 respostas • Há 1 dia</p>
                        <Badge variant="outline" className="text-xs">
                          Carreira
                        </Badge>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
    </div>
</div>
    )
}