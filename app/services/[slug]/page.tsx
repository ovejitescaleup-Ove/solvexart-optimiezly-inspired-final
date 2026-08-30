import {services} from '../../../lib/data'; import SiteShell from '../../../components/SiteShell'; import {notFound} from 'next/navigation'; import ServiceDetailClient from '../../../components/ServiceDetailClient';
export function generateStaticParams(){return services.map(s=>({slug:s.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=services.find(x=>x.slug===slug);return s?{title:s.seoTitle,description:s.seoDescription}:{} }
export default async function Service({params}:{params:Promise<{slug:string}>}){const {slug}=await params;const s=services.find(x=>x.slug===slug);if(!s)return notFound();return <SiteShell><ServiceDetailClient initial={s}/></SiteShell>}
