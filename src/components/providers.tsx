
"use client"

import { ReactNode } from "react"
import FadeIn from "./fade-in"
import { ThemeProvider } from "./theme-provider"
import {
    QueryClient,
    QueryClientProvider
} from '@tanstack/react-query'

interface ProvidersProps {
    children: ReactNode
}

const queryClient = new QueryClient()

export default function Providers({ children }: ProvidersProps) {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <QueryClientProvider client={queryClient}>
                <FadeIn duration={100}>
                    {children}
                </FadeIn>
            </QueryClientProvider>
        </ThemeProvider>
    )
}