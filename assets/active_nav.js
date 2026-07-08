const fs = require('fs');

const files = ['index.html', 'home2.html', 'aboutus.html', 'services.html', 'gallery.html', 'pricing.html', 'contact.html', 'booknow.html', 'login.html', 'signup.html', 'comingsoon.html', '404.html'];

for (const file of files) {
    if (!fs.existsSync(file)) continue;
    
    let content = fs.readFileSync(file, 'utf8');

    // First, let's reset ALL links in the Desktop and Mobile nav to the inactive state to ensure a clean slate.
    // Desktop Nav Inactive: text-gray-600 dark:text-gray-300
    // Desktop Nav Active: text-primary dark:text-white
    content = content.replace(/class="text-primary dark:text-white font-medium hover:text-secondary/g, 'class="text-gray-600 dark:text-gray-300 font-medium hover:text-secondary');
    
    // Mobile Nav Inactive: text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800
    // Mobile Nav Active: text-primary dark:text-white bg-gray-50 dark:bg-slate-800
    content = content.replace(/class="block px-3 py-2 rounded-md text-base font-medium text-primary dark:text-white bg-gray-50 dark:bg-slate-800"/g, 'class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800"');

    // Now, find the link that matches the current file and make it active.
    
    // 1. Desktop link matching href="file"
    const desktopRegex = new RegExp(`href="${file}" class="text-gray-600 dark:text-gray-300 font-medium hover:text-secondary`, 'g');
    content = content.replace(desktopRegex, `href="${file}" class="text-primary dark:text-white font-medium hover:text-secondary`);

    // 2. Mobile link matching href="file"
    const mobileRegex = new RegExp(`href="${file}" class="block px-3 py-2 rounded-md text-base font-medium text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800"`, 'g');
    content = content.replace(mobileRegex, `href="${file}" class="block px-3 py-2 rounded-md text-base font-medium text-primary dark:text-white bg-gray-50 dark:bg-slate-800"`);

    fs.writeFileSync(file, content);
    console.log(`Updated active nav state for ${file}`);
}
