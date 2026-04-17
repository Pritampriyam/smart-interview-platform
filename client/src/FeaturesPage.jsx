import { Link } from 'react-router-dom';
import { Upload, Search, FileCheck, Brain, UserCheck, ArrowRight } from 'lucide-react';

export default function FeaturesPage(){
return (
<div className='min-h-screen bg-slate-50'>
<section className='bg-gradient-to-r from-slate-900 to-blue-900 text-white py-20'>
<div className='max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center'>
<div><h1 className='text-5xl font-bold mb-4'>How InterviewPlatform Works</h1><p className='text-slate-300 text-lg'>From resume upload to interview confidence in minutes.</p></div>
<img src='https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80' className='rounded-3xl h-80 w-full object-cover'/>
</div></section>
<section className='max-w-6xl mx-auto px-6 py-20'>
<div className='grid md:grid-cols-3 gap-6'>
{[
['Create Account','Sign up and save progress',UserCheck],
['Upload Resume','PDF or DOC format',Upload],
['Paste Job Description','Target exact role',Search],
['Get AI Analysis','Questions and skill gaps',Brain],
['Generate ATS Resume','Recruiter friendly PDF',FileCheck],
['Practice & Improve','Prepare with confidence',ArrowRight],
].map(([t,d,Icon])=>(<div key={t} className='bg-white p-6 rounded-3xl shadow'><Icon className='text-blue-600 mb-4'/><h3 className='font-semibold text-xl mb-2'>{t}</h3><p className='text-slate-600'>{d}</p></div>))}
</div></section>
<section className='max-w-7xl mx-auto px-6 pb-20 space-y-16'>
{[
['Interview Questions Generator','Get likely interview questions for your target role.'],
['Skill Gap Analyzer','Compare resume vs JD and spot missing skills.'],
['ATS Resume Builder','Generate clean recruiter-friendly resumes.'],
['Smart Answer Suggestions','See optimized answers with clear structure.'],
].map(([t,d],i)=>(<div key={t} className='grid md:grid-cols-2 gap-8 items-center'>
{i%2===0 ? <img src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80' className='rounded-3xl h-72 w-full object-cover'/> : <div className='bg-blue-600 text-white rounded-3xl h-72 flex items-center justify-center text-2xl font-bold'>Dashboard UI</div>}
<div><h2 className='text-3xl font-bold mb-3'>{t}</h2><p className='text-slate-600 mb-4'>{d}</p><ul className='space-y-2 text-slate-700'><li>✔ Fast results</li><li>✔ Easy to use</li><li>✔ Actionable insights</li></ul></div>
</div>))}
</section>
<section className='max-w-7xl mx-auto px-6 pb-20'>
<div className='bg-slate-900 text-white rounded-3xl p-10 text-center'>
<h2 className='text-4xl font-bold'>Start preparing smarter today</h2>
<div className='mt-6 flex gap-4 justify-center'>
<Link to='/auth' className='bg-blue-600 px-6 py-3 rounded-2xl'>Get Started</Link>
<Link to='/pricing' className='border border-white/20 px-6 py-3 rounded-2xl'>Pricing</Link>
</div></div></section>
</div>
)}
