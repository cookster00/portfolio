import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        {/* Left side: Copyright */}
        <div className="text-center md:text-left text-sm text-muted-foreground">
          © {new Date().getFullYear()} Nathan Cook. All rights reserved.
        </div>

        {/* Right side: Social/Contact Links */}
        <div className="flex flex-col md:flex-row items-center md:space-x-6 space-y-2 md:space-y-0">
          <a
            href="https://www.linkedin.com/in/nathan-cook-a73450254/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:underline"
          >
            LinkedIn
          </a>
          <a
            href="mailto:n23c23@gmail.com"
            className="text-muted-foreground hover:underline"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
