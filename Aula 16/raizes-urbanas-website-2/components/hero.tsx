import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/lush-green-tropical-forest-with-sunlight-filtering.jpg" alt="Natureza urbana" className="h-full w-full object-cover" />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a150a]/90 via-[#0a150a]/60 to-transparent" />
      </div>

      {/* Content - com padding-top para compensar o header fixo */}
      <div className="relative z-10 flex min-h-screen items-center pt-16">
        <div className="container mx-auto px-6">
          <div className="max-w-xl">
            {/* Título com fonte serif elegante */}
            <h1 className="mb-5 font-serif text-4xl font-medium leading-[1.1] tracking-tight text-white md:text-5xl lg:text-6xl">
              Janela para o mundo da <span className="italic">transformação urbana</span>
            </h1>

            <p className="mb-8 max-w-md text-sm leading-relaxed text-white/85 md:text-base">
              Explore a riqueza da natureza urbana e descubra como transformamos concreto em vida através das nossas
              hortas comunitárias em São Paulo.
            </p>

            <Button
              size="sm"
              className="rounded-full bg-[#7fb069] px-6 text-sm font-medium text-white hover:bg-[#6a9c54]"
              asChild
            >
              <Link href="#doe-agora">Apoie Nosso Trabalho</Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Gradient bar at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#7fb069] via-[#9fcc8f] to-[#7fb069]" />
    </section>
  )
}
