import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TeamMemberProps {
  name: string;
  role: string;
  image: string;
  index: number;
}

const TeamMember: React.FC<TeamMemberProps> = ({ name, role, image, index }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="text-center"
    >
      <div className="mb-3 relative overflow-hidden rounded-lg w-16 h-16 md:w-20 md:h-20 mx-auto">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
        />
      </div>
      <h3 className="text-xs md:text-sm font-bold text-white">{name}</h3>
      <p className="text-[#03e9f4] text-xs">{role}</p>
    </motion.div>
  );
};

const Team: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const teamMembers = [
    {
      name: "John Doe",
      role: "Brand Strategy Manager",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Jane Smith",
      role: "Marketing Strategy Specialist",
      image: "https://images.pexels.com/photos/3778603/pexels-photo-3778603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Mike Johnson",
      role: "Network Security Engineer",
      image: "https://images.pexels.com/photos/3785104/pexels-photo-3785104.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Sarah Williams",
      role: "Creative Design Lead",
      image: "https://images.pexels.com/photos/3771839/pexels-photo-3771839.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <section id="team" className="py-12 md:py-16 relative dot-grid">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">
            <span className="gradient-text">OUR TEAM</span>
          </h2>
          <p className="text-sm md:text-base text-gray-300 max-w-xl mx-auto mb-6 md:mb-8">
            Meet our experts who make the magic happen
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8">
            {teamMembers.map((member, index) => (
              <TeamMember
                key={index}
                name={member.name}
                role={member.role}
                image={member.image}
                index={index}
              />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <button 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} 
              className="blue-gradient-btn text-white px-6 md:px-8 py-3 text-sm md:text-base font-medium"
            >
              Join Our Team
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Team;