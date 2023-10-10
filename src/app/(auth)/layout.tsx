import { ClerkProvider } from "@clerk/nextjs"
import { Inter } from "next/font/google"

import '../globals.css'
export const matadata = {
    title: 'Onboarding',
    description: 'Onboarding',
}

const inter = Inter({ subsets: ['latin']})

export default function RootLayer({
    children
}: {
    children: React.ReactNode
}) {
    return (
       <ClerkProvider>
        <html lang ="en">
            <body className={`${inter.className} bg-light`}>
                {children}
            </body>
        </html>

       </ClerkProvider>
    )   
}
