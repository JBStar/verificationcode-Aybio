(function setupMarquee() {
    const marquee = document.getElementById('marquee');

    // Duplicate contents for seamless loop
    marquee.innerHTML = marquee.innerHTML + marquee.innerHTML;

    // Control animation speed (pixels per second)
    const pxPerSecond = 90; // lower -> slower, higher -> faster

    function setMarqueeDuration() {
        // measure width of all items (half of the duplicated content)
        const children = Array.from(marquee.children);
        // because we duplicated, we'll measure only the first half
        const halfCount = children.length / 2;
        let widthSum = 0;
        for (let i = 0; i < halfCount; i++) {
            widthSum += children[i].getBoundingClientRect().width + parseFloat(getComputedStyle(marquee).gap || 20);
        }
        // Avoid zero or tiny width
        widthSum = Math.max(widthSum, 1);

        // duration so that pxPerSecond speed is roughly maintained
        const duration = widthSum / pxPerSecond; // seconds

        // set CSS animation duration
        marquee.style.animationDuration = duration + 's';
        // ensure end transform (-50%) matches duplication length
        // (we rely on 100% -> -50% in keyframes; duplicated content is 2x)
    }

    // set initial duration after images load (images might affect width)
    // Run after a slight delay and also on resize
    function safeSetDuration() {
        // wait for potential image loads, then measure
        setTimeout(setMarqueeDuration, 120);
    }

    // Pause on hover / focus for accessibility
    marquee.addEventListener('mouseenter', () => marquee.style.animationPlayState = 'paused');
    marquee.addEventListener('mouseleave', () => marquee.style.animationPlayState = 'running');
    marquee.addEventListener('focusin', () => marquee.style.animationPlayState = 'paused');
    marquee.addEventListener('focusout', () => marquee.style.animationPlayState = 'running');

    window.addEventListener('load', safeSetDuration);
    window.addEventListener('resize', safeSetDuration);

    // call immediately in case images are cached
    safeSetDuration();
})();

// Simple addToCart demo (you can replace with real cart logic)
function addToCart(productName, price) {
    // basic lightweight cart count in title bar (visual feedback)
    if (!window.cart) { window.cart = { items: [], total: 0 }; }
    window.cart.items.push({ name: productName, price: price });
    window.cart.total += price;

    // subtle toast-like indicator using alert fallback
    const count = window.cart.items.length;
    // small non-blocking toast:
    showToast(`${productName} added — Cart: ${count} item${count > 1 ? 's' : ''} • $${window.cart.total.toFixed(2)}`);
}

// lightweight toast (vanilla)
function showToast(message, duration = 2200) {
    let toast = document.createElement('div');
    toast.textContent = message;
    toast.style.position = 'fixed';
    toast.style.right = '20px';
    toast.style.bottom = '20px';
    toast.style.background = 'rgba(15,23,42,0.9)';
    toast.style.color = '#fff';
    toast.style.padding = '10px 14px';
    toast.style.borderRadius = '10px';
    toast.style.boxShadow = '0 8px 20px rgba(15,23,42,0.18)';
    toast.style.zIndex = 9999;
    toast.style.fontSize = '.95rem';
    toast.style.opacity = '0';
    toast.style.transition = 'opacity .22s ease, transform .22s ease';
    document.body.appendChild(toast);

    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(-6px)';
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(0)';
        setTimeout(() => toast.remove(), 260);
    }, duration);
}