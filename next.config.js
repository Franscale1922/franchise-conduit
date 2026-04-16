/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: '**' }
    ]
  },

  /**
   * ─────────────────────────────────────────────────────────────────────────
   *  301 REDIRECT MAP — Domain Authority Preservation
   * ─────────────────────────────────────────────────────────────────────────
   *  FranchiseConduit.com: DA 27 / 618 referring domains (Moz, April 2026)
   *
   *  These redirects fire on Day 1 of migration (DNS cutover from WordPress).
   *  Every indexed URL on the live WP site is mapped to a Next.js equivalent.
   *  permanent: true = 301 (passes full link equity to destination).
   *  permanent: false = 302 (temporary — never use for migration redirects).
   *
   *  Rules:
   *  - Never delete an entry once the platform is live
   *  - Never change a destination URL without adding a new redirect for the old destination
   *  - Catch-alls (:slug wildcards) must come AFTER specific rules for the same pattern
   * ─────────────────────────────────────────────────────────────────────────
   */
  async redirects() {
    return [

      // ─── STATIC PAGE REDIRECTS ──────────────────────────────────────────
      {
        source: '/explore',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/explore/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/about-us',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/about-us/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/franchise-blog',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/franchise-blog/',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/testimonials',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/testimonials/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/learn_franchise_my_business_franchise_conduit',
        destination: '/quiz',
        permanent: true,
      },
      {
        source: '/learn_franchise_my_business_franchise_conduit/',
        destination: '/quiz',
        permanent: true,
      },
      {
        source: '/take-franchise-fit-entrepreneurial-survey',
        destination: '/quiz',
        permanent: true,
      },
      {
        source: '/take-franchise-fit-entrepreneurial-survey/',
        destination: '/quiz',
        permanent: true,
      },
      {
        source: '/buy_a_franchise_business_resources',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/buy_a_franchise_business_resources/',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/franchise_consultants_franchise_professionals',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/franchise_consultants_franchise_professionals/',
        destination: '/about',
        permanent: true,
      },
      {
        source: '/franchise_consultants_franchise_opportunity',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/franchise_consultants_franchise_opportunity/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/direct-mail-franchises-big-business-in-sending-mail',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/direct-mail-franchises-big-business-in-sending-mail/',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/senior-care-authority-grows-with-south-bay-area-franchise',
        destination: '/franchises/industries/senior-care',
        permanent: true,
      },
      {
        source: '/senior-care-authority-grows-with-south-bay-area-franchise/',
        destination: '/franchises/industries/senior-care',
        permanent: true,
      },
      // /privacy-policy page is built at app/privacy-policy/page.tsx — no redirect needed


      // ─── BLOG POST REDIRECTS — HIGH TRAFFIC / HIGH VALUE ────────────────
      // These are the posts most likely to be transferring real backlink equity.
      // Root-level WordPress slugs (no /blog/ prefix — critical to match exactly).
      {
        source: '/how-to-buy-a-franchise',
        destination: '/resources/how-to-buy-a-franchise',
        permanent: true,
      },
      {
        source: '/how-to-buy-a-franchise/',
        destination: '/resources/how-to-buy-a-franchise',
        permanent: true,
      },
      {
        source: '/why-do-franchises-fail',
        destination: '/resources/why-franchises-fail',
        permanent: true,
      },
      {
        source: '/why-do-franchises-fail/',
        destination: '/resources/why-franchises-fail',
        permanent: true,
      },
      // '/what-is-franchising' → no dedicated article yet; route to hub (best available match)
      {
        source: '/what-is-franchising',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/what-is-franchising/',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/how-to-calculate-return-on-investment-for-purchasing-a-franchise-business',
        destination: '/resources/franchise-roi',
        permanent: true,
      },
      {
        source: '/how-to-calculate-return-on-investment-for-purchasing-a-franchise-business/',
        destination: '/resources/franchise-roi',
        permanent: true,
      },
      // '/choosing-the-right-franchise-...' → due diligence topic → reading-an-fdd is the closest match
      {
        source: '/choosing-the-right-franchise-15-key-questions-to-ask',
        destination: '/resources/reading-an-fdd',
        permanent: true,
      },
      {
        source: '/choosing-the-right-franchise-15-key-questions-to-ask/',
        destination: '/resources/reading-an-fdd',
        permanent: true,
      },
      {
        source: '/understanding-ftc-guidelines-for-item-19-disclosures-in-franchise-documents',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/understanding-ftc-guidelines-for-item-19-disclosures-in-franchise-documents/',
        destination: '/resources/fdd',
        permanent: true,
      },
      // '/how-to-compare-franchise-models-...' → franchise-roi covers financial comparison
      {
        source: '/how-to-compare-franchise-models-and-choose-the-best-investment',
        destination: '/resources/franchise-roi',
        permanent: true,
      },
      {
        source: '/how-to-compare-franchise-models-and-choose-the-best-investment/',
        destination: '/resources/franchise-roi',
        permanent: true,
      },
      // '/informed-investment-key-questions-...' → validation/due diligence content → reading-an-fdd
      {
        source: '/informed-investment-key-questions-to-ask-franchisees-when-considering-a-franchise-system',
        destination: '/resources/reading-an-fdd',
        permanent: true,
      },
      {
        source: '/informed-investment-key-questions-to-ask-franchisees-when-considering-a-franchise-system/',
        destination: '/resources/reading-an-fdd',
        permanent: true,
      },
      {
        source: '/reading-a-franchise-fdd-cover-page-to-item-23',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/reading-a-franchise-fdd-cover-page-to-item-23/',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/understanding-the-fdd-as-a-franchisee-and-franchisor',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/understanding-the-fdd-as-a-franchisee-and-franchisor/',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/the-fdd-at-a-glance-and-up-close',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/the-fdd-at-a-glance-and-up-close/',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/the-fdd-and-the-law',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/the-fdd-and-the-law/',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/the-agreement-verbal-agreement-and-the-fdd',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/the-agreement-verbal-agreement-and-the-fdd/',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/missing-information-in-the-fdd-or-other-franchise-documents',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/missing-information-in-the-fdd-or-other-franchise-documents/',
        destination: '/resources/fdd',
        permanent: true,
      },
      // '/the-basic-costs-of-setting-up-your-franchise' → franchise-roi covers startup cost analysis
      {
        source: '/the-basic-costs-of-setting-up-your-franchise',
        destination: '/resources/franchise-roi',
        permanent: true,
      },
      {
        source: '/the-basic-costs-of-setting-up-your-franchise/',
        destination: '/resources/franchise-roi',
        permanent: true,
      },
      {
        source: '/franchise-series-5-assessing-your-financial-situation',
        destination: '/quiz',
        permanent: true,
      },
      {
        source: '/franchise-series-5-assessing-your-financial-situation/',
        destination: '/quiz',
        permanent: true,
      },
      {
        source: '/canadian-franchising-an-overview-on-finding-the-right-franchise-investment-and-how-to-franchise-your-business-in-canada',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/canadian-franchising-an-overview-on-finding-the-right-franchise-investment-and-how-to-franchise-your-business-in-canada/',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/a-comprehensive-guide-on-how-to-choose-the-right-automotive-franchise',
        destination: '/franchises/industries/automotive',
        permanent: true,
      },
      {
        source: '/a-comprehensive-guide-on-how-to-choose-the-right-automotive-franchise/',
        destination: '/franchises/industries/automotive',
        permanent: true,
      },
      {
        source: '/how-to-present-the-franchise-disclosure-document-fdd',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/how-to-present-the-franchise-disclosure-document-fdd/',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/how-to-set-up-your-franchise-disclosure-document-when-you-franchise-your-business',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/how-to-set-up-your-franchise-disclosure-document-when-you-franchise-your-business/',
        destination: '/resources/fdd',
        permanent: true,
      },
      {
        source: '/sbarro-franchise-the-story-of-an-iconic-pizza-franchise-and-its-global-journey',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/sbarro-franchise-the-story-of-an-iconic-pizza-franchise-and-its-global-journey/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/dairy-queen-franchise-system-a-delicious-legacy-and-business-opportunity',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/dairy-queen-franchise-system-a-delicious-legacy-and-business-opportunity/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/the-acai-bowl-franchise-market-top-brands-and-growth-trends',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/the-acai-bowl-franchise-market-top-brands-and-growth-trends/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/the-best-franchises-to-invest-in-as-a-master-franchise-and-how-master-franchises-work-effectively',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/the-best-franchises-to-invest-in-as-a-master-franchise-and-how-master-franchises-work-effectively/',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/overview-of-the-staffing-services-franchise-market',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/overview-of-the-staffing-services-franchise-market/',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/how-does-the-visa-process-work-when-you-buy-a-franchise',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/how-does-the-visa-process-work-when-you-buy-a-franchise/',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/what-franchise-has-the-best-breakfast',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/what-franchise-has-the-best-breakfast/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/a-convenience-store-pioneer-the-evolution-of-the-7-eleven-franchise-system',
        destination: '/franchises/industries/retail',
        permanent: true,
      },
      {
        source: '/a-convenience-store-pioneer-the-evolution-of-the-7-eleven-franchise-system/',
        destination: '/franchises/industries/retail',
        permanent: true,
      },
      {
        source: '/a-review-of-the-franchise-car-wash-industry-and-top-franchise-car-wash-brands',
        destination: '/franchises/industries/automotive',
        permanent: true,
      },
      {
        source: '/a-review-of-the-franchise-car-wash-industry-and-top-franchise-car-wash-brands/',
        destination: '/franchises/industries/automotive',
        permanent: true,
      },
      {
        source: '/navigating-legal-and-compliance-considerations-when-starting-a-new-business-in-the-united-states',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/navigating-legal-and-compliance-considerations-when-starting-a-new-business-in-the-united-states/',
        destination: '/resources',
        permanent: true,
      },
      // Note: /buying-a-low-cost-franchise-under-50000/ conflicts with $100K+ positioning.
      // Redirecting to /franchises with no equivalent content (intentional — platform minimum is $100K).
      {
        source: '/buying-a-low-cost-franchise-under-50000',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/buying-a-low-cost-franchise-under-50000/',
        destination: '/franchises',
        permanent: true,
      },

      // ─── INDUSTRY CATEGORY REDIRECTS (55 WP taxonomy pages → 12 hub pages) ─
      {
        source: '/category/home-services',
        destination: '/franchises/industries/home-services',
        permanent: true,
      },
      {
        source: '/category/home-services/',
        destination: '/franchises/industries/home-services',
        permanent: true,
      },
      {
        source: '/category/fitness',
        destination: '/franchises/industries/fitness',
        permanent: true,
      },
      {
        source: '/category/fitness/',
        destination: '/franchises/industries/fitness',
        permanent: true,
      },
      {
        source: '/category/cleaning-franchises',
        destination: '/franchises/industries/cleaning-services',
        permanent: true,
      },
      {
        source: '/category/cleaning-franchises/',
        destination: '/franchises/industries/cleaning-services',
        permanent: true,
      },
      {
        source: '/category/food-franchise',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/food-franchise/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/restaurant',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/restaurant/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/cafe-franchise',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/cafe-franchise/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/cafe-franchises',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/cafe-franchises/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/pizza',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/pizza/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/sandwiches',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/sandwiches/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/breakfast',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/breakfast/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/ice-cream',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/ice-cream/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/mexican',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/mexican/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/meixcan', // typo preserved from WP — must match exactly
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/meixcan/',
        destination: '/franchises/industries/food-beverage',
        permanent: true,
      },
      {
        source: '/category/automotive',
        destination: '/franchises/industries/automotive',
        permanent: true,
      },
      {
        source: '/category/automotive/',
        destination: '/franchises/industries/automotive',
        permanent: true,
      },
      {
        source: '/category/education',
        destination: '/franchises/industries/education',
        permanent: true,
      },
      {
        source: '/category/education/',
        destination: '/franchises/industries/education',
        permanent: true,
      },
      {
        source: '/category/child-related',
        destination: '/franchises/industries/education',
        permanent: true,
      },
      {
        source: '/category/child-related/',
        destination: '/franchises/industries/education',
        permanent: true,
      },
      {
        source: '/category/technology',
        destination: '/franchises/industries/technology',
        permanent: true,
      },
      {
        source: '/category/technology/',
        destination: '/franchises/industries/technology',
        permanent: true,
      },
      {
        source: '/category/computer-internet',
        destination: '/franchises/industries/technology',
        permanent: true,
      },
      {
        source: '/category/computer-internet/',
        destination: '/franchises/industries/technology',
        permanent: true,
      },
      {
        source: '/category/cell-phone',
        destination: '/franchises/industries/technology',
        permanent: true,
      },
      {
        source: '/category/cell-phone/',
        destination: '/franchises/industries/technology',
        permanent: true,
      },
      {
        source: '/category/electronic-repair',
        destination: '/franchises/industries/technology',
        permanent: true,
      },
      {
        source: '/category/electronic-repair/',
        destination: '/franchises/industries/technology',
        permanent: true,
      },
      {
        source: '/category/health-medical',
        destination: '/franchises/industries/health-wellness',
        permanent: true,
      },
      {
        source: '/category/health-medical/',
        destination: '/franchises/industries/health-wellness',
        permanent: true,
      },
      {
        source: '/category/wellness',
        destination: '/franchises/industries/health-wellness',
        permanent: true,
      },
      {
        source: '/category/wellness/',
        destination: '/franchises/industries/health-wellness',
        permanent: true,
      },
      {
        source: '/category/hair-beauty',
        destination: '/franchises/industries/health-wellness',
        permanent: true,
      },
      {
        source: '/category/hair-beauty/',
        destination: '/franchises/industries/health-wellness',
        permanent: true,
      },
      {
        source: '/category/business-services',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/business-services/',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/professional-services',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/professional-services/',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/consulting',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/consulting/',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/marketing',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/marketing/',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/advertising',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/advertising/',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/retail',
        destination: '/franchises/industries/retail',
        permanent: true,
      },
      {
        source: '/category/retail/',
        destination: '/franchises/industries/retail',
        permanent: true,
      },
      {
        source: '/category/store',
        destination: '/franchises/industries/retail',
        permanent: true,
      },
      {
        source: '/category/store/',
        destination: '/franchises/industries/retail',
        permanent: true,
      },
      {
        source: '/category/clothing-accessories',
        destination: '/franchises/industries/retail',
        permanent: true,
      },
      {
        source: '/category/clothing-accessories/',
        destination: '/franchises/industries/retail',
        permanent: true,
      },
      {
        source: '/category/home-decor',
        destination: '/franchises/industries/retail',
        permanent: true,
      },
      {
        source: '/category/home-decor/',
        destination: '/franchises/industries/retail',
        permanent: true,
      },
      {
        source: '/category/construction',
        destination: '/franchises/industries/property-restoration',
        permanent: true,
      },
      {
        source: '/category/construction/',
        destination: '/franchises/industries/property-restoration',
        permanent: true,
      },
      {
        source: '/category/maintenance-and-repair',
        destination: '/franchises/industries/home-services',
        permanent: true,
      },
      {
        source: '/category/maintenance-and-repair/',
        destination: '/franchises/industries/home-services',
        permanent: true,
      },
      {
        source: '/category/carpet-cleaning',
        destination: '/franchises/industries/cleaning-services',
        permanent: true,
      },
      {
        source: '/category/carpet-cleaning/',
        destination: '/franchises/industries/cleaning-services',
        permanent: true,
      },
      {
        source: '/category/painting',
        destination: '/franchises/industries/home-services',
        permanent: true,
      },
      {
        source: '/category/painting/',
        destination: '/franchises/industries/home-services',
        permanent: true,
      },
      {
        source: '/category/pet-franchises',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/pet-franchises/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/pet-grooming',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/pet-grooming/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/pet-services',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/pet-services/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/senior-care',
        destination: '/franchises/industries/senior-care',
        permanent: true,
      },
      {
        source: '/category/senior-care/',
        destination: '/franchises/industries/senior-care',
        permanent: true,
      },
      {
        source: '/category/sports-and-recreation',
        destination: '/franchises/industries/fitness',
        permanent: true,
      },
      {
        source: '/category/sports-and-recreation/',
        destination: '/franchises/industries/fitness',
        permanent: true,
      },
      {
        source: '/category/entertainment-and-leisure',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/entertainment-and-leisure/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/real-estate',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/real-estate/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/high-capital',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/high-capital/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/top-franchises',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/top-franchises/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/new-franchises',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/new-franchises/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/low-cost',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/low-cost/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/sba-approved',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/sba-approved/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/veterans',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/veterans/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/home-based',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/home-based/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/transportation',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/transportation/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/hotels',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/hotels/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/travel',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/travel/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/womens',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/womens/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/wholesale-and-distribution',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/wholesale-and-distribution/',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/manufacturing',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/manufacturing/',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/energy',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/energy/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/environmental-services',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/environmental-services/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/smoke-shop',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/smoke-shop/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/bars-night-clubs',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/bars-night-clubs/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/art',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/art/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/media-and-communication',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/media-and-communication/',
        destination: '/franchises/industries/business-services',
        permanent: true,
      },
      {
        source: '/category/agriculture',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/agriculture/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/investment-education',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/category/investment-education/',
        destination: '/resources',
        permanent: true,
      },
      {
        source: '/category/lighting',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/lighting/',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/customer-service',
        destination: '/franchises',
        permanent: true,
      },
      {
        source: '/category/customer-service/',
        destination: '/franchises',
        permanent: true,
      },

      // ─── CATCH-ALL: any remaining /category/ paths not matched above ─────
      {
        source: '/category/:slug*',
        destination: '/franchises',
        permanent: true,
      },

      // ─── FRANCHISE LISTING REDIRECTS ──────────────────────────────────────
      // WordPress job listing plugin uses /franchise/[slug]
      // Next.js equivalent is /franchises/[slug]
      // The :slug* wildcard passes the slug straight through — if slugs match
      // exactly between WP and Next.js, this single rule handles all 1,800 pages.
      // Add specific overrides ABOVE this rule if any slug was renamed.
      {
        source: '/franchise/:slug*',
        destination: '/franchises/:slug*',
        permanent: true,
      },

      // ─── WP ADMIN / UTILITY PAGES ─────────────────────────────────────────
      // These had no SEO value but may be bookmarked internally.
      // Not redirected — will 404 cleanly, which is correct behavior.
    ]
  },
}

module.exports = nextConfig
