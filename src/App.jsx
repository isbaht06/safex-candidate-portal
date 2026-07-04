import { useEffect, useMemo, useState } from "react";

/* SafeX Solutions brand tokens */
const BRAND = {
  navyDeep: "#0B2545",
  navy: "#13355E",
  navyLight: "#1D4E89",
  accent: "#2E86DE",
  white: "#FFFFFF",
  bgSoft: "#F4F6F9",
  bgPanel: "#F9FAFC",
  border: "#E1E7EF",
  textDark: "#1C2B3A",
  textMuted: "#5B6B7C",
  footerNavy: "#0F2A44",
};

/* Simple inline icon */
const iconProps = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round",
  strokeLinejoin: "round",
};
const smallIconProps = {
  ...iconProps,
  width: 15,
  height: 15,
  strokeWidth: 1.9,
};

const IconDashboard = () => (
  <svg {...iconProps}>
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
  </svg>
);
const IconCandidates = () => (
  <svg {...iconProps}>
    <circle cx="9" cy="8" r="3.2" />
    <path d="M2.5 21c0-4 3-6.5 6.5-6.5S15.5 17 15.5 21" />
    <circle cx="18" cy="8.5" r="2.3" />
    <path d="M15.2 21c0-3 1.7-5 4.3-5" />
  </svg>
);
const IconJobs = () => (
  <svg {...iconProps}>
    <rect x="3" y="7.5" width="18" height="12.5" rx="2" />
    <path d="M8.5 7.5v-2a2 2 0 012-2h3a2 2 0 012 2v2" />
    <path d="M3 12.5h18" />
  </svg>
);
const IconReports = () => (
  <svg {...iconProps}>
    <line x1="4" y1="20" x2="4" y2="11" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="20" y1="20" x2="20" y2="14" />
  </svg>
);
const IconSettings = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 00.3 1.9l.1.1a2 2 0 11-2.8 2.8l-.1-.1a1.7 1.7 0 00-1.9-.3 1.7 1.7 0 00-1 1.6V21a2 2 0 11-4 0v-.1a1.7 1.7 0 00-1-1.6 1.7 1.7 0 00-1.9.3l-.1.1a2 2 0 11-2.8-2.8l.1-.1a1.7 1.7 0 00.3-1.9 1.7 1.7 0 00-1.6-1H3a2 2 0 110-4h.1a1.7 1.7 0 001.6-1 1.7 1.7 0 00-.3-1.9l-.1-.1a2 2 0 112.8-2.8l.1.1a1.7 1.7 0 001.9.3H9a1.7 1.7 0 001.6-1V3a2 2 0 114 0v.1a1.7 1.7 0 001 1.6 1.7 1.7 0 001.9-.3l.1-.1a2 2 0 112.8 2.8l-.1.1a1.7 1.7 0 00-.3 1.9V9a1.7 1.7 0 001.6 1H21a2 2 0 110 4h-.1a1.7 1.7 0 00-1.6 1z" />
  </svg>
);
const IconSearch = () => (
  <svg {...iconProps} width="16" height="16">
    <circle cx="11" cy="11" r="7" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const IconChevronLeft = () => (
  <svg {...iconProps} width="16" height="16">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);
const IconChevronRight = () => (
  <svg {...iconProps} width="16" height="16">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);
const IconEye = () => (
  <svg {...smallIconProps}>
    <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7-11-7-11-7z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);
const IconMail = () => (
  <svg {...smallIconProps}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="M2 6l10 7 10-7" />
  </svg>
);
const IconDocument = () => (
  <svg {...smallIconProps}>
    <path d="M6 2h9l5 5v13a2 2 0 01-2 2H6a2 2 0 01-2-2V4a2 2 0 012-2z" />
    <path d="M14 2v5h5" />
    <line x1="8" y1="13" x2="16" y2="13" />
    <line x1="8" y1="17" x2="13" y2="17" />
  </svg>
);

/* Mock candidate data  */
const MOCK_CANDIDATES = [
  {
    id: 1,
    name: "Fatima Khan",
    role: "Frontend Developer Intern",
    status: "Interview Scheduled",
    email: "fatima.khan@gmail.com",
    experience: "1 year React",
    location: "Islamabad",
    appliedDate: "Jun 29",
  },
  {
    id: 2,
    name: "Omar Siddiqui",
    role: "Cybersecurity Intern",
    status: "New Application",
    email: "omar.siddiqui@gmail.com",
    experience: "Fresh Graduate",
    location: "Karachi",
    appliedDate: "Jun 28",
  },
  {
    id: 3,
    name: "Zainab Malik",
    role: "UI/UX Design Intern",
    status: "Offer Extended",
    email: "zainab.malik@gmail.com",
    experience: "2 years Figma",
    location: "Lahore",
    appliedDate: "Jun 28",
  },
  {
    id: 4,
    name: "Bilal Ahmed",
    role: "Backend Developer Intern",
    status: "Hired",
    email: "bilal.ahmed@gmail.com",
    experience: "1.5 years .NET",
    location: "Rawalpindi",
    appliedDate: "Jun 27",
  },
  {
    id: 5,
    name: "Ayesha Raza",
    role: "Data Analyst Intern",
    status: "New Application",
    email: "ayesha.raza@gmail.com",
    experience: "Fresh Graduate",
    location: "Islamabad",
    appliedDate: "Jun 26",
  },
  {
    id: 6,
    name: "Hassan Iqbal",
    role: "Cloud Engineering Intern",
    status: "Interview Scheduled",
    email: "hassan.iqbal@gmail.com",
    experience: "1 year Azure",
    location: "Karachi",
    appliedDate: "Jun 25",
  },
  {
    id: 7,
    name: "Sana Tariq",
    role: "Marketing Intern",
    status: "Rejected",
    email: "sana.tariq@gmail.com",
    experience: "6 months",
    location: "Lahore",
    appliedDate: "Jun 24",
  },
  {
    id: 8,
    name: "Usman Farooq",
    role: "Frontend Developer Intern",
    status: "New Application",
    email: "usman.farooq@gmail.com",
    experience: "Fresh Graduate",
    location: "Peshawar",
    appliedDate: "Jun 23",
  },
  {
    id: 9,
    name: "Mariam Chaudhry",
    role: "Cybersecurity Intern",
    status: "Offer Extended",
    email: "mariam.chaudhry@gmail.com",
    experience: "1 year SOC",
    location: "Islamabad",
    appliedDate: "Jun 22",
  },
  {
    id: 10,
    name: "Ahmed Raza",
    role: "Backend Developer Intern",
    status: "Interview Scheduled",
    email: "ahmed.raza@gmail.com",
    experience: "2 years Node.js",
    location: "Karachi",
    appliedDate: "Jun 21",
  },
  {
    id: 11,
    name: "Noor-ul-Ain",
    role: "UI/UX Design Intern",
    status: "New Application",
    email: "noor.ulain@gmail.com",
    experience: "Fresh Graduate",
    location: "Rawalpindi",
    appliedDate: "Jun 20",
  },
  {
    id: 12,
    name: "Bilquis Noor",
    role: "Data Analyst Intern",
    status: "Hired",
    email: "bilquis.noor@gmail.com",
    experience: "1 year SQL",
    location: "Lahore",
    appliedDate: "Jun 19",
  },
];

const STATUS_OPTIONS = [
  "All Statuses",
  "New Application",
  "Interview Scheduled",
  "Offer Extended",
  "Hired",
  "Rejected",
];

const STATUS_STYLES = {
  "New Application": { bg: "#E8F0FE", text: "#1D4E89" },
  "Interview Scheduled": { bg: "#FFF4E0", text: "#9A6A00" },
  "Offer Extended": { bg: "#E6F7EE", text: "#1F9D55" },
  Hired: { bg: "#0B2545", text: "#FFFFFF" },
  Rejected: { bg: "#F5E9E9", text: "#B23B3B" },
};

const NAV_ITEMS = [
  { key: "dashboard", label: "Dashboard", Icon: IconDashboard },
  { key: "candidates", label: "Candidates", Icon: IconCandidates },
  { key: "jobs", label: "Jobs", Icon: IconJobs },
  { key: "reports", label: "Reports", Icon: IconReports },
  { key: "settings", label: "Settings", Icon: IconSettings },
];

const PAGE_SIZE = 6;

function getInitials(name) {
  return name
    .split(" ")
    .map((p) => p[0])
    .filter(Boolean)
    .slice(0, 2)
    .join("")
    .toUpperCase();
}

export default function App() {
  const [activeNav, setActiveNav] = useState("candidates");
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("All Statuses");
  const [currentPage, setCurrentPage] = useState(1);
  const [supportEmail, setSupportEmail] = useState("");
  const [supportSent, setSupportSent] = useState(false);
  const [candidates, setCandidates] = useState(MOCK_CANDIDATES);
  const [isLoading, setIsLoading] = useState(true);
  const [fetchError, setFetchError] = useState(null);

  const statusCounts = useMemo(() => {
    const counts = { "All Statuses": candidates.length };

    STATUS_OPTIONS.slice(1).forEach((status) => {
      counts[status] = candidates.filter((c) => c.status === status).length;
    });

    return counts;
  }, [candidates]);

  const filteredCandidates = useMemo(() => {
    const term = searchTerm.trim().toLowerCase();
    return candidates.filter((c) => {
      const matchesSearch =
        term === "" ||
        c.name.toLowerCase().includes(term) ||
        c.role.toLowerCase().includes(term);
      const matchesStatus =
        statusFilter === "All Statuses" || c.status === statusFilter;
      return matchesSearch && matchesStatus;
    });
  }, [searchTerm, statusFilter, candidates]);

  useEffect(() => {
    const apiUrl = import.meta.env.VITE_API_URL;

    console.log("API URL:", apiUrl);

    fetch(`${apiUrl}/candidates`)
      .then((res) => {
        console.log("HTTP status:", res.status);
        return res.json();
      })
      .then((data) => {
        console.log("Fetched candidates:", data);

        setCandidates(data);
        setFetchError(null);
      })
      .catch((err) => {
        console.error("Fetch failed:", err);

        setFetchError("Couldn't reach the server — showing sample data.");
        setCandidates(MOCK_CANDIDATES);
      })
      .finally(() => {
        console.log("Finished fetch");
        setIsLoading(false);
      });
  }, []);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredCandidates.length / PAGE_SIZE),
  );
  const safePage = Math.min(currentPage, totalPages);
  const pageCandidates = filteredCandidates.slice(
    (safePage - 1) * PAGE_SIZE,
    safePage * PAGE_SIZE,
  );

  const handleSearchChange = (value) => {
    setSearchTerm(value);
    setCurrentPage(1);
  };
  const handleStatusChange = (value) => {
    setStatusFilter(value);
    setCurrentPage(1);
  };
  const handleTabClick = (value) => {
    setStatusFilter(value);
    setCurrentPage(1);
  };

  const handleSupportSubmit = (e) => {
    e.preventDefault();
    if (!supportEmail.trim()) return;
    setSupportSent(true);
    setSupportEmail("");
    setTimeout(() => setSupportSent(false), 4000);
  };

  const handleView = (name) => {
    console.log(`View profile for ${name}`);
  };
  const handleResume = (name) => alert(`Resume preview for ${name} `);

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&family=Inter:wght@400;500;600&display=swap');
        * { box-sizing: border-box; }
        body { margin: 0; font-family: 'Inter', sans-serif; }
        input:focus, select:focus, button:focus { outline: 2px solid ${BRAND.accent}; outline-offset: 1px; }
        .nav-item:hover { background: rgba(255,255,255,0.08); }
        .table-row:hover { background: ${BRAND.bgPanel}; }
        .page-btn:hover:not(:disabled) { background: ${BRAND.bgSoft}; }
        .tab-btn:hover { color: ${BRAND.navy}; }
        .support-btn:hover { background: ${BRAND.navyLight}; }
        .email-link:hover { text-decoration: underline; }
        .action-btn:hover { background: ${BRAND.bgSoft}; color: ${BRAND.navy}; }
      `}</style>

      <div style={styles.appBody}>
        {/* Icon sidebar */}
        <nav style={styles.sidebar} aria-label="Primary navigation">
          <div style={styles.sidebarLogo}>SX</div>
          {NAV_ITEMS.map(({ key, label, Icon }) => (
            <button
              key={key}
              className="nav-item"
              onClick={() => setActiveNav(key)}
              title={label}
              aria-label={label}
              style={{
                ...styles.navItem,
                background:
                  activeNav === key ? "rgba(255,255,255,0.14)" : "transparent",
                borderLeft:
                  activeNav === key
                    ? `3px solid ${BRAND.accent}`
                    : "3px solid transparent",
              }}
            >
              <Icon />
            </button>
          ))}
        </nav>

        {/* Main content column */}
        <div style={styles.contentCol}>
          {/* Top bar */}
          <header style={styles.topBar}>
            <div>
              <p style={styles.eyebrow}>SafeX Solutions</p>
              <h1 style={styles.pageTitle}>
                Intern Candidate Management Portal
              </h1>
            </div>
            <button
              style={styles.newCandidateBtn}
              onClick={() =>
                alert("This will connect to the .NET backend once it's ready.")
              }
            >
              + New Candidate
            </button>
          </header>

          {fetchError && (
            <p
              style={{
                color: "#B23B3B",
                fontSize: 12,
                padding: "6px 24px",
              }}
            >
              {fetchError}
            </p>
          )}

          {/* Tabs */}
          <div style={styles.tabStrip}>
            {STATUS_OPTIONS.map((status) => (
              <button
                key={status}
                className="tab-btn"
                onClick={() => handleTabClick(status)}
                style={{
                  ...styles.tabBtn,
                  background:
                    statusFilter === status ? BRAND.navy : "transparent",
                  color:
                    statusFilter === status ? BRAND.white : BRAND.textMuted,
                }}
              >
                {status === "All Statuses" ? "All Candidates" : status}
                <span
                  style={{
                    ...styles.tabCount,
                    background:
                      statusFilter === status
                        ? "rgba(255,255,255,0.2)"
                        : BRAND.bgSoft,
                    color:
                      statusFilter === status ? BRAND.white : BRAND.textMuted,
                  }}
                >
                  {statusCounts[status]}
                </span>
              </button>
            ))}
          </div>

          {/* Workspace: filter panel + table */}
          <div style={styles.workspace}>
            <aside style={styles.filterPanel}>
              <p style={styles.filterHeading}>Refine Your Search</p>

              <label style={styles.filterLabel} htmlFor="candidate-search">
                Search
              </label>
              <div style={styles.searchWrap}>
                <span style={styles.searchIcon}>
                  <IconSearch />
                </span>
                <input
                  id="candidate-search"
                  type="text"
                  placeholder="Name or role..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  style={styles.searchInput}
                />
              </div>

              <label style={styles.filterLabel} htmlFor="status-filter">
                Status
              </label>
              <select
                id="status-filter"
                value={statusFilter}
                onChange={(e) => handleStatusChange(e.target.value)}
                style={styles.statusSelect}
              >
                {STATUS_OPTIONS.map((status) => (
                  <option key={status} value={status}>
                    {status}
                  </option>
                ))}
              </select>

              <div style={styles.filterSummary}>
                <span style={styles.filterSummaryNumber}>
                  {filteredCandidates.length}
                </span>
                <span style={styles.filterSummaryLabel}>
                  matching candidates
                </span>
              </div>
            </aside>

            <section style={styles.tableCard}>
              {pageCandidates.length === 0 ? (
                <div style={styles.emptyState}>
                  <p style={styles.emptyTitle}>
                    No candidates match your filters.
                  </p>
                  <p style={styles.emptyBody}>
                    Try a different name, role, or status.
                  </p>
                </div>
              ) : (
                <>
                  <div style={styles.tableScroll}>
                    <table style={styles.table}>
                      <thead>
                        <tr>
                          <th style={styles.th}>Candidate</th>
                          <th style={styles.th}>Location</th>
                          <th style={styles.th}>Experience</th>
                          <th style={styles.th}>Status</th>
                          <th style={styles.th}>Applied</th>
                          <th style={styles.th}>Email</th>
                          <th style={{ ...styles.th, textAlign: "right" }}>
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {pageCandidates.map((c) => {
                          const badge = STATUS_STYLES[c.status];
                          return (
                            <tr
                              key={c.id}
                              className="table-row"
                              style={styles.tr}
                            >
                              <td style={styles.tdCandidate}>
                                <div style={styles.avatar}>
                                  {getInitials(c.name)}
                                </div>
                                <div>
                                  <div style={styles.candidateName}>
                                    {c.name}
                                  </div>
                                  <div style={styles.candidateRole}>
                                    {c.role}
                                  </div>
                                </div>
                              </td>
                              <td style={styles.td}>{c.location}</td>
                              <td style={styles.td}>{c.experience}</td>
                              <td style={styles.td}>
                                <span
                                  style={{
                                    ...styles.badge,
                                    backgroundColor: badge.bg,
                                    color: badge.text,
                                  }}
                                >
                                  {c.status}
                                </span>
                              </td>
                              <td style={styles.tdMuted}>{c.appliedDate}</td>
                              <td style={styles.td}>
                                <a
                                  href={`mailto:${c.email}`}
                                  className="email-link"
                                  style={styles.emailLink}
                                >
                                  <div style={styles.emailStack}>
                                    <span style={styles.emailAddress}>
                                      {c.email}
                                    </span>
                                    <span style={styles.emailSubLabel}>
                                      Send Email
                                    </span>
                                  </div>
                                </a>
                              </td>
                              <td style={styles.tdActions}>
                                <div style={styles.actionRow}>
                                  <button
                                    className="action-btn"
                                    title="View profile"
                                    aria-label={`View ${c.name}'s profile`}
                                    style={styles.actionBtn}
                                    onClick={() => handleView(c.name)}
                                  >
                                    <IconEye />
                                  </button>
                                  <a
                                    href={`mailto:${c.email}`}
                                    className="action-btn"
                                    title="Email candidate"
                                    aria-label={`Email ${c.name}`}
                                    style={{
                                      ...styles.actionBtn,
                                      textDecoration: "none",
                                    }}
                                  >
                                    <IconMail />
                                  </a>
                                  <button
                                    className="action-btn"
                                    title="View resume"
                                    aria-label={`View ${c.name}'s resume`}
                                    style={styles.actionBtn}
                                    onClick={() => handleResume(c.name)}
                                  >
                                    <IconDocument />
                                  </button>
                                </div>
                              </td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>

                  <div style={styles.pagination}>
                    <span style={styles.paginationInfo}>
                      Showing {(safePage - 1) * PAGE_SIZE + 1}–
                      {Math.min(
                        safePage * PAGE_SIZE,
                        filteredCandidates.length,
                      )}{" "}
                      of {filteredCandidates.length}
                    </span>
                    <div style={styles.paginationControls}>
                      <button
                        className="page-btn"
                        style={styles.pageBtn}
                        disabled={safePage === 1}
                        onClick={() => setCurrentPage(safePage - 1)}
                      >
                        <IconChevronLeft />
                      </button>
                      {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                        (num) => (
                          <button
                            key={num}
                            className="page-btn"
                            onClick={() => setCurrentPage(num)}
                            style={{
                              ...styles.pageBtn,
                              background:
                                num === safePage ? BRAND.navy : "transparent",
                              color:
                                num === safePage ? BRAND.white : BRAND.textDark,
                            }}
                          >
                            {num}
                          </button>
                        ),
                      )}
                      <button
                        className="page-btn"
                        style={styles.pageBtn}
                        disabled={safePage === totalPages}
                        onClick={() => setCurrentPage(safePage + 1)}
                      >
                        <IconChevronRight />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </section>
          </div>
        </div>
      </div>

      {/* Footer  */}
      <footer style={styles.footer}>
        <div style={styles.footerInner}>
          <div style={styles.footerCol}>
            <h3 style={styles.footerBrand}>SafeX Solutions</h3>
            <p style={styles.footerBlurb}>
              Securing Technology. Powering Growth. Creating Impact.
            </p>
            <div style={styles.socialRow}>
              {["f", "IG", "♪", "X"].map((glyph) => (
                <span key={glyph} style={styles.socialBadge}>
                  {glyph}
                </span>
              ))}
            </div>
          </div>

          <div style={styles.footerCol}>
            <h4 style={styles.footerHeading}>Contact</h4>
            <p style={styles.footerLabel}>PHONE</p>
            <p style={styles.footerValue}>+92 327 5781580</p>
            <p style={styles.footerLabel}>EMAIL</p>
            <p style={styles.footerValue}>contact@safexsolutions.com</p>
          </div>

          <div style={styles.footerCol}>
            <h4 style={styles.footerHeading}>Portal Support</h4>
            <form onSubmit={handleSupportSubmit} style={styles.supportForm}>
              <label style={styles.footerLabel} htmlFor="support-email">
                Your Email
              </label>
              <input
                id="support-email"
                type="email"
                placeholder="Enter email"
                value={supportEmail}
                onChange={(e) => setSupportEmail(e.target.value)}
                style={styles.supportInput}
                required
              />
              <button
                type="submit"
                className="support-btn"
                style={styles.supportBtn}
              >
                Send
              </button>
              {supportSent && (
                <p style={styles.supportConfirm}>
                  Thanks — HR will follow up shortly.
                </p>
              )}
            </form>
          </div>
        </div>
        <div style={styles.footerBottom}>
          © {new Date().getFullYear()} All rights reserved | SafeXsolutions.com
        </div>
      </footer>
    </div>
  );
}

/* Styles */
const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: BRAND.bgSoft,
  },
  appBody: { display: "flex", flex: 1 },

  sidebar: {
    width: "64px",
    background: BRAND.navyDeep,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: "18px",
    gap: "6px",
    flexShrink: 0,
  },
  sidebarLogo: {
    width: "36px",
    height: "36px",
    borderRadius: "9px",
    background: "rgba(255,255,255,0.12)",
    color: BRAND.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 700,
    fontSize: "14px",
    marginBottom: "20px",
  },
  navItem: {
    width: "100%",
    height: "48px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "rgba(255,255,255,0.85)",
    border: "none",
    cursor: "pointer",
    transition: "background 0.15s ease",
  },

  contentCol: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    minWidth: 0,
  },

  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "22px 28px 14px",
    background: BRAND.white,
    borderBottom: `1px solid ${BRAND.border}`,
  },
  eyebrow: {
    fontSize: "12px",
    color: BRAND.accent,
    fontWeight: 600,
    letterSpacing: "0.4px",
    marginBottom: "2px",
  },
  pageTitle: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "20px",
    fontWeight: 600,
    color: BRAND.textDark,
  },
  newCandidateBtn: {
    background: BRAND.accent,
    color: BRAND.white,
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
  },

  tabStrip: {
    display: "flex",
    gap: "6px",
    background: BRAND.white,
    padding: "10px 24px",
    borderBottom: `1px solid ${BRAND.border}`,
    overflowX: "auto",
  },
  tabBtn: {
    border: "none",
    borderRadius: "8px",
    padding: "9px 14px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    whiteSpace: "nowrap",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    transition: "background 0.15s ease, color 0.15s ease",
  },
  tabCount: {
    fontSize: "11px",
    background: BRAND.bgSoft,
    color: BRAND.textMuted,
    padding: "1px 7px",
    borderRadius: "999px",
    fontWeight: 600,
  },

  workspace: {
    display: "flex",
    gap: "20px",
    padding: "20px 24px 32px",
    flex: 1,
    alignItems: "flex-start",
  },

  filterPanel: {
    width: "230px",
    flexShrink: 0,
    background: BRAND.white,
    border: `1px solid ${BRAND.border}`,
    borderRadius: "12px",
    padding: "18px",
  },
  filterHeading: {
    fontSize: "11px",
    fontWeight: 700,
    color: BRAND.textMuted,
    letterSpacing: "0.6px",
    marginBottom: "16px",
    textTransform: "uppercase",
  },
  filterLabel: {
    display: "block",
    fontSize: "12px",
    fontWeight: 600,
    color: BRAND.textDark,
    marginBottom: "6px",
    marginTop: "16px",
  },
  searchWrap: { position: "relative" },
  searchIcon: {
    position: "absolute",
    left: "10px",
    top: "50%",
    transform: "translateY(-50%)",
    color: BRAND.textMuted,
    display: "flex",
  },
  searchInput: {
    width: "100%",
    padding: "9px 10px 9px 32px",
    borderRadius: "8px",
    border: `1px solid ${BRAND.border}`,
    fontSize: "13px",
    background: BRAND.bgSoft,
    color: BRAND.textDark,
  },
  statusSelect: {
    width: "100%",
    padding: "9px 10px",
    borderRadius: "8px",
    border: `1px solid ${BRAND.border}`,
    fontSize: "13px",
    background: BRAND.bgSoft,
    color: BRAND.textDark,
    cursor: "pointer",
  },
  filterSummary: {
    marginTop: "22px",
    paddingTop: "16px",
    borderTop: `1px solid ${BRAND.bgSoft}`,
  },
  filterSummaryNumber: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "22px",
    fontWeight: 700,
    color: BRAND.navy,
    display: "block",
  },
  filterSummaryLabel: { fontSize: "12px", color: BRAND.textMuted },

  tableCard: {
    flex: 1,
    background: BRAND.white,
    border: `1px solid ${BRAND.border}`,
    borderRadius: "12px",
    overflow: "hidden",
    minWidth: 0,
  },
  tableScroll: { overflowX: "auto" },
  table: { width: "100%", borderCollapse: "collapse", minWidth: "780px" },
  th: {
    textAlign: "left",
    fontSize: "11px",
    fontWeight: 700,
    color: BRAND.textMuted,
    letterSpacing: "0.5px",
    textTransform: "uppercase",
    padding: "14px 18px",
    borderBottom: `1px solid ${BRAND.border}`,
    background: BRAND.bgPanel,
    whiteSpace: "nowrap",
  },
  tr: {
    borderBottom: `1px solid ${BRAND.bgSoft}`,
    transition: "background 0.1s ease",
  },
  td: {
    padding: "14px 18px",
    fontSize: "13px",
    color: BRAND.textDark,
    verticalAlign: "middle",
  },
  tdMuted: {
    padding: "14px 18px",
    fontSize: "13px",
    color: BRAND.textMuted,
    verticalAlign: "middle",
  },
  tdCandidate: {
    padding: "14px 18px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  avatar: {
    width: "38px",
    height: "38px",
    borderRadius: "50%",
    background: BRAND.navy,
    color: BRAND.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "'Poppins', sans-serif",
    fontWeight: 600,
    fontSize: "13px",
    flexShrink: 0,
  },
  candidateName: { fontSize: "13.5px", fontWeight: 600, color: BRAND.textDark },
  candidateRole: { fontSize: "12px", color: BRAND.textMuted, marginTop: "1px" },
  badge: {
    fontSize: "11px",
    fontWeight: 600,
    padding: "4px 10px",
    borderRadius: "999px",
    whiteSpace: "nowrap",
  },

  emailLink: { textDecoration: "none", color: "inherit", display: "block" },
  emailStack: { display: "flex", flexDirection: "column" },
  emailAddress: { fontSize: "13px", fontWeight: 600, color: BRAND.accent },
  emailSubLabel: { fontSize: "11px", color: BRAND.textMuted, marginTop: "1px" },

  tdActions: { padding: "14px 18px", verticalAlign: "middle" },
  actionRow: { display: "flex", gap: "6px", justifyContent: "flex-end" },
  actionBtn: {
    width: "30px",
    height: "30px",
    borderRadius: "7px",
    border: `1px solid ${BRAND.border}`,
    background: BRAND.white,
    color: BRAND.textMuted,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    transition: "all 0.12s ease",
  },

  emptyState: { textAlign: "center", padding: "60px 20px" },
  emptyTitle: {
    fontSize: "15px",
    fontWeight: 600,
    color: BRAND.textDark,
    marginBottom: "6px",
  },
  emptyBody: { fontSize: "13px", color: BRAND.textMuted },

  pagination: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "14px 18px",
    borderTop: `1px solid ${BRAND.border}`,
  },
  paginationInfo: { fontSize: "12px", color: BRAND.textMuted },
  paginationControls: { display: "flex", gap: "4px" },
  pageBtn: {
    minWidth: "30px",
    height: "30px",
    borderRadius: "6px",
    border: `1px solid ${BRAND.border}`,
    background: "transparent",
    fontSize: "12px",
    fontWeight: 600,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    background: BRAND.footerNavy,
    color: BRAND.white,
    marginTop: "auto",
  },
  footerInner: {
    maxWidth: "1100px",
    margin: "0 auto",
    padding: "40px 24px 24px",
    display: "flex",
    flexWrap: "wrap",
    gap: "40px",
    justifyContent: "space-between",
  },
  footerCol: { flex: "1 1 220px", minWidth: "220px" },
  footerBrand: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "18px",
    fontWeight: 700,
    marginBottom: "8px",
  },
  footerBlurb: {
    fontSize: "13px",
    color: "rgba(255,255,255,0.7)",
    marginBottom: "16px",
    maxWidth: "260px",
  },
  socialRow: { display: "flex", gap: "10px" },
  socialBadge: {
    width: "34px",
    height: "34px",
    borderRadius: "50%",
    background: "rgba(255,255,255,0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "12px",
    fontWeight: 700,
  },
  footerHeading: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "14px",
    fontWeight: 600,
    marginBottom: "14px",
  },
  footerLabel: {
    fontSize: "10.5px",
    fontWeight: 700,
    color: "rgba(255,255,255,0.55)",
    letterSpacing: "0.5px",
    marginTop: "10px",
    marginBottom: "3px",
  },
  footerValue: { fontSize: "13.5px", color: "rgba(255,255,255,0.9)" },
  supportForm: { display: "flex", flexDirection: "column", gap: "4px" },
  supportInput: {
    padding: "10px 12px",
    borderRadius: "8px",
    border: "1px solid rgba(255,255,255,0.2)",
    background: BRAND.white,
    color: BRAND.textDark,
    fontSize: "13px",
    marginBottom: "10px",
  },
  supportBtn: {
    background: BRAND.accent,
    color: BRAND.white,
    border: "none",
    borderRadius: "8px",
    padding: "10px 16px",
    fontSize: "13px",
    fontWeight: 600,
    cursor: "pointer",
    width: "fit-content",
    transition: "background 0.15s ease",
  },
  supportConfirm: { fontSize: "12px", color: "#8FE0B0", marginTop: "8px" },
  footerBottom: {
    borderTop: "1px solid rgba(255,255,255,0.1)",
    padding: "16px 24px",
    textAlign: "center",
    fontSize: "12px",
    color: "rgba(255,255,255,0.55)",
  },
};
