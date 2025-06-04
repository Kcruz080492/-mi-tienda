function handleSubscription(event) {
    event.preventDefault();
    
    const form = event.target;
    const email = form.querySelector('input[type="email"]').value;
    const messageDiv = document.getElementById('subscription-message');
    
    // Validación básica
    if (!email || !email.includes('@')) {
        messageDiv.innerHTML = '<span style="color: #ff6b6b;">Por favor, ingresa un email válido.</span>';
        return;
    }
    
    // Simular envío (aquí integrarías con tu backend)
    messageDiv.innerHTML = '<span style="color: #51cf66;">¡Gracias por suscribirte! Recibirás nuestras mejores ofertas.</span>';
    
    // Limpiar formulario
    form.reset();
    
    // Opcional: Enviar a analytics
    // gtag('event', 'newsletter_signup', { email: email });
}

// Mejorar la experiencia de búsqueda
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                // Aquí implementarías la funcionalidad de búsqueda
                console.log('Buscando:', this.value);
            }
        });
    }
});