export default function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="container-prose py-14 grid gap-8 md:grid-cols-3 text-sm text-muted-foreground">
        <div>
          <p className="font-serif text-base text-primary">꿈몰다 브랜드 매니지먼트</p>
          <p className="mt-2 leading-relaxed">경력을 무대로 번역합니다.</p>
        </div>
        <div className="space-y-1">
          <p>프리미엄 1:1 브랜드 매니지먼트</p>
          <p>상담 후 맞춤 안내</p>
        </div>
        <div className="space-y-1 md:text-right">
          <p>© {new Date().getFullYear()} 꿈몰다. All rights reserved.</p>
          <p className="text-xs">28년 프레젠테이션·브랜딩·교육 설계 경험 기반</p>
        </div>
      </div>
    </footer>
  );
}
