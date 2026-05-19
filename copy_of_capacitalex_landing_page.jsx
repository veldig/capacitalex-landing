import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  BriefcaseBusiness,
  CalendarCheck,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Clock3,
  Download,
  GraduationCap,
  Headphones,
  Landmark,
  Laptop,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  Phone,
  Scale,
  ShieldCheck,
  Users,
} from "lucide-react";

const brand = {
  dark: "#003B4A",
  teal: "#63C7CD",
  tealDark: "#008C95",
  soft: "#F5F9FA",
};

const courses = [
  {
    title: "COOTAD",
    subtitle: "Organización Territorial y Descentralización",
    hours: "40 horas",
    icon: Landmark,
  },
  {
    title: "LOSEP",
    subtitle: "Ley Orgánica de Servicio Público",
    hours: "40 horas",
    icon: Users,
  },
  {
    title: "LOSNCP",
    subtitle: "Sistema Nacional de Contratación Pública",
    hours: "40 horas",
    icon: BookOpen,
  },
  {
    title: "Derecho Administrativo",
    subtitle: "Régimen jurídico y procedimiento",
    hours: "40 horas",
    icon: Scale,
  },
  {
    title: "Contratación Pública",
    subtitle: "Normativa, fases y buenas prácticas",
    hours: "30 horas",
    icon: BriefcaseBusiness,
  },
  {
    title: "Sumarios Administrativos",
    subtitle: "Régimen disciplinario y debido proceso",
    hours: "30 horas",
    icon: CalendarCheck,
  },
];

const steps = [
  ["Elige tu curso", "Explora nuestro catálogo y selecciona el programa que impulse tu carrera."],
  ["Regístrate en línea", "Completa tu información y realiza el pago de forma segura."],
  ["Accede a Moodle", "Ingresa al aula virtual desde cualquier lugar y dispositivo."],
  ["Completa y evalúa", "Avanza en módulos, realiza actividades y aprueba la evaluación final."],
  ["Recibe tu certificado", "Obtén tu certificado electrónico de aprobación con código de verificación."],
];

const benefits = [
  [ShieldCheck, "Respaldo institucional", "Operador de Capacitación Calificado por el Ministerio del Trabajo."],
  [GraduationCap, "Docentes especializados", "Profesionales con experiencia en el sector público y privado."],
  [Monitor, "Aula virtual Moodle", "Plataforma moderna, intuitiva y disponible 24/7."],
  [CheckCircle2, "Evaluación de calidad", "Actividades prácticas y evaluaciones que miden tu progreso."],
  [BookOpen, "Certificado electrónico", "Documento digital con código de verificación y validez académica."],
  [Headphones, "Soporte académico", "Acompañamiento y atención personalizada durante el curso."],
];

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-12 w-12">
        <GraduationCap className="absolute left-0 top-0 h-9 w-9 text-[#003B4A]" strokeWidth={2.4} />
        <Landmark className="absolute bottom-0 left-1 h-8 w-8 text-[#003B4A]" strokeWidth={2.2} />
      </div>
      <div className="text-3xl font-semibold tracking-tight">
        <span className="text-[#63C7CD]">Capacita</span><span className="text-[#003B4A]">Lex</span>
      </div>
    </div>
  );
}

function CourseCard({ course }) {
  const Icon = course.icon;
  return (
    <motion.div
      whileHover={{ y: -6 }}
      className="min-w-[220px] rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-xl"
    >
      <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#E8F6F7]">
        <Icon className="h-9 w-9 text-[#008C95]" />
      </div>
      <h3 className="mb-2 text-xl font-bold text-[#003B4A]">{course.title}</h3>
      <p className="mx-auto mb-5 min-h-[48px] max-w-[170px] text-sm leading-relaxed text-slate-600">{course.subtitle}</p>
      <div className="mb-5 flex items-center justify-center gap-4 text-xs font-medium text-[#003B4A]">
        <span className="flex items-center gap-1"><Clock3 className="h-4 w-4 text-[#008C95]" />{course.hours}</span>
        <span className="flex items-center gap-1"><Laptop className="h-4 w-4 text-[#008C95]" />Virtual</span>
      </div>
      <button className="w-full rounded-lg bg-[#003B4A] px-4 py-3 text-sm font-bold text-white transition hover:bg-[#008C95]">
        Ver curso
      </button>
    </motion.div>
  );
}

export default function CapacitaLexLanding() {
  const [index, setIndex] = useState(0);
  const visible = courses.slice(index, index + 5).concat(index + 5 > courses.length ? courses.slice(0, index + 5 - courses.length) : []);

  const next = () => setIndex((index + 1) % courses.length);
  const prev = () => setIndex((index - 1 + courses.length) % courses.length);

  return (
    <main className="min-h-screen bg-white font-sans text-[#003B4A]">
      <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
          <Logo />
          <nav className="hidden items-center gap-8 text-sm font-semibold lg:flex">
            {['Inicio', 'Cursos', 'Catálogo', 'Cómo funciona', 'Empresas / GAD', 'Nosotros', 'Contacto'].map((item, i) => (
              <a key={item} className={`transition hover:text-[#008C95] ${i === 0 ? 'border-b-2 border-[#008C95] pb-1 text-[#008C95]' : ''}`} href={`#${item.toLowerCase().replaceAll(' ', '-')}`}>{item}</a>
            ))}
          </nav>
          <a href="https://wa.me/593991234567" className="hidden items-center gap-2 rounded-xl bg-[#008C95] px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-[#003B4A] md:flex">
            <MessageCircle className="h-4 w-4" /> Hablar por WhatsApp
          </a>
        </div>
      </header>

      <section className="relative overflow-hidden bg-gradient-to-br from-white via-[#F5F9FA] to-white">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight md:text-6xl">
              Capacitación jurídica virtual avalada para <span className="text-[#008C95]">profesionales del Ecuador</span>
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
              Cursos especializados en derecho público, administrativo, laboral y territorial, diseñados para fortalecer competencias profesionales con metodología práctica, evaluación y certificado electrónico.
            </p>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#cursos" className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#003B4A] px-7 py-4 font-bold text-white shadow-lg shadow-slate-200 transition hover:bg-[#008C95]">
                Ver cursos disponibles <ArrowRight className="h-5 w-5" />
              </a>
              <a href="#catalogo" className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#008C95] px-7 py-4 font-bold text-[#008C95] transition hover:bg-[#E8F6F7]">
                <Download className="h-5 w-5" /> Descargar catálogo
              </a>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }} className="relative hidden lg:block">
            <div className="absolute -left-8 top-0 h-full w-16 skew-x-[-18deg] rounded-full bg-[#63C7CD]/80" />
            <div className="relative overflow-hidden rounded-[2rem] bg-white shadow-2xl shadow-slate-200">
              <div className="h-[420px] bg-[radial-gradient(circle_at_30%_20%,#E8F6F7,transparent_35%),linear-gradient(135deg,#ffffff_0%,#eef8f9_45%,#dceff1_100%)] p-10">
                <div className="ml-auto flex h-full max-w-md flex-col justify-between rounded-3xl border border-white/80 bg-white/75 p-8 backdrop-blur">
                  <div>
                    <Logo />
                    <p className="mt-8 text-2xl font-bold leading-snug">Formación legal aplicada para sector público y privado.</p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white p-5 shadow-sm"><Scale className="mb-4 h-8 w-8 text-[#008C95]" /><p className="font-bold">Derecho público</p></div>
                    <div className="rounded-2xl bg-white p-5 shadow-sm"><Laptop className="mb-4 h-8 w-8 text-[#008C95]" /><p className="font-bold">Aula Moodle</p></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="mx-auto max-w-7xl px-6 pb-12">
          <div className="grid gap-4 rounded-2xl bg-white p-5 shadow-xl shadow-slate-100 md:grid-cols-4">
            {[
              [ShieldCheck, "Operador de Capacitación Calificado por el Ministerio del Trabajo"],
              [Monitor, "Modalidad virtual"],
              [BookOpen, "Certificado electrónico de aprobación"],
              [Users, "Evaluación y seguimiento académico"],
            ].map(([Icon, text]) => (
              <div key={text} className="flex items-center gap-4 border-slate-100 md:border-r last:border-none">
                <Icon className="h-10 w-10 shrink-0 text-[#008C95]" />
                <p className="text-sm font-bold leading-snug">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="cursos" className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-extrabold">Explora nuestros programas</h2>
          <p className="mt-3 text-slate-600">Desliza para conocer toda nuestra oferta académica</p>
          <div className="mx-auto mt-4 h-1 w-12 rounded-full bg-[#63C7CD]" />
        </div>
        <div className="relative">
          <button onClick={prev} className="absolute -left-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#003B4A] text-white shadow-lg transition hover:bg-[#008C95]">
            <ChevronLeft />
          </button>
          <div className="grid gap-6 overflow-hidden md:grid-cols-3 lg:grid-cols-5">
            {visible.map((course) => <CourseCard key={`${course.title}-${index}`} course={course} />)}
          </div>
          <button onClick={next} className="absolute -right-4 top-1/2 z-10 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-[#003B4A] text-white shadow-lg transition hover:bg-[#008C95]">
            <ChevronRight />
          </button>
        </div>
        <div className="mt-8 text-center">
          <a href="#catalogo" className="inline-flex items-center gap-2 font-bold text-[#008C95]">Ver todos los cursos <ArrowRight className="h-4 w-4" /></a>
        </div>
      </section>

      <section id="cómo-funciona" className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="mb-14 text-center text-4xl font-extrabold">¿Cómo funciona?</h2>
        <div className="grid gap-8 md:grid-cols-5">
          {steps.map(([title, desc], i) => (
            <div key={title} className="relative text-center">
              <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-[#E8F6F7]">
                <span className="absolute -top-2 flex h-8 w-8 items-center justify-center rounded-full bg-[#008C95] text-sm font-bold text-white">{i + 1}</span>
                {[BookOpen, Users, Laptop, CheckCircle2, BookOpen][i] && React.createElement([BookOpen, Users, Laptop, CheckCircle2, BookOpen][i], { className: "h-9 w-9 text-[#008C95]" })}
              </div>
              <h3 className="mb-2 font-extrabold">{title}</h3>
              <p className="text-sm leading-6 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14">
        <h2 className="mb-10 text-center text-4xl font-extrabold">¿Por qué elegir CapacitaLex?</h2>
        <div className="grid rounded-3xl border border-slate-200 bg-white shadow-sm md:grid-cols-3 lg:grid-cols-6">
          {benefits.map(([Icon, title, desc]) => (
            <div key={title} className="border-b border-slate-100 p-6 text-center md:border-r lg:border-b-0 last:border-r-0">
              <Icon className="mx-auto mb-4 h-10 w-10 text-[#008C95]" />
              <h3 className="mb-2 text-sm font-extrabold">{title}</h3>
              <p className="text-xs leading-5 text-slate-600">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        <div className="grid items-center gap-8 rounded-3xl bg-gradient-to-r from-[#003B4A] to-[#008C95] p-8 text-white md:grid-cols-[1fr_auto_auto]">
          <div className="flex items-center gap-6">
            <GraduationCap className="h-16 w-16 text-[#BEECEF]" />
            <div>
              <h2 className="text-3xl font-extrabold">Impulsa tu perfil profesional con capacitación de calidad</h2>
              <p className="mt-2 text-white/80">Descarga nuestro catálogo completo o contáctanos para recibir asesoría personalizada.</p>
            </div>
          </div>
          <a className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/70 px-7 py-4 font-bold text-white transition hover:bg-white/10" href="#catalogo"><Download /> Descargar catálogo</a>
          <a className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-7 py-4 font-bold text-white transition hover:bg-emerald-600" href="https://wa.me/593991234567"><MessageCircle /> Hablar por WhatsApp</a>
        </div>
      </section>

      <footer className="mt-14 bg-[#003B4A] text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-5">
          <div className="md:col-span-2">
            <Logo />
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/75">Capacitación jurídica especializada para profesionales del Ecuador.</p>
          </div>
          <div><h4 className="mb-4 font-bold">Enlaces rápidos</h4><p className="space-y-2 text-sm text-white/75">Cursos<br/>Catálogo<br/>Cómo funciona<br/>Certificados</p></div>
          <div><h4 className="mb-4 font-bold">Información</h4><p className="space-y-2 text-sm text-white/75">Nosotros<br/>Preguntas frecuentes<br/>Políticas<br/>Términos y condiciones</p></div>
          <div><h4 className="mb-4 font-bold">Contáctanos</h4><p className="space-y-3 text-sm text-white/75"><span className="flex gap-2"><Mail className="h-4 w-4"/> info@capacitalex.com.ec</span><span className="flex gap-2"><Phone className="h-4 w-4"/> +593 99 123 4567</span><span className="flex gap-2"><MapPin className="h-4 w-4"/> Quito, Ecuador</span></p></div>
        </div>
        <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/60">© 2024 CapacitaLex. Todos los derechos reservados.</div>
      </footer>
    </main>
  );
}
