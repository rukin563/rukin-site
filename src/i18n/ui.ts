// All interface text lives here, in both languages.
// To change a word on the site, change it here — never inside the page files.

export type Lang = 'pt' | 'en';
export type PageKey = 'home' | 'gallery' | 'shop' | 'about' | 'bio' | 'contact';

// Each page has one URL per language. The PT/EN switch uses this map
// to know which page to jump to, so keep both columns in sync.
export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { pt: '/', en: '/en' },
  gallery: { pt: '/obras', en: '/en/works' },
  shop: { pt: '/loja', en: '/en/shop' },
  about: { pt: '/sobre', en: '/en/about' },
  bio: { pt: '/bio', en: '/en/bio' },
  contact: { pt: '/contato', en: '/en/contact' },
};

export const ui = {
  pt: {
    'site.description': 'Rukin — artista visual de São Paulo. Obras originais e prints.',
    'nav.home': 'Capa',
    'nav.gallery': 'Obras',
    'nav.shop': 'Loja',
    'nav.about': 'Sobre',
    'nav.bio': 'Bio',
    'nav.contact': 'Contato',
    'lang.switch': 'Ver em inglês',

    'home.statement': 'Trabalho com o que se joga fora — objetos e pessoas.',
    'home.intro': 'Artista visual vivendo e trabalhando em São Paulo.',
    'home.seeAll': 'Ver todas as obras',

    'gallery.title': 'Obras',
    'gallery.intro': 'Trabalhos de todos os anos, do mais recente ao mais antigo.',

    'art.available': 'Disponível',
    'art.sold': 'Vendida',
    'art.private': 'Acervo pessoal',
    'art.buy': 'Comprar original',
    'art.prints': 'Comprar print',

    'shop.title': 'Loja',
    'shop.originals': 'Originais',
    'shop.originalsIntro': 'Peças únicas. Pagamento por Pix, cartão ou boleto via Mercado Pago. Envio segurado para todo o Brasil.',
    'shop.prints': 'Produtos',
    'shop.printsIntro': 'Calendários, prints, adesivos e zines.',
    'shop.printsLink': 'Ver todos os prints na Colab55',
    'shop.empty': 'Nenhum original disponível agora. Assine a newsletter para saber quando sair a próxima peça.',
    'shop.policy': 'Trocas e devoluções',
    'shop.back': '← Voltar à loja',
    'shop.specs': 'Ficha técnica',
    'shop.buy': 'Comprar',
    'shop.comingSoon': 'Em breve',
    'shop.photo': 'Foto',

    'cal.buyOne': 'Comprar 1 calendário',
    'cal.kit': 'Kit com {n} calendários',
    'cal.each': 'cada',
    'cal.save': 'economize',
    'cal.shipping': 'Frete incluso para todo o Brasil.',
    'cal.bulk': 'Quer 4 ou mais? Tenho um preço especial.',
    'cal.bulkLink': 'Fale comigo',
    'cal.choose': 'Escolha a quantidade',

    'order.title': 'Fazer pedido',
    'order.intro': 'Preencha seus dados de entrega. Depois você segue para o pagamento no Mercado Pago: Pix, cartão ou boleto.',
    'order.qty': 'Quantidade',
    'order.name': 'Nome completo',
    'order.email': 'E-mail',
    'order.whatsapp': 'WhatsApp (opcional)',
    'order.cpf': 'CPF (opcional, para emissão de nota fiscal)',
    'order.cep': 'CEP',
    'order.street': 'Rua',
    'order.number': 'Número',
    'order.complement': 'Complemento (opcional)',
    'order.district': 'Bairro',
    'order.city': 'Cidade',
    'order.state': 'UF',
    'order.news': 'Quero receber novidades por e-mail',
    'order.privacy': 'Seus dados são usados só para entregar o pedido e, se você informar o CPF, emitir a nota fiscal. Novidades só se você marcar a opção acima.',
    'order.submit': 'Continuar para o pagamento',
    'order.sending': 'Enviando…',
    'order.error': 'Não foi possível enviar. Tente de novo ou escreva para {email}.',

    'about.title': 'Sobre',

    'bio.title': 'Bio',

    'contact.title': 'Contato',
    'contact.intro': 'Encomendas, exposições, parcerias ou só um oi.',
    'contact.name': 'Nome',
    'contact.email': 'E-mail',
    'contact.message': 'Mensagem',
    'contact.send': 'Enviar mensagem',

    'news.title': 'Receba novas obras primeiro',
    'news.text': 'Um e-mail quando uma peça nova ou um lote de prints sair. Nada além disso.',
    'news.placeholder': 'seu@email.com',
    'news.button': 'Assinar',

    'footer.rights': 'Todos os direitos reservados.',
  },
  en: {
    'site.description': 'Rukin — visual artist based in São Paulo. Original artworks and prints.',
    'nav.home': 'Home',
    'nav.gallery': 'Works',
    'nav.shop': 'Shop',
    'nav.about': 'About',
    'nav.bio': 'Bio',
    'nav.contact': 'Contact',
    'lang.switch': 'Ver em português',

    'home.statement': 'I work with what gets thrown away — objects and people alike.',
    'home.intro': 'Visual artist living and working in São Paulo.',
    'home.seeAll': 'See all works',

    'gallery.title': 'Works',
    'gallery.intro': 'Work from every year, newest first.',

    'art.available': 'Available',
    'art.sold': 'Sold',
    'art.private': 'Private collection',
    'art.buy': 'Buy original',
    'art.prints': 'Buy print',

    'shop.title': 'Shop',
    'shop.originals': 'Originals',
    'shop.originalsIntro': 'One-of-a-kind pieces. Pay by card through Mercado Pago. Insured shipping; international orders by request.',
    'shop.prints': 'Products',
    'shop.printsIntro': 'Calendars, prints, stickers, and zines.',
    'shop.printsLink': 'See all prints on Colab55',
    'shop.empty': 'No originals available right now. Join the newsletter to hear when the next piece is out.',
    'shop.policy': 'Returns and exchanges',
    'shop.back': '← Back to shop',
    'shop.specs': 'Details',
    'shop.buy': 'Buy',
    'shop.comingSoon': 'Coming soon',
    'shop.photo': 'Photo',

    'cal.buyOne': 'Buy 1 calendar',
    'cal.kit': 'Set of {n} calendars',
    'cal.each': 'each',
    'cal.save': 'save',
    'cal.shipping': 'Shipping included anywhere in Brazil.',
    'cal.bulk': 'Want 4 or more? I have a special price.',
    'cal.bulkLink': 'Get in touch',
    'cal.choose': 'Choose how many',

    'order.title': 'Order',
    'order.intro': 'Fill in your delivery details, then continue to payment on Mercado Pago: Pix, card or boleto.',
    'order.qty': 'Quantity',
    'order.name': 'Full name',
    'order.email': 'Email',
    'order.whatsapp': 'WhatsApp (optional)',
    'order.cpf': 'CPF (optional, for the invoice)',
    'order.cep': 'CEP (postal code)',
    'order.street': 'Street',
    'order.number': 'Number',
    'order.complement': 'Apartment, unit (optional)',
    'order.district': 'Neighbourhood',
    'order.city': 'City',
    'order.state': 'State',
    'order.news': 'Send me news by email',
    'order.privacy': 'Your details are used only to deliver your order and, if you give your CPF, to issue the invoice. News only if you tick the box above.',
    'order.submit': 'Continue to payment',
    'order.sending': 'Sending…',
    'order.error': 'Could not send. Try again or write to {email}.',

    'about.title': 'About',

    'bio.title': 'Bio',

    'contact.title': 'Contact',
    'contact.intro': 'Commissions, exhibitions, collaborations, or just to say hi.',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.message': 'Message',
    'contact.send': 'Send message',

    'news.title': 'See new work first',
    'news.text': 'One email when a new piece or a batch of prints is released. Nothing else.',
    'news.placeholder': 'you@email.com',
    'news.button': 'Subscribe',

    'footer.rights': 'All rights reserved.',
  },
} as const;

export type UIKey = keyof (typeof ui)['pt'];

export function t(lang: Lang) {
  return (key: UIKey) => ui[lang][key];
}

export function formatBRL(value: number) {
  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value);
}
