import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BarChart2,
  BookOpen,
  CheckCircle2,
  Clock3,
  Download,
  Facebook,
  GraduationCap,
  Headphones,
  Instagram,
  Landmark,
  Laptop,
  Linkedin,
  ListChecks,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  Phone,
  Scale,
  Search,
  ShieldCheck,
  UserPlus,
  Users,
  Youtube,
} from "lucide-react";

const courses = [
  {
    title: "COOTAD – Organización Territorial y Descentralización",
    description:
      "Estudio integral del COOTAD, competencias territoriales y gestión pública local.",
    hours: "40 horas",
    level: "Intermedio",
    icon: Landmark,
  },
  {
    title: "Ley Orgánica de Servicio Público (LOSEP)",
    description:
      "Aplicación práctica de la LOSEP, régimen disciplinario, derechos, deberes y régimen administrativo.",
    hours: "40 horas",
    level: "Intermedio",
    icon: Users,
  },
  {
    title: "Contratación Pública (LOSNCP)",
    description:
      "Normativa, procedimientos, fases contractuales y buenas prácticas en la contratación pública.",
    hours: "40 horas",
    level: "Intermedio",
    icon: BookOpen,
  },
  {
    title: "Derecho Administrativo Sancionador",
    description:
      "Principios, procedimiento sancionador, medidas administrativas y debido proceso.",
    hours: "30 horas",
    level: "Intermedio",
    icon: Scale,
  },
];

const steps = [
  { icon: Search, title: "Elige tu curso", desc: "Explora nuestro catálogo y selecciona el curso que impulse tu carrera." },
  { icon: UserPlus, title: "Regístrate en línea", desc: "Completa tu información y realiza el pago de forma segura." },
  { icon: GraduationCap, title: "Accede a Moodle", desc: "Ingresa al aula virtual desde cualquier lugar y dispositivo." },
  { icon: ListChecks, title: "Completa y evalúate", desc: "Avanza en los módulos, realiza actividades y aprueba la evaluación final." },
  { icon: Award, title: "Recibe tu certificado", desc: "Obtén tu certificado electrónico de aprobación con código de verificación." },
];

const benefits = [
  { icon: ShieldCheck, title: "Respaldo institucional", desc: "Operador de capacitación calificado por el Ministerio del Trabajo." },
  { icon: Users, title: "Docentes especialistas", desc: "Profesionales con amplia experiencia en el sector público y privado." },
  { icon: Monitor, title: "Aula virtual Moodle", desc: "Plataforma moderna, intuitiva y disponible 24/7." },
  { icon: BarChart2, title: "Evaluación de calidad", desc: "Actividades prácticas y evaluaciones que miden tu progreso." },
  { icon: BookOpen, title: "Certificado electrónico", desc: "Documento digital con código de verificación y validez académica." },
  { icon: Headphones, title: "Soporte académico", desc: "Acompañamiento y atención personalizada durante todo el curso." },
];

function Logo({ light = false }) {
  return (
    <div className="flex items-center gap-2">
      <div className="relative h-11 w-11 shrink-0">
        <GraduationCap
          className={`absolute left-0 top-0 h-8 w-8 ${light ? "text-white" : "text-[#003B4A]"}`}
          strokeWidth={2.4}
        />
        <Landmark
          className={`absolute bottom-0 left-1 h-7 w-7 ${light ? "text-white" : "text-[#003B4A]"}`}
          strokeWidth={2.2}
        />
      </div>
      <div className="text-2xl font-bold tracking-tight">
        <span className="text-[#63C7CD]">Capacita</span>
        <span className={light ? "text-white" : "text-[#003B4A]"}>Lex</span>
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  const Icon = course.icon;
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md"
    >
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F6F7]">
        <Icon className="h-9 w-9 text-[#008C95]" />
      </div>
      <h3 className="mb-3 text-center text-[15px] font-bold leading-snug text-[#003B4A]">
        {course.title}
      </h3>
      <p className="mb-5 flex-1 text-center text-sm leading-relaxed text-slate-500">
        {course.description}
      </p>
      <div className="mb-4 flex items-center justify-center gap-3 border-t border-slate-100 pt-4 text-xs text-slate-500">
        <span className="flex items-center gap-1">
          <Clock3 className="h-3.5 w-3.5 text-[#008C95]" />
          {course.hours}
        </span>
        <span className="flex items-center gap-1">
          <Laptop className="h-3.5 w-3.5 text-[#008C95]" />
          Virtual
        </span>
        <span className="flex items-center gap-1">
          <BarChart2 className="h-3.5 w-3.5 text-[#008C95]" />
          {course.level}
        </span>
      </div>
      <button className="mb-3 w-full rounded-lg bg-[#008C95] py-3 text-sm font-bold text-white transition hover:bg-[#003B4A]">
        Inscribirme
      </button>
      <a
        href="#"
        className="flex items-center justify-center gap-1 text-sm font-semibold text-[#008C95] hover:underline"
      >
        Ver contenido <ArrowRight className="h-4 w-4" />
      </a>
    </motion.div>
  );
}

export default function CapacitaLexLanding() {
  return (
    <main className="min-h-screen bg-white font-sans text-[#003B4A]">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            {[
              ["Inicio", "#inicio"],
              ["Cursos", "#cursos"],
              ["Catálogo", "#catalogo"],
              ["Nosotros", "#nosotros"],
              ["Contacto", "#contacto"],
            ].map(([label, href], i) => (
              <a
                key={label}
                href={href}
                className={`transition hover:text-[#008C95] ${
                  i === 0
                    ? "border-b-2 border-[#008C95] pb-0.5 text-[#008C95]"
                    : "text-[#003B4A]"
                }`}
              >
                {label}
              </a>
            ))}
          </nav>
          <a
            href="#cursos"
            className="hidden rounded-xl bg-[#008C95] px-6 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#003B4A] md:block"
          >
            Inscríbete ahora
          </a>
        </div>
      </header>

      {/* Hero */}
      <section
        id="inicio"
        className="overflow-hidden bg-gradient-to-br from-white via-[#F5F9FA] to-white"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 lg:grid-cols-2 lg:py-24">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Formación jurídica virtual para profesionales del{" "}
              <span className="text-[#008C95]">Ecuador</span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-8 text-slate-600">
              Cursos especializados en derecho público, administrativo, laboral y
              territorial, con metodología práctica, evaluación y certificado
              electrónico de aprobación.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#cursos"
                className="inline-flex items-center gap-2 rounded-xl bg-[#008C95] px-7 py-4 font-bold text-white shadow-md transition hover:bg-[#003B4A]"
              >
                Ver cursos
              </a>
              <a
                href="#catalogo"
                className="inline-flex items-center gap-2 rounded-xl border-2 border-[#008C95] px-7 py-4 font-bold text-[#008C95] transition hover:bg-[#E8F6F7]"
              >
                <Download className="h-5 w-5" /> Descargar catálogo
              </a>
            </div>
          </motion.div>

          {/* Hero image with teal stripe */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative hidden lg:block"
          >
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="absolute left-0 top-0 z-10 h-full w-14 origin-top-left -skew-x-6 bg-[#63C7CD]/80" />
              {/* Replace this src with your actual hero photo */}
              <img
                src="https://picsum.photos/seed/legallaw/640/460"
                alt="Formación jurídica virtual"
                className="h-[460px] w-full object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Trust bar */}
        <div className="mx-auto max-w-7xl px-6 pb-14">
          <div className="grid gap-4 rounded-2xl bg-white p-5 shadow-xl shadow-slate-100 md:grid-cols-4">
            {[
              [ShieldCheck, "Operador calificado por el Ministerio del Trabajo"],
              [Monitor, "Modalidad virtual"],
              [BookOpen, "Certificado electrónico de aprobación"],
              [Users, "Evaluación y seguimiento académico"],
            ].map(([Icon, text]) => (
              <div
                key={text}
                className="flex items-center gap-4 border-slate-100 px-4 md:border-r last:border-none"
              >
                <Icon className="h-10 w-10 shrink-0 text-[#008C95]" />
                <p className="text-sm font-semibold leading-snug text-[#003B4A]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses */}
      <section id="cursos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-extrabold text-[#003B4A]">Cursos destacados</h2>
          <p className="mt-3 text-slate-500">
            Programas actualizados y diseñados para profesionales exigentes.
          </p>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#63C7CD]" />
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {courses.map((course) => (
            <CourseCard key={course.title} course={course} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#catalogo"
            className="inline-flex items-center gap-2 rounded-xl border-2 border-[#008C95] px-8 py-3 font-bold text-[#008C95] transition hover:bg-[#E8F6F7]"
          >
            Ver todos los cursos
          </a>
        </div>
      </section>

      {/* How it works */}
      <section id="como-funciona" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-16 text-center text-4xl font-extrabold text-[#003B4A]">
          ¿Cómo funciona?
        </h2>
        <div className="relative grid gap-8 md:grid-cols-5">
          <div className="absolute left-[10%] right-[10%] top-10 hidden h-px border-t-2 border-dashed border-[#008C95]/30 md:block" />
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <div key={title} className="relative flex flex-col items-center text-center">
              <div className="relative mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F6F7]">
                <span className="absolute -top-2 right-0 flex h-7 w-7 items-center justify-center rounded-full bg-[#008C95] text-xs font-bold text-white shadow">
                  {i + 1}
                </span>
                <Icon className="h-9 w-9 text-[#008C95]" />
              </div>
              <h3 className="mb-2 font-extrabold text-[#003B4A]">{title}</h3>
              <p className="text-sm leading-6 text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why CapacitaLex */}
      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="mb-3 text-center text-4xl font-extrabold text-[#003B4A]">
          ¿Por qué elegir CapacitaLex?
        </h2>
        <div className="mx-auto mb-10 h-1 w-12 rounded-full bg-[#63C7CD]" />
        <div className="grid rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-3 lg:grid-cols-6">
          {benefits.map(({ icon: Icon, title, desc }, i) => (
            <div
              key={title}
              className={`p-6 text-center ${
                i < benefits.length - 1
                  ? "border-b border-slate-100 md:border-b-0 md:border-r"
                  : ""
              }`}
            >
              <Icon className="mx-auto mb-4 h-10 w-10 text-[#008C95]" />
              <h3 className="mb-2 text-sm font-extrabold text-[#003B4A]">{title}</h3>
              <p className="text-xs leading-5 text-slate-500">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid items-center gap-6 rounded-3xl border border-slate-200 bg-[#F5F9FA] p-8 md:grid-cols-[auto_1fr_auto_auto]">
          <div className="hidden md:block">
            <div className="relative h-14 w-14">
              <GraduationCap
                className="absolute left-0 top-0 h-10 w-10 text-[#003B4A]"
                strokeWidth={2.2}
              />
              <Landmark
                className="absolute bottom-0 left-1 h-9 w-9 text-[#003B4A]"
                strokeWidth={2.1}
              />
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-extrabold text-[#003B4A]">
              Impulsa tu perfil profesional con capacitación de calidad
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Descarga nuestro catálogo completo o contáctanos para recibir asesoría personalizada.
            </p>
          </div>
          <a
            href="#catalogo"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-[#008C95] px-6 py-3 font-bold text-[#008C95] transition hover:bg-[#E8F6F7]"
          >
            <Download className="h-4 w-4" /> Descargar catálogo
          </a>
          <a
            href="https://wa.me/593991234567"
            className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl bg-[#008C95] px-6 py-3 font-bold text-white transition hover:bg-[#003B4A]"
          >
            <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-10 bg-[#003B4A] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-5">
          <div>
            <Logo light />
            <p className="mt-4 text-sm leading-6 text-white/70">
              Capacitación jurídica especializada para profesionales del Ecuador.
            </p>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Enlaces rápidos</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {["Cursos", "Catálogo", "Cómo funciona", "Certificados"].map((l) => (
                <li key={l}>
                  <a href="#" className="transition hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Información</h4>
            <ul className="space-y-2 text-sm text-white/70">
              {["Nosotros", "Preguntas frecuentes", "Políticas", "Contacto"].map((l) => (
                <li key={l}>
                  <a href="#" className="transition hover:text-white">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Contáctanos</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0" /> info@capacitalex.com.ec
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0" /> +593 99 123 4567
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 shrink-0" /> Quito, Ecuador
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 font-bold">Síguenos</h4>
            <div className="flex gap-3">
              {[
                [Facebook, "Facebook"],
                [Instagram, "Instagram"],
                [Linkedin, "LinkedIn"],
                [Youtube, "YouTube"],
              ].map(([Icon, label]) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 text-white/70 transition hover:border-white hover:text-white"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 px-6 py-4">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 text-xs text-white/50 md:flex-row">
            <span>© 2024 CapacitaLex. Todos los derechos reservados.</span>
            <span>Operador de Capacitación Calificado por el Ministerio del Trabajo</span>
          </div>
        </div>
      </footer>
    </main>
  );
}
