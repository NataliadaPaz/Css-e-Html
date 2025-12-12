import { Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer id="contato" className="border-t border-border bg-background">
      <div className="container mx-auto px-6 py-6">
        <div className="flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
          <div className="flex items-center gap-2">
            <div className="flex h-7 w-7 items-center justify-center rounded-full bg-primary">
              <svg viewBox="0 0 24 24" fill="none" className="h-4 w-4 text-primary-foreground">
                <path
                  d="M12 2C10.89 2 10 2.89 10 4V12C10 13.11 10.89 14 12 14C13.11 14 14 13.11 14 12V4C14 2.89 13.11 2 12 2Z"
                  fill="currentColor"
                />
                <path
                  d="M12 14C9.79 14 8 15.79 8 18C8 20.21 9.79 22 12 22C14.21 22 16 20.21 16 18C16 15.79 14.21 14 12 14Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <span className="text-sm font-medium text-foreground">Raízes Urbanas</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <MapPin className="h-3.5 w-3.5" />
              <span>São Paulo, SP</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Mail className="h-3.5 w-3.5" />
              <a href="mailto:contato@raizesurbanas.org" className="hover:text-foreground transition-colors">
                contato@raizesurbanas.org
              </a>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">© 2025 Raízes Urbanas</p>
        </div>
      </div>
    </footer>
  )
}
