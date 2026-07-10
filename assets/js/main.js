tailwind.config = {
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#0F4C81',
                secondary: '#2F80ED',
                accent: '#4CAF50',
                bglight: '#F8FAFC',
                bgdark: '#0F172A',
                cardlight: '#FFFFFF',
                carddark: '#1E293B',
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
                heading: ['Manrope', 'sans-serif'],
            }
        }
    }
}


document.addEventListener("DOMContentLoaded", () => {
    initTheme();
    initDirection();
    initNavbar();
    initMobileMenu();
    initScrollAnimations();
    initEmiCalculator();
    
    // Set current year in footer
    const currentYearElement = document.getElementById('currentYear');
    if (currentYearElement) {
        currentYearElement.textContent = new Date().getFullYear();
    }

    initPasswordToggle();
});

function initTheme() {
    const html = document.documentElement;
    const themeToggleButtons = document.querySelectorAll('#theme-toggle, #theme-toggle-mobile');
    const storedTheme = localStorage.getItem('theme');

    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        html.classList.add('dark');
    } else {
        html.classList.remove('dark');
    }

    themeToggleButtons.forEach(button => {
        if (!button) return;
        button.addEventListener('click', () => {
            const isDark = html.classList.toggle('dark');
            localStorage.setItem('theme', isDark ? 'dark' : 'light');
        });
    });
}

function initDirection() {
    const html = document.documentElement;
    const dirToggleButtons = document.querySelectorAll('#dir-toggle, #dir-toggle-mobile');
    const savedDir = localStorage.getItem('dir');
    const currentDir = savedDir === 'rtl' ? 'rtl' : 'ltr';

    html.setAttribute('dir', currentDir);
    dirToggleButtons.forEach(button => {
        if (!button) return;
        button.textContent = currentDir.toUpperCase();
        button.addEventListener('click', () => {
            const nextDir = html.getAttribute('dir') === 'ltr' ? 'rtl' : 'ltr';
            html.setAttribute('dir', nextDir);
            localStorage.setItem('dir', nextDir);
            dirToggleButtons.forEach(btn => btn.textContent = nextDir.toUpperCase());
        });
    });
}

function initNavbar() {
    const navbar = document.getElementById('navbar');
    if (!navbar) return;

    const handleScroll = () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled', 'bg-white', 'dark:bg-slate-900');
            navbar.classList.remove('bg-transparent', 'text-white');
        } else {
            navbar.classList.remove('scrolled', 'bg-white', 'dark:bg-slate-900');
            if (navbar.hasAttribute('data-transparent-top')) {
                navbar.classList.add('bg-transparent', 'text-white');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
}

function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (btn && menu) {
        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });
    }
}

function initScrollAnimations() {
    const elements = document.querySelectorAll('.fade-in');
    if (!elements.length || !('IntersectionObserver' in window)) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('appear');
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));
}

function initEmiCalculator() {
    const loanRange = document.getElementById('loanRange');
    const rateRange = document.getElementById('rateRange');
    const tenureRange = document.getElementById('tenureRange');
    if (!loanRange || !rateRange || !tenureRange) return;

    const loanVal = document.getElementById('loanVal');
    const rateVal = document.getElementById('rateVal');
    const tenureVal = document.getElementById('tenureVal');
    const emiResult = document.getElementById('emiResult');
    const totalInterest = document.getElementById('totalInterest');
    const totalPayable = document.getElementById('totalPayable');

    const calculateEMI = () => {
        const P = parseFloat(loanRange.value);
        const R = parseFloat(rateRange.value) / 12 / 100;
        const N = parseFloat(tenureRange.value) * 12;

        if (!loanVal || !rateVal || !tenureVal || !emiResult || !totalInterest || !totalPayable) return;

        loanVal.innerText = new Intl.NumberFormat('en-IN').format(P);
        rateVal.innerText = rateRange.value;
        tenureVal.innerText = tenureRange.value;

        const EMI = P * R * Math.pow(1 + R, N) / (Math.pow(1 + R, N) - 1);
        const totalPayment = EMI * N;
        const totalInt = totalPayment - P;

        emiResult.innerText = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(EMI);
        totalInterest.innerText = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(totalInt);
        totalPayable.innerText = new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(totalPayment);
    };

    loanRange.addEventListener('input', calculateEMI);
    rateRange.addEventListener('input', calculateEMI);
    tenureRange.addEventListener('input', calculateEMI);
    calculateEMI();
}

function initPasswordToggle() {
    const togglePasswordButtons = document.querySelectorAll('.toggle-password');
    
    togglePasswordButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Find the input field within the same parent relative container
            const input = this.previousElementSibling;
            const icon = this.querySelector('i');
            
            if (input && input.tagName === 'INPUT') {
                if (input.type === 'password') {
                    input.type = 'text';
                    icon.classList.remove('ph-eye');
                    icon.classList.add('ph-eye-slash');
                } else {
                    input.type = 'password';
                    icon.classList.remove('ph-eye-slash');
                    icon.classList.add('ph-eye');
                }
            }
        });
    });
}
