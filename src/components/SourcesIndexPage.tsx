import React from "react";
import { ExternalLink, ShieldCheck } from "lucide-react";

interface SourcesIndexPageProps {
  onNavigate?: (path: string) => void;
}

interface SourceCategory {
  jurisdiction: string;
  sources: Array<{
    name: string;
    description: string;
    url: string;
  }>;
}

const SOURCES_DATA: SourceCategory[] = [
  {
    jurisdiction: "Australia",
    sources: [
      {
        name: "Nursing and Midwifery Board of Australia (NMBA)",
        description: "Statutory standards for registration, Outcomes-Based Assessment (OBA), and recency of practice.",
        url: "https://www.nursingmidwiferyboard.gov.au/",
      },
      {
        name: "Australian Health Practitioner Regulation Agency (AHPRA)",
        description: "National register of practitioners, overseas application portals, and fee schedules.",
        url: "https://www.ahpra.gov.au/",
      },
      {
        name: "Department of Home Affairs (Immigration)",
        description: "Skilled migration visa subclasses (189, 190, 482, 491) and employer sponsorship rules.",
        url: "https://immi.homeaffairs.gov.au/",
      },
      {
        name: "Office of the Migration Agents Registration Authority (OMARA)",
        description: "Official public register of licensed Australian migration advisers.",
        url: "https://portal.mara.gov.au/search-the-register-of-migration-agents/",
      },
    ],
  },
  {
    jurisdiction: "United Kingdom",
    sources: [
      {
        name: "Nursing and Midwifery Council (NMC UK)",
        description: "Joining the register trained outside the UK, Test of Competence 2021 standards, and OSCE blueprints.",
        url: "https://www.nmc.org.uk/",
      },
      {
        name: "UK Department of Health and Social Care (DHSC)",
        description: "Code of Practice for International Recruitment and WHO health workforce support (red list) updates.",
        url: "https://www.gov.uk/government/organisations/department-of-health-and-social-care",
      },
      {
        name: "Office of the Immigration Services Commissioner (OISC)",
        description: "Statutory regulatory register for immigration advice practitioners in the UK.",
        url: "https://www.gov.uk/find-an-immigration-adviser",
      },
    ],
  },
  {
    jurisdiction: "New Zealand",
    sources: [
      {
        name: "Nursing Council of New Zealand (NCNZ)",
        description: "Competence standards, overseas application procedures, and Annual Practising Certificates.",
        url: "https://www.nursingcouncil.org.nz/",
      },
      {
        name: "Immigration Advisers Authority (IAA)",
        description: "Statutory public register of licensed New Zealand immigration advisers.",
        url: "https://www.iaa.govt.nz/",
      },
      {
        name: "Health New Zealand (Te Whatu Ora)",
        description: "Public hospital health sector workforce information and international nurse credentialing.",
        url: "https://www.tewhatuora.govt.nz/",
      },
    ],
  },
  {
    jurisdiction: "Singapore",
    sources: [
      {
        name: "Singapore Nursing Board (SNB)",
        description: "Foreign-trained nurse registration criteria, licensure examination standards, and accredited hospitals.",
        url: "https://www.healthprofessionals.gov.sg/snb",
      },
      {
        name: "Ministry of Manpower (MOM)",
        description: "Employment Pass and S Pass criteria for foreign healthcare personnel.",
        url: "https://www.mom.gov.sg/",
      },
    ],
  },
  {
    jurisdiction: "Canada",
    sources: [
      {
        name: "National Nursing Assessment Service (NNAS)",
        description: "Centralized credential verification and Advisory Reports for internationally educated nurses.",
        url: "https://www.nnas.ca/",
      },
      {
        name: "College of Nurses of Ontario (CNO)",
        description: "Provincial registration requirements for Canada's largest nursing jurisdiction.",
        url: "https://www.cno.org/",
      },
      {
        name: "British Columbia College of Nurses and Midwives (BCCNM)",
        description: "Regulatory standards and Substantially Equivalent Competency evaluation rules.",
        url: "https://www.bccnm.ca/",
      },
    ],
  },
  {
    jurisdiction: "Republic of Ireland",
    sources: [
      {
        name: "Nursing and Midwifery Board of Ireland (NMBI)",
        description: "Overseas qualification recognition (Group 3 pathway) and registration standards.",
        url: "https://www.nmbi.ie/",
      },
      {
        name: "RCSI Faculty of Nursing and Midwifery",
        description: "Overseas Aptitude Test structure, syllabus, and clinical examination sittings in Dublin.",
        url: "https://www.rcsi.com/dublin/about/faculty-of-nursing-and-midwifery",
      },
    ],
  },
  {
    jurisdiction: "United States",
    sources: [
      {
        name: "National Council of State Boards of Nursing (NCSBN)",
        description: "NCLEX-RN test plans, passing standards, and computer-adaptive testing research.",
        url: "https://www.ncsbn.org/",
      },
      {
        name: "CGFNS International",
        description: "Credentials Evaluation Service (CES) reports and federal VisaScreen certifications.",
        url: "https://www.cgfns.org/",
      },
      {
        name: "US Department of State — Visa Bulletin",
        description: "Official monthly priority dates for EB-3 employment-based permanent resident immigrant visas.",
        url: "https://travel.state.gov/content/travel/en/legal/visa-law0/visa-bulletin.html",
      },
    ],
  },
  {
    jurisdiction: "Arabian Gulf & International Standards",
    sources: [
      {
        name: "Saudi Ministry of Human Resources and Social Development (MHRSD)",
        description: "Saudi Labor Law, statutory end-of-service benefits, and labor dispute resolution portals.",
        url: "https://hrsd.gov.sa/",
      },
      {
        name: "UAE Ministry of Human Resources and Emiratisation (MOHRE)",
        description: "Federal Decree-Law No. 33 of 2021 governing employment relations and worker protections.",
        url: "https://www.mohre.gov.ae/",
      },
      {
        name: "International Labour Organization (ILO)",
        description: "General Principles and Operational Guidelines for Fair Recruitment.",
        url: "https://www.ilo.org/global/topics/fair-recruitment/",
      },
    ],
  },
];

export const SourcesIndexPage: React.FC<SourcesIndexPageProps> = ({ onNavigate }) => {
  return (
    <div className="space-y-10 font-sans max-w-measure mx-auto">
      {/* Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <span className="text-eyebrow text-ink-60">Primary Citations</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">Directory</span>
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Primary Sources Directory
        </h1>
        <p className="text-body-lg text-ink-70 leading-relaxed">
          Every regulatory claim, statutory fee, and assessment timeline on StudyNursing.net cites an official government or statutory regulator. We do not source from commercial blogs or secondary marketing materials.
        </p>
      </div>

      {/* Sourcing Policy Statement */}
      <div className="bg-paper-alt border border-line rounded-lg p-5 flex items-start gap-3">
        <ShieldCheck className="w-5 h-5 text-accent shrink-0 mt-0.5" />
        <p className="text-body-sm text-ink-70 leading-relaxed">
          <strong>Primary-source guarantee:</strong> If an official policy cannot be confirmed on a government, regulatory council, or statutory authority website, we do not publish it. Links below lead directly to the official governing bodies.
        </p>
      </div>

      {/* Sources List by Jurisdiction */}
      <div className="space-y-8">
        {SOURCES_DATA.map((cat) => (
          <section key={cat.jurisdiction} className="space-y-3">
            <h2 className="font-serif text-heading-md text-ink font-semibold border-b border-line pb-2">
              {cat.jurisdiction}
            </h2>
            <div className="grid grid-cols-1 gap-3">
              {cat.sources.map((src) => (
                <div
                  key={src.name}
                  className="bg-surface border border-line rounded-lg p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:border-line-strong transition-colors"
                >
                  <div className="space-y-1">
                    <strong className="text-body text-ink font-semibold block">{src.name}</strong>
                    <p className="text-body-sm text-ink-70 leading-relaxed">{src.description}</p>
                  </div>
                  <a
                    href={src.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-paper-alt border border-line text-meta-sm font-semibold text-accent hover:text-accent-dark transition-colors shrink-0"
                  >
                    <span>Visit authority</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Cross-Link */}
      <div className="pt-4 border-t border-line flex items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate && onNavigate("/about")}
          className="text-body-sm font-semibold text-accent hover:text-accent-dark underline"
        >
          ← Read our editorial charter
        </button>
        <button
          type="button"
          onClick={() => onNavigate && onNavigate("/compare")}
          className="text-body-sm font-semibold text-ink-70 hover:text-ink underline"
        >
          Compare destination pathways →
        </button>
      </div>
    </div>
  );
};
