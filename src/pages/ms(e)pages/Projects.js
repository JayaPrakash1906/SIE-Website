import React, { useState, useRef, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/navbar_ms(e)";
import {
  LayoutGrid, Leaf, Laptop2, Building2,
  HeartPulse, Wrench, Linkedin, Rocket, GraduationCap,
  Mail, BookOpen, Users
} from "lucide-react";
import { useDirectory } from "../students";

/* ================= DATA ================= */

const DOMAIN_META = {
  all:     { label: 'All Themes',                icon: LayoutGrid,  color: '#185FA5', bg: '#E8F1FB', text: '#0C3461' },
  sustain: { label: 'Sustainability & Energy',   icon: Leaf,        color: '#1A9E6E', bg: '#E2F5EE', text: '#0A4A35' },
  health:  { label: 'Healthcare & MedTech',      icon: HeartPulse,  color: '#C53030', bg: '#FEE8E8', text: '#7A1A1A' },
  ai:      { label: 'Software & AI',             icon: Laptop2,     color: '#6B46C1', bg: '#F0EBFF', text: '#3B2080' },
  infra:   { label: 'Smart Cities & Mobility',   icon: Building2,   color: '#C05621', bg: '#FEF0E6', text: '#7B3210' },
  hard:    { label: 'Hardware & Manufacturing',  icon: Wrench,      color: '#4A5568', bg: '#EDF0F4', text: '#2D3748' },
};

const getDomain = (title, startup = '') => {
  const t = (title + ' ' + startup).toLowerCase();

  if (
    t.includes('biochar') || t.includes('carbon credit') || t.includes('carbon trading') ||
    t.includes('next carbon') || t.includes('pulseflow') || t.includes('redox') ||
    t.includes('lithium') || t.includes('batter') || t.includes('supercapacitor') ||
    t.includes('batcap') || t.includes('alternative battery') || t.includes('energy') ||
    t.includes('wankel') || t.includes('expander') || t.includes('refriger') ||
    t.includes('air quality') || t.includes('drone') || t.includes('decarbonisation') ||
    t.includes('arantree') || t.includes('fertilizer') || t.includes('sustain') ||
    t.includes('susstains') || t.includes('climate') || t.includes('water quality') ||
    t.includes('water purity') || t.includes('purity of water') || t.includes('aqua') ||
    t.includes('qual grip') || t.includes('pramaan') || t.includes('carbon')
  ) return 'sustain';

  if (
    t.includes('glucose') || t.includes('uniscreen') || t.includes('hospital') ||
    t.includes('plenome') || t.includes('infection') || t.includes('contagious') ||
    t.includes('parkinson') || t.includes('kriya neuro') || t.includes('kinematics') ||
    t.includes('mental wellness') || t.includes('mindverve') || t.includes('metaverse') ||
    t.includes('mixed reality') || t.includes('medical') || t.includes('disease') ||
    t.includes('patient') || t.includes('migraine') || t.includes('neuromodulation') ||
    t.includes('wearable neuro') || t.includes('kidney') ||
    t.includes('digital twin based kidney') || t.includes('laser-processed') ||
    t.includes('laser processed') || t.includes('heavy metal') || t.includes('u-fos') ||
    t.includes('multiplexed') || t.includes('samuel mugin') || t.includes('manu areraa') ||
    t.includes('health')
  ) return 'health';

  if (
    t.includes('railway') || t.includes('rail labs') || t.includes('windshield') ||
    t.includes('glare zero') || t.includes('smart home') || t.includes('gemesh') ||
    t.includes('wi-fi router') || t.includes('urban') || t.includes('automobile') ||
    t.includes('mobility') || t.includes('transport') || t.includes('vehicle')
  ) return 'infra';

  if (
    t.includes('manufacturing') || t.includes('insitu') || t.includes('testing machine') ||
    t.includes('miniaturized') || t.includes('3d printing') || t.includes('simulation') ||
    t.includes('tawakkul') || t.includes('optical') || t.includes('folium') ||
    t.includes('fibre') || t.includes('fiber') || t.includes('bearing') ||
    t.includes('tribology') || t.includes('stratagem') || t.includes('crank') ||
    t.includes('autocrank') || t.includes('vibration') || t.includes('digital twin') ||
    t.includes('autonomous factor') || t.includes('factory') || t.includes('robotic') ||
    t.includes('pavement') || t.includes('nondestructive') || t.includes('ball tracking') ||
    t.includes('sports analytics') || t.includes('cathode') || t.includes('physics model') ||
    t.includes('path planning') || t.includes('navic') || t.includes('precision') ||
    t.includes('guhan') || t.includes('device') || t.includes('sensor') ||
    t.includes('mechanical')
  ) return 'hard';

  return 'ai';
};

// PROJECTS is built inside the component from the shared store's live
// students/facultyMap/facultyDirectory, so edits in the admin table show
// up here immediately.
function buildProjects(students, getFacultyForStudent) {
  return students.map((s, idx) => {
    const dom = getDomain(s.title, s.startup);
    const faculty = getFacultyForStudent(s.id);
    return {
      id: s.roll || `SIE-${String(idx + 1).padStart(3, '0')}`,
      domain: dom,
      yr: s.yr,
      title: s.title,
      startup: s.startup || 'Startup Title TBD',
      students: [{ name: s.name, img: s.image, linkedin: s.linkedin }],
      desc: s.title,
      faculty, // null when not assigned — UI shows nothing
    };
  });
}

/* ================= SUB-COMPONENTS ================= */

function Avatar({ person, meta, size = 90, radius = 12 }) {
  const initials = person.name.split(' ').map(w => w[0]).join('').slice(0, 2).toUpperCase();
  const style = {
    width: size, height: size, borderRadius: radius, overflow: 'hidden',
    flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center',
    backgroundColor: meta.bg, border: `1.5px solid ${meta.color}22`,
  };
  return person.img
    ? <img src={person.img} alt={person.name} style={{ ...style, objectFit: 'cover', objectPosition: 'top' }} />
    : (
      <div style={style}>
        <span style={{ fontSize: Math.round(size * 0.32), fontWeight: 700, color: meta.color, letterSpacing: '-0.5px' }}>
          {initials}
        </span>
      </div>
    );
}

function DomainBadge({ meta }) {
  const Icon = meta.icon;
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: 5,
      fontSize: 11, fontWeight: 600, letterSpacing: '0.02em',
      padding: '3px 9px', borderRadius: 99,
      backgroundColor: meta.bg, color: meta.text,
    }}>
      <Icon size={11} strokeWidth={2.2} />
      {meta.label}
    </span>
  );
}

function SidebarItem({ domKey, meta, active, count, onClick }) {
  const Icon = meta.icon;
  return (
    <button
      onClick={onClick}
      style={{
        display: 'flex', alignItems: 'center', gap: 10,
        width: '100%', padding: '10px 16px 10px 18px',
        borderLeft: `3px solid ${active ? meta.color : 'transparent'}`,
        backgroundColor: active ? meta.bg : 'transparent',
        cursor: 'pointer', border: 'none',
        textAlign: 'left', transition: 'all 0.12s ease',
      }}
      onMouseEnter={e => { if (!active) e.currentTarget.style.backgroundColor = '#F7F9FC'; }}
      onMouseLeave={e => { if (!active) e.currentTarget.style.backgroundColor = 'transparent'; }}
    >
      <span style={{ color: active ? meta.color : '#8899AA', flexShrink: 0 }}>
        <Icon size={16} strokeWidth={2} />
      </span>
      <span style={{
        flex: 1, fontSize: 13, lineHeight: 1.3,
        color: active ? meta.text : '#4A6080',
        fontWeight: active ? 600 : 400,
      }}>
        {meta.label}
      </span>
      <span style={{
        minWidth: 22, height: 20, borderRadius: 99,
        fontSize: 11, fontWeight: 700,
        display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '0 6px',
        backgroundColor: active ? meta.color : '#EEF2F8',
        color: active ? '#fff' : '#8899AA',
      }}>
        {count}
      </span>
    </button>
  );
}

/* ================= GROUPING HELPER ================= */

// Groups projects by faculty.id so students sharing a mentor appear under
// one card. Projects with NO faculty (null) are never merged — each stays
// its own standalone entry and the UI renders no faculty info for it.
function groupByFaculty(projects) {
  const order = [];
  const byId = new Map();
  let noFacultyCounter = 0;

  projects.forEach((p) => {
    if (!p.faculty) {
      const soloKey = `__no-faculty-${noFacultyCounter++}`;
      byId.set(soloKey, { faculty: null, projects: [p] });
      order.push(soloKey);
      return;
    }
    const facId = p.faculty.id || p.faculty.email || p.faculty.name;
    if (!byId.has(facId)) {
      byId.set(facId, { faculty: p.faculty, projects: [] });
      order.push(facId);
    }
    byId.get(facId).projects.push(p);
  });

  return order.map((id) => byId.get(id));
}

/* ================= MAIN ================= */

export default function ProjectsPage() {
  const navigate = useNavigate();
  const go = (p) => { navigate(p === 'apply' ? '/ms(e)/apply' : p); window.scrollTo(0, 0); };

  const { students, getFacultyForStudent } = useDirectory();

  const [activeDomain, setActiveDomain] = useState('all');
  const [expandedId, setExpandedId] = useState(null);

  // Recomputes whenever students/faculty data changes in the shared store.
  const PROJECTS = useMemo(
    () => buildProjects(students, getFacultyForStudent),
    [students, getFacultyForStudent]
  );

  const data = PROJECTS.map(p => ({ ...p, status: 'ongoing' }));
  const filtered = data.filter(p => activeDomain === 'all' || p.domain === activeDomain);
  const getCount = (d) => d === 'all' ? data.length : data.filter(p => p.domain === d).length;
  const years = [...new Set(data.map(p => p.yr).filter(Boolean))].sort((a, b) => b - a);

  return (
    <>
      <Navbar />
      <div
        className="animate-fadeUp font-dm-sans min-h-screen flex flex-col"
        style={{ paddingTop: 64, backgroundColor: '#F4F7FB' }}
      >

        {/* ── PAGE HEADER ── */}
        <div className="px-4 pt-4 pb-4 lg:px-8 lg:pt-5 lg:pb-[18px]" style={{ backgroundColor: '#fff', borderBottom: '1px solid #E4ECF4' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
            <div>
              <p style={{ fontSize: 11, fontWeight: 700, letterSpacing: '0.1em', color: '#185FA5', textTransform: 'uppercase', marginBottom: 4 }}>
                MS(E) Programme · IIT Madras
              </p>
              <h1 className="text-lg lg:text-[22px]" style={{ fontWeight: 700, color: '#0C1F3C', margin: 0, lineHeight: 1.2 }}>
                Student Startups
              </h1>
            </div>
            <button
              onClick={() => go('apply')}
              className="w-full sm:w-auto justify-center"
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 7,
                backgroundColor: '#185FA5', color: '#fff',
                fontSize: 13, fontWeight: 600, padding: '9px 18px',
                borderRadius: 8, border: 'none', cursor: 'pointer',
              }}
            >
              <Rocket size={14} strokeWidth={2} />
              Apply to the Programme
            </button>
          </div>
        </div>

        {/* ── TWO-COLUMN BODY ── */}
        <div className="flex flex-col lg:flex-row lg:overflow-hidden lg:h-[calc(100vh-161px)]" style={{ flex: 1 }}>

          {/* ── SIDEBAR (large screens only — unchanged) ── */}
          <aside
            className="hidden lg:block"
            style={{
              width: 240, flexShrink: 0,
              borderRight: '1px solid #E4ECF4',
              backgroundColor: '#fff',
              overflowY: 'auto', paddingTop: 12, paddingBottom: 24,
            }}
          >
            <p style={{ fontSize: 10.5, fontWeight: 700, letterSpacing: '0.08em', color: '#B0C4DA', padding: '0 18px 8px', textTransform: 'uppercase' }}>
              Theme
            </p>
            {Object.entries(DOMAIN_META).map(([key, meta]) => (
              <SidebarItem
                key={key}
                domKey={key}
                meta={meta}
                active={activeDomain === key}
                count={getCount(key)}
                onClick={() => setActiveDomain(key)}
              />
            ))}
          </aside>

          {/* ── THEME FILTER (medium & small screens only) ── */}
          <div
            className="lg:hidden flex gap-2 overflow-x-auto px-4 py-3"
            style={{ backgroundColor: '#fff', borderBottom: '1px solid #E4ECF4', WebkitOverflowScrolling: 'touch' }}
          >
            {Object.entries(DOMAIN_META).map(([key, meta]) => {
              const Icon = meta.icon;
              const active = activeDomain === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveDomain(key)}
                  className="flex-shrink-0"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 6,
                    fontSize: 12.5, fontWeight: 600, whiteSpace: 'nowrap',
                    padding: '7px 12px', borderRadius: 99, border: 'none', cursor: 'pointer',
                    backgroundColor: active ? meta.color : meta.bg,
                    color: active ? '#fff' : meta.text,
                  }}
                >
                  <Icon size={13} strokeWidth={2.2} />
                  {meta.label}
                  <span style={{
                    fontSize: 10.5, fontWeight: 700, opacity: active ? 0.9 : 0.6,
                  }}>
                    {getCount(key)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* ── MAIN CONTENT ── */}
          <div className="px-4 py-5 lg:px-7 lg:py-6" style={{ flex: 1, overflowY: 'auto', paddingBottom: 60 }}>

            {/* Count + hint row */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
              <p style={{ fontSize: 13, color: '#8899AA', margin: 0 }}>
                <span style={{ fontWeight: 700, color: '#0C1F3C' }}>{filtered.length}</span>
                {' '}startup{filtered.length !== 1 ? 's' : ''}
                {activeDomain !== 'all' && (
                  <span style={{ color: '#185FA5', fontWeight: 500 }}>
                    {' '}· {DOMAIN_META[activeDomain].label}
                  </span>
                )}
              </p>
              <span style={{ fontSize: 11.5, color: '#C5D5E8' }} className="hidden lg:block">
                Click a card to expand
              </span>
            </div>

            {/* Empty state */}
            {filtered.length === 0 && (
              <div style={{
                backgroundColor: '#fff', border: '1px solid #E4ECF4', borderRadius: 14,
                padding: '48px 24px', textAlign: 'center', color: '#8899AA', fontSize: 14,
              }}>
                No startups found for this theme.
              </div>
            )}

            {/* Year groups */}
            {years.map(year => {
              const yearProjects = filtered.filter(p => p.yr === year);
              if (!yearProjects.length) return null;

              const facultyGroups = groupByFaculty(yearProjects);

              return (
                <div key={year} style={{ marginBottom: 32 }}>

                  {/* Year label */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                    <span style={{
                      fontSize: 11, fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase',
                      color: '#185FA5', backgroundColor: '#E8F1FB',
                      padding: '3px 10px', borderRadius: 6,
                    }}>
                      Batch {year}
                    </span>
                    <span style={{ fontSize: 12, color: '#C5D5E8' }}>
                      {yearProjects.length} startup{yearProjects.length !== 1 ? 's' : ''}
                    </span>
                  </div>

                  {/* Cards */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {facultyGroups.map((fg) => {
                      const groupKey = fg.faculty?.id || fg.projects[0].id;
                      const isCombined = fg.projects.length > 1;
                      const primary = fg.projects[0];
                      const meta = DOMAIN_META[primary.domain] || DOMAIN_META['all'];
                      const expanded = expandedId === groupKey;

                      return (
                        <div
                          key={groupKey}
                          style={{
                            backgroundColor: '#fff',
                            border: `1px solid ${expanded ? meta.color + '55' : '#E4ECF4'}`,
                            borderRadius: 14,
                            overflow: 'hidden',
                            transition: 'border-color 0.15s, box-shadow 0.15s',
                            boxShadow: expanded ? `0 0 0 3px ${meta.color}18` : 'none',
                          }}
                        >
                          {/* ── Card row — clickable ── */}
                          <div
                            onClick={() => setExpandedId(expanded ? null : groupKey)}
                            style={{
                              display: 'flex', alignItems: 'center', gap: 0,
                              cursor: 'pointer', padding: 0,
                              backgroundColor: expanded ? meta.bg + '55' : '#fff',
                              borderRadius: expanded ? '14px 14px 0 0' : 14,
                              transition: 'background 0.12s',
                            }}
                            onMouseEnter={e => { if (!expanded) e.currentTarget.style.backgroundColor = '#FAFCFF'; }}
                            onMouseLeave={e => { if (!expanded) e.currentTarget.style.backgroundColor = expanded ? meta.bg + '55' : '#fff'; }}
                          >
                            {/* Left accent bar */}
                            <div style={{
                              width: 4, alignSelf: 'stretch', flexShrink: 0,
                              backgroundColor: expanded ? meta.color : 'transparent',
                              borderRadius: '14px 0 0 14px',
                              transition: 'background 0.15s',
                            }} />

                            {/* ── Student avatar(s) ── */}
                            <div style={{ padding: '16px 14px 16px 12px', flexShrink: 0 }} className="hidden sm:block">
                              {!isCombined ? (
                                <div style={{ textAlign: 'center' }}>
                                  <Avatar person={primary.students[0]} meta={meta} size={80} radius={10} />
                                  <p style={{
                                    fontSize: 10, color: '#8899AA', margin: '5px 0 0',
                                    fontWeight: 500, maxWidth: 80, lineHeight: 1.3,
                                    textAlign: 'center',
                                  }}>
                                    Student
                                  </p>
                                </div>
                              ) : !expanded && (
                                <div style={{ textAlign: 'center', width: 80 }}>
                                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    {fg.projects.slice(0, 3).map((p, i) => (
                                      <div key={i} style={{
                                        marginLeft: i === 0 ? 0 : -14,
                                        zIndex: 3 - i,
                                        border: '2px solid #fff',
                                        borderRadius: 10,
                                      }}>
                                        <Avatar person={p.students[0]} meta={meta} size={44} radius={9} />
                                      </div>
                                    ))}
                                  </div>
                                  <p style={{
                                    fontSize: 10, color: '#8899AA', margin: '5px 0 0',
                                    fontWeight: 500, lineHeight: 1.3, textAlign: 'center',
                                  }}>
                                    {fg.projects.length} students
                                  </p>
                                </div>
                              )}
                            </div>

                            {/* Text block */}
                            <div style={{ flex: 1, minWidth: 0, padding: '16px 0 16px 4px' }}>

                              {/* Domain badge + ID(s) */}
                              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8, flexWrap: 'wrap' }}>
                                <DomainBadge meta={meta} />
                                {isCombined ? (
                                  <span style={{
                                    display: 'inline-flex', alignItems: 'center', gap: 4,
                                    fontSize: 10.5, fontWeight: 700, color: meta.text,
                                    backgroundColor: meta.bg, padding: '2px 8px', borderRadius: 99,
                                  }}>
                                    <Users size={10} strokeWidth={2.5} />
                                    {fg.projects.length} projects
                                  </span>
                                ) : (
                                  <span style={{ fontSize: 10.5, color: '#B0C4DA', fontWeight: 500 }}>{primary.id}</span>
                                )}
                              </div>

                              {!isCombined ? (
                                <>
                                  {/* Startup name */}
                                  <p style={{
                                    fontSize: 15, fontWeight: 700, color: '#0C1F3C',
                                    margin: '0 0 5px', lineHeight: 1.3,
                                    letterSpacing: '-0.01em',
                                  }}>
                                    {primary.startup}
                                  </p>

                                  {/* Title / description preview */}
                                  <p style={{
                                    fontSize: 12.5, color: '#6B7C93', margin: '0 0 10px',
                                    lineHeight: 1.45, fontWeight: 400,
                                    overflow: 'hidden', display: '-webkit-box',
                                    WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
                                  }}>
                                    {primary.title}
                                  </p>

                                  {/* Student founder row */}
                                  <div style={{ display: 'flex', alignItems: 'center', gap: 8, flexWrap: 'wrap' }}>
                                    <span style={{
                                      display: 'inline-flex', alignItems: 'center', gap: 4,
                                      fontSize: 10, fontWeight: 700, letterSpacing: '0.07em',
                                      color: '#0A4A35', backgroundColor: '#E2F5EE',
                                      padding: '2px 7px', borderRadius: 4, textTransform: 'uppercase',
                                    }}>
                                      <GraduationCap size={10} strokeWidth={2.5} />
                                      Founder
                                    </span>
                                    {primary.students.map((s, si) => (
                                      <span key={si} style={{ display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                                        <span style={{ fontSize: 13, color: '#3A5070', fontWeight: 500 }}>{s.name}</span>
                                        {s.linkedin && (
                                          <a
                                            href={s.linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            style={{ color: '#0A66C2', display: 'flex', lineHeight: 1 }}
                                          >
                                            <Linkedin size={13} strokeWidth={1.8} />
                                          </a>
                                        )}
                                        {si < primary.students.length - 1 && <span style={{ color: '#C5D5E8' }}>·</span>}
                                      </span>
                                    ))}
                                  </div>
                                </>
                              ) : !expanded && (
                                <>
                                  <p style={{
                                    fontSize: 12.5, color: '#6B7C93', margin: '0 0 8px', lineHeight: 1.5,
                                  }}>
                                    Mentors {fg.projects.length} student projects across this batch.
                                  </p>
                                  <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                                    {fg.projects.map((p, pi) => (
                                      <div key={pi} style={{ display: 'flex', alignItems: 'center', gap: 6, flexWrap: 'wrap' }}>
                                        <Avatar person={p.students[0]} meta={meta} size={20} radius={5} />
                                        <span style={{ fontSize: 12.5, fontWeight: 600, color: '#0C1F3C' }}>{p.startup}</span>
                                        <span style={{ color: '#C5D5E8' }}>·</span>
                                        <span style={{ fontSize: 12, color: '#6B7C93' }}>{p.students[0].name}</span>
                                        {p.students[0].linkedin && (
                                          <a
                                            href={p.students[0].linkedin}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            onClick={e => e.stopPropagation()}
                                            style={{ color: '#0A66C2', display: 'flex', lineHeight: 1 }}
                                          >
                                            <Linkedin size={12} strokeWidth={1.8} />
                                          </a>
                                        )}
                                      </div>
                                    ))}
                                  </div>
                                </>
                              )}
                            </div>

                            {/* ── FACULTY column (right) ──
                                Only rendered when a faculty is actually assigned.
                                Avatar is centered above the text block; name,
                                department, and email are each forced onto a
                                single line with their FULL text (no truncation,
                                no clamping) — the column widens to fit instead.
                                Clicking anywhere in this column opens the
                                faculty detail modal (with bio) instead of
                                toggling the card's expand/collapse state. */}
                            {fg.faculty && (
                              <div
                                style={{ padding: '16px 20px 16px 12px', flexShrink: 0, width: 260 }}
                                className="hidden md:block"
                              >
                                {/* Avatar — centered, bumped up from 52 to 64 */}
                                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 8 }}>
                                  <Avatar
                                    person={{ name: fg.faculty.name, img: fg.faculty.img }}
                                    meta={meta}
                                    size={64}
                                    radius={10}
                                  />
                                </div>

                                {/* Name — full text, single line, centered under the image */}
                                <p style={{
                                  fontSize: 12, fontWeight: 700, color: '#0C1F3C',
                                  margin: '0 0 5px', lineHeight: 1.3, textAlign: 'center',
                                }}>
                                  {fg.faculty.name}
                                </p>

                                {/* Dept — full text, single line */}
                                {fg.faculty.dept && (
                                  <div style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    gap: 4, marginBottom: 4,
                                  }}>
                                    <BookOpen size={10} strokeWidth={2} style={{ color: '#6B7C93', flexShrink: 0 }} />
                                    <span style={{
                                      fontSize: 10.5, color: '#6B7C93', lineHeight: 1.4,
                                    }}>
                                      {fg.faculty.dept}
                                    </span>
                                  </div>
                                )}

                                {/* Email — full text, single line */}
                                {fg.faculty.email && (
                                  <div style={{
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    gap: 4,
                                  }}>
                                    <Mail size={10} strokeWidth={2} style={{ color: '#185FA5', flexShrink: 0 }} />
                                    <a
                                      href={`mailto:${fg.faculty.email}`}
                                      onClick={e => e.stopPropagation()}
                                      style={{
                                        fontSize: 10.5, color: '#185FA5', textDecoration: 'none', lineHeight: 1.3,
                                      }}
                                    >
                                      {fg.faculty.email}
                                    </a>
                                  </div>
                                )}
                              </div>
                            )}
                          </div>

                          {/* ── EXPANDED PANEL ── */}
                          {expanded && (
                            <div style={{
                              borderTop: `1px solid ${meta.color}33`,
                              padding: '18px 24px 20px',
                              backgroundColor: meta.bg + '44',
                              borderRadius: '0 0 14px 14px',
                            }}>
                              {!isCombined ? (
                                <p style={{ fontSize: 13.5, color: '#3A5070', lineHeight: 1.65, margin: '0 0 18px' }}>
                                  {primary.desc}
                                </p>
                              ) : (
                                <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginBottom: 18 }}>
                                  {fg.projects.map((p, pi) => (
                                    <div key={pi} style={{
                                      display: 'flex', alignItems: 'flex-start', gap: 12,
                                      backgroundColor: '#fff', border: `1px solid ${meta.color}22`,
                                      borderRadius: 10, padding: '12px 14px',
                                    }}>
                                      {/* Per-student image, shown separately for each project */}
                                      <div style={{ flexShrink: 0 }}>
                                        <Avatar person={p.students[0]} meta={meta} size={48} radius={9} />
                                      </div>

                                      <div style={{ flex: 1, minWidth: 0 }}>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4, flexWrap: 'wrap' }}>
                                          <span style={{ fontSize: 13.5, fontWeight: 700, color: '#0C1F3C' }}>{p.startup}</span>
                                          <span style={{ fontSize: 10.5, color: '#B0C4DA' }}>{p.id}</span>
                                        </div>
                                        <p style={{ fontSize: 12.5, color: '#6B7C93', margin: '0 0 6px', lineHeight: 1.55 }}>
                                          {p.desc}
                                        </p>
                                        <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                                          <GraduationCap size={11} strokeWidth={2.2} style={{ color: '#0A4A35' }} />
                                          <span style={{ fontSize: 12, color: '#3A5070', fontWeight: 500 }}>{p.students[0].name}</span>
                                          {p.students[0].linkedin && (
                                            <a
                                              href={p.students[0].linkedin}
                                              target="_blank"
                                              rel="noopener noreferrer"
                                              onClick={e => e.stopPropagation()}
                                              style={{ color: '#0A66C2', display: 'flex', lineHeight: 1 }}
                                            >
                                              <Linkedin size={12} strokeWidth={1.8} />
                                            </a>
                                          )}
                                        </div>
                                      </div>
                                    </div>
                                  ))}
                                </div>
                              )}

                              {/* Faculty detail card in expanded view.
                                  Only rendered when faculty is assigned.
                                  FIX: dept/email no longer force nowrap — they
                                  wrap onto multiple lines on narrow screens
                                  instead of overflowing past the card border.
                                  Clicking it opens the same faculty modal
                                  (with bio). */}
                              {fg.faculty && (
                                <div
                                  style={{
                                    display: 'flex', alignItems: 'flex-start', gap: 14,
                                    backgroundColor: '#fff',
                                    border: `1px solid ${meta.color}33`,
                                    borderRadius: 10,
                                    padding: '14px 16px',
                                    minWidth: 0,
                                  }}
                                >
                                  {/* Avatar */}
                                  <div style={{ flexShrink: 0 }}>
                                    <Avatar
                                      person={{ name: fg.faculty.name, img: fg.faculty.img }}
                                      meta={meta}
                                      size={64}
                                      radius={10}
                                    />
                                  </div>

                                  {/* Text */}
                                  <div style={{ minWidth: 0, flex: 1 }}>
                                    {/* Name — always shown, full text */}
                                    <p style={{
                                      fontSize: 14, fontWeight: 700, color: '#0C1F3C',
                                      margin: '0 0 4px', lineHeight: 1.3,
                                    }}>
                                      {fg.faculty.name}
                                    </p>

                                    {/* Dept — only when non-empty, wraps instead of overflowing */}
                                    {fg.faculty.dept && (
                                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: 4, minWidth: 0 }}>
                                        <BookOpen size={11} strokeWidth={2} style={{ color: meta.color, flexShrink: 0, marginTop: 2 }} />
                                        <span style={{ fontSize: 12, color: '#4A6080', lineHeight: 1.4 }}>
                                          {fg.faculty.dept}
                                        </span>
                                      </div>
                                    )}

                                    {/* Email — only when non-empty, wraps/breaks instead of overflowing */}
                                    {fg.faculty.email && (
                                      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 6, marginBottom: fg.faculty.bio ? 8 : 0, minWidth: 0 }}>
                                        <Mail size={11} strokeWidth={2} style={{ color: meta.color, flexShrink: 0, marginTop: 2 }} />
                                        <a
                                          href={`mailto:${fg.faculty.email}`}
                                          style={{ fontSize: 12, color: '#185FA5', textDecoration: 'none', lineHeight: 1.4, wordBreak: 'break-word' }}
                                        >
                                          {fg.faculty.email}
                                        </a>
                                      </div>
                                    )}

                                    {/* Bio — full text, always visible in this bottom card */}
                                    {fg.faculty.bio && (
                                      <p style={{
                                        fontSize: 12, color: '#6B7C93', margin: 0, lineHeight: 1.6,
                                      }}>
                                        {fg.faculty.bio}
                                      </p>
                                    )}
                                  </div>
                                </div>
                              )}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}