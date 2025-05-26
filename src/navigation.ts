import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Inicio',
      href: '#',
    },
    {
      text: 'Servicios',
      href: getPermalink('/#features')
        
    },
    {
      text: 'Beneficios',
      href: getPermalink('/#Beneficios')
    },
    {
      text: 'Proyectos',
      links: [
        {
          text: 'Nuestras Paginas',
          href: getBlogPermalink(),
        },
        {
          text: 'Paginas Detalladas',
          href: getPermalink('get-started-website-with-astro-tailwind-css', 'post'),
        },
      ],
    },
    {
      text: 'Nosotros',
      href: '/#Nosotros',
    },
  ],
  actions: [{ text: 'Asesoría Personalizada', href: 'https://wa.me/3137863327', target: '_blank' }],
};

export const footerData = {
  links: [
    {
      title: 'Información de Contacto',
      links: [
        { text: 'Teléfono: (+57) 3137863327', href: 'https://wa.me/3137863327', target: '_blank' },
        { text: 'Email: bluetunnelsaas@gmail.com' },
        { text: 'Dirección: Pereira, Colombia', href: 'https://maps.app.goo.gl/XgeXjggf1dy1RRh48', target: '_blank' },
        { text: 'WhatsApp: Chatea con nosotros', href: 'https://wa.me/3137863327', target: '_blank' },
      ],
    },
    {
      title: 'Enlaces Rapidos',
      links: [
        { text: 'Inicio', href: '#' },
        { text: 'Servicios', href: '/#features' },
        { text: 'Beneficios', href: '/#Beneficios' },
        { text: 'Proyectos', href: getBlogPermalink() },
        { text: 'Nosotros', href: '/#Nosotros' },
      ],
    },
    {
      title: 'Redes Sociales',
      links: [
        { text: 'Instagram', href: 'https://www.instagram.com/bluetunnelsaas/', target: '_blank' },
        { text: 'TikTok', href: 'https://www.tiktok.com/@bluetunnelsaas', target: '_blank' },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'Tiktok', icon: 'tabler:brand-x', href: 'https://www.tiktok.com/@bluetunnelsaas', target: '_blank' },
    { ariaLabel: 'Instagram', icon: 'tabler:brand-instagram', href: 'https://www.instagram.com/bluetunnelsaas/', target: '_blank' },
    /*{ ariaLabel: 'Facebook', icon: 'tabler:brand-facebook', href: '#' },*/
  ],
  footNote: `
    <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://img.icons8.com/?size=100&id=62999&format=png&color=228BE6" alt="onWidget logo" loading="lazy"></img>
    Creado por <a class="text-blue-600 underline dark:text-muted" href="https://www.instagram.com/bluetunnelsaas/"> © 2025 Blue Tunnel </a> Todos los derechos reservados.
  `,
};
