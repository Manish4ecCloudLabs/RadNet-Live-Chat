import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useLocation } from "react-router-dom";

export default function Placeholder() {
  const location = useLocation();
  const path = location.pathname;

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      <div className="flex-1 flex items-center justify-center py-20">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <div className="mb-8">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-4xl text-gray-400">📄</span>
            </div>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Page Coming Soon
            </h1>
            <p className="text-lg text-gray-600 mb-4">
              We're building something great for <code className="bg-gray-100 px-2 py-1 rounded">{path}</code>
            </p>
            <p className="text-gray-500">
              This page is being developed. Check back soon for more information!
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
