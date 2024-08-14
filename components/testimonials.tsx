import Image from 'next/image'

import TestimonialImage01 from '@/public/images/riddhik.png'
import TestimonialImage02 from '@/public/images/parth.png'
import TestimonialImage03 from '@/public/images/natesh.jpeg'

export default function Testimonials() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20 border-t border-gray-800">

          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h2 className="h2 mb-4">Meet the Team</h2>
            <p className="text-xl text-gray-400">We are a small team of three graduate students at San Jose State University in the heart of Silicon Valley</p>
          </div>

          {/* Testimonials */}
          <div className="max-w-sm mx-auto grid gap-8 lg:grid-cols-3 lg:gap-6 items-start lg:max-w-none">

            {/* 1st testimonial */}
            <div className="flex flex-col p-6 bg-gray-800" data-aos="fade-up">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage01} width={48} height={48} alt="Testimonial 01" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Riddhik Tilawat is an experienced AI Engineer with more than 3 years of experience building AI systems. He has an interest in Large Language Models and Backend Engineering. He previously worked at Volkswagon Group as a Software Engineer</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Riddhik Tilawat</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">AI Engineer</a>
              </div>
            </div>

            {/* 2nd testimonial */}
            <div className="flex flex-col p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="200">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage02} width={48} height={48} alt="Testimonial 02" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Parth Joshi is an experienced Software Engineer with more than 3 years of experience in building products. With core interests in Full Stack Engineering & Product development, he previously worked with pre-seed startups at Mainstage Hub</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Parth Joshi</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">Software Engineer</a>
              </div>
            </div>

            {/* 3rd testimonial */}
            <div className="flex flex-col h-full p-6 bg-gray-800" data-aos="fade-up" data-aos-delay="400">
              <div>
                <div className="relative inline-flex flex-col mb-4">
                  <Image className="rounded-full" src={TestimonialImage03} width={48} height={48} alt="Testimonial 03" />
                </div>
              </div>
              <blockquote className="text-lg text-gray-400 grow">Natesh Reddy is an experienced Data Scientist with more than 3 years of experience in developing complex ML models. His core interests lie in Natural Language Processing & Backend Engineering. He previously worked as a Data Scientist at ParallelDots</blockquote>
              <div className="text-gray-700 font-medium mt-6 pt-5 border-t border-gray-700">
                <cite className="text-gray-200 not-italic">Natesh Reddy</cite> - <a className="text-purple-600 hover:text-gray-200 transition duration-150 ease-in-out" href="#0">AI Engineer</a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
}
