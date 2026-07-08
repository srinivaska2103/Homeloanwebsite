const fs = require('fs');
const files = ['home2.html', 'aboutus.html', 'services.html', 'gallery.html', 'pricing.html', 'contact.html', 'booknow.html', 'login.html', 'signup.html', 'comingsoon.html', '404.html'];

const index = fs.readFileSync('index.html', 'utf8');
const navMatch = index.match(/<nav id="navbar"[\s\S]*?<\/nav>/);
const footerMatch = index.match(/<footer[\s\S]*?<\/footer>/);

if (!navMatch) {
    console.error("Could not find nav in index.html");
    process.exit(1);
}

const navStr = navMatch[0];
const footerStr = footerMatch ? footerMatch[0] : "";

for (const file of files) {
    if (!fs.existsSync(file)) {
        console.log(`Skipping ${file}, does not exist`);
        continue;
    }
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace Nav (handle both ID and minimal class nav)
    if (content.includes('<nav id="navbar"')) {
        content = content.replace(/<nav id="navbar"[\s\S]*?<\/nav>/, navStr);
    } else if (content.includes('<nav class="w-full z-50 p-6 relative"')) {
        content = content.replace(/<nav class="w-full z-50 p-6 relative"[\s\S]*?<\/nav>/, navStr);
    }
    
    // Replace Footer (if main page)
    if (!['login.html', 'signup.html', 'comingsoon.html', '404.html'].includes(file)) {
        if (content.includes('<footer')) {
            content = content.replace(/<footer[\s\S]*?<\/footer>/, footerStr);
        } else {
            // Append before body closing tag if no footer exists
            content = content.replace('</body>', `${footerStr}\n</body>`);
        }
    }
    
    fs.writeFileSync(file, content);
}
console.log('Successfully updated Nav and Footer in all pages');
