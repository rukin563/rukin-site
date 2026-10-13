// All interface text lives here, in both languages.
// To change a word on the site, change it here — never inside the page files.

export type Lang = 'pt' | 'en';
export type PageKey = 'home' | 'gallery' | 'shop' | 'about' | 'contact';

// Each page has one URL per language. The PT/EN switch uses this map
// to know which page to jump to, so keep both columns in sync.
export const routes: Record<PageKey, Record<Lang, string>> = {
  home: { pt: '/', en: '/en' },
  gallery: { pt: '/galeria', en: '/en/gallery' },
  shop: { pt: '/loja', en: '/en/shop' },
  about: { pt: '/sobre', en: '/en/about' },
  contact: { pt: '/contato', en: '/en/contact' },
};

export const ui = {
  pt: {
    'site.description': 'Rukin — artista visual de São Paulo. Obras originais e prints.',
    'nav.home': 'Início',
    'nav.gallery': 'Obras',
    'nav.shop': 'Loja',
    'nav.about': 'Sobre',
    'nav.contact': 'Contato',
    'lang.switch': 'Ver em inglês',

    'home.intro': 'Artista visual vivendo e trabalhando em São Paulo.',
    'home.recent': 'Obras recentes',
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
    'shop.prints': 'Prints',
    'shop.printsIntro': 'Reproduções impressas sob demanda na Colab55, que produz e entrega para você.',
    'shop.printsLink': 'Ver todos os prints na Colab55',
    'shop.empty': 'Nenhum original disponível agora. Assine a newsletter para saber quando sair a próxima peça.',
    'shop.policy': 'Trocas e devoluções',

    'about.title': 'Sobre',

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
    'nav.contact': 'Contact',
    'lang.switch': 'Ver em português',

    'home.intro': 'Visual artist living and working in São Paulo.',
    'home.recent': 'Recent works',
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
    'shop.prints': 'Prints',
    'shop.printsIntro': 'Print-on-demand reproductions made and shipped by Colab55 (Brazil only).',
    'shop.printsLink': 'See all prints on Colab55',
    'shop.empty': 'No originals available right now. Join the newsletter to hear when the next piece is out.',
    'shop.policy': 'Returns and exchanges',

    'about.title': 'About',

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
