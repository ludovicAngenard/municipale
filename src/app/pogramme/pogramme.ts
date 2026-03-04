import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Accordeon } from './component/accordeon/accordeon';
import { Theme } from './theme';

@Component({
  selector: 'app-pogramme',
  imports: [Accordeon, RouterLink],
  templateUrl: './pogramme.html',
  styleUrl: './pogramme.scss',
})
export class Pogramme {

  protected themes: Theme[] = [
    {
      titre:'Pour une ville du droit au logement',
      description:"Parce que se loger dignement ne doit jamais être un privilège, nous faisons du droit au logement une priorité municipale. Dans une ville attractive, la hausse des loyers, la spéculation et la multiplication des logements vacants ou touristiques excluent de plus en plus d’habitantes et d’habitants. Nous défendons une politique volontariste pour garantir à chacune et chacun l’accès à un logement abordable, stable et de qualité. Produire des logements sociaux, encadrer les loyers, lutter contre la vacance et mobiliser le parc existant : la ville doit agir concrètement pour faire du logement un droit réel.",
      mesures:[
        "Demander la reconnaissance d’Angers en zone tendue afin de permettre la mise en place de  l’encadrement des loyers",
        "Construire  massivement des logements, grâce aux bailleurs sociaux de la ville",
        "Développer un service d’accompagnement des particuliers pour la rénovation thermique de leur logement : montage de dossiers, recherche de subventions",
        "Systématiser l’anonymisation des dossiers en commissions d’attribution de logements",
        "Développer les outils de préventions contre les expulsions locatives (commission de prévention des impayés locatifs avec les bailleurs, permanence d’aide juridique, médiation)",
        "Lutter contre la déshabitation du parc résidentiel notamment en abaissant la limite de mise en location touristique de la résidence principale à 90 jours et en systématisant les contrôles des loueurs de meublés touristiques et des plateformes numériques",
        "Réserver du foncier et soutenir les projet de logements étudiants, à destination des jeunes actifs, de logements adaptés pour les séniors et d’habitats intergénérationnels",
        "Développer les centres d'hébergement pérennes, en lien avec les structures d’insertion, pour les personnes ne pouvant pas accéder aux logements individuels, dans le but d’assurer que plus personne ne dorme à la rue à Angers.",
        "Développer l’accession sociale à la propriété, notamment grâce au BRS (Bail Réel Solidaire)",
      ]
    },
    {
      titre:"Pour une ville du pouvoir de vivre",
      description:"Face à la hausse du coût de la vie, le pouvoir d’achat est devenu une préoccupation quotidienne pour de nombreuses familles. La municipalité peut et doit agir concrètement pour soulager les dépenses contraintes. En développant des mesures de gratuité pour les services essentiels et en soutenant les mécanismes de solidarité, nous voulons garantir à toutes et tous l’accès aux droits fondamentaux sans condition de revenus. Notre objectif : redonner des marges de manœuvre aux ménages, renforcer la justice sociale et faire de la ville un véritable bouclier face aux inégalités.",
      mesures:[
        "Rendre les transports en commun gratuits progressivement, en priorité pour les publics les plus précaires et vulnérables, notamment les personnes à mobilité réduite, les personnes à faibles revenus ou en recherche d’emploi, les retraités et les jeunes de moins de 25 ans",
        "Engager un audit en vue d’un retour en régie publique du réseau de transport en commun",
        "Instaurer la gratuité de la cantine scolaire avec une alimentation bio et locale",
        "Augmenter les dotations de fonctionnement de chaque école publique à hauteur des besoins afin de rendre gratuites les fournitures et les activités scolaires.",
        "Rendre gratuits les premiers mètres cubes d’eau indispensables à la vie et instaurer une tarification progressive et différenciée selon les usages (professionnels, domestiques, administratifs) et les mésusages (confort, luxe)",
        "Soutenir le développement des ressourceries et engager une réflexion autour de la création d’une ressourcerie municipale permettant la collecte et la valorisation des objets du quotidien en lien avec le tissu associatif local.",
        "Soutenir et développer les épiceries sociales et solidaires par la mise à disposition de locaux",
        "Valoriser et soutenir les commerces en vrac et développer les dispositifs de consigne afin de réduire le coût des denrées alimentaires et de limiter les déchets",
      ]
    },
    {
      titre:"Pour une ville qui prend soin",
      description:"L’accès à la santé ne doit dépendre ni de son lieu de vie, ni de ses revenus. Pourtant, les inégalités territoriales et sociales se creusent, et de plus en plus d’habitantes et d’habitants renoncent à se soigner faute de professionnels disponibles ou de moyens suffisants. La ville a un rôle à jouer pour garantir un égal accès aux soins, en renforçant l’offre de santé de proximité et en soutenant la prévention. Nous voulons faire de la santé un droit effectif pour toutes et tous, en plaçant l’intérêt général au cœur de l’action municipale.",
      mesures:[
        "S’opposer à toute fermeture de lit ou suppression de postes au CHU en s’appuyant sur la fonction de Président du conseil de surveillance du CHU dévolue au Maire",
        "Créer une mutuelle municipale solidaire pour les personnes résidant ou travaillant sur le territoire de la commune",
        "Créer des centres de santé municipaux pour répondre au manque de médecin traitant (médecins salariés, sans dépassement d’honoraires et avec le Tiers Payant Intégral : aucun frais avancés)",
        "Faciliter l’accès aux lieux de soin en rendant gratuit le stationnement aux abords du CHU",
        "Construire un service public du grand âge en développant les résidences autonomie non lucratives pour les seniors, les EHPAD communaux pour répondre au manque de place et les services à la personne (maintien à domicile, portage de repas) accessibles et adaptés",
        "Mettre en place des campagnes de prévention contre les risques (lutte contre les IST, VIH, perte de consentement…) et développer les lieux et campagnes d’information sur les moyens de la santé sexuelle et reproductive (contraception, accès à l’IVG, prévention VIH et Infections sexuellement transmissibles)",
        "S’assurer de la prise en charge dans ces centres de santé des problématiques spécifiques des femmes, et notamment de la prise en charge de l’endométriose et soutenir les dispositifs déjà existants",
        "Former massivement la population aux premiers secours, à tous les âges (de l’école aux EHPAD) afin de diffuser une culture de la vigilance bienveillante et de l’entraide",
        "Favoriser les bourses à matériel médical (fauteuil roulant, planches de transfert…) et ateliers de réparation",
        "Poursuivre et développer les services d’aides aux aidants",
        "Soutenir les acteurs locaux départementaux (CESAME), régionaux (ARS) et associatifs des politiques de santé mentale à l’échelle du territoire d’Angers.",

      ]
    },
    {
      titre:"Pour une ville qui fait grandir",
      description:"Garantir à chaque enfant les meilleures conditions pour grandir, apprendre et s’épanouir est une responsabilité essentielle de la commune. Pourtant, les inégalités sociales et territoriales se retrouvent dès le plus jeune âge, dans l’accès aux modes de garde comme dans les conditions d’accueil à l’école. Nous voulons investir dans les écoles et les crèches publiques, accessibles à toutes les familles, et renforcer les dispositifs d’accompagnement à l’enfance. Faire de l’éducation et de la petite enfance une priorité, c’est agir dès aujourd’hui pour l’égalité des chances et l’avenir de notre ville.",
      mesures:[
        "Se mobiliser contre les fermetures de classe et les suppressions de postes à l’école publique",
        "Porter l’objectif d’un ATSEM à temps plein par classe de maternelle",
        "Supprimer les aides extra légales à l’enseignement privé",
        "Rénover les écoles publiques pour garantir à tous les élèves de bonnes conditions d’étude (locaux isolés, accessibles) et accélérer la végétalisation des cours d’école",
        "Intégrer une vraie option végétarienne pour chaque repas dans la restauration scolaire, instaurer un repas végétarien pour tou·tes par semaine et accélérer la transition vers une alimentation bio et locale",
        "Développer les activités artistiques, culturelles et sportives dans les centres de loisirs, les écoles et les crèches en lien avec les associations et artistes du territoire",
        "Former les personnels de crèche, périscolaires et intervenant·es sur le temps scolaire à la prévention des violences éducatives",
        "Adhérer au « Réseau villes amies des enfants » et nommer un adjoint en charge des droits de l’enfant",
        "Créer un nombre suffisant de places en crèche afin de garantir à chaque parent une solution de garde, notamment pour les horaires atypiques et arrêter de recourir aux opérateurs privés lucratifs pour favoriser les structures d’accueil de la petite enfance publiques et associatives",
        "Renforcer l’attractivité des métiers de la petite enfance en se rapprochant des réseaux d'organismes de formation apte à créer un vivier de compétences disponibles et qualifiées, revaloriser la rémunération par le versement d’une prime d’attractivité de 100€ pour les personnels des crèches municipales",
        "Sécuriser les abords des écoles par la piétonisation et les trajets vers l’école par des « cheminements verts » : relier entre eux par des voies piétonnes des espaces verts et terrains de jeux afin de desservir les établissements scolaires et diminuer la place de l’automobile à proximité immédiate de l’école et développer les modes doux et collectifs (pédibus, vélobus…) pour les déplacements des enfants",
      ]
    },
    {
      titre:"Pour une ville citoyenne",
      description:"La démocratie locale ne peut se résumer à un rendez-vous électoral tous les six ans. Face à la défiance grandissante envers les institutions, nous voulons redonner du pouvoir aux habitantes et aux habitants, et faire vivre la participation citoyenne au quotidien. Transparence des décisions, co-construction des projets, budgets participatifs, consultations régulières : la ville doit devenir un espace de débat, d’initiative et de contrôle démocratique. Notre ambition est claire : bâtir une démocratie vivante, exigeante et partagée.",
      mesures:[
        "Donner aux citoyen·nes la possibilité d’organiser un référendum d’initiative citoyenne dont le conseil municipal s’engage à respecter le résultat, sous réserve d’une participation minimale, dès lors qu’une pétition réunissant au moins 10 % des habitant·es est constituée.",
        "Donner aux citoyen·nes la possibilité d’organiser une pétition qui, si elle réunit au moins 5 % des habitant·es, est défendue en conseil municipal et donne lieu à une réponse du conseil.",
        "Augmenter les moyens alloués aux budgets participatifs",
        "Ouvrir l’ensemble des instances participatives aux mineur·es de plus de 16 ans et aux étranger·es résidant sur le territoire communal",
        "Mettre en place une représentation des usager·es au sein des organes de gestion des services publics",
        "Attribuer une délégation relative à la condition animale à un·e membre du conseil municipal",
        "Associer l’ensemble des agent·es municipaux à l’élaboration des projets et des politiques municipales (projets de service…) et développer la formation des agent·es territoriaux pour accompagner l’évolution des services",
        "Sortir des GAFAM en privilégiant les solutions open-sources pour assurer la souveraineté numérique de la collectivité",
      ]
    },
    {
      titre:"Pour une ville inclusive ",
      description:"Les discriminations fragilisent le lien social et empêchent trop souvent l’égalité réelle entre habitantes et habitants. Qu’elles soient liées à l’origine, au genre, au handicap, à l’orientation sexuelle ou à la situation sociale, elles se manifestent dans l’accès à l’emploi, au logement, aux services publics ou à l’espace urbain. Nous voulons faire de la ville un territoire pleinement inclusif, où chacune et chacun a sa place. En soutenant les initiatives de lutte contre les discriminations, en adaptant l’espace public et en garantissant l’accès aux droits, nous agirons pour une ville plus juste, ouverte et accueillante pour toutes et tous.",
      mesures:[
        "Créer un Observatoire communal des discriminations, contre le racisme, le sexime, l’islamophobie l’antisémitisme...",
        "Constituer le 	Maire en partie civile lors de tout dépôt de plainte d’une victime de discriminations, d’antisémitisme, de racisme, de sexisme, de LGBTIphobies...",
        "Soutenir financièrement les associations de lutte contre les discriminations",
        "Engager un plan de rattrapage pour garantir l’égalité salariale entre les femmes et les hommes employé·es par la collectivité",
        "S’assurer de l’accessibilité de toutes les communications institutionnelles (langage facile à lire et à comprendre, sous titrage, LSF, version audio, usage du braille) et atteindre le 100 % de services numériques accessibles pour tous",
        "Porter un objectif zéro lieu et lancer un audit complet de la ville afin de développer un plan pluriannuel d’accessibilité des locaux",
        "Former les agent·es en lien avec le public à l’accueil des personnes en situation de handicap",
        "Créer des zones de repos et d’accès aux droits pour les livreurs de platformes",
      ]
    },
    {
      titre:"Pour une ville de l’emploi et de l’activité partagée",
      description:"Le travail et l’activité économique sont au cœur de la vitalité de notre ville. Pourtant, l’accès à l’emploi reste inégal selon les quartiers, et le tissu économique de proximité est fragilisé par les logiques de concentration. Nous voulons soutenir une économie locale, sociale, solidaire, créatrice d’emplois durables. En défendant le maintien et le développement du petit commerce dans tous les quartiers, nous faisons le choix d’une ville plus vivante, plus accessible et plus juste, où l’activité économique profite à toutes et tous.",
      mesures:[
        "Créer, au niveau intercommunal, un service d’aide aux entreprises et producteurs locaux pour leur permettre de répondre plus facilement aux marchés publics",
        "Insérer des clauses sociales, écologiques et de production locale dans tous les marchés publics, ajouter des clauses environnementales (critère carbone, labels, indices de durabilité et réparabilité) à chaque achat municipal et introduire des critères pour la création d’emplois locaux dans tous les appels d’offres",
        "S’engager dans la démarche « Territoire Zéro Chômeur » et créer des entreprises à but d’emplois",
        "Favoriser l’installation d’entreprises de production (artisanat, industrie) pour assurer le maintien et le développement d’activités",
        "Aider l’installation ou le maintien de petits commerces (librairies, boulangeries, boucheries, épiceries, maraîchers, cafés…) dans tous les quartiers en aidant l’accès à des locaux",
        "S’opposer à toute création ou développement de centres commerciaux en périphérie, destructeurs des commerces de ville",
        "Moduler la taxe foncière afin de promouvoir les commerces de proximité",
        "Développer des initiatives en faveur de l’orientation et de l’accès à l’emploi des jeunes : bourses aux stages, forums, aide à la rédaction de CV et à l’orientation ...",
        "Créer et soutenir les structures d’insertion par l’activité économique (régies de quartier, ateliers et chantiers d’insertion, marchés publics réservés, accompagnement…)",
        "Revaloriser les agents municipaux avec par le paiement effectif des heures supplémentaires, un plan de titularisation et la lutte contre le temps partiel subi",
      ]
    },
    {
      titre:"Pour une ville sûre et apaisée",
      description:"La sûreté est un droit fondamental et une condition indispensable pour bien vivre ensemble. Elle repose sur une action publique de proximité, attentive aux réalités de chaque quartier et aux besoins des habitantes et habitants. Nous défendons le renforcement d’une police municipale de proximité, le développement de la médiation et des politiques de prévention pour apaiser et prévenir les situations à risque. Assurer la tranquillité publique, c’est agir en amont, retisser du lien et garantir à toutes et tous un cadre de vie serein et sécurisé.",
      mesures:[
        "Exiger le maintien ou l’augmentation des effectifs de la police nationale et de gendarmerie et développer une police municipale de proximité œuvrant à la sécurité, la prévention et à la tranquillité des habitant·es",
        "Développer l’emploi de médiateur·rices, de jour et de nuit, ainsi que d’éducateur·rices de rue, soutenir les clubs de prévention",
        "Refuser l’armement létal des policiers municipaux",
        "Privilégier la présence humaine, instaurer un moratoire sur la vidéosurveillance coûteuse et liberticide, réaliser un audit financier et des études indépendantes pour évaluer l’efficacité réelle de ce dispositif",
        "Proposer des formations régulières ouvertes à tous pour alerter sur les risques de la consommation des différents stupéfiants en circulation, mais aussi permettre aux parents de repérer des signes avant-coureurs de fragilité pour leurs enfants, qu’ils s’agissent de l’entrée dans la consommation ou dans les trafics",
        "Développer des campagnes de prévention et de sensibilisation aux dangers des addictions : tabac, drogues, alcool, jeux...",
        "Créer, développer et soutenir un lieu d’accueil d’urgence pour femmes victimes de violence avec ou sans enfant",
        "Assurer un service d’urgence juridique et d’hébergement pour les femmes victimes en coordination avec les associations, pour lutter contre la nette augmentation des violences intra familiales dans le Maine-et-Loire",
      ]
    },
    {
      titre:"Pour une ville du temps libéré",
      description:"Le temps libre est essentiel pour se détendre, se cultiver, se dépasser et tisser du lien social. Pourtant, toutes et tous n’ont pas le même accès aux activités sportives, culturelles ou associatives. Nous voulons que chacune et chacun puisse profiter pleinement de ses loisirs, en soutenant un tissu associatif dynamique, des équipements accessibles et des initiatives locales variées. Faire du sport, de la culture et de l’engagement associatif des leviers du temps libre, c’est permettre à toutes et tous de s’épanouir et renforcer le vivre-ensemble",
      mesures:[
        "Appliquer le 1 % artistique, c’est-à-dire la commande d’oeuvres d’art dans la construction et la rénovation de chaque bâtiment public et prévoir des actions de médiation culturelle autour des oeuvres installées",
        "Créer des Maisons de jeunesse et de la culture (MJC), lieux de mixité culturelle et d’éducation populaire, et développer des partenariats avec les centres sociaux, équipement culturels, associations et artistes locaux",
        "Mettre à disposition d’artistes les lieux vacants pour proposer des espaces de création, de fabrique, de recherche, d’exposition, d’expression, d’universités populaires, permanents ou non",
        "Soutenir les artistes et équipes artistiques locales, notamment émergentes, grâce à des financements dédiés, la programmation culturelle municipale, la commande publique et le développement de fonds municipaux alimentant des artothèques",
        "Rénover et construire des équipements sportifs publics de proximité",
        "Favoriser la gratuité et la tarification sociale des équipements sportifs et mettre en place un dispositif gratuit d’apprentissage de la natation dès le plus jeune âge",
        "Valoriser et permettre l’accès au sport au plus grand nombre à travers un événement annuel permettant de faire découvrir les associations sportives (fête du sport, fête des associations…)",
      ]
    },
    {
      titre:"Pour une ville à taille humaine et accessible",
      description:"Se déplacer facilement et sereinement est un droit quotidien qui conditionne l’accès à l’emploi, aux services et à la vie sociale. Nous voulons penser notre ville comme un territoire à taille humaine, où les mobilités sont sûres, durables et accessibles à toutes et tous. Cela passe par des transports publics performants et gratuits, des circulations douces sécurisées, et un aménagement du territoire qui rapproche les quartiers, les emplois, les commerces et les services. Faire des mobilités un outil de qualité de vie, c’est construire une ville plus fluide, plus écologique et plus solidaire",
      mesures:[
        "Avoir pour objectif de faire d’Angers une ville du quart d’heure : à 15 minutes maximum de chez soi en transports doux (marche, vélo, transports en commun) des commerces, des services, des lieux de soin, des espaces verts, des lieux sportifs et culturels…afin de redynamiser les quartiers et limiter les besoins en déplacement",
        "Repenser les déplacement en renforçant la desserte et la densité des réseaux de transports en commun sur toute la commune et en développant les pistes cyclables sécurisées pour favoriser les modes de déplacement les moins polluant et en organiser  les schémas de circulation en faisant la part belle aux rues piétonnes en concertation avec les habitants",
        "Développer à l’entrée d’Angers les plateformes multimodales, notamment connectées au réseau ferré, pour réduire le trafic et la pollution de l’air ; développer les aires et places de stationnement pour le covoiturage et les pistes cyclables",
        "Réduire la publicité urbaine au profit d’informations culturelles, publiques et d’accès aux droits",
        "Proposer un plan de développement des îlots de fraîcheur végétaux contre les effets des canicules et un plan de renaturation d’une partie des sols pour lutter contre les inondations et les ruissellements",
        "Ouvrir un débat pour déterminer les moyens d’atteindre l’objectif de zéro artificialisation nette d’ici 2050, notamment en menant une réflexion sur la valorisation des friches (dépollution, préservation, utilisation artisanale et/ou agricole…)",
        "Développer les jardins partagés, ouverts, conviviaux, pour recréer du lien social, renouer avec la nature en ville et replanter des arbres fruitiers en milieu urbain en mélangeant les espèces régionales et les espèces adaptées à l’évolution prévisible du climat sur 30 ans",
        "Augmenter les effectifs municipaux en charge de l’entretien des espaces verts et de la propreté afin d’offrir à tous les angevins une ville propre, apaisée et épanouissante",
        "Rendre la ville à ses habitants en aménageant les espaces comme de réels lieux de vie (des espaces de rencontre, des bancs, des city-stades…) et en supprimant les dispositifs anti-sdf",
        "Adopter un plan de développement des énergies renouvelables",
      ]
    },
  ]
}

