"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

import anasayfabg from "./images/anasayfabg.png";
import desenizelogo from "./images/desenizelogo.png";
import aboutus from "./images/aboutus.png";
import contact from "./images/contact.png";

import webdesign from "./images/servicesimages/webdesign.png";
import grafiktasarim from "./images/servicesimages/grafiktasarim.png";
import socialmedia from "./images/servicesimages/socialmedia.png";
import videoedit from "./images/servicesimages/videoedit.png";

const ParallaxSection = ({ children, yOffset = 100 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, yOffset]);

  return (
    <motion.div ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

const FadeInWhenVisible = ({ children }) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1 },
        hidden: { opacity: 0, scale: 0.8 },
      }}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);

    document.documentElement.style.scrollBehavior = "smooth";

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      document.documentElement.style.scrollBehavior = "";
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="bg-gray-900 text-white">
      {/* Header */}
      <motion.header
        className={`fixed w-full z-10 transition-colors duration-300 ${
          isScrolled ? "bg-gray-800" : "bg-transparent"
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Image
            src={desenizelogo}
            alt="Desenize Logo"
            width={150}
            height={40}
          />
          <nav>
            <ul className="flex space-x-6">
              <motion.li>
                <a href="#" className="hover:text-gray-300 font-light text-lg">
                  Ana Sayfa
                </a>
              </motion.li>
              <motion.li>
                <a href="#" className="hover:text-gray-300 font-light text-lg">
                  Hizmetlerimiz
                </a>
              </motion.li>
              <motion.li>
                <a href="#" className="hover:text-gray-300 font-light text-lg">
                  Hakkımızda
                </a>
              </motion.li>
              <motion.li>
                <a href="#" className="hover:text-gray-300 font-light text-lg">
                  İletişim
                </a>
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
          className="container mx-auto px-4 relative z-9 text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-normal mb-4">
            Hayallerinizin
          </h1>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-thin mb-8">
            Dijital Yansıması
          </h2>
          <h2 className="text-lg sm:text-xl mb-12 font-normal w-full text-left">
            Sizler için hızlı, kaliteli ve özgün hizmetler oluşturuyoruz.
          </h2>
        </motion.div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-900 text-white flex justify-between  ">

        <div className="w-[340px] h-[450px] flex items-center flex-col">
          <Image src={grafiktasarim} width={340} height={450} />

          <div className="w-full text-center my-3" >
            <h1 className="text-xl font-thin">Grafik Tasarım</h1>
            <p className="text-center text-gray-400">
              Grafik tasarım konusunda uzman ekibimiz sizler için en zanaatkar
              ve en yaratıcı yeteneklerini sergileyerek sizlere hizmet sunar.{" "}
            </p>
          </div>
        </div>

        <div className="w-[340px] h-[450px] flex items-center flex-col">
          <Image src={grafiktasarim} width={340} height={450} />

          <div className="w-full text-center my-3" >
            <h1 className="text-xl font-thin">Grafik Tasarım</h1>
            <p className="text-center text-gray-400">
              Grafik tasarım konusunda uzman ekibimiz sizler için en zanaatkar
              ve en yaratıcı yeteneklerini sergileyerek sizlere hizmet sunar.{" "}
            </p>
          </div>
        </div>

        <div className="w-[340px] h-[450px] flex items-center flex-col">
          <Image src={grafiktasarim} width={340} height={450} />

          <div className="w-full text-center my-3" >
            <h1 className="text-xl font-thin">Grafik Tasarım</h1>
            <p className="text-center text-gray-400">
              Grafik tasarım konusunda uzman ekibimiz sizler için en zanaatkar
              ve en yaratıcı yeteneklerini sergileyerek sizlere hizmet sunar.{" "}
            </p>
          </div>
        </div>

        <div className="w-[340px] h-[450px] flex items-center flex-col">
          <Image src={grafiktasarim} width={340} height={450} />

          <div className="w-full text-center my-3" >
            <h1 className="text-xl font-thin">Grafik Tasarım</h1>
            <p className="text-center text-gray-400">
              Grafik tasarım konusunda uzman ekibimiz sizler için en zanaatkar
              ve en yaratıcı yeteneklerini sergileyerek sizlere hizmet sunar.{" "}
            </p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="py-24 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-start gap-12">
            <div className="lg:w-1/2">
              <img
                src={aboutus.src}
                alt="About Us"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-5xl font-thin mb-8">Hakkımızda</h2>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                Desenize Studio, yaratıcı çözümler sunan bir ekiptir. Web
                tasarım, grafik tasarım, video düzenleme ve sosyal medya
                yönetimi alanlarında uzmanlaşmış ekibimizle, müşterilerimizin
                dijital dünyada öne çıkmasına ve hedeflerine ulaşmasına yardımcı
                oluyoruz.
              </p>
              <p className="text-gray-300 mb-6 font-light leading-relaxed">
                Her projeye, benzersiz bir bakış açısıyla yaklaşıyor ve sizin
                ihtiyaçlarınıza en uygun tasarımları oluşturuyoruz. Radikal ve
                dikkat çekici estetik anlayışımızla, markanızı görsel olarak
                güçlü bir şekilde temsil ediyoruz.
              </p>
              <p className="text-gray-300 mb-8 font-light leading-relaxed">
                Müşteri memnuniyeti ve kaliteli hizmet anlayışı ile yola
                çıktığımız Desenize Studio, tasarım dünyasında fark yaratmak
                isteyenler için ideal bir ortak. Siz de yaratıcı çözümlerimizle
                tanışmak için bizimle iletişime geçin!
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <FadeInWhenVisible>
              <div className="md:w-1/2 mb-8 md:mb-0">
                <h2 className="text-4xl font-bold mb-6">
                  Bizimle İletişime Geçin
                </h2>
                <p className="text-gray-300 mb-4 font-light">
                  Telefon: +90 544 115 06 17
                </p>
                <p className="text-gray-300 mb-6 font-light">
                  Mail: info@desenize.com
                </p>
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
                <Image
                  src={contact}
                  alt="Contact"
                  width={600}
                  height={400}
                  className="rounded-lg"
                />
              </div>
            </FadeInWhenVisible>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="container mx-auto px-4 text-center">
          <Image
            src={desenizelogo}
            alt="Desenize Logo"
            width={150}
            height={40}
            className="mx-auto mb-4"
          />
          <p className="text-gray-500 font-light">
            &copy; 2023 Desenize. Tüm hakları saklıdır.
          </p>
        </div>
      </footer>
    </div>
  );
}
