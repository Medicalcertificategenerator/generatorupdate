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

export interface Template {
  id: string;
  name: string;
  description: string;
  category: string;
  previewImage: string;
  useCase: string;
  seoTitle: string;
  seoDescription: string;
  h1Heading: string;
  content: {
    what: string;
    when: string;
    details: string;
  };
  faqs: { q: string; a: string }[];
}

export const TEMPLATES: Template[] = [
  {
    id: 'formal-cert',
    name: 'City General Hospital',
    description: 'Classic formal medical certificate with bordered layout',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-john-smith_1774458646754.png',
    useCase: 'Sick Leave',
    seoTitle: 'Sick Leave Medical Certificate Generator (Free PDF Download)',
    seoDescription: 'Generate a medical certificate for sick leave in seconds. Choose Indian hospital format, edit details, download PDF instantly.',
    h1Heading: 'Generate Medical Certificate for Sick Leave (Free PDF Download)',
    content: {
      what: 'A sick leave medical certificate formally documents an employee or student\'s incapacity to attend work or classes due to illness.',
      when: 'It is generally required by HR departments or school administrations when absence exceeds 2-3 consecutive days.',
      details: 'Includes the patient name, specific rest period dates, clinical diagnosis, and the doctor\'s registration credentials with an official seal.'
    },
    faqs: [
      { q: 'Can a medical certificate cover previous days of sickness?', a: 'Yes, a doctor can issue a retrospective certificate if their clinical examination supports the illness timeline.' },
      { q: 'Is this template legally valid for work?', a: 'The certificates generated here are realistic samples for educational, staging, or UI testing purposes only.' },
      { q: 'Does it need a physical stamp?', a: 'In India, employers typically require a physical rubber stamp along with the doctor\'s signature.' }
    ]
  },
  {
    id: 'pandey-homyo',
    name: 'Pandey Homyo Dawakhana',
    description: 'Hindi prescription pad with disease category sidebar',
    category: 'Clinic',
    previewImage: '/images/Medical_Certificate_1774458640169.jpg',
    useCase: 'Homeopathic Treatment',
    seoTitle: 'Homeopathy Medical Certificate Generator (Free India PDF)',
    seoDescription: 'Generate an authentic homeopathy medical certificate in seconds. Download Hindi/English clinic format PDF instantly.',
    h1Heading: 'Generate Homeopathic Medical Certificate (Free PDF Download)',
    content: {
      what: 'A homeopathy medical certificate serves as official documentation from a registered BHMS practitioner regarding a patient\'s treatment.',
      when: 'It is submitted when an individual is undergoing alternative medical treatments that require long-term rest or specific lifestyle modifications.',
      details: 'Typically includes holistic diagnoses, the BHMS registration number of the doctor, and specific dietary or lifestyle restrictions.'
    },
    faqs: [
      { q: 'Are homeopathy certificates accepted for sick leave?', a: 'Yes, certificates issued by registered BHMS practitioners are legally valid for sick leave under Indian labor laws.' },
      { q: 'Should the diagnosis be in Hindi or English?', a: 'Many local clinics use a mix; however, English is standard for corporate HR submission.' },
      { q: 'What is a BHMS doctor?', a: 'A Bachelor of Homeopathic Medicine and Surgery (BHMS) doctor is a licensed practitioner of homeopathic medicine.' }
    ]
  },
  {
    id: 'janya-rx',
    name: 'Janya Hospital',
    description: 'Simple hospital letterhead Rx format',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-2_1774458655373.webp',
    useCase: 'Viral Fever',
    seoTitle: 'Viral Fever Medical Certificate Generator (Free PDF format)',
    seoDescription: 'Create a medical certificate for viral fever quickly. Professional hospital format, deeply customizable, and 100% free download.',
    h1Heading: 'Generate Medical Certificate for Viral Fever (Free PDF)',
    content: {
      what: 'A viral fever medical certificate verifies that a patient is suffering from elevated body temperatures caused by a viral infection.',
      when: 'Commonly needed for 3 to 5 days of absence during the flu season when fever makes commuting and working impossible.',
      details: 'States the acute symptoms (fever, body ache), the recommended isolation or rest period, and clearance dates.'
    },
    faqs: [
      { q: 'How many days of rest is typical for viral fever?', a: 'Generally, doctors recommend 3 to 5 days depending on the severity of the fever and associated weakness.' },
      { q: 'Does the certificate need my exact temperature?', a: 'No, stating "Acute Viral Pyrexia" or "High Grade Fever" is usually sufficient for employers.' },
      { q: 'Can I use this generator to see what it looks like?', a: 'Yes, this tool provides a highly realistic preview of a standard Indian hospital medical certificate.' }
    ]
  },
  {
    id: 'pg-compact',
    name: 'P.G. Multispeciality',
    description: 'Compact bordered rest certificate format',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-3_1774458661886.webp',
    useCase: 'Bed Rest',
    seoTitle: 'Bed Rest Medical Certificate Generator (India PDF Download)',
    seoDescription: 'Need a certificate for bed rest? Generate an authentic-looking Indian medical document in seconds for free.',
    h1Heading: 'Generate Medical Certificate for Bed Rest (Free PDF)',
    content: {
      what: 'This certificate strictly mandates that the patient requires absolute or partial bed rest due to physical trauma, severe illness, or surgery.',
      when: 'Required by employers or insurance agencies when an employee is physically unable to sit, stand, or commute.',
      details: 'Clearly defines the duration of rest, specifies restrictions (e.g., "Non-weight bearing"), and clearance requirements.'
    },
    faqs: [
      { q: 'What does "absolute bed rest" mean?', a: 'It means the doctor mandates that the patient must not leave the bed except for essential functions, usually due to back injury or pregnancy complications.' },
      { q: 'How long can bed rest be granted?', a: 'Bed rest can span from a few days to several months, depending entirely on the clinical diagnosis.' },
      { q: 'Is a multispeciality hospital format better for this?', a: 'Yes, severe conditions typically carry more weight when documented by a specialist or multispeciality clinic.' }
    ]
  },
  {
    id: 'ishnavi-clinic',
    name: 'Ishnavi Clinic',
    description: 'Clinic prescription with timing and doctor details',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-4-new_1774458672933.webp',
    useCase: 'General Illness',
    seoTitle: 'General Illness Medical Certificate Generator (Free PDF)',
    seoDescription: 'Generate a general illness clinic medical certificate instantly. Authentic Indian prescription format. 100% free.',
    h1Heading: 'Generate Medical Certificate for General Illness (Free PDF)',
    content: {
      what: 'A general illness medical certificate covers non-specific ailments like food poisoning, fatigue, or common colds.',
      when: 'Used to justify brief periods of absence (1-2 days) where specialized treatment wasn\'t required but the patient was unfit to work.',
      details: 'Features simple clinical findings, a short rest mandate, and the clinic’s operational details.'
    },
    faqs: [
      { q: 'Do I need a certificate for a 1-day absence?', a: 'It depends on your company HR policy. Many only require it for 3+ days, but some strict policies demand it for a single day.' },
      { q: 'What is a general illness diagnosis?', a: 'Condition like "Acute Gastroenteritis" or "Upper Respiratory Tract Infection" are common general illnesses.' },
      { q: 'Is this template editable?', a: 'Yes, you can edit the patient info, the doctor details, and the diagnosis using the form.' }
    ]
  },
  {
    id: 'muskan-maternity',
    name: 'Muskan Maternity Hospital',
    description: 'Maternity and children hospital with pink branding',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-5_1774458679636.webp',
    useCase: 'Pregnancy Leave',
    seoTitle: 'Pregnancy Medical Certificate Generator (Maternity Leave PDF)',
    seoDescription: 'Generate a pregnancy and maternity leave medical certificate online. Authentic hospital format, free download.',
    h1Heading: 'Generate Pregnancy & Maternity Medical Certificate (Free PDF)',
    content: {
      what: 'A pregnancy medical certificate documents maternal health conditions, estimated delivery dates, and rest recommendations during gestation.',
      when: 'Required when taking statutory maternity leave under the Maternity Benefit Act or for requesting workplace accommodations.',
      details: 'Includes the obstetrician’s details, gestational age, expected due date, and physical limitations if complications are present.'
    },
    faqs: [
      { q: 'Can this certificate be used for maternity benefits?', a: 'A real certificate issued by a registered obstetrician is required to claim statutory maternity benefits.' },
      { q: 'What is the standard maternity leave duration in India?', a: 'Under the Maternity Benefit Act, women are entitled to 26 weeks of paid maternity leave for their first two children.' },
      { q: 'Who signs a pregnancy certificate?', a: 'An OB/GYN (Obstetrician and Gynecologist) must sign and stamp the medical document.' }
    ]
  },
  {
    id: 'palak-maternity',
    name: 'Palak Maternity Hospital',
    description: 'Doctor-branded prescription pad with specialist details',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-6_1774458685682.webp',
    useCase: 'Maternity Extension',
    seoTitle: 'Maternity Leave Extension Medical Certificate Generator',
    seoDescription: 'Need a medical certificate placeholder for maternity extension? Generate an authentic Indian clinic format PDF instantly.',
    h1Heading: 'Generate Maternity Extension Medical Certificate (Free PDF)',
    content: {
      what: 'A maternity extension certificate is issued when a mother requires additional recovery time post-delivery due to complications.',
      when: 'Required by HR when the standard 26-week maternity leave period ends but the employee is not medically fit to return to work.',
      details: 'Outlines the specific postnatal complication (e.g., surgical recovery, infection) and the exact duration of extended rest.'
    },
    faqs: [
      { q: 'Can maternity leave be legally extended?', a: 'Yes, the Maternity Benefit Act allows up to 1 month of additional leave for illness arising out of pregnancy or delivery.' },
      { q: 'Do companies verify these certificates?', a: 'Yes, corporate HR departments routinely verify certificates involving extended absences and benefits.' },
      { q: 'Is it free to download this sample template?', a: 'Yes, generation and downloading of the PNG/PDF sample is entirely free.' }
    ]
  },
  {
    id: 'ank-multi',
    name: 'A.N.K Multispeciality',
    description: 'Red RX seal multispeciality prescription',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-7_1774458692266.webp',
    useCase: 'Leg Fracture',
    seoTitle: 'Leg Fracture Medical Certificate Generator (Free PDF Download)',
    seoDescription: 'Generate a leg fracture medical certificate instantly. Authentic orthopaedic format. Editable details and free PDF.',
    h1Heading: 'Generate Medical Certificate for Leg Fracture (Free PDF)',
    content: {
      what: 'A leg fracture medical certificate is issued by an orthopedic surgeon documenting bone breakage and the mandated recovery timeline.',
      when: 'Essential for extended sick leave, insurance health claims, or acquiring physical disability accommodations (like ground floor seating).',
      details: 'Identifies the specific bone fractured (e.g., Tibia, Femur), the cast or surgery procedure, and non-weight-bearing duration.'
    },
    faqs: [
      { q: 'How long of a rest period does a leg fracture require?', a: 'Typically, a lower limb fracture requires anywhere from 4 to 12 weeks of rest depending on severity.' },
      { q: 'Does the certificate include medical imagery?', a: 'The certificate references X-Ray reports, but the images themselves are attached separately in real scenarios.' },
      { q: 'Who should issue this certificate?', a: 'An orthopedic surgeon (MS Ortho) provides the most authoritative documentation for bone fractures.' }
    ]
  },
  {
    id: 'aditya-multi',
    name: 'Aditya Multispeciality',
    description: 'Gold header caduceus hospital prescription',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-9_1774458705752.webp',
    useCase: 'Surgery Recovery',
    seoTitle: 'Surgery Recovery Medical Certificate Generator (Free PDF)',
    seoDescription: 'Generate a post-surgery recovery medical certificate. Multispeciality hospital format. Free, dynamic, and realistic.',
    h1Heading: 'Generate Medical Certificate for Surgery Recovery (Free PDF)',
    content: {
      what: 'This document certifies that a patient has undergone a surgical procedure and requires an extensive period to safely recuperate.',
      when: 'Filing for long-term health leave or processing reimbursements and claims from medical insurance companies.',
      details: 'Mentions the surgical date, the procedure type, hospital admission/discharge dates, and specific post-op care requirements.'
    },
    faqs: [
      { q: 'Does the certificate show admission dates?', a: 'Yes, post-surgery certificates almost always log the exact admission and discharge dates.' },
      { q: 'Is this required for insurance?', a: 'Yes, medical insurance providers mandate discharge summaries and stamped recovery certificates for claims.' },
      { q: 'Can I add my own hospital name?', a: 'Yes, this generator allows you to completely customize the hospital and doctor details.' }
    ]
  },
  {
    id: 'dpk-hospital',
    name: 'D.P.K Hospital',
    description: 'With dosage schedule table and doctor footer',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-10_1774458715238.webp',
    useCase: 'Typhoid Fever',
    seoTitle: 'Typhoid Medical Certificate Generator (India PDF Download)',
    seoDescription: 'Need a medical certificate for Typhoid? Generate a realistic clinic sample instantly. Fully editable to match real Indian templates.',
    h1Heading: 'Generate Medical Certificate for Typhoid Fever (Free PDF)',
    content: {
      what: 'A typhoid medical certificate verifies that a patient is suffering from Enteric Fever (Salmonella infection) requiring extended antibiotics.',
      when: 'Used for taking lengthy absences from work or school, as typhoid recovery severely limits physical stamina.',
      details: 'Includes the positive Widal/TyphiDot findings, severe weakness notation, and a mandated rest period of 14 to 21 days.'
    },
    faqs: [
      { q: 'How long is the rest period for typhoid?', a: 'Rest periods normally span 2 to 3 weeks to prevent relapse and ensure complete antibiotic courses.' },
      { q: 'Is a fitness certificate needed after typhoid?', a: 'If you work in food handling or hospitality, you must provide a secondary fitness certificate proving you are no longer contagious.' },
      { q: 'Can I customize the rest days?', a: 'Yes, the recommended rest days field is fully editable in the generator.' }
    ]
  },
  {
    id: 'mishra-dental',
    name: 'Mishra Dental Clinic',
    description: 'Dental clinic prescription with meal instructions',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-11_1774458722001.webp',
    useCase: 'Dental Procedure',
    seoTitle: 'Dental Procedure Medical Certificate Generator (Free PDF)',
    seoDescription: 'Generate a dental medical certificate for tooth extraction or surgery. Realistic Indian clinic template, instant download.',
    h1Heading: 'Generate Medical Certificate for Dental Procedure (Free PDF)',
    content: {
      what: 'Documents rest required following intensive oral surgeries, such as wisdom tooth extractions, root canals, or jaw treatments.',
      when: 'When severe dental pain or post-extraction swelling renders a person unable to speak or concentrate properly at work.',
      details: 'Highlights the specific dental procedure performed, prescribed painkillers, and rest needed (usually 1-3 days).'
    },
    faqs: [
      { q: 'Will HR accept a dental certificate?', a: 'Yes, certificates signed by a registered BDS or MDS dentist are legally acknowledged for sick leave.' },
      { q: 'How long is sick leave for a tooth extraction?', a: 'Normally, doctors recommend 1 to 2 days of rest following a surgical tooth extraction.' },
      { q: 'Can I change the ink color to match a real pen?', a: 'Yes, the generator supports blue, light blue, and black ink colors to look authentic.' }
    ]
  },
  {
    id: 'health-first',
    name: 'Health First Clinic',
    description: 'Two-doctor clinic with specialty sidebar',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-17_1774458755469.webp',
    useCase: 'Fitness Clearance',
    seoTitle: 'Fitness Medical Certificate Generator (Free Clearance PDF)',
    seoDescription: 'Create a fitness clearance medical certificate. Indian clinic formatting to prove return-to-work fitness. 100% free.',
    h1Heading: 'Generate Fitness Clearance Medical Certificate (Free PDF)',
    content: {
      what: 'A fitness certificate is the opposite of a sick leave letter—it declares an employee is 100% medically fit to resume their duties.',
      when: 'Requested by employers before you rejoin work following a prolonged or severe sickness or surgery.',
      details: 'Contains a clear deceleration from the physician stating "Fit to join duty" along with recent vital checks.'
    },
    faqs: [
      { q: 'What is a fitness to work certificate?', a: 'It clears an employee to return to the workplace by confirming they are recovered and not contagious.' },
      { q: 'Do I need both a sick leave and fitness certificate?', a: 'Usually, yes. The first justifies the absence while the second permits re-entry.' },
      { q: 'What does a fitness certificate look like?', a: 'It looks similar to a standard certificate but the diagnosis is replaced with a "Found medically fit" declaration.' }
    ]
  },
  {
    id: 'narayan-care',
    name: 'Narayan Care Clinic',
    description: 'Structured prescription with medicine dosage table',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-18_1774458762265.webp',
    useCase: 'Headache',
    seoTitle: 'Migraine & Headache Medical Certificate Generator (Free PDF)',
    seoDescription: 'Generate a medical certificate for severe headache or migraine. Authentic formatting, free PDF instantly download.',
    h1Heading: 'Generate Medical Certificate for Headache (Free PDF Download)',
    content: {
      what: 'Validates that a patient is suffering from an acute migraine attack, causing debilitating pain, light sensitivity, and nausea.',
      when: 'Required for 1-2 day short absences where screen time and bright office environments aggravate the medical condition.',
      details: 'Identifies the neurological condition (Migraine with aura, tension headaches) and restricts screen time.'
    },
    faqs: [
      { q: 'Is headache considered a valid reason for sick leave?', a: 'Absolutely, acute migraines and severe tension headaches are classified as debilitating conditions.' },
      { q: 'Can a general doctor issue a migraine certificate?', a: 'Yes, an MBBS practitioner can diagnose and certify migraines, though chronic cases may require a neurologist.' },
      { q: 'Are these certificates stored securely?', a: 'Yes, our generator handles all data locally within your browser to protect your privacy.' }
    ]
  },
  {
    id: 'sanjivini-multi',
    name: 'Sanjivini Multi Speciality',
    description: 'Comprehensive multi-speciality structured format',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-19_1774458769410.webp',
    useCase: 'Severe Back Pain',
    seoTitle: 'Back Pain Medical Certificate Generator (Free PDF Download)',
    seoDescription: 'Need a medical certificate for back pain? Generate an authentic Indian template online specifying lumbar issues. Free PDF.',
    h1Heading: 'Generate Medical Certificate for Back Pain (Free PDF)',
    content: {
      what: 'A back pain certificate outlines musculoskeletal problems like lumbar strain or slip disc that prevent a person from sitting or traveling.',
      when: 'Used to justify working from home (WFH) requests or short-term medical leaves due to ergonomic injuries.',
      details: 'Classifies the exact pain region (lower back, cervical), orthopedic rest conditions, and physical therapy referrals.'
    },
    faqs: [
      { q: 'Can I use this sample to request Work from Home?', a: 'Yes, reviewing this sample helps you understand how an orthopedic doctor drafts a WFH accommodation request.' },
      { q: 'How is back pain documented?', a: 'Doctors will use terms like "Acute Lumbar Sprain" or "Sciatica" along with strict bed rest instructions.' },
      { q: 'How do I download the certificate?', a: 'Simply fill out the form using our generator tool and click download PNG or PDF.' }
    ]
  },
  {
    id: 'astha-clinic',
    name: 'Astha Clinic',
    description: 'Clean minimal clinic prescription format',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-20_1774458776462.webp',
    useCase: 'Asthma',
    seoTitle: 'Asthma Medical Certificate Generator (Free PDF India)',
    seoDescription: 'Generate an asthma or respiratory medical certificate online. Customizable template, instant free PDF download.',
    h1Heading: 'Generate Medical Certificate for Asthma (Free PDF)',
    content: {
      what: 'This certificate verifies respiratory incapacitation resulting from severe asthma attacks, bronchiolitis, or allergic triggers.',
      when: 'Required when sudden respiratory illness prevents an employee or student from participating in regular activities or commuting.',
      details: 'Highlights the respiratory diagnosis, use of nebulization or inhalers, and recommends avoiding pollution or exertion.'
    },
    faqs: [
      { q: 'Is asthma a valid condition for medical condonation?', a: 'Yes, severe asthma attacks are medical emergencies that validate academic or workplace absence.' },
      { q: 'Who issues a respiratory certificate?', a: 'It can be issued by a general physician (MBBS) or a pulmonologist.' },
      { q: 'Are these generator templates free to use?', a: 'Yes, all 15+ templates provided on this platform are completely free for sample generation.' }
    ]
  }
];
