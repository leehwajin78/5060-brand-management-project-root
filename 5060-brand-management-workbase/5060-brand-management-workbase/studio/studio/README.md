# 5060 Premium Brand Management - Studio

이 프로젝트는 5060 시니어를 위한 프리미엄 퍼스널 브랜딩 관리 시스템의 "스튜디오" 프론트엔드/관리자 환경입니다. Next.js 15와 Firebase, 그리고 Genkit(AI)을 기반으로 구축되었습니다.

## 🚀 기술 스택 (Tech Stack)

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Turbopack)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/), [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **AI Integration**: [Firebase Genkit](https://firebase.google.com/docs/genkit) (`@genkit-ai/google-genai`)
- **Backend/BaaS**: [Firebase](https://firebase.google.com/)
- **Language**: TypeScript

## 🛠 필수 준비물 (Prerequisites)

- **Node.js**: v20 이상 권장
- **Package Manager**: npm (또는 yarn, pnpm)
- **API Keys**: Google Gemini API 키 및 Firebase 프로젝트 설정

## 📦 설치 및 실행 (Installation & Setup)

### 1. 패키지 설치

터미널을 열고 프로젝트 루트(`studio/studio`)에서 다음 명령어를 실행하여 의존성 패키지를 설치합니다.

```bash
npm install
```

### 2. 환경 변수 설정

프로젝트 루트 디렉토리에 `.env.local` 파일을 생성하고, 필요한 환경 변수를 설정합니다. (Genkit 및 Firebase 연동을 위해 필요할 수 있습니다.)

```env
# 예시: Gemini API 키
GEMINI_API_KEY="당신의_API_키를_여기에_입력하세요"

# Firebase 관련 환경 변수 설정
# NEXT_PUBLIC_FIREBASE_API_KEY="..."
```

### 3. 개발 서버 실행

이 프로젝트는 웹 애플리케이션(Next.js)과 AI 기능 개발(Genkit)을 위한 스크립트를 제공합니다.

#### Next.js 웹 애플리케이션 실행

```bash
npm run dev
```

- 서버가 실행되면 브라우저에서 [http://localhost:9002](http://localhost:9002) 로 접속하여 화면을 확인합니다.
- `package.json` 설정에 따라 기본적으로 **9002번 포트**와 **Turbopack**을 사용합니다.
- 코드를 수정하면 즉시 반영(HMR)됩니다.

#### Genkit Developer UI 실행 (AI 프롬프트/로직 테스트)

AI 연동 로직(`src/ai/dev.ts` 등)을 테스트하거나 프롬프트를 튜닝하려면, **새로운 터미널 창을 열고** 아래 명령어를 실행합니다.

```bash
# 개발 모드 실행
npm run genkit:dev

# 또는 변경 사항을 감지하는 Watch 모드 실행
npm run genkit:watch
```

## 🏗 빌드 및 배포 (Build & Production)

프로덕션 환경으로 빌드하고 실행하려면 다음 명령어를 사용합니다.

```bash
# 프로덕션 빌드 생성
npm run build

# 빌드된 애플리케이션 실행
npm run start
```

## 📂 주요 디렉토리 구조 (Directory Structure)

- `src/app/`: Next.js App Router 기반의 페이지, 라우팅 및 레이아웃
- `src/components/`: 재사용 가능한 UI 컴포넌트 (shadcn/ui 포함)
- `src/ai/`: Genkit 기반 AI 로직 및 설정 (예: `dev.ts`)
- `docs/`: 프로젝트 관련 부가 문서
- `apphosting.yaml`: Firebase App Hosting 배포 설정 파일

## 📝 린트 및 타입 검사 (Linting & Type Checking)

코드 품질 유지를 위해 다음 명령어를 활용할 수 있습니다.

```bash
npm run lint      # ESLint 검사
npm run typecheck # TypeScript 타입 검사
```
