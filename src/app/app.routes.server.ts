import { RenderMode, ServerRoute } from '@angular/ssr';

export const serverRoute: ServerRoute[] = [
    {
        path: '',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'mentions-legales',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'contacter',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'programme',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'departement',
        renderMode: RenderMode.Prerender,
    },
    {
        path: 'plan-du-site',
        renderMode: RenderMode.Prerender,
    },
];