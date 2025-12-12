import { Sprout, Users, BookOpen } from "lucide-react"

export function About() {
  const values = [
    {
      icon: Sprout,
      title: "Justiça socioambiental",
      description: "Promovemos equidade no acesso a espaços verdes e protagonismo comunitário.",
    },
    {
      icon: Users,
      title: "Participação comunitária",
      description: "Fortalecemos a organização popular e gestão coletiva de projetos ambientais.",
    },
    {
      icon: BookOpen,
      title: "Ecocidadania crítica",
      description: "Desenvolvemos consciência ecológica articulada à leitura política do território.",
    },
  ]

  return (
    <section id="quem-somos" className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Left - Text content */}
          <div>
            <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-primary">
              Quem Somos
            </span>
            <h2 className="mb-4 font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
              Transformando territórios através da <span className="italic">ecocidadania</span>
            </h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              O Raízes Urbanas é uma iniciativa socioambiental que conecta jovens periféricos a universidades para
              formação ecológica aplicada, ciência cidadã e participação política comunitária.
            </p>
          </div>

          {/* Right - Values */}
          <div className="space-y-6">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="group flex gap-4 rounded-lg border border-border/50 bg-card p-4 transition-all hover:border-primary/30 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <value.icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="mb-1 text-sm font-semibold text-card-foreground">{value.title}</h3>
                  <p className="text-xs leading-relaxed text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
