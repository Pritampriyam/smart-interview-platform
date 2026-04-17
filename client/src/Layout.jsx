import { Link, Outlet } from 'react-router-dom';
import { Briefcase } from 'lucide-react';

export default function Layout(){
return (
<div className='min-h-screen flex flex-col bg-slate-50'>
<header className='sticky top-0 z-50 bg-white/90 backdrop-blur border-b'>
<div className='max-w-7xl mx-auto px-6 py-4 flex items-center justify-between'>
<Link to='/' className='flex items-center gap-2 text-xl font-bold'><Briefcase className='text-blue-600'/>InterviewPlatform</Link>
<nav className='hidden md:flex items-center gap-6 text-sm'>
<Link to='/'>Home</Link>
<Link to='/features'>Features</Link>
<Link to='/pricing'>Pricing</Link>
<Link to='/auth'>Login</Link>
<Link to='/auth' className='bg-blue-600 text-white px-4 py-2 rounded-xl'>Get Started</Link>
</nav>
</div>
</header>
<main className='flex-1'>
<Outlet />
</main>
<footer className='bg-white border-t'>
<div className='max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row gap-4 justify-between text-sm text-slate-600'>
<p>© 2026 InterviewPlatform</p>
<div className='flex gap-4'>
<Link to='/features'>Features</Link>
<Link to='/pricing'>Pricing</Link>
<Link to='/auth'>Login</Link>
<a href='#'>Privacy</a>
<a href='#'>Terms</a>
</div>
</div>
</footer>
</div>
)}
