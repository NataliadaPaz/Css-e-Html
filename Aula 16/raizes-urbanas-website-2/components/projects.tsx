"use client"

import type React from "react"

import { useState } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowUpRight, ChevronLeft, ChevronRight, X, Users, Calendar, MapPin } from "lucide-react"

const projects = [
  {
    id: 1,
    name: "Programa de Formação Ecológica",
    audience: "Jovens periféricos de 14–20 anos",
    year: "2025",
    status: "Ativo",
    image: "/young-people-gardening-urban-community-garden-educ.jpg",
    description:
      "Um programa intensivo de formação que conecta jovens da periferia com práticas de educação ambiental, permacultura urbana e protagonismo comunitário.",
    location: "São Paulo, SP",
    duration: "6 meses",
    vacancies: 25,
    activities: ["Oficinas de permacultura", "Visitas técnicas", "Projeto final comunitário", "Mentoria individual"],
  },
  {
    id: 2,
    name: "Trilha Urbana de Leitura do Território",
    audience: "Comunidades urbanas e escolas públicas",
    year: "2025",
    status: "Ativo",
    image: "/urban-nature-walk-city-park-biodiversity-explorati.jpg",
    description:
      "Expedições educativas que revelam a biodiversidade escondida nas cidades. Mapeamos espécies nativas e criamos roteiros de ecoturismo urbano.",
    location: "Região Metropolitana de SP",
    duration: "3 meses",
    vacancies: 40,
    activities: ["Caminhadas guiadas", "Mapeamento participativo", "Identificação de espécies", "Criação de roteiros"],
  },
  {
    id: 3,
    name: "Reflorestamento de Microáreas",
    audience: "Moradores e coletivos comunitários",
    year: "2024",
    status: "Concluído",
    image: "/tree-planting-urban-reforestation-community-volunt.jpg",
    description:
      "Iniciativa de recuperação ambiental em pequenas áreas urbanas degradadas. Plantamos mais de 500 mudas nativas.",
    location: "Zona Leste de SP",
    duration: "Concluído",
    vacancies: 0,
    activities: ["Plantio de mudas nativas", "Mutirões comunitários", "Monitoramento ambiental", "Educação ambiental"],
  },
  {
    id: 4,
    name: "Hortas Comunitárias Periféricas",
    audience: "Famílias e associações de bairro",
    year: "2025",
    status: "Ativo",
    image: "/community-garden-urban-vegetables-growing.jpg",
    description:
      "Implantação de hortas comunitárias em terrenos ociosos. Promovemos segurança alimentar e fortalecimento comunitário.",
    location: "Diversas regiões de SP",
    duration: "Contínuo",
    vacancies: 60,
    activities: ["Implantação de hortas", "Capacitação em cultivo orgânico", "Feiras de troca", "Banco de sementes"],
  },
]

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [inscriptionType, setInscriptionType] = useState<"voluntario" | "participante" | null>(null)
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  const scroll = (direction: "left" | "right") => {
    const container = document.getElementById("projects-carousel")
    if (container) {
      const scrollAmount = 320
      const newPosition =
        direction === "left" ? Math.max(0, scrollPosition - scrollAmount) : scrollPosition + scrollAmount
      container.scrollTo({ left: newPosition, behavior: "smooth" })
      setScrollPosition(newPosition)
    }
  }

  const openProject = (project: (typeof projects)[0]) => {
    setSelectedProject(project)
    setInscriptionType(null)
    setSubmitted(false)
    setFormData({ name: "", email: "", phone: "", message: "" })
  }

  const closeProject = () => {
    setSelectedProject(null)
    setInscriptionType(null)
    setSubmitted(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="projetos" className="bg-[#0f1f0f] py-16 md:py-20">
      <div className="container mx-auto px-6">
        <div className="mb-10">
          <span className="mb-3 inline-block text-xs font-medium uppercase tracking-widest text-[#7fb069]">
            Nossos Projetos
          </span>
          <h2 className="font-serif text-3xl font-medium tracking-tight text-white md:text-4xl">
            Iniciativas que <span className="italic">transformam</span>
          </h2>
        </div>

        <div className="relative">
          {/* Botões de navegação */}
          <button
            onClick={() => scroll("left")}
            className="absolute -left-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#7fb069] text-white shadow-lg transition-all hover:bg-[#6a9a57] md:-left-5"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute -right-4 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#7fb069] text-white shadow-lg transition-all hover:bg-[#6a9a57] md:-right-5"
          >
            <ChevronRight className="h-5 w-5" />
          </button>

          {/* Cards do carrossel */}
          <div
            id="projects-carousel"
            className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onScroll={(e) => setScrollPosition(e.currentTarget.scrollLeft)}
          >
            {projects.map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => openProject(project)}
                className={`group relative flex-shrink-0 cursor-pointer overflow-hidden rounded-xl bg-[#1a2a1a] transition-all duration-500 ease-out ${
                  hoveredId === project.id ? "w-[500px]" : "w-[280px]"
                }`}
                style={{ height: "360px" }}
              >
                {/* Imagem de fundo */}
                <div className="absolute inset-0">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.name}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a150a] via-[#0a150a]/60 to-transparent" />
                </div>

                {/* Conteúdo do card */}
                <div className="absolute bottom-0 left-0 right-0 p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge
                      className={`text-xs ${
                        project.status === "Ativo" ? "bg-[#7fb069] text-white" : "bg-white/20 text-white/80"
                      }`}
                    >
                      {project.status}
                    </Badge>
                    <span className="text-xs text-white/60">{project.year}</span>
                  </div>

                  <h3 className="mb-1 font-serif text-lg font-medium leading-tight text-white transition-colors group-hover:text-[#7fb069]">
                    {project.name}
                  </h3>

                  <p className="text-xs text-white/60">{project.audience}</p>

                  <div
                    className={`mt-3 overflow-hidden transition-all duration-500 ${
                      hoveredId === project.id ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
                  >
                    <p className="mb-3 text-sm leading-relaxed text-white/70">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="flex items-center gap-1 text-xs text-white/50">
                        <MapPin className="h-3 w-3" /> {project.location}
                      </span>
                      <span className="flex items-center gap-1 text-xs text-white/50">
                        <Calendar className="h-3 w-3" /> {project.duration}
                      </span>
                      {project.vacancies > 0 && (
                        <span className="flex items-center gap-1 text-xs text-[#7fb069]">
                          <Users className="h-3 w-3" /> {project.vacancies} vagas
                        </span>
                      )}
                    </div>

                    <div className="flex items-center gap-2 text-[#7fb069]">
                      <span className="text-xs font-medium">Clique para se inscrever</span>
                      <ArrowUpRight className="h-3 w-3 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal de detalhes do projeto */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm">
          <div className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-[#0f1f0f] shadow-2xl">
            {/* Botão fechar */}
            <button
              onClick={closeProject}
              className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Imagem do projeto */}
            <div className="relative aspect-[21/9] overflow-hidden rounded-t-2xl">
              <img
                src={selectedProject.image || "/placeholder.svg"}
                alt={selectedProject.name}
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1f0f] via-transparent to-transparent" />
            </div>

            <div className="p-6 md:p-8">
              {/* Header do projeto */}
              <div className="mb-6">
                <div className="mb-3 flex flex-wrap items-center gap-3">
                  <Badge
                    className={
                      selectedProject.status === "Ativo" ? "bg-[#7fb069] text-white" : "bg-white/20 text-white/80"
                    }
                  >
                    {selectedProject.status}
                  </Badge>
                  <span className="text-sm text-white/60">{selectedProject.year}</span>
                </div>
                <h3 className="mb-2 font-serif text-2xl font-medium text-white md:text-3xl">{selectedProject.name}</h3>
                <p className="text-white/70">{selectedProject.audience}</p>
              </div>

              {/* Informações do projeto */}
              <div className="mb-6 grid gap-4 md:grid-cols-3">
                <div className="flex items-center gap-3 rounded-lg bg-[#1a2a1a] p-4">
                  <MapPin className="h-5 w-5 text-[#7fb069]" />
                  <div>
                    <p className="text-xs text-white/50">Local</p>
                    <p className="text-sm font-medium text-white">{selectedProject.location}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-[#1a2a1a] p-4">
                  <Calendar className="h-5 w-5 text-[#7fb069]" />
                  <div>
                    <p className="text-xs text-white/50">Duração</p>
                    <p className="text-sm font-medium text-white">{selectedProject.duration}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-lg bg-[#1a2a1a] p-4">
                  <Users className="h-5 w-5 text-[#7fb069]" />
                  <div>
                    <p className="text-xs text-white/50">Vagas</p>
                    <p className="text-sm font-medium text-white">
                      {selectedProject.vacancies > 0 ? `${selectedProject.vacancies} disponíveis` : "Encerrado"}
                    </p>
                  </div>
                </div>
              </div>

              {/* Descrição */}
              <div className="mb-6">
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-[#7fb069]">Sobre o projeto</h4>
                <p className="leading-relaxed text-white/80">{selectedProject.description}</p>
              </div>

              {/* Atividades */}
              <div className="mb-8">
                <h4 className="mb-3 text-sm font-semibold uppercase tracking-wider text-[#7fb069]">Atividades</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.activities.map((activity) => (
                    <span key={activity} className="rounded-full bg-[#1a2a1a] px-4 py-2 text-sm text-white/80">
                      {activity}
                    </span>
                  ))}
                </div>
              </div>

              {/* Formulário de inscrição */}
              {selectedProject.status === "Ativo" && !submitted && (
                <div className="rounded-xl bg-[#1a2a1a] p-6">
                  <h4 className="mb-4 text-lg font-semibold text-white">Inscreva-se</h4>

                  {/* Seleção do tipo de inscrição */}
                  {!inscriptionType ? (
                    <div className="grid gap-4 md:grid-cols-2">
                      <button
                        onClick={() => setInscriptionType("voluntario")}
                        className="group rounded-xl border-2 border-[#7fb069]/30 bg-[#0f1f0f] p-6 text-left transition-all hover:border-[#7fb069] hover:bg-[#7fb069]/10"
                      >
                        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#7fb069]/20">
                          <Users className="h-6 w-6 text-[#7fb069]" />
                        </div>
                        <h5 className="mb-1 text-lg font-semibold text-white">Quero ser voluntário</h5>
                        <p className="text-sm text-white/60">
                          Contribua com seu tempo e habilidades para fazer a diferença
                        </p>
                      </button>
                      <button
                        onClick={() => setInscriptionType("participante")}
                        className="group rounded-xl border-2 border-[#7fb069]/30 bg-[#0f1f0f] p-6 text-left transition-all hover:border-[#7fb069] hover:bg-[#7fb069]/10"
                      >
                        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-[#7fb069]/20">
                          <Calendar className="h-6 w-6 text-[#7fb069]" />
                        </div>
                        <h5 className="mb-1 text-lg font-semibold text-white">Quero participar</h5>
                        <p className="text-sm text-white/60">Participe das atividades e transforme sua comunidade</p>
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="mb-4 flex items-center justify-between">
                        <span className="text-sm text-[#7fb069]">
                          Inscrevendo-se como:{" "}
                          <strong>{inscriptionType === "voluntario" ? "Voluntário" : "Participante"}</strong>
                        </span>
                        <button
                          type="button"
                          onClick={() => setInscriptionType(null)}
                          className="text-sm text-white/60 hover:text-white"
                        >
                          Alterar
                        </button>
                      </div>

                      <div className="grid gap-4 md:grid-cols-2">
                        <div>
                          <label className="mb-1 block text-sm text-white/70">Nome completo</label>
                          <Input
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="border-white/20 bg-[#0f1f0f] text-white placeholder:text-white/40"
                            placeholder="Seu nome"
                          />
                        </div>
                        <div>
                          <label className="mb-1 block text-sm text-white/70">E-mail</label>
                          <Input
                            required
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="border-white/20 bg-[#0f1f0f] text-white placeholder:text-white/40"
                            placeholder="seu@email.com"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="mb-1 block text-sm text-white/70">Telefone</label>
                        <Input
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="border-white/20 bg-[#0f1f0f] text-white placeholder:text-white/40"
                          placeholder="(11) 99999-9999"
                        />
                      </div>

                      <div>
                        <label className="mb-1 block text-sm text-white/70">
                          {inscriptionType === "voluntario"
                            ? "Por que você quer ser voluntário?"
                            : "Por que você quer participar?"}
                        </label>
                        <textarea
                          required
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full rounded-md border border-white/20 bg-[#0f1f0f] p-3 text-white placeholder:text-white/40 focus:border-[#7fb069] focus:outline-none focus:ring-1 focus:ring-[#7fb069]"
                          rows={3}
                          placeholder="Conte um pouco sobre você..."
                        />
                      </div>

                      <Button type="submit" className="w-full bg-[#7fb069] py-6 text-white hover:bg-[#6a9a57]">
                        Enviar inscrição
                      </Button>
                    </form>
                  )}
                </div>
              )}

              {/* Mensagem de sucesso */}
              {submitted && (
                <div className="rounded-xl bg-[#7fb069]/20 p-6 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7fb069]">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h4 className="mb-2 text-xl font-semibold text-white">Inscrição enviada!</h4>
                  <p className="text-white/70">
                    Obrigado, {formData.name}! Entraremos em contato pelo e-mail {formData.email} em breve.
                  </p>
                </div>
              )}

              {/* Projeto concluído */}
              {selectedProject.status === "Concluído" && (
                <div className="rounded-xl bg-white/5 p-6 text-center">
                  <p className="text-white/70">
                    Este projeto foi concluído. Fique de olho em nossas redes sociais para novos projetos!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
