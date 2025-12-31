export function Footer() {
    return (
      <footer className="py-12 bg-muted/30 border-t border-border">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <span className="text-2xl font-serif font-bold">InstaDish</span>
            </div>
  
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} InstaDish. Your personal cooking companion.
            </p>
          </div>
        </div>
      </footer>
    )
  }
  