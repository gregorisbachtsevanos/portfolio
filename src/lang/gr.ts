import type { IMessages } from "./schema";

export const gr = {
	metadata: {
		title: "Γρηγόρης Μπαχτσεβάνος - Full-Stack Software Engineer",
		description:
			"Freelance Full-Stack Software Engineer με εμπειρία στην ανάπτυξη scalable web εφαρμογών, REST APIs και σύγχρονων React εφαρμογών. Με έδρα την Ελλάδα.",
		openGraphTitle: "Γρηγόρης Μπαχτσεβάνος - Full-Stack Software Engineer",
		openGraphDescription:
			"Ανάπτυξη αξιόπιστων και scalable web εφαρμογών και APIs για startups και επιχειρήσεις",
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
		title: "Full-Stack Developer",
		subtitle: "Ανάπτυξη Scalable Web Εφαρμογών & APIs",
		description:
			"Βοηθάω startups και επιχειρήσεις να δημιουργήσουν γρήγορο, αξιόπιστο και scalable λογισμικό.",
		ctaProject: "Έναρξη Project",
		ctaWork: "Δείτε τη Δουλειά μου",
		availability: "Διαθέσιμος για freelance συνεργασίες",
	},
	about: {
		title: "Σχετικά με Εμένα",
		locationLabel: "Έδρα",
		paragraphs: [
			"Είμαι full-stack software engineer και βοηθάω startups και επιχειρήσεις να δημιουργούν αξιόπιστες και scalable web πλατφόρμες και APIs. Με εμπειρία τόσο στο frontend όσο και στο backend, εστιάζω σε λύσεις που καλύπτουν τις ανάγκες του σήμερα αλλά μπορούν να υποστηρίξουν και τη μελλοντική ανάπτυξη.",

			"Η προσέγγισή μου δεν περιορίζεται μόνο στον κώδικα. Δίνω έμφαση στην καθαρή αρχιτεκτονική, την απόδοση και τη συντηρησιμότητα, ώστε το προϊόν σας να μπορεί να εξελίσσεται χωρίς τεχνικά εμπόδια. Είτε πρόκειται για MVP είτε για scaling υπάρχοντος συστήματος, στόχος μου είναι πάντα ένα production-ready αποτέλεσμα.",

			"Από τον σχεδιασμό ασφαλών REST APIs μέχρι την ανάπτυξη σύγχρονων React εφαρμογών, γεφυρώνω το τεχνικό κομμάτι με τις πραγματικές ανάγκες της επιχείρησης. Στόχος είναι να δημιουργούμε λύσεις που έχουν διάρκεια.",
		],
	},
	services: {
		title: "Υπηρεσίες",
		subtitle:
			"Ολοκληρωμένες λύσεις full-stack ανάπτυξης για την υλοποίηση των ιδεών σας",
		items: {
			"full-stack-web-apps": {
				title: "Ανάπτυξη Full-Stack Web Εφαρμογών",
				description:
					"Custom web εφαρμογές με React και Node.js. Ολοκληρωμένες λύσεις προσαρμοσμένες στις ανάγκες της επιχείρησής σας.",
			},
			"api-backend": {
				title: "Ανάπτυξη APIs & Backend Συστημάτων",
				description:
					"Ασφαλή και scalable backend services, REST APIs, authentication και σωστή αρχιτεκτονική δεδομένων.",
			},
			"startup-mvp": {
				title: "Ανάπτυξη MVP για Startups",
				description:
					"Γρήγορη και αποδοτική υλοποίηση της πρώτης έκδοσης του προϊόντος σας, ώστε να βγείτε στην αγορά χωρίς καθυστερήσεις.",
			},
			"devops-deployment": {
				title: "DevOps & Deployment",
				description:
					"Docker, Linux servers και CI/CD pipelines για σταθερά και αξιόπιστα deployments.",
			},
			"performance-optimization": {
				title: "Βελτιστοποίηση Απόδοσης",
				description:
					"Βελτίωση ταχύτητας και scalability υπαρχουσών εφαρμογών μέσα από στοχευμένες παρεμβάσεις.",
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
				description:
					"Έμφαση σε ασφάλεια, απόδοση και αξιοπιστία από την αρχή.",
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
		subtitle: "Ας δούμε πώς μπορώ να βοηθήσω",
		getInTouch: "Επικοινωνία",
		paragraphs: [
			"Είτε θέλετε να δημιουργήσετε κάτι νέο, να επεκτείνετε ένα υπάρχον σύστημα ή χρειάζεστε τεχνική καθοδήγηση, μπορώ να βοηθήσω.",
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
