import { IMessages } from "@/lang";
import { CheckCircle2 } from "lucide-react";

type TTrustReasonProps =
	IMessages["trust"]["reasons"][keyof IMessages["trust"]["reasons"]];

const TrustReason = ({ reason }: { reason: TTrustReasonProps }) => {
	return (
		<div className="flex flex-col gap-4 rounded-xl border border-border bg-gradient-to-br from-secondary/50 to-secondary/0 p-5 transition-all duration-300 hover:border-green-500/50 hover:shadow-lg hover:shadow-green-500/10 sm:flex-row sm:p-6">
			<div className="flex-shrink-0">
				<CheckCircle2
					className="text-green-600 dark:text-green-400"
					size={24}
				/>
			</div>
			<div>
				<h3 className="mb-2 text-lg font-semibold sm:text-xl">
					{reason.title}
				</h3>
				<p className="text-muted-foreground leading-relaxed">
					{reason.description}
				</p>
			</div>
		</div>
	);
};

export default TrustReason;
