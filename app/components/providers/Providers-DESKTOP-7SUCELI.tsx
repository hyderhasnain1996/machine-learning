'use client'

import { ThemeProvider } from 'next-themes'
import { ReactNode } from 'react'
import { LanguageProvider } from '@/app/i18n/LanguageContext'

interface ProvidersProps {
  children: ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  return (
    <LanguageProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem={true}
        disableTransitionOnChange={false}
      >
        {children}
      </ThemeProvider>
    </LanguageProvider>
  )
}