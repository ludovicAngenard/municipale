import { Routes } from '@angular/router';

const routeConfig: Routes = [
    {
        path: '',
        loadComponent: () => import('./features/accueil/accueil').then(m => m.Accueil),
        title: 'Angers populaire - élections municipales le 15 et 22 mars 2026 - France insoumise',
    },
    {
        path: 'mentions-legales',
        loadComponent: () => import('./features/mention-legales/mention-legales').then(m => m.MentionLegales),
        title: 'Mentions légales - élections municipales le 15 et 22 mars 2026 - Angers populaire - France insoumise',
    },
    {
        path: 'contacter',
        loadComponent: () => import('./features/contacter/contacter').then(m => m.Contacter),
        title: 'Mentions légales - élections municipales le 15 et 22 mars 2026 - Angers populaire - France insoumise',
    },
    {
        path: 'programme',
        loadComponent: () => import('./features/pogramme/pogramme').then(m => m.Pogramme),
        title: 'Notre programme - élections municipales le 15 et 22 mars 2026 - Angers populaire - France insoumise',
    },
    {
        path: 'departement',
        loadComponent: () => import('./features/departement/departement').then(m => m.Departement),
        title: 'Notre programme - élections municipales le 15 et 22 mars 2026 - Angers populaire - France insoumise',
    },
    {
        path: 'plan-du-site',
        loadComponent: () => import('./features/plan-du-site/plan-du-site').then(m => m.PlanDuSite),
        title: 'Notre programme - élections municipales le 15 et 22 mars 2026 - Angers populaire - France insoumise',
    },
];
export default routeConfig;