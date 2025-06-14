import React from 'react';
import {
  MapPin,
  Database,
  Users,
  Monitor,
  BarChart3,
  Map,
  Layers,
  Target,
  Smartphone,
  Camera,
  CloudSun,
  Search,
  Download,
  Globe,
  Zap,
  Shield,
  ChevronRight,
  MapPinned,
  Building2,
  FileText,
  Eye,
  Play,
} from 'lucide-react';

function App() {
  const mainFeatures = [
    {
      icon: <MapPin className="w-8 h-8" />,
      title: 'Cek Informasi Tata Ruang',
      description:
        'Berbasis Geolocation, NIB, & Koordinat untuk akses informasi yang akurat dan real-time',
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: 'Geodatabase Online PUPR',
      description:
        'Database terpusat untuk Tematik IGT Tata Ruang Kabupaten Tabanan',
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Media Sosialisasi Publik',
      description:
        'Platform komunikasi untuk Penataan Ruang Kabupaten Tabanan ke masyarakat',
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: 'User Friendly Interface',
      description:
        'Digunakan dengan mudah via Desktop & Mobile dengan antarmuka yang intuitif',
    },
    {
      icon: <BarChart3 className="w-8 h-8" />,
      title: 'DSS Tool Analytics',
      description:
        'Pendukung Pengambilan Keputusan dalam analisis spasial bidang tata ruang',
    },
  ];

  const detailedFeatures = [
    {
      category: 'Visualisasi Peta',
      icon: <Map className="w-6 h-6" />,
      features: [
        'Peta interaktif berbasis Mapbox GL JS',
        'Tampilan peta 2D dan 3D (toggle mode)',
        'Kontrol zoom level 9-19',
        'Multiple basemap options',
      ],
    },
    {
      category: 'Manajemen Layer',
      icon: <Layers className="w-6 h-6" />,
      features: [
        'Layer dari GeoServer (WMS)',
        'Kontrol visibilitas layer',
        'Pengaturan transparansi/opasitas',
        'Cache tile untuk performa optimal',
      ],
    },
    {
      category: 'Informasi Tata Ruang',
      icon: <Building2 className="w-6 h-6" />,
      features: [
        'Data RDTR Perkotaan & Kecamatan',
        'Data RTRW Tabanan',
        'Informasi zona dan sub-zona',
        'Informasi Kegiatan Pemanfaatan Ruang',
      ],
    },
    {
      category: 'Interaksi Peta',
      icon: <Target className="w-6 h-6" />,
      features: [
        'Klik untuk informasi detail lokasi',
        'Pencarian dan identifikasi persil',
        'Highlight fitur yang dipilih',
        'Sidebar informasi detail',
      ],
    },
    {
      category: 'Informasi Spasial',
      icon: <Globe className="w-6 h-6" />,
      features: [
        'Panel informasi RDTR/RTRW',
        'Konversi kode zona otomatis',
        'Format data user-friendly',
        'Koordinat geografis akurat',
      ],
    },
    {
      category: 'Fitur Tambahan',
      icon: <Zap className="w-6 h-6" />,
      features: [
        'Screenshot dan download peta',
        'Pengelolaan dokumen terkait',
        'Informasi cuaca lokal',
        'Panel pencarian advanced',
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              {/* Logo Kabupaten Tabanan */}
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/7d/Lambang_Kabupaten_Tabanan.png"
                alt="Lambang Kabupaten Tabanan"
                className="w-10 h-10 object-contain"
              />

              {/* Ikon Map */}
              <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-lg">
                <MapPinned className="w-4 h-4 text-white" />
              </div>

              {/* Text */}
              <div>
                <h1 className="text-2xl font-bold text-gray-900">SIPINTAR</h1>
                <p className="text-sm text-gray-600">Kabupaten Tabanan</p>
              </div>
            </div>

            <nav className="hidden md:flex space-x-8">
              <a
                href="#features"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Fitur
              </a>
              <a
                href="#preview"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Preview
              </a>
              <a
                href="#capabilities"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Kemampuan
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-red-600 transition-colors"
              >
                Tentang
              </a>
            </nav>
            <a href="http://tabanan.geomap.my.id:8833/">
  <button className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors">
    Akses Aplikasi
  </button>
</a>

          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-red-50 via-white to-red-50 py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full text-sm font-medium">
                  <Shield className="w-4 h-4 mr-2" />
                  Sistem Informasi Peta Tata Ruang
                </div>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  <span className="text-red-600">SIPINTAR</span>
                  <br />
                  Kabupaten Tabanan
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Peta Tata Ruang Online Kabupaten Tabanan, Bali hadir untuk
                  memberikan kemudahan kepada masyarakat dalam mengetahui
                  Rencana Kota di Kabupaten Tabanan melalui platform GIS
                  interaktif yang canggih.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <a href="http://tabanan.geomap.my.id:8833/">
                <button className="bg-red-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-700 transition-all duration-300 flex items-center justify-center group">
                  Jelajahi Peta
                  <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                </a>
                <button className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-red-600 hover:text-white transition-all duration-300">
                  Panduan Penggunaan
                </button>

              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">100%</div>
                  <div className="text-sm text-gray-600">Coverage Area</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">24/7</div>
                  <div className="text-sm text-gray-600">Available Online</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-red-600">GIS</div>
                  <div className="text-sm text-gray-600">
                    Interactive System
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8 shadow-2xl">
                <div className="bg-white rounded-2xl p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Peta Interaktif Tabanan
                    </h3>
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                      Live
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg h-48 flex items-center justify-center">
                    <img
                      src="/preview-app.png"
                      alt="SIPINTAR Desktop Interface"
                      className="w-full h-auto"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <div className="bg-red-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-red-800">
                        RDTR Aktif
                      </div>
                      <div className="text-xs text-red-600">2 Kecamatan</div>
                    </div>
                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="text-sm font-medium text-blue-800">
                        RTRW Data
                      </div>
                      <div className="text-xs text-blue-600">
                        Perda 3 Tahun 2023
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-full p-4 shadow-lg">
                <Smartphone className="w-6 h-6 text-red-600" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-full p-4 shadow-lg">
                <Globe className="w-6 h-6 text-red-600" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bali Heritage Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-30"
          style={{
            backgroundImage: `url('https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
          }}
        ></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl lg:text-5xl font-bold">
                Keindahan <span className="text-red-200">Tabanan, Bali</span>
              </h2>
              <p className="text-xl text-red-100 max-w-3xl mx-auto leading-relaxed">
                Kabupaten Tabanan dengan keindahan alamnya yang memukau, kini
                hadir dengan sistem informasi tata ruang yang modern untuk
                mendukung pembangunan berkelanjutan
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">8</div>
                <div className="text-red-200">Kecamatan</div>
                <div className="text-sm text-red-100 mt-2">
                  Wilayah terpetakan lengkap
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">100%</div>
                <div className="text-red-200">Digital</div>
                <div className="text-sm text-red-100 mt-2">
                  Sistem informasi terintegrasi
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <div className="text-3xl font-bold mb-2">24/7</div>
                <div className="text-red-200">Akses</div>
                <div className="text-sm text-red-100 mt-2">
                  Layanan online berkelanjutan
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Fungsi Utama <span className="text-red-600">SIPINTAR</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lima fungsi utama yang menjadikan SIPINTAR sebagai platform GIS
              terdepan untuk perencanaan tata ruang Kabupaten Tabanan
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {mainFeatures.map((feature, index) => (
              <div
                key={index}
                className="group bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200"
              >
                <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-xl p-3 w-fit mb-6 group-hover:scale-110 transition-transform duration-300">
                  <div className="text-white">{feature.icon}</div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Preview Section */}
      <section
        id="preview"
        className="py-20 bg-gradient-to-br from-gray-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Preview <span className="text-red-600">Aplikasi SIPINTAR</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Lihat tampilan antarmuka aplikasi SIPINTAR yang user-friendly dan
              mudah digunakan untuk mengakses informasi tata ruang
            </p>
          </div>

          <div className="space-y-12">
            {/* Desktop Preview */}
            <div className="bg-white rounded-3xl p-8 shadow-2xl">
              <div className="flex items-center justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <Monitor className="w-6 h-6 text-red-600" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Tampilan Desktop
                  </h3>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
              </div>

              <div className="relative bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/preview-app.png"
                  alt="SIPINTAR Desktop Interface"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          Interface Peta Interaktif
                        </h4>
                        <p className="text-sm text-gray-600">
                          Akses informasi persil dan tata ruang dengan mudah
                        </p>
                      </div>
                      <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center">
                        <Play className="w-4 h-4 mr-2" />
                        Demo
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-red-100 rounded-lg p-3 w-fit mb-4">
                  <Search className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Pencarian Lokasi
                </h4>
                <p className="text-sm text-gray-600">
                  Cari berdasarkan koordinat, NIB, atau nama lokasi
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-red-100 rounded-lg p-3 w-fit mb-4">
                  <Layers className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Layer Management
                </h4>
                <p className="text-sm text-gray-600">
                  Kontrol visibilitas dan transparansi layer peta
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-red-100 rounded-lg p-3 w-fit mb-4">
                  <FileText className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Informasi Detail
                </h4>
                <p className="text-sm text-gray-600">
                  Data lengkap RDTR dan RTRW setiap lokasi
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg">
                <div className="bg-red-100 rounded-lg p-3 w-fit mb-4">
                  <Download className="w-6 h-6 text-red-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">
                  Export Data
                </h4>
                <p className="text-sm text-gray-600">
                  Download peta dan informasi dalam berbagai format
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Detailed Capabilities Section */}
      <section id="capabilities" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
              Kemampuan <span className="text-red-600">Lengkap</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fitur-fitur canggih yang tersedia dalam aplikasi SIPINTAR untuk
              mendukung analisis spasial dan perencanaan tata ruang yang
              komprehensif
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {detailedFeatures.map((category, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-lg p-2">
                    <div className="text-white">{category.icon}</div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    {category.category}
                  </h3>
                </div>
                <ul className="space-y-3">
                  {category.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="flex items-start space-x-3"
                    >
                      <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600 leading-relaxed">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">8</div>
              <div className="text-red-200 text-lg">Kecamatan Terpetakan</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">2D/3D</div>
              <div className="text-red-200 text-lg">Visualisasi Peta</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Real-time</div>
              <div className="text-red-200 text-lg">Data Updates</div>
            </div>
            <div className="text-center">
              <div className="text-5xl font-bold mb-2">Multi</div>
              <div className="text-red-200 text-lg">Platform Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-gray-50 to-red-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                  Tentang <span className="text-red-600">SIPINTAR</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  SIPINTAR (Sistem Informasi Peta Tata Ruang) merupakan inovasi
                  digital Kabupaten Tabanan dalam menyediakan akses mudah dan
                  transparan terhadap informasi perencanaan tata ruang wilayah.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-lg p-2 mt-1">
                    <Eye className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Transparansi Informasi
                    </h3>
                    <p className="text-gray-600">
                      Memberikan akses terbuka kepada masyarakat untuk
                      mengetahui rencana tata ruang dan pembangunan wilayah
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-lg p-2 mt-1">
                    <FileText className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Basis Data Terpadu
                    </h3>
                    <p className="text-gray-600">
                      Mengintegrasikan data RDTR dan RTRW dalam satu platform
                      yang mudah diakses dan dipahami
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-red-100 rounded-lg p-2 mt-1">
                    <Zap className="w-5 h-5 text-red-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Teknologi Modern
                    </h3>
                    <p className="text-gray-600">
                      Menggunakan teknologi GIS terkini dengan antarmuka yang
                      user-friendly dan responsif
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-red-500 to-red-600 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-8 space-y-6">
                  <h3 className="text-2xl font-bold text-gray-900 text-center">
                    Akses SIPINTAR
                  </h3>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Desktop</span>
                      <Monitor className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">Mobile</span>
                      <Smartphone className="w-5 h-5 text-gray-600" />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <span className="font-medium text-gray-900">
                        Web Browser
                      </span>
                      <Globe className="w-5 h-5 text-gray-600" />
                    </div>
                  </div>
                  <a href="http://tabanan.geomap.my.id:8833/">
                  <button className="w-full bg-red-600 text-white py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors">
                    Mulai Menggunakan SIPINTAR
                  </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl lg:text-5xl font-bold">
              Siap Menjelajahi <span className="text-red-200">Tata Ruang</span>{' '}
              Tabanan?
            </h2>
            <p className="text-2xl text-red-100 leading-relaxed">
              Akses informasi perencanaan tata ruang Kabupaten Tabanan dengan
              mudah, cepat, dan akurat melalui SIPINTAR
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <a href="http://tabanan.geomap.my.id:8833/">
              <button className="bg-white text-red-600 px-10 py-4 rounded-lg text-xl font-bold hover:bg-red-50 transition-all duration-300 flex items-center group">
                <Map className="w-6 h-6 mr-3" />
                Buka Aplikasi SIPINTAR
                <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
              </a>
              <button className="border-2 border-white text-white px-10 py-4 rounded-lg text-xl font-bold hover:bg-white hover:text-red-600 transition-all duration-300 flex items-center">
                <Download className="w-6 h-6 mr-3" />
                Download Panduan
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-gradient-to-br from-red-500 to-red-600 p-2 rounded-lg">
                  <MapPinned className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">SIPINTAR</h3>
                  <p className="text-gray-400">Kabupaten Tabanan</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed">
                Sistem Informasi Peta Tata Ruang Online untuk kemudahan akses
                informasi perencanaan wilayah Kabupaten Tabanan.
              </p>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Fitur Utama</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Peta Interaktif</li>
                <li>Data RDTR & RTRW</li>
                <li>Informasi Spasial</li>
                <li>Analisis GIS</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Akses</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Desktop & Mobile</li>
                <li>Web Browser</li>
                <li>24/7 Online</li>
                <li>Real-time Data</li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-lg font-semibold">Kontak</h4>
              <div className="space-y-2 text-gray-400">
                <p>
                  Dinas Pekerjaan Umum, Penataan Ruang, Perumahan dan Kawasan
                  Permukiman (PUPRPKP)
                </p>
                <p>
                  Jl. Arjuna No.2, Delod Peken, Kec. Tabanan, Kabupaten Tabanan,
                  Bali 82121
                </p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2024 SIPINTAR Kabupaten Tabanan. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Support
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
