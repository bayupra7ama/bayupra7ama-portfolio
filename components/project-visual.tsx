import type { ReactNode } from "react";
import type { Project } from "@/lib/projects";
import { FiActivity, FiArrowDownLeft, FiArrowUpRight, FiBookOpen, FiCamera, FiCheck, FiCheckCircle, FiClock, FiCreditCard, FiMapPin, FiMessageCircle, FiNavigation, FiPlus, FiTrendingUp, FiUser } from "react-icons/fi";

function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <div className={`pv-phone ${className}`}><div className="pv-phone-camera" /><div className="pv-phone-screen">{children}</div><div className="pv-home-bar" /></div>;
}
function Finance() {
  return <div className="pv-scene pv-finance">
    <div className="pv-finance-slip"><FiCheckCircle /> Transaction saved <strong>+ Rp 125.000</strong></div>
    <Phone className="pv-finance-phone">
      <div className="pv-app-top"><span>MUDAH CATAT</span><span className="pv-avatar">B</span></div>
      <div className="pv-greeting">Good morning, Bayu ✦</div>
      <div className="pv-balance"><small>Total balance</small><strong>Rp 8.425.000</strong><span><FiTrendingUp /> +12.8% this month</span></div>
      <div className="pv-money-row"><div><FiArrowDownLeft /><small>Income</small><b>Rp 4.250.000</b></div><div><FiArrowUpRight /><small>Expenses</small><b>Rp 1.180.000</b></div></div>
      <div className="pv-list-heading">Recent activity <span>See all →</span></div>
      <div className="pv-transaction"><span><FiCreditCard /></span><div><b>Daily sales</b><small>Today, 10:42</small></div><strong>+ 125k</strong></div>
      <div className="pv-transaction"><span><FiUser /></span><div><b>Debt payment</b><small>Yesterday</small></div><strong>+ 80k</strong></div>
      <div className="pv-mini-nav"><span>⌂</span><span>▤</span><span className="pv-nav-plus"><FiPlus /></span><span>◫</span><span>◉</span></div>
    </Phone>
    <div className="pv-finance-float"><span>WEEKLY SALES</span><div className="pv-bars">{[42,64,50,82,60,100,72].map((h,i)=><i key={i} style={{height:`${h}%`}} />)}</div><strong>Rp 2.450.000</strong></div>
  </div>;
}
function MapScene() {
  return <div className="pv-scene pv-map">
    <div className="pv-map-grid"><div className="pv-water" /><div className="pv-road pv-road-one" /><div className="pv-road pv-road-two" /><div className="pv-road pv-road-three" /><div className="pv-map-label pv-map-label-one">DANAU BUATAN</div><div className="pv-map-label pv-map-label-two">PEKANBARU</div>
      <span className="pv-pin pv-pin-one"><FiMapPin /></span><span className="pv-pin pv-pin-two"><FiMapPin /></span><span className="pv-pin pv-pin-three"><FiMapPin /></span><div className="pv-map-route" /><div className="pv-user-dot" />
    </div>
    <div className="pv-map-search"><FiMapPin /><span>Explore fishing spots</span><span>⌕</span></div>
    <div className="pv-map-spot"><div className="pv-spot-icon">〰</div><div><small>FEATURED SPOT · 3.2 KM</small><strong>Danau Buatan</strong><span>★ 4.8 &nbsp;·&nbsp; Freshwater fishing</span></div><FiNavigation /></div>
    <div className="pv-map-directions"><FiNavigation /><span>Route available</span><b>12 min</b></div>
  </div>;
}
function Academic() {
  return <div className="pv-scene pv-academic">
    <div className="pv-dashboard"><div className="pv-window-bar"><i /><i /><i /><span>Monitoring TA / Overview</span></div><div className="pv-dash-body"><div className="pv-dash-side"><div className="pv-dash-mark">M</div><span>▦</span><span>◷</span><span>▤</span></div>
      <div className="pv-dash-main"><small>FINAL PROJECT / DASHBOARD</small><h3>Project progress</h3><div className="pv-stat-row"><div><small>TASKS DONE</small><b>18<span> / 24</span></b></div><div><small>REPORTS</small><b>06</b></div><div><small>ON TRACK</small><b>75%</b></div></div>
        <div className="pv-chart-card"><span>Burndown chart <small>Last 6 weeks</small></span><div className="pv-chart-grid"><svg viewBox="0 0 320 120" preserveAspectRatio="none" aria-hidden="true"><polyline points="0,15 55,28 110,43 165,58 220,77 270,98 320,114" className="pv-chart-target" /><polyline points="0,15 55,20 110,34 165,42 220,68 270,77 320,86" className="pv-chart-actual" /></svg></div></div>
      </div></div></div>
    <Phone className="pv-task-phone"><div className="pv-app-top">MY TASKS <span>•••</span></div><h3>Keep it moving.</h3><small>Final Project · Sprint 04</small><div className="pv-task-progress"><span style={{width:"75%"}} /></div><div className="pv-task-item"><FiCheckCircle /><span>Literature review<small>Completed</small></span></div><div className="pv-task-item"><FiCheckCircle /><span>API integration<small>Completed</small></span></div><div className="pv-task-item active"><FiClock /><span>Progress report<small>Due this week</small></span></div></Phone>
    <div className="pv-academic-note"><FiActivity /> Supervisor review <b>Pending</b></div>
  </div>;
}
function Ai() {
  return <div className="pv-scene pv-ai"><div className="pv-ai-side"><div className="pv-ai-icon"><FiCamera /></div><small>RESIKAPP / SMART SORTING</small><h3>See it.<br/>Sort it.<br/><em>Recycle it.</em></h3><div className="pv-ai-step"><span>01</span> Capture waste</div><div className="pv-ai-step"><span>02</span> Identify category</div><div className="pv-ai-step"><span>03</span> Request pickup</div></div>
    <Phone className="pv-ai-phone"><div className="pv-app-top"><span>←</span><span>SCAN WASTE</span><span>⚡</span></div><div className="pv-scan-area"><div className="pv-scan-corner tl" /><div className="pv-scan-corner tr" /><div className="pv-scan-corner bl" /><div className="pv-scan-corner br" /><div className="pv-bottle"><span /></div><div className="pv-scan-line" /></div><div className="pv-ai-result"><span><FiCheck /></span><div><small>IDENTIFIED OBJECT</small><strong>Plastic bottle</strong></div><b>94%</b></div><div className="pv-ai-cta">Request pickup <FiArrowUpRight /></div></Phone><div className="pv-ai-tag">AI CLASSIFICATION <span>● LIVE</span></div>
  </div>;
}
function Chat() {
  return <div className="pv-scene pv-chat"><div className="pv-chat-window"><div className="pv-window-bar"><i /><i /><i /><span>Lapor Infra / Incident center</span></div><div className="pv-chat-body"><div className="pv-chat-side"><div className="pv-chat-logo">LI</div><span>⌂</span><span>▤</span><span>◷</span></div><div className="pv-chat-main"><div className="pv-chat-header"><div><small>ACTIVE REPORT</small><strong>Network connectivity issue</strong></div><span className="pv-status-pill">In progress</span></div><div className="pv-chat-date">TODAY · 09:41</div><div className="pv-bubble pv-bubble-in">The office network is down in our building.<small>09:41</small></div><div className="pv-bubble pv-bubble-out">Thank you. Your report has been received and is being reviewed.<small>09:42 ✓✓</small></div><div className="pv-chat-input">Write a message... <span>➤</span></div></div></div></div><div className="pv-chat-ticket"><FiMessageCircle /><div><small>REPORT #LI-2405</small><strong>Incident logged</strong></div><FiCheckCircle /></div></div>;
}
function Education() {
  return <div className="pv-scene pv-education"><div className="pv-edu-orbit" /><div className="pv-edu-board"><div className="pv-window-bar"><i /><i /><i /><span>7KAIH / Student journal</span></div><div className="pv-edu-body"><div className="pv-edu-head"><div><small>STUDENT DASHBOARD</small><h3>Good habits, every day.</h3><span>Tracking progress together with family and school.</span></div><div className="pv-edu-book"><FiBookOpen /></div></div><div className="pv-edu-stats"><div className="pv-edu-ring"><span>5<small>/ 7</small></span></div><div><small>THIS WEEK</small><strong>Habit streak</strong><p>Keep your momentum going!</p></div></div><div className="pv-edu-days">{["M","T","W","T","F","S","S"].map((day,i)=><div key={i} className={i<5?"done":""}><span>{day}</span><b>{i<5?<FiCheck />:"·"}</b></div>)}</div><div className="pv-edu-journal"><FiBookOpen /><span>Today’s journal <small>Learning & reading</small></span><FiArrowUpRight /></div></div></div><div className="pv-edu-float"><FiCheckCircle /> Journal submitted <span>Today</span></div></div>;
}
const visuals = { finance: Finance, map: MapScene, academic: Academic, ai: Ai, chat: Chat, education: Education };
export function ProjectVisual({ project }: { project: Project }) {
  const Scene = visuals[project.visual];
  return <div className={`project-visual accent-${project.accent} pv pv-${project.visual}`} role="img" aria-label={`Concept illustration of ${project.title}: ${project.eyebrow}`}>
    <div className="pv-ambient" /><Scene /><span className="pv-concept">PRODUCT UI CONCEPT</span><span className="visual-index">{project.index}</span>
  </div>;
}
