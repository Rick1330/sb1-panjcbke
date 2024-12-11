import { Navigation } from './Navigation';
import { TopBar } from './TopBar';
import { MobileMenu } from './MobileMenu';

export function Header() {
  return (
    <header className="fixed w-full z-50 bg-white shadow-sm">
      <TopBar />
      <Navigation />
      <MobileMenu />
    </header>
  );
}