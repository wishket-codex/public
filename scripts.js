// 메인 초기화 함수
function initMainScripts() {
    // 모바일 메뉴 토글
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
    const menuClose = document.querySelector('.mobile-menu-close');
    const overlay = document.querySelector('.overlay');
    
    if (menuToggle && mobileMenu && menuClose && overlay) {
        [menuToggle, menuClose, overlay].forEach(el => el.addEventListener('click', () => {
            mobileMenu.classList.toggle('open');
            overlay.classList.toggle('show');
        }));
    }

    // FAQ 링크 스무스 스크롤
    const faqLink = document.querySelector('.faq-link');
    console.log('FAQ link found:', faqLink);
    
    faqLink?.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('FAQ link clicked');
        const faqSection = document.querySelector('#faq');
        console.log('FAQ section found:', faqSection);
        
        if (faqSection) {
            faqSection.scrollIntoView({ behavior: 'smooth' });
            console.log('Scrolled to FAQ section');
        }
    });
    
    // 서비스 소개 링크 스무스 스크롤
    document.querySelector('.services-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const servicesSection = document.querySelector('#services');
        if (servicesSection) {
            servicesSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
    
    // 팀 소개 링크 스무스 스크롤
    document.querySelector('.team-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const teamSection = document.querySelector('#team');
        if (teamSection) {
            teamSection.scrollIntoView({ behavior: 'smooth' });
        }
    });

    // 플랜/가격 링크 스무스 스크롤
    document.querySelector('.plan-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const planSection = document.querySelector('#plan');
        const header = document.querySelector('header');
        
        if (planSection && header) {
            const headerHeight = header.offsetHeight;
            const offsetPosition = planSection.offsetTop - headerHeight;
            
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
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
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // 모바일 메뉴 FAQ 링크 스무스 스크롤
    const mobileFaqLink = document.querySelector('.mobile-faq-link');
    console.log('Mobile FAQ link found:', mobileFaqLink);
    
    mobileFaqLink?.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Mobile FAQ link clicked');
        const faqSection = document.querySelector('#faq');
        
        if (faqSection && mobileMenu && overlay) {
            // FAQ 섹션으로 스크롤
            faqSection.scrollIntoView({ behavior: 'smooth' });
            console.log('Scrolled to FAQ section from mobile menu');
            
            // 모바일 메뉴 닫기
            mobileMenu.classList.remove('open');
            overlay.classList.remove('show');
        }
    });

    // 모바일 메뉴 서비스 소개 링크 스무스 스크롤
    document.querySelector('.mobile-services-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const servicesSection = document.querySelector('#services');
        
        if (servicesSection && mobileMenu && overlay) {
            // 서비스 소개 섹션으로 스크롤
            servicesSection.scrollIntoView({ behavior: 'smooth' });
            
            // 모바일 메뉴 닫기
            mobileMenu.classList.remove('open');
            overlay.classList.remove('show');
        }
    });

    // 모바일 메뉴 팀 소개 링크 스무스 스크롤
    document.querySelector('.mobile-team-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const teamSection = document.querySelector('#team');
        
        if (teamSection && mobileMenu && overlay) {
            // 팀 소개 섹션으로 스크롤
            teamSection.scrollIntoView({ behavior: 'smooth' });
            
            // 모바일 메뉴 닫기
            mobileMenu.classList.remove('open');
            overlay.classList.remove('show');
        }
    });

    // 모바일 메뉴 플랜/가격 링크 스무스 스크롤
    document.querySelector('.mobile-plan-link')?.addEventListener('click', function(e) {
        e.preventDefault();
        const planSection = document.querySelector('#plan');
        const header = document.querySelector('header');
        
        if (planSection && header && mobileMenu && overlay) {
            const headerHeight = header.offsetHeight;
            const offsetPosition = planSection.offsetTop - headerHeight;
            
            // 플랜/가격 섹션으로 스크롤
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            
            // 모바일 메뉴 닫기
            mobileMenu.classList.remove('open');
            overlay.classList.remove('show');
        }
    });
    
    // 데이터 탭의 카테고리 아코디언 기능
    document.querySelectorAll('.data-category-header').forEach(header => {
        header.addEventListener('click', () => {
            header.parentElement?.classList.toggle('active');
        });
    });
    
    // 스크롤 헤더 효과
    window.addEventListener('scroll', function() {
        const header = document.querySelector('header');
        if (header) {
            if (window.scrollY > 50) {
                header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.boxShadow = 'none';
            }
        }
    });
}

// DOM이 이미 로드된 경우와 그렇지 않은 경우 모두 처리
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMainScripts);
} else {
    initMainScripts();
}

// 신뢰 배너 초기화 함수
function initTrustBanner() {
    const track = document.querySelector('#trust-banner .tb-track');

    if (track) {
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
    }
}

// DOM이 이미 로드된 경우와 그렇지 않은 경우 모두 처리
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initTrustBanner);
} else {
    initTrustBanner();
}

// FAQ 아코디언 및 프로세스 탭 초기화 함수
function initFaqAndProcessTabs() {
    // FAQ 아코디언 기능 - 이벤트 위임 방식 사용
    console.log('Initializing FAQ accordion...');
    
    // 중복 이벤트 방지를 위한 체크
    if (!document._faqEventListenerAdded) {
        // document에 이벤트 위임으로 FAQ 토글 처리
        document.addEventListener('click', function(e) {
            // FAQ 토글 버튼이 클릭되었는지 확인
            if (e.target.closest('.faq-toggle')) {
                e.preventDefault();
                
                const toggleButton = e.target.closest('.faq-toggle');
                const faqItem = toggleButton.closest('.faq-item');
                
                if (faqItem) {
                    console.log('FAQ item clicked:', faqItem);
                    
                    const alreadyActive = faqItem.classList.contains('active');
                    
                    // 모든 FAQ 항목 닫기
                    const allFaqItems = document.querySelectorAll('.faq-item');
                    allFaqItems.forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    // 클릭한 항목이 이미 열려있지 않으면 열기
                    if (!alreadyActive) {
                        faqItem.classList.add('active');
                        console.log('FAQ item opened');
                    } else {
                        console.log('FAQ item closed');
                    }
                }
            }
            
            // FAQ 질문 영역이 클릭되었는지도 확인 (토글 버튼이 아닌 질문 제목 클릭 시)
            if (e.target.closest('.faq-question') && !e.target.closest('.faq-toggle')) {
                e.preventDefault();
                
                const faqQuestion = e.target.closest('.faq-question');
                const faqItem = faqQuestion.closest('.faq-item');
                
                if (faqItem) {
                    console.log('FAQ question clicked:', faqItem);
                    
                    const alreadyActive = faqItem.classList.contains('active');
                    
                    // 모든 FAQ 항목 닫기
                    const allFaqItems = document.querySelectorAll('.faq-item');
                    allFaqItems.forEach(item => {
                        item.classList.remove('active');
                    });
                    
                    // 클릭한 항목이 이미 열려있지 않으면 열기
                    if (!alreadyActive) {
                        faqItem.classList.add('active');
                        console.log('FAQ item opened via question click');
                    } else {
                        console.log('FAQ item closed via question click');
                    }
                }
            }
        });
        
        document._faqEventListenerAdded = true;
    }
    
    // 초기 FAQ 상태 확인
    setTimeout(() => {
        const faqItems = document.querySelectorAll('.faq-item');
        console.log('FAQ items found after timeout:', faqItems.length);
        
        faqItems.forEach((item, index) => {
            const toggleButton = item.querySelector('.faq-toggle');
            console.log(`FAQ item ${index + 1}:`, item);
            console.log(`FAQ toggle button ${index + 1}:`, toggleButton);
        });
    }, 1000);

    // 프로세스 탭 기능
    const processTabs = document.querySelectorAll('.process-tab');
    const processContents = document.querySelectorAll('.process-content');
    
    processTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const tabId = tab.getAttribute('data-tab') + '-content';
            processTabs.forEach(t => t.classList.remove('active'));
            processContents.forEach(c => c.classList.remove('active'));
            
            tab.classList.add('active');
            const targetContent = document.getElementById(tabId);
            if (targetContent) {
                targetContent.classList.add('active');
            }
        });
    });
    
    // 컨설팅 프로세스 링크 추가 (네비게이션에 추가해야 함)
    const processNavLink = document.querySelector('.nav-menu li:nth-child(2) a');
    if (processNavLink) {
        processNavLink.setAttribute('href', '#process');
        processNavLink.addEventListener('click', function(e) {
            e.preventDefault();
            const processSection = document.querySelector('#process');
            if (processSection) {
                processSection.scrollIntoView({ behavior: 'smooth' });
            }
        });
    }
    
    // 모바일 메뉴에도 컨설팅 프로세스 링크 추가
    const mobileProcessLink = document.querySelector('.mobile-menu-links li:nth-child(2) a');
    const mobileMenu = document.querySelector('.mobile-menu');
    const overlay = document.querySelector('.overlay');
    
    if (mobileProcessLink) {
        mobileProcessLink.addEventListener('click', function(e) {
            e.preventDefault();
            const processSection = document.querySelector('#process');
            if (processSection) {
                processSection.scrollIntoView({ behavior: 'smooth' });
            }
            
            // 모바일 메뉴 닫기
            if (mobileMenu && overlay) {
                mobileMenu.classList.remove('open');
                overlay.classList.remove('show');
            }
        });
    }
}

// DOM이 이미 로드된 경우와 그렇지 않은 경우 모두 처리
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initFaqAndProcessTabs);
} else {
    initFaqAndProcessTabs();
}

// 플랜/가격 섹션 초기화 함수
function initPricingSection() {
    console.log('Initializing pricing section...');
    
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
}

// DOM이 이미 로드된 경우와 그렇지 않은 경우 모두 처리
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initPricingSection);
} else {
    initPricingSection();
}

// 클라이언트 리스트 슬라이드 초기화 함수
function initClientListSlide() {
    console.log('Initializing client list slide...');
    
    const clientLogosWrapper = document.querySelector('.client-logos-wrapper');
    const clientLogosTrack = document.querySelector('.client-logos-track');
    
    if (clientLogosWrapper && clientLogosTrack) {
        console.log('Client logos elements found');
        
        // 창 크기 변경 시 애니메이션 재설정 (모바일/데스크톱 전환 시)
        let resizeTimer;
        window.addEventListener('resize', () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                // 모바일에서만 애니메이션 동작하도록 체크
                if (window.innerWidth <= 768) {
                    clientLogosTrack.style.animation = 'none';
                    // 강제로 reflow 후 다시 애니메이션 적용
                    void clientLogosTrack.offsetWidth;
                    clientLogosTrack.style.animation = '';
                    console.log('Client slide animation reset for mobile');
                }
            }, 200);
        });
        
        // 터치 이벤트로 애니메이션 일시정지/재생 (모바일)
        if ('ontouchstart' in window) {
            clientLogosWrapper.addEventListener('touchstart', () => {
                clientLogosTrack.style.animationPlayState = 'paused';
            });
            
            clientLogosWrapper.addEventListener('touchend', () => {
                clientLogosTrack.style.animationPlayState = 'running';
            });
        }
    } else {
        console.log('Client logos elements not found');
    }
}

// DOM이 이미 로드된 경우와 그렇지 않은 경우 모두 처리
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initClientListSlide);
} else {
    initClientListSlide();
}