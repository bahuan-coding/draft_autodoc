import * as Accordion from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import SectionReveal from "@/components/SectionReveal";

const faqs = [
  {
    value: "item-1",
    question: "O que é o Autodoc?",
    answer: "O Autodoc é uma plataforma de gestão digital para construção civil que integra projetos, documentos, fornecedores e mão de obra em um único ambiente. Com dois produtos — Autodoc Projetos (CDE) e Autodoc Workforce (gestão de fornecedores e canteiro) — e 21 agentes de IA para validação automática de documentos, a plataforma automatiza processos, reduz riscos e aumenta a produtividade da sua obra. A Autodoc é uma empresa Ambar, com mais de 20 anos no mercado."
  },
  {
    value: "item-2",
    question: "Qual a diferença entre Autodoc Projetos e Autodoc Workforce?",
    answer: "O Autodoc Projetos é um CDE (Common Data Environment) para gestão de projetos arquitetônicos, estruturais, hidráulicos e elétricos, com controle de revisões, workflow de aprovação e distribuição automática. O Autodoc Workforce é focado em gestão de fornecedores e canteiro: homologação, validação de documentos (CNPJ, CND, CRF, CNDT, ASO, NRs, EPIs), controle de acesso biométrico e compliance trabalhista. Juntos, cobrem todo o ciclo da construção."
  },
  {
    value: "item-3",
    question: "O que são os Agentes GD4 e quais documentos eles validam?",
    answer: "Os Agentes GD4 são 21 sistemas de inteligência artificial especializados em validação automática de documentos. Eles cobrem 4 categorias: Empresa (CNPJ, CND Federal, CRF/FGTS, CNDT, Contrato Social), Trabalhador (ASO, NR-18, NR-35, NR-10, NR-33, Ficha de EPI), Técnico (ART, RRT, Alvará de Construção, Licença Ambiental) e Fiscal (GFIP/SEFIP, GPS, NFS-e, Retenções). Cada agente extrai dados, valida conformidade e gera parecer automático."
  },
  {
    value: "item-4",
    question: "Quais construtoras usam o Autodoc?",
    answer: "O Autodoc é utilizado por mais de 3.500 empresas, incluindo 60 das 100 maiores construtoras do Brasil — MRV, Direcional, Tenda, Cury, Cyrela, Even e Patrimar, entre outras. São mais de 195 mil usuários ativos na plataforma."
  },
  {
    value: "item-5",
    question: "O Autodoc é compatível com BIM?",
    answer: "Sim. O Autodoc Projetos possui visualizador BIM integrado, compatível com os principais softwares de modelagem (Revit, ArchiCAD, Tekla). Você pode fazer upload de modelos IFC, visualizá-los na plataforma e vinculá-los aos projetos e documentos correspondentes."
  },
  {
    value: "item-6",
    question: "Quanto tempo leva para implementar?",
    answer: "A implementação é rápida e assistida. Nossa equipe de Customer Success acompanha onboarding, migração de dados e treinamento. A maioria dos clientes está operando em menos de 2 semanas. Para operações maiores (100+ obras), o prazo típico é de 4-6 semanas com suporte dedicado."
  }
];

export default function FAQSection() {
  return (
    <section className="py-16 sm:py-20 lg:py-32">
      <div className="container max-w-3xl">
        <SectionReveal>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold">
              Perguntas <span className="gradient-text">frequentes</span>
            </h2>
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="glass-card p-6 sm:p-8">
            <Accordion.Root type="single" collapsible className="w-full">
              {faqs.map((faq) => (
                <Accordion.Item
                  key={faq.value}
                  value={faq.value}
                  className="border-b border-white/5 last:border-0"
                >
                  <Accordion.Header className="flex">
                    <Accordion.Trigger className="w-full flex items-center justify-between py-5 text-left group focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:outline-none rounded-md px-2 -mx-2">
                      <span className="text-base sm:text-lg font-semibold text-white group-hover:text-blue-400 transition-colors pr-4">
                        {faq.question}
                      </span>
                      <ChevronDown
                        size={20}
                        className="text-navy-400 transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-data-[state=open]:rotate-180 shrink-0"
                        aria-hidden="true"
                      />
                    </Accordion.Trigger>
                  </Accordion.Header>
                  <Accordion.Content className="overflow-hidden text-navy-300 text-sm sm:text-base leading-relaxed data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
                    <div className="pb-5 px-2 -mx-2">{faq.answer}</div>
                  </Accordion.Content>
                </Accordion.Item>
              ))}
            </Accordion.Root>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
