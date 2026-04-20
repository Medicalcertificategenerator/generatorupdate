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
}

export const TEMPLATES: Template[] = [
  {
    id: 'formal-cert',
    name: 'City General Hospital',
    description: 'Classic formal medical certificate with bordered layout',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-john-smith_1774458646754.png',
  },
  {
    id: 'pandey-homyo',
    name: 'Pandey Homyo Dawakhana',
    description: 'Hindi prescription pad with disease category sidebar',
    category: 'Clinic',
    previewImage: '/images/Medical_Certificate_1774458640169.jpg',
  },
  {
    id: 'janya-rx',
    name: 'Janya Hospital',
    description: 'Simple hospital letterhead Rx format',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-2_1774458655373.webp',
  },
  {
    id: 'pg-compact',
    name: 'P.G. Multispeciality',
    description: 'Compact bordered rest certificate format',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-3_1774458661886.webp',
  },
  {
    id: 'ishnavi-clinic',
    name: 'Ishnavi Clinic',
    description: 'Clinic prescription with timing and doctor details',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-4-new_1774458672933.webp',
  },
  {
    id: 'muskan-maternity',
    name: 'Muskan Maternity Hospital',
    description: 'Maternity and children hospital with pink branding',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-5_1774458679636.webp',
  },
  {
    id: 'palak-maternity',
    name: 'Palak Maternity Hospital',
    description: 'Doctor-branded prescription pad with specialist details',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-6_1774458685682.webp',
  },
  {
    id: 'ank-multi',
    name: 'A.N.K Multispeciality',
    description: 'Red RX seal multispeciality prescription',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-7_1774458692266.webp',
  },
  {
    id: 'aditya-multi',
    name: 'Aditya Multispeciality',
    description: 'Gold header caduceus hospital prescription',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-9_1774458705752.webp',
  },
  {
    id: 'dpk-hospital',
    name: 'D.P.K Hospital',
    description: 'With dosage schedule table and doctor footer',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-10_1774458715238.webp',
  },
  {
    id: 'mishra-dental',
    name: 'Mishra Dental Clinic',
    description: 'Dental clinic prescription with meal instructions',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-11_1774458722001.webp',
  },
  {
    id: 'health-first',
    name: 'Health First Clinic',
    description: 'Two-doctor clinic with specialty sidebar',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-17_1774458755469.webp',
  },
  {
    id: 'narayan-care',
    name: 'Narayan Care Clinic',
    description: 'Structured prescription with medicine dosage table',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-18_1774458762265.webp',
  },
  {
    id: 'sanjivini-multi',
    name: 'Sanjivini Multi Speciality',
    description: 'Comprehensive multi-speciality structured format',
    category: 'Hospital',
    previewImage: '/images/medical-certificate-template-19_1774458769410.webp',
  },
  {
    id: 'astha-clinic',
    name: 'Astha Clinic',
    description: 'Clean minimal clinic prescription format',
    category: 'Clinic',
    previewImage: '/images/medical-certificate-template-20_1774458776462.webp',
  },
];
