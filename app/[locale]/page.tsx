
import Home from '@/components/Home'
import { locales, defaultLocale, Locale } from '@/i18n-config'
import { ReactNode } from 'react';
import styles from './Page.module.css';


export default function Page({params}: { params: { locale: Locale } }) {
  const locale = locales.includes(params.locale) ? params.locale : defaultLocale;
  
  return (
    <>
    <Home locale={locale} />
    </>
  )
}

// interface PageProps {
//   params: {
//     locale: Locale;
//   };
//   children: ReactNode; // Type annotation for children prop
// }

// export default function Page({ params, children }: PageProps) {
//   const locale = locales.includes(params.locale) ? params.locale : defaultLocale;
  
//   return (
//     <>
//       <Home locale={locale} />
//       <div className={styles.pageContainer}>
//         <div className={styles.mainContent}>{children}</div>
//         <Footer />
//       </div>
//     </>
//   );
// }
