const fs = require('fs');

const content = `    <!-- 1. Premium Hero Banner -->
    <section class="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-bgdark text-white">
        <!-- Background Image overlay -->
        <div class="absolute inset-0 z-0">
            <img src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=1600&h=900&fit=crop" alt="Background House" class="w-full h-full object-cover opacity-20">
            <div class="absolute inset-0 bg-gradient-to-r from-bgdark via-bgdark/90 to-transparent"></div>
        </div>
        
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                <div class="fade-in max-w-2xl">
                    <span class="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur text-blue-300 text-sm font-semibold mb-6 border border-white/20">Welcome to PrimeNest</span>
                    <h1 class="text-4xl md:text-5xl lg:text-6xl font-heading font-extrabold leading-tight mb-6">
                        Finance Your Dream Home with <span class="text-secondary">Expert Mortgage Advice</span>
                    </h1>
                    <p class="text-lg text-gray-300 mb-8 leading-relaxed">
                        Skip the bank queues. Get dedicated, unbiased guidance to find the best home loan rates from over 25 trusted banking partners.
                    </p>
                    <div class="flex flex-col sm:flex-row gap-4 mb-8">
                        <a href="booknow.html" class="inline-flex justify-center items-center px-8 py-3.5 border border-transparent text-base font-medium rounded-lg text-white bg-primary hover:bg-secondary shadow-lg shadow-primary/30 transition-all transform hover:-translate-y-1">
                            Book Free Consultation
                        </a>
                        <a href="services.html" class="inline-flex justify-center items-center px-8 py-3.5 border border-white/30 text-base font-medium rounded-lg text-white hover:bg-white/10 transition-all">
                            Check Loan Eligibility
                        </a>
                    </div>
                </div>
                
                <div class="fade-in relative lg:ml-auto w-full max-w-lg hidden lg:block">
                    <div class="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                        <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&h=600&fit=crop" alt="Professional advisor and happy family" class="w-full h-auto object-cover">
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 2. Why Homebuyers Choose Us -->
    <section class="py-20 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 fade-in">
                <h2 class="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Why Homebuyers Choose Us</h2>
                <p class="text-gray-600 dark:text-gray-400">Experience a hassle-free loan journey designed around your needs.</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
                <div class="bg-bglight dark:bg-carddark p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <div class="w-14 h-14 bg-blue-100 dark:bg-blue-900/50 rounded-full flex items-center justify-center mb-6 text-primary dark:text-blue-400">
                        <i class="ph-fill ph-certificate text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Certified Loan Advisors</h3>
                    <p class="text-gray-600 dark:text-gray-400">Our team consists of industry-certified professionals with years of experience.</p>
                </div>

                <div class="bg-bglight dark:bg-carddark p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <div class="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6 text-accent">
                        <i class="ph-fill ph-bank text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">25+ Banking Partners</h3>
                    <p class="text-gray-600 dark:text-gray-400">Access exclusive rates from the country's top financial institutions.</p>
                </div>

                <div class="bg-bglight dark:bg-carddark p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <div class="w-14 h-14 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-6 text-purple-600">
                        <i class="ph-fill ph-magnifying-glass text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Transparent Guidance</h3>
                    <p class="text-gray-600 dark:text-gray-400">Complete clarity on processing fees, interest rates, and hidden charges.</p>
                </div>

                <div class="bg-bglight dark:bg-carddark p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <div class="w-14 h-14 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-6 text-red-500">
                        <i class="ph-fill ph-rocket-launch text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Fast Loan Processing</h3>
                    <p class="text-gray-600 dark:text-gray-400">Our digital integration ensures your file moves quickly through bank approvals.</p>
                </div>

                <div class="bg-bglight dark:bg-carddark p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <div class="w-14 h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-6 text-yellow-600">
                        <i class="ph-fill ph-users text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">Personalized Advice</h3>
                    <p class="text-gray-600 dark:text-gray-400">We structure the loan to match your unique tax and income profile.</p>
                </div>

                <div class="bg-bglight dark:bg-carddark p-8 rounded-2xl border border-gray-100 dark:border-gray-800">
                    <div class="w-14 h-14 bg-teal-100 dark:bg-teal-900/30 rounded-full flex items-center justify-center mb-6 text-teal-600">
                        <i class="ph-fill ph-handshake text-3xl"></i>
                    </div>
                    <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-3">End-to-End Support</h3>
                    <p class="text-gray-600 dark:text-gray-400">From the first call to the final disbursement, we handle everything.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 3. Compare Loan Options -->
    <section class="py-20 bg-bglight dark:bg-bgdark border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 fade-in">
                <h2 class="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Compare Loan Options</h2>
                <p class="text-gray-600 dark:text-gray-400">Understand the key features of our primary loan products.</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">
                <!-- Option 1 -->
                <div class="bg-white dark:bg-carddark border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div class="bg-primary p-4 text-white text-center font-bold text-lg">Home Loan</div>
                    <div class="p-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
                        <div class="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Eligibility</span>
                            <span>Salaried & Self-Employed</span>
                        </div>
                        <div class="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Max Tenure</span>
                            <span>Up to 30 Years</span>
                        </div>
                        <div class="flex flex-col gap-1 pt-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Key Benefit</span>
                            <span class="text-gray-500">Highest loan amount up to 90% of property value.</span>
                        </div>
                    </div>
                </div>

                <!-- Option 2 -->
                <div class="bg-white dark:bg-carddark border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div class="bg-accent p-4 text-white text-center font-bold text-lg">Mortgage Loan</div>
                    <div class="p-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
                        <div class="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Eligibility</span>
                            <span>Property Owners</span>
                        </div>
                        <div class="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Max Tenure</span>
                            <span>Up to 15 Years</span>
                        </div>
                        <div class="flex flex-col gap-1 pt-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Key Benefit</span>
                            <span class="text-gray-500">Use funds for any personal or business needs.</span>
                        </div>
                    </div>
                </div>

                <!-- Option 3 -->
                <div class="bg-white dark:bg-carddark border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div class="bg-purple-600 p-4 text-white text-center font-bold text-lg">Loan Against Property</div>
                    <div class="p-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
                        <div class="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Eligibility</span>
                            <span>Commercial/Res Property</span>
                        </div>
                        <div class="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Max Tenure</span>
                            <span>Up to 15 Years</span>
                        </div>
                        <div class="flex flex-col gap-1 pt-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Key Benefit</span>
                            <span class="text-gray-500">Lower interest rates compared to personal loans.</span>
                        </div>
                    </div>
                </div>

                <!-- Option 4 -->
                <div class="bg-white dark:bg-carddark border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div class="bg-orange-500 p-4 text-white text-center font-bold text-lg">Balance Transfer</div>
                    <div class="p-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
                        <div class="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Eligibility</span>
                            <span>Existing Loan Holders</span>
                        </div>
                        <div class="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Max Tenure</span>
                            <span>Remaining Tenure</span>
                        </div>
                        <div class="flex flex-col gap-1 pt-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Key Benefit</span>
                            <span class="text-gray-500">Save massively on interest by switching banks.</span>
                        </div>
                    </div>
                </div>

                <!-- Option 5 -->
                <div class="bg-white dark:bg-carddark border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div class="bg-yellow-500 p-4 text-white text-center font-bold text-lg">Construction Loan</div>
                    <div class="p-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
                        <div class="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Eligibility</span>
                            <span>Plot Owners</span>
                        </div>
                        <div class="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Max Tenure</span>
                            <span>Up to 20 Years</span>
                        </div>
                        <div class="flex flex-col gap-1 pt-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Key Benefit</span>
                            <span class="text-gray-500">Funds released in stages as construction progresses.</span>
                        </div>
                    </div>
                </div>

                <!-- Option 6 -->
                <div class="bg-white dark:bg-carddark border border-gray-200 dark:border-gray-700 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow">
                    <div class="bg-teal-600 p-4 text-white text-center font-bold text-lg">Plot Purchase Loan</div>
                    <div class="p-6 space-y-4 text-sm text-gray-600 dark:text-gray-300">
                        <div class="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Eligibility</span>
                            <span>Land Buyers</span>
                        </div>
                        <div class="flex justify-between border-b border-gray-100 dark:border-gray-800 pb-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Max Tenure</span>
                            <span>Up to 15 Years</span>
                        </div>
                        <div class="flex flex-col gap-1 pt-2">
                            <span class="font-medium text-slate-900 dark:text-gray-200">Key Benefit</span>
                            <span class="text-gray-500">Finance for buying land to build your home.</span>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- 4. Find the Right Loan (Advisor Steps) -->
    <section class="py-20 relative overflow-hidden bg-primary dark:bg-slate-900">
        <div class="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 class="text-3xl font-heading font-bold text-white mb-16 fade-in">How Our Advisors Find The Right Loan</h2>
            
            <div class="flex flex-col md:flex-row items-start justify-center gap-8 fade-in relative">
                <!-- Line -->
                <div class="hidden md:block absolute top-10 left-10 right-10 h-1 bg-blue-400/30 -z-10"></div>
                
                <div class="flex-1 text-center">
                    <div class="w-20 h-20 bg-white text-primary rounded-2xl mx-auto flex items-center justify-center font-bold text-3xl shadow-xl mb-4 transform -rotate-6">1</div>
                    <h4 class="text-white font-bold mb-2">Share Your Requirements</h4>
                    <p class="text-blue-100 text-sm">Tell us your goal and budget.</p>
                </div>
                <div class="flex-1 text-center">
                    <div class="w-20 h-20 bg-white text-primary rounded-2xl mx-auto flex items-center justify-center font-bold text-3xl shadow-xl mb-4 transform rotate-3">2</div>
                    <h4 class="text-white font-bold mb-2">Compare Banks</h4>
                    <p class="text-blue-100 text-sm">We analyze top lender offers.</p>
                </div>
                <div class="flex-1 text-center">
                    <div class="w-20 h-20 bg-white text-primary rounded-2xl mx-auto flex items-center justify-center font-bold text-3xl shadow-xl mb-4 transform -rotate-3">3</div>
                    <h4 class="text-white font-bold mb-2">Verify Eligibility</h4>
                    <p class="text-blue-100 text-sm">Check your maximum sanction limit.</p>
                </div>
                <div class="flex-1 text-center">
                    <div class="w-20 h-20 bg-white text-primary rounded-2xl mx-auto flex items-center justify-center font-bold text-3xl shadow-xl mb-4 transform rotate-6">4</div>
                    <h4 class="text-white font-bold mb-2">Submit Documents</h4>
                    <p class="text-blue-100 text-sm">Hassle-free digital upload.</p>
                </div>
                <div class="flex-1 text-center">
                    <div class="w-20 h-20 bg-accent text-white rounded-2xl mx-auto flex items-center justify-center font-bold text-3xl shadow-xl mb-4 transform scale-110">5</div>
                    <h4 class="text-white font-bold mb-2">Get Loan Approved</h4>
                    <p class="text-blue-100 text-sm">Fast bank sanctions & disbursal.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- 5. Featured Financial Solutions -->
    <section class="py-20 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 fade-in">
                <h2 class="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Featured Financial Solutions</h2>
                <p class="text-gray-600 dark:text-gray-400">Targeted programs designed specifically for your unique situation.</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
                
                <div class="group bg-bglight dark:bg-carddark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all">
                    <img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=600&h=400&fit=crop" alt="First Time Buyers" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">First-Time Home Buyers</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Specialized guidance and access to government subsidies for your first home.</p>
                        <a href="services.html" class="text-primary dark:text-blue-400 font-bold text-sm hover:underline">Explore Plan →</a>
                    </div>
                </div>

                <div class="group bg-bglight dark:bg-carddark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop" alt="Self Employed" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Self-Employed Loans</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Flexible income assessment methods for business owners and freelancers.</p>
                        <a href="services.html" class="text-primary dark:text-blue-400 font-bold text-sm hover:underline">Explore Plan →</a>
                    </div>
                </div>

                <div class="group bg-bglight dark:bg-carddark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=400&fit=crop" alt="Salaried" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Salaried Employee Loans</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Fast-tracked approvals and premium interest rates for corporate employees.</p>
                        <a href="services.html" class="text-primary dark:text-blue-400 font-bold text-sm hover:underline">Explore Plan →</a>
                    </div>
                </div>

                <div class="group bg-bglight dark:bg-carddark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all">
                    <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop" alt="Home Renovation" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Home Renovation Finance</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Quick funds to upgrade your interiors, repair, or extend your existing house.</p>
                        <a href="services.html" class="text-primary dark:text-blue-400 font-bold text-sm hover:underline">Explore Plan →</a>
                    </div>
                </div>

                <div class="group bg-bglight dark:bg-carddark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all">
                    <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" alt="Property Purchase" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Property Purchase Loans</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Tailored financing for buying commercial offices or investment properties.</p>
                        <a href="services.html" class="text-primary dark:text-blue-400 font-bold text-sm hover:underline">Explore Plan →</a>
                    </div>
                </div>

                <div class="group bg-bglight dark:bg-carddark rounded-2xl overflow-hidden border border-gray-100 dark:border-gray-800 shadow-sm hover:shadow-xl transition-all">
                    <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop" alt="Refinancing" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">Refinancing Solutions</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Restructure your existing debts with better rates or top-up loan options.</p>
                        <a href="services.html" class="text-primary dark:text-blue-400 font-bold text-sm hover:underline">Explore Plan →</a>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- 6. EMI & Affordability Tools -->
    <section class="py-20 bg-bglight dark:bg-bgdark border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid lg:grid-cols-2 gap-12 items-center fade-in">
                <div>
                    <h2 class="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-6">Empowering Financial Tools</h2>
                    <p class="text-gray-600 dark:text-gray-400 mb-8">Take control of your finances. Use our suite of advanced calculators to plan your property investment securely.</p>
                    
                    <div class="space-y-4 mb-8">
                        <div class="flex items-center gap-4 bg-white dark:bg-carddark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <i class="ph-fill ph-calculator text-primary text-2xl"></i>
                            <span class="font-bold text-slate-900 dark:text-white">EMI Calculator</span>
                        </div>
                        <div class="flex items-center gap-4 bg-white dark:bg-carddark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <i class="ph-fill ph-user-check text-accent text-2xl"></i>
                            <span class="font-bold text-slate-900 dark:text-white">Eligibility Calculator</span>
                        </div>
                        <div class="flex items-center gap-4 bg-white dark:bg-carddark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <i class="ph-fill ph-wallet text-purple-500 text-2xl"></i>
                            <span class="font-bold text-slate-900 dark:text-white">Affordability Estimator</span>
                        </div>
                        <div class="flex items-center gap-4 bg-white dark:bg-carddark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <i class="ph-fill ph-chart-line-up text-orange-500 text-2xl"></i>
                            <span class="font-bold text-slate-900 dark:text-white">Interest Comparison</span>
                        </div>
                        <div class="flex items-center gap-4 bg-white dark:bg-carddark p-4 rounded-xl shadow-sm border border-gray-100 dark:border-gray-700">
                            <i class="ph-fill ph-calendar text-teal-500 text-2xl"></i>
                            <span class="font-bold text-slate-900 dark:text-white">Loan Tenure Planner</span>
                        </div>
                    </div>
                    
                    <a href="index.html#eligibility" class="inline-flex justify-center items-center px-8 py-4 border border-transparent text-base font-bold rounded-lg text-white bg-primary hover:bg-secondary shadow-lg transition-all">
                        Start Calculating <i class="ph ph-arrow-right ml-2"></i>
                    </a>
                </div>
                
                <div class="relative hidden lg:block">
                    <img src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?w=800&h=800&fit=crop" alt="Calculators and Finance" class="rounded-3xl shadow-2xl object-cover">
                    <!-- Floating stat -->
                    <div class="absolute -bottom-10 -left-10 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-gray-100 dark:border-gray-700">
                        <div class="flex items-center gap-4">
                            <div class="w-12 h-12 bg-accent/20 rounded-full flex items-center justify-center">
                                <i class="ph-fill ph-check-circle text-accent text-2xl"></i>
                            </div>
                            <div>
                                <p class="text-sm text-gray-500">Accurate up to</p>
                                <p class="text-xl font-bold text-slate-900 dark:text-white">99.9%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 7. Success Metrics -->
    <section class="py-16 bg-primary dark:bg-slate-900 border-t border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="grid grid-cols-2 lg:grid-cols-6 gap-6 fade-in text-center">
                <div class="p-4">
                    <div class="text-3xl font-bold text-white mb-1">10k+</div>
                    <div class="text-xs text-blue-200 uppercase tracking-wide">Happy Clients</div>
                </div>
                <div class="p-4">
                    <div class="text-3xl font-bold text-white mb-1">₹500Cr+</div>
                    <div class="text-xs text-blue-200 uppercase tracking-wide">Loans Facilitated</div>
                </div>
                <div class="p-4">
                    <div class="text-3xl font-bold text-white mb-1">98%</div>
                    <div class="text-xs text-blue-200 uppercase tracking-wide">Customer Satisfaction</div>
                </div>
                <div class="p-4">
                    <div class="text-3xl font-bold text-white mb-1">25+</div>
                    <div class="text-xs text-blue-200 uppercase tracking-wide">Banking Partners</div>
                </div>
                <div class="p-4">
                    <div class="text-3xl font-bold text-white mb-1">15+</div>
                    <div class="text-xs text-blue-200 uppercase tracking-wide">Years Experience</div>
                </div>
                <div class="p-4">
                    <div class="text-3xl font-bold text-white mb-1">24hr</div>
                    <div class="text-xs text-blue-200 uppercase tracking-wide">Response Time</div>
                </div>
            </div>
        </div>
    </section>

    <!-- 8. Client Success Stories -->
    <section class="py-20 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 fade-in">
                <h2 class="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Client Success Stories</h2>
                <p class="text-gray-600 dark:text-gray-400">See how we've helped thousands of families achieve their property dreams.</p>
            </div>
            
            <div class="grid md:grid-cols-3 gap-8 fade-in">
                <!-- Testimonial 1 -->
                <div class="bg-bglight dark:bg-carddark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 relative shadow-sm">
                    <i class="ph-fill ph-quotes text-6xl text-gray-200 dark:text-gray-800 absolute top-4 right-4 z-0"></i>
                    <div class="relative z-10">
                        <div class="flex items-center gap-4 mb-6">
                            <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop" alt="Sarah J." class="w-14 h-14 rounded-full object-cover">
                            <div>
                                <h4 class="font-bold text-slate-900 dark:text-white">Sarah Jenkins</h4>
                                <div class="flex text-yellow-400 text-sm"><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i></div>
                            </div>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 italic mb-6">"PrimeNest made my first home purchase a breeze. Their advisor explained every step clearly and got my loan sanctioned in just 5 days!"</p>
                        <div class="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between text-xs text-gray-500 font-medium">
                            <span>Home Loan (₹45 Lakhs)</span>
                            <span>Pune, IN</span>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 2 -->
                <div class="bg-bglight dark:bg-carddark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 relative shadow-sm">
                    <i class="ph-fill ph-quotes text-6xl text-gray-200 dark:text-gray-800 absolute top-4 right-4 z-0"></i>
                    <div class="relative z-10">
                        <div class="flex items-center gap-4 mb-6">
                            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop" alt="David M." class="w-14 h-14 rounded-full object-cover">
                            <div>
                                <h4 class="font-bold text-slate-900 dark:text-white">David Mitchell</h4>
                                <div class="flex text-yellow-400 text-sm"><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star-half"></i></div>
                            </div>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 italic mb-6">"The balance transfer process was completely hassle-free. They handled all the bank paperwork while I just watched my EMI drop significantly."</p>
                        <div class="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between text-xs text-gray-500 font-medium">
                            <span>Balance Transfer (₹1.2 Cr)</span>
                            <span>Bangalore, IN</span>
                        </div>
                    </div>
                </div>

                <!-- Testimonial 3 -->
                <div class="bg-bglight dark:bg-carddark p-8 rounded-2xl border border-gray-100 dark:border-gray-800 relative shadow-sm">
                    <i class="ph-fill ph-quotes text-6xl text-gray-200 dark:text-gray-800 absolute top-4 right-4 z-0"></i>
                    <div class="relative z-10">
                        <div class="flex items-center gap-4 mb-6">
                            <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop" alt="Amit P." class="w-14 h-14 rounded-full object-cover">
                            <div>
                                <h4 class="font-bold text-slate-900 dark:text-white">Amit Patel</h4>
                                <div class="flex text-yellow-400 text-sm"><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i><i class="ph-fill ph-star"></i></div>
                            </div>
                        </div>
                        <p class="text-gray-600 dark:text-gray-300 italic mb-6">"As a businessman, I was worried about documentation. PrimeNest's team guided my CA perfectly and got a business property loan sorted seamlessly."</p>
                        <div class="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between text-xs text-gray-500 font-medium">
                            <span>Commercial LAP (₹3 Cr)</span>
                            <span>Mumbai, IN</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- 9. Latest Mortgage Tips -->
    <section class="py-20 bg-bglight dark:bg-bgdark border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-end mb-12 fade-in">
                <div>
                    <h2 class="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-2">Latest Mortgage Tips</h2>
                    <p class="text-gray-600 dark:text-gray-400">Insights from our financial experts.</p>
                </div>
                <a href="#" class="hidden sm:inline-flex items-center font-bold text-primary dark:text-blue-400 hover:underline">View All Posts <i class="ph ph-arrow-right ml-1"></i></a>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 fade-in">
                <!-- Blog 1 -->
                <div class="bg-white dark:bg-carddark rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                    <img src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&h=400&fit=crop" alt="Credit Score" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <span class="text-xs font-bold text-accent mb-2 block uppercase tracking-wider">Guides</span>
                        <h3 class="font-bold text-lg text-slate-900 dark:text-white mb-3">Improve Your Credit Score Fast</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">A simple 5-step guide to boosting your CIBIL score before applying for a home loan.</p>
                        <a href="#" class="text-slate-900 dark:text-white font-medium text-sm hover:text-primary dark:hover:text-blue-400">Read Article →</a>
                    </div>
                </div>

                <!-- Blog 2 -->
                <div class="bg-white dark:bg-carddark rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                    <img src="https://images.unsplash.com/photo-1618044733300-9472054094ee?w=600&h=400&fit=crop" alt="Documents" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <span class="text-xs font-bold text-purple-500 mb-2 block uppercase tracking-wider">Checklists</span>
                        <h3 class="font-bold text-lg text-slate-900 dark:text-white mb-3">Documents Required for Home Loans</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">The ultimate checklist for salaried and self-employed individuals to keep ready.</p>
                        <a href="#" class="text-slate-900 dark:text-white font-medium text-sm hover:text-primary dark:hover:text-blue-400">Read Article →</a>
                    </div>
                </div>

                <!-- Blog 3 -->
                <div class="bg-white dark:bg-carddark rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                    <img src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=400&fit=crop" alt="Fixed vs Floating" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <span class="text-xs font-bold text-orange-500 mb-2 block uppercase tracking-wider">Finance 101</span>
                        <h3 class="font-bold text-lg text-slate-900 dark:text-white mb-3">Fixed vs Floating Interest Rates</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Which one should you choose in the current economic market? We break it down.</p>
                        <a href="#" class="text-slate-900 dark:text-white font-medium text-sm hover:text-primary dark:hover:text-blue-400">Read Article →</a>
                    </div>
                </div>

                <!-- Blog 4 -->
                <div class="bg-white dark:bg-carddark rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                    <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop" alt="First Time" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <span class="text-xs font-bold text-teal-500 mb-2 block uppercase tracking-wider">First-Time Buyers</span>
                        <h3 class="font-bold text-lg text-slate-900 dark:text-white mb-3">Tips for First-Time Homebuyers</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Avoid the stress. Here is what every first-time buyer needs to know.</p>
                        <a href="#" class="text-slate-900 dark:text-white font-medium text-sm hover:text-primary dark:hover:text-blue-400">Read Article →</a>
                    </div>
                </div>

                <!-- Blog 5 -->
                <div class="bg-white dark:bg-carddark rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                    <img src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=600&h=400&fit=crop" alt="Reduce EMI" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <span class="text-xs font-bold text-blue-500 mb-2 block uppercase tracking-wider">Savings</span>
                        <h3 class="font-bold text-lg text-slate-900 dark:text-white mb-3">How to Reduce Your Monthly EMI</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Smart tricks and part-payment strategies to lower your financial burden.</p>
                        <a href="#" class="text-slate-900 dark:text-white font-medium text-sm hover:text-primary dark:hover:text-blue-400">Read Article →</a>
                    </div>
                </div>

                <!-- Blog 6 -->
                <div class="bg-white dark:bg-carddark rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all group">
                    <img src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&h=400&fit=crop" alt="Mistakes" class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500">
                    <div class="p-6">
                        <span class="text-xs font-bold text-red-500 mb-2 block uppercase tracking-wider">Alerts</span>
                        <h3 class="font-bold text-lg text-slate-900 dark:text-white mb-3">Common Loan Application Mistakes</h3>
                        <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">Don't let your application get rejected. Avoid these 5 common errors.</p>
                        <a href="#" class="text-slate-900 dark:text-white font-medium text-sm hover:text-primary dark:hover:text-blue-400">Read Article →</a>
                    </div>
                </div>
            </div>
            
            <div class="text-center mt-8 sm:hidden">
                <a href="#" class="inline-flex items-center font-bold text-primary dark:text-blue-400 hover:underline">View All Posts <i class="ph ph-arrow-right ml-1"></i></a>
            </div>
        </div>
    </section>

    <!-- 10. Final Call to Action -->
    <section class="py-20 relative overflow-hidden bg-bgdark text-white">
        <!-- Background Overlay -->
        <div class="absolute inset-0">
            <img src="https://images.unsplash.com/photo-1560520031-3a4cd4e9f9cb?w=1600&h=600&fit=crop" alt="Office" class="w-full h-full object-cover opacity-20">
            <div class="absolute inset-0 bg-gradient-to-t from-bgdark via-bgdark/80 to-transparent"></div>
        </div>
        
        <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center fade-in">
            <h2 class="text-4xl md:text-5xl font-heading font-bold mb-6">Ready to Secure Your Home Loan?</h2>
            <p class="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">Get unbiased advice and secure the lowest rates available in the market today.</p>
            
            <div class="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                <a href="booknow.html" class="px-8 py-4 bg-primary text-white rounded-xl font-bold text-lg hover:bg-secondary transition-colors shadow-xl border border-primary">
                    Book Free Consultation
                </a>
                <a href="booknow.html" class="px-8 py-4 bg-white text-primary rounded-xl font-bold text-lg hover:bg-gray-100 transition-colors shadow-xl">
                    Apply Now
                </a>
                <a href="https://wa.me/919876543210" target="_blank" class="px-8 py-4 bg-green-500 text-white rounded-xl font-bold text-lg hover:bg-green-600 transition-colors shadow-xl flex items-center justify-center gap-2">
                    <i class="ph-fill ph-whatsapp-logo"></i> WhatsApp
                </a>
            </div>
            
            <div class="flex flex-wrap justify-center gap-8 text-sm text-gray-400 mb-8 border-t border-white/10 pt-8">
                <div class="flex items-center gap-2"><i class="ph-fill ph-envelope text-xl"></i> hello@primenest.com</div>
                <div class="flex items-center gap-2"><i class="ph-fill ph-phone text-xl"></i> +91 98765 43210</div>
                <div class="flex items-center gap-2"><i class="ph-fill ph-map-pin text-xl"></i> Financial District, Mumbai</div>
            </div>
            
            <!-- Trust Badges -->
            <div class="flex justify-center items-center gap-6 opacity-50 grayscale">
                <i class="ph-fill ph-shield-check text-4xl"></i>
                <i class="ph-fill ph-lock-key text-4xl"></i>
                <i class="ph-fill ph-certificate text-4xl"></i>
            </div>
        </div>
    </section>`;

const filePath = 'home2.html';
const html = fs.readFileSync(filePath, 'utf8');

const navEndIndex = html.indexOf('</nav>') + 6;
const footerStartIndex = html.indexOf('<!-- Footer -->');

const newHtml = html.substring(0, navEndIndex) + '\\n\\n' + content + '\\n\\n    ' + html.substring(footerStartIndex);

fs.writeFileSync(filePath, newHtml);
console.log('Successfully updated home2.html');
