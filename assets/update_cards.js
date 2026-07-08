const fs = require('fs');

const replacement = `    <!-- 2. Loan Categories -->
    <section class="py-20 bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="text-center max-w-3xl mx-auto mb-16 fade-in">
                <h2 class="text-3xl font-heading font-bold text-slate-900 dark:text-white mb-4">Tailored Solutions For Every Need</h2>
                <p class="text-gray-600 dark:text-gray-400">We offer a wide range of loan products to suit your specific financial requirements.</p>
            </div>
            
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6 fade-in">
                <!-- Home Loan -->
                <div class="group bg-bglight dark:bg-carddark rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col">
                    <div class="h-48 w-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=600&h=400&fit=crop" alt="Home Loan" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Home Loan</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Finance up to 90% of property value with long tenures.</p>
                    </div>
                </div>
                
                <!-- Mortgage Loan -->
                <div class="group bg-bglight dark:bg-carddark rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col">
                    <div class="h-48 w-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop" alt="Mortgage Loan" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Mortgage Loan</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Secure financing against your existing residential property.</p>
                    </div>
                </div>

                <!-- Loan Against Property -->
                <div class="group bg-bglight dark:bg-carddark rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col">
                    <div class="h-48 w-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=400&fit=crop" alt="Loan Against Property" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Loan Against Property</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Unlock the value of your commercial or residential property.</p>
                    </div>
                </div>

                <!-- Balance Transfer -->
                <div class="group bg-bglight dark:bg-carddark rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col">
                    <div class="h-48 w-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop" alt="Balance Transfer" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Balance Transfer</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Switch to lower interest rates and save on your EMI.</p>
                    </div>
                </div>

                <!-- Construction Loan -->
                <div class="group bg-bglight dark:bg-carddark rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col">
                    <div class="h-48 w-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop" alt="Construction Loan" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Construction Loan</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Customized funds for building your home from scratch.</p>
                    </div>
                </div>

                <!-- Plot Purchase Loan -->
                <div class="group bg-bglight dark:bg-carddark rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col">
                    <div class="h-48 w-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&h=400&fit=crop" alt="Plot Purchase" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Plot Purchase Loan</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Get financing for purchasing a plot of land for your future home.</p>
                    </div>
                </div>

                <!-- Home Renovation -->
                <div class="group bg-bglight dark:bg-carddark rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col">
                    <div class="h-48 w-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600&h=400&fit=crop" alt="Home Renovation" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">Home Renovation</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Upgrade, repair, or redesign your current home easily.</p>
                    </div>
                </div>

                <!-- First-Time Buyer -->
                <div class="group bg-bglight dark:bg-carddark rounded-2xl border border-gray-100 dark:border-gray-800 hover:border-primary/50 transition-all hover:shadow-xl hover:-translate-y-1 overflow-hidden flex flex-col">
                    <div class="h-48 w-full overflow-hidden">
                        <img src="https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=600&h=400&fit=crop" alt="First-Time Buyer" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500">
                    </div>
                    <div class="p-6 flex-grow">
                        <h3 class="text-lg font-bold text-slate-900 dark:text-white mb-2">First-Time Buyer</h3>
                        <p class="text-sm text-gray-600 dark:text-gray-400">Special guidance, lower rates, and grants for new buyers.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

let html = fs.readFileSync('index.html', 'utf8');

const startTag = '<!-- 2. Loan Categories -->';
const endTag = '<!-- 3. Why Choose Us -->';

const startIndex = html.indexOf(startTag);
const endIndex = html.indexOf(endTag);

if (startIndex !== -1 && endIndex !== -1) {
    html = html.substring(0, startIndex) + replacement + '\\n\\n    ' + html.substring(endIndex);
    fs.writeFileSync('index.html', html);
    console.log('Replaced icons with images in Loan Categories.');
} else {
    console.error('Could not find tags');
}
