import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, MapPin, Stethoscope, Heart, Brain, Zap } from "lucide-react";

export default function Index() {
  const news = [
    {
      id: 1,
      title: "Prostate MRI Prior to Biopsy Reduces Unnecessary Biopsies and Lowers Risk of Missing Significant Cancer",
      date: "29 October, 2024",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
      slug: "prostate-mri-biopsy",
    },
    {
      id: 2,
      title: "Better Sleep - Why it's Actually Important to Your Health",
      date: "29 October, 2024",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=600&h=400&fit=crop",
      slug: "better-sleep-health",
    },
    {
      id: 3,
      title: "The Surprising Perks to Your Health of Drinking Coffee",
      date: "29 October, 2024",
      image: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=600&h=400&fit=crop",
      slug: "coffee-health-benefits",
    },
    {
      id: 4,
      title: "No Bones About It! Fun Facts About Bones",
      date: "19 September, 2024",
      image: "https://images.unsplash.com/photo-1559056199-641a0ac8b3f7?w=600&h=400&fit=crop",
      slug: "bones-facts",
    },
  ];

  const services = [
    { icon: Zap, title: "3D Mammography" },
    { icon: Brain, title: "Neuroimaging" },
    { icon: Heart, title: "Cardiac Imaging" },
    { icon: Stethoscope, title: "Ultrasound" },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen bg-black flex items-center justify-center overflow-hidden">
        {/* Video background */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/60 z-10" />
        <video
          autoPlay
          muted
          loop
          className="absolute inset-0 w-full h-full object-cover"
          poster="https://images.unsplash.com/photo-1576091160699-112ba73fbf91?w=1920&h=1080&fit=crop"
        >
          <source
            src="https://videos.unsplash.com/video-1614115707795-e47cf51a0f64?w=1920"
            type="video/mp4"
          />
        </video>

        {/* Hero Content */}
        <div className="relative z-20 text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            We're Here. We're Open.
          </h1>
          <h3 className="text-xl md:text-2xl lg:text-3xl font-light mb-10 text-gray-100">
            Thank you for entrusting us with your care.
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg transition flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl">
              <Calendar className="w-6 h-6" />
              SCHEDULE APPOINTMENT
            </button>
            <button className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg transition flex items-center justify-center gap-2 text-lg shadow-lg hover:shadow-xl">
              <MapPin className="w-6 h-6" />
              FIND LOCATIONS
            </button>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
            RadNet Orange County
          </h2>
          <p className="text-lg text-gray-700 mb-6 leading-relaxed">
            At RadNet Orange County, our mission is to provide exceptional radiology services that exceed the expectations of patients and referring physicians. We offer some of the best imaging services available in Orange County.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our board-certified radiologists have sub-specialty training and knowledge required to interpret 3T MRI, CT, 1.5T MRI, mammography, PET/CT, X-ray, ultrasound and other medical imaging studies. Our experience helps referring physicians make diagnoses necessary to provide appropriate and timely medical treatment.
          </p>
        </div>
      </section>

      {/* Highlight Cards */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-l-4 border-red-700">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Now Offering X-Ray Appointments and Walk-In X-Rays.
                  </h3>
                  <p className="text-gray-600 text-lg">
                    Our Saddleback and San Clemente locations are "Walk-in" only.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition">
                  Schedule Online
                </button>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition border-l-4 border-red-700">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Services by Location
                  </h3>
                  <p className="text-gray-600 text-lg">
                    See what services are performed at each of our locations.
                  </p>
                </div>
              </div>
              <div className="mt-6">
                <button className="px-6 py-3 bg-red-700 hover:bg-red-800 text-white font-semibold rounded-lg transition">
                  View Service Grid
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">
            Our Services
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="text-center p-8 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 hover:from-red-50 hover:to-gray-100 transition shadow-md hover:shadow-lg">
                  <Icon className="w-14 h-14 text-red-700 mx-auto mb-4" />
                  <h3 className="text-lg font-bold text-gray-900">{service.title}</h3>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* News & Reviews Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            {/* News Column */}
            <div className="md:col-span-2">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                Blog, News & Events
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {news.map((article) => (
                  <article
                    key={article.id}
                    className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition border-t-4 border-red-700"
                  >
                    <img
                      src={article.image}
                      alt={article.title}
                      className="w-full h-40 object-cover"
                    />
                    <div className="p-4">
                      <time className="text-sm text-gray-500 font-medium">{article.date}</time>
                      <h3 className="font-bold text-gray-900 mt-2 line-clamp-2 hover:text-red-700 transition">
                        <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                      </h3>
                    </div>
                  </article>
                ))}
              </div>
              <div className="mt-8 text-center">
                <Link
                  to="/blog"
                  className="text-red-700 hover:text-red-800 font-bold transition text-lg"
                >
                  More News →
                </Link>
              </div>
            </div>

            {/* Reviews Column */}
            <div className="md:col-span-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                We Appreciate You
              </h2>
              <div className="bg-gradient-to-br from-white to-gray-50 p-8 rounded-lg shadow-lg border border-red-100 text-center">
                <p className="text-lg text-gray-700 mb-4">
                  Our Orange County locations have received a total of{" "}
                  <strong className="text-3xl font-bold text-red-700 block my-3">12,599</strong>{" "}
                  Positive Reviews!
                </p>
                <div className="flex justify-center items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-3xl text-yellow-500">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-gray-600 font-semibold">
                  Average Rating: <span className="text-red-700">4.8/5</span> Stars
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Imaging Centers CTA */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-8">
            OUR IMAGING CENTERS
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            We have multiple state-of-the-art imaging centers throughout Orange County.
          </p>
          <button className="px-8 py-4 bg-red-700 hover:bg-red-800 text-white font-bold rounded-lg transition flex items-center justify-center gap-2 mx-auto text-lg shadow-lg hover:shadow-xl">
            <MapPin className="w-5 h-5" />
            Find a Location Near You
          </button>
        </div>
      </section>

      <Footer />
    </div>
  );
}
