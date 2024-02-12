'use client';

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { locales } from '@/i18n';
import { useLocale, useTranslations } from 'next-intl';
import { usePathname, useRouter } from 'next/navigation';
export default function LangageSwitcher() {
    const t = useTranslations();
    const locale = useLocale();
    const pathname = usePathname();
    const router = useRouter();
    const supportedLocales = locales;
  return (
    <Select onValueChange={(value)=>{
        router.replace(`${pathname.replace(locale, value)}`);
    }}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder={t('Language')} />
      </SelectTrigger>
      <SelectContent>
        {supportedLocales.map((locale) => (
          <SelectItem key={locale} value={locale}>
            {locale}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
