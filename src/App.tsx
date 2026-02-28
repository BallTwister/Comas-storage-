/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Calculator, 
  Search, 
  Truck, 
  HelpCircle,
  Menu,
  X
} from "lucide-react";
import { useState, useEffect } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOverDarkSection, setIsOverDarkSection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const darkSection = document.getElementById("final-cta");
      if (darkSection) {
        const rect = darkSection.getBoundingClientRect();
        // If the top of the dark section is above the bottom of the navbar (80px)
        // and the bottom of the dark section is below the top of the navbar (0px)
        setIsOverDarkSection(rect.top <= 80 && rect.bottom >= 0);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navBg = isOverDarkSection ? "bg-white" : "bg-primary-dark";
  const textColor = isOverDarkSection ? "text-primary-dark" : "text-white";
  const linkColor = isOverDarkSection ? "text-primary-dark/90 hover:text-primary-dark" : "text-white/90 hover:text-white";
  const borderColor = isOverDarkSection ? "border-primary/10" : "border-white/10";
  const buttonBg = isOverDarkSection ? "bg-primary-dark text-white" : "bg-white text-primary-dark";

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${navBg} ${borderColor} border-b`}>
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className={`font-serif text-xl font-bold tracking-tight ${textColor}`}>Comas Storage</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#about" className={`text-sm font-medium transition-colors ${linkColor}`}>Why Us</a>
          <a href="#mission" className={`text-sm font-medium transition-colors ${linkColor}`}>Our Mission</a>
          <a href="#how-it-works" className={`text-sm font-medium transition-colors ${linkColor}`}>How It Works</a>
          <a 
            href="https://tally.so/r/D4VDDZ" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${buttonBg} px-6 py-2.5 rounded-full text-sm font-semibold hover:opacity-90 transition-all shadow-md inline-block`}
          >
            Get Started
          </a>
        </div>

        <button className={`md:hidden ${textColor}`} onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`md:hidden ${navBg} ${borderColor} border-b p-6 flex flex-col gap-4`}
        >
          <a href="#about" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${textColor}`}>Why Us</a>
          <a href="#mission" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${textColor}`}>Our Mission</a>
          <a href="#how-it-works" onClick={() => setIsOpen(false)} className={`text-lg font-medium ${textColor}`}>How It Works</a>
          <a 
            href="https://tally.so/r/D4VDDZ" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`${buttonBg} px-6 py-3 rounded-full text-lg font-semibold text-center`}
          >
            Get Started
          </a>
        </motion.div>
      )}
    </nav>
  );
};

const Footer = () => (
  <footer className="bg-primary-dark text-cream/80 py-12 px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
      <div>
        <div className="flex items-center gap-2 mb-6">
          <span className="font-serif text-lg font-bold text-white">Comas Storage</span>
        </div>
        <p className="text-sm leading-relaxed max-w-xs">
          Professional storage coordination and move-in planning services. We handle the details so you don't have to.
        </p>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
        <ul className="space-y-3 text-sm">
          <li><a href="#" className="hover:text-accent transition-colors">Home</a></li>
          <li><a href="#about" className="hover:text-accent transition-colors">Why Us</a></li>
          <li><a href="#mission" className="hover:text-accent transition-colors">Our Mission</a></li>
          <li><a href="#how-it-works" className="hover:text-accent transition-colors">How It Works</a></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-semibold mb-6">Contact</h4>
        <p className="text-sm mb-4">Questions? We're here to help.</p>
        <button className="border border-cream/20 hover:border-accent hover:text-accent px-6 py-2 rounded-full text-sm transition-all">
          Email Support
        </button>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/10 text-xs flex flex-col md:flex-row justify-between gap-4">
      <p>© 2026 Comas Storage. All rights reserved.</p>
      <div className="flex gap-6">
        <a href="#" className="hover:text-white">Privacy Policy</a>
        <a href="#" className="hover:text-white">Terms of Service</a>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-gradient-to-b from-cream-dark to-cream">
        <div className="absolute top-0 left-0 w-full h-full -z-10">
          <div className="absolute top-[-10%] right-[-5%] w-[50%] h-[70%] bg-accent/15 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[40%] h-[60%] bg-primary/10 blur-[100px] rounded-full" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_center,rgba(119,171,183,0.05)_0%,transparent_70%)]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-primary-dark mb-8 leading-[1.1] tracking-tight">
              Need storage? <br />
              <span className="italic text-primary-light">We handle everything</span>
              <span className="block text-3xl md:text-5xl text-primary-light mt-6 font-serif italic underline decoration-double underline-offset-12 decoration-primary-light/50">Free</span>
            </h1>
            <p className="max-w-3xl mx-auto text-lg md:text-xl text-primary-light/80 leading-relaxed mb-12">
              Get storage that fits your priorities, your standards, and your budget sized correctly and lined up within days. We handle the research and coordination so you don’t have to, you simply review the plan and decide.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="https://tally.so/r/D4VDDZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-primary text-cream px-10 py-5 rounded-full text-lg font-bold hover:bg-primary-dark hover:scale-105 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2"
              >
                Let’s Get Started! <ArrowRight className="w-5 h-5" />
              </a>
              <a 
                href="#how-it-works"
                className="w-full sm:w-auto bg-white text-primary border border-primary/10 px-10 py-5 rounded-full text-lg font-semibold hover:bg-cream-dark transition-all text-center"
              >
                Learn More
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Page 2: We Get It */}
      <section id="about" className="bg-cream-dark py-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-serif text-primary-dark leading-tight">
              We get it
            </h2>
            <div className="grid md:grid-cols-2 gap-12 text-lg text-primary-light/90 leading-relaxed">
              <div className="space-y-6">
                <p>
                  No one plans to get storage. It usually becomes a consideration because something changes. Maybe your home no longer feels as functional as it once did and clutter is starting to interfere with daily life. Maybe you’re downsizing and your belongings simply don’t fit in the new space. Or maybe you’ve taken responsibility for someone else’s items and now need to find room for them.
                </p>
                <p>
                  The details vary, but the result is the same. At some point, space has to be dealt with. That’s when storage starts to look like the only practical solution.
                </p>
              </div>
              <div className="space-y-6">
                <p>
                  But once you begin looking into it, what seemed simple becomes less clear.
                </p>
                <ul className="space-y-4">
                  {[
                    "What size do you actually need?",
                    "Is climate control necessary?",
                    "How much security is enough?",
                    "Is the advertised price the price you’ll really pay?",
                    "Which facility can you actually trust?"
                  ].map((q, i) => (
                    <li key={i} className="flex items-start gap-3 italic">
                      <HelpCircle className="w-5 h-5 text-accent shrink-0 mt-1" />
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-primary/5 mt-12">
              <p className="text-xl md:text-2xl text-primary-dark font-medium leading-relaxed mb-6">
                The decision is yours to make, but the information isn’t always straightforward.
              </p>
              <p className="text-lg text-primary-light/80 leading-relaxed">
                In a market built around promotional rates, changing pricing, and layered features, it’s easy to choose the wrong unit, overpay for space you don’t need, or select a facility that doesn’t meet your standards or properly protect what you’re storing. Storage is supposed to solve a problem, not create another one.
              </p>

            </div>
          </motion.div>
        </div>
      </section>

      {/* Page 3: Our Mission */}
      <section id="mission" className="py-24 px-6 md:px-12 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-1.5 bg-accent/10 rounded-full text-accent text-sm font-bold uppercase tracking-widest">
              Our Mission
            </div>
            <h2 className="text-4xl md:text-5xl font-serif text-primary-dark leading-tight">
              Our role is simple. <br />
              <span className="text-accent italic">We make sure you choose the right storage the <span className="underline decoration-double underline-offset-4">first time</span>.</span>
            </h2>
            
            <div className="space-y-6 text-lg text-primary-light/90 leading-relaxed">
              <p>
                We start by understanding what matters most to you. Budget. Location. Security. Access. Timeline. Convenience. Then we review what you’re storing, calculate the space required, and determine the appropriate course of action.
              </p>
              <p>
                From there, we compare trusted local facilities, verify pricing structures, and narrow the options to what actually fits your standards and your budget.
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 py-6">
                {["No oversized units.", "No unnecessary features.", "No surprises later."].map((text, i) => (
                  <div key={i} className="flex items-center gap-2 font-semibold text-primary-dark">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span>{text}</span>
                  </div>
                ))}
              </div>

              <p>
                You receive a clear recommendation built around your situation. And if it makes sense to you, we don’t stop there. We coordinate the move-in process as well. We line up logistics, help schedule movers if needed, and organize the details so the transition is efficient and straightforward.
              </p>
              <p className="font-medium text-primary-dark">
                You simply approve the plan and cover the labor. We handle the planning and coordination at no cost.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Page 4: What You Get And How It Works */}
      <section id="how-it-works" className="py-24 px-6 md:px-12 bg-cream-dark">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-serif text-primary-dark mb-6">What You Get & How It Works</h2>
            <p className="text-xl text-primary-light/80 max-w-2xl mx-auto">
              When you move forward with us, you receive a clear, structured plan built around your situation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-24">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-primary/5">
              <h3 className="text-2xl font-serif text-primary-dark mb-8">What's Included:</h3>
              <ul className="space-y-6">
                {[
                  { icon: <Calculator />, text: "Exact unit sizing based on what you’re storing" },
                  { icon: <Search />, text: "Comparison of trusted local facilities" },
                  { icon: <ShieldCheck />, text: "Transparent pricing expectations" },
                  { icon: <CheckCircle2 />, text: "A move-in plan aligned with your standards and budget" },
                  { icon: <Truck />, text: "Optional coordination of movers and logistics" }
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4 text-lg text-primary-light">
                    <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center text-accent shrink-0">
                      {item.icon}
                    </div>
                    <span>{item.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-serif text-primary-dark mb-8">How this works:</h3>
              {[
                { step: "Step 1", title: "Complete the assessment.", desc: "Tell us what matters to you and share what you’re storing." },
                { step: "Step 2", title: "We build your plan.", desc: "We calculate the space required, compare facilities, verify pricing, and prepare a recommendation." },
                { step: "Step 3", title: "Review and decide.", desc: "We walk you through the options and answer any questions. You stay in control." },
                { step: "Step 4", title: "Move in.", desc: "If you’d like, we coordinate the logistics and help line everything up. You simply approve the plan and cover the labor." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 p-6 bg-white/50 rounded-2xl border border-primary/5 hover:bg-white transition-all">
                  <div className="text-accent font-bold text-sm uppercase tracking-tighter shrink-0 pt-1">
                    {item.step}
                  </div>
                  <div>
                    <h4 className="text-xl font-serif text-primary-dark mb-2">{item.title}</h4>
                    <p className="text-primary-light/80">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Page 5: Final CTA */}
      <section id="final-cta" className="py-24 px-6 md:px-12 relative overflow-hidden bg-primary-dark text-cream">
        <div className="absolute top-0 left-0 w-full h-full opacity-10">
          <div className="absolute top-0 right-0 w-1/2 h-full bg-accent blur-[150px] rounded-full" />
          <div className="absolute bottom-0 left-0 w-1/2 h-full bg-primary blur-[150px] rounded-full" />
        </div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
            You don’t have to navigate this alone.
          </h2>
          <p className="text-xl md:text-2xl text-cream/80 mb-12 leading-relaxed">
            If storage is on your mind, we’ll evaluate your items, your standards, and your priorities, then narrow the options to what truly fits. No oversized units. No unnecessary features. Just a solution tailored to your situation.
          </p>
          <p className="text-2xl font-serif italic mb-12 text-accent">
            Start with a plan built around you. Decide with confidence.
          </p>
          <a 
            href="https://tally.so/r/D4VDDZ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-accent text-primary-dark px-12 py-6 rounded-full text-xl font-bold hover:bg-white hover:scale-105 transition-all shadow-2xl shadow-accent/20 inline-block"
          >
            Start My Storage Plan
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
