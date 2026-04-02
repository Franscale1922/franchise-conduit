import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy — Franchise Conduit',
  description: 'How Franchise Conduit collects, uses, and protects your personal information. We never sell your data or share it with franchisors without your explicit approval.',
  robots: { index: true, follow: true },
}

export default function PrivacyPolicyPage() {
  const lastUpdated = 'April 2, 2026'

  return (
    <div className="section">
      <div className="container-md">

        <div style={{ maxWidth: '720px' }}>

          <div style={{ marginBottom: 'var(--space-10)' }}>
            <span className="badge badge-muted" style={{ marginBottom: 'var(--space-4)', display: 'inline-flex' }}>
              Legal
            </span>
            <h1 className="text-headline" style={{ marginBottom: 'var(--space-3)' }}>
              Privacy Policy
            </h1>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
              Last updated: {lastUpdated}
            </p>
          </div>

          <div className="insight-block" style={{ marginBottom: 'var(--space-10)' }}>
            <div className="insight-label"><span>◈</span> The Short Version</div>
            <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.75' }}>
              We collect only what we need to match you with the right franchise opportunity. 
              We never sell your data. We never share your contact information with a franchisor 
              without your explicit approval. An advisor reviews every inquiry before any brand 
              ever sees your name.
            </p>
          </div>

          {[
            {
              heading: '1. Information We Collect',
              content: `When you use Franchise Conduit, we may collect information you provide directly — such as your 
              name, email address, investment range, location preferences, and ownership model interests when you submit 
              a contact form or complete the investor quiz. We also collect standard usage data (pages visited, time on 
              site, referring URLs) through analytics tools to improve the platform. We do not collect payment information 
              on this platform.`,
            },
            {
              heading: '2. How We Use Your Information',
              content: `We use the information you provide to: (a) match you with appropriate franchise opportunities 
              through our advisor review process; (b) respond to your inquiries; (c) send you relevant updates about 
              franchise opportunities if you have opted in; and (d) improve the platform experience. We do not use 
              your information for automated decision-making or profiling for advertising purposes.`,
            },
            {
              heading: '3. Information Sharing — Our Core Commitment',
              content: `Your contact information is never shared with a franchisor, franchise broker, or third-party 
              advertiser without your explicit approval. This is a foundational policy — not just a legal statement. 
              Our advisor reviews every inquiry before any brand introduction occurs. You control whether an 
              introduction is made and to which brands. We may share anonymized, aggregated data (not linked to 
              any individual) with brand partners for platform improvement purposes.`,
            },
            {
              heading: '4. Cookies and Analytics',
              content: `We use cookies and similar tracking technologies to understand how visitors use the platform 
              and to improve our content. We use Google Analytics. You can opt out of Google Analytics tracking 
              using the Google Analytics Opt-out Browser Add-on. We do not use advertising pixels or tracking 
              for retargeting purposes on this platform.`,
            },
            {
              heading: '5. Data Retention',
              content: `We retain your personally identifiable information for as long as necessary to provide the 
              services you have requested and to comply with applicable legal obligations. If you have submitted 
              an inquiry and do not wish to continue the process, you may request deletion of your data by emailing 
              privacy@franchiseconduit.com. We will process your request within 30 days.`,
            },
            {
              heading: '6. Your Rights',
              content: `Depending on your location, you may have rights regarding your personal data including 
              the right to access, correct, or delete information we hold about you. To exercise any of these 
              rights, contact us at privacy@franchiseconduit.com. California residents have additional rights 
              under the California Consumer Privacy Act (CCPA).`,
            },
            {
              heading: '7. Security',
              content: `We implement reasonable technical and organizational measures to protect your information 
              against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission 
              is completely secure. Please contact us immediately at security@franchiseconduit.com if you believe 
              your account security has been compromised.`,
            },
            {
              heading: '8. Children\'s Privacy',
              content: `Franchise Conduit is intended for adults who are considering franchise investment. We do 
              not knowingly collect personal information from individuals under the age of 18. If you believe a 
              minor has submitted information through our platform, please contact us at privacy@franchiseconduit.com 
              and we will promptly delete it.`,
            },
            {
              heading: '9. Changes to This Policy',
              content: `We may update this Privacy Policy periodically. We will notify registered users of 
              significant changes by email. The "last updated" date at the top of this page reflects the 
              most recent revision. Continued use of the platform after changes constitutes acceptance of 
              the revised policy.`,
            },
            {
              heading: '10. Contact',
              content: `For privacy questions, data deletion requests, or concerns: privacy@franchiseconduit.com. 
              For general inquiries: advisors@franchiseconduit.com. Response time: within 2 business days.`,
            },
          ].map((section) => (
            <section key={section.heading} style={{ marginBottom: 'var(--space-8)' }}>
              <h2 style={{ fontWeight: 600, fontSize: '1.0625rem', color: 'var(--color-text-primary)', marginBottom: 'var(--space-3)' }}>
                {section.heading}
              </h2>
              <p style={{ color: 'var(--color-text-secondary)', lineHeight: '1.8', fontSize: '0.9375rem' }}>
                {section.content}
              </p>
            </section>
          ))}

          <div style={{ padding: 'var(--space-6)', background: 'var(--color-surface)', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-border)', marginTop: 'var(--space-10)' }}>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '0.8125rem', lineHeight: '1.7' }}>
              <strong style={{ color: 'var(--color-text-secondary)' }}>Franchise investment disclaimer:</strong>{' '}
              Franchise investments involve significant financial risk. Nothing on this platform constitutes 
              financial, legal, or investment advice. Review all FDD disclosures and consult with a qualified 
              franchise attorney and financial advisor before making any investment decision.
            </p>
          </div>

        </div>
      </div>
    </div>
  )
}
