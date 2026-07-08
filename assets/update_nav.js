const fs = require('fs');
let index = fs.readFileSync('index.html', 'utf8');

// Replace xl:flex with lg:flex and adjust spacing/text size
index = index.replace('<div class="hidden xl:flex items-center space-x-8">', '<div class="hidden lg:flex items-center space-x-3 xl:space-x-6 text-sm xl:text-base">');
index = index.replace('<div class="hidden xl:flex items-center space-x-4">', '<div class="hidden lg:flex items-center space-x-2 xl:space-x-4 text-sm xl:text-base">');
index = index.replace('<div class="xl:hidden flex items-center gap-4">', '<div class="lg:hidden flex items-center gap-4">');
index = index.replace('<div id="mobile-menu" class="hidden xl:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">', '<div id="mobile-menu" class="hidden lg:hidden bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800">');

// Book Now button padding adjust
index = index.replace('px-6 py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-primary/30">Book Now</a>', 'px-4 xl:px-6 py-2 xl:py-2.5 rounded-lg font-medium transition-colors shadow-lg shadow-primary/30">Book Now</a>');

fs.writeFileSync('index.html', index);
console.log('Nav updated successfully in index.html');
