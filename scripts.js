document.addEventListener('DOMContentLoaded', function() {
    // 모바일 메뉴 토글
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuClose = document.querySelector('.mobile-menu-close');
    const overlay = document.querySelector('.overlay');
    
    [menuToggle, menuClose, overlay].forEach(el => el.addEventListener('click', () => {
        mobileMenu.classList.toggle('open');
        overlay.classList.toggle('show');
    }));

    // FAQ 링크 스무스 스크롤
    document.querySelector('.faq-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const faqSection = document.querySelector('#faq');
        faqSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // 서비스 소개 링크 스무스 스크롤
    document.querySelector('.services-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const servicesSection = document.querySelector('#services');
        servicesSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // 팀 소개 링크 스무스 스크롤
    document.querySelector('.team-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const teamSection = document.querySelector('#team');
        teamSection.scrollIntoView({ behavior: 'smooth' });
    });

    // 플랜/가격 링크 스무스 스크롤
    document.querySelector('.plan-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const planSection = document.querySelector('#plan');
        const headerHeight = document.querySelector('header').offsetHeight;
        
        // 헤더 높이를 고려하여 스크롤 위치 계산
        const offsetPosition = planSection.offsetTop - headerHeight;
        
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
    });
    
    // 탭 전환 기능
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    
    tabButtons.forEach(btn => btn.addEventListener('click', () => {
        const targetId = btn.dataset.tab + '-tab';
        tabButtons.forEach(b => b.classList.toggle('active', b === btn));
        tabContents.forEach(c => c.classList.toggle('active', c.id === targetId));
    }));

    // 인덱스 링크 부드러운 스크롤 기능
    document.querySelectorAll('.index-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        });
    });

    // 모바일 메뉴 FAQ 링크 스무스 스크롤
    document.querySelector('.mobile-faq-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const faqSection = document.querySelector('#faq');
        
        // FAQ 섹션으로 스크롤
        faqSection.scrollIntoView({ behavior: 'smooth' });
        
        // 모바일 메뉴 닫기
        mobileMenu.classList.remove('open');
        overlay.classList.remove('show');
    });

    // 모바일 메뉴 서비스 소개 링크 스무스 스크롤
    document.querySelector('.mobile-services-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const servicesSection = document.querySelector('#services');
        
        // 서비스 소개 섹션으로 스크롤
        servicesSection.scrollIntoView({ behavior: 'smooth' });
        
        // 모바일 메뉴 닫기
        mobileMenu.classList.remove('open');
        overlay.classList.remove('show');
    });

    // 모바일 메뉴 팀 소개 링크 스무스 스크롤
    document.querySelector('.mobile-team-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const teamSection = document.querySelector('#team');
        
        // 팀 소개 섹션으로 스크롤
        teamSection.scrollIntoView({ behavior: 'smooth' });
        
        // 모바일 메뉴 닫기
        mobileMenu.classList.remove('open');
        overlay.classList.remove('show');
    });

    // 모바일 메뉴 플랜/가격 링크 스무스 스크롤
    document.querySelector('.mobile-plan-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const planSection = document.querySelector('#plan');
        const headerHeight = document.querySelector('header').offsetHeight;
        
        // 헤더 높이를 고려하여 스크롤 위치 계산
        const offsetPosition = planSection.offsetTop - headerHeight;
        
        // 플랜/가격 섹션으로 스크롤
        window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
        });
        
        // 모바일 메뉴 닫기
        mobileMenu.classList.remove('open');
        overlay.classList.remove('show');
    });
    
    // 데이터 탭의 카테고리 아코디언 기능
    document.querySelectorAll('.data-category-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement.classList.toggle('active');
        });
    });
    
    // 스크롤 헤더 효과
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            document.querySelector('header').style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            document.querySelector('header').style.boxShadow = 'none';
        }
    });
});

// 신뢰 배너 스크립트
document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('#trust-banner .tb-track');

    /* 1세트를 그대로 복제해 뒤에 붙여 '무한' 스크롤 */
    track.innerHTML += track.innerHTML;

    /* (선택) 창 크기 바뀔 때 애니메이션 재생성해 끊김 방지 */
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            track.style.animation = 'none';
            // 강제로 reflow 후 다시 부여
            void track.offsetWidth;
            track.style.animation = null;
        }, 200);
    });
});

// FAQ 아코디언 스크립트
document.addEventListener('DOMContentLoaded', () => {
    // FAQ 아코디언 기능
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        
        question.addEventListener('click', () => {
            const alreadyActive = item.classList.contains('active');
            
            // 모든 FAQ 항목 닫기
            faqItems.forEach(faqItem => {
                faqItem.classList.remove('active');
            });
            
            // 클릭한 항목이 이미 열려있지 않으면 열기
            if(!alreadyActive) {
                item.classList.add('active');
            }
        });
    });

    // 프로세스 탭 기능
    const processTabs = document.querySelectorAll('.process-tab');
    const processContents = document.querySelectorAll('.process-content');
    
    processTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab') + '-content';
            processTabs.forEach(t => t.classList.remove('active'));
            processContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            document.getElementById(tabId).classList.add('active');
        });
    });
    
    // 컨설팅 프로세스 링크 추가 (네비게이션에 추가해야 함)
    document.querySelector('.nav-menu li:nth-child(2) a') && document.querySelector('.nav-menu li:nth-child(2) a').setAttribute('href', '#process');
    document.querySelector('.nav-menu li:nth-child(2) a') && document.querySelector('.nav-menu li:nth-child(2) a').addEventListener('click', function(e) {
        e.preventDefault();
        const processSection = document.querySelector('#process');
        processSection.scrollIntoView({ behavior: 'smooth' });
    });
    
    // 모바일 메뉴에도 컨설팅 프로세스 링크 추가
    document.querySelector('.mobile-menu-links li:nth-child(2) a') && document.querySelector('.mobile-menu-links li:nth-child(2) a').addEventListener('click', function(e) {
        e.preventDefault();
        const processSection = document.querySelector('#process');
        processSection.scrollIntoView({ behavior: 'smooth' });
        
        // 모바일 메뉴 닫기
        mobileMenu.classList.remove('open');
        overlay.classList.remove('show');
    });
});

// 플랜/가격 섹션 자바스크립트
document.addEventListener('DOMContentLoaded', function() {
    // FAQ 토글 기능
    const faqToggleBtns = document.querySelectorAll('.faq-toggle-btn');
    
    faqToggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const content = this.nextElementSibling;
            content.classList.toggle('active');
            const icon = this.querySelector('span');
            icon.textContent = content.classList.contains('active') ? '−' : '+';
        });
    });
    
    // ROI 계산기 모달
    const roiCalculatorBtn = document.getElementById('roiCalculatorBtn');
    const roiCalculatorTrigger = document.getElementById('roiCalculatorTrigger');
    const roiCalculatorModal = document.getElementById('roiCalculatorModal');
    const closeModalBtn = document.querySelector('.close-modal');
    
    function openRoiModal() {
        roiCalculatorModal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
    
    function closeRoiModal() {
        roiCalculatorModal.style.display = 'none';
        document.body.style.overflow = '';
    }
    
    if(roiCalculatorBtn) roiCalculatorBtn.addEventListener('click', openRoiModal);
    if(roiCalculatorTrigger) roiCalculatorTrigger.addEventListener('click', openRoiModal);
    if(closeModalBtn) closeModalBtn.addEventListener('click', closeRoiModal);
    
    // ROI 계산 기능
    const calculateRoiBtn = document.getElementById('calculateRoiBtn');
    
    if(calculateRoiBtn) {
        calculateRoiBtn.addEventListener('click', function() {
            const users = parseFloat(document.getElementById('monthlyUsers').value) || 0;
            const revenue = parseFloat(document.getElementById('averageRevenue').value) || 0;
            const conversion = parseFloat(document.getElementById('currentConversion').value) || 0;
            
            // 간단한 ROI 계산 로직 (실제로는 더 복잡할 수 있음)
            const currentMonthlyRevenue = users * (conversion / 100) * revenue;
            const estimatedNewConversion = conversion * 1.3; // 30% 증가 가정
            const newMonthlyRevenue = users * (estimatedNewConversion / 100) * revenue;
            const revenueIncrease = newMonthlyRevenue - currentMonthlyRevenue;
            const quarterlyIncrease = revenueIncrease * 3;
            
            // 3개월 투자 비용 대비 추가 매출 (ROI)
            const investmentCost = 40000000; // 4천만원 가정
            const roi = (quarterlyIncrease / investmentCost).toFixed(1);
            
            // 결과 업데이트
            document.getElementById('revenueIncrease').textContent = Math.round(quarterlyIncrease).toLocaleString() + '원';
            document.getElementById('estimatedRoi').textContent = roi + 'x';
            
            // 추천 플랜
            let recommendedPlan = '';
            if(users < 5000) {
                recommendedPlan = 'Growth Boost 12W';
            } else if(users < 50000) {
                recommendedPlan = 'Dual Track Scale';
            } else {
                recommendedPlan = 'Dual Track Scale + 맞춤 모듈';
            }
            
            document.getElementById('recommendedPlan').textContent = recommendedPlan;
        });
    }
    
    // PDF 견적서 및 모듈 리스트 다운로드 (실제로는 서버 통신 필요)
    const pdfQuoteBtn = document.getElementById('pdfQuoteBtn');
    const moduleListBtn = document.getElementById('moduleListBtn');
    
    function promptForEmail(title, actionText) {
        const email = prompt(`${title}\n이메일을 입력하시면 ${actionText} 보내드립니다.`);
        if(email && email.includes('@')) {
            alert(`${email}로 자료를 발송했습니다!`);
            return true;
        } else if(email) {
            alert('유효한 이메일을 입력해주세요.');
        }
        return false;
    }
    
    if(pdfQuoteBtn) {
        pdfQuoteBtn.addEventListener('click', function(e) {
            e.preventDefault();
            promptForEmail('견적서 다운로드', '즉시 견적서를');
        });
    }
    
    if(moduleListBtn) {
        moduleListBtn.addEventListener('click', function(e) {
            e.preventDefault();
            promptForEmail('모듈 리스트 다운로드', '모듈 카탈로그를');
        });
    }
    
    // 실제 견적 예시 보기
    const realQuotesLink = document.getElementById('realQuotesLink');
    
    if(realQuotesLink) {
        realQuotesLink.addEventListener('click', function(e) {
            e.preventDefault();
            window.open('https://docs.google.com/spreadsheets/d/example-sheet-id', '_blank');
        });
    }

    // 가격 토글 기능 추가 - 섹션 레벨 토글
    const monthlyToggle = document.getElementById('monthlyToggle');
    const lumpSumToggle = document.getElementById('lumpSumToggle');
    const monthlyPrices = document.querySelectorAll('.monthly-price');
    const lumpSumPrices = document.querySelectorAll('.lump-sum-price');
    
    if (monthlyToggle && lumpSumToggle) {
        monthlyToggle.addEventListener('click', () => {
            // 토글 버튼 스타일 변경
            monthlyToggle.classList.add('active');
            lumpSumToggle.classList.remove('active');
            
            // 모든 가격 표시 업데이트
            monthlyPrices.forEach(price => price.classList.remove('hidden'));
            lumpSumPrices.forEach(price => price.classList.add('hidden'));
        });
        
        lumpSumToggle.addEventListener('click', () => {
            // 토글 버튼 스타일 변경
            lumpSumToggle.classList.add('active');
            monthlyToggle.classList.remove('active');
            
            // 모든 가격 표시 업데이트
            lumpSumPrices.forEach(price => price.classList.remove('hidden'));
            monthlyPrices.forEach(price => price.classList.add('hidden'));
        });
    }
});