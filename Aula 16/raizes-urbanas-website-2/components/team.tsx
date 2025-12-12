export function Team() {
  const team = [
    {
      name: "Ana Ribeiro",
      role: "Coordenadora de Extensão",
      image: "/professional-portrait-young-brazilian-woman-educat.jpg",
    },
    {
      name: "Lucas Ferreira",
      role: "Facilitador Comunitário",
      image: "/professional-portrait-young-brazilian-man-communit.jpg",
    },
    {
      name: "Mariana Santos",
      role: "Bióloga e Educadora",
      image: "/professional-portrait-young-brazilian-woman-biolog.jpg",
    },
    {
      name: "Roberto Costa",
      role: "Mobilização Juvenil",
      image: "/professional-portrait-young-brazilian-man-youth-co.jpg",
    },
  ]

  return (
    <section id="equipe" className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10 text-center">
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-primary">
            Nossa Equipe
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-foreground md:text-4xl">
            Pessoas que fazem <span className="italic">acontecer</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {team.map((member) => (
            <div key={member.name} className="group text-center">
              <div className="relative mb-3 aspect-square overflow-hidden rounded-full">
                <img
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 rounded-full ring-2 ring-primary/0 transition-all group-hover:ring-primary/50" />
              </div>
              <h3 className="text-sm font-semibold text-foreground">{member.name}</h3>
              <p className="text-xs text-muted-foreground">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
