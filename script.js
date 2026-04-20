// =========================================
// 1. تهيئة مكتبة الأنميشن (AOS)
// =========================================
AOS.init({
    duration: 1000, // مدة الحركة 1 ثانية
    once: true,     // تنفيذ الحركة مرة واحدة فقط
    offset: 100,    // المسافة من أسفل الشاشة لبدء الحركة
    easing: 'ease-in-out'
});

// =========================================
// 2. التحكم في قائمة الجوال (Mobile Menu)
// =========================================
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

if (menuToggle) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        // تغيير أيقونة القائمة عند الفتح
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.replace('fa-bars', 'fa-times');
        } else {
            icon.classList.replace('fa-times', 'fa-bars');
        }
    });
}

// إغلاق القائمة عند الضغط على أي رابط (في الجوال)
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.replace('fa-times', 'fa-bars');
    });
});

// =========================================
// 3. سلايدر الخلفية التلقائي (Hero Slider)
// =========================================
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function nextSlide() {
    if (slides.length > 0) {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % slides.length;
        slides[currentSlide].classList.add('active');
    }
}

// تغيير الصورة كل 5 ثوانٍ
if (slides.length > 1) {
    setInterval(nextSlide, 5000);
}

// =========================================
// 4. بيانات معرض الأعمال (Portfolio Data)
// =========================================
// ملاحظة: يمكنك إضافة روابط صورك الحقيقية هنا لاحقاً
const portfolioData = {
    'bath': { 
        title: 'تصميم وتنفيذ الحمامات', 
        imgs: ['bath/1 .jpg', 'bath/2.jpg', 'bath/3.jpg','bath/4.jpg','bath/5.jpg','bath/6.jpg','bath/7.jpg','bath/8.jpg','bath/9.jpg','bath/10.jpg','bath/11.jpg','bath/12.jpg','bath/13.jpg','bath/14 .jpg'] 
    },
    'living': { 
        title: 'تصميم الصالات العصرية', 
        imgs: ['living/1.jpg', 'living/2.jpg', 'living/3.jpg','living/4.jpg','living/5.jpg','living/6.jpg','living/7.jpg','living/8.jpg','living/9.jpg','living/10.jpg','living/11.jpg','living/12.jpg'] 
    },
    'majlis': { 
        title: 'تصميم المجالس الفاخرة', 
        imgs: ['majlis/1.jpg','majlis/2.jpg','majlis/3.jpg','majlis/4.jpg','majlis/5.jpg','majlis/6.jpg','majlis/7.jpg','majlis/8.jpg','majlis/9.jpg','majlis/10.jpg',
            'majlis/11.jpg','majlis/12.jpg','majlis/13.jpg','majlis/14.jpg','majlis/15.jpg','majlis/16.jpg','majlis/17.jpg','majlis/18.jpg','majlis/19.jpg','majlis/20.jpg',
            'majlis/21.jpg','majlis/22.jpg','majlis/23.jpg','majlis/24.jpg','majlis/25.jpg','majlis/26.jpg','majlis/27.jpg','majlis/28.jpg','majlis/29.jpg','majlis/30.jpg',
            'majlis/31.jpg','majlis/32.jpg','majlis/33.jpg','majlis/34.jpg','majlis/35.jpg','majlis/36.jpg','majlis/37.jpg','majlis/38.jpg','majlis/39.jpg','majlis/40.jpg',
            'majlis/41.jpg','majlis/42.jpg','majlis/43.jpg','majlis/44.jpg','majlis/45.jpg','majlis/46.jpg','majlis/47.jpg'
         ] 
    },
    'kitchen': { 
        title: 'مطابخ حديثة وعملية', 
        imgs: ['kitchen/1.jpg','kitchen/2.jpg','kitchen/3.jpg','kitchen/4.jpg','kitchen/5.jpg','kitchen/6.jpg','kitchen/7.jpg','kitchen/8.jpg','kitchen/9.jpg','kitchen/10.jpg','kitchen/11.jpg','kitchen/12.jpg','kitchen/13.jpg','kitchen/14.jpg','kitchen/15.jpg'] 
    },
    'bedroom': { 
        title: 'غرف نوم رئيسية', 
        imgs: ['bedroom/1.jpg', 'bedroom/2.jpg','bedroom/3.jpg','bedroom/4.jpg','bedroom/5.jpg','bedroom/6.jpg','bedroom/7.jpg','bedroom/8.jpg','bedroom/9.jpg','bedroom/10.jpg','bedroom/11.jpg','bedroom/12.jpg',
            'bedroom/13.jpg','bedroom/14.jpg','bedroom/15.jpg','bedroom/16.jpg','bedroom/17.jpg','bedroom/18.jpg','bedroom/19.jpg','bedroom/20.jpg','bedroom/21.jpg','bedroom/22.jpg'
        ] 
    },
    'commercial': { 
        title: 'المشاريع التجارية والمكاتب', 
        imgs: ['https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=800', 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800'] 
    },
    'facade': { 
        title: 'تصميم واجهات معمارية', 
        imgs: ['Interfaces/1.jpg', 'Interfaces/2.jpg','Interfaces/3.jpg','Interfaces/6.jpg','Interfaces/6.jpg','Interfaces/7.jpg','Interfaces/8.jpg','Interfaces/9.jpg','Interfaces/10.jpg','Interfaces/11.jpg'
            ,'Interfaces/12.jpg','Interfaces/13.jpg','Interfaces/14.jpg','Interfaces/15.jpg','Interfaces/16.jpg','Interfaces/17.jpg','Interfaces/18.jpg','Interfaces/19.jpg','Interfaces/19.jpg'
        ,'Interfaces/20.jpg','Interfaces/21.jpg'] 
    },
    'landscape': { 
        title: 'تنسيق الحدائق واللاندسكيب', 
        imgs: ['landscape/1.jpg','landscape/2.jpg','landscape/3.jpg','landscape/4.jpg','landscape/5.jpg','landscape/6.jpg','landscape/7.jpg','landscape/8.jpg','landscape/9.jpg'
            ,'landscape/10.jpg','landscape/11.jpg','landscape/12.jpg','landscape/13.jpg','landscape/15.jpeg','landscape/16.jpeg'] 
    },
    //'exec': { 
      //  title: 'مواقع التنفيذ والإشراف الميداني', 
       // imgs: ['https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800', 'https://images.unsplash.com/photo-1541888946425-d81bb19480c5?w=800'] 
    //}
};

// =========================================
// 5. وظائف النافذة المنبثقة (Modal Gallery)
// =========================================
function openGallery(category) {
    const modal = document.getElementById('galleryModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalImages = document.getElementById('modalImages');

    if (portfolioData[category]) {
        modalTitle.innerText = portfolioData[category].title;
        
        // بناء شبكة الصور داخل المودال
        modalImages.innerHTML = portfolioData[category].imgs
            .map(src => `<div class="modal-img-wrapper" data-aos="zoom-in"><img src="${src}" alt="Interior Design"></div>`)
            .join('');
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden'; // منع تمرير الصفحة الرئيسية عند فتح المعرض
    }
}

function closeGallery() {
    const modal = document.getElementById('galleryModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto'; // إعادة تفعيل التمرير
}

// إغلاق المودال عند الضغط خارج المحتوى الأبيض
window.onclick = function(event) {
    const modal = document.getElementById('galleryModal');
    if (event.target == modal) {
        closeGallery();
    }
};

// =========================================
// 6. تأثيرات الهيدر عند التمرير
// =========================================
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 50) {
        header.style.padding = '10px 8%';
        header.style.background = 'rgba(10, 10, 10, 0.98)';
    } else {
        header.style.padding = '15px 8%';
        header.style.background = 'rgba(18, 18, 18, 0.98)';
    }
});
const whatsappForm = document.getElementById('whatsappForm');
if (whatsappForm) {
    whatsappForm.addEventListener('submit', function(e) {
        e.preventDefault(); // هذا السطر يمنع الصفحة من التحديث ويشغل الكود
        
        const name = document.getElementById('clientName').value;
        const phone = document.getElementById('clientPhone').value;
        const service = document.getElementById('serviceType').value;
        const details = document.getElementById('projectDetails').value;

        const message = `*طلب جديد من الموقع*%0a*الاسم:* ${name}%0a*الجوال:* ${phone}%0a*الخدمة:* ${service}%0a*التفاصيل:* ${details}`;
        
        // فتح الواتساب
        window.open(`https://wa.me/966593736902?text=${message}`, '_blank');
    });
}
