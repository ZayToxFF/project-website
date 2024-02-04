import Image from "next/image";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <main className="container flex flex-col gap-5 px-6 md:px-6 pb-24 md:pb-0 max-h-full max-w-full mx-auto text-base point">
      <Navbar/>

      <section className="flex flex-col sm:flex-row items-center justify-center gap-2 mt-6">

          <div className="flex flex-col gap-2 items-center justify-center">
            <div className="animate-zoomIn w-64 h-64 sm:w-96 sm:h-96 rounded-3xl border border-[#232323] bg-[#1D1D1D] bg-cover bg-center" style={{backgroundImage: "url('/Main_Block.png')"}}></div>
            <div className="animate-zoomIn  w-64 h-24 sm:w-96 sm:h-48 rounded-3xl border border-[#232323] bg-[#1D1D1D] p-4 pl-5 pr-5">
              <div className="flex flex-row items-start justify-between text-sm">
                <div className="flex flex-col">
                  <h1>Adventure with Orangesoft lasting 5 years</h1>
                  <span className=" text-xs">21 projects realised 🎉</span>
                </div>
                <a className="" href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#B3B3B3" style={{ stroke: '#B3B3B3', strokeOpacity: 1 }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center gap-2">
            <div className="animate-zoomIn h-24 w-64 sm:h-48 sm:w-full rounded-3xl border border-[#232323] bg-[#1D1D1D] p-4 pl-5 pr-5">
              <div className="flex flex-row items-start justify-between text-sm">
                <div className="flex flex-col">
                <h1>My adventure lasting 10+ years</h1>
                <span className=" text-xs">21 projects realised 🎉</span>

                </div>
                <a href="">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none">
                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="#B3B3B3" style={{ stroke: '#B3B3B3', strokeOpacity: 1 }} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </a>
              </div>



            </div>

            <div className="flex flex-row gap-2">
              <div className="animate-zoomIn w-32 h-64 sm:w-48 sm:h-96 rounded-3xl border border-[#232323] bg-[#1D1D1D] bg-cover  bg-center" style={{backgroundImage: "url('/image_42.png')"}}></div>

              <div className="flex flex-col gap-1">
                <div className="animate-zoomIn w-32 h-1/2 sm:w-48 sm:h-1/2 rounded-3xl border border-[#232323] bg-[#1D1D1D]"></div>
                <div className="animate-zoomIn w-32 h-1/2 sm:w-48 sm:h-1/2 rounded-3xl border border-[#232323] bg-[#1D1D1D] bg-cover bg-center" style={{backgroundImage: "url('/Rectangle.png')"}}></div>
              </div>

            </div>

          </div>
        
      </section>
    </main>
  );
}
