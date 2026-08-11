import { createContext, useContext, useEffect, useState } from 'react'

const DirectionContext = createContext(null)

export function DirectionProvider({ children }) {
  const [dir, setDir] = useState(
    () => (typeof window !== 'undefined' && localStorage.getItem('dir')) || 'ltr',
  )

  useEffect(() => {
    document.documentElement.setAttribute('dir', dir)
    document.documentElement.setAttribute('lang', dir === 'rtl' ? 'ar' : 'en')
    localStorage.setItem('dir', dir)
  }, [dir])

  const toggleDir = () => setDir((d) => (d === 'ltr' ? 'rtl' : 'ltr'))

  return (
    <DirectionContext.Provider value={{ dir, isRTL: dir === 'rtl', toggleDir }}>
      {children}
    </DirectionContext.Provider>
  )
}

export function useDirection() {
  const ctx = useContext(DirectionContext)
  if (!ctx) throw new Error('useDirection must be used inside DirectionProvider')
  return ctx
}
