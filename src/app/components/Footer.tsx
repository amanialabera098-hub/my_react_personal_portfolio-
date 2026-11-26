import { Github, Linkedin, Mail, Heart, Send } from 'lucide-react';

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Skills', id: 'skills' },
    { name: 'Contact', id: 'contact' },
  ];

  const socialLinks = [
    { icon: <Github size={20} />, url: 'https://github.com/amanialabera098-hub' },
    { icon: <Linkedin size={20} />, url: 'https://linkedin.com' },
    { icon: <Send size={20} />, url:  'https://t.me/world_by_you1' },
    { icon: <Mail size={20} />, url: 'mailto:amanialabera@gmail.com' },
  ];

  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl mb-4 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Aman
            </h3>
            <p className="text-slate-400">
              Software Engineer & Vibe Coder building modern web applications and AI solutions.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg mb-4 text-slate-200">Quick Links</h4>
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-lg mb-4 text-slate-200">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-slate-800 rounded-lg hover:bg-cyan-500 hover:text-slate-900 transition-all"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-slate-800 text-center">
          <p className="text-slate-400 flex items-center justify-center gap-2 flex-wrap">
            © 2026 Aman – Software Engineer. Made with{' '}
            <Heart size={16} className="text-red-500 fill-red-500" /> and lots of code.
          </p>
        </div>
      </div>
    </footer>
  );
}
