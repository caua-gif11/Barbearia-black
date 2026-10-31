const photo = (id, w = 1000) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;
const gallery = [
  ['photo-1503951914875-452162b0f3f1', 'Corte com textura'],
  ['photo-1621605815971-fbc98d665033', 'Barba e acabamento'],
  ['photo-1622286342621-4bd786c2447c', 'Detalhe de precisão'],
  ['photo-1599351431202-1e0f0137899a', 'Estilo contemporâneo'],
  ['photo-1517832606299-7ae9b720a186', 'Cuidado em cada detalhe'],
  ['photo-1593702275687-f8b402bf1fb5', 'Referência de estilo'],
].map(([id, title]) => ({ src: photo(id), title }));
const icon = (name, size = 18) => {
  const paths = {
    arrow: '<path d="M5 12h14M12 5l7 7-7 7"/>',
    pin: '<path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z"/><circle cx="12" cy="10" r="2.5"/>',
    message: '<path d="M21 11.5a8.4 8.4 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.4 8.4 0 0 1-3.8-.9L3 21l1.9-5.7a8.4 8.4 0 0 1-.9-3.8A8.5 8.5 0 0 1 8.7 4a8.4 8.4 0 0 1 3.8-.9h.5a8.5 8.5 0 0 1 8 8v.4Z"/>',
    close: '<path d="m18 6-12 12M6 6l12 12"/>',
    menu: '<path d="M4 6h16M4 12h16M4 18h16"/>',
    up: '<path d="m18 15-6-6-6 6"/>',
  };
  return `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name]}</svg>`;
};
const addressQuery = 'Rua+Braz%C3%ADlio+de+Souza+Leite%2C+56%2C+Jardim+Camila%2C+Mogi+das+Cruzes%2C+SP%2C+08715-630';
const mapUrl = `https://www.google.com/maps/search/?api=1&query=${addressQuery}`;
const whatsappUrl = 'https://wa.me/5511971334142?text=Ol%C3%A1%21%20Encontrei%20a%20Barbearia%20Black%20pelo%20site%20e%20gostaria%20de%20mais%20informa%C3%A7%C3%B5es.';
const logo = './public/images/barbearia-black-logo.jpg';
const heroImage = './public/images/barber-reference.jfif';
const services = [
  ['01', 'Cortes masculinos', 'Referências do clássico ao atual, sempre com personalidade.', 'photo-1503951914875-452162b0f3f1'],
  ['02', 'Barba', 'Um visual alinhado começa no cuidado com cada detalhe.', 'photo-1621605815971-fbc98d665033'],
  ['03', 'Acabamento', 'Precisão e estilo para finalizar o seu visual.', 'photo-1622286342621-4bd786c2447c'],
  ['04', 'Combos', 'Uma proposta de cuidado completo, do cabelo à barba.', 'photo-1599351431202-1e0f0137899a'],
];

document.getElementById('root').innerHTML = `
  <div class="concept-note"><span class="concept-dot"></span> CONCEITO DE SITE <span class="concept-divider">/</span> DEMONSTRAÇÃO NÃO OFICIAL</div>
  <header class="site-header">
    <a class="logo-link" href="#inicio" aria-label="Barbearia Black, início"><img src="${logo}" alt="Barbearia Black — Mogi das Cruzes, barba, cabelo e bigode"></a>
    <button class="menu-toggle" type="button" aria-label="Abrir menu">${icon('menu', 22)}</button>
    <nav class="main-nav" aria-label="Navegação principal"><a href="#conceito">A barbearia</a><a href="#servicos">Serviços</a><a href="#galeria">Galeria</a><a href="#localizacao">Localização</a></nav>
    <a class="header-contact" href="#contato">Fale com a barbearia ${icon('arrow', 15)}</a>
  </header>
  <main>
    <section class="hero" id="inicio">
      <div class="hero-photo" role="img" aria-label="Referência ilustrativa de corte em barbearia" style="background-image:url('${heroImage}')"><span class="photo-credit">IMAGEM ILUSTRATIVA</span></div>
      <div class="hero-copy"><div class="hero-kicker"><span></span> MOGI DAS CRUZES · SP</div>
        <div class="hero-title-lockup"><span class="hero-overline">BARBEARIA</span><h1>BLACK<span class="hero-period">.</span></h1></div>
        <p class="hero-location">Mogi Moderno</p><div class="hero-rule"></div>
        <h2>SEU ESTILO.<br><em>SUA IDENTIDADE.</em></h2>
        <p class="hero-description">Uma experiência de barbearia que valoriza cada detalhe.</p>
        <div class="hero-actions"><a class="button button-primary" href="#servicos">Conheça a proposta ${icon('arrow', 16)}</a><a class="button button-text" href="#localizacao">${icon('pin', 16)} Como chegar</a></div>
        <div class="hero-footnote"><span class="footnote-line"></span> BARBA · CABELO · BIGODE</div>
      </div>
      <div class="hero-vertical">MOGI MODERNO <span>·</span> SÃO PAULO</div>
      <a class="hero-scroll" href="#conceito"><span>DESCUBRA</span><b>↓</b></a>
    </section>
    <section class="intro section-wrap" id="conceito"><div class="section-label reveal"><span>01</span><i></i> A ESSÊNCIA BLACK</div><div class="intro-main reveal"><p class="eyebrow">TRADIÇÃO NO OFÍCIO. PERSONALIDADE NO ESTILO.</p><h2>Mais que um corte.<br><em>Uma marca pessoal.</em></h2></div><div class="intro-aside reveal"><p>Uma proposta digital para apresentar a Barbearia Black de um jeito que combina com a força da marca: autêntico, acolhedor e cheio de atitude.</p><a class="inline-link" href="#servicos">Explore o conceito ${icon('arrow', 15)}</a></div></section>
    <section class="services section-wrap" id="servicos"><div class="section-top reveal"><div><div class="section-label"><span>02</span><i></i> CUIDADO E ESTILO</div><h2>Um clássico que<br><em>se reinventa.</em></h2></div><p>Ideias de categorias para esta demonstração. Serviços e valores precisam ser confirmados diretamente com a barbearia.</p></div><div class="service-grid">${services.map(([num,title,copy,img],i)=>`<article class="service-card reveal" style="--delay:${i*80}ms"><div class="service-image" style="background-image:url('${photo(img,800)}')"><span class="service-num">${num}</span></div><div class="service-copy"><h3>${title}</h3><p>${copy}</p><div class="service-meta"><span>VALOR A CONFIRMAR COM A BARBEARIA</span><span class="service-arrow">↗</span></div></div></article>`).join('')}</div><p class="section-disclaimer"><span>✳</span> Categorias ilustrativas. Consulte a barbearia para confirmar disponibilidade e valores.</p></section>
    <section class="brand-break"><div class="brand-break-image" style="background-image:url('${photo('photo-1519501025264-65ba15a82390',1800)}')"></div><div class="brand-break-overlay"></div><div class="brand-break-content reveal"><img src="${logo}" alt="" class="break-logo"><p>Barba, cabelo<br><em>& bigode.</em></p><span>BARBEARIA BLACK · MOGI DAS CRUZES</span></div></section>
    <section class="gallery-section section-wrap" id="galeria"><div class="gallery-heading reveal"><div><div class="section-label"><span>03</span><i></i> INSPIRAÇÃO</div><h2>Estilo em<br><em>perspectiva.</em></h2></div><p>Uma seleção de referências visuais para ilustrar a direção criativa deste conceito.</p></div><div class="gallery-grid">${gallery.map((item,i)=>`<button class="gallery-item gallery-item-${i+1} reveal" style="--delay:${i*60}ms;background-image:url('${item.src}')" data-index="${i}" aria-label="Ampliar referência: ${item.title}"><span>${item.title}<b>+</b></span></button>`).join('')}</div><p class="gallery-disclaimer">IMAGENS DE REFERÊNCIA · NÃO REPRESENTAM TRABALHOS REALIZADOS PELA BARBEARIA</p></section>
    <section class="contact-band" id="contato"><div class="contact-inner reveal"><div class="contact-emblem"><span>B</span></div><div class="contact-copy"><div class="section-label"><i></i> FALE COM A BARBEARIA</div><h2>Vamos cuidar<br><em>do seu estilo?</em></h2><p>Chame a Barbearia Black pelo WhatsApp e consulte os detalhes diretamente.</p></div><a class="button button-primary whatsapp-button" href="${whatsappUrl}" target="_blank" rel="noopener noreferrer">${icon('message', 17)} Conversar pelo WhatsApp ${icon('arrow', 15)}</a></div></section>
    <section class="location section-wrap" id="localizacao"><div class="location-copy reveal"><div class="section-label"><span>04</span><i></i> MOGI MODERNO</div><h2>Nos vemos<br><em>por aqui.</em></h2><p class="address-line">${icon('pin',18)}<span>Rua Brazílio de Souza Leite, 56<br>Jardim Camila · Mogi das Cruzes — SP<br>CEP 08715-630</span></p><a class="button button-outline" href="${mapUrl}" target="_blank" rel="noreferrer">Abrir no Google Maps ${icon('arrow',15)}</a></div><a class="map-card reveal" href="${mapUrl}" target="_blank" rel="noreferrer" aria-label="Abrir endereço no Google Maps"><div class="map-lines"></div><span class="map-neighborhood">JARDIM CAMILA</span><span class="map-road-label">R. BRAZÍLIO DE SOUZA LEITE</span><span class="map-marker">${icon('pin', 21)}</span><span class="map-open">VER LOCALIZAÇÃO ${icon('arrow',14)}</span></a></section>
  </main>
  <footer class="footer"><div class="footer-main"><a href="#inicio" class="footer-logo"><img src="${logo}" alt="Logo Barbearia Black"></a><div class="footer-tagline">BARBA. CABELO.<br><em>BIGODE.</em></div><div class="footer-address">MOGI MODERNO<br>MOGI DAS CRUZES · SP</div></div><div class="footer-bottom"><span>© 2026 Barbearia Black — Mogi Moderno</span><span>PROJETO CONCEITUAL · DEMONSTRAÇÃO NÃO OFICIAL</span><a href="#inicio">VOLTAR AO TOPO ↑</a></div></footer>
  <button class="back-top" type="button" aria-label="Voltar ao topo" hidden>${icon('up',18)}</button>
  <div class="lightbox" role="dialog" aria-modal="true" aria-label="Galeria de referências" hidden><button class="lightbox-close" aria-label="Fechar">${icon('close')}</button><button class="lightbox-prev" aria-label="Imagem anterior">‹</button><img alt=""><button class="lightbox-next" aria-label="Próxima imagem">›</button><div class="lightbox-caption"></div></div>`;

const nav = document.querySelector('.main-nav');
const menuToggle = document.querySelector('.menu-toggle');
menuToggle.addEventListener('click', () => { const open = nav.classList.toggle('nav-open'); menuToggle.innerHTML = icon(open ? 'close' : 'menu', 22); menuToggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu'); });
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => { nav.classList.remove('nav-open'); menuToggle.innerHTML = icon('menu',22); menuToggle.setAttribute('aria-label','Abrir menu'); }));
const lightbox = document.querySelector('.lightbox'); let activePhoto = 0;
function showPhoto(index) { activePhoto = (index + gallery.length) % gallery.length; const item = gallery[activePhoto]; lightbox.querySelector('img').src = item.src; lightbox.querySelector('img').alt = item.title; lightbox.querySelector('.lightbox-caption').textContent = `${item.title} · referência visual conceitual`; lightbox.hidden = false; document.body.style.overflow = 'hidden'; }
function closeLightbox() { lightbox.hidden = true; document.body.style.overflow = ''; }
document.querySelectorAll('.gallery-item').forEach(button => button.addEventListener('click', () => showPhoto(Number(button.dataset.index))));
lightbox.addEventListener('click', event => { if (event.target === lightbox || event.target.closest('.lightbox-close')) closeLightbox(); if (event.target.closest('.lightbox-prev')) showPhoto(activePhoto-1); if (event.target.closest('.lightbox-next')) showPhoto(activePhoto+1); });
document.addEventListener('keydown', event => { if (lightbox.hidden) return; if (event.key === 'Escape') closeLightbox(); if (event.key === 'ArrowLeft') showPhoto(activePhoto-1); if (event.key === 'ArrowRight') showPhoto(activePhoto+1); });
const backTop = document.querySelector('.back-top'); window.addEventListener('scroll', () => backTop.hidden = window.scrollY < 520, {passive:true}); backTop.addEventListener('click', () => window.scrollTo({top:0,behavior:'smooth'}));
if ('IntersectionObserver' in window) { const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } }), {threshold:.1}); document.querySelectorAll('.reveal').forEach(el => observer.observe(el)); } else document.querySelectorAll('.reveal').forEach(el => el.classList.add('visible'));
