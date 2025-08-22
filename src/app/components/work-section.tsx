"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ExternalLink } from "lucide-react";

const projects = [
	{
		title: "Habit Tracker",
		description:
			"A productivity app for building daily habits, with streak tracking and reminders. Focused on backend logic and data persistence.",
		techStack: "React, Node.js",
	},
	{
		title: "HoopKnowers",
		description:
			"A modern NBA hub that pulls together team and player data. Built with plans for interactive dashboards and real-time stats.",
		techStack: "Next.js, Tailwind",
	},
	{
		title: "Website Redesigns",
		description:
			"Updated older websites for local businesses to be more modern, mobile-friendly, and user-focused. Emphasis on clean UI and responsive layouts.",
		techStack: "React, Tailwind, Backend Integrations",
	},
];

export default function ProjectsSection() {
	return (
		<section id="work" className="py-16 px-4 sm:px-6 lg:px-8">
			<div className="max-w-6xl mx-auto">
				{/* Section Heading */}
				<div className="text-center mb-12">
					<h2 className="font-heading font-bold text-3xl sm:text-4xl text-foreground mb-4">
						Recent Projects
					</h2>
					<p className="text-lg text-muted-foreground max-w-2xl mx-auto">
						Here are some of the projects I&apos;ve worked on, showcasing my skills in
						building modern, user-friendly applications and websites.
					</p>
				</div>

				{/* Projects Grid */}
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
					{projects.map((project, index) => (
						<Card
							key={index}
							className="hover:shadow-lg transition-shadow duration-300"
						>
							<CardHeader>
								<CardTitle className="font-heading font-semibold text-xl">
									{project.title}
								</CardTitle>
								<CardDescription className="text-lg text-muted-foreground mb-6">
									{project.description}
								</CardDescription>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground">
									<strong>Tech Stack:</strong> {project.techStack}
								</p>
							</CardContent>
						</Card>
					))}
				</div>

				{/* Caption */}
				<div className="mt-8 text-center">
					<p className="text-sm text-muted-foreground">
						📝 More projects and live demos coming soon. Let me know if you'd like
						to see something specific!
					</p>
				</div>
			</div>
		</section>
	);
}
