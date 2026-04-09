/* ========================================
   作品集 - 交互脚本
   ======================================== */

// 作品数据
const worksData = {
    ip: [
        { id: 'quwan', brand: '趣丸', type: 'IP设计', cover: 'images/ip/quwan/1.jpg', images: ['images/ip/quwan/1.jpg','images/ip/quwan/2.jpg','images/ip/quwan/3.jpg','images/ip/quwan/quwan-01.jpg','images/ip/quwan/quwan-02.jpg','images/ip/quwan/quwan-03.jpg','images/ip/quwan/quwan-04.jpg','images/ip/quwan/quwan-05.jpg','images/ip/quwan/quwan-06.jpg','images/ip/quwan/quwan-07.jpg','images/ip/quwan/quwan-08.jpg','images/ip/quwan/quwan-09.jpg'] },
        { id: 'kuaishou', brand: '快手', type: 'IP设计', cover: 'images/ip/kuaishou/kuaishou-04.jpg', images: ['images/ip/kuaishou/kuaishou-04.jpg','images/ip/kuaishou/kuaishou-02.jpg','images/ip/kuaishou/kuaishou-03.jpg','images/ip/kuaishou/kuaishou-05.jpg','images/ip/kuaishou/kuaishou-06.jpg','images/ip/kuaishou/kuaishou-07.jpg','images/ip/kuaishou/kuaishou-08.jpg','images/ip/kuaishou/kuaishou-09.jpg','images/ip/kuaishou/kuaishou-10.jpg','images/ip/kuaishou/kuaishou-01.png'] },
        { id: 'shuidi', brand: '水滴', type: 'IP设计', cover: 'images/ip/shuidi/shuidi-05.jpg', images: ['images/ip/shuidi/shuidi-05.jpg','images/ip/shuidi/shuidi-01.jpg','images/ip/shuidi/shuidi-02.jpg','images/ip/shuidi/shuidi-03.jpg','images/ip/shuidi/shuidi-04.jpg'] },
        { id: 'huazhu', brand: '华住', type: 'IP设计', cover: 'images/ip/huazhu/huazhu-01.jpg', images: ['images/ip/huazhu/huazhu-01.jpg','images/ip/huazhu/huazhu-02.jpg'] },
        { id: 'taotian', brand: '淘天', type: 'IP设计', cover: 'images/ip/taotian/taotian-01.jpg', images: ['images/ip/taotian/taotian-01.jpg'] },
        { id: 'cainiao-ip', brand: '菜鸟', type: 'IP设计', cover: 'images/ip/cainiao/cainiao-02.jpg', images: ['images/ip/cainiao/cainiao-02.jpg','images/ip/cainiao/cainiao-03.jpg','images/ip/cainiao/cainiao-01.png'] },
        { id: 'beike', brand: '贝壳', type: 'IP设计', cover: 'images/ip/beike/beike-02.jpg', images: ['images/ip/beike/beike-02.jpg','images/ip/beike/beike-01.jpg'] }
    ],
    package: [
        { id: 'ruixing', brand: '瑞幸', type: '包装设计', cover: 'images/package/ruixing/ruixing-01.jpg', images: ['images/package/ruixing/ruixing-01.jpg','images/package/ruixing/ruixing-02.jpg','images/package/ruixing/ruixing-03.jpg','images/package/ruixing/ruixing-04.png','images/package/ruixing/ruixing-05.jpg','images/package/ruixing/ruixing-06.jpg','images/package/ruixing/ruixing-07.jpg','images/package/ruixing/ruixing-08.jpg','images/package/ruixing/ruixing-09.jpg','images/package/ruixing/ruixing-10.jpg','images/package/ruixing/ruixing-11.jpg','images/package/ruixing/ruixing-12.jpg','images/package/ruixing/ruixing-13.jpg','images/package/ruixing/ruixing-14.jpg'] },
        { id: 'kuaishou-pack', brand: '快手', type: '包装设计', cover: 'images/package/kuaishou/mid-autumn-2024/mid-autumn-2024-01.jpg', images: ['images/package/kuaishou/mid-autumn-2024/mid-autumn-2024-01.jpg','images/package/kuaishou/mid-autumn-2024/mid-autumn-2024-02.jpg','images/package/kuaishou/mid-autumn-2024/mid-autumn-2024-03.jpg','images/package/kuaishou/mid-autumn-2024/mid-autumn-2024-04.jpg','images/package/kuaishou/mid-autumn-2024/mid-autumn-2024-05.jpg','images/package/kuaishou/mid-autumn-2024/mid-autumn-2024-06.jpg','images/package/kuaishou/mid-autumn-2024/mid-autumn-2024-07.jpg','images/package/kuaishou/mid-autumn-2024/mid-autumn-2024-08.jpg','images/package/kuaishou/dragon-boat-2024/dragon-boat-2024-01.jpg','images/package/kuaishou/dragon-boat-2024/dragon-boat-2024-02.jpg'] },
        { id: 'beida', brand: '北大', type: '包装设计', cover: 'images/package/beida/beida-01.jpg', images: ['images/package/beida/beida-01.jpg','images/package/beida/beida-02.jpg','images/package/beida/beida-03.jpg','images/package/beida/beida-04.jpg','images/package/beida/beida-05.jpg','images/package/beida/beida-06.jpg','images/package/beida/beida-07.jpg','images/package/beida/beida-08.jpg','images/package/beida/beida-09.jpg','images/package/beida/beida-10.jpg','images/package/beida/beida-11.jpg'] },
        { id: 'autohome', brand: '汽车之家', type: '包装设计', cover: 'images/package/autohome/autohome-01.jpg', images: ['images/package/autohome/autohome-01.jpg','images/package/autohome/autohome-02.jpg','images/package/autohome/autohome-03.jpg','images/package/autohome/autohome-04.jpg','images/package/autohome/autohome-05.jpg','images/package/autohome/autohome-06.jpg','images/package/autohome/autohome-07.jpg','images/package/autohome/autohome-08.jpg'] },
        { id: 'douyin', brand: '抖音直播', type: '包装设计', cover: 'images/package/douyin/spring-festival/spring-festival-01.jpg', images: ['images/package/douyin/spring-festival/spring-festival-01.jpg','images/package/douyin/spring-festival/spring-festival-02.jpg','images/package/douyin/spring-festival/spring-festival-03.jpg','images/package/douyin/spring-festival/spring-festival-04.jpg','images/package/douyin/spring-festival/spring-festival-05.jpg','images/package/douyin/spring-festival/spring-festival-06.jpg','images/package/douyin/dragon-boat/dragon-boat-01.jpg','images/package/douyin/dragon-boat/dragon-boat-02.jpg','images/package/douyin/dragon-boat/dragon-boat-03.jpg','images/package/douyin/dragon-boat/dragon-boat-04.jpg','images/package/douyin/dragon-boat/dragon-boat-05.jpg','images/package/douyin/dragon-boat/dragon-boat-06.jpg'] },
        { id: 'taotian-pack', brand: '淘天', type: '包装设计', cover: 'images/package/taotian/taotian-01.jpg', images: ['images/package/taotian/taotian-01.jpg','images/package/taotian/taotian-02.jpg','images/package/taotian/taotian-03.jpg','images/package/taotian/taotian-04.jpg','images/package/taotian/taotian-05.jpg','images/package/taotian/taotian-06.jpg','images/package/taotian/taotian-07.jpg'] },
        { id: 'baidu', brand: '百度', type: '包装设计', cover: 'images/package/baidu/baidu-01.jpg', images: ['images/package/baidu/baidu-01.jpg'] },
        { id: 'cainiao-pack', brand: '菜鸟', type: '包装设计', cover: 'images/package/cainiao/cainiao-01.jpg', images: ['images/package/cainiao/cainiao-01.jpg','images/package/cainiao/cainiao-02.jpg','images/package/cainiao/cainiao-03.jpg','images/package/cainiao/cainiao-04.jpg','images/package/cainiao/cainiao-05.jpg'] }
    ]
};

// AI作品数据
const aiData = {
    ip: [
        { title: 'IP设计-1', cover: 'images/ai/ip-works/1.png' },
        { title: 'IP设计-2', cover: 'images/ai/ip-works/2.png' },
        { title: 'IP设计-3', cover: 'images/ai/ip-works/ip-works-01.png' },
        { title: 'IP设计-4', cover: 'images/ai/ip-works/ip-works-02.png' },
        { title: 'IP设计-5', cover: 'images/ai/ip-works/ip-works-03.png' },
        { title: 'IP设计-6', cover: 'images/ai/ip-works/ip-works-04.png' },
        { title: 'IP设计-7', cover: 'images/ai/ip-works/ip-works-05.png' },
        { title: 'IP设计-8', cover: 'images/ai/ip-works/ip-works-06.png' },
        { title: 'IP设计-9', cover: 'images/ai/ip-works/ip-works-07.png' },
        { title: 'IP设计-10', cover: 'images/ai/ip-works/ip-works-08.png' },
        { title: 'IP设计-11', cover: 'images/ai/ip-works/ip-works-09.png' }
    ],
    icon: [
        { title: '图标-1', cover: 'images/ai/icon-works/4.png' },
        { title: '图标-2', cover: 'images/ai/icon-works/5.png' },
        { title: '图标-3', cover: 'images/ai/icon-works/6.png' },
        { title: '图标-4', cover: 'images/ai/icon-works/10.jpg' },
        { title: '图标-5', cover: 'images/ai/icon-works/11.jpg' },
        { title: '图标-6', cover: 'images/ai/icon-works/12.jpg' },
        { title: '图标-7', cover: 'images/ai/icon-works/14.jpg' },
        { title: '图标-8', cover: 'images/ai/icon-works/18.jpg' },
        { title: '图标-9', cover: 'images/ai/icon-works/19.jpg' }
    ]
};

document.addEventListener('DOMContentLoaded', () => {
    // 导航滚动效果
    const nav = document.querySelector('.nav');
    window.addEventListener('scroll', () => {
        nav.classList.toggle('scrolled', window.pageYOffset > 50);
    });
    
    // 移动端菜单
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    navToggle.addEventListener('click', () => {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('active');
        document.body.style.overflow = navLinks.classList.contains('active') ? 'hidden' : '';
    });
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navToggle.classList.remove('active');
            navLinks.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
    
    // 导航高亮
    const sections = document.querySelectorAll('section[id]');
    const navItems = document.querySelectorAll('.nav-links a');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navItems.forEach(item => {
                    item.classList.toggle('active', item.getAttribute('href') === `#${entry.target.id}`);
                });
            }
        });
    }, { rootMargin: '-50% 0px' });
    sections.forEach(section => observer.observe(section));
    
    // ========================================
    // AI作品网格生成
    // ========================================
    const aiWorksGrid = document.getElementById('aiWorksGrid');
    const aiTabBtns = document.querySelectorAll('.tab-btn[data-aicategory]');
    let currentAICategory = 'ip';
    
    function renderAIWorksGrid(category) {
        if (!aiWorksGrid) return;
        aiWorksGrid.innerHTML = '';
        const works = aiData[category] || [];
        
        works.forEach((work, index) => {
            const card = document.createElement('div');
            card.className = 'work-card';
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            
            card.innerHTML = `
                <div class="work-image">
                    <img src="${work.cover}" alt="${work.title}" loading="lazy">
                    <div class="work-overlay">
                        <span class="work-view">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="work-info">
                    <h3 class="work-brand">${work.title}</h3>
                    <span class="work-type">${category === 'ip' ? 'IP类' : '图标类'}</span>
                </div>
            `;
            
            card.addEventListener('click', () => {
                openAIGallery(work, works, index);
            });
            
            aiWorksGrid.appendChild(card);
            
            setTimeout(() => {
                card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, index * 80);
        });
    }
    
    aiTabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.dataset.aicategory;
            if (category === currentAICategory) return;
            
            aiTabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentAICategory = category;
            renderAIWorksGrid(category);
        });
    });
    
    let aiModalImages = [];
    let aiModalCurrentIdx = 0;
    
    function openAIGallery(currentWork, allWorks, currentIndex) {
        aiModalImages = allWorks.map(w => w.cover);
        aiModalCurrentIdx = currentIndex;
        
        modalTitle.textContent = currentWork.title;
        modalCount.textContent = `${currentIndex + 1} / ${allWorks.length}`;
        modalGallery.innerHTML = `<img src="${aiModalImages[aiModalCurrentIdx]}" alt="${currentWork.title}">`;
        
        modalPrev.style.display = 'flex';
        modalNext.style.display = 'flex';
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        function onKeydown(e) {
            if (e.key === 'ArrowLeft') showAIGalleryImage(aiModalCurrentIdx - 1);
            if (e.key === 'ArrowRight') showAIGalleryImage(aiModalCurrentIdx + 1);
            if (e.key === 'Escape') closeAIGallery();
        }
        
        function showAIGalleryImage(idx) {
            if (idx < 0) idx = aiModalImages.length - 1;
            if (idx >= aiModalImages.length) idx = 0;
            aiModalCurrentIdx = idx;
            modalCount.textContent = `${aiModalCurrentIdx + 1} / ${aiModalImages.length}`;
            modalGallery.innerHTML = `<img src="${aiModalImages[aiModalCurrentIdx]}" alt="AI作品">`;
        }
        
        function closeAIGallery() {
            modal.classList.remove('active');
            document.body.style.overflow = '';
            document.removeEventListener('keydown', onKeydown);
            modalPrev.onclick = null;
            modalNext.onclick = null;
            modalPrev.style.display = '';
            modalNext.style.display = '';
        }
        
        document.addEventListener('keydown', onKeydown);
        modalClose.onclick = closeAIGallery;
        modal.onclick = (e) => { if (e.target === modal) closeAIGallery(); };
        modalPrev.onclick = () => showAIGalleryImage(aiModalCurrentIdx - 1);
        modalNext.onclick = () => showAIGalleryImage(aiModalCurrentIdx + 1);
    }
    
    renderAIWorksGrid('ip');
    
    // ========================================
    // 作品网格生成
    // ========================================
    const worksGrid = document.getElementById('worksGrid');
    const tabBtns = document.querySelectorAll('.tab-btn[data-category]');
    let currentCategory = 'ip';
    
    function renderWorks(category) {
        worksGrid.innerHTML = '';
        const works = worksData[category] || [];
        
        works.forEach((work, index) => {
            const card = document.createElement('div');
            
            const spanCol = 1;
            const spanRow = 1;
            
            card.className = 'work-card';
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            if (spanCol === 2) card.classList.add('span-2-col');
            if (spanRow === 2) card.classList.add('span-2-row');
            
            card.innerHTML = `
                <div class="work-image">
                    <img src="${work.cover}" alt="${work.brand}" loading="lazy">
                    <div class="work-overlay">
                        <span class="work-count">${work.images.length} 张</span>
                        <span class="work-view">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                            </svg>
                        </span>
                    </div>
                </div>
                <div class="work-info">
                    <span class="work-brand">${work.brand}</span>
                    <span class="work-type">${work.type}</span>
                </div>
            `;
            
            card.addEventListener('click', () => openModal(work));
            
            worksGrid.appendChild(card);
            
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
                card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            }, index * 100);
        });
    }
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentCategory = btn.dataset.category;
            renderWorks(currentCategory);
        });
    });
    
    renderWorks(currentCategory);
    
    // ========================================
    // 项目详情弹窗
    // ========================================
    const modal = document.getElementById('projectModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalCount = document.getElementById('modalCount');
    const modalGallery = document.getElementById('modalGallery');
    const modalClose = document.getElementById('modalClose');
    const modalPrev = document.getElementById('modalPrev');
    const modalNext = document.getElementById('modalNext');
    
    let currentWorkImages = [];
    let currentImageIndex = 0;
    
    function openModal(work) {
        modalTitle.textContent = work.brand;
        currentWorkImages = work.images;
        currentImageIndex = 0;
        
        showWorkImage(0);
        
        if (work.images.length > 1) {
            modalPrev.style.display = 'flex';
            modalNext.style.display = 'flex';
        } else {
            modalPrev.style.display = 'none';
            modalNext.style.display = 'none';
        }
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        document.addEventListener('keydown', handleModalKeydown);
    }
    
    function showWorkImage(index) {
        if (index < 0) index = currentWorkImages.length - 1;
        if (index >= currentWorkImages.length) index = 0;
        currentImageIndex = index;
        
        modalCount.textContent = `${currentImageIndex + 1} / ${currentWorkImages.length}`;
        modalGallery.innerHTML = `<img src="${currentWorkImages[currentImageIndex]}" alt="${modalTitle.textContent} - ${currentImageIndex + 1}" style="max-width:100%;max-height:70vh;object-fit:contain;">`;
    }
    
    function handleModalKeydown(e) {
        if (e.key === 'ArrowLeft') {
            showWorkImage(currentImageIndex - 1);
        } else if (e.key === 'ArrowRight') {
            showWorkImage(currentImageIndex + 1);
        } else if (e.key === 'Escape') {
            closeModal();
        }
    }
    
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = '';
        modalPrev.style.display = '';
        modalNext.style.display = '';
        document.removeEventListener('keydown', handleModalKeydown);
    }
    
    modalClose.addEventListener('click', closeModal);
    modalPrev.addEventListener('click', () => showWorkImage(currentImageIndex - 1));
    modalNext.addEventListener('click', () => showWorkImage(currentImageIndex + 1));
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
    });
    
    // ========================================
    // 图片灯箱
    // ========================================
    let lightbox = document.querySelector('.lightbox');
    if (!lightbox) {
        lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M18 6L6 18M6 6l12 12"/>
                </svg>
            </button>
            <img class="lightbox-img" src="" alt="">
        `;
        document.body.appendChild(lightbox);
        
        lightbox.querySelector('.lightbox-close').addEventListener('click', () => {
            lightbox.classList.remove('active');
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) lightbox.classList.remove('active');
        });
    }
    
    function openLightbox(src) {
        lightbox.querySelector('.lightbox-img').src = src;
        lightbox.classList.add('active');
    }
    
    // 技能标签动画
    document.querySelectorAll('.skill-tag').forEach((tag, i) => {
        tag.style.opacity = '0';
        tag.style.transform = 'translateY(10px)';
        tag.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        setTimeout(() => {
            tag.style.opacity = '1';
            tag.style.transform = 'translateY(0)';
        }, 400 + i * 50);
    });
    
    // 平滑滚动
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
    
    // ========================================
    // 首页轮播
    // ========================================
    const sliderItems = document.querySelectorAll('.slider-item');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-arrow.prev');
    const nextBtn = document.querySelector('.slider-arrow.next');
    
    if (sliderItems.length > 0) {
        let currentSlide = 0;
        let slideInterval;
        
        function showSlide(index) {
            if (index >= sliderItems.length) index = 0;
            if (index < 0) index = sliderItems.length - 1;
            sliderItems.forEach(item => item.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            sliderItems[index].classList.add('active');
            if (dots[index]) dots[index].classList.add('active');
            currentSlide = index;
        }
        
        function startAutoPlay() {
            slideInterval = setInterval(() => showSlide(currentSlide + 1), 5000);
        }
        
        function stopAutoPlay() {
            clearInterval(slideInterval);
        }
        
        if (prevBtn) prevBtn.addEventListener('click', () => { stopAutoPlay(); showSlide(currentSlide - 1); startAutoPlay(); });
        if (nextBtn) nextBtn.addEventListener('click', () => { stopAutoPlay(); showSlide(currentSlide + 1); startAutoPlay(); });
        
        dots.forEach((dot, i) => dot.addEventListener('click', () => { stopAutoPlay(); showSlide(i); startAutoPlay(); }));
        
        const slider = document.querySelector('.hero-slider');
        if (slider) {
            slider.addEventListener('mouseenter', stopAutoPlay);
            slider.addEventListener('mouseleave', startAutoPlay);
        }
        
        startAutoPlay();
    }
    
    // 鼠标跟随光效
    const hero = document.querySelector('.hero');
    if (hero) {
        let mouseX = 0, mouseY = 0, currentX = 0, currentY = 0;
        hero.addEventListener('mousemove', (e) => {
            const rect = hero.getBoundingClientRect();
            mouseX = ((e.clientX - rect.left) / rect.width - 0.5) * 20;
            mouseY = ((e.clientY - rect.top) / rect.height - 0.5) * 20;
        });
        function animateGradient() {
            currentX += (mouseX - currentX) * 0.05;
            currentY += (mouseY - currentY) * 0.05;
            const gradient = document.querySelector('.hero-gradient');
            if (gradient) gradient.style.transform = `translate(${currentX}px, ${currentY}px)`;
            requestAnimationFrame(animateGradient);
        }
        animateGradient();
    }
});
