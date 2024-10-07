"use client"

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'

import anasayfabg from './images/anasayfabg.png'
import desenizelogo from './images/desenizelogo.png'
import aboutus from './images/aboutus.png'
import contact from './images/contact.png'

import webdesign from './images/servicesimages/webdesign.png'
import grafiktasarim from './images/servicesimages/grafiktasarim.png'
import socialmedia from './images/servicesimages/socialmedia.png'
import videoedit from './images/servicesimages/videoedit.png'

const ParallaxSection = ({ children, yOffset = 100 }) => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  const y = useTransform(scrollYProgress, [0, 1], [0, yOffset])

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  )
}

const FadeInWhenVisible = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 }
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)

    document.documentElement.style.scrollBehavior = 'smooth'
    
    const handleScroll = () => {
      const scrollTop = window.scrollY
      setIsScrolled(scrollTop > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      document.documentElement.style.scrollBehavior = ''
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <motion.header 
        className={`fixed w-full z-10 transition-colors duration-300 ${
          isScrolled ? 'bg-gray-800' : 'bg-transparent'
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Image src={desenizelogo} alt="Desenize Logo" width={150} height={40} />
          <nav>
            <ul className="flex space-x-6">
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#" className="hover:text-gray-300 font-medium">Ana Sayfa</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#" className="hover:text-gray-300 font-medium">Hizmetlerimiz</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#" className="hover:text-gray-300 font-medium">Hakkımızda</a>
              </motion.li>
              <motion.li whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <a href="#" className="hover:text-gray-300 font-medium">İletişim</a>
              </motion.li>
            </ul>
          </nav>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <Image
            src={anasayfabg}
            alt="Hero Background"
            layout="fill"
            objectFit="cover"
            quality={100}
            priority
          />
        </div>
        <motion.div 
          className="w-full relative z-9 text-left px-24"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-4">Hayallerinizin</h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin mb-8">Dijital Yansıması</h2>
          <h2 className="text-lg sm:text-xl mb-12 font-normal mx-auto w-full text-left">Sizler için hızlı, kaliteli ve özgün hizmetler oluşturuyoruz.</h2>
          
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <FadeInWhenVisible>
            <h2 className="text-4xl font-bold mb-16 text-center">Hizmetlerimiz</h2>
          </FadeInWhenVisible>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'Grafik Tasarım', image: grafiktasarim },
              { name: 'Video Düzenleme', image: videoedit },
              { name: 'Web Tasarım', image: webdesign },
              { name: 'Sosyal Medya Yönetimi', image: socialmedia }
            ].map((service, index) => (
              <FadeInWhenVisible key={index}>
                <motion.div 
                  className="bg-gray-700 p-6 rounded-lg"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <Image src={service.image} alt={service.name} width={300} height={200} className="mb-4 rounded" />
                  <h3 className="text-xl font-semibold mb-2">{service.name}</h3>
                  <p className="text-gray-300 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </motion.div>
              </FadeInWhenVisible>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <FadeInWhenVisible>
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold mb-6">Hakkımızda</h2>
                <p className="text-gray-300 mb-6 font-light">
                  Desenize Studio, yaratıcı çözümler sunan bir ekiptir. Web tasarım, grafik tasarım, video düzenleme ve sosyal medya yönetimi alanlarında uzmanlaşmış ekibimizle, müşterilerimizin dijital dünyada öne çıkmasına ve hedeflerine ulaşmasına yardımcı oluyoruz.
                </p>
                <motion.button 
                  className="bg-transparent hover:bg-white text-white hover:text-black border border-white font-bold py-2 px-4 rounded transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Daha Fazla
                </motion.button>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className="md:w-1/2 md:pl-12">
                <Image src={aboutus} alt="About Us" width={600} height={400} className="rounded-lg" />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <FadeInWhenVisible>
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold mb-6">Bizimle İletişime Geçin</h2>
                <p className="text-gray-300 mb-4 font-light">Telefon: +90 544 115 06 17</p>
                <p className="text-gray-300 mb-6 font-light">Mail: info@desenize.com</p>
                <motion.button 
                  className="bg-transparent hover:bg-white text-white hover:text-black border border-white font-bold py-2 px-4 rounded transition duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Bize Ulaşın
                </motion.button>
              </div>
            </FadeInWhenVisible>
            <FadeInWhenVisible>
              <div className="md:w-1/2 md:pl-12 ">
                <Image src={contact} alt="Contact" width={600} height={400} className="rounded-lg" />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <Image src={desenizelogo} alt="Desenize Logo" width={150} height={40} className="mx-auto mb-4" />
          <p className="text-gray-500 font-light">&copy; 2023 Desenize. Tüm hakları saklıdır.</p>
        </div>
      </footer>
    </div>
  )
}