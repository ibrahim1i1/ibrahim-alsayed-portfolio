/* ==================== 1. القاموس وبيانات الترجمة (i18n) ==================== */
const translations = {
    en: {
        dir: "ltr",
        page_title: "İbrahim Seyid | Portfolio",
        nav_home: "Home",
        nav_about: "About",
        nav_services: "Services",
        nav_portfolio: "Portfolio",
        nav_contact: "Contact",
        home_hi: "Hi, Myself",
        home_name: "İbrahim Seyid",
        home_im: "And I'm a",
        typed_strings: ["Frontend Developer", "Web Designer"],
        home_desc: "I build fast, responsive, and user-friendly websites using HTML, CSS, JavaScript. I'm available for freelance work and always excited to turn ideas into real websites.",
        home_cv_btn: "Download CV",
        about_heading_1: "ABOUT",
        about_heading_2: "ME",
        about_subtitle: "Frontend Developer",
        about_desc: "I started my journey in web development with a passion for learning and building real projects. I enjoy solving problems, creating responsive websites, and improving my skills every day. My goal is to become a professional Front-End Developer and build high-quality web applications.",
        about_read_more: "Read More",
        services_heading_1: "My",
        services_heading_2: "Services",
        service_1_title: "Front-End Development",
        service_1_desc: "Building modern and responsive websites using HTML, CSS, and JavaScript.",
        service_2_title: "Responsive Web Design",
        service_2_desc: "Creating websites that work perfectly on desktop, tablet, and mobile devices.",
        service_3_title: "Website Maintenance",
        service_3_desc: "Updating, improving, and fixing websites for better performance and user experience.",
        services_btn: "View Details",
        portfolio_heading_1: "Latest",
        portfolio_heading_2: "Projects",
        proj_1_title: "Password Generator",
        proj_1_desc: "Generate strong and secure passwords with customizable options using JavaScript.",
        proj_2_title: "CRUD System",
        proj_2_desc: "Create, update, delete, and search products using Local Storage.",
        proj_3_title: "Todo List",
        proj_3_desc: "A responsive task manager built with React, TypeScript, and Tailwind CSS, featuring automatic LocalStorage persistence and optimized state management.",
        proj_4_title: "Food Lover",
        proj_4_desc: "A modern and responsive food landing page showcasing delicious menus, recipes, and features.",
        contact_heading_1: "Contact",
        contact_heading_2: "Me",
        input_name: "Full Name",
        input_email: "Email Address",
        input_phone: "Mobile Number",
        input_subject: "Subject",
        input_msg: "Your Message...",
        input_send: "Send Message",
        whatsapp_text: "WhatsApp",
        footer_copy: "Copyright &copy; 2026 by İbrahim Seyid | All Rights Reserved.",
        swal_success_title: "Sent!",
        swal_success_text: "Your message has been sent successfully, I will contact you soon 🚀",
        swal_error_title: "Sorry...",
        swal_error_text: "An error occurred during transmission, please try again! ❌"
    },
    tr: {
        dir: "ltr",
        page_title: "İbrahim Seyid | Portföy",
        nav_home: "Ana Sayfa",
        nav_about: "Hakkımda",
        nav_services: "Hizmetler",
        nav_portfolio: "Portföy",
        nav_contact: "İletişim",
        home_hi: "Merhaba, Ben",
        home_name: "İbrahim Seyid",
        home_im: "Ve ben bir",
        typed_strings: ["Frontend Geliştirici", "Web Tasarımcısı"],
        home_desc: "HTML, CSS ve JavaScript kullanarak hızlı, duyarlı ve kullanıcı dostu web siteleri geliştiriyorum. Freelance çalışmaya açığım ve fikirleri gerçeğe dönüştürmekten heyecan duyuyorum.",
        home_cv_btn: "CV İndir",
        about_heading_1: "HAKKIMDA",
        about_heading_2: "BİLGİ",
        about_subtitle: "Frontend Geliştirici",
        about_desc: "Web geliştirme yolculuğuma öğrenme ve gerçek projeler üretme tutkusuyla başladım. Problem çözmeyi, duyarlı web siteleri oluşturmayı ve her gün becerilerimi geliştirmeyi seviyorum. Hedefim profesyonel bir Front-End Geliştirici olmak ve yüksek kaliteli web uygulamaları inşa etmektir.",
        about_read_more: "Daha Fazla",
        services_heading_1: "Benim",
        services_heading_2: "Hizmetlerim",
        service_1_title: "Front-End Geliştirme",
        service_1_desc: "HTML, CSS ve JavaScript kullanarak modern ve duyarlı web siteleri geliştirme.",
        service_2_title: "Duyarlı Web Tasarımı",
        service_2_desc: "Masaüstü, tablet ve mobil cihazlarda kusursuz çalışan siteler oluşturma.",
        service_3_title: "Web Sitesi Bakımı",
        service_3_desc: "Daha iyi performans ve kullanıcı deneyimi için web sitelerini güncelleme ve sorun giderme.",
        services_btn: "Detayları Gör",
        portfolio_heading_1: "Son",
        portfolio_heading_2: "Projelerim",
        proj_1_title: "Şifre Üretici",
        proj_1_desc: "JavaScript ile özelleştirilebilir seçeneklerle güçlü ve güvenli şifreler üretin.",
        proj_2_title: "CRUD Sistemi",
        proj_2_desc: "Local Storage kullanarak ürün ekleme, güncelleme, silme ve arama sistemi.",
        proj_3_title: "Todo List",
        proj_3_desc: "React, TypeScript ve Tailwind CSS ile geliştirilmiş, LocalStorage veri kalıcılığı ve optimize edilmiş durum yönetimi sunan modern ve duyarlı görev takip uygulaması.",
        proj_4_title: "Food Lover",
        proj_4_desc: "Lezzetli menüleri ve özellikleri sergileyen modern ve duyarlı bir yemek açılış sayfası.",
        contact_heading_1: "Bana",
        contact_heading_2: "Ulaşın",
        input_name: "Adınız Soyadınız",
        input_email: "E-posta Adresiniz",
        input_phone: "Telefon Numaranız",
        input_subject: "Konu",
        input_msg: "Mesajınız...",
        input_send: "Mesaj Gönder",
        whatsapp_text: "WhatsApp",
        footer_copy: "Telif Hakkı &copy; 2026 İbrahim Seyid | Tüm Hakları Saklıdır.",
        swal_success_title: "Gönderildi!",
        swal_success_text: "Mesajınız başarıyla gönderildi, en kısa sürede sizinle iletişime geçeceğim 🚀",
        swal_error_title: "Üzgünüm...",
        swal_error_text: "Gönderim sırasında bir hata oluştu, lütfen tekrar deneyin! ❌"
    },
    ar: {
        dir: "rtl",
        page_title: "إبراهيم السيد | معرض الأعمال",
        nav_home: "الرئيسية",
        nav_about: "من أنا",
        nav_services: "خدماتي",
        nav_portfolio: "أعمالي",
        nav_contact: "تواصل معي",
        home_hi: "مرحباً، أنا",
        home_name: "إبراهيم السيد",
        home_im: "وأنا",
        typed_strings: ["مطور واجهات أمامية", "مصمم مواقع"],
        home_desc: "أقوم ببناء مواقع ويب سريعة، متجاوبة وسهلة الاستخدام باستخدام HTML وCSS وJavaScript. متاح للعمل الحر ومتحمس دائماً لتحويل الأفكار إلى مواقع ويب حقيقية.",
        home_cv_btn: "تحميل السيرة الذاتية",
        about_heading_1: "نبذة",
        about_heading_2: "عني",
        about_subtitle: "مطور واجهات أمامية",
        about_desc: "بدأت رحلتي في تطوير الويب بشغف كبير للتعلم وبناء مشاريع حقيقية. أستمتع بحل المشكلات، وإنشاء مواقع متجاوبة مع كافة الشاشات، وتطوير مهاراتي باستمرار. هدفي هو الاحتراف في تطوير الواجهات الأمامية وبناء تطبيقات ويب عالية الجودة.",
        about_read_more: "المزيد عني",
        services_heading_1: "أبرز",
        services_heading_2: "خدماتي",
        service_1_title: "تطوير الواجهات الأمامية",
        service_1_desc: "بناء مواقع وتطبيقات ويب حديثة ومتجاوبة باستخدام أحدث تقنيات HTML، CSS وJavaScript.",
        service_2_title: "تصميم ويب متجاوب",
        service_2_desc: "تصميم واجهات مستخدم تعمل بكفاءة ومرونة تامة على أجهزة الكمبيوتر، الأجهزة اللوحية والهواتف الذكية.",
        service_3_title: "صيانة وتحسين المواقع",
        service_3_desc: "تحديث المواقع، معالجة الأخطاء، وتحسين سرعة الأداء وتجربة المستخدم بشكل مستمر.",
        services_btn: "تفاصيل أكثر",
        portfolio_heading_1: "أحدث",
        portfolio_heading_2: "المشاريع",
        proj_1_title: "مولد كلمات المرور",
        proj_1_desc: "توليد كلمات مرور قوية وآمنة مع خيارات تخصيص متقدمة باستخدام JavaScript.",
        proj_2_title: "نظام إدارة المنتجات (CRUD)",
        proj_2_desc: "إضافة، تعديل، حذف، والبحث في المنتجات مع حفظ البيانات محلياً عبر Local Storage.",
        proj_3_title: "تطبيق إدارة المهام اليومية",
        proj_3_desc: "تطبيق تفاعلي لإدارة المهام اليومية مبني بواسطة React وTypeScript وTailwind CSS، يدعم الحفظ التلقائي للبيانات عبر LocalStorage وحساب المهام المتبقية بأداء مُحسّن.",
        proj_4_title: "موقع عشاق الطعام (Food Lover)",
        proj_4_desc: "صفحة هبوط حديثة ومتجاوبة لعرض قوائم الطعام الشهية والوجبات وميزات المطعم.",
        contact_heading_1: "تواصل",
        contact_heading_2: "معي",
        input_name: "الاسم الكامل",
        input_email: "البريد الإلكتروني",
        input_phone: "رقم الهاتف",
        input_subject: "موضوع الرسالة",
        input_msg: "اكتب رسالتك هنا...",
        input_send: "إرسال الرسالة",
        whatsapp_text: "واتساب",
        footer_copy: "جميع الحقوق محفوظة &copy; 2026 لصالح إبراهيم السيد.",
        swal_success_title: "تم الإرسال!",
        swal_success_text: "تم إرسال رسالتك بنجاح، سأتواصل معك قريباً جداً 🚀",
        swal_error_title: "عذراً...",
        swal_error_text: "حدث خطأ أثناء الإرسال، يرجى المحاولة مرة أخرى! ❌"
    }
};

let currentLang = localStorage.getItem('site_lang') || 'en';
let typedInstance = null;

function applyLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    const data = translations[lang] || translations.en;

    // اتجاه ولغة الصفحة
    document.documentElement.lang = lang;
    document.documentElement.dir = data.dir;

    // تحديث عنوان التبويب في المتصفح
    document.title = data.page_title;

    // تفعيل الزر النشط
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // ترجمة النصوص
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (data[key]) el.innerHTML = data[key];
    });

    // ترجمة الحقول
    document.querySelectorAll('[data-placeholder]').forEach(el => {
        const key = el.getAttribute('data-placeholder');
        if (data[key]) el.placeholder = data[key];
    });

    // ترجمة قيم الأزرار
    document.querySelectorAll('[data-value]').forEach(el => {
        const key = el.getAttribute('data-value');
        if (data[key]) el.value = data[key];
    });

    // إعادة ضبط تأثير الكتابة التلقائية Typed.js
    if (typeof Typed !== 'undefined') {
        if (typedInstance) typedInstance.destroy();
        typedInstance = new Typed('.multiple-text', {
            strings: data.typed_strings,
            typeSpeed: 70,
            backSpeed: 70,
            backDelay: 1000,
            loop: true
        });
    }
}

// أزرار اللغات
document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        applyLanguage(btn.dataset.lang);
    });
});

/* ==================== 2. القائمة والتمرير الموثوق ==================== */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');
const header = document.querySelector('header');

if (menuIcon && navbar) {
    menuIcon.onclick = () => {
        menuIcon.classList.toggle('fa-xmark');
        menuIcon.classList.toggle('fa-bars');
        navbar.classList.toggle('active');
    };
}

window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY;

    sections.forEach(sec => {
        const top = scrollPos;
        const offset = sec.offsetTop - 150;
        const height = sec.offsetHeight;
        const id = sec.getAttribute('id');

        if (id && top >= offset && top < offset + height) {
            navLinks.forEach(links => links.classList.remove('active'));
            const currentLink = document.querySelector(`header nav a[href="#${id}"]`);
            if (currentLink) currentLink.classList.add('active');
        }
    });

    if (header) {
        header.classList.toggle('sticky', scrollPos > 100);
    }
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (menuIcon && navbar) {
            menuIcon.classList.remove('fa-xmark');
            menuIcon.classList.add('fa-bars');
            navbar.classList.remove('active');
        }
    });
});

/* ==================== 3. ScrollReveal ==================== */
if (typeof ScrollReveal !== 'undefined') {
    const sr = ScrollReveal({
        distance: '60px',
        duration: 1600,
        delay: 150,
        reset: false
    });

    sr.reveal('.home-content, .heading', { origin: 'top' });
    sr.reveal('.home-img, .services-container, .portfolio-box, .Contact form', { origin: 'bottom' });
    sr.reveal('.home-content h1, .about-img', { origin: 'left' });
    sr.reveal('.home-content p, .about-content', { origin: 'right' });
}

/* ==================== 4. EmailJS وإرسال الرسائل ==================== */
if (typeof emailjs !== 'undefined') {
    try {
        emailjs.init("4PHGAKsJpFtIanlw3");
    } catch (err) {
        console.warn("EmailJS init warning:", err);
    }
}

const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();

        const activeTrans = translations[currentLang] || translations.en;

        if (typeof emailjs === 'undefined') {
            if (typeof Swal !== 'undefined') {
                Swal.fire({
                    icon: 'error',
                    title: activeTrans.swal_error_title,
                    text: 'Email service is unavailable or blocked by browser extensions.'
                });
            } else {
                alert('Email service is unavailable.');
            }
            return;
        }

        const templateParams = {
            user_name: this.querySelector('[name="user_name"]').value,
            user_email: this.querySelector('[name="user_email"]').value,
            user_number: this.querySelector('[name="user_number"]').value,
            email_subject: this.querySelector('[name="email_subject"]').value,
            message: this.querySelector('[name="message"]').value
        };

        emailjs.send('service_7mtonns', 'template_2770w3j', templateParams)
            .then(() => {
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        icon: 'success',
                        title: activeTrans.swal_success_title,
                        text: activeTrans.swal_success_text,
                        confirmButtonColor: '#5982f4'
                    });
                } else {
                    alert(activeTrans.swal_success_text);
                }
                contactForm.reset();
            })
            .catch((error) => {
                if (typeof Swal !== 'undefined') {
                    Swal.fire({
                        icon: 'error',
                        title: activeTrans.swal_error_title,
                        text: activeTrans.swal_error_text
                    });
                } else {
                    alert(activeTrans.swal_error_text);
                }
                console.error('EmailJS Error:', error);
            });
    });
}

// تطبيق اللغة المحفوظة أو الافتراضية فور تحميل السكربت
applyLanguage(currentLang);