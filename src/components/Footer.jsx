import React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sparkles } from "lucide-react";

export default function Footer() {
    return (
        <motion.footer
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="w-full bg-gradient-to-b from-gray-950 via-black to-gray-900 text-gray-300 py-10 border-t border-gray-800"
        >
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
                {/* Brand Section */}
                <div>
                    <h2 className="text-2xl font-bold bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent mb-3 flex items-center justify-center md:justify-start gap-2">
                        <Sparkles className="text-green-400" size={22} />
                        EnhancerAI
                    </h2>
                    <p className="text-gray-400 text-sm leading-relaxed">
                        Elevate your photos using the power of artificial intelligence.
                        Crystal clarity, vivid details — instantly.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a
                                href="/"
                                className="hover:text-green-400 transition-colors duration-200"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="/main"
                                className="hover:text-green-400 transition-colors duration-200"
                            >
                                Enhance
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://ashishkhopdeportfolio.netlify.app/"
                                className="hover:text-green-400 transition-colors duration-200"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <h3 className="text-lg font-semibold mb-3 text-white">Connect</h3>
                    <div className="flex justify-center md:justify-start gap-4">
                        <a
                            href="mailto:ashishkhopde7089@gmail.com"
                            className="hover:text-green-400 transition-colors"
                        >
                            <Mail size={20} />
                        </a>
                        <a
                            href="https://github.com/ashishkhopde"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-400 transition-colors"
                        >
                            <Github size={20} />
                        </a>
                        <a
                            href="https://www.linkedin.com/in/ashish-khopde-2a3680372/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-green-400 transition-colors"
                        >
                            <Linkedin size={20} />
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-500 text-sm">
                © {new Date().getFullYear()} EnhancerAI — All rights reserved.
            </div>
        </motion.footer>
    );
}
