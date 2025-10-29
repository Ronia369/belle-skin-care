"use client";
import Header from "@/component/Hedear";
import React from "react";

function Page() {
  return (
    <div className="bg-[#EDE8FF] min-h-screen font-[Vazir] text-gray-800">
      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="w-[90%] max-w-6xl h-auto md:h-[500px] bg-white mt-16 mx-auto rounded-3xl shadow-2xl flex flex-col md:flex-row items-center justify-between p-8">
        {/* متن و دکمه‌ها */}
        <div className="md:w-1/2 text-right space-y-6" dir="rtl">
          <h1 className="text-4xl md:text-5xl font-bold leading-snug text-[#1b1044]">
            به دنیای زیبایی و آرامش خوش آمدید ✨
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed">
            در کلینیک Belle با بهره‌گیری از تخصص، دانش روز و محصولات معتبر
            بین‌المللی، خدمات پاکسازی و درمانی پوست را به شکل اصولی و تخصصی
            ارائه می‌دهیم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-3 bg-gradient-to-r from-[#1b1044] to-[#050db7] text-white font-bold rounded-full shadow-lg hover:scale-105 hover:shadow-xl transition-transform">
              ثبت وقت
            </button>
            <a href="#card">
              <button className="px-8 py-3 bg-gray-100 text-gray-800 font-bold rounded-full shadow-md hover:bg-gray-200 transition">
                مشاهده خدمات
              </button>
            </a>
          </div>
        </div>

        {/* تصویر */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center">
          <video
            src="video.MOV"
            className="w-full max-w-[450px] h-[350px] object-cover rounded-2xl shadow-xl"
            controls
          />
        </div>
      </section>

      {/* توضیحات */}
      <section className="w-[90%] max-w-6xl mx-auto mt-20 text-center py-16 md:py-24">
        <h2 className="text-3xl md:text-4xl font-bold mb-10 text-[#1b1044]">
          Belle، ترکیبی از تخصص، آرامش و زیبایی
        </h2>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* متن توضیحات */}
          <div className="md:w-1/2 text-right text-lg text-gray-700 space-y-6 leading-relaxed">
            <p>
              در کلینیک Belle با بهره‌گیری از تخصص، دانش روز و محصولات معتبر
              بین‌المللی، خدمات پاکسازی و درمانی پوست را به شکل اصولی و تخصصی
              ارائه می‌دهیم.
            </p>
            <p>
              خدمات ما شامل جوان‌سازی پوست، رفع چربی و خشکی، آبرسانی و درمان‌های
              تخصصی دیگر است. هدف ما سلامت و زیبایی پوست شماست.
            </p>
          </div>

          {/* ویدیو */}
          <div className="md:w-1/2 flex justify-center">
            <video
              src="/video of office.mp4"
              controls
              className="w-full max-w-[400px] h-[250px] md:h-[350px] rounded-2xl shadow-lg object-cover"
            />
          </div>
        </div>
      </section>

      {/* Cards Section */}
      <section
        id="card"
        className="w-[90%] max-w-6xl mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 pb-16"
      >
        {[
          { img: "Dsv-line.jpeg", title: "جوانسازی" },
          { img: "rafe charbi.JPG", title: "رفع چربی پوست و قابض منافذ" },
          { img: "rafe khoshki.JPG", title: "رفع خشکی پوست" },
          { img: "rafe kederi.jpg", title: "رفع کدری پوست" },
          { img: "abresanie poost.JPG", title: "آبرسانی پوست" },
          { img: "massage.JPG", title: "پکیج پایه همراه با ماساژ تخصصی" },
          { img: "polaghen.JPG", title: "پلاژن تراپی" },
          { img: "lifting.jpg", title: "لیفتینگ" },
          { img: "rafe jush.JPG", title: "رفع جوش" },
        ].map((card, i) => (
          <div
            key={i}
            className="bg-white rounded-3xl shadow-lg hover:scale-105 hover:shadow-2xl transition-transform duration-300"
          >
            <img
              src={card.img}
              alt={card.title}
              className="w-full h-48 rounded-t-3xl object-cover"
            />
            <p className="text-xl font-bold text-center mt-4 text-[#1b1044]">
              {card.title}
            </p>
            <button className="block mx-auto my-6 px-8 py-2 bg-gradient-to-r from-[#1b1044] to-[#050db7] text-white rounded-full hover:px-10 transition-all">
              ثبت درخواست
            </button>
          </div>
        ))}
      </section>

    {/* پکیج ها */}
    <h2 className="text-6xl text-black text-center mb-8">پکیج ها</h2>

    <div className="grid gap-10 justify-items-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 text-white">

      <div className="bg-[#57A9FF] w-[300px] h-[300px] rounded-3xl hover:scale-105 transition-transform">
        <div className="bg-[#84C0FF] w-[240px] h-[300px] rounded-2xl mx-auto">
          <div className="bg-white w-[240px] h-[130px] rounded-b-full">
            <img src="key.png" alt="blue key" className="w-[100px] mx-auto"/>
          </div>
          <p className="text-xl text-center mt-2">پک درمان جوش و کنترل چربی پوست (4 جلسه)</p>
          {/* <p className="text-4xl text-center mt-6">6,740,800</p> */}
          <p className="text-sm text-center mt-[10px] font-bold">دو جلسه رفع چربی پوست و رفع جوش</p>
        </div>
      </div>

      <div className="bg-[#7756FF] w-[350px] h-[350px] rounded-3xl hover:scale-105 transition-transform">
        <div className="bg-[#9377FF] w-[280px] h-[350px] rounded-2xl mx-auto">
          <div className="bg-white w-[280px] h-[150px] rounded-b-full">
            <img src="taj.png" alt="" className="w-[200px] mx-auto"/>
          </div>
          <p className="text-xl text-center mt-2"> <strong>پکیج لاکچری فشیال  (6 جلسه VIP)</strong></p>
          {/* <p className="text-4xl text-center mt-6">12,848,000</p> */}
          <p className="text-sm text-center mt-10 font-bold">
            یک جلسه آبرسانی، رفع کدری، لیفتینگ، جوانسازی و دو جلسه پکیج پایه همراه با ماساژ تخصصی
          </p>
        </div>
      </div>

  <div className="bg-[#57A9FF] w-[300px] h-[300px] rounded-3xl hover:scale-105 transition-transform">
    <div className="bg-[#84C0FF] w-[240px] h-[300px] rounded-2xl mx-auto">
      <div className="bg-white w-[240px] h-[130px] rounded-b-full">
        <img src="cloud.png" alt="blue cloud" className="w-[150px] mx-auto"/>
      </div>
      <p className="text-xl text-center mt-2">پک جوانسازی و آبرسانی (5 جلسه)</p>
      {/* <p className="text-4xl text-center mt-6">10,392,800</p> */}
      <p className="text-sm text-center mt-6 font-bold">
        دو جلسه آبرسانی پوست، یک جلسه جوانسازی، لیفتینگ، پکیج پایه همراه با ماساژ تخصصی
      </p>
    </div>
  </div>

</div>


      {/* Footer */}
      <footer className="w-full bg-[#1b1044] text-white py-12 mt-20">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center md:text-right">
          <div>
            <h3 className="text-xl font-bold mb-3">آدرس</h3>
            <p>تهران، چهار راه فرمانیه، ساختمان آسمان فرمانیه</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">تماس با ما</h3>
            <a href="tel: +989380619131">
              <p>📞 09380619131</p>
            </a>
            <a href="tel: +989011165717">
              <p>📞 09011165717</p>
            </a>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-3">ما را دنبال کنید</h3>
            <div className="flex justify-center md:justify-start gap-6 mt-4">
              <a
                href="https://www.instagram.com/belleskincare90"
                target="blank"
              >
                <img
                  src="instagram.png"
                  alt="instagram"
                  className="w-8 cursor-pointer hover:opacity-80 ml-55"
                />
              </a>
              <a href="https://www.t.me/belleskincare90" target="blank">
                <img
                  src="telegram.png"
                  alt="telegram"
                  className="w-8 cursor-pointer hover:opacity-80"
                />
              </a>
              <a href="https://www.t.me/belleskincare390" target="blank">
                <img
                  src="telegram-64.png"
                  alt="telegram"
                  className="w-8 cursor-pointer hover:opacity-80"
                />
              </a>
            </div>
          </div>
        </div>
        <p className="text-center mt-10 text-gray-300">
          © 2025 Belle SkinCare. همه حقوق محفوظ است.
        </p>
      </footer>
    </div>
  );
}
export default Page;
