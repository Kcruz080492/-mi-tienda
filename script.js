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
    
    // Simular envío de datos
    messageDiv.innerHTML = '<span style="color: #ffffff;">¡Gracias por suscribirte! Recibirás nuestras mejores ofertas.</span>';
    
    // Limpiar formulario
    form.reset();
    
}

