"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Heart, CheckCircle2 } from "lucide-react"

export function Donate() {
  const [amount, setAmount] = useState("100")
  const [paymentMethod, setPaymentMethod] = useState("pix")
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [isSubmitted, setIsSubmitted] = useState(false)

  const suggestedAmounts = [
    { value: "50", label: "R$ 50" },
    { value: "100", label: "R$ 100" },
    { value: "200", label: "R$ 200" },
    { value: "500", label: "R$ 500" },
  ]

  const paymentMethods = [
    { value: "pix", label: "Pix" },
    { value: "card", label: "Cartão de Crédito" },
    { value: "boleto", label: "Boleto Bancário" },
  ]

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (name && email && amount && paymentMethod) {
      setIsSubmitted(true)
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <section id="doe-agora" className="relative flex min-h-screen items-center bg-[#0f1f0f] py-20">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-40 top-1/4 h-80 w-80 rounded-full bg-[#7fb069]/10 blur-3xl" />
        <div className="absolute -right-40 bottom-1/4 h-80 w-80 rounded-full bg-[#7fb069]/5 blur-3xl" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            {/* Left - Message */}
            <div className="flex flex-col justify-center">
              <span className="mb-4 inline-block text-xs font-medium uppercase tracking-widest text-[#7fb069]">
                Apoie nossa causa
              </span>
              <h2 className="mb-6 font-serif text-4xl font-medium tracking-tight text-white md:text-5xl">
                Faça parte desta <span className="italic text-[#7fb069]">transformação</span>
              </h2>
              <p className="mb-8 text-base leading-relaxed text-white/70">
                Sua contribuição fortalece nossos projetos e ajuda a formar jovens lideranças nos territórios
                periféricos de São Paulo. Cada doação é um passo em direção a um futuro mais justo e sustentável.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7fb069]/20">
                    <Heart className="h-4 w-4 text-[#7fb069]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Impacto direto</h4>
                    <p className="text-sm text-white/60">100% destinado aos projetos sociais</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#7fb069]/20">
                    <CheckCircle2 className="h-4 w-4 text-[#7fb069]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-white">Transparência total</h4>
                    <p className="text-sm text-white/60">Prestação de contas mensal</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Form */}
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:p-8">
              {isSubmitted ? (
                <div className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#7fb069]/20">
                    <CheckCircle2 className="h-8 w-8 text-[#7fb069]" />
                  </div>
                  <h3 className="mb-2 text-xl font-medium text-white">Obrigado, {name}!</h3>
                  <p className="text-sm text-white/70">Sua doação de R$ {amount} foi registrada com sucesso.</p>
                </div>
              ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm text-white/80">
                      Nome completo
                    </Label>
                    <Input
                      id="name"
                      placeholder="Seu nome"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="h-11 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-[#7fb069] focus:ring-[#7fb069]"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm text-white/80">
                      E-mail
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="h-11 border-white/20 bg-white/10 text-white placeholder:text-white/50 focus:border-[#7fb069] focus:ring-[#7fb069]"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm text-white/80">Valor da doação</Label>
                    <div className="grid grid-cols-2 gap-3">
                      {suggestedAmounts.map((option) => (
                        <label
                          key={option.value}
                          className={`flex cursor-pointer items-center justify-center rounded-lg border p-3 transition-all ${
                            amount === option.value
                              ? "border-[#7fb069] bg-[#7fb069]/20 text-white"
                              : "border-white/20 bg-transparent text-white/70 hover:border-white/40 hover:bg-white/5"
                          }`}
                        >
                          <input
                            type="radio"
                            name="amount"
                            value={option.value}
                            checked={amount === option.value}
                            onChange={(e) => setAmount(e.target.value)}
                            className="sr-only"
                          />
                          <span className="text-sm font-medium">{option.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-sm text-white/80">Forma de pagamento</Label>
                    <div className="space-y-2">
                      {paymentMethods.map((method) => (
                        <label
                          key={method.value}
                          className={`flex cursor-pointer items-center gap-3 rounded-lg border p-3 transition-all ${
                            paymentMethod === method.value
                              ? "border-[#7fb069] bg-[#7fb069]/20"
                              : "border-white/20 bg-transparent hover:border-white/40 hover:bg-white/5"
                          }`}
                        >
                          <input
                            type="radio"
                            name="payment"
                            value={method.value}
                            checked={paymentMethod === method.value}
                            onChange={(e) => setPaymentMethod(e.target.value)}
                            className="sr-only"
                          />
                          <div
                            className={`flex h-5 w-5 items-center justify-center rounded-full border-2 ${
                              paymentMethod === method.value ? "border-[#7fb069]" : "border-white/40"
                            }`}
                          >
                            {paymentMethod === method.value && (
                              <div className="h-2.5 w-2.5 rounded-full bg-[#7fb069]" />
                            )}
                          </div>
                          <span className="text-sm font-medium text-white">{method.label}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="h-12 w-full rounded-full bg-[#7fb069] text-base font-medium text-white transition-all hover:bg-[#6a9c54] hover:scale-[1.02]"
                  >
                    Doar R$ {amount}
                  </Button>

                  <p className="text-center text-xs text-white/50">Pagamento seguro e criptografado</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
