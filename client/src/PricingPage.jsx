import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

export default function PricingPage(){
const plans=[
{name:'Free',price:'₹0',btn:'Start Free',features:['Limited analyses','Basic questions','1 resume version','Community support']},
{name:'Pro',price:'₹499/mo',btn:'Upgrade Now',highlight:true,features:['Unlimited analyses','Advanced insights','Skill gap reports','ATS resumes','Priority support']},
{name:'Team',price:'Custom',btn:'Contact Sales',features:['Bulk student accounts','Admin dashboard','Analytics','Placement support']},
];
return (
<div className='min-h-screen bg-slate-50'>
<section className='bg-gradient-to-r from-blue-700 to-indigo-700 text-white py-20 text-center px-6'>
<h1 className='text-5xl font-bold mb-4'>Simple Pricing for Serious Career Growth</h1>
<p className='text-blue-100 text-lg'>Start free, upgrade when ready.</p>
</section>
<section className='max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-3 gap-6'>
{plans.map((plan)=>(<div key={plan.name} className={`rounded-3xl p-8 shadow bg-white ${plan.highlight?'ring-2 ring-blue-600 scale-105':''}`}>
<h2 className='text-2xl font-bold'>{plan.name}</h2>
<p className='text-4xl font-bold my-4'>{plan.price}</p>
<ul className='space-y-3 mb-8'>
{plan.features.map((f)=><li key={f} className='flex gap-2'><Check className='text-blue-600' size={18}/>{f}</li>)}
</ul>
<Link to='/auth' className={`block text-center py-3 rounded-2xl font-semibold ${plan.highlight?'bg-blue-600 text-white':'bg-slate-100'}`}>{plan.btn}</Link>
</div>))}
</section>
<section className='max-w-7xl mx-auto px-6 pb-20'>
<div className='bg-white rounded-3xl shadow p-8 overflow-auto'>
<h2 className='text-3xl font-bold mb-6'>Compare Plans</h2>
<table className='w-full text-left'>
<thead><tr className='border-b'><th className='py-3'>Feature</th><th>Free</th><th>Pro</th><th>Team</th></tr></thead>
<tbody>
<tr className='border-b'><td className='py-3'>Analyses</td><td>Limited</td><td>Unlimited</td><td>Unlimited</td></tr>
<tr className='border-b'><td className='py-3'>ATS Resume</td><td>1</td><td>Yes</td><td>Yes</td></tr>
<tr className='border-b'><td className='py-3'>Support</td><td>Community</td><td>Priority</td><td>Dedicated</td></tr>
</tbody></table>
</div></section>
<section className='max-w-7xl mx-auto px-6 pb-20 grid md:grid-cols-4 gap-4'>
{['Save time','Better prep','Higher confidence','Better resumes'].map((i)=><div key={i} className='bg-white rounded-2xl p-5 shadow text-center font-semibold'>{i}</div>)}
</section>
<section className='max-w-7xl mx-auto px-6 pb-20'>
<div className='bg-slate-900 text-white rounded-3xl p-10 text-center'>
<h2 className='text-4xl font-bold'>Your Dream Job Starts With Better Preparation</h2>
<div className='mt-6 flex gap-4 justify-center'>
<Link to='/auth' className='bg-blue-600 px-6 py-3 rounded-2xl'>Start Free</Link>
<Link to='/auth' className='border border-white/20 px-6 py-3 rounded-2xl'>Login</Link>
</div></div></section>
</div>
)}