(function () {
  const params = new URLSearchParams(window.location.search);
  const origin = params.get('origem') || 'nao_informada';
  const message = document.body.dataset.message || 'Olá! Quero fazer um pedido na Goularte.';
  const product = document.body.dataset.product || 'geral';
  const whatsappUrl = 'https://wa.me/5551984298427?text=' + encodeURIComponent(message);
  document.getElementById('whatsapp-link').href = whatsappUrl;

  gtag('event', 'whatsapp_redirect_' + product, {
    event_category: 'contato',
    event_label: origin,
    product: product,
    transport_type: 'beacon'
  });

  window.setTimeout(function () { window.location.replace(whatsappUrl); }, 1200);
}());
