(function() {
    // التحقق إذا كان الزر موجودًا بالفعل
    const existingButton = document.getElementById('next-button');
    if (existingButton) {
        existingButton.remove(); // إزالة الزر إذا كان موجودًا بالفعل
        console.log('تم إزالة الزر الموجود بالفعل');
    }

    // إنشاء الزر
    const button = document.createElement('button');
    
    // إضافة الأيقونة والنص
    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-arrow-right'); // استخدام أيقونة السهم من Font Awesome
    
    button.textContent = ' التالي'; // النص بعد الأيقونة
    button.prepend(icon); // إضافة الأيقونة قبل النص

    // إضافة id و class للزر
    button.id = 'next-button';  // إضافة id للزر
    button.classList.add('next-btn');  // إضافة class للزر

    // تخصيص تصميم الزر
    button.style.position = 'absolute';  // تغيير إلى "absolute" لإتاحة التحكم في المكان بدقة
    button.style.top = '20px';  // تحديد المسافة من أعلى الصفحة
    button.style.left = '20px';  // تحديد المسافة من يسار الصفحة
    button.style.padding = '10px 50px'; // زيادة العرض وتقليل الارتفاع
    button.style.backgroundColor = 'white'; // جعل الخلفية بيضاء
    button.style.color = 'black'; // النص باللون الأسود
    button.style.border = 'none'; // لا توجد حواف مرئية
    button.style.borderRadius = '50px'; // جعل الزر دائري الشكل
    button.style.fontSize = '18px';
    button.style.fontWeight = 'bold';
    button.style.cursor = 'pointer';
    button.style.boxShadow = '0 5px 15px rgba(0, 0, 0, 0.2)';
    button.style.zIndex = '9999'; // التأكد من أن الزر سيكون فوق جميع العناصر
    button.style.transition = 'background-color 0.3s, transform 0.3s'; // إضافة تأثيرات عند التمرير والضغط

    // تخصيص الأيقونة
    icon.style.marginRight = '8px'; // إضافة مسافة بين الأيقونة والنص
    
    // تأثير عند التمرير على الزر
    button.addEventListener('mouseenter', () => {
        button.style.backgroundColor = '#f7b500';  // تغيير اللون عند التمرير
        button.style.color = 'white';  // تغيير لون النص إلى الأبيض
        button.style.transform = 'scale(1.05)'; // تكبير الزر قليلاً عند التمرير
    });
    button.addEventListener('mouseleave', () => {
        button.style.backgroundColor = 'white'; // إعادة اللون الأصلي عند مغادرة التمرير
        button.style.color = 'black';  // إعادة النص إلى الأسود
        button.style.transform = 'scale(1)';  // العودة إلى الحجم الطبيعي
    });

    // إضافة الزر إلى الصفحة بعد العنصر المحدد (على سبيل المثال داخل div)
    const targetElement = document.getElementById('streamBox'); // يمكنك تحديد أي عنصر ترغب في إضافة الزر فيه
    if (targetElement) {
        targetElement.appendChild(button);
        console.log('تم إضافة الزر إلى العنصر المحدد');
    } else {
        document.body.appendChild(button); // في حالة عدم وجود العنصر المحدد، نضيفه إلى الجسم بشكل افتراضي
        console.log('تم إضافة الزر إلى الجسم');
    }

    // دالة لتغيير الحلقة في الرابط عند الضغط على الزر
    button.addEventListener('click', function() {
        let currentUrl = window.location.href;

        // البحث عن رقم الحلقة في الرابط
        const episodeRegex = /-(\d+)$/;
        const match = currentUrl.match(episodeRegex);

        if (match) {
            // استخراج الحلقة الحالية
            let currentEpisode = parseInt(match[1], 10);

            // تعديل الحلقة إلى الحلقة التالية
            let nextEpisode = currentEpisode + 1;

            // إنشاء الرابط الجديد
            let newUrl = currentUrl.replace(episodeRegex, `-${nextEpisode}`);

            // تغيير الرابط في المتصفح
            window.location.href = newUrl;
        } else {
            alert("لم يتم العثور على رقم الحلقة في الرابط الحالي.");
        }
    });
})();
