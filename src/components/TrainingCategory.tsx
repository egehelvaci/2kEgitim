'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaClock, FaUsers } from 'react-icons/fa';

interface TrainingProps {
  title: string;
  courses: string[] | {
    title: string;
    description: string;
  }[];
  imageSrc: string;
  icon?: React.ReactNode;
}

const TrainingCategory = ({ title, courses, imageSrc, icon }: TrainingProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Kursları doğru formatta işleme
  const formattedCourses = courses.map(course => {
    if (typeof course === 'string') {
      return { title: course, description: '' };
    }
    return course;
  });

  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300 h-full flex flex-col"
      whileHover={{ y: -5 }}
    >
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc}
          alt={title}
          fill
          className={`object-cover transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
          <div className="p-6 w-full">
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center mr-3 shadow-lg">
                  {icon}
                </div>
                <h3 className="text-2xl font-bold text-white drop-shadow-md">{title}</h3>
              </div>
              <span className="bg-accent text-white text-xs font-medium px-3 py-1.5 rounded-full shadow-md">
                {formattedCourses.length} Program
              </span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col bg-gradient-to-br from-white to-gray-50">
        <div className="space-y-5 mb-5 flex-grow">
          {formattedCourses.map((course, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-5 border-l-2 border-accent/40 py-3 hover:bg-white rounded-r-lg transition-all hover:shadow-md group/item"
            >
              <div className="absolute left-[-5px] top-4 h-3 w-3 bg-accent rounded-full shadow-md"></div>
              <h4 className="font-semibold text-gray-800 group-hover/item:text-accent transition-colors">{course.title}</h4>
              {course.description && (
                <p className="text-gray-600 text-sm mt-2">{course.description}</p>
              )}
              <div className="mt-3 flex items-center text-xs text-gray-500 space-x-4">
                <span className="flex items-center">
                  <FaClock className="mr-1 text-accent/70" /> 8-16 saat
                </span>
                <span className="flex items-center">
                  <FaUsers className="mr-1 text-accent/70" /> 5-15 kişi
                </span>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="pt-4 flex justify-end items-center border-t border-gray-200">
          <Link 
            href="/iletisim" 
            className="bg-accent/10 hover:bg-accent/20 text-accent font-medium px-4 py-2 rounded-lg flex items-center transition-all group-hover:bg-accent group-hover:text-white"
          >
            Bilgi Al
            <FaArrowRight className="ml-2 text-xs transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default TrainingCategory; 