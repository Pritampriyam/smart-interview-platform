import { Link } from 'react-router-dom';
import { Briefcase, FileText, Brain, ShieldCheck, ArrowRight } from 'lucide-react';

export default function HomePage() {
    return (
        <div className='min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-white text-slate-900'>
            
            <section className='max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center'>
                <div className='text-white'>
                    <p className='text-blue-300 mb-3'>AI Powered Interview Prep</p>
                    <h1 className='text-5xl font-bold leading-tight'>Get Interview Ready with AI-Powered Preparation</h1>
                    <p className='text-slate-300 mt-5 text-lg'>Upload your resume and job description to discover interview questions, skill gaps, best answers, and ATS-ready resumes.</p>
                    <div className='flex gap-4 mt-8'>
                        <Link to='/auth' className='bg-blue-600 px-6 py-3 rounded-2xl text-white font-semibold'>Start Free</Link>
                        <button className='border border-white/20 px-6 py-3 rounded-2xl text-white'>Watch Demo</button>
                    </div>
                    <div className='grid grid-cols-3 gap-4 mt-10 text-center'>
                        <div><h3 className='text-2xl font-bold'>10k+</h3><p className='text-slate-300 text-sm'>Job Seekers</p></div>
                        <div><h3 className='text-2xl font-bold'>50k+</h3><p className='text-slate-300 text-sm'>Questions</p></div>
                        <div><h3 className='text-2xl font-bold'>95%</h3><p className='text-slate-300 text-sm'>Satisfaction</p></div>
                    </div></div>
                <div className='relative'>
                    <img src='https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80' className='rounded-3xl h-[520px] w-full object-cover shadow-2xl' />
                    <div className='absolute top-6 -left-4 bg-white p-3 rounded-2xl shadow'>Resume Uploaded ✅</div>
                    <div className='absolute top-24 -right-4 bg-white p-3 rounded-2xl shadow'>25 Questions 🎯</div>
                    <div className='absolute bottom-24 -left-4 bg-white p-3 rounded-2xl shadow'>Skill Gap 📊</div>
                    <div className='absolute bottom-6 -right-4 bg-white p-3 rounded-2xl shadow'>ATS Ready 📄</div>
                </div></section>
            <section id='features' className='max-w-7xl mx-auto px-6 py-20'>
                <div className='text-center mb-12'><h2 className='text-4xl font-bold'>Why Choose InterviewPlatform</h2></div>
                <div className='grid md:grid-cols-3 gap-6'>
                    {[
                        ['Smart Questions', 'Generate likely role-based interview questions.', Brain],
                        ['Interview Intent', 'Know what recruiters want.', ShieldCheck],
                        ['Best Answers', 'See optimized sample answers.', FileText],
                        ['Skill Gap Analysis', 'Compare JD vs Resume.', Briefcase],
                        ['ATS Resume Builder', 'Create recruiter-friendly resumes.', FileText],
                        ['Confidence Booster', 'Practice smarter and feel prepared.', ArrowRight],
                    ].map(([t, d, Icon]) => (<div key={t} className='bg-white rounded-3xl p-6 shadow hover:-translate-y-1 transition'><Icon className='text-blue-600 mb-4' /><h3 className='font-semibold text-xl mb-2'>{t}</h3><p className='text-slate-600'>{d}</p></div>))}
                </div></section>
            <section id='preview' className='max-w-7xl mx-auto px-6 pb-20'>
                <div className='bg-slate-900 rounded-3xl p-8 text-white shadow-2xl'>
                    <h2 className='text-3xl font-bold mb-6'>Product Preview</h2>
                    <div className='grid md:grid-cols-2 gap-6'>
                        <div className='bg-white/10 rounded-2xl p-5'>Resume Upload Area</div>
                        <div className='bg-white/10 rounded-2xl p-5'>JD Upload Area</div>
                        <div className='bg-white/10 rounded-2xl p-5'>Questions + Analysis</div>
                        <div className='bg-white/10 rounded-2xl p-5'>Resume Score: 92/100</div>
                    </div></div></section>
            <section id='pricing' className='max-w-7xl mx-auto px-6 pb-20'>
                <div className='bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-10 text-white text-center'>
                    <h2 className='text-4xl font-bold'>Ready to Crack Your Next Interview?</h2>
                    <div className='mt-6 flex gap-4 justify-center'>
                        <Link to='/auth' className='bg-white text-blue-700 px-6 py-3 rounded-2xl font-semibold'>Start Free</Link>
                        <Link to='/auth' className='border border-white/30 px-6 py-3 rounded-2xl'>Login</Link>
                    </div></div></section>
            
        </div>
    )
}
