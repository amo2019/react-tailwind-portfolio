import { useEffect, useState } from 'react'

export const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)

    return () => {
      window.removeEventListener('scroll', toggleVisibility)
    }
  }, [])

  return (
    <div className="animate-pulse fixed bottom-2 right-2">
      <img
      className={
                 isVisible ? ('bg-yellow-300 hover:bg-yellow-400 focus:ring-yellow-400 inline-flex items-center rounded-full p-2 text-yellow shadow-sm transition-opacity focus:outline-none focus:ring-4 focus:ring-offset-4 opacity-50 cursor-pointer') : ('bg-yellow-300 hover:bg-yellow-400 focus:ring-yellow-300 inline-flex items-center rounded-full p-2 text-white shadow-sm transition-opacity focus:outline-none focus:ring-4 focus:ring-offset-4 opacity-0 cursor-pointer')
              }
        onClick={scrollToTop}
        src="/assets/up-arrow.svg"
        alt="Up Arrow"
        width= "50px"
      />
    </div>
  )
}