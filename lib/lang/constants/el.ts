import { Translations } from "../types/lang.types";

export const el: Translations = {
  nav: {
    projects: "Έργα",
    about: "Σχετικά",
    timeline: "Πορεία",
    contact: "Επικοινωνία",
    available: "Διαθέσιμος για εργασία",
  },
  hero: {
    label: "Full Stack Μηχανικός",
    headline:
      "Δημιουργώ κλιμακούμενες ψηφιακές εμπειρίες με σύγχρονες τεχνολογίες",
    sub: "Full Stack Μηχανικός με 5+ χρόνια εμπειρία στη δημιουργία εφαρμογών υψηλής απόδοσης, APIs και προϊόντων για τελικούς χρήστες.",
    cta_primary: "Δες τα έργα",
    cta_secondary: "Επικοινωνήστε",
    stat_years: "Χρόνια εμπειρίας",
    stat_projects: "Ολοκληρωμένα έργα",
    stat_clients: "Ικανοποιημένοι πελάτες",
    badge: "Ανοιχτός σε ευκαιρίες",
  },
  about: {
    label: "Σχετικά",
    heading: "Δημιουργώ κομψές λύσεις σε σύνθετα προβλήματα",
    p1: "Είμαι πραγματιστής μηχανικός με εστίαση στο frontend και 5+ χρόνια εμπειρία σε full-stack εφαρμογές, αρχιτεκτονική ομάδων και φιλόδοξα καταναλωτικά προϊόντα.",
    p2: "Νοιάζομαι βαθιά για την τέχνη: καθαρά APIs, ολοκληρωμένα design systems και αποστολή προϊόντων που δουλεύουν σε κλίμακα. Συνεργάζομαι με startups και εταιρείες για να μετατρέπω ασαφή προβλήματα σε κομψές λύσεις.",
    cta_projects: "Δες έργα",
    cta_more: "Περισσότερα →",
    currently: "Χρησιμοποιώ τώρα",
  },
  expertise: {
    label: "Δεξιότητες",
    heading: "Τεχνική Εξειδίκευση",
    sub: "Εξειδικευμένος σε ολόκληρο το stack — από γρήγορες, λειτουργικές εφαρμογές έως σύνθετα συστήματα.",
    card1: {
      title: "React, Next.js, TypeScript, Redux, Styled Components, Vite",
      desc: "Δημιουργία ισχυρών βιβλιοθηκών components και κλιμακούμενων frontend αρχιτεκτονικών.",
    },
    card2: {
      title: "Node.js & APIs",
      desc: "Σχεδιασμός εφαρμογών υψηλής απόδοσης και κλιμακούμενων REST / GraphQL APIs.",
    },
    card3: {
      title: "Cloud & DevOps",
      desc: "Εκτεταμένη εμπειρία σε cloud υποδομή, CI/CD pipelines και DevOps πρακτικές.",
    },
    card4: {
      title: "PostgreSQL · Redis · MongoDB",
    },
    card5: {
      title: "Testing & Ποιότητα",
      desc: "Jest, Playwright, Vitest — γιατί ο κώδικας που αξίζει είναι αυτός που δουλεύει.",
    },
    card6: {
      title: "Analytics & Απόδοση",
    },
    learn_more: "Μάθε περισσότερα →",
  },
  projects: {
    label: "Εργασία",
    heading: "Επιλεγμένα Έργα",
    sub: "Μία επιλογή πρόσφατης εργασίας που καλύπτει full-stack ανάπτυξη και design.",
    view_project: "Δες το έργο",
    view_all: "Όλα τα έργα",
    project1: {
      title: "Πλατφόρμα Αυθεντικοποίησης",
      desc: "Πλατφόρμα αυθεντικοποίησης παραγωγικού επιπέδου με OAuth, MFA και έλεγχο πρόσβασης. Σχεδιασμένη για κλίμακα.",
      link: "",
      images: {
        dark: [
          "/tradeOps/markets_dark.png",
          "/tradeOps/trades_dark.png",
          "/tradeOps/analytics_dark.png",
        ],
        light: [
          "/tradeOps/markets_light.png",
          "/tradeOps/trades_light.png",
          "/tradeOps/analytics_light.png",
        ],
      },
      tags: ["Node.js", "Express.js", "Postgres"],
    },
    project2: {
      title: "TradeOps",
      desc: "Αυτοματοποιημένο σύστημα trading που συνδέεται με το TradingView μέσω webhooks και εκτελεί συναλλαγές άμεσα, με ενσωματωμένη διαχείριση ρίσκου.",
      link: "https://github.com/gregorisbachtsevanos/TradeOps",
      images: {
        dark: [
          "/tradeOps/markets_dark.png",
          "/tradeOps/trades_dark.png",
          "/tradeOps/analytics_dark.png",
        ],
        light: [
          "/tradeOps/markets_light.png",
          "/tradeOps/trades_light.png",
          "/tradeOps/analytics_light.png",
        ],
      },
      tags: ["React-Query", "WebSockets", "Webhooks"],
    },
    project3: {
      title: "Frame-UI",
      desc: "Μία ελαφριά και επεκτάσιμη βιβλιοθήκη UI components που επιταχύνει την ανάπτυξη frontend, προσφέροντας συνεπή και σύγχρονα στοιχεία διεπαφής. Με modular αρχιτεκτονική και καθαρό διαχωρισμό σε components, layouts και utilities, διευκολύνει τη συντήρηση και την κλιμάκωση κάθε project.",
      link: "https://github.com/gregorisbachtsevanos/Frame-UI",
      images: {
        dark: [
          "/tradeOps/markets_dark.png",
          "/tradeOps/trades_dark.png",
          "/tradeOps/analytics_dark.png",
        ],
        light: [
          "/tradeOps/markets_light.png",
          "/tradeOps/trades_light.png",
          "/tradeOps/analytics_light.png",
        ],
      },
      tags: ["TS", "Vanilla-Extract", "Storybook"],
    },
  },
  timeline: {
    label: "Εμπειρία",
    heading: "Πέντε χρόνια χτίζοντας σε κλίμακα",
    sub: "Από full-stack συστήματα μέχρι enterprise πλατφόρμες — μια πορεία συνεχούς εξέλιξης σε backend, frontend και υποδομές.",
    items: [
      {
        year: "2021",
        role: "Junior Full Stack Developer",
        company: "Global Concept | Full Service Digital Agency",
        description:
          "Ανάπτυξη και συντήρηση full-stack web εφαρμογών με PHP, Node.js και Vue.js. Δημιουργία δυναμικών UI με Vue.js και jQuery. Σχεδιασμός και βελτιστοποίηση MySQL βάσεων δεδομένων και RESTful APIs.",
      },
      {
        year: "2022",
        role: "Full Stack Developer",
        company: "Rhoé",
        description:
          "Σχεδιασμός και ανάπτυξη backend συστημάτων με Node.js, Express και MongoDB. Συμμετοχή σε frontend ανάπτυξη με React. Διαχείριση Dockerized εφαρμογών, Linux servers και CI/CD pipelines με Ansible και Nginx. Παρακολούθηση και troubleshooting παραγωγικών συστημάτων.",
      },
      {
        year: "2023",
        role: "Software Engineer - Web",
        company: "WeAre8",
        description:
          "Ανάπτυξη high-performance web εφαρμογών με React, Next.js και TypeScript. Βελτιστοποίηση απόδοσης frontend, προσβασιμότητας και UX. Συνεργασία με product & design teams και εφαρμογή security best practices (XSS, CSRF).",
      },
      {
        year: "2026",
        role: "Senior Software Engineer",
        company: "Netcompany",
        description:
          "Εργασία σε enterprise-scale συστήματα και μεγάλα software projects. Συμμετοχή σε ανάλυση απαιτήσεων, ανάπτυξη και υποστήριξη production συστημάτων με έμφαση σε ποιότητα και scalability.",
      },
    ],
  },
  cta: {
    label: "Συνεργασία",
    heading: "Ας χτίσουμε κάτι μαζί",
    sub: "Είμαι πάντα ανοιχτός να συζητήσω για εργασία σε προϊόντα, freelance συμβόλαια ή μια εξαιρετική ευκαιρία.",
    primary: "Ξεκίνα μια συνομιλία",
    secondary: "Κατέβασε το CV",
  },
  contact: {
    label: "Επικοινωνία",
    heading: "Επικοινωνήστε",
    sub: "Ανοιχτός για νέες συνεργασίες και ερωτήματα.",
    email_label: "Email",
    linkedin_label: "LinkedIn",
    github_label: "GitHub",
    location_label: "Τοποθεσία",
    location_value: "Θεσσαλονικη, Ελλαδα",
    remote: "Ανοιχτός για απομακρυσμένη εργασία παγκοσμίως",
    send: "Στείλτε μου email",
  },
  footer: {
    tagline:
      "Full Stack Μηχανικός που δημιουργεί κλιμακούμενες ψηφιακές εμπειρίες.",
    nav: "Πλοήγηση",
    social: "Κοινωνικά",
    legal: "Νομικά",
    built: "Φτιαγμένο με Next.js & Tailwind CSS",
  },
};
