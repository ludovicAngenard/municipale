import {Routes} from '@angular/router';

const routeConfig: Routes = [
    {
        path: '',
        loadComponent: () => import('./accueil/accueil').then(m => m.Accueil),
        title: 'Accueil - élection municipale 2026 - Angers populaire - France insoumise',
    },
    {
        path: 'mentions-legales',
        loadComponent: () => import('./mention-legales/mention-legales').then(m => m.MentionLegales),
        title: 'Mentions légales - élection municipale 2026 - Angers populaire - France insoumise',
    },
    {
        path: 'programme',
        loadComponent: () => import('./pogramme/pogramme').then(m => m.Pogramme),
        title: 'Notre programme - élection municipale 2026 - Angers populaire - France insoumise',
    },
];
export default routeConfig;