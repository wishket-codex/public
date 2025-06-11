// HTML 파일을 로드하는 함수
async function loadHTML(elementId, filePath) {
    try {
        const response = await fetch(filePath);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const html = await response.text();
        const element = document.getElementById(elementId);
        if (element) {
            element.innerHTML = html;
        }
    } catch (error) {
        console.error(`Error loading ${filePath}:`, error);
    }
}

// 모든 컴포넌트를 로드하는 함수
async function loadComponents() {
    await Promise.all([
        loadHTML('header-content', 'header.html'),
        loadHTML('main-content', 'main-content.html'),
        loadHTML('footer-content', 'footer.html')
    ]);
    
    // 모든 컴포넌트가 로드된 후 스크립트 실행
    const script = document.createElement('script');
    script.src = 'scripts.js';
    document.body.appendChild(script);
}

// DOM이 로드되면 컴포넌트들을 로드
document.addEventListener('DOMContentLoaded', loadComponents);