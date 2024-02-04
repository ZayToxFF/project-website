import Image from "next/image";
import Navbar from "@/components/Navbar";

export default function Contact() {
  return (
    <main className="container relative flex flex-col gap-5 px-6 md:px-6 pb-24 md:pb-24 max-h-screen max-w-full mx-auto text-base point">
      <Navbar/>
      <section className="flex flex-col sm:flex-row items-center justify-center w-full h-screen gap-2 mt-6">
            <div className="flex flex-row gap-2">
              <div className="animate-zoomIn w-32 h-64 sm:w-48 sm:h-96 rounded-3xl border border-[#232323] bg-[#1D1D1D] bg-cover  bg-center" style={{backgroundImage: "url('/image_42.png')"}}></div>
            <div className="flex flex-col gap-1">
              <div className="flex flex-row gap-1">
                <div className="animate-zoomIn w-32 h-1/2 sm:w-24 sm:h-24 rounded-3xl border border-[#232323] bg-[#1D1D1D] flex items-center justify-center">
                  <a className='text-[#B3B3B3] hover:text-white' href="">
                    <svg viewBox="0 0 72 72" width="50" height="50" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor  " stroke-width="2"><rect height="50" rx="3" stroke-miterlimit="10" width="50" x="11" y="11"/><g stroke-linecap="round" stroke-linejoin="round"><path d="m20 30h6v21h-6z"/><circle cx="23" cy="22" r="3.5"/><path d="m42.5 35c-2.209 0-4 1.168-4 4.5v11.5h-6v-21h6v2.21h-.0016a7.981 7.981 0 0 1 6.002-2.71c4.418 0 8 3.3 8 9v12.5h-6v-11.5c0-3.332-1.791-4.5-4-4.5"/></g></g></svg>                  
                  </a>
                </div>
                <div className="animate-zoomIn w-32 h-1/2 sm:w-24 sm:h-24 rounded-3xl border border-[#232323] bg-[#1D1D1D] flex items-center justify-center">
                  <a className='text-[#B3B3B3] hover:text-white' href="mailto:contact@w-f.dev">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="50"
                      height="50"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="0.8"
                      stroke-linecap="round"
                      stroke-linejoin="round">
                      <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                      <polyline points="22,6 12,13 2,6" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="animate-zoomIn w-32 h-1/2 sm:w-48 sm:h-1/2 rounded-3xl border border-[#232323] bg-[#1D1D1D] flex flex-col items-center justify-center text-center" >
                <a className='text-[#B3B3B3] hover:text-white' href="">
                  <svg fill="none" height="100" viewBox="0 0 24 24" width="100" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="m9 22h6c5 0 7-2 7-7v-6c0-5-2-7-7-7h-6c-5 0-7 2-7 7v6c0 5 2 7 7 7z" stroke-width="1.5"/><path d="m12 15.5c1.933 0 3.5-1.567 3.5-3.5s-1.567-3.5-3.5-3.5-3.5 1.567-3.5 3.5 1.567 3.5 3.5 3.5z" stroke-width="1.5"/><path d="m17.6361 7h.0116" stroke-width="2"/></g></svg>
                  Instagram
                </a>
              </div>
              <div className="animate-zoomIn w-32 h-1/2 sm:w-48 sm:h-24 rounded-3xl border border-[#232323] bg-[#1D1D1D] flex flex-col items-center justify-center text-center" >
                <a className='flex flex-row gap-1 text-xl text-[#B3B3B3] hover:text-white' href="">
                  <svg width="24" height="24" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M14.3333 19V17.137C14.3583 16.8275 14.3154 16.5163 14.2073 16.2242C14.0993 15.9321 13.9286 15.6657 13.7067 15.4428C15.8 15.2156 18 14.4431 18 10.8989C17.9998 9.99256 17.6418 9.12101 17 8.46461C17.3039 7.67171 17.2824 6.79528 16.94 6.01739C16.94 6.01739 16.1533 5.7902 14.3333 6.97811C12.8053 6.57488 11.1947 6.57488 9.66666 6.97811C7.84666 5.7902 7.05999 6.01739 7.05999 6.01739C6.71757 6.79528 6.69609 7.67171 6.99999 8.46461C6.35341 9.12588 5.99501 10.0053 5.99999 10.9183C5.99999 14.4366 8.19999 15.2091 10.2933 15.4622C10.074 15.6829 9.90483 15.9461 9.79686 16.2347C9.68889 16.5232 9.64453 16.8306 9.66666 17.137V19" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                  <path d="M9.66667 17.7018C7.66667 18.3335 6 17.7018 5 15.7544" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>Github
                </a>
              </div>
            </div>

            </div>
      </section>
    </main>
  );
}
