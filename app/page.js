import Image from 'next/image'

import anasayfabg from './images/anasayfabg.png'
import desenizelogo from './images/desenizelogo.png'
import aboutus from './images/aboutus.png'
import contact from './images/contact.png'

import webdesign from './images/servicesimages/webdesign.png'
import grafiktasarim from './images/servicesimages/grafiktasarim.png'
import socialmedia from './images/servicesimages/socialmedia.png'
import videoedit from './images/servicesimages/videoedit.png'

export default function Home() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      {/* Header */}
      <header className="bg-black bg-opacity-50 fixed w-full z-10">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <Image src={desenizelogo} alt="Desenize Logo" width={150} height={40} />
          <nav>
            <ul className="flex space-x-6">
              <li><a href="#" className="hover:text-gray-300 font-medium">Ana Sayfa</a></li>
              <li><a href="#" className="hover:text-gray-300 font-medium">Hizmetlerimiz</a></li>
              <li><a href="#" className="hover:text-gray-300 font-medium">Hakkımızda</a></li>
              <li><a href="#" className="hover:text-gray-300 font-medium">İletişim</a></li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <Image src={anasayfabg} alt="Hero Background" fill style={{objectFit: 'cover'}} className="absolute z-0" />
        <div className="relative z-10 text-center">
          <h1 className="text-6xl font-bold mb-4">Hayallerinizin</h1>
          <h2 className="text-5xl font-light mb-8">Dijital Yansıması</h2>
          <p className="text-xl mb-12 font-light">Sizler için hazır, kaliteli ve özgün hizmetler sunuyoruz.</p>
          <button className="bg-transparent hover:bg-white text-white hover:text-black border border-white font-bold py-2 px-4 rounded transition duration-300">
            Keşfet
          </button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-16 text-center">Hizmetlerimiz</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {['Grafik Tasarım', 'Video Düzenleme', 'Web Tasarım', 'Sosyal Medya Yönetimi'].map((service, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg">
                <Image src={webdesign} alt={service} width={300} height={200} className="mb-4 rounded" />
                <h3 className="text-xl font-semibold mb-2">{service}</h3>
                <p className="text-gray-300 font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <Image src={aboutus} alt="About Us" width={600} height={400} className="rounded-lg" />
          </div>
          <div className="md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6">Hakkımızda</h2>
            <p className="text-gray-300 mb-6 font-light">
              Desenize Studio, yaratıcı çözümler sunan bir ekiptir. Web tasarım, grafik tasarım, video düzenleme ve sosyal medya yönetimi alanlarında uzmanlaşmış ekibimizle, müşterilerimizin dijital dünyada öne çıkmasına ve hedeflerine ulaşmasına yardımcı oluyoruz.
            </p>
            <button className="bg-transparent hover:bg-white text-white hover:text-black border border-white font-bold py-2 px-4 rounded transition duration-300">
              Daha Fazla
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <h2 className="text-4xl font-bold mb-6">Bizimle İletişime Geçin</h2>
            <p className="text-gray-300 mb-4 font-light">Telefon: +90 544 115 06 17</p>
            <p className="text-gray-300 mb-6 font-light">Mail: info@desenize.com</p>
            <button className="bg-transparent hover:bg-white text-white hover:text-black border border-white font-bold py-2 px-4 rounded transition duration-300">
              Bize Ulaşın
            </button>
          </div>
          <div className="md:w-1/2">
            <Image src={contact} alt="Contact" width={600} height={400} className="rounded-lg" />
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