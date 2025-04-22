import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Play, Zap, TrendingUp, Brain, ArrowRight, Menu, Clock, Bot, Wrench, Star, GraduationCap, Users, CheckCircle, Shield, Sparkles, Rocket, Building2, Mail, Phone, Twitter, Linkedin, Instagram, Facebook, Target, Crosshair, Focus, Lightbulb, Award, BarChart, TrendingDown, DollarSign } from 'lucide-react';

function App() {
  const toolsSectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: toolsSectionRef,
    offset: ["start start", "end end"]
  });

  const arrowProgress = useTransform(scrollYProgress, [0, 0.8], ["0%", "100%"]);
  const arrowOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToDemo = () => {
    const demoSection = document.getElementById('demo-section');
    demoSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-primary text-text-primary">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-primary-dark/90 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-display font-bold tracking-wider gradient-text">TRW.AI</h1>
          <div className="flex items-center gap-4">
            <button className="hidden md:block px-6 py-2 border border-border rounded hover:bg-accent-purple/10 transition">
              LOG IN
            </button>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen pt-24 lg:pt-32 overflow-hidden">
        <div className="absolute inset-0 hero-pattern opacity-20"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 hero-glow"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent-purple/20 rounded-full blur-3xl"></div>
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-accent-pink/20 rounded-full blur-3xl"></div>
              <div className="relative hero-gradient rounded-2xl p-8 border border-white/10">
                <h2 className="text-5xl md:text-7xl font-display font-bold mb-6 leading-tight">
                  <span className="gradient-text">AI AUTOMATION</span><br />
                  IS THE NEW STANDARD
                </h2>
                <p className="text-xl text-text-secondary mb-8">
                  In a world that never stops moving, automation is your unfair advantage.
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="bg-gradient-to-r from-accent-purple to-accent-pink px-8 py-4 rounded-xl text-lg font-bold mb-8 flex items-center gap-2 glow-effect"
                  onClick={scrollToDemo}
                >
                  GET STARTED WITH TRW.AI
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
                <p className="text-text-muted flex items-center gap-2">
                  <Star className="w-5 h-5 text-accent-purple" fill="currentColor" />
                  Trusted by 1,000+ businesses & founders
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative aspect-video bg-primary-dark/50 rounded-2xl overflow-hidden"
            >
              <img
                src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80"
                alt="AI Automation"
                className="w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 flex items-center justify-center backdrop-blur-sm bg-primary-dark/30">
                <Play className="w-16 h-16 text-accent-purple cursor-pointer hover:scale-110 transition" />
              </div>
              <div className="absolute bottom-4 left-4 bg-primary-dark/80 p-3 rounded-xl backdrop-blur-sm border border-white/10">
                <p className="font-bold text-accent-purple">JORDAN – Hit $20K MRR</p>
                <p className="text-sm text-text-muted">Watch the case study →</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-primary-dark/30 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Zap, 
                text: 'AUTOMATE REPETITIVE WORK',
                color: 'text-accent-purple'
              },
              { 
                icon: TrendingUp, 
                text: 'SCALE WITH SMART SYSTEMS',
                color: 'text-accent-purple'
              },
              { 
                icon: Brain, 
                text: 'BUILT BY AI + HUMAN EXPERTS',
                color: 'text-accent-purple'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-primary-dark/50 p-6 rounded border border-accent-purple/20 hover:border-accent-purple/50 transition group backdrop-blur-sm"
              >
                <feature.icon className={`w-10 h-10 ${feature.color} filter drop-shadow-[0_0_10px_rgba(177,78,255,0.5)]`} />
                <h3 className="text-xl font-display font-bold neon-text">{feature.text}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-display tracking-wider text-accent-yellow mb-4">OUR SERVICES</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Maximize Your Business<br />With Our Solutions
            </h3>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              We provide comprehensive AI automation solutions to help your business grow and scale efficiently
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                icon: Bot,
                title: "AI Automation",
                description: "Implement cutting-edge AI solutions to automate your business processes and increase efficiency.",
                features: [
                  "Custom AI Models",
                  "Process Automation",
                  "24/7 Operation",
                  "Real-time Analytics"
                ],
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
              },
              {
                icon: Brain,
                title: "Smart Systems",
                description: "Build intelligent systems that learn and adapt to your business needs for optimal performance.",
                features: [
                  "Machine Learning",
                  "Predictive Analysis",
                  "Adaptive Systems",
                  "Performance Optimization"
                ],
                image: "https://images.unsplash.com/photo-1676299081847-8b52d3c93f04?auto=format&fit=crop&q=80"
              },
              {
                icon: Wrench,
                title: "Integration Services",
                description: "Seamlessly integrate AI solutions with your existing business infrastructure and workflows.",
                features: [
                  "API Integration",
                  "Custom Development",
                  "Legacy System Support",
                  "Scalable Solutions"
                ],
                image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80"
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="group relative bg-primary-dark/50 rounded-2xl overflow-hidden border border-border hover:border-accent-purple/50 transition-all duration-500"
              >
                <div className="absolute inset-0">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover opacity-20 group-hover:opacity-30 transition-opacity duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/80 to-primary-dark/95" />
                </div>
                
                <div className="relative p-8">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="p-3 bg-accent-purple/10 rounded-xl">
                      <service.icon className="w-8 h-8 text-accent-purple" />
                    </div>
                    <h3 className="text-2xl font-display font-bold">{service.title}</h3>
                  </div>
                  
                  <p className="text-text-secondary mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="space-y-4 mb-8">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-accent-purple" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-4 px-6 bg-gradient-to-r from-accent-purple to-accent-pink rounded-xl font-bold flex items-center justify-center gap-2 glow-effect"
                  >
                    Learn More
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-32 relative overflow-hidden bg-primary">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-display tracking-wider text-accent-yellow mb-4">PROVEN RESULTS</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
              Real Results.<br />Real Revenue.
            </h3>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Our clients consistently achieve exceptional results through our AI automation solutions
            </p>
          </motion.div>

          {/* Image Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                image: "https://i.imgur.com/q4Myokl.png",
                title: "AI-Driven Analytics",
                description: "Real-time performance tracking and optimization"
              },
              {
                image: "https://i.imgur.com/KD820ON.png",
                title: "Smart Automation",
                description: "Streamlined workflows and enhanced productivity"
              },
              {
                image: "https://i.imgur.com/rHpJ3vO.png",
                title: "Predictive Intelligence",
                description: "Data-driven decision making and forecasting"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl tech-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 mix-blend-overlay group-hover:opacity-75 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 tech-grid opacity-30"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-accent-purple transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                  <div className="absolute inset-0 border border-accent-purple/20 rounded-2xl group-hover:border-accent-purple/50 transition-colors duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Second Image Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                image: "https://i.imgur.com/sSIw3jw.png",
                title: "Process Optimization",
                description: "Automated workflow enhancement"
              },
              {
                image: "https://i.imgur.com/qPPvRXC.png",
                title: "Data Visualization",
                description: "Advanced insights and reporting"
              },
              {
                image: "https://i.imgur.com/sJ2TWHY.png",
                title: "AI Integration",
                description: "Seamless system connectivity"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="relative overflow-hidden rounded-2xl tech-card perspective-transform">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/20 to-accent-pink/20 mix-blend-overlay group-hover:opacity-75 transition-opacity duration-500"></div>
                  <div className="absolute inset-0 tech-grid opacity-30"></div>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h4 className="text-xl font-bold mb-2 text-white group-hover:text-accent-purple transition-colors duration-300">
                      {item.title}
                    </h4>
                    <p className="text-text-secondary">{item.description}</p>
                  </div>
                  <div className="absolute inset-0 border border-accent-purple/20 rounded-2xl group-hover:border-accent-purple/50 transition-colors duration-500"></div>
                  <div className="absolute -inset-1 bg-gradient-to-r from-accent-purple/20 to-accent-pink/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Success Stories Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {[
              {
                name: "Sarah Chen",
                role: "E-commerce Founder",
                metric: "487%",
                detail: "Revenue Growth",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80",
                icon: TrendingUp,
                quote: "TRW.AI transformed my business. What used to take days now happens automatically."
              },
              {
                name: "Marcus Rodriguez",
                role: "SaaS CEO",
                metric: "-68%",
                detail: "Operational Costs",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80",
                icon: TrendingDown,
                quote: "The ROI was immediate. Our team now focuses on strategy instead of repetitive tasks."
              },
              {
                name: "Emily Zhang",
                role: "Agency Owner",
                metric: "$2.4M",
                detail: "Additional Revenue",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80",
                icon: DollarSign,
                quote: "Within 6 months, we scaled our operations and tripled our client base."
              }
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative group"
              >
                <div className="relative bg-primary-dark/80 backdrop-blur-xl rounded-2xl p-8 border border-accent-purple/20 hover:border-accent-purple/40 transition-all duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-accent-purple/10 to-accent-pink/10 opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl"></div>
                  
                  <div className="flex items-center gap-4 mb-6">
                    <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-accent-purple/30">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold text-lg">{story.name}</h4>
                      <p className="text-text-secondary">{story.role}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-accent-purple/10 rounded-lg">
                      <story.icon className="w-6 h-6 text-accent-purple" />
                    </div>
                    <div>
                      <h5 className="text-3xl font-bold gradient-text">{story.metric}</h5>
                      <p className="text-text-secondary">{story.detail}</p>
                    </div>
                  </div>
                  
                  <blockquote className="text-text-secondary italic mb-4">
                    "{story.quote}"
                  </blockquote>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Results Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {[
              {
                icon: BarChart,
                stat: "1,500+",
                label: "Active Users",
                detail: "Growing monthly"
              },
              {
                icon: Award,
                stat: "98.7%",
                label: "Success Rate",
                detail: "Client satisfaction"
              },
              {
                icon: Clock,
                stat: "5.2hrs",
                label: "Saved Daily",
                detail: "Per business"
              },
              {
                icon: DollarSign,
                stat: "$12.8M",
                label: "Revenue Generated",
                detail: "For our clients"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-primary-dark/50 backdrop-blur-sm border border-accent-purple/20 rounded-xl p-6 hover:border-accent-purple/40 transition-all duration-500"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-accent-purple/10 rounded-xl">
                    <item.icon className="w-6 h-6 text-accent-purple" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold gradient-text">{item.stat}</h4>
                    <p className="text-text-secondary">{item.label}</p>
                  </div>
                </div>
                <p className="text-text-muted text-sm">{item.detail}</p>
              </motion.div>
            ))}
          </div>

          {/* Featured In */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-text-secondary mb-8">Featured In</p>
            <div className="flex flex-wrap justify-center items-center gap-12">
              <img src="https://i.imgur.com/8xc1DQs.png" alt="Forbes" className="h-8 object-contain featured-logo" />
              <img src="https://i.imgur.com/mE7qnzC.png" alt="TechCrunch" className="h-8 object-contain featured-logo" />
              <img src="https://i.imgur.com/LR5LMRz.png" alt="Wired" className="h-8 object-contain featured-logo" />
              <img src="https://i.imgur.com/vPX7nMs.png" alt="Business Insider" className="h-8 object-contain featured-logo" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Motivation and Discipline Section */}
      <section className="py-32 relative overflow-hidden bg-primary-dark">
        <div className="absolute inset-0 grid-pattern opacity-10"></div>
        <div className="absolute inset-0 bg-gradient-radial from-accent-purple/5 via-transparent to-transparent"></div>
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-display tracking-wider text-accent-yellow mb-4">MASTER YOUR MINDSET</h2>
            <h3 className="text-4xl md:text-6xl font-display font-bold mb-6 gradient-text">
              Motivation & Discipline
            </h3>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Transform your potential into unstoppable momentum with our proven framework
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="motivation-image">
                <div className="tech-overlay"></div>
                <div className="glow-border"></div>
                <img
                  src="https://i.imgur.com/QnLpgoT.png"
                  alt="AI-Powered Motivation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary-dark via-primary-dark/90 to-transparent">
                  <div className="flex items-center gap-4 text-accent-purple">
                    <div className="p-2 bg-accent-purple/10 rounded-lg backdrop-blur-sm">
                      <Brain className="w-6 h-6" />
                    </div>
                    <span className="font-display font-bold text-sm tracking-wider">AI-POWERED INSIGHTS</span>
                  </div>
                </div>
              </div>
              
              {/* Tech overlay elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border border-accent-purple/30 rounded-lg rotate-12 animate-pulse"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-accent-pink/30 rounded-lg -rotate-12 animate-pulse delay-300"></div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {[
                {
                  icon: Target,
                  title: "Goal Setting Framework",
                  description: "Our AI-powered system helps you set and track meaningful goals that align with your vision.",
                  gradient: "from-accent-purple/20 to-accent-pink/20"
                },
                {
                  icon: Crosshair,
                  title: "Peak Performance",
                  description: "Access cutting-edge tools and techniques to maintain consistent high performance.",
                  gradient: "from-accent-purple/20 to-accent-neon/20"
                },
                {
                  icon: Focus,
                  title: "Habit Engineering",
                  description: "Build powerful habits that automate your success and eliminate resistance.",
                  gradient: "from-accent-neon/20 to-accent-violet/20"
                }
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="relative group"
                >
                  <div className={`bg-primary-dark/80 backdrop-blur-xl rounded-xl p-6 border border-accent-purple/20 hover:border-accent-purple/40 transition-all duration-500 overflow-hidden`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-20 group-hover:opacity-30 transition-opacity duration-500`}></div>
                    <div className="absolute inset-0 circuit-pattern opacity-10"></div>
                    
                    <div className="relative">
                      <div className="flex items-center gap-4 mb-4">
                        <div className="p-3 bg-accent-purple/10 rounded-xl group-hover:scale-110 transition-transform duration-500">
                          <feature.icon className="w-6 h-6 text-accent-purple" />
                        </div>
                        <h4 className="text-xl font-display font-bold neon-text">{feature.title}</h4>
                      </div>
                
                      <p className="text-text-secondary leading-relaxed">{feature.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Stats section */}
          <div className="grid md:grid-cols-3 gap-8 mt-20 max-w-4xl mx-auto">
            {[
              {
                stat: "93%",
                label: "Success Rate",
                description: "of users report significant improvement"
              },
              {
                stat: "2.8x",
                label: "Productivity Boost",
                description: "average increase in daily output"
              },
              {
                stat: "21 Days",
                label: "Habit Formation",
                description: "to establish new success patterns"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <h4 className="text-4xl font-display font-bold gradient-text mb-2">{item.stat}</h4>
                <h5 className="text-xl font-bold text-text-primary mb-2">{item.label}</h5>
                <p className="text-text-secondary">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section ref={toolsSectionRef} className="min-h-screen tools-section relative py-32">
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-20"
          >
            <h2 className="text-sm font-display tracking-wider text-accent-yellow mb-4">A STEP-BY-STEP PATH</h2>
            <h3 className="tools-heading mb-8">
              TOOLS TO MAXIMISE<br />YOUR INCOME
            </h3>
          </motion.div>

          <div className="tools-grid">
            {/* Left Side - Vital Life Lessons */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="feature-card">
                <GraduationCap className="feature-icon" />
                <h4 className="feature-title">VITAL LIFE LESSONS</h4>
                <div className="space-y-4">
                  {[
                    "World-class custom built learning application",
                    "Scale from Zero to $10k/month quickly",
                    "Master key skills for wealth generation"
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                      <p className="text-text-secondary">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div 
                className="feature-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://i.imgur.com/2pk547z.png"
                  alt="Learning Platform Interface"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-50" />
              </motion.div>
            </motion.div>

            {/* Center Line with Arrow */}
            <div className="relative h-full flex justify-center">
              <div className="vertical-line">
                <motion.div 
                  className="arrow-indicator"
                  style={{ 
                    top: arrowProgress,
                    opacity: arrowOpacity
                  }}
                />
              </div>
            </div>

            {/* Right Side - Private Network */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <motion.div 
                className="feature-image"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://i.imgur.com/S4cqxOR.png"
                  alt="Network Dashboard"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary to-transparent opacity-50" />
              </motion.div>
              <div className="feature-card">
                <Users className="feature-icon" />
                <h4 className="feature-title">PRIVATE NETWORK</h4>
                <div className="space-y-4">
                  {[
                    "Connect with successful entrepreneurs",
                    "Access exclusive opportunities",
                    "Learn from real-world case studies"
                  ].map((text, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.2 }}
                      className="flex items-center gap-3"
                    >
                      <CheckCircle className="w-5 h-5 text-accent-yellow flex-shrink-0" />
                      <p className="text-text-secondary">{text}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo Section */}
      <section id="demo-section" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/50 to-primary" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 gradient-text">
                See trw.ai in Action
              </h2>
              <p className="text-xl text-text-secondary">
                Schedule a Free Demo and Learn How We Can Help Your Business
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-primary-dark/50 backdrop-blur-sm border border-border rounded-2xl p-8 md:p-12"
            >
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text-secondary mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full bg-primary-dark border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-yellow/50 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text-secondary mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full bg-primary-dark border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-yellow/50 transition-colors"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-text-secondary mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full bg-primary-dark border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-yellow/50 transition-colors"
                      placeholder="+1 (555) 000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="business" className="block text-sm font-medium text-text-secondary mb-2">
                      Business Name
                    </label>
                    <input
                      type="text"
                      id="business"
                      className="w-full bg-primary-dark border border-border rounded-lg px-4 py-3 text-text-primary placeholder-text-muted focus:outline-none focus:border-accent-yellow/50 transition-colors"
                      placeholder="Your Company LLC"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="challenges" className="block text-sm font-medium text-text-secondary mb-2">
                    Current Challenges
                  </label>
                  <select
                    id="challenges"
                    className="w-full bg-primary-dark border border-border rounded-lg px-4 py-3 text-text-primary focus:outline-none focus:border-accent-yellow/50 transition-colors"
                  >
                    <option value="" disabled selected>Select your main challenge</option>
                    <option value="automation">Need to Automate Manual Processes</option>
                    <option value="scaling">Struggling to Scale Operations</option>
                    <option value="efficiency">Looking to Improve Efficiency</option>
                    <option value="costs">Want to Reduce Operational Costs</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="pt-6">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-gradient-to-r from-accent-purple to-accent-pink py-4 rounded-lg text-lg font-bold flex items-center justify-center gap-2 glow-effect"
                  >
                    Schedule My Free Demo
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>

                  <div className="mt-4 flex items-center justify-center gap-2 text-text-muted text-sm">
                    <Shield className="w-4 h-4" />
                    <p>We respect your privacy and will never spam you.</p>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary-dark/50" />
        <div className="absolute inset-0 grid-pattern opacity-10" />
        
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-display font-bold mb-4 gradient-text">
              Flexible Plans for Every Business
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Basic",
                icon: Sparkles,
                description: "Perfect for small businesses starting with automation",
                price: "$499",
                period: "per month",
                features: [
                  "AI Automation Suite",
                  "Basic Integration Support",
                  "5 Automation Workflows",
                  "Email Support",
                  "Weekly Performance Reports"
                ]
              },
              {
                name: "Professional",
                icon: Rocket,
                description: "For mid-sized businesses with growing needs",
                price: "$999",
                period: "per month",
                popular: true,
                features: [
                  "Everything in Basic, plus:",
                  "Advanced Integration Support",
                  "20 Automation Workflows",
                  "Priority Support",
                  "Daily Performance Analytics",
                  "Custom AI Training"
                ]
              },
              {
                name: "Enterprise",
                icon: Building2,
                description: "Fully customizable for large-scale operations",
                price: "Custom",
                period: "contact us",
                features: [
                  "Everything in Professional, plus:",
                  "Unlimited Automation Workflows",
                  "24/7 Dedicated Support",
                  "Custom API Development",
                  "On-Premise Deployment Option",
                  "Advanced Security Features"
                ]
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`relative bg-primary-dark/50 backdrop-blur-sm border ${plan.popular ? 'border-accent-purple' : 'border-border'} rounded-2xl p-8 flex flex-col`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-purple text-primary px-4 py-1 rounded-full text-sm font-bold">
                    Most Popular
                  </div>
                )}
                
                <div className="mb-8">
                  <plan.icon className={`w-12 h-12 ${plan.popular ? 'text-accent-purple' : 'text-text-secondary'} mb-4`} />
                  <h3 className="text-2xl font-display font-bold mb-2">{plan.name}</h3>
                  <p className="text-text-secondary">{plan.description}</p>
                </div>
                
                <div className="mb-8">
                  <div className="flex items-end gap-2 mb-1">
                    <span className="text-4xl font-display font-bold">{plan.price}</span>
                    <span className="text-text-muted mb-1">{plan.period}</span>
                  </div>
                </div>
                
                <ul className="space-y-4 mb-8 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent-purple flex-shrink-0" />
                      <span className="text-text-secondary">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg text-lg font-bold ${
                    plan.popular
                      ? 'bg-gradient-to-r from-accent-purple to-accent-pink glow-effect'
                      : 'border border-border hover:border-accent-purple/30'
                  } transition-colors`}
                >
                  Choose This Plan
                </motion.button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <p className="text-text-secondary flex items-center justify-center gap-2">
              <Shield className="w-5 h-5 text-accent-purple" />
              All plans include a 14-day money-back guarantee
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-b from-primary-dark/30 to-primary backdrop-blur-sm">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-8 gradient-text">
              JOIN THE REAL AUTOMATION MOVEMENT
            </h2>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-gradient-to-r from-accent-purple to-accent-pink px-8 py-4 rounded text-lg font-bold flex items-center gap-2 mx-auto glow-effect"
            >
              Schedule a Free Discovery Call
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-primary-dark/90 backdrop-blur-sm border-t border-border">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            {/* Logo and Contact */}
            <div className="text-center mb-12">
              <h2 className="text-2xl font-display font-bold tracking-wider text-accent-purple mb-6">
                TRW.AI
              </h2>
              <div className="flex justify-center gap-8 text-text-secondary">
                <a href="mailto:contact@trw.ai" className="flex items-center gap-2 hover:text-accent-purple transition-colors">
                  <Mail className="w-5 h-5" />
                  contact@trw.ai
                </a>
                <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-accent-purple transition-colors">
                  <Phone className="w-5 h-5" />
                  (123) 456-7890
                </a>
              </div>
            </div>

            {/* Navigation */}
            <nav className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              {[
                {
                  title: "Company",
                  links: ["About", "Careers", "Press", "Blog"]
                },
                {
                  title: "Product",
                  links: ["Features", "Pricing", "Security", "Enterprise"]
                },
                {
                  title: "Resources",
                  links: ["Documentation", "Guides", "API Reference", "Support"]
                },
                {
                  title: "Legal",
                  links: ["Privacy", "Terms", "Security", "Cookies"]
                }
              ].map((section, index) => (
                <div key={index}>
                  <h3 className="font-display font-bold mb-4 text-text-primary">
                    {section.title}
                  </h3>
                  <ul className="space-y-2">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <a
                          href="#"
                          className="text-text-secondary hover:text-accent-purple transition-colors"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </nav>

            {/* Social and Copyright */}
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-border">
              <div className="flex gap-6">
                {[Twitter, Linkedin, Instagram, Facebook].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-text-secondary hover:text-accent-purple transition-colors"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
              <p className="text-text-muted text-sm">
                © 2025 TRW.AI. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;