import {
	Cloud,
	Code,
	Code2,
	Database,
	Server,
	Zap,
	TrendingUp,
} from "lucide-react";

export const content = {
	navigation: {
		name: "Γρηγόρης Μπαχτσεβάνος",
		about: "Σχετικά",
		services: "Υπηρεσίες",
		projects: "Έργα",
		techStack: "Τεχνολογίες",
		contact: "Επικοινωνία",
	},
	hero: {
		title: "Full-Stack Προγραμματιστής",
		subtitle: "Κατασκευή Κλιμακούμενων Web Εφαρμογών & APIs",
		description:
			"Βοηθώ startups και επιχειρήσεις να δημιουργήσουν γρήγορο, αξιόπιστο και κλιμακούμενο λογισμικό.",
		ctaProject: "Ξεκινήστε Ένα Έργο",
		ctaWork: "Δείτε Τη Δουλειά Μου",
		availability: "Διαθέσιμος για έργα freelance",
	},
	about: {
		title: "Σχετικά Με Εμένα",
		location: "Βασισμένος στην Ελλάδα",
		paragraphs: [
			"Είμαι full-stack software engineer που βοηθάει startups και επιχειρήσεις να δημιουργήσουν αξιόπιστες και κλιμακούμενες web πλατφόρμες και APIs. Με εμπειρία σε σύγχρονα frontend frameworks και ισχυρά backend συστήματα, εστιάζω στη δημιουργία λύσεων που λειτουργούν σήμερα και αναπτύσσονται για το αύριο.",
			"Η προσέγγισή μου υπερβαίνει τη συγγραφή κώδικα. Δίνω προτεραιότητα στην καθαρή αρχιτεκτονική, τη βελτιστοποίηση απόδοσης και τη συντηρησιμότητα, εξασφαλίζοντας ότι το προϊόν σας μπορεί να αναπτυχθεί μαζί με την επιχείρησή σας. Είτε λανσάρετε ένα MVP είτε κλιμακώνετε μια υπάρχουσα πλατφόρμα, παρέχω λύσεις έτοιμες για παραγωγή βασισμένες σε αποδεδειγμένες τεχνολογίες.",
			"Από το σχεδιασμό ασφαλών REST APIs έως τη δημιουργία σύγχρονων React interfaces, γεφυρώνω το κενό μεταξύ τεχνικής αριστείας και επιχειρηματικών αποτελεσμάτων. Ας δημιουργήσουμε κάτι που θα διαρκέσει.",
		],
	},
	services: {
		title: "Υπηρεσίες",
		subtitle:
			"Ολοκληρωμένες υπηρεσίες full-stack ανάπτυξης για να ζωντανέψουν οι ιδέες σας",
		items: [
			{
				icon: Code,
				title: "Ανάπτυξη Full-Stack Web Εφαρμογών",
				description:
					"Προσαρμοσμένες web πλατφόρμες με React και Node.js. Ολοκληρωμένες λύσεις προσαρμοσμένες στις ανάγκες της επιχείρησής σας.",
			},
			{
				icon: Server,
				title: "Ανάπτυξη APIs & Backend Συστημάτων",
				description:
					"Ασφαλή και κλιμακούμενα backend συστήματα. REST APIs, συστήματα authentication και αρχιτεκτονική βάσεων δεδομένων.",
			},
			{
				icon: Zap,
				title: "Ανάπτυξη MVP για Startups",
				description:
					"Κατασκευή της πρώτης έκδοσης του προϊόντος σας γρήγορα και αποτελεσματικά. Φτάστε στην αγορά πιο γρήγορα χωρίς να θυσιάσετε την ποιότητα.",
			},
			{
				icon: Cloud,
				title: "DevOps & Ανάπτυξη",
				description:
					"Dockerized εφαρμογές, ρύθμιση Linux servers και CI/CD pipelines για αξιόπιστες αναπτύξεις.",
			},
			{
				icon: TrendingUp,
				title: "Βελτιστοποίηση Απόδοσης",
				description:
					"Βελτίωση της ταχύτητας και κλιμακούμενων δυνατοτήτων υφιστάμενων εφαρμογών. Ολοκληρωμένοι έλεγχοι και βελτιστοποιήσεις.",
			},
		],
	},
	projects: {
		title: "Επιλεγμένα Έργα",
		subtitle:
			"Πρόσφατη δουλειά που δείχνει full-stack ανάπτυξη και αρχιτεκτονική συστημάτων",
		items: [
			{
				title: "Πλατφόρμα Αυθεντικοποίησης",
				description:
					"Ασφαλές backend αυθεντικοποίησης που διαχειρίζεται machine tokens, refresh tokens και access tokens για πολλαπλές εφαρμογές. Κατασκευασμένο με βέλτιστες πρακτικές ασφάλειας του κλάδου.",
				tech: ["Node.js", "Express", "MongoDB", "JWT"],
				result: "Διαχειρίζεται πάνω από 10k αιτήματα αυθεντικοποίησης καθημερινά",
			},
			{
				title: "Πλατφόρμα Διαχείρισης Εργασιών",
				description:
					"Full-stack σύστημα διαχείρισης έργων και εργασιών με projects, ομάδες, tasks και subtasks. Περιλαμβάνει real-time ενημερώσεις και δυνατότητες συνεργασίας.",
				tech: ["React", "Redux Toolkit", "Node.js", "PostgreSQL"],
				result: "Βελτίωσε την παραγωγικότητα της ομάδας κατά 40%",
			},
			{
				title: "Πίνακας Ελέγχου Προγραμματιστή",
				description:
					"Σύγχρονο analytics dashboard με προηγμένη διαχείριση κατάστασης και ενσωματώσεις API. Οπτικοποίηση δεδομένων σε πραγματικό χρόνο και μετρήσεις απόδοσης.",
				tech: ["React", "TypeScript", "Redux Toolkit", "Vite"],
				result: "Επεξεργάζεται πάνω από 100k δεδομένα την ημέρα",
			},
		],
	},
	techStack: {
		title: "Tech Stack",
		subtitle:
			"Σύγχρονες τεχνολογίες και εργαλεία που χρησιμοποιώ για αξιόπιστες λύσεις",
		categories: [
			{
				category: "Frontend",
				icon: Code2,
				technologies: [
					"React.js",
					"Next.js",
					"TypeScript",
					"Redux Toolkit",
					"HTML/CSS/SCSS",
					"Styled Components",
					"Vite",
				],
			},
			{
				category: "Backend",
				icon: Server,
				technologies: [
					"Node.js",
					"Express.js",
					"REST APIs",
					"Authentication",
					"Token Security",
				],
			},
			{
				category: "Database",
				icon: Database,
				technologies: ["MongoDB", "MySQL", "PostgreSQL"],
			},
			{
				category: "DevOps",
				icon: Cloud,
				technologies: [
					"Docker",
					"Linux Servers",
					"Git",
					"CI/CD",
					"Cloud Deployments",
				],
			},
		],
	},
	trust: {
		title: "Γιατί Να Συνεργαστείτε Μαζί Μου",
		subtitle: "Παρέχοντας αριστεία μέσω αποδεδειγμένων αρχών και πρακτικών",
		reasons: [
			{
				title: "Καθαρός και Συντηρήσιμος Κώδικας",
				description:
					"Ακολουθώ βέλτιστες πρακτικές και πρότυπα του κλάδου ώστε ο κώδικάς σας να παραμένει διαχειρίσιμος καθώς μεγαλώνει.",
			},
			{
				title: "Έμφαση στην Κλιμάκωση",
				description:
					"Αρχιτεκτονική σχεδιασμένη για ανάπτυξη. Κατασκευασμένη ώστε να κλιμακώνεται από MVP έως enterprise επίπεδο.",
			},
			{
				title: "Αρχιτεκτονική Έτοιμη για Παραγωγή",
				description:
					"Κάθε έργο υλοποιείται με γνώμονα την παραγωγή. Ασφάλεια, απόδοση και αξιοπιστία από την πρώτη μέρα.",
			},
			{
				title: "Ισχυρή Εξειδίκευση σε Backend και Frontend",
				description:
					"Full-stack δυνατότητες που εξασφαλίζουν ομαλή ενσωμάτωση μεταξύ frontend και backend συστημάτων.",
			},
		],
	},
	contact: {
		title: "Έχετε Ένα Έργο Στο Μυαλό Σας;",
		subtitle:
			"Ας συζητήσουμε πώς μπορώ να βοηθήσω να ζωντανέψουν οι ιδέες σας",
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
		toastDescription: "Θα σας απαντήσω το συντομότερο δυνατό.",
		copyright:
			"© 2026 Γρηγόρης Μπαχτσεβάνος. Όλα τα δικαιώματα διατηρούνται.",
		email: "contact@example.com",
		github: "GitHub Profile",
		linkedin: "LinkedIn Profile",
	},
};
