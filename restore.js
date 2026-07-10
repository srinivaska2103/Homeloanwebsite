const fs = require('fs');
let c = fs.readFileSync('aboutus.html', 'utf8');
const replacement = ` <!-- 8. Achievements & Statistics -->
    <section class="py-20 relative bg-primary dark:bg-slate-900 border-t border-gray-800 overflow-hidden">
        <div class="absolute inset-0 opacity-10 dark:opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div class="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-6 text-center fade-in">
                
                <div class="bg-white/10 backdrop-blur-sm p-3 sm:p-6 rounded-2xl border border-white/20">
                    <div class="text-2xl sm:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-2">10k+</div>
                    <div class="text-xs sm:text-sm text-blue-200 font-medium">Happy Clients</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm p-3 sm:p-6 rounded-2xl border border-white/20">
                    <div class="text-2xl sm:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-2">₹500Cr+</div>
                    <div class="text-xs sm:text-sm text-blue-200 font-medium">Loans Facilitated</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm p-3 sm:p-6 rounded-2xl border border-white/20">
                    <div class="text-2xl sm:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-2">25+</div>
                    <div class="text-xs sm:text-sm text-blue-200 font-medium">Banking Partners</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm p-3 sm:p-6 rounded-2xl border border-white/20">
                    <div class="text-2xl sm:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-2">98%</div>
                    <div class="text-xs sm:text-sm text-blue-200 font-medium">Satisfaction Rate</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm p-3 sm:p-6 rounded-2xl border border-white/20">
                    <div class="text-2xl sm:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-2">15+</div>
                    <div class="text-xs sm:text-sm text-blue-200 font-medium">Years Experience</div>
                </div>
                <div class="bg-white/10 backdrop-blur-sm p-3 sm:p-6 rounded-2xl border border-white/20">
                    <div class="text-2xl sm:text-3xl xl:text-4xl font-bold text-white mb-1 sm:mb-2">50+</div>
                    <div class="text-xs sm:text-sm text-blue-200 font-medium">Expert Advisors</div>
                </div>

            </div>
        </div>
    </section>
    <!-- 2. Our Story -->`;

if (!c.includes('₹500Cr+')) {
    c = c.replace('    <!-- 2. Our Story -->', replacement);
    fs.writeFileSync('aboutus.html', c);
    console.log('Restored section');
} else {
    console.log('Section already exists');
}
