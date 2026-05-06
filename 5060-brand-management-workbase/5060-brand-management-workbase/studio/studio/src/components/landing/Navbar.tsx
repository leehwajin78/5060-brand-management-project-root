import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-headline text-2xl font-bold tracking-tight text-primary">PrimeBrand AI</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/diagnostic">
            <Button variant="default" className="font-medium">진단 시작하기</Button>
          </Link>
        </div>
      </div>
    </nav>
  );
}