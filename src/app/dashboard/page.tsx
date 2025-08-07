import Header from "@/components/ui/header"
import { GoogleAIBackend } from "firebase/ai"
import { getAuth } from "firebase/auth"
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
            </div>
            </div>
        </div>
    )
}