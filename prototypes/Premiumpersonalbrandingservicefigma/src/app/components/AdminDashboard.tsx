import { useState } from 'react';
import { Eye, CheckCircle, XCircle, RefreshCw, ArrowLeft } from 'lucide-react';

interface Request {
  id: string;
  name: string;
  phone: string;
  email: string;
  status: '대기중' | '완료' | '거부';
  date: string;
  answers: Record<string, string>;
  report?: AIReport;
}

interface AIReport {
  brandIdentity: string;
  coreValues: string;
  targetAudience: string;
  differentiators: string;
  contentStrategy: string;
  actionPlan: string;
}

const mockRequests: Request[] = [
  {
    id: 'REQ-001',
    name: '김영희',
    phone: '010-1234-5678',
    email: 'younghee@example.com',
    status: '대기중',
    date: '2026-05-02 10:30',
    answers: {
      q1: '30년간 경영 컨설팅 분야에서 중소기업 CEO들을 대상으로 전략 수립 및 실행 지원 업무를 해왔습니다.',
      q2: '200개 이상의 중소기업이 매출 2배 성장을 달성하도록 도왔고, 그 중 15개 기업은 업계 1위로 성장했습니다.',
      q3: '주변에서는 저를 "문제의 본질을 꿰뚫는 사람", "실행력 있는 전략가"라고 평가합니다.',
    },
    report: {
      brandIdentity: '"중소기업 성장의 동반자" - 30년 경험을 바탕으로 실질적 성과를 만드는 전략 컨설턴트',
      coreValues: '실용주의, 결과 지향, 진정성, 헌신',
      targetAudience: '매출 10억~100억 사이 성장 정체기를 겪는 중소기업 CEO (40~60대)',
      differentiators: '200개 기업 성공 사례 보유, 이론이 아닌 현장 중심 접근, 15개 업계 1위 기업 배출 실적',
      contentStrategy: '매주 "중소기업 성장 인사이트" 블로그 발행, 분기별 무료 웨비나 개최, LinkedIn 활발한 사례 공유',
      actionPlan: '1개월: 웹사이트 리뉴얼 및 사례집 발간\n3개월: 온라인 강의 런칭\n6개월: 유튜브 채널 오픈 및 구독자 1만명 달성',
    },
  },
  {
    id: 'REQ-002',
    name: '박철수',
    phone: '010-9876-5432',
    email: 'chulsoo@example.com',
    status: '완료',
    date: '2026-05-01 14:20',
    answers: {
      q1: '25년간 IT 보안 분야에서 일했으며, 현재는 정보보호 최고책임자(CISO)로 활동하고 있습니다.',
      q2: '국내 주요 금융기관 10곳의 보안 체계를 구축하여 해킹 피해 제로를 달성했습니다.',
    },
  },
  {
    id: 'REQ-003',
    name: '이미숙',
    phone: '010-5555-7777',
    email: 'misook@example.com',
    status: '대기중',
    date: '2026-05-02 09:15',
    answers: {
      q1: '교육 분야에서 20년간 일했으며, 특히 성인 리더십 교육 전문가입니다.',
    },
  },
];

export default function AdminDashboard() {
  const [selectedRequest, setSelectedRequest] = useState<Request | null>(null);
  const [editedReport, setEditedReport] = useState<AIReport | null>(null);

  const handleSelectRequest = (request: Request) => {
    setSelectedRequest(request);
    setEditedReport(request.report || null);
  };

  const handleReportChange = (field: keyof AIReport, value: string) => {
    if (editedReport) {
      setEditedReport({ ...editedReport, [field]: value });
    }
  };

  const handleApprove = () => {
    alert('리포트가 승인되었습니다. 고객에게 이메일이 발송됩니다.');
    setSelectedRequest(null);
    setEditedReport(null);
  };

  const handleReject = () => {
    if (confirm('정말 거부하시겠습니까?')) {
      alert('리포트가 거부되었습니다.');
      setSelectedRequest(null);
      setEditedReport(null);
    }
  };

  const handleRegenerate = () => {
    if (confirm('AI가 리포트를 다시 생성합니다. 기존 내용은 사라집니다. 계속하시겠습니까?')) {
      alert('AI가 리포트를 재생성하는 중입니다...');
    }
  };

  if (selectedRequest) {
    return (
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b border-gray-200 px-8 py-6 sticky top-0 z-10">
          <div className="max-w-[1800px] mx-auto flex items-center justify-between">
            <button
              onClick={() => setSelectedRequest(null)}
              className="flex items-center gap-2 text-lg text-gray-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              목록으로 돌아가기
            </button>
            <h1 className="text-2xl">{selectedRequest.name}님의 리포트</h1>
            <div className="w-40"></div>
          </div>
        </div>

        {/* Split View */}
        <div className="max-w-[1800px] mx-auto p-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left: Customer Answers */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200 h-[calc(100vh-200px)] overflow-y-auto">
              <h2 className="text-2xl mb-6 pb-4 border-b border-gray-200">고객 답변 내역</h2>
              <div className="space-y-6">
                {Object.entries(selectedRequest.answers).map(([key, value]) => (
                  <div key={key} className="pb-6 border-b border-gray-100 last:border-0">
                    <p className="text-lg text-primary mb-3">{key.toUpperCase()}</p>
                    <p className="text-lg text-gray-700 leading-relaxed">{value}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right: Report Editor */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
              <h2 className="text-2xl mb-6 pb-4 border-b border-gray-200">AI 생성 리포트 편집</h2>

              {editedReport ? (
                <div className="space-y-6 mb-8">
                  <div>
                    <label className="block text-lg mb-3">브랜드 정체성</label>
                    <textarea
                      value={editedReport.brandIdentity}
                      onChange={(e) => handleReportChange('brandIdentity', e.target.value)}
                      className="w-full min-h-[100px] p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-lg mb-3">핵심 가치</label>
                    <textarea
                      value={editedReport.coreValues}
                      onChange={(e) => handleReportChange('coreValues', e.target.value)}
                      className="w-full min-h-[80px] p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-lg mb-3">타겟 고객</label>
                    <textarea
                      value={editedReport.targetAudience}
                      onChange={(e) => handleReportChange('targetAudience', e.target.value)}
                      className="w-full min-h-[80px] p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-lg mb-3">차별화 포인트</label>
                    <textarea
                      value={editedReport.differentiators}
                      onChange={(e) => handleReportChange('differentiators', e.target.value)}
                      className="w-full min-h-[100px] p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-lg mb-3">콘텐츠 전략</label>
                    <textarea
                      value={editedReport.contentStrategy}
                      onChange={(e) => handleReportChange('contentStrategy', e.target.value)}
                      className="w-full min-h-[100px] p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all resize-none"
                    />
                  </div>

                  <div>
                    <label className="block text-lg mb-3">실행 계획</label>
                    <textarea
                      value={editedReport.actionPlan}
                      onChange={(e) => handleReportChange('actionPlan', e.target.value)}
                      className="w-full min-h-[120px] p-4 text-lg border-2 border-gray-200 rounded-xl focus:border-primary focus:outline-none transition-all resize-none"
                    />
                  </div>
                </div>
              ) : (
                <div className="text-center py-12 text-gray-400">
                  <p className="text-xl">AI 리포트가 아직 생성되지 않았습니다.</p>
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex gap-4 pt-6 border-t border-gray-200">
                <button
                  onClick={handleApprove}
                  disabled={!editedReport}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-primary text-white text-lg rounded-xl hover:bg-primary/90 disabled:bg-gray-300 disabled:cursor-not-allowed transition-all"
                >
                  <CheckCircle className="w-5 h-5" />
                  리포트 승인
                </button>
                <button
                  onClick={handleRegenerate}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-yellow-500 text-white text-lg rounded-xl hover:bg-yellow-600 transition-all"
                >
                  <RefreshCw className="w-5 h-5" />
                  AI 재생성
                </button>
                <button
                  onClick={handleReject}
                  className="flex items-center justify-center gap-2 px-6 py-4 bg-red-500 text-white text-lg rounded-xl hover:bg-red-600 transition-all"
                >
                  <XCircle className="w-5 h-5" />
                  거부
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-5xl mb-12">관리자 대시보드</h1>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
            <p className="text-xl text-gray-600 mb-2">전체 요청</p>
            <p className="text-4xl text-primary">{mockRequests.length}</p>
          </div>
          <div className="bg-yellow-50 rounded-2xl p-8 shadow-sm border border-yellow-200">
            <p className="text-xl text-gray-600 mb-2">대기중</p>
            <p className="text-4xl text-yellow-600">
              {mockRequests.filter(r => r.status === '대기중').length}
            </p>
          </div>
          <div className="bg-green-50 rounded-2xl p-8 shadow-sm border border-green-200">
            <p className="text-xl text-gray-600 mb-2">완료</p>
            <p className="text-4xl text-green-600">
              {mockRequests.filter(r => r.status === '완료').length}
            </p>
          </div>
        </div>

        {/* Requests Table */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-8 py-5 text-left text-lg">ID</th>
                <th className="px-8 py-5 text-left text-lg">이름</th>
                <th className="px-8 py-5 text-left text-lg">연락처</th>
                <th className="px-8 py-5 text-left text-lg">이메일</th>
                <th className="px-8 py-5 text-left text-lg">상태</th>
                <th className="px-8 py-5 text-left text-lg">날짜</th>
                <th className="px-8 py-5 text-left text-lg">액션</th>
              </tr>
            </thead>
            <tbody>
              {mockRequests.map((request) => (
                <tr key={request.id} className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                  <td className="px-8 py-6 text-lg">{request.id}</td>
                  <td className="px-8 py-6 text-lg">{request.name}</td>
                  <td className="px-8 py-6 text-lg">{request.phone}</td>
                  <td className="px-8 py-6 text-lg">{request.email}</td>
                  <td className="px-8 py-6">
                    <span
                      className={`inline-block px-4 py-2 rounded-full text-base ${
                        request.status === '대기중'
                          ? 'bg-yellow-100 text-yellow-700'
                          : request.status === '완료'
                          ? 'bg-green-100 text-green-700'
                          : 'bg-red-100 text-red-700'
                      }`}
                    >
                      {request.status}
                    </span>
                  </td>
                  <td className="px-8 py-6 text-lg text-gray-600">{request.date}</td>
                  <td className="px-8 py-6">
                    <button
                      onClick={() => handleSelectRequest(request)}
                      className="flex items-center gap-2 px-5 py-3 bg-primary text-white rounded-lg hover:bg-primary/90 transition-all"
                    >
                      <Eye className="w-4 h-4" />
                      상세보기
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
