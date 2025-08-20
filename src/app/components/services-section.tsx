"use client";

import { Globe, Smartphone, Workflow, BarChart3 } from "lucide-react";
import { Button } from "./ui/button";

const services = [
	{
		icon: Globe,
		title: "Simple Websites",
		description:
			"Clean, professional websites for small businesses—one-pagers or small multi-page sites.",
		cta: "Start a website",
	},
	{
		icon: Smartphone,
		title: "Mobile-Friendly Design",
		description:
			"Responsive layouts and basic accessibility so your site works on phones, tablets, and desktops.",
		cta: "Make it mobile-ready",
	},
	{
		icon: Workflow,
		title: "Task Automations",
		description:
			"Turn repetitive tasks into scripts or small tools—email pipelines, spreadsheet helpers, API glue.",
		cta: "Automate a task",
	},
	{
		icon: BarChart3,
		title: "Data & Reports",
		description:
			"Generate weekly summaries, CSV cleanups, or lightweight dashboards for quick insights.",
		cta: "Get a simple report",
	},
];

export default function ServicesSection() {
	return (
		<section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				{/* Section Heading */}
				<div className="text-center mb-12">
					<h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
						What I Can Do For You
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						I specialize in creating simple websites and automations that make
						life easier for small businesses.
					</p>
				</div>

				{/* Services Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
					{services.map((service, index) => (
						<div
							key={index}
							className="rounded-2xl border bg-white p-6 shadow-sm hover:shadow-md transition"
						>
							<div className="flex justify-center items-center mb-4 p-3 bg-primary/10 rounded-full w-fit mx-auto">
								<service.icon className="h-6 w-6 text-primary" />
							</div>
							<h3 className="font-heading font-semibold text-xl text-center mb-2">
								{service.title}
							</h3>
							<p className="text-sm text-muted-foreground text-center leading-relaxed mb-4">
								{service.description}
							</p>
							<div className="text-center">
								<Button
									variant="outline"
									size="sm"
									className="text-primary border-primary hover:bg-primary hover:text-primary-foreground"
									onClick={() => {
										const element = document.getElementById("contact");
										if (element)
											element.scrollIntoView({ behavior: "smooth" });
									}}
								>
									{service.cta}
								</Button>
							</div>
						</div>
					))}
				</div>

				{/* Caption */}
			</div>
		</section>
	);
}
