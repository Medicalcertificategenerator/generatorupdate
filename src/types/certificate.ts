export type HandwritingFont = 'caveat' | 'dancing' | 'kalam';
export type InkColor = 'blue' | 'black' | 'lightblue';

export interface CertificateData {
  patientName: string;
  age: string;
  gender: string;
  date: string;
  diagnosis: string;
  notes: string;
  restDays: string;
  doctorName: string;
  hospitalName: string;
  doctorDegree: string;
  phone: string;
  address: string;
  font: HandwritingFont;
  color: InkColor;
  watermark: boolean;
  textSize: number;
}

export interface TemplateContent {
  clinicType: string;
  indiaRegion: string;
  primaryUseCase: string;
  fieldsIncluded: string[];
  bestFor: string[];
  notIdealFor: string[];
  vsOtherTemplates: string;
  uniqueDescription: string;
  formatDetails: string;
  userGuide: string;
}

export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  previewImage: string;
  templateContent: TemplateContent;
}

export const TEMPLATES: Template[] = [
  // ─────────────────────────────────────────────────────────────────────────
  // 1. formal-cert — 249 impressions, 1.61% CTR ← HIGH PRIORITY
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'formal-cert',
    name: 'City General Hospital',
    description: 'Classic formal medical certificate with bordered layout',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-john-smith_1774458646754.png',
    templateContent: {
      clinicType: 'Corporate multispecialty hospital / NABH-accredited style',
      indiaRegion: 'Metro cities — Mumbai, Delhi, Bengaluru, Hyderabad, Chennai',
      primaryUseCase: 'MNC and corporate sick leave, insurance pre-authorisation, government employment',
      fieldsIncluded: [
        'Typed letterhead with hospital name and registration number',
        'Patient UHID / hospital ID field',
        'Typed diagnosis with ICD-10 code reference',
        "Doctor's printed name and qualifications",
        'NMC registration number prominently displayed',
        'Official hospital seal / stamp area',
        'Countersignature field for HOD or senior consultant',
        'Formal rest period notation with specific dates',
      ],
      bestFor: [
        'Submitting to HR departments at Infosys, TCS, Wipro, HCL, Accenture, and other large MNCs',
        'Insurance reimbursement and cashless hospitalisation claim processing',
        'Government department submissions requiring a formal "hospital certificate"',
        'Pre-employment medical clearance for MNC joining procedures',
      ],
      notIdealFor: [
        'Short GP visits for 1–2 days of sick leave — a formal hospital certificate for a minor cold looks disproportionate and may raise suspicion',
        'Student college attendance condonation — universities typically prefer a GP clinic format over a formal hospital letter',
      ],
      vsOtherTemplates: 'The formal-cert template is the most structured of all formats in this generator. Unlike the ishnavi-clinic or narayan-care templates — which simulate smaller neighbourhood or urban clinic letterheads — this format replicates the typed, institutional presentation of large hospital OPD departments. It includes a UHID field and countersignature area that smaller clinic templates omit entirely. For any submission to an organisation with more than 500 employees, insurance TPAs, or central government departments, the formal-cert format is the appropriate choice. The handwritten GP formats (astha-clinic, health-first) are better suited for casual local business and school submissions.',
      uniqueDescription: 'Large corporate and multispecialty hospitals across India adopted a standardised typed certificate format progressively from 2015 onwards, accelerated by the NABH (National Accreditation Board for Hospitals) accreditation requirements that mandate consistent patient documentation. In NABH-accredited hospitals — including Apollo, Fortis, Max Healthcare, and Manipal — the outpatient certificate follows a typed format with the hospital registration number, the department name, and the treating doctor\'s full credentials printed rather than handwritten. This approach dramatically reduces fraud risk: a typed NMC registration number is easier for HR teams to verify on the NMC portal compared to a handwritten entry that may be altered. Insurance TPAs (Third Party Administrators) — including MD India, Vidal Health, and Medi Assist — process typed certificates significantly faster than handwritten ones because their OCR systems can extract ICD-10 codes and doctor registration numbers directly without manual data entry. Large IT companies in Bengaluru and Hyderabad, financial sector employers in Mumbai\'s BKC, and central government offices in Delhi\'s Secretariat complexes specifically request hospital-format certificates for sick leaves exceeding 3 days. This template is the recommended format for any submission to an organisation with more than 500 employees, to any insurance company\'s TPA, or to any government office requiring a formally attested medical document.',
      formatDetails: 'The formal-cert template uses a bordered rectangular layout with the hospital name centred in a bold header, followed by a two-column patient details section (name/age/gender on the left, date/UHID on the right). The diagnosis and rest period are presented in a structured paragraph with clear labels. The bottom section contains three zones: the doctor\'s printed name and NMC number on the left, the stamp area in the centre, and a countersignature field on the right. This three-zone footer mirrors the standard layout used by Apollo and Fortis OPD departments.',
      userGuide: 'When filling this template, use the full clinic or hospital name in the letterhead field — avoid abbreviations. Enter the ICD-10 code in the diagnosis field alongside the plain English name (e.g., "Acute Gastroenteritis — ICD-10 A09"). The NMC registration number field is critical: HR auditors at large companies specifically verify this. Set the rest period as specific calendar dates rather than "5 days" for maximum credibility. For insurance submissions, ensure the UHID field is populated.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 2. pandey-homyo — Homeopathy/AYUSH
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'pandey-homyo',
    name: 'Pandey Homyo Dawakhana',
    description: 'Hindi prescription pad with disease category sidebar',
    category: 'Clinic',
    previewImage: '/images/Medical_Certificate_1774458640169.jpg',
    templateContent: {
      clinicType: 'Homeopathy / AYUSH registered practitioner clinic',
      indiaRegion: 'Pan-India, especially Madhya Pradesh, Uttar Pradesh, West Bengal, Rajasthan',
      primaryUseCase: 'Sick leave from AYUSH-registered practitioners within their permitted scope of practice',
      fieldsIncluded: [
        'Hindi and English bilingual letterhead',
        'Disease category sidebar (common ailments listed for reference)',
        'BHMS / CCH registration number field',
        'Handwritten patient name and diagnosis section',
        'Recommended rest period',
        'Doctor\'s signature with Homeopathic practitioner designation',
        'Clinic stamp area',
      ],
      bestFor: [
        'Sick leave submissions to local government offices, Gram Panchayats, and state government schools that accept AYUSH certificates',
        'Small and medium enterprises in states like MP, UP, and West Bengal that are familiar with Homeopathic practitioners',
        'UI and software testing for platforms serving AYUSH healthcare facilities',
        'Demonstrating the bilingual (Hindi + English) certificate format convention',
      ],
      notIdealFor: [
        'Submissions to large MNCs, insurance TPAs, or central government offices that specifically require certificates from MBBS-registered doctors',
        'Conditions outside the AYUSH practitioner\'s clinical scope — a Homeopathic doctor cannot legally certify orthopaedic fractures or cardiac conditions',
      ],
      vsOtherTemplates: 'The pandey-homyo template is the only AYUSH-specific format in this generator. It differs from formal-cert and ishnavi-clinic primarily in the practitioner credential displayed — BHMS/CCH registration replaces NMC/State Medical Council registration. The bilingual Hindi-English letterhead is unique to this template, matching the actual prescription pad conventions of Homeopathic clinics across Hindi-speaking states. Unlike the dental (mishra-dental) or maternity (muskan-maternity) templates, which represent specialist MBBS practitioners in defined specialties, the pandey-homyo template represents a general AYUSH scope of practice.',
      uniqueDescription: 'AYUSH practitioners — those registered under Ayurveda, Yoga, Unani, Siddha, and Homeopathy systems — can legally issue medical certificates in India within their permitted scope of clinical practice, as recognised under the Indian Medicine Central Council Act 1970 and the Homoeopathy Central Council Act 1973. Homeopathic practitioners with BHMS degrees are registered with the Central Council of Homoeopathy (CCH) and their respective state councils, and are authorised to certify illnesses they are clinically qualified to treat. However, employer and institutional acceptance of AYUSH certificates varies significantly. Most state government schools and gram panchayat-level offices in states like Madhya Pradesh, Uttar Pradesh, and West Bengal — where Homeopathic practitioners form a significant part of the rural and semi-urban healthcare infrastructure — routinely accept BHMS certificates. Central government departments under the Government of India follow specific guidelines: the CGHS (Central Government Health Scheme) policy permits AYUSH treatment but requires allopathic (MBBS) certification for formal sick leave beyond casual leave. Private sector employers are entirely within their rights to accept or reject AYUSH certificates based on internal policy. The pandey-homyo format is appropriate for everyday sick leave in settings where AYUSH practitioners are the primary healthcare contact — rural and semi-urban India — but a formal MBBS certificate is advisable for any submission to a large corporate employer or insurance company.',
      formatDetails: 'The pandey-homyo template uses a bilingual Hindi-English letterhead with the clinic name displayed in both scripts. A notable feature is the disease category sidebar on the left margin, which lists common conditions treated — a real prescription pad convention of many Homeopathic and Ayurvedic clinics across north India. Patient details are handwritten, reflecting the actual practice of most AYUSH practitioners who use pre-printed pads with handwritten entries.',
      userGuide: 'When filling this template, enter the BHMS or BAMS degree in the qualifications field rather than MBBS. The CCH or state AYUSH council registration number should appear in the registration field. The diagnosis should reflect conditions within AYUSH scope — systemic viral illnesses, digestive disorders, allergic conditions. Avoid entering surgical or acute trauma diagnoses, which fall outside AYUSH clinical scope. The Hindi letterhead fields should reflect the clinic name as it appears on the actual registered clinic board.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 3. janya-rx — Simple hospital letterhead
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'janya-rx',
    name: 'Janya Hospital',
    description: 'Simple hospital letterhead Rx format',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-2_1774458655373.webp',
    templateContent: {
      clinicType: 'Government district hospital / urban PHC (Primary Health Centre) style',
      indiaRegion: 'Tier 2/3 cities, district headquarters — Madhya Pradesh, UP, Bihar, Odisha',
      primaryUseCase: 'Government employee sick leave, ESIC claims, state government school absence',
      fieldsIncluded: [
        'Simple hospital letterhead with Rx symbol',
        'Government registration or Civil Surgeon affiliation field',
        'Handwritten patient name, age, and address',
        'Diagnosis in plain medical terminology',
        'Recommended rest period',
        'Doctor\'s stamp with government hospital designation',
        'Date of examination',
      ],
      bestFor: [
        'State government employee sick leave submissions under state-specific leave rules',
        'ESIC (Employees\' State Insurance Corporation) sickness benefit claims',
        'School and college absence documentation in Tier 2 and Tier 3 cities',
        'Testing healthcare applications built for government hospital workflows',
      ],
      notIdealFor: [
        'Large private sector MNCs that expect NABH-style corporate hospital formatting',
        'Insurance cashless hospitalisation claims that require typed ICD-10 codes',
      ],
      vsOtherTemplates: 'The janya-rx template represents a simpler, more utilitarian format than formal-cert or narayan-care. Government PHCs and district hospitals across India use this minimal Rx letterhead approach — focused on the essential fields without decorative elements or structured departmental sections. Compared to ishnavi-clinic, janya-rx uses a larger, more institutional letterhead suggesting a hospital rather than a single-doctor neighbourhood practice. It is most comparable to real-world prescription formats from Civil Hospital OPDs in smaller cities.',
      uniqueDescription: 'Government Primary Health Centres (PHCs) and district hospitals across India\'s Tier 2 and Tier 3 cities produce some of the most widely accepted medical certificates in the country — accepted by government employers, ESIC offices, state education boards, and local courts without the scrutiny applied to private clinic certificates. The PHC/district hospital format is characterised by its simplicity: a plain letterhead with the hospital name and Civil Surgeon or Block Medical Officer designation, a minimal patient details section, and a prominent government rubber stamp. In states like Bihar, Uttar Pradesh, Madhya Pradesh, and Odisha — where the majority of the population relies on government healthcare — a certificate from the local PHC or district hospital carries more institutional weight than a certificate from an unrecognised private clinic. For central government employees covered under CGHS and for ESIC-insured workers, certificates from government hospitals are often preferred or required. The janya-rx template captures these conventions: the Rx letterhead format used by government hospital OPD doctors, with handwritten patient details and a prominent stamp area. It represents the everyday certificate format of India\'s government healthcare infrastructure — functional, trusted, and administratively accepted across the widest range of public institutions.',
      formatDetails: 'The janya-rx template features a centred hospital letterhead with the Rx symbol prominently displayed. The format is intentionally minimal — patient details are handwritten in a single column without structured field dividers, matching the real practice of government hospital OPD encounters where speed is prioritised over formatting. The stamp is large and centrally placed at the bottom, reflecting the government hospital convention of using the hospital\'s official rubber seal as the primary authentication mark.',
      userGuide: 'Use this template to represent government hospital or PHC certificates. Enter the government hospital name in full in the letterhead — including block, district, and state if applicable. The diagnosis should use plain medical terminology rather than ICD-10 codes. The stamp area is the most important visual element — ensure it is legible and contains the hospital name. For ESIC submissions, the doctor\'s ESIC panel number should appear in the registration field.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 4. pg-compact — Compact bordered format
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'pg-compact',
    name: 'P.G. Multispeciality',
    description: 'Compact bordered rest certificate format',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-3_1774458661886.webp',
    templateContent: {
      clinicType: 'Compact urban multispeciality clinic (polyclinic style)',
      indiaRegion: 'Delhi NCR, Lucknow, Jaipur, Kanpur, Bhopal',
      primaryUseCase: 'Student leave, short corporate sick notes, quick absence documentation',
      fieldsIncluded: [
        'Compact bordered layout with multispeciality header',
        'Patient name and age on single line',
        'Concise diagnosis field',
        'Specific rest period dates',
        'Doctor\'s signature and compact stamp area',
        'Department or specialty notation',
      ],
      bestFor: [
        'College and university attendance condonation submissions',
        'Short sick leave notes (1–5 days) for office employees',
        'Rapid UI prototype generation for healthcare app developers',
        'Situations requiring a certificate that fits on a single compact page',
      ],
      notIdealFor: [
        'Insurance claims requiring detailed ICD-10 coding and UHID fields',
        'Government department submissions requiring a Civil Surgeon or government hospital designation',
      ],
      vsOtherTemplates: 'The pg-compact template prioritises conciseness over detail — it conveys all essential certificate fields in a tightly bordered single-page layout. Unlike formal-cert, which allocates separate zones for UHID, countersignature, and department head fields, pg-compact reduces the layout to the five essential elements: patient identity, diagnosis, rest period, doctor credentials, and stamp. This makes it the most student-friendly format in the collection, matching the quick-turnaround certificate style common at urban polyclinics near college campuses in Delhi, Lucknow, and Jaipur.',
      uniqueDescription: 'Urban polyclinics — multi-doctor practices with 3 to 8 practitioners sharing a single registered address — are a dominant healthcare format in North Indian cities like Lucknow, Jaipur, Kanpur, and Delhi\'s residential colonies. These clinics typically use a compact, branded letterhead format that clearly signals multi-practitioner practice while keeping the certificate to a single clean page. The compact bordered layout used by the pg-compact template reflects this real-world convention: a structured border frames the certificate, giving it a professional appearance while the content remains concise. This format is particularly well-suited for student-facing certificates — university examination branches in Delhi, Lucknow, and Jaipur process hundreds of medical certificates each semester, and the compact, clearly structured format allows administrators to quickly verify the key fields (patient name, dates, doctor registration) without parsing a dense page of text. The polyclinic setting also implies general practice scope — applicable to the full range of everyday ailments from viral fever to gastroenteritis to musculoskeletal pain — making this format more versatile than specialist clinic templates for student submissions.',
      formatDetails: 'A prominent rectangular border frames the entire certificate, giving it a formal document appearance at a compact size. The header fits the clinic name and specialties in two lines. Patient details are presented in a condensed grid. The rest period is displayed in bold within a highlighted box — a format detail that allows HR and university administrators to quickly identify the key information without reading the full document.',
      userGuide: 'The pg-compact template works best when the diagnosis is kept concise — one or two words rather than a full clinical narrative. Enter the rest period with specific start and end dates in the highlighted rest period field. The department or specialty field is optional but adds credibility — enter the treating doctor\'s primary specialty (e.g., General Medicine, Paediatrics). Avoid using this format for insurance claims that require detailed coding.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 5. ishnavi-clinic — BEST PERFORMER: 39 clicks, 136 impressions, 28.68% CTR
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'ishnavi-clinic',
    name: 'Ishnavi Clinic',
    description: 'Clinic prescription with timing and doctor details',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-4-new_1774458672933.webp',
    templateContent: {
      clinicType: 'Small private general practice / neighbourhood clinic',
      indiaRegion: 'Tier 2/3 cities, residential colony clinics — UP, MP, Bihar, Rajasthan, Haryana',
      primaryUseCase: 'Everyday sick leave, school absence, short-term rest certificates',
      fieldsIncluded: [
        'Single-doctor letterhead with name, degree, and consultation timings',
        'Handwritten patient name, age, and address',
        'Diagnosis in plain clinical language',
        'Recommended rest period',
        'Doctor\'s signature with NMC/State Council registration number',
        'Clinic stamp positioned at bottom',
        'Consultation timing box (morning/evening hours)',
      ],
      bestFor: [
        'Everyday sick leave for local and small business employees across Tier 2/3 cities',
        'School and college student absence certificates where university CMO is not required',
        'Self-employed and freelance workers presenting medical proof to clients',
        'Software testing for healthcare apps targeting small clinic workflows',
      ],
      notIdealFor: [
        'Large MNC submissions where HR specifically requests a hospital-format certificate',
        'Insurance cashless claims that require typed ICD-10 codes and hospital registration numbers',
      ],
      vsOtherTemplates: 'The ishnavi-clinic format represents the most common medical certificate format across India in terms of sheer volume — the single-doctor neighbourhood clinic prescription pad. Unlike formal-cert, which simulates large corporate hospitals, or narayan-care, which represents urban multispecialty polyclinics, ishnavi-clinic captures the familiar visual language of the local doctor\'s chamber. The consultation timing box — showing morning and evening clinic hours — is a distinctive feature found in real neighbourhood clinic letterheads and is unique to this template. Health-first and astha-clinic are similar in scale but differ in visual presentation; ishnavi-clinic has the most recognisable neighbourhood clinic aesthetic.',
      uniqueDescription: 'The neighbourhood clinic prescription pad is the most ubiquitous medical document format in India. Across Uttar Pradesh, Madhya Pradesh, Bihar, Rajasthan, and Haryana — which together account for nearly 600 million people — the registered general practitioner in a residential colony or market-facing chamber is the first point of medical contact for the overwhelming majority of the population. These clinics use pre-printed prescription pads with the doctor\'s name, degrees, registration number, and crucially, their consultation timing — morning and evening hours — printed at the top. This consultation timing information, replicated in the ishnavi-clinic template, serves as a visual trust signal: it indicates a real, regularly operating practice with defined hours rather than a one-time document issuer. For Tier 2 and Tier 3 city employers — manufacturing plants in Kanpur, trading businesses in Jaipur, local government offices in Bhopal — this format carries more immediate recognisability and trust than a corporate hospital letterhead. Employers in these markets are familiar with this format and actively expect it for routine sick leave submissions. Research consistently shows that Tier 2/3 city HR managers and school administrators process neighbourhood clinic certificates faster precisely because the format matches their everyday experience of what a medical certificate should look like.',
      formatDetails: 'The ishnavi-clinic template features a single-doctor letterhead with the doctor\'s name in large print, degrees and registration number below, and consultation timings in a defined box on the right side of the header. This timing box is a unique and authentic feature of neighbourhood clinic formats. Patient details and diagnosis occupy the central section in handwritten style, with a stamp and signature at the bottom. The overall visual impression is of a trusted local practitioner rather than an institutional entity.',
      userGuide: 'Populate the timing box with realistic consultation hours — a typical neighbourhood clinic operates 9am–1pm and 5pm–8pm. The doctor\'s name should include their primary degree (MBBS or MD Medicine) and their State Medical Council registration number. Use plain clinical language for diagnosis rather than ICD codes — terms like "Acute Viral Fever" or "Gastroenteritis" are more consistent with neighbourhood clinic documentation than ICD-10 codes. The rest period should be specific dates.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 6. muskan-maternity — Maternity hospital
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'muskan-maternity',
    name: 'Muskan Maternity Hospital',
    description: 'Maternity and children hospital with pink branding',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-5_1774458679636.webp',
    templateContent: {
      clinicType: 'Maternity hospital / Gynaecology and Obstetrics clinic (first-level)',
      indiaRegion: 'Semi-urban and Tier 2 cities — Rajasthan, MP, UP, Bihar, Jharkhand',
      primaryUseCase: 'Maternity leave documentation, pregnancy-related sick leave, post-delivery fitness certification',
      fieldsIncluded: [
        'Maternity hospital letterhead with OBG department branding',
        'Patient name, age, and gravida status field',
        'Diagnosis field for obstetric and gynaecological conditions',
        'Expected delivery date or gestational age field',
        'Recommended rest period',
        'MD OBG or MBBS with DGO qualification displayed',
        'Hospital stamp with maternity registration',
      ],
      bestFor: [
        'Maternity leave applications under the Maternity Benefit Act 1961 (26 weeks paid for first two children)',
        'High-risk pregnancy rest documentation for employer HR submissions',
        'Gestational complication certificates for insurance pre-authorisation',
        'Post-delivery fitness certification before returning to work',
      ],
      notIdealFor: [
        'Non-gynaecological medical conditions — a maternity hospital letterhead for a viral fever looks incongruous',
        'Male patient sick leave — the maternity branding makes this format gender-specific',
      ],
      vsOtherTemplates: 'The muskan-maternity template is one of two maternity-specific formats in this generator (alongside palak-maternity). Muskan Maternity represents a first-level maternity hospital format — a dedicated maternity and children\'s hospital with its own institutional branding. Palak-maternity represents a specialist gynaecologist\'s personal clinic format. For maternity leave submissions, both are appropriate; for insurance pre-authorisation, the institutional hospital format (muskan-maternity) carries slightly more administrative weight than a single-doctor clinic format.',
      uniqueDescription: 'Gynaecologist and obstetrician (MD OBG) certificates occupy a unique legal position in India: the Maternity Benefit Act 1961 — last amended in 2017 — mandates 26 weeks of paid maternity leave for female employees in establishments with 10 or more employees for the first two children, and 12 weeks for subsequent children. Section 2(1)(h) of the Act defines the required certificate as one issued by a "registered Medical Practitioner" — covering both MBBS GPs and MD OBG specialists. In practice, employers and HR departments overwhelmingly prefer certificates from gynaecologists or obstetricians for maternity-related leave because the specialist designation provides immediate clinical context. Maternity hospitals in Rajasthan, Madhya Pradesh, UP, and Bihar — states with higher birth rates and substantial maternity healthcare infrastructure — use a distinctive pink or rose-accented branding on their letterheads, a convention the muskan-maternity template replicates. Post-delivery fitness certificates are increasingly required by large employers before a returning mother resumes specific duties — especially physically demanding roles in manufacturing, hospitality, and healthcare itself. The muskan-maternity template covers this use case through its fitness certification field. Search Console data confirms that "medical certificate maternity leave" generates consistent search traffic, reflecting the genuine need for format guidance in this category.',
      formatDetails: 'The muskan-maternity template uses a pink-accented institutional letterhead with the maternity hospital name prominently displayed alongside a children\'s and maternity healthcare icon. The patient details section includes a gravida status field specific to obstetric documentation. The format uses a mix of printed structure and handwritten entries, reflecting the typical maternity OPD documentation style across Tier 2 city hospitals in north-central India.',
      userGuide: 'Populate the gravida status field appropriately for the pregnancy context. The MD OBG or MBBS with DGO qualification should appear in the doctor credentials field. For maternity leave certificates, the diagnosis field should reference the specific condition (e.g., "Normal Pregnancy — 32 weeks" or "Gestational Hypertension") rather than a generic illness. The expected delivery date field significantly strengthens the certificate\'s credibility for HR purposes.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 7. palak-maternity — Gynaecologist personal clinic
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'palak-maternity',
    name: 'Palak Maternity Hospital',
    description: 'Doctor-branded prescription pad with specialist details',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-6_1774458685682.webp',
    templateContent: {
      clinicType: 'Specialist gynaecologist / obstetrician personal practice',
      indiaRegion: 'Pan-India, urban and semi-urban private gynaecology practices',
      primaryUseCase: 'IVF and fertility treatment leave, high-risk pregnancy rest, gynaecological surgery recovery',
      fieldsIncluded: [
        'Specialist doctor-branded letterhead (Dr. name prominent at top)',
        'MD OBG / DGO / DNB qualification display',
        'Medical Council registration number',
        'Patient name and gynaecological history reference',
        'Clinical diagnosis with obstetric/gynaecological specificity',
        'Recommended activity restriction or rest period',
        'Doctor\'s signature with specialist stamp',
      ],
      bestFor: [
        'IVF and Assisted Reproductive Technology (ART) treatment rest documentation',
        'High-risk pregnancy bedrest certification for corporate employers',
        'Post-surgical recovery (caesarean, hysterectomy, laparoscopy) documentation',
        'Gynaecological emergency leave for conditions like PCOS, endometriosis flare-ups',
      ],
      notIdealFor: [
        'Non-gynaecological sick leave — the specialist branding creates confusion for HR departments reviewing non-OBG conditions',
        'Conditions that a general physician is better placed to certify for simplicity',
      ],
      vsOtherTemplates: 'Palak-maternity differs from muskan-maternity in representing a single-specialist personal practice rather than an institutional maternity hospital. The letterhead places the doctor\'s name and MD OBG credentials at the top — a personal branding convention of specialist practitioners across India — whereas muskan-maternity features an institutional hospital name. For IVF and fertility treatment documentation specifically, a specialist personal clinic certificate is more appropriate than an institutional hospital format, as private IVF clinics are typically operated by individual specialist practitioners.',
      uniqueDescription: 'Specialist gynaecologists and obstetricians in private practice across India operate under a distinct documentation convention from institutional hospitals: the letterhead features the doctor\'s name, qualifications (MD OBG, DNB, DGO, FRCOG), and clinic name as their personal professional brand. This personal brand format is preferred by patients because it establishes the specialist\'s identity immediately — important for complex referrals, second opinions, and insurance pre-authorisation where the specific specialist\'s credentials matter. IVF and Assisted Reproductive Technology (ART) treatment has grown significantly in India, with over 250,000 ART cycles performed annually across clinics in Delhi, Mumbai, Bengaluru, and Hyderabad. Fertility treatment often requires extended rest periods and work modifications during ovarian stimulation, egg retrieval, and embryo transfer phases. Certificates from the treating fertility specialist — format similar to the palak-maternity template — are the appropriate documentation for such leave applications. High-risk pregnancy conditions — gestational diabetes, pre-eclampsia, placenta praevia, multiple pregnancies — often require extended periods of restricted activity or complete bedrest. Employers at large companies increasingly require specialist gynaecologist certification (rather than a GP note) for high-risk pregnancy rest periods exceeding two weeks, as it demonstrates specialist-level assessment of the clinical risk.',
      formatDetails: 'The palak-maternity template centres on the doctor\'s name and specialist credentials in a bold letterhead, with the clinic name in a secondary position. The patient details section includes fields specific to gynaecological practice: parity, gestation, and current clinical status. The overall format is more personal and less institutional than muskan-maternity, matching the aesthetic of private specialist practices across urban India.',
      userGuide: 'Enter the gynaecologist\'s full name and qualifications (MD OBG, DNB, DGO) in the letterhead. The medical council registration number — state council or NMC — is critical. For IVF rest certificates, the diagnosis should specify the treatment phase (e.g., "Ovarian Hyperstimulation Syndrome — post-retrieval bedrest indicated"). For post-surgical certificates, include the procedure name and date. The activity restriction notation should be specific — "complete bedrest" or "no strenuous activity" rather than a generic rest period.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 8. ank-multi — Multispeciality with Rx seal
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'ank-multi',
    name: 'A.N.K Multispeciality',
    description: 'Red RX seal multispeciality prescription',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-7_1774458692266.webp',
    templateContent: {
      clinicType: 'ESI / Railway hospital style — multispeciality institutional format',
      indiaRegion: 'Industrial belts — Pune, Ahmedabad, Surat, Ludhiana, Faridabad, Kanpur',
      primaryUseCase: 'ESI sickness benefit claims, Workmen\'s Compensation documentation, factory worker sick leave',
      fieldsIncluded: [
        'Red Rx seal institutional letterhead',
        'Multispeciality department listing',
        'Patient name, age, employee ID reference field',
        'Typed diagnosis with clinical severity notation',
        'Rest period with functional restriction details',
        'Doctor\'s credentials and panel number',
        'Institutional stamp — large format',
      ],
      bestFor: [
        'ESI (Employees\' State Insurance) sickness benefit claim documentation',
        'Factory and industrial worker sick leave under the Factories Act 1948',
        'Workmen\'s Compensation claims requiring institutional-format certificates',
        'Testing HR and payroll software systems handling blue-collar workforce data',
      ],
      notIdealFor: [
        'Student or educational institution submissions where the industrial format is incongruous',
        'Individual GP sick notes for minor illnesses',
      ],
      vsOtherTemplates: 'The ank-multi template is positioned for industrial and institutional use cases that other templates do not serve. Its large Rx seal and multispeciality structure make it visually distinct from neighbourhood clinic formats (ishnavi-clinic, astha-clinic). Unlike formal-cert — which targets corporate office environments — ank-multi captures the institutional certificate format of ESI hospitals and Railway hospitals that serve India\'s organised industrial workforce. The prominent seal reflects the government-adjacent institutional authority of ESI panel hospitals.',
      uniqueDescription: 'India\'s organised industrial sector — manufacturing, logistics, construction, and railways — relies on a distinct medical certificate ecosystem centred around ESI (Employees\' State Insurance) hospitals and Railway hospital networks. The ESI scheme, administered by ESIC under the Employees\' State Insurance Act 1948, covers over 34 million insured workers and their families. ESI-empanelled hospitals and dispensaries across industrial cities like Pune, Surat, Ludhiana, Faridabad, and Kanpur issue certificates specifically designed to trigger sickness benefit claims — covering up to 70% of daily wages for up to 91 days per benefit year. The visual convention of ESI and Railway hospital certificates is the prominent institutional seal — a large, authoritative stamp that signals government-backed institutional authority rather than a private practitioner\'s personal stamp. The ank-multi template captures this convention: the red Rx seal and multispeciality listing reflect the actual certificate format of ESI panel hospitals and Railway hospital OPDs that blue-collar workers across industrial India encounter. For HR systems in manufacturing companies, Workmen\'s Compensation insurers, and ESIC administrative offices, this format is the most recognisable and institutionally appropriate.',
      formatDetails: 'A distinctive red Rx seal forms the visual anchor of the ank-multi letterhead, positioned alongside the hospital name and multispeciality department listing. The patient details section includes an employee ID reference field — unique to this template — reflecting the ESIC practice of linking medical records to the employee\'s insurance number. The stamp area is larger than other templates, matching the convention of ESI hospital stamps.',
      userGuide: 'Use the employee ID field to enter the ESIC insurance number for ESI-related documentation. The diagnosis should include functional restriction information — "Non-weight bearing" or "No heavy lifting" — which is specifically required for ESI sickness benefit and Workmen\'s Compensation claims. The doctor\'s panel number (ESIC empanelment number) should appear in the registration field for ESI submissions.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 9. aditya-multi — Gold header caduceus
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'aditya-multi',
    name: 'Aditya Multispeciality',
    description: 'Gold header caduceus hospital prescription',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-9_1774458705752.webp',
    templateContent: {
      clinicType: 'Premium urban multispecialty hospital / corporate wellness centre',
      indiaRegion: 'Metro cities and Tier 1 cities — Bengaluru, Hyderabad, Pune, Chennai, Noida',
      primaryUseCase: 'Corporate employee wellness programs, executive health checks, premium sick leave documentation',
      fieldsIncluded: [
        'Gold caduceus emblem in letterhead',
        'Multispecialty department listing with HOD names',
        'Patient name, age, corporate employer name',
        'Diagnosis with ICD-10 code reference',
        'Typed rest period with return-to-work date',
        'Senior consultant\'s credentials',
        'Countersignature field for department head',
        'Premium institutional seal',
      ],
      bestFor: [
        'Executive and senior management sick leave documentation at large corporations',
        'Corporate wellness program documentation for IT and financial sector employers',
        'Pre-employment medical clearance for senior-level hires at MNCs',
        'Insurance TPA submissions requiring premium hospital-format certificates',
      ],
      notIdealFor: [
        'Routine daily sick leave for junior employees — the premium format may look disproportionate',
        'Government school or university student submissions',
      ],
      vsOtherTemplates: 'The aditya-multi template represents the most premium visual tier in the hospital format category. Where formal-cert provides a clean institutional layout, aditya-multi adds the gold caduceus emblem and department head countersignature field that premium corporate hospitals use for senior-level patient documentation. It is the closest equivalent to the certificate format used by Apollo\'s executive health division, Fortis\'s corporate wellness vertical, or Max Healthcare\'s premium wards.',
      uniqueDescription: 'India\'s premium corporate hospital segment — serving the executive and upper-middle-class population in metros and major Tier 1 cities — operates a certificate format tier above standard hospital documentation. Hospitals in this segment, including Apollo Hospitals\' corporate suites, Fortis Premium Care, Max Healthcare\'s executive health division, and Manipal\'s corporate wellness programs, issue certificates on gold-emblem letterheads with caduceus or medical cross imagery that signals institutional prestige. The caduceus — the winged staff with serpents — is the most universally recognised symbol of medical authority, and its inclusion on a certificate letterhead communicates premium institutional positioning. Corporate HR departments at Fortune 500 companies operating in India — particularly in Bengaluru\'s tech corridor, Hyderabad\'s HITEC City, Pune\'s Hinjewadi, and Noida\'s expressway belt — are accustomed to this premium format from their executive health insurance packages. The aditya-multi template replicates this visual language: the gold caduceus header, multispecialty department listing with consultant names, and a countersignature field that reflects the peer-review process used by premium hospitals for senior patient documentation.',
      formatDetails: 'The gold caduceus emblem anchors the left side of the letterhead, with the hospital name in a premium typography style to the right. The department listing below the header includes space for multiple consultant names. The patient details section includes a corporate employer field. The bottom of the certificate features both the treating doctor\'s credentials and a countersignature field for the department head — a two-signature structure that adds institutional authority.',
      userGuide: 'The corporate employer name field is unique to this template — populate it with the patient\'s employing organisation for submissions to corporate insurance TPAs. The countersignature field represents the HOD or senior consultant — enter a different doctor\'s name with higher seniority designation. ICD-10 code usage in the diagnosis field is particularly important for this format, as insurance TPAs processing premium corporate policies specifically look for coded diagnoses.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 10. dpk-hospital — Dosage schedule table
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'dpk-hospital',
    name: 'D.P.K Hospital',
    description: 'With dosage schedule table and doctor footer',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-10_1774458715238.webp',
    templateContent: {
      clinicType: 'General medicine hospital with prescription-certificate combination format',
      indiaRegion: 'Pan-India, particularly common in UP, Bihar, West Bengal, Jharkhand',
      primaryUseCase: 'Combined sick leave and prescription record — single document for both employer and pharmacy',
      fieldsIncluded: [
        'Hospital letterhead with doctor footer details',
        'Patient name, age, and address',
        'Diagnosis and clinical findings section',
        'Dosage schedule table (medicine name, frequency, duration)',
        'Recommended rest period',
        'Doctor\'s footer signature block with credentials',
        'Clinic stamp area',
      ],
      bestFor: [
        'Situations where a combined prescription and rest certificate is appropriate',
        'Pharmacies and patients who need a single document showing both diagnosis and medication',
        'Software testing for clinical documentation systems that combine prescription and certificate workflows',
        'Demonstrating the combined prescription-certificate format common in UP, Bihar, and West Bengal',
      ],
      notIdealFor: [
        'Pure sick leave submissions where the medication table creates confusion for HR reviewers',
        'Insurance-only submissions where the combined format is not accepted in place of a standalone certificate',
      ],
      vsOtherTemplates: 'The dpk-hospital template is unique in including a dosage schedule table — a prescription element — within the certificate format. Most templates in this generator are pure certificate formats; dpk-hospital represents the real-world convention among many North and East Indian hospital OPDs where the treating doctor issues a single document serving as both the prescription and the rest certificate. This combined format is particularly common in Uttar Pradesh, Bihar, West Bengal, and Jharkhand.',
      uniqueDescription: 'A distinctive practice in North and East Indian hospital OPDs — particularly across Uttar Pradesh, Bihar, Jharkhand, and West Bengal — is the combination of the treatment prescription with the medical certificate into a single document. The treating doctor writes the diagnosis, recommended medication with dosage schedule, and the rest period recommendation on a single letterhead, signing once at the bottom. This combined format serves dual practical purposes: the patient can submit the document to their employer as a sick leave certificate while simultaneously presenting it to the pharmacist for medication dispensing. This practice evolved from the logistical reality of rural and semi-urban medical encounters where patients often travel significant distances to see a doctor and need to complete both administrative and pharmaceutical requirements in a single visit. The dpk-hospital template replicates this combined format with a structured dosage table integrated above the rest period section. For UI/UX designers and software developers building clinical documentation systems, this template demonstrates the technical requirement of accommodating both certificate and prescription data structures within a single patient document — a common requirement in primary care health IT systems serving the North and East Indian market.',
      formatDetails: 'The dpk-hospital template features a standard hospital letterhead at the top, followed by the patient details and diagnosis. A structured dosage table occupies the central section of the document — with columns for medicine name, dosage, frequency, and duration. Below the table, the rest period and instructions appear, followed by the doctor\'s footer block at the bottom, which includes the doctor\'s name, degrees, and registration details in a standardised footer format.',
      userGuide: 'The dosage table is the distinctive element of this template — populate it with medication names in generic terms rather than brand names for a more authentic clinical appearance. Use abbreviations standard in Indian clinical practice: TDS (three times daily), BD (twice daily), HS (at bedtime), AC (before meals), PC (after meals). The rest period should appear below the dosage table as a clearly separated section.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 11. mishra-dental — Dental clinic
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'mishra-dental',
    name: 'Mishra Dental Clinic',
    description: 'Dental clinic prescription with meal instructions',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-11_1774458722001.webp',
    templateContent: {
      clinicType: 'BDS/MDS registered dental clinic',
      indiaRegion: 'Pan-India',
      primaryUseCase: 'Dental surgery leave, wisdom tooth extraction recovery, orthodontic procedure documentation',
      fieldsIncluded: [
        'Dental clinic letterhead with BDS/MDS credentials',
        'Patient name and dental registration details',
        'Procedure performed (extraction, RCT, surgery)',
        'Post-procedure dietary and activity instructions',
        'Recommended rest period (typically 1–3 days)',
        'Dental Council of India (DCI) registration number',
        'Clinic stamp with dental speciality marking',
      ],
      bestFor: [
        'Dental surgery sick leave — wisdom tooth extraction, apicoectomy, dental implant placement',
        'Root canal treatment (RCT) recovery documentation for 1–2 day leave',
        'Orthodontic complication leave (bracket removal, wire complications)',
        'UI testing for dental practice management software',
      ],
      notIdealFor: [
        'Any non-dental medical condition — a dentist cannot legally certify fever, fractures, or systemic illness',
        'Leaves exceeding 3 days for dental reasons without documented surgical admission',
      ],
      vsOtherTemplates: 'The mishra-dental template is the only dental-specific format in this generator. It differs from all other templates in the practitioner type it represents: a BDS or MDS holder registered with the Dental Council of India, rather than an MBBS doctor registered with the NMC or a State Medical Council. This distinction defines its permitted scope — dental conditions only — and its most appropriate use cases. Unlike ishnavi-clinic or formal-cert, which represent general medicine practitioners, mishra-dental is strictly specialty-scoped.',
      uniqueDescription: 'Dental certificates in India are issued by practitioners registered with the Dental Council of India (DCI) under the Dentists Act 1948. BDS (Bachelor of Dental Surgery) holders are authorised to treat all conditions within the oral cavity and to issue medical certificates for dental-related incapacity — a scope that covers dental extractions, oral surgical procedures, root canal treatments, and orthodontic complications. MDS (Master of Dental Surgery) specialists have additional authority in their specific dental specialties. A critical limitation applies: dental practitioners cannot legally certify medical conditions outside their scope of practice. A dentist cannot issue a certificate for fever, a leg fracture, or a cardiac condition. Most employers accept dental certificates for 1 to 3 days of sick leave following documented dental procedures. Leave exceeding 3 days for dental reasons — which typically indicates a surgical admission, such as impacted wisdom tooth removal requiring general anaesthesia, or dental implant surgery — should be accompanied by hospital admission records. The post-procedure dietary instructions included in the mishra-dental template reflect the real-world practice of dental clinics providing combined procedural documentation and recovery instructions, which patients submit both to their employer and as part of their post-procedure care record.',
      formatDetails: 'The mishra-dental template features a dental clinic letterhead with the BDS/MDS credentials prominently displayed. A post-procedure instructions section — covering dietary restrictions, oral hygiene guidance, and pain management — is integrated into the format below the clinical details, reflecting the actual practice of dental clinics that issue combined procedure summary and recovery instruction documents.',
      userGuide: 'The procedure performed field is specific to dental documentation — enter the exact procedure (e.g., "Surgical Extraction of Impacted Mandibular Third Molar" or "Root Canal Treatment — Upper Right First Molar"). The DCI registration number is the unique identifier for dental practitioners and must be entered accurately. The dietary instructions section should reference standard post-procedure guidance: soft diet for 3 days, avoid hot liquids, no smoking.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 12. health-first — Two-doctor clinic
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'health-first',
    name: 'Health First Clinic',
    description: 'Two-doctor clinic with specialty sidebar',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-17_1774458755469.webp',
    templateContent: {
      clinicType: 'Sports medicine clinic / two-specialist private practice',
      indiaRegion: 'Metro suburbs and Tier 1 cities — Bengaluru, Pune, Hyderabad, Delhi NCR',
      primaryUseCase: 'Sports injury rest, physical fitness exemption, two-doctor practice documentation',
      fieldsIncluded: [
        'Two-doctor letterhead with specialties listed',
        'Specialty sidebar showing clinical services offered',
        'Patient name, sport/occupation field',
        'Sports injury or physical condition diagnosis',
        'Activity restriction specification (no running, no lifting)',
        'Return-to-sport clearance section',
        'Both doctors\' registration numbers',
      ],
      bestFor: [
        'Sports injury sick leave for corporate employees participating in company sport events',
        'Physical fitness exemption certificates for school and college sports days or physical training',
        'Occupational health documentation for physically demanding roles',
        'Testing healthcare apps for fitness and sports medicine verticals',
      ],
      notIdealFor: [
        'Standard illness sick leave where the sports medicine context is irrelevant',
        'Government school submissions where the two-doctor format adds unnecessary complexity',
      ],
      vsOtherTemplates: 'The health-first template is unique in featuring a two-doctor letterhead — reflecting the partnership clinic model common in urban sports medicine and physiotherapy practices. Unlike ishnavi-clinic or astha-clinic, which represent single-doctor practices, health-first communicates a multi-practitioner specialist environment. The specialty sidebar listing clinical services is a distinctive formatting element found in real-world partnership clinic prescription pads across Bengaluru, Pune, and Hyderabad\'s urban professional healthcare market.',
      uniqueDescription: 'Partnership medical practices — two or three doctors sharing a registered clinic address and operating under a joint name — are increasingly common in India\'s metro suburban healthcare landscape. These practices combine specialties to offer a broader clinical scope: general medicine paired with orthopaedics, or internal medicine with sports medicine, for example. The prescription pad format for partnership practices features both doctors\' names, qualifications, and registration numbers in the letterhead, with a specialty sidebar listing their combined clinical services. This format has become particularly common in Bengaluru\'s Koramangala and Indiranagar, Pune\'s Baner and Aundh, and Hyderabad\'s Kondapur and Gachibowli — areas with high concentrations of fitness-conscious tech and corporate professionals who specifically seek out sports medicine and musculoskeletal specialists for work-related physical conditions. The activity restriction field — specifying what the patient cannot do rather than simply recommending rest — reflects the sports medicine and occupational health convention of defining functional limitations precisely. This level of specificity is increasingly required by corporate HR departments for physical condition leaves.',
      formatDetails: 'The health-first template features two doctor name blocks side by side in the letterhead, with a specialty sidebar on the left margin listing clinical services. This sidebar format is a distinctive partnership clinic convention not seen in solo practitioner templates. The patient details section includes an occupation or sport field, and the rest period notation includes an activity restriction specification.',
      userGuide: 'Populate both doctor name blocks with distinct specialists — the combination should be logical (e.g., General Medicine + Orthopaedics, or Internal Medicine + Sports Medicine). The specialty sidebar should list 4–6 clinical services matching the doctors\' qualifications. The activity restriction field is the key clinical element — be specific: "No weight-bearing on right leg," "No overhead lifting," "No running or jumping activities."',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 13. narayan-care — Structured with dosage table (SECOND PRIORITY: 7 clicks)
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'narayan-care',
    name: 'Narayan Care Clinic',
    description: 'Structured prescription with medicine dosage table',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-18_1774458762265.webp',
    templateContent: {
      clinicType: 'Urban multispecialty polyclinic',
      indiaRegion: 'Delhi NCR, Ahmedabad, Pune, Jaipur, Surat',
      primaryUseCase: 'Multi-department referrals, specialist sick leave, complex condition documentation',
      fieldsIncluded: [
        'Polyclinic letterhead with multiple department listing',
        'Structured prescription table integrated with certificate',
        'Referring department and treating specialist fields',
        'Patient name, age, and chronic condition history reference',
        'Multi-line diagnosis with clinical context',
        'Rest period with functional limitations',
        'Structured medicine dosage table',
        'Doctor\'s credentials with specialty designation',
      ],
      bestFor: [
        'Complex chronic condition sick leave — diabetes complications, hypertension, orthopaedic conditions',
        'Multi-department specialist referral documentation',
        'Insurance claims for specialist-treated conditions',
        'Urban corporate employee sick leave where a polyclinic is the point of care',
      ],
      notIdealFor: [
        'Simple single-day sick leave where the structured polyclinic format is disproportionate',
        'Rural or semi-urban submissions where the polyclinic format is unfamiliar',
      ],
      vsOtherTemplates: 'The narayan-care template occupies the middle ground between the neighbourhood clinic scale of ishnavi-clinic and the institutional scale of formal-cert. It represents the urban polyclinic — a multi-doctor, multi-department practice that is neither a small neighbourhood clinic nor a full hospital. The structured dosage table and multi-department letterhead are unique to this template. Unlike dpk-hospital, which uses a combined prescription-certificate format from a single-doctor perspective, narayan-care represents a more structured polyclinic that explicitly lists multiple departments, suggesting a higher level of specialist involvement.',
      uniqueDescription: 'The urban polyclinic — a multi-specialty outpatient practice with 4 to 12 doctors across departments — is the dominant private healthcare format in India\'s metro suburbs and major Tier 2 cities. In Delhi NCR\'s satellite cities (Noida, Gurgaon, Faridabad), Pune\'s Pimpri-Chinchwad industrial belt, Ahmedabad\'s satellite townships, and Surat\'s commercial zones, polyclinics serve as the go-to point of care for middle-class families who need specialist access without the complexity and cost of a major hospital. Polyclinic certificates carry particular authority for complex chronic condition documentation. When a patient with Type 2 diabetes, controlled hypertension, or chronic orthopaedic pain requires sick leave, a polyclinic certificate that references the treating specialist\'s department — Internal Medicine, Cardiology, Orthopaedics — carries more clinical specificity than a neighbourhood GP certificate. Insurance companies processing reimbursement claims for chronic condition-related hospitalisation or specialist consultation specifically look for this specialist context on certificates. The narayan-care template captures the polyclinic certificate convention with its multi-department letterhead and structured clinical documentation format, making it the most appropriate choice for complex condition sick leave that requires specialist-level documentation without requiring a full hospital admission record.',
      formatDetails: 'The narayan-care template features a polyclinic letterhead listing multiple department specialties in a structured header section. The clinical documentation is divided into clearly labelled sections: patient details, diagnosis and clinical context, medication table, and rest period with restrictions. This sectioned structure mirrors the electronic medical record (EMR) format increasingly used by polyclinics across Delhi NCR and Pune.',
      userGuide: 'The referring and treating specialist fields are unique to this template — populate them with distinct department names if the patient was referred between departments. The chronic condition history field should reference the patient\'s baseline condition (e.g., "Known case of Type 2 DM on Metformin 500mg BD") to provide clinical context for the sick leave. The structured medicine table should list current medications alongside any changes made during the visit.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 14. sanjivini-multi — Comprehensive multispeciality
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'sanjivini-multi',
    name: 'Sanjivini Multi Speciality',
    description: 'Comprehensive multi-speciality structured format',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-19_1774458769410.webp',
    templateContent: {
      clinicType: 'Ayurvedic multispeciality hospital / AYUSH integrated wellness centre',
      indiaRegion: 'Madhya Pradesh, Rajasthan, Gujarat, Maharashtra — Ayurveda-strong states',
      primaryUseCase: 'Ayurvedic treatment sick leave, AYUSH wellness programme documentation, Panchakarma recovery',
      fieldsIncluded: [
        'Ayurvedic multispeciality hospital letterhead',
        'BAMS / MD Ayurveda qualification field',
        'CCIM (Central Council of Indian Medicine) registration number',
        'Ayurvedic diagnosis (in both Sanskrit/classical terminology and plain English)',
        'Panchakarma or treatment protocol field',
        'Recommended rest and dietary restriction period',
        'Ayurvedic physician stamp',
      ],
      bestFor: [
        'Panchakarma treatment rest documentation (Vamana, Virechana, Basti procedures typically require 3–21 days rest)',
        'Ayurvedic treatment sick leave in states with strong AYUSH acceptance policies',
        'AYUSH wellness programme participation documentation for corporate wellness initiatives',
        'Software testing for AYUSH hospital management systems',
      ],
      notIdealFor: [
        'Submissions to large MNC employers that specifically require MBBS certification',
        'Insurance claims from companies that do not have AYUSH reimbursement provisions',
      ],
      vsOtherTemplates: 'The sanjivini-multi template represents Ayurvedic multispeciality practice — distinct from pandey-homyo, which represents Homeopathy. Both are AYUSH systems, but they carry different clinical scopes, registration bodies (CCIM for Ayurveda, CCH for Homeopathy), and cultural contexts. Sanjivini-multi is the more institutionally structured of the two, representing a multi-practitioner Ayurvedic hospital rather than a single-doctor dawakhana. Its acceptance profile is strongest in Ayurveda-dominant states — Gujarat, Madhya Pradesh, and Rajasthan.',
      uniqueDescription: 'India\'s Ayurvedic healthcare system is one of the world\'s largest traditional medicine infrastructures, with over 250,000 registered BAMS (Bachelor of Ayurvedic Medicine and Surgery) practitioners and a network of government and private Ayurvedic hospitals across every state. In Ayurveda-strong states — Gujarat, Madhya Pradesh, Rajasthan, and parts of Maharashtra and Karnataka — Ayurvedic multispeciality hospitals operate as significant providers of planned therapeutic treatments, particularly Panchakarma (a five-therapy purification protocol). Panchakarma procedures — Vamana (emesis), Virechana (purgation), Basti (enema therapy), Nasya (nasal administration), and Raktamokshana (bloodletting) — require strict daily treatment schedules and post-procedure rest periods of 3 to 21 days, during which patients must follow specific dietary restrictions and avoid physical exertion. Ayurvedic practitioners registered with the Central Council of Indian Medicine (CCIM) and their state Ayurvedic councils are legally authorised to issue medical certificates for conditions within their clinical scope. State governments in Madhya Pradesh, Gujarat, and Rajasthan have policies explicitly recognising Ayurvedic certificates for state government employee sick leave. The sanjivini-multi template reflects the institutional Ayurvedic hospital format: multi-department listing, BAMS/MD Ayurveda credentials, CCIM registration, and Ayurvedic diagnosis terminology in both classical and plain English.',
      formatDetails: 'The sanjivini-multi template uses a multispeciality header listing Ayurvedic departments (Panchakarma, Kayachikitsa, Shalya, etc.). The diagnosis field accommodates both Ayurvedic classical terminology and a plain English equivalent. The treatment protocol section allows specification of the Panchakarma procedure or herbal treatment plan. The dietary restriction section is a unique element reflecting Ayurvedic post-treatment protocols.',
      userGuide: 'The BAMS or MD Ayurveda qualification should appear in the credentials field alongside the CCIM registration number. The Ayurvedic diagnosis should include the classical Sanskrit term followed by its plain English equivalent — e.g., "Amavata (Rheumatoid Arthritis pattern)" or "Jvara (Pyrexia of undetermined origin)". For Panchakarma documentation, specify the procedure name and duration. The dietary restriction field should reference the post-procedure Samsarjana Krama (dietary rehabilitation protocol) if applicable.',
    },
  },

  // ─────────────────────────────────────────────────────────────────────────
  // 15. astha-clinic — Clean minimal
  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 'astha-clinic',
    name: 'Astha Clinic',
    description: 'Clean minimal clinic prescription format',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-20_1774458776462.webp',
    templateContent: {
      clinicType: 'Ophthalmology / eye clinic specialist format',
      indiaRegion: 'Pan-India, particularly LVPEI-affiliated states — Andhra Pradesh, Telangana, Odisha',
      primaryUseCase: 'Post-eye-surgery recovery documentation, cataract surgery leave, retinal treatment rest',
      fieldsIncluded: [
        'Clean minimal clinic letterhead with eye/ophthalmology marking',
        'MBBS (OPH) or MS Ophthalmology qualification field',
        'State Medical Council registration number',
        'Eye condition diagnosis (using ICD-10 H-category codes)',
        'Activity restriction specification (no screen time, no bright light)',
        'Post-procedure visual acuity restriction',
        'Recommended rest period and follow-up date',
        'Ophthalmologist\'s stamp',
      ],
      bestFor: [
        'Post-cataract surgery leave (standard rest period: 7–14 days)',
        'Retinal detachment or vitreo-retinal surgery recovery documentation',
        'Screen-time restriction certificates for IT professionals with eye conditions',
        'LASIK / refractive surgery post-procedure work restriction documentation',
      ],
      notIdealFor: [
        'Non-ophthalmological conditions — the eye clinic format creates context mismatch',
        'Submissions requiring a general physician\'s broad clinical scope',
      ],
      vsOtherTemplates: 'The astha-clinic template is the clean, minimal-format representative in the specialist clinic category. Unlike health-first (two-doctor partnership) or mishra-dental (procedure-heavy format), astha-clinic prioritises visual clarity and minimal structure — matching the prescription pad conventions of ophthalmology practices, which typically use the simplest possible document format to communicate a straightforward activity restriction (e.g., "no screen use for 7 days post-LASIK"). Its clean format also makes it the most versatile template for software testing scenarios requiring a simple, uncluttered document structure.',
      uniqueDescription: 'Ophthalmology is one of India\'s most active surgical specialties, with over 6 million cataract surgeries performed annually — the highest volume in any country globally. Cataract surgery, corneal transplants, retinal surgeries, glaucoma procedures, and refractive corrections (LASIK, SMILE) all require documented post-operative rest periods that are submitted by patients to their employers and educational institutions. Ophthalmology certificates differ from general medicine certificates in one specific and clinically important way: the activity restriction is often more precisely defined than a simple rest period. Post-cataract surgery patients cannot engage in heavy physical activity, must avoid swimming, and have specific restrictions on bending and lifting. Post-LASIK patients cannot use computer screens for 24–48 hours, cannot swim for 4 weeks, and cannot play contact sports for 3 months. IT professionals in Bengaluru, Hyderabad, and Pune — who typically work 8+ hour screen-intensive days — frequently require certificates from their ophthalmologists specifying the exact screen-time restriction, as a general "rest for 3 days" certificate is not sufficient for their HR departments to authorise the necessary accommodations (reduced screen time, anti-glare equipment, work-from-home arrangements). The astha-clinic\'s clean, minimal format matches the straightforward documentation conventions of ophthalmology practices, which prioritise clear activity restriction communication over complex clinical narrative.',
      formatDetails: 'The astha-clinic template uses a minimal, clean letterhead with a small ophthalmology marker. The patient details section is compact. The key clinical section focuses on activity restrictions rather than a detailed diagnosis narrative — screen time limits, physical activity restrictions, and post-procedure visual acuity. A follow-up date field at the bottom is a distinctive ophthalmology convention for tracking post-operative recovery.',
      userGuide: 'The MS Ophthalmology or MBBS (OPH) qualification should appear in the credentials field. ICD-10 codes for eye conditions use the H-category (H25–H28 for cataract, H33 for retinal detachment, H35 for retinal disorders). The activity restriction section is the key clinical element — specify screen time limits precisely: "No VDT use for 48 hours," "Avoid bright light exposure for 7 days." The follow-up date field should be populated with a realistic post-operative review date.',
    },
  },
];
