import { Routes } from '@angular/router';

const routeConfig: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/accueil/accueil').then(m => m.Accueil),
        title: 'Angers populaire - France insoumise Angers 49',
    },
    {
        path: 'mentions-legales',
        loadComponent: () => import('./features/mention-legales/mention-legales').then(m => m.MentionLegales),
        title: 'France insoumise Angers 49 - Mentions légales',
    },
    {
        path: 'contacter',
        loadComponent: () => import('./features/contacter/contacter').then(m => m.Contacter),
        title: 'France insoumise Angers 49 - Nous contacter',
    },
    {
        path: 'programme',
        loadComponent: () => import('./features/pogramme/pogramme').then(m => m.Pogramme),
        title: 'France insoumise Angers 49 - programme des élections municipales 2026',
    },
    {
        path: 'departement',
        loadComponent: () => import('./features/departement/departement').then(m => m.Departement),
        title: 'France insoumise Angers 49 - le département Maine-et-Loire 49',
    },
    {
        path: 'plan-du-site',
        loadComponent: () => import('./features/plan-du-site/plan-du-site').then(m => m.PlanDuSite),
        title: 'France insoumise Angers 49 - Le plan du site',
    },
];
export default routeConfig;