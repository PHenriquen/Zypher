import type { CSSProperties } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { divisions, projects } from "../../src/brand";
import { IdentityMark } from "../../src/components/IdentityMark";
import { SiteFooter } from "../../src/components/SiteFooter";
import { SiteHeader } from "../../src/components/SiteHeader";

export const metadata: Metadata = { title: "Sistema de marca" };

function accentStyle(color: string) {
  return { "--accent": color } as CSSProperties;
}

export default function BrandPage() {
  return (
    <main>
      <SiteHeader />
      <section className="detail-hero shell">
        <p className="eyebrow">Sistema de identidade / v3</p>
        <div className="detail-hero-grid">
          <div>
            <h1>Relacionadas por regras.<br />Não por repetição.</h1>
            <p>A identidade principal permanece monocromática. Cada área tem cor e símbolo próprios para organizar os projetos, sem representar uma empresa ou uma divisão operacional.</p>
          </div>
          <IdentityMark src="/brand/sypher.svg" alt="Símbolo principal da Zypher" size="lg" />
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="section-index">01 / Marca-mãe</p>
          <div><h2>Zypher</h2><p className="section-copy">A marca principal continua geométrica, neutra e corporativa para apresentar software, IA, hardware, pesquisa e experiências interativas sem ficar visualmente presa a uma área.</p></div>
        </div>
        <div className="palette-row neutral-palette">
          <div><i style={{ background: "#07090D" }} /><span>Obsidian</span><code>#07090D</code></div>
          <div><i style={{ background: "#0D1016" }} /><span>Carbon</span><code>#0D1016</code></div>
          <div><i style={{ background: "#F4F6F8" }} /><span>Porcelain</span><code>#F4F6F8</code></div>
          <div><i style={{ background: "#919AA8" }} /><span>Steel</span><code>#919AA8</code></div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="section-index">02 / Áreas</p>
          <div><h2>Disciplinas distintas. Um padrão compartilhado.</h2><p className="section-copy">Intelligence é azul, Products verde, Labs vermelha e Interactive preto/amarelo. Systems e Engineering mantêm suas próprias linguagens técnicas. A família é construída por geometria compacta e rigor visual, não pela cópia de uma mesma silhueta.</p></div>
        </div>
        <div className="brand-grid">
          {divisions.map((division) => (
            <article className={`brand-card division-${division.slug}`} key={division.slug} style={accentStyle(division.color)}>
              <IdentityMark src={division.mark} alt={`Símbolo da Zypher ${division.name}`} size="md" />
              <div><p className="division-brand">Zypher</p><h3>{division.name}</h3><strong>{division.markName}</strong><p>{division.tone}</p><code>{division.color}</code></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="section-index">03 / Identidade pessoal</p>
          <div><h2>After Hours reúne interesses pessoais fora dos projetos técnicos.</h2><p className="section-copy">Roxo é reservado ao espaço pessoal. Arte, streaming e conteúdo não devem ser confundidos com produtos tecnológicos.</p></div>
        </div>
        <Link className="after-hours-brand-card" href="/after-hours" style={accentStyle("#7C4DFF")}>
          <IdentityMark src="/brand/after-hours.svg" alt="Símbolo After Hours" size="md" />
          <div><span>Interesses pessoais</span><strong>After Hours</strong><p>Arte · Streaming · Experimentos de creator</p></div>
        </Link>
      </section>

      <section className="section shell">
        <div className="section-heading">
          <p className="section-index">04 / Projetos</p>
          <div><h2>Produtos são endossados, não engolidos.</h2><p className="section-copy">Cada projeto tem identidade e estágio próprios. As áreas servem apenas para navegação e contexto.</p></div>
        </div>
        <div className="project-mark-grid">
          {projects.map((project) => (
            <Link href={`/projects/${project.slug}`} className="project-mark-card" key={project.slug} style={accentStyle(project.accent)}>
              <IdentityMark src={project.mark} alt={`Logo ${project.name}`} size="md" />
              <div><strong>{project.name}</strong><span>{project.category}</span></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section shell rules-grid-section">
        <p className="section-index">05 / Regras</p>
        <div className="rules-grid">
          <article><span>01</span><h3>Silhueta primeiro</h3><p>O símbolo precisa funcionar antes de glow, blur ou animação.</p></article>
          <article><span>02</span><h3>Cor significa linhagem</h3><p>Azul, verde, vermelho, laranja e amarelo carregam função; não são gradientes decorativos aleatórios.</p></article>
          <article><span>03</span><h3>Tipografia tem função</h3><p>Zypher permanece neutra; Interactive pode ser pixel/game-native; Labs é técnica; After Hours é mais autoral.</p></article>
          <article><span>04</span><h3>Autonomia de produto</h3><p>LUMI, SyncHub, S.V.I. 4.0, Manopla Inteligente e Ressonância Zero possuem propostas independentes.</p></article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
