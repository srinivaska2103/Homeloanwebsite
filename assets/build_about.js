const fs = require('fs');

const content = `    <!-- 1. Hero Section -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bglight dark:bg-bgdark">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                <div class="fade-in max-w-2xl">
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold text-slate-900 dark:text-white leading-tight mb-6">
                        Helping Families Finance Their <span class="text-primary dark:text-blue-400">Dream Homes</span>
                    </h1>
                    <p class="text-lg text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
                        We are more than just a mortgage brokerage. We are your dedicated financial partners, committed to finding the perfect loan solution for your unique journey.
                    </p>
                    <a href="booknow.html" class="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-secondary shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1">
                        Book Free Consultation <i class="ph ph-arrow-right ml-2 text-xl"></i>
                    </a>
                </div>
                
                <div class="fade-in relative lg:ml-auto w-full">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl">
                        <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=800&h=600&fit=crop" alt="Our Professional Team" class="w-full h-auto object-cover">
                        <div class="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. Our Story -->
    <section class="py-20 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center fade-in">
                <div class="relative">
                    <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=800&fit=crop" alt="Our Story" class="rounded-3xl shadow-xl object-cover h-[500px] w-full">
                    <div class="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-2xl shadow-lg border border-white/20 hidden md:block">
                        <p class="text-3xl font-bold mb-1">15+</p>
                        <p class="text-sm font-medium">Years of Excellence</p>
                    </div>
                </div>
                
                <div class="space-y-6">
                    <h2 class="text-3xl font-heading font-bold text-slate-900 dark:text-white">Our Story</h2>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                        PrimeNest was founded in 2009 with a simple, powerful idea: getting a home loan shouldn't be the hardest part of buying a home. Our founders, veterans of the banking industry, saw firsthand how confusing and opaque the mortgage process was for the average homebuyer.
                    </p>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                        We set out to solve this by building a bridge between complex financial institutions and everyday families. We stripped away the jargon, introduced 100% transparency, and partnered with the country's top banks to ensure our clients always get the best rates.
                    </p>
                    <p class="text-gray-600 dark:text-gray-400 leading-relaxed">
                        Today, we are proud to have grown into one of the most trusted mortgage advisory firms, having helped over 10,000 families unlock the doors to their dream homes. Our passion for simplifying home financing drives us every single day.
                    </p>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. Mission & Vision -->
    <section class="py-20 bg-bglight dark:bg-bgdark border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid md:grid-cols-2 gap-8 fade-in">
                
                <!-- Mission -->
                <div class="bg-white dark:bg-carddark p-10 rounded-3xl shadow-lg border border-gray-100 dark:border-gray-800 relative overflow-hidden group">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 dark:bg-primary/20 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                    <i class="ph-fill ph-target text-5xl text-primary mb-6 relative z-10"></i>
                    <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10">Our Mission</h3>
                    <p class="text-gray-600 dark:text-gray-400 text-lg leading-relaxed relative z-10">
                        To deliver transparent, personalized, and highly reliable home loan advisory services, ensuring every client secures the best possible financial terms for their future.
                    </p>
                </div>

                <!-- Vision -->
                <div class="bg-primary dark:bg-slate-800 p-10 rounded-3xl shadow-lg text-white relative overflow-hidden group">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110"></div>
                    <i class="ph-fill ph-eye text-5xl text-white mb-6 relative z-10"></i>
                    <h3 class="text-2xl font-bold text-white mb-4 relative z-10">Our Vision</h3>
                    <p class="text-blue-100 dark:text-gray-300 text-lg leading-relaxed relative z-10">
                        To become the most trusted and recognized mortgage advisory partner for homebuyers and property investors across the nation.
                    </p>
                </div>

            </div>
        </div>
    </section>

    <!-- 4. Our Core Values -->
    <section class="py-20 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 fade-in">
                <h2 class="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Our Core Values</h2>
                <p class="text-gray-600 dark:text-gray-400">The principles that guide every interaction and decision we make.</p>
            </div>
            
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 fade-in text-center">
                <div class="p-4">
                    <i class="ph-fill ph-shield-check text-4xl text-primary dark:text-blue-400 mb-3"></i>
                    <h4 class="font-bold text-slate-900 dark:text-white">Integrity</h4>
                </div>
                <div class="p-4">
                    <i class="ph-fill ph-magnifying-glass text-4xl text-accent mb-3"></i>
                    <h4 class="font-bold text-slate-900 dark:text-white">Transparency</h4>
                </div>
                <div class="p-4">
                    <i class="ph-fill ph-heart text-4xl text-red-500 mb-3"></i>
                    <h4 class="font-bold text-slate-900 dark:text-white">Customer First</h4>
                </div>
                <div class="p-4">
                    <i class="ph-fill ph-medal text-4xl text-yellow-500 mb-3"></i>
                    <h4 class="font-bold text-slate-900 dark:text-white">Professional Excellence</h4>
                </div>
                <div class="p-4">
                    <i class="ph-fill ph-handshake text-4xl text-purple-500 mb-3"></i>
                    <h4 class="font-bold text-slate-900 dark:text-white">Trust</h4>
                </div>
                <div class="p-4">
                    <i class="ph-fill ph-lightbulb text-4xl text-orange-500 mb-3"></i>
                    <h4 class="font-bold text-slate-900 dark:text-white">Innovation</h4>
                </div>
                <div class="p-4">
                    <i class="ph-fill ph-check-circle text-4xl text-green-500 mb-3"></i>
                    <h4 class="font-bold text-slate-900 dark:text-white">Commitment</h4>
                </div>
                <div class="p-4">
                    <i class="ph-fill ph-scales text-4xl text-teal-500 mb-3"></i>
                    <h4 class="font-bold text-slate-900 dark:text-white">Financial Responsibility</h4>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. Why Choose Us -->
    <section class="py-20 bg-bglight dark:bg-bgdark border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-16 items-center fade-in">
                <div>
                    <h2 class="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-6">Why Partner With Us?</h2>
                    <p class="text-gray-600 dark:text-gray-400 mb-8">We take the stress out of home financing by offering unparalleled expertise and a seamless digital experience.</p>
                    
                    <ul class="space-y-4">
                        <li class="flex items-start gap-3">
                            <i class="ph-fill ph-check-circle text-primary dark:text-blue-400 text-xl mt-0.5"></i>
                            <div>
                                <h4 class="font-bold text-slate-900 dark:text-white">Experienced Loan Advisors</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-400">Industry veterans navigating complex financial profiles.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="ph-fill ph-check-circle text-primary dark:text-blue-400 text-xl mt-0.5"></i>
                            <div>
                                <h4 class="font-bold text-slate-900 dark:text-white">Multiple Banking Partners</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-400">Access to 25+ top-tier banks and NBFCs.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="ph-fill ph-check-circle text-primary dark:text-blue-400 text-xl mt-0.5"></i>
                            <div>
                                <h4 class="font-bold text-slate-900 dark:text-white">Personalized Loan Solutions</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-400">Structured specifically for your income and tax bracket.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="ph-fill ph-check-circle text-primary dark:text-blue-400 text-xl mt-0.5"></i>
                            <div>
                                <h4 class="font-bold text-slate-900 dark:text-white">Fast Documentation Support</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-400">We handle the paperwork to speed up bank approvals.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="ph-fill ph-check-circle text-primary dark:text-blue-400 text-xl mt-0.5"></i>
                            <div>
                                <h4 class="font-bold text-slate-900 dark:text-white">End-to-End Assistance</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-400">From the first call to handing over the keys.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="ph-fill ph-check-circle text-primary dark:text-blue-400 text-xl mt-0.5"></i>
                            <div>
                                <h4 class="font-bold text-slate-900 dark:text-white">Competitive Interest Rates</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-400">We negotiate hard on your behalf to save you money.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="ph-fill ph-check-circle text-primary dark:text-blue-400 text-xl mt-0.5"></i>
                            <div>
                                <h4 class="font-bold text-slate-900 dark:text-white">Secure Digital Process</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-400">100% data privacy and secure document vaults.</p>
                            </div>
                        </li>
                        <li class="flex items-start gap-3">
                            <i class="ph-fill ph-check-circle text-primary dark:text-blue-400 text-xl mt-0.5"></i>
                            <div>
                                <h4 class="font-bold text-slate-900 dark:text-white">Excellent Customer Support</h4>
                                <p class="text-sm text-gray-600 dark:text-gray-400">Always available to answer your questions and concerns.</p>
                            </div>
                        </li>
                    </ul>
                </div>
                
                <div class="relative hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=600&h=800&fit=crop" alt="Why Choose Us" class="rounded-3xl shadow-2xl w-full object-cover h-[700px]">
                </div>
            </div>
        </div>
    </section>

    <!-- 6. Meet Our Expert Advisors -->
    <section class="py-20 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 fade-in">
                <h2 class="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Meet Our Expert Advisors</h2>
                <p class="text-gray-600 dark:text-gray-400">The brilliant minds working tirelessly to secure your financial future.</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 fade-in">
                <!-- Team Member 1 -->
                <div class="bg-bglight dark:bg-carddark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 text-center group">
                    <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop" alt="Rajiv Sharma" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1">Rajiv Sharma</h3>
                        <p class="text-primary dark:text-blue-400 font-medium mb-3">Founder & Chief Advisor</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2"><i class="ph ph-clock mr-1"></i> 20+ Years Experience</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4"><i class="ph ph-briefcase mr-1"></i> Corp. Banking & Refinancing</p>
                        <a href="#" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                            <i class="ph-fill ph-linkedin-logo text-xl"></i>
                        </a>
                    </div>
                </div>

                <!-- Team Member 2 -->
                <div class="bg-bglight dark:bg-carddark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 text-center group">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop" alt="Priya Desai" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1">Priya Desai</h3>
                        <p class="text-primary dark:text-blue-400 font-medium mb-3">Senior Mortgage Consultant</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2"><i class="ph ph-clock mr-1"></i> 12+ Years Experience</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4"><i class="ph ph-briefcase mr-1"></i> First-Time Buyers & LAP</p>
                        <a href="#" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                            <i class="ph-fill ph-linkedin-logo text-xl"></i>
                        </a>
                    </div>
                </div>

                <!-- Team Member 3 -->
                <div class="bg-bglight dark:bg-carddark rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800 text-center group">
                    <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=400&fit=crop" alt="Anil Kumar" class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-1">Anil Kumar</h3>
                        <p class="text-primary dark:text-blue-400 font-medium mb-3">Commercial Loan Specialist</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-2"><i class="ph ph-clock mr-1"></i> 15+ Years Experience</p>
                        <p class="text-sm text-gray-600 dark:text-gray-400 mb-4"><i class="ph ph-briefcase mr-1"></i> Construction & Self-Employed</p>
                        <a href="#" class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white transition-colors">
                            <i class="ph-fill ph-linkedin-logo text-xl"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 7. Our Journey Timeline -->
    <section class="py-20 bg-bglight dark:bg-bgdark border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center mb-16 fade-in">
                <h2 class="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Our Journey</h2>
                <p class="text-gray-600 dark:text-gray-400">Milestones that shaped who we are today.</p>
            </div>
            
            <div class="relative border-l-2 border-primary/30 dark:border-blue-900 ml-3 md:ml-1/2 fade-in space-y-12">
                <!-- Timeline Item 1 -->
                <div class="relative pl-8 md:pl-0">
                    <div class="md:flex items-center justify-between w-full">
                        <div class="md:w-5/12 text-left md:text-right md:pr-8">
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Company Founded</h3>
                            <p class="text-gray-600 dark:text-gray-400 mt-2">Started with a small office and a big dream to simplify mortgages.</p>
                        </div>
                        <div class="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900"></div>
                        <div class="md:w-5/12 md:pl-8 text-left mt-2 md:mt-0">
                            <span class="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-blue-400 font-bold rounded-lg text-sm">2009</span>
                        </div>
                    </div>
                </div>

                <!-- Timeline Item 2 -->
                <div class="relative pl-8 md:pl-0">
                    <div class="md:flex items-center justify-between w-full flex-row-reverse">
                        <div class="md:w-5/12 text-left md:pl-8">
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white">First 100 Clients</h3>
                            <p class="text-gray-600 dark:text-gray-400 mt-2">Achieved our first major milestone purely through word-of-mouth referrals.</p>
                        </div>
                        <div class="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900"></div>
                        <div class="md:w-5/12 md:pr-8 md:text-right mt-2 md:mt-0">
                            <span class="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-blue-400 font-bold rounded-lg text-sm">2011</span>
                        </div>
                    </div>
                </div>

                <!-- Timeline Item 3 -->
                <div class="relative pl-8 md:pl-0">
                    <div class="md:flex items-center justify-between w-full">
                        <div class="md:w-5/12 text-left md:text-right md:pr-8">
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Expanded Partnerships</h3>
                            <p class="text-gray-600 dark:text-gray-400 mt-2">Secured tie-ups with 25+ leading national banks and NBFCs.</p>
                        </div>
                        <div class="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900"></div>
                        <div class="md:w-5/12 md:pl-8 text-left mt-2 md:mt-0">
                            <span class="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-blue-400 font-bold rounded-lg text-sm">2015</span>
                        </div>
                    </div>
                </div>

                <!-- Timeline Item 4 -->
                <div class="relative pl-8 md:pl-0">
                    <div class="md:flex items-center justify-between w-full flex-row-reverse">
                        <div class="md:w-5/12 text-left md:pl-8">
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Digital Portal Launch</h3>
                            <p class="text-gray-600 dark:text-gray-400 mt-2">Revolutionized our process with a 100% paperless client dashboard.</p>
                        </div>
                        <div class="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900"></div>
                        <div class="md:w-5/12 md:pr-8 md:text-right mt-2 md:mt-0">
                            <span class="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-blue-400 font-bold rounded-lg text-sm">2019</span>
                        </div>
                    </div>
                </div>

                <!-- Timeline Item 5 -->
                <div class="relative pl-8 md:pl-0">
                    <div class="md:flex items-center justify-between w-full">
                        <div class="md:w-5/12 text-left md:text-right md:pr-8">
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Thousands Approved</h3>
                            <p class="text-gray-600 dark:text-gray-400 mt-2">Crossed the 10,000+ happy clients mark and ₹500Cr in disbursements.</p>
                        </div>
                        <div class="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-primary ring-4 ring-white dark:ring-slate-900"></div>
                        <div class="md:w-5/12 md:pl-8 text-left mt-2 md:mt-0">
                            <span class="inline-block py-1 px-3 bg-blue-100 dark:bg-blue-900/50 text-primary dark:text-blue-400 font-bold rounded-lg text-sm">2023</span>
                        </div>
                    </div>
                </div>

                <!-- Timeline Item 6 -->
                <div class="relative pl-8 md:pl-0">
                    <div class="md:flex items-center justify-between w-full flex-row-reverse">
                        <div class="md:w-5/12 text-left md:pl-8">
                            <h3 class="text-xl font-bold text-slate-900 dark:text-white">Future Growth Goals</h3>
                            <p class="text-gray-600 dark:text-gray-400 mt-2">Expanding our footprint nationally while integrating AI for faster approvals.</p>
                        </div>
                        <div class="absolute left-[-9px] md:left-1/2 md:-ml-[9px] w-4 h-4 rounded-full bg-accent ring-4 ring-white dark:ring-slate-900 animate-pulse"></div>
                        <div class="md:w-5/12 md:pr-8 md:text-right mt-2 md:mt-0">
                            <span class="inline-block py-1 px-3 bg-green-100 dark:bg-green-900/30 text-accent font-bold rounded-lg text-sm">2026 & Beyond</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- 8. Achievements & Statistics -->
    <section class="py-20 relative bg-primary dark:bg-slate-900 border-t border-gray-800 overflow-hidden">
        <div class="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center fade-in">
                
                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div class="text-4xl font-bold text-white mb-2">10k+</div>
                    <div class="text-sm text-blue-200 font-medium">Happy Clients</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div class="text-4xl font-bold text-white mb-2">₹500Cr+</div>
                    <div class="text-sm text-blue-200 font-medium">Loans Facilitated</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div class="text-4xl font-bold text-white mb-2">25+</div>
                    <div class="text-sm text-blue-200 font-medium">Banking Partners</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div class="text-4xl font-bold text-white mb-2">98%</div>
                    <div class="text-sm text-blue-200 font-medium">Satisfaction Rate</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div class="text-4xl font-bold text-white mb-2">15+</div>
                    <div class="text-sm text-blue-200 font-medium">Years Experience</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
                    <div class="text-4xl font-bold text-white mb-2">50+</div>
                    <div class="text-sm text-blue-200 font-medium">Expert Advisors</div>
                </div>

            </div>
        </div>
    </section>

    <!-- 9. Certifications & Trusted Partners -->
    <section class="py-16 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center fade-in">
            <h3 class="text-2xl font-bold text-slate-900 dark:text-white mb-2">Certified & Secure</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">We strictly adhere to RBI guidelines and banking compliance standards to ensure your data is always safe.</p>
            
            <div class="flex flex-wrap justify-center gap-6 md:gap-10 opacity-70 grayscale hover:grayscale-0 transition-all duration-500 mb-10">
                <div class="flex items-center gap-2 bg-bglight dark:bg-slate-800 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <i class="ph-fill ph-shield-check text-2xl text-accent"></i>
                    <span class="font-bold text-slate-800 dark:text-white">ISO 27001 Certified</span>
                </div>
                <div class="flex items-center gap-2 bg-bglight dark:bg-slate-800 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <i class="ph-fill ph-bank text-2xl text-primary"></i>
                    <span class="font-bold text-slate-800 dark:text-white">RBI Compliant</span>
                </div>
                <div class="flex items-center gap-2 bg-bglight dark:bg-slate-800 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <i class="ph-fill ph-lock-key text-2xl text-purple-500"></i>
                    <span class="font-bold text-slate-800 dark:text-white">256-bit Encryption</span>
                </div>
                <div class="flex items-center gap-2 bg-bglight dark:bg-slate-800 px-6 py-3 rounded-lg border border-gray-200 dark:border-gray-700">
                    <i class="ph-fill ph-medal text-2xl text-yellow-500"></i>
                    <span class="font-bold text-slate-800 dark:text-white">Best Advisory Award 2024</span>
                </div>
            </div>
            
            <div class="border-t border-gray-100 dark:border-gray-800 pt-10">
                <p class="text-sm font-bold text-gray-500 mb-6 uppercase tracking-wider">Trusted by top banks including</p>
                <div class="flex flex-wrap justify-center gap-4 opacity-50">
                    <span class="font-bold text-xl text-slate-800 dark:text-white">SBI</span>
                    <span class="text-gray-300">|</span>
                    <span class="font-bold text-xl text-slate-800 dark:text-white">HDFC</span>
                    <span class="text-gray-300">|</span>
                    <span class="font-bold text-xl text-slate-800 dark:text-white">ICICI</span>
                    <span class="text-gray-300">|</span>
                    <span class="font-bold text-xl text-slate-800 dark:text-white">Kotak</span>
                    <span class="text-gray-300">|</span>
                    <span class="font-bold text-xl text-slate-800 dark:text-white">Axis Bank</span>
                </div>
            </div>
        </div>
    </section>

    <!-- 10. Call to Action -->
    <section class="py-20 relative overflow-hidden bg-bgdark text-white">
        <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1556761175-5973dc0f32d7?w=1600&h=600&fit=crop" alt="Team meeting" class="w-full h-full object-cover opacity-20">
            <div class="absolute inset-0 bg-gradient-to-t from-bgdark via-bgdark/80 to-transparent"></div>
        </div>
        
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center fade-in">
            <h2 class="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Start Your Home Loan Journey?</h2>
            <p class="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">Our advisors are ready to help you navigate the market and secure the best possible terms.</p>
            
            <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <a href="booknow.html" class="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-secondary transition-colors shadow-xl border border-primary">
                    Book Free Consultation
                </a>
                <a href="contact.html" class="px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
                    Contact Our Advisors
                </a>
                <a href="https://wa.me/919876543210" target="_blank" class="px-8 py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-xl flex items-center justify-center gap-2">
                    <i class="ph-fill ph-whatsapp-logo"></i> WhatsApp
                </a>
            </div>
            
            <div class="flex flex-wrap justify-center gap-8 text-sm text-gray-400 border-t border-white/10 pt-8">
                <div class="flex items-center gap-2"><i class="ph-fill ph-envelope text-xl"></i> hello@primenest.com</div>
                <div class="flex items-center gap-2"><i class="ph-fill ph-phone text-xl"></i> +91 98765 43210</div>
                <div class="flex items-center gap-2"><i class="ph-fill ph-map-pin text-xl"></i> Financial District, Mumbai</div>
            </div>
        </div>
    </section>`;

const filePath = 'aboutus.html';
const html = fs.readFileSync(filePath, 'utf8');

const navEndIndex = html.indexOf('</nav>') + 6;
const footerStartIndex = html.indexOf('<!-- Footer -->');

const newHtml = html.substring(0, navEndIndex) + '\\n\\n' + content + '\\n\\n    ' + html.substring(footerStartIndex);

fs.writeFileSync(filePath, newHtml);
console.log('Successfully updated aboutus.html');
