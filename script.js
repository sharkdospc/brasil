        // JavaScript para animação suave ao rolar para as seções
        document.querySelectorAll('nav a').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                
                window.scrollTo({
                    top: targetSection.offsetTop - 80,
                    behavior: 'smooth'
                });
            });
        });
        
        // Animação para as barras do gráfico
        window.addEventListener('load', function() {
            const bars = document.querySelectorAll('.bar');
            bars.forEach(bar => {
                const originalHeight = bar.style.height;
                bar.style.height = '0%';
                
                setTimeout(() => {
                    bar.style.height = originalHeight;
                }, 500);
            });
        });