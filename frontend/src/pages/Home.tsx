import ServiceCard from '../components/ServiceCard';

const Home = () => {
  return (
    <div className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            imada-lab
          </h1>
          <p className="text-xl text-gray-600">
            電気工事業界向けサービス開発
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <ServiceCard
            title="PoleNavi"
            subtitle="電柱位置共有アプリ"
            description="日本初の電柱番号から位置を検索できる無料アプリ。自治体職員や電気工事業者向けに、電柱の位置情報をクラウドソーシングで共有。"
            link="https://polenavi.com"
          />
          <ServiceCard
            title="電気屋マイスター"
            subtitle="電気工事の学習サイト＆アプリ"
            description="電気工事の基礎から応用まで学べる情報サイト。現場で使える計算アプリも開発中(iOS開発中、Android βテスト中)。"
            link="https://denkiya-meister.com"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
