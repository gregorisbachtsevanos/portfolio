import type { IMessages } from "./schema";

export const gr = {
  metadata: {
    title: "Γρηγόρης Μπαχτσεβάνος | Freelance Full-Stack Developer στην Ελλάδα",
    description:
      "Freelance full-stack developer με έδρα την Ελλάδα για εταιρικές ιστοσελίδες, e-shop, landing pages, custom web εφαρμογές και REST APIs για startups και επιχειρήσεις.",
    openGraphTitle: "Γρηγόρης Μπαχτσεβάνος | Freelance Developer στην Ελλάδα",
    openGraphDescription:
      "Ανάπτυξη σύγχρονων websites, e-shops, MVPs και custom λογισμικού για επιχειρήσεις και startups.",
    keywords: [
      "γρηγόρης μπαχτσεβάνος",
      "gregoris bachtsevanos",
      "bachtsevanos gregoris",
      "gregorisbachtsevanos",
      "freelance developer ελλαδα",
      "κατασκευη ιστοσελιδας ελλαδα",
      "developer για eshop",
      "full stack developer ελλαδα",
      "custom web εφαρμογες",
      "react developer ελλαδα",
      "next.js developer",
      "κατασκευη e-shop",
      "developer για startup mvp",
      "web developer greece",
    ],
  },
  navigation: {
    about: "Σχετικά",
    services: "Υπηρεσίες",
    projects: "Έργα",
    techStack: "Τεχνολογίες",
    contact: "Επικοινωνία",
    languageLabel: "Γλώσσα",
    languages: {
      en: "EN",
      gr: "GR",
    },
  },
  hero: {
    title: "Freelance Web Developer στην Ελλάδα",
    subtitle: "Ιστοσελίδες, E-Shop & Custom Apps",
    description:
      "Αναλαμβάνω εταιρικές ιστοσελίδες, e-shop, landing pages, custom web εφαρμογές και APIs για startups, επαγγελματίες και αναπτυσσόμενες επιχειρήσεις.",
    ctaProject: "Έναρξη Project",
    ctaWork: "Δείτε τη Δουλειά μου",
    availability: "Διαθέσιμος για freelance συνεργασίες",
  },
  about: {
    title: "Σχετικά με Εμένα",
    locationLabel: "Έδρα",
    paragraphs: [
      "Είμαι freelance full-stack developer με έδρα την Ελλάδα και βοηθάω επιχειρήσεις και founders να δημιουργήσουν επαγγελματικές ιστοσελίδες, e-shop, εσωτερικά εργαλεία και custom web εφαρμογές. Αναλαμβάνω τόσο το frontend όσο και το backend, ώστε το αποτέλεσμα να είναι ολοκληρωμένο και λειτουργικό.",

      "Μπορώ να βοηθήσω σε διαφορετικούς τύπους έργων, από εταιρικά sites και landing pages μέχρι startup MVPs, dashboards, booking flows, APIs και custom business software. Στόχος είναι κάθε λύση να είναι πρακτική, γρήγορη και έτοιμη να υποστηρίξει πραγματικές ανάγκες.",

      "Δίνω έμφαση σε καθαρό κώδικα, σωστή αρχιτεκτονική και αξιόπιστο deployment, ώστε το project σας να μπορεί να εξελιχθεί χωρίς τεχνικά εμπόδια. Αν χρειάζεστε συνεργάτη για νέο project ή για αναβάθμιση υπάρχοντος προϊόντος, μπορώ να βοηθήσω.",
    ],
  },
  services: {
    title: "Υπηρεσίες",
    subtitle:
      "Freelance υπηρεσίες ανάπτυξης για ιστοσελίδες, e-shop και custom λογισμικό",
    items: {
      "full-stack-web-apps": {
        title: "Ιστοσελίδες & Custom Web Εφαρμογές",
        description:
          "Σύγχρονες εταιρικές ιστοσελίδες, landing pages και custom web platforms προσαρμοσμένες στους στόχους της επιχείρησής σας.",
      },
      "api-backend": {
        title: "Ανάπτυξη APIs & Backend Συστημάτων",
        description:
          "Ασφαλή backend services, REST APIs, authentication, integrations και σωστή δομή δεδομένων για πραγματικές επιχειρηματικές ανάγκες.",
      },
      "startup-mvp": {
        title: "Ανάπτυξη E-Shop & MVP",
        description:
          "Ανάπτυξη e-shop ή της πρώτης έκδοσης του προϊόντος σας με έμφαση στη γρήγορη κυκλοφορία και τη σωστή βάση για μελλοντική εξέλιξη.",
      },
      "devops-deployment": {
        title: "DevOps & Deployment",
        description:
          "Deployment, hosting setup, Docker και CI/CD pipelines για σταθερό go-live και εύκολη συντήρηση.",
      },
      "performance-optimization": {
        title: "Βελτιστοποίηση Απόδοσης",
        description:
          "Βελτίωση ταχύτητας, σταθερότητας, SEO βάσης και scalability σε υπάρχουσες ιστοσελίδες και εφαρμογές.",
      },
    },
  },
  projects: {
    title: "Επιλεγμένα Έργα",
    subtitle:
      "Παραδείγματα δουλειάς σε full-stack ανάπτυξη και αρχιτεκτονική συστημάτων",
    items: {
      "authentication-platform": {
        title: "Authentication Platform",
        description:
          "Backend σύστημα αυθεντικοποίησης που διαχειρίζεται machine, refresh και access tokens για πολλαπλές εφαρμογές, με έμφαση στην ασφάλεια.",
        result: "Διαχειρίζεται 10k+ authentication requests ημερησίως",
      },
      "task-management-platform": {
        title: "Task Management Platform",
        description:
          "Full-stack σύστημα διαχείρισης έργων και εργασιών με real-time ενημερώσεις και δυνατότητες συνεργασίας.",
        result: "Αύξηση παραγωγικότητας ομάδας κατά 40%",
      },
      "developer-dashboard": {
        title: "Developer Dashboard",
        description:
          "Σύγχρονο analytics dashboard με real-time δεδομένα και advanced state management.",
        result: "Διαχειρίζεται 100k+ δεδομένα ημερησίως",
      },
    },
  },
  techStack: {
    title: "Τεχνολογίες",
    subtitle:
      "Τα εργαλεία και οι τεχνολογίες που χρησιμοποιώ για αξιόπιστα αποτελέσματα",
    categories: {
      frontend: {
        label: "Frontend",
      },
      backend: {
        label: "Backend",
      },
      database: {
        label: "Βάσεις Δεδομένων",
      },
      devops: {
        label: "DevOps",
      },
    },
  },
  trust: {
    title: "Γιατί να συνεργαστείτε μαζί μου",
    subtitle: "Εστίαση στην ποιότητα μέσα από σωστές πρακτικές ανάπτυξης",
    reasons: {
      "clean-code": {
        title: "Καθαρός & Συντηρήσιμος Κώδικας",
        description:
          "Χρήση βέλτιστων πρακτικών ώστε ο κώδικας να παραμένει οργανωμένος και εύκολα επεκτάσιμος.",
      },
      scalability: {
        title: "Scalable Αρχιτεκτονική",
        description:
          "Σχεδιασμός που υποστηρίζει την ανάπτυξη από MVP μέχρι enterprise επίπεδο.",
      },
      "production-ready": {
        title: "Production-Ready Προσεγγίσεις",
        description: "Έμφαση σε ασφάλεια, απόδοση και αξιοπιστία από την αρχή.",
      },
      "full-stack-expertise": {
        title: "Full-Stack Εξειδίκευση",
        description:
          "Ομαλή σύνδεση frontend και backend για ολοκληρωμένες λύσεις.",
      },
    },
  },
  contact: {
    title: "Έχετε κάποιο project στο μυαλό σας;",
    subtitle:
      "Χρειάζεστε ιστοσελίδα, e-shop ή custom εφαρμογή; Ας βρούμε τη σωστή λύση για την επιχείρησή σας.",
    getInTouch: "Επικοινωνία",
    paragraphs: [
      "Είτε χρειάζεστε νέο εταιρικό website, custom business tool, e-shop ή βελτιώσεις σε υπάρχον προϊόν, είμαι διαθέσιμος για freelance συνεργασίες στα ελληνικά και στα αγγλικά.",
    ],
    formPlaceholders: {
      name: "Όνομα",
      email: "Email",
      message: "Περιγράψτε το project σας...",
    },
    submitButton: {
      send: "Αποστολή",
      sending: "Αποστολή...",
    },
    toastTitle: "Το μήνυμα στάλθηκε!",
    toastDescription: "Θα επικοινωνήσω μαζί σας σύντομα.",
    toastErrorTitle: "Η αποστολή απέτυχε",
    toastErrorDescription:
      "Το μήνυμα δεν στάλθηκε αυτή τη στιγμή. Προσπαθήστε ξανά.",
    copyright: "© 2026 Γρηγόρης Μπαχτσεβάνος.",
    github: "GitHub",
    linkedin: "LinkedIn",
  },
} satisfies IMessages;
