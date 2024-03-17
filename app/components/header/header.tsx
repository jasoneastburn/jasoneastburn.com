import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ThemeToggle from '../theme-toggle/theme-toggle';

export function Header() {
  return (
    <header className='flex justify-between items-center p-4 mb-5 w-full top-0 sticky bg-primary text-accent border-b-4 border-solid border-accent'>
      <Stack direction='row' spacing={2} className='flex items-center'>
        <Avatar alt='Jason Eastburn' src='/jasoneastburn-avatar.jpg' />
        <div className='text-2xl font-bold'>JASON EASTBURN</div>
      </Stack>
      <nav className='flex space-x-8 text-xl'>
        <a href='/'>Home</a>
        <a href='/projects'>Projects</a>
        <a href='/blog'>Blog</a>
        <a href='/about'>About</a>
        <a href='/contact'>Contact</a>
        <ThemeToggle></ThemeToggle>
      </nav>
    </header>
  );
}
