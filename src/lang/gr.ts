import type { Messages } from "./schema";

export const gr = {
	metadata: {
		title: "Γρηγόρης Μπαχτσεβάνος - Full-Stack Software Engineer",
		description:
			"Freelance Full-Stack Software Engineer με εξειδίκευση σε scalable web εφαρμογές, REST APIs και σύγχρονα React frontends. Με βάση την Ελλάδα.",
		openGraphTitle: "Γρηγόρης Μπαχτσεβάνος - Full-Stack Software Engineer",
		openGraphDescription:
			"Ανάπτυξη scalable web εφαρμογών και APIs για startups και επιχειρήσεις",
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
		title: "Full-Stack Προγραμματιστής",
		subtitle: "Κατασκευή Κλιμακούμενων Web Εφαρμογών και APIs",
		description:
			"Βοηθώ startups και επιχειρήσεις να χτίσουν γρήγορο, αξιόπιστο και κλιμακούμενο λογισμικό.",
		ctaProject: "Ξεκινήστε Ένα Έργο",
		ctaWork: "Δείτε Τη Δουλειά Μου",
		availability: "Διαθέσιμος για freelance projects",
	},
	about: {
		title: "Σχετικά Με Εμένα",
		locationLabel: "Με βάση",
		paragraphs: [
			"Είμαι full-stack software engineer και βοηθώ startups και επιχειρήσεις να χτίσουν αξιόπιστες, κλιμακούμενες web πλατφόρμες και APIs. Με εμπειρία σε σύγχρονα frontend frameworks και ισχυρά backend συστήματα, εστιάζω σε λύσεις που λειτουργούν σήμερα και αντέχουν στην ανάπτυξη του αύριο.",
			"Η προσέγγισή μου δεν σταματά στον κώδικα. Δίνω έμφαση στην καθαρή αρχιτεκτονική, τη βελτιστοποίηση απόδοσης και τη συντηρησιμότητα, ώστε το προϊόν σας να μπορεί να εξελίσσεται μαζί με την επιχείρησή σας. Είτε λανσάρετε ένα MVP είτε επεκτείνετε μια υπάρχουσα πλατφόρμα, παραδίδω λύσεις έτοιμες για παραγωγή πάνω σε δοκιμασμένες τεχνολογίες.",
			"Από τον σχεδιασμό ασφαλών REST APIs μέχρι τη δημιουργία σύγχρονων React διεπαφών, γεφυρώνω το χάσμα ανάμεσα στην τεχνική αρτιότητα και τα επιχειρηματικά αποτελέσματα. Ας χτίσουμε κάτι που θα διαρκέσει.",
		],
	},
	services: {
		title: "Υπηρεσίες",
		subtitle:
			"Ολοκληρωμένες υπηρεσίες full-stack ανάπτυξης για να ζωντανέψουν οι ιδέες σας",
		items: {
			"full-stack-web-apps": {
				title: "Ανάπτυξη Full-Stack Web Εφαρμογών",
				description:
					"Προσαρμοσμένες web πλατφόρμες με React και Node.js. Ολοκληρωμένες λύσεις στα μέτρα της επιχείρησής σας.",
			},
			"api-backend": {
				title: "Ανάπτυξη APIs και Backend Συστημάτων",
				description:
					"Ασφαλείς και κλιμακούμενες backend υπηρεσίες. REST APIs, authentication και αρχιτεκτονική βάσεων δεδομένων.",
			},
			"startup-mvp": {
				title: "Ανάπτυξη MVP για Startups",
				description:
					"Χτίσιμο της πρώτης έκδοσης του προϊόντος σας γρήγορα και αποτελεσματικά. Βγείτε στην αγορά χωρίς να θυσιάσετε την ποιότητα.",
			},
			"devops-deployment": {
				title: "DevOps και Deployments",
				description:
					"Dockerized εφαρμογές, ρύθμιση Linux servers και CI/CD pipelines για αξιόπιστες αναπτύξεις.",
			},
			"performance-optimization": {
				title: "Βελτιστοποίηση Απόδοσης",
				description:
					"Βελτίωση ταχύτητας και κλιμάκωσης υπαρχουσών εφαρμογών. Ολοκληρωμένοι έλεγχοι και πρακτικές βελτιστοποιήσεις.",
			},
		},
	},
	projects: {
		title: "Επιλεγμένα Έργα",
		subtitle:
			"Πρόσφατη δουλειά που αναδεικνύει full-stack ανάπτυξη και αρχιτεκτονική συστημάτων",
		items: {
			"authentication-platform": {
				title: "Πλατφόρμα Αυθεντικοποίησης",
				description:
					"Ασφαλές backend αυθεντικοποίησης που διαχειρίζεται machine tokens, refresh tokens και access tokens για πολλαπλές εφαρμογές. Χτισμένο με βέλτιστες πρακτικές ασφάλειας.",
				result: "Διαχειρίζεται 10k+ auth requests καθημερινά",
			},
			"task-management-platform": {
				title: "Πλατφόρμα Διαχείρισης Εργασιών",
				description:
					"Full-stack σύστημα διαχείρισης έργων και εργασιών με projects, groups, tasks και subtasks. Περιλαμβάνει real-time ενημερώσεις και δυνατότητες συνεργασίας.",
				result: "Βελτίωσε την παραγωγικότητα ομάδας κατά 40%",
			},
			"developer-dashboard": {
				title: "Dashboard Προγραμματιστή",
				description:
					"Σύγχρονο analytics dashboard με προηγμένη διαχείριση κατάστασης και API integrations. Οπτικοποίηση δεδομένων σε πραγματικό χρόνο και μετρήσεις απόδοσης.",
				result: "Επεξεργάζεται 100k+ δεδομένα την ημέρα",
			},
		},
	},
	techStack: {
		title: "Tech Stack",
		subtitle:
			"Σύγχρονες τεχνολογίες και εργαλεία που χρησιμοποιώ για να χτίζω αξιόπιστες λύσεις",
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
		title: "Γιατί Να Συνεργαστείτε Μαζί Μου",
		subtitle:
			"Παραδίδω ποιότητα μέσα από αποδεδειγμένες αρχές και πρακτικές",
		reasons: {
			"clean-code": {
				title: "Καθαρός και Συντηρήσιμος Κώδικας",
				description:
					"Ακολουθώ βέλτιστες πρακτικές και πρότυπα του κλάδου ώστε ο κώδικάς σας να παραμένει διαχειρίσιμος όσο μεγαλώνει.",
			},
			scalability: {
				title: "Έμφαση στην Κλιμάκωση",
				description:
					"Αρχιτεκτονική σχεδιασμένη για ανάπτυξη. Χτισμένη ώστε να κλιμακώνεται από MVP μέχρι enterprise επίπεδο.",
			},
			"production-ready": {
				title: "Αρχιτεκτονική Έτοιμη για Παραγωγή",
				description:
					"Κάθε έργο χτίζεται με γνώμονα την παραγωγή. Ασφάλεια, απόδοση και αξιοπιστία από την πρώτη μέρα.",
			},
			"full-stack-expertise": {
				title: "Ισχυρή Εξειδίκευση σε Backend και Frontend",
				description:
					"Οι full-stack δυνατότητες εξασφαλίζουν ομαλή ενσωμάτωση μεταξύ frontend και backend συστημάτων.",
			},
		},
	},
	contact: {
		title: "Έχετε Ένα Έργο Στο Μυαλό Σας;",
		subtitle: "Ας συζητήσουμε πώς μπορώ να βοηθήσω να γίνει πράξη",
		getInTouch: "Επικοινωνήστε Μαζί Μου",
		paragraphs: [
			"Είτε θέλετε να δημιουργήσετε ένα νέο προϊόν, να επεκτείνετε μια υπάρχουσα πλατφόρμα ή χρειάζεστε τεχνική συμβουλή, είμαι εδώ για να βοηθήσω.",
		],
		formPlaceholders: {
			name: "Το Όνομά Σας",
			email: "Το Email Σας",
			message: "Πείτε μου για το έργο σας...",
		},
		submitButton: {
			send: "Αποστολή Μηνύματος",
			sending: "Αποστολή...",
		},
		toastTitle: "Το μήνυμα στάλθηκε!",
		toastDescription: "Θα επικοινωνήσω μαζί σας το συντομότερο δυνατό.",
		copyright: "© 2026 Γρηγόρης Μπαχτσεβάνος. Με επιφύλαξη παντός δικαιώματος.",
		github: "GitHub Profile",
		linkedin: "LinkedIn Profile",
	},
} satisfies Messages;
