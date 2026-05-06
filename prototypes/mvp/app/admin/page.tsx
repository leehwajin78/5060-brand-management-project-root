"use client";

import { useState } from "react";
import { mockAdminRequests, mockQuestions, mockReport } from "@/lib/mock-data";
import { SectionHeading } from "@/components/common/SectionHeading";
import { PremiumButton } from "@/components/common/PremiumButton";
import { Search, CheckCircle, XCircle, RefreshCw, FileText } from "lucide-react";

export default function AdminDashboard() {
  const [selectedReq, setSelectedReq] = useState(mockAdminRequests[0]);
  const [reportData, setReportData] = useState(mockReport);

  const handleUpdateReport = (key: string, value: string | string[]) => {
    setReportData(prev => ({ ...prev, [key]: value }));
  };

  const handleArrayUpdate = (key: keyof typeof mockReport, index: number, value: string) => {
    const newArray = [...(reportData[key] as string[])];
    newArray[index] = value;
    handleUpdateReport(key, newArray);
  };

  return (
    <div className="min-h-screen bg-muted/20">
      <header className="bg-background border-b px-6 py-4 flex items-center justify-between sticky top-0 z-30">
        <div className="flex items-center gap-3">
          <div className="bg-primary text-white p-2 rounded-md">
            <Search className="w-5 h-5" />
          </div>
          <h1 className="text-xl font-bold">관리자 대시보드</h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-sm font-medium text-muted-foreground">admin@5060brand.com</span>
          <div className="w-8 h-8 bg-secondary rounded-full"></div>
        </div>
      </header>

      <main className="p-6 h-[calc(100vh-73px)] flex flex-col">
        {/* Top: Request List */}
        <section className="mb-6 bg-background rounded-xl border shadow-sm overflow-hidden flex-shrink-0">
          <div className="p-4 border-b bg-muted/10">
            <h2 className="font-semibold text-lg flex items-center gap-2">
              <FileText className="w-5 h-5" />
              진단 요청 목록
            </h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-muted-foreground uppercase bg-muted/50">
                <tr>
                  <th className="px-6 py-3">요청 ID</th>
                  <th className="px-6 py-3">고객 이름</th>
                  <th className="px-6 py-3">연락처</th>
                  <th className="px-6 py-3">신청일</th>
                  <th className="px-6 py-3">상태</th>
                </tr>
              </thead>
              <tbody>
                {mockAdminRequests.map((req) => (
                  <tr 
                    key={req.id} 
                    className={`border-b cursor-pointer hover:bg-primary/5 transition-colors ${selectedReq.id === req.id ? 'bg-primary/5 border-l-4 border-l-primary' : ''}`}
                    onClick={() => setSelectedReq(req)}
                  >
                    <td className="px-6 py-4 font-medium">{req.id}</td>
                    <td className="px-6 py-4">{req.name}</td>
                    <td className="px-6 py-4">{req.contact}</td>
                    <td className="px-6 py-4">{req.date}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
                        req.status === '승인 완료' ? 'bg-green-100 text-green-800' :
                        req.status === '검토 필요' ? 'bg-orange-100 text-orange-800' :
                        'bg-blue-100 text-blue-800'
                      }`}>
                        {req.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Bottom: Split View */}
        <div className="flex-1 flex gap-6 overflow-hidden">
          
          {/* Left: Customer Answers */}
          <section className="w-1/2 bg-background border rounded-xl shadow-sm flex flex-col overflow-hidden">
            <div className="p-4 border-b bg-muted/10">
              <h3 className="font-semibold">[{selectedReq.name}] 고객 답변 내역 (16문항)</h3>
            </div>
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {mockQuestions.map((q, i) => (
                <div key={q.id} className="p-4 rounded-lg bg-muted/30 border">
                  <div className="text-sm font-medium text-primary mb-2">Q{i + 1}. {q.question}</div>
                  <p className="text-foreground text-sm leading-relaxed bg-background p-3 rounded border">
                    {/* Mock answer generation for visual purpose */}
                    {i === 0 ? "저는 지난 25년간 IT 업계에서 프로젝트 관리자로 일했습니다. 특히..." : 
                     i === 1 ? "매출 200억 규모의 신규 시스템 구축 프로젝트를 성공적으로 이끈 경험입니다." :
                     "고객이 작성한 답변 내용이 이곳에 표시됩니다."}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Right: AI Report Editor */}
          <section className="w-1/2 bg-background border rounded-xl shadow-sm flex flex-col overflow-hidden">
            <div className="p-4 border-b bg-primary/5 flex justify-between items-center">
              <h3 className="font-semibold text-primary">AI 리포트 초안 에디터</h3>
              <button className="text-xs flex items-center gap-1 text-muted-foreground hover:text-primary transition-colors">
                <RefreshCw className="w-3 h-3" /> AI 1회 재생성
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">브랜드 타이틀</label>
                <input 
                  type="text" 
                  className="w-full p-3 border rounded-md font-semibold text-lg"
                  value={reportData.brandTitle}
                  onChange={(e) => handleUpdateReport('brandTitle', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">브랜드 요약</label>
                <textarea 
                  className="w-full p-3 border rounded-md h-24 resize-none"
                  value={reportData.brandSummary}
                  onChange={(e) => handleUpdateReport('brandSummary', e.target.value)}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">핵심 강점 (Core Strengths)</label>
                <div className="space-y-2">
                  {reportData.coreStrengths.map((item, idx) => (
                    <input 
                      key={idx}
                      type="text" 
                      className="w-full p-2 border rounded-md text-sm"
                      value={item}
                      onChange={(e) => handleArrayUpdate('coreStrengths', idx, e.target.value)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">추천 콘텐츠 테마</label>
                <div className="space-y-2">
                  {reportData.recommendedContentThemes.map((item, idx) => (
                    <input 
                      key={idx}
                      type="text" 
                      className="w-full p-2 border rounded-md text-sm"
                      value={item}
                      onChange={(e) => handleArrayUpdate('recommendedContentThemes', idx, e.target.value)}
                    />
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-muted-foreground">다음 액션 (Next Actions)</label>
                <div className="space-y-2">
                  {reportData.nextActions.map((item, idx) => (
                    <input 
                      key={idx}
                      type="text" 
                      className="w-full p-2 border rounded-md text-sm"
                      value={item}
                      onChange={(e) => handleArrayUpdate('nextActions', idx, e.target.value)}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Editor Actions */}
            <div className="p-4 border-t bg-muted/10 flex justify-end gap-3">
              <PremiumButton variant="outline" className="text-destructive hover:bg-destructive/10 hover:text-destructive border-destructive/20">
                <XCircle className="w-4 h-4 mr-2" /> 거부
              </PremiumButton>
              <PremiumButton>
                <CheckCircle className="w-4 h-4 mr-2" /> 승인 및 발송
              </PremiumButton>
            </div>
          </section>

        </div>
      </main>
    </div>
  );
}
