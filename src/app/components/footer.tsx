import { Heart } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-card border-t border-border py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <div className="text-center md:text-left">
            <h3 className="font-heading font-bold text-xl text-primary mb-2">Nathan Cook</h3>
            <p className="text-sm text-muted-foreground">
              Freelance Web Developer • Simple Websites for Small Businesses
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end space-y-2">
            <div className="flex items-center space-x-1 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>for small businesses</span>
            </div>
            <p className="text-xs text-muted-foreground">© 2025 Nathan Cook. All rights reserved.</p>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border text-center">
          <div className="bg-muted p-3 rounded-lg">
            <p className="text-sm text-muted-foreground">
              📝 TODO: Add social media links and update footer information
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
