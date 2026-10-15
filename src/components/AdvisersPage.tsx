import React, { useState } from "react";
import { CautionPanel } from "./CautionPanel";
import { ExternalLink, ShieldCheck, CheckCircle2, ArrowRight } from "lucide-react";

interface AdvisersPageProps {
  onNavigate?: (path: string) => void;
}

export const AdvisersPage: React.FC<AdvisersPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryOfResidence: "",
    destination: "Australia",
    consent: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.email || !formData.countryOfResidence || !formData.consent) {
      return;
    }
    // Form is purely contact routing by destination
    setIsSubmitted(true);
  };

  return (
    <div className="space-y-10 font-sans max-w-measure mx-auto">
      {/* Header */}
      <div className="border-b border-line pb-6 space-y-3">
        <div className="flex items-center gap-2 text-meta text-ink-60 flex-wrap">
          <span className="text-eyebrow text-ink-60">Professional Support</span>
          <span className="text-line-strong">·</span>
          <span className="text-ink font-medium">Adviser Introductions</span>
        </div>
        <h1 className="font-serif text-display-md sm:text-display-lg text-ink font-normal tracking-tight">
          Licensed Migration Adviser Introductions
        </h1>
        <p className="text-body-lg text-ink-70 leading-relaxed">
          If you require bespoke legal advice on visa subclasses, points requirements, or formal migration applications, we can connect you with an independent adviser licensed in your target jurisdiction.
        </p>
      </div>

      {/* Mandatory Consumer Protection Line */}
      <div className="bg-paper-alt border border-line rounded-lg p-5 space-y-2">
        <div className="flex items-center gap-2 text-ink font-semibold text-body-sm">
          <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
          <span>The One Rule: Always verify your adviser on the official statutory register</span>
        </div>
        <p className="text-body-sm text-ink-70 leading-relaxed">
          Never pay fees to anyone providing migration advice without first confirming their active status on the official public register for that country:
        </p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 text-meta-sm font-medium">
          <a
            href="https://portal.mara.gov.au/search-the-register-of-migration-agents/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            Australia (OMARA Register) <ExternalLink className="w-3 h-3" />
          </a>
          <span>·</span>
          <a
            href="https://www.iaa.govt.nz/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            New Zealand (IAA Register) <ExternalLink className="w-3 h-3" />
          </a>
          <span>·</span>
          <a
            href="https://www.gov.uk/find-an-immigration-adviser"
            target="_blank"
            rel="noopener noreferrer"
            className="text-accent hover:underline inline-flex items-center gap-1"
          >
            United Kingdom (OISC Register) <ExternalLink className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* How the Introduction Works */}
      <section className="space-y-4">
        <h2 className="font-serif text-heading-md text-ink font-semibold">
          How Our Introduction Service Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <strong className="text-body text-ink font-semibold block">1. Destination Routing</strong>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              We route exclusively by destination country. We do not ask eligibility questions, review qualifications, or assess your chances.
            </p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <strong className="text-body text-ink font-semibold block">2. Direct Relationship</strong>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              Your details are passed to a named, licensed practitioner in that jurisdiction. From that point, your engagement is strictly between you and them.
            </p>
          </div>
          <div className="bg-surface border border-line rounded-lg p-5 space-y-2">
            <strong className="text-body text-ink font-semibold block">3. Transparent Disclosure</strong>
            <p className="text-body-sm text-ink-70 leading-relaxed">
              We may receive a standard referral fee from partner advisers when an introduction leads to formal engagement. This relationship does not affect the cost of their services to you.
            </p>
          </div>
        </div>
      </section>

      {/* Referral Form or Confirmation */}
      <section className="bg-surface border border-line rounded-lg p-6 sm:p-8 space-y-6">
        <div className="space-y-1">
          <h2 className="font-serif text-heading-md text-ink font-semibold">
            Request an Adviser Introduction
          </h2>
          <p className="text-body-sm text-ink-70 leading-relaxed">
            Please provide your contact details and target destination. No qualification documents or test scores are requested or stored.
          </p>
        </div>

        {isSubmitted ? (
          <div className="bg-accent-wash border border-accent/20 rounded-lg p-6 space-y-4">
            <div className="flex items-center gap-2 text-accent font-semibold text-heading-sm">
              <CheckCircle2 className="w-5 h-5 shrink-0" />
              <span>Introduction Request Received</span>
            </div>
            <p className="text-body text-ink-70 leading-relaxed">
              Thank you, {formData.fullName}. We have routed your enquiry to a licensed migration practitioner registered for <strong>{formData.destination}</strong>. They will contact you directly via <strong>{formData.email}</strong>.
            </p>
            <div className="border-t border-accent/20 pt-3 text-meta-sm text-ink-70">
              <p>
                <strong>Remember:</strong> When the adviser contacts you, ask for their official statutory registration number and verify it on the national register before sharing personal identification documents or transferring funds.
              </p>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="fullName" className="text-label text-ink font-semibold block">
                  Full Name
                </label>
                <input
                  id="fullName"
                  type="text"
                  required
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  placeholder="e.g. Maria Santos"
                  className="w-full px-3.5 py-2.5 rounded border border-line bg-paper text-ink text-body-sm focus:outline-accent min-h-control"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-label text-ink font-semibold block">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="name@example.com"
                  className="w-full px-3.5 py-2.5 rounded border border-line bg-paper text-ink text-body-sm focus:outline-accent min-h-control"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="residence" className="text-label text-ink font-semibold block">
                  Current Country of Residence
                </label>
                <input
                  id="residence"
                  type="text"
                  required
                  value={formData.countryOfResidence}
                  onChange={(e) => setFormData({ ...formData, countryOfResidence: e.target.value })}
                  placeholder="e.g. Saudi Arabia, UAE, Philippines, India"
                  className="w-full px-3.5 py-2.5 rounded border border-line bg-paper text-ink text-body-sm focus:outline-accent min-h-control"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="destination" className="text-label text-ink font-semibold block">
                  Target Destination
                </label>
                <select
                  id="destination"
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-3.5 py-2.5 rounded border border-line bg-paper text-ink text-body-sm focus:outline-accent min-h-control"
                >
                  <option value="Australia">Australia (OMARA Registered)</option>
                  <option value="New Zealand">New Zealand (IAA Licensed)</option>
                  <option value="United Kingdom">United Kingdom (OISC Regulated)</option>
                </select>
              </div>
            </div>

            <div className="pt-2">
              <label className="flex items-start gap-3 cursor-pointer text-body-sm text-ink-70">
                <input
                  type="checkbox"
                  required
                  checked={formData.consent}
                  onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded border-line text-accent focus:ring-accent"
                />
                <span>
                  I understand StudyNursing.net is forwarding my contact details to an independent licensed migration adviser for my chosen destination. StudyNursing.net does not assess my case, advise on visas, or guarantee any outcome.
                </span>
              </label>
            </div>

            <div className="pt-3">
              <button
                type="submit"
                className="inline-flex items-center gap-2 px-6 py-3 rounded bg-accent text-white hover:bg-accent-dark font-semibold text-body-sm transition-colors min-h-control"
              >
                <span>Request introduction</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}
      </section>

      {/* Editorial Boundary Caution */}
      <CautionPanel title="Statutory adviser boundaries">
        <p>
          StudyNursing.net never gives immigration advice, acts as your migration representative, or charges advice fees. If you choose to engage a partner adviser, review their formal client agreement, fee schedule, and professional registration status prior to signing.
        </p>
      </CautionPanel>

      {/* Cross-Link */}
      <div className="pt-4 border-t border-line flex items-center justify-between">
        <button
          type="button"
          onClick={() => onNavigate && onNavigate("/sources")}
          className="text-body-sm font-semibold text-accent hover:text-accent-dark underline"
        >
          ← Primary sources directory
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
