gsap.registerPlugin(ScrollTrigger);

// 1. LEAF GENERATOR
const leafFactory = document.getElementById('leaf-factory');

function createLeaf() {
    const leaf = document.createElement('div');
    leaf.className = 'leaf';
    leaf.style.left = Math.random() * 100 + 'vw';
    leafFactory.appendChild(leaf);

    gsap.to(leaf, {
        y: '110vh',
        x: '+=200',
        rotation: Math.random() * 1000,
        duration: 10 + Math.random() * 5,
        ease: "none",
        onComplete: () => leaf.remove()
    });
}

// Jalankan efek daun setiap 500ms
setInterval(createLeaf, 500);

// 2. SMOOTH REVEAL ENGINE
const sections = document.querySelectorAll('.section');

sections.forEach((section) => {
    const items = section.querySelectorAll('.reveal-item');
    
    gsap.to(items, {
        scrollTrigger: {
            trigger: section,
            start: "top 75%",
            end: "top 15%",
            toggleActions: "play reverse play reverse",
            scrub: 1.5 // Ini yang bikin pergerakan mengikuti scroll dengan mulus
        },
        opacity: 1,
        filter: "blur(0px)",
        y: 0,
        scale: 1,
        stagger: 0.3,
        duration: 2,
        ease: "power4.out"
    });
});

// Parallax effect on Knight Background
gsap.to(".knight-bg", {
    scrollTrigger: {
        scrub: true
    },
    y: 200,
    scale: 1.1
});
