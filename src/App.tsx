import { BookOpen, GraduationCap, Users, Video, Star, Clock, Award, Globe, Zap, Shield } from 'lucide-react';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="min-h-screen bg-gradient-radial from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800 transition-colors duration-200">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-100/20 to-transparent dark:from-blue-900/20"></div>
        <div className="max-w-7xl mx-auto relative">
          <div className="text-center">
            <h1 className="text-5xl sm:text-7xl font-bold mb-6 animate-fade-up">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Transform Your Future
              </span>
              <br />
              <span className="text-gray-900 dark:text-white">with EduLearn</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto animate-fade-up animation-delay-200">
              Join millions of learners worldwide and access world-class education from leading institutions and instructors.
              Start your learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-up animation-delay-300">
              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl">
                Start Learning Now
              </button>
              <button className="px-8 py-4 bg-white dark:bg-gray-800 text-gray-900 dark:text-white rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl border-2 border-gray-200 dark:border-gray-700">
                View Courses
              </button>
            </div>
            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto animate-fade-up animation-delay-400">
              {[
                { count: "100K+", label: "Active Students" },
                { count: "1000+", label: "Expert Instructors" },
                { count: "500+", label: "Online Courses" },
                { count: "95%", label: "Success Rate" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <h3 className="text-3xl font-bold text-blue-600 dark:text-blue-400">{stat.count}</h3>
                  <p className="text-gray-600 dark:text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-up">
              Why Choose EduLearn?
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-up animation-delay-100">
              Experience the future of online learning with our cutting-edge features
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: Video,
                title: "HD Video Courses",
                description: "Crystal clear video content with interactive elements and closed captions."
              },
              {
                icon: Users,
                title: "Expert Instructors",
                description: "Learn from industry leaders and experienced professionals in their fields."
              },
              {
                icon: Star,
                title: "Self-Paced Learning",
                description: "Study at your own pace with lifetime access to course materials."
              },
              {
                icon: Clock,
                title: "Flexible Schedule",
                description: "Access your courses anytime, anywhere, on any device."
              },
              {
                icon: Award,
                title: "Certificates",
                description: "Earn recognized certificates upon successful course completion."
              },
              {
                icon: Globe,
                title: "Global Community",
                description: "Connect with learners and instructors from around the world."
              }
            ].map((feature, index) => (
              <div 
                key={index}
                className="glass-effect p-8 rounded-2xl transform hover:scale-105 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <feature.icon className="h-12 w-12 text-blue-600 dark:text-blue-400 mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Courses Section */}
      <section id="courses" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-up">
              Popular Courses
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-up animation-delay-100">
              Explore our most sought-after courses and start learning today
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Complete Web Development",
                image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
                price: "$99",
                rating: "4.9",
                students: "15,000+",
                duration: "20 hours"
              },
              {
                title: "Data Science Masterclass",
                image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71",
                price: "$129",
                rating: "4.8",
                students: "12,000+",
                duration: "25 hours"
              },
              {
                title: "Digital Marketing Pro",
                image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f",
                price: "$79",
                rating: "4.7",
                students: "10,000+",
                duration: "15 hours"
              },
              {
                title: "UI/UX Design Fundamentals",
                image: "https://images.unsplash.com/photo-1561070791-2526d30994b5",
                price: "$89",
                rating: "4.8",
                students: "8,000+",
                duration: "18 hours"
              },
              {
                title: "Machine Learning A-Z",
                image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c",
                price: "$149",
                rating: "4.9",
                students: "20,000+",
                duration: "30 hours"
              },
              {
                title: "Mobile App Development",
                image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c",
                price: "$119",
                rating: "4.7",
                students: "11,000+",
                duration: "22 hours"
              }
            ].map((course, index) => (
              <div 
                key={index}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <div className="absolute top-4 right-4 bg-white dark:bg-gray-800 rounded-full px-3 py-1 text-sm font-semibold text-blue-600 dark:text-blue-400">
                    {course.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{course.title}</h3>
                  <div className="flex items-center mb-4">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="ml-2 text-gray-600 dark:text-gray-300">{course.rating}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <Users className="h-5 w-5 text-gray-400" />
                    <span className="ml-2 text-gray-600 dark:text-gray-300">{course.students}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-gray-600 dark:text-gray-300">
                      <Clock className="h-5 w-5 mr-2" />
                      {course.duration}
                    </div>
                    <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full transition-all duration-300 transform hover:scale-105">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section id="instructors" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-up">
              Meet Our Expert Instructors
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-up animation-delay-100">
              Learn from industry leaders with years of experience
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                name: "Dr. Sarah Johnson",
                role: "Web Development Lead",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
                students: "50,000+"
              },
              {
                name: "Prof. Michael Chen",
                role: "Data Science Expert",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
                students: "45,000+"
              },
              {
                name: "Emily Rodriguez",
                role: "Digital Marketing Guru",
                image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb",
                students: "38,000+"
              },
              {
                name: "David Kim",
                role: "UI/UX Designer",
                image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d",
                students: "42,000+"
              }
            ].map((instructor, index) => (
              <div 
                key={index}
                className="glass-effect rounded-2xl p-6 text-center transform hover:scale-105 transition-all duration-300 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={instructor.image} 
                  alt={instructor.name} 
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover border-4 border-white dark:border-gray-700"
                />
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">{instructor.name}</h3>
                <p className="text-blue-600 dark:text-blue-400 mb-2">{instructor.role}</p>
                <p className="text-gray-600 dark:text-gray-300">{instructor.students} students</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white/50 dark:bg-gray-800/50 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4 animate-fade-up">
              Choose Your Learning Path
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300 animate-fade-up animation-delay-100">
              Flexible plans for every learner
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$9.99",
                period: "per month",
                features: [
                  "Access to 100+ courses",
                  "Basic certificates",
                  "Community support",
                  "Mobile access"
                ]
              },
              {
                name: "Pro",
                price: "$19.99",
                period: "per month",
                popular: true,
                features: [
                  "Access to 500+ courses",
                  "Premium certificates",
                  "Priority support",
                  "Offline downloads",
                  "1-on-1 mentoring"
                ]
              },
              {
                name: "Enterprise",
                price: "$49.99",
                period: "per month",
                features: [
                  "Access to all courses",
                  "Custom certificates",
                  "24/7 dedicated support",
                  "Team management",
                  "API access",
                  "Custom branding"
                ]
              }
            ].map((plan, index) => (
              <div 
                key={index}
                className={`glass-effect rounded-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 animate-fade-up ${
                  plan.popular ? 'border-2 border-blue-600 dark:border-blue-400' : ''
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {plan.popular && (
                  <span className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-semibold absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">{plan.name}</h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900 dark:text-white">{plan.price}</span>
                  <span className="text-gray-600 dark:text-gray-300">/{plan.period}</span>
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="text-gray-600 dark:text-gray-300 flex items-center justify-center">
                      <Shield className="h-5 w-5 text-blue-600 dark:text-blue-400 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full transition-all duration-300 transform hover:scale-105 ${
                  plan.popular
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-600'
                }`}>
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-12">
            <div className="col-span-2">
              <div className="flex items-center mb-6">
                <BookOpen className="h-8 w-8 text-blue-400" />
                <span className="ml-2 text-2xl font-bold">EduLearn</span>
              </div>
              <p className="text-gray-400 mb-6">
                Transforming lives through education. Join millions of learners worldwide
                and access world-class education from leading institutions and instructors.
              </p>
              <div className="flex space-x-4">
                {['twitter', 'facebook', 'instagram', 'linkedin'].map((social) => (
                  <a
                    key={social}
                    href={`#${social}`}
                    className="bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors duration-200"
                  >
                    <span className="sr-only">{social}</span>
                    <Zap className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Features', 'Courses', 'Instructors', 'Testimonials', 'Pricing'].map((link) => (
                  <li key={link}>
                    <a href={`#${link.toLowerCase()}`} className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Support</h3>
              <ul className="space-y-2">
                {['Help Center', 'Terms of Service', 'Privacy Policy', 'Cookie Policy'].map((link) => (
                  <li key={link}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Subscribe to our newsletter for the latest updates and offers.
              </p>
              <div className="space-y-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">&copy; 2025 EduLearn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;