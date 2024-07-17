import React from 'react'
import Head from './Head'
import { Button } from "../ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "../ui/card";
const Offers = () => {
  return (
    <div className='py-5'>
      <Head title="عروض تنتهى قريبا" description='تسوق احدث المنتجات المميزة المضافة جديد' />
      <div className='flex flex-col sm:flex-row gap-3'>
        <div className="relative flex-1">
          <span className="new bg-[--primary] relative top-[60px] left-[17%] md:left-[65%] lg:left-[calc(100%-212px)] text-white p-2 z-[1]">جديد</span>
          <Card className='flex flex-col-reverse md:flex-row border justify-end w-[100%] overflow-hidden'>
            <div className="w-[100%] max-w-[100%]">
              <CardContent dir="rtl" className="p-[--spacing-lg] md:p-[--spacing-xl]">
                <div className="grid w-full items-center gap-[2px] sm:gap-[4px]">
                  <div className="text-[--primary] space-y-1.5 text-[14px]">
                    موبايلات
                  </div>
                  <div className="space-y-1.5 font-bold text-gray-600 text-[18px]">
                    موبايل ابل ايفون 14 (128 جيجابايت)
                  </div>
                  <div className="space-y-1.5 text-gray-400 text-[--spacing-xl]">
                    شاشة سوبر ريتينا XDR مقاس 6.1 بوصة
                  </div>
                  <div className="space-y-1.5 text-[14px] text-gray-300">
                    <i className="text-[#FFC62A] fa-solid fa-star"></i>
                    <i className="text-[#FFC62A] fa-solid fa-star"></i>
                    <i className="text-[#FFC62A] fa-solid fa-star"></i>
                    <i className="text-[#FFC62A] fa-solid fa-star"></i>
                    <i className="text-[#FFC62A] fa-solid fa-star"></i>
                  </div>
                  <div className="flex space-y-1.5 gap-3 font-bold text-[14px] text-[#F55157]">
                    250.00 رس <del className="font-normal text-gray-300">350.00 ر.س</del>
                  </div>
                  <div className='flex gap-2 font-bold mt-3'>
                    <div className="flex-1 flex py-1 flex-col justify-center items-center bg-gray-50">
                      <h2>02</h2>
                      <p className='text-gray-300'>يوم</p>
                    </div>
                    <div className="flex-1 flex py-1 flex-col justify-center items-center bg-gray-50">
                      <h2>16</h2>
                      <p className='text-gray-300'>ساعة</p>
                    </div>
                    <div className="flex-1 flex py-1 flex-col justify-center items-center bg-gray-50">
                      <h2>55</h2>
                      <p className='text-gray-300'>دقيقة</p>
                    </div>
                    <div className="flex-1 flex py-1 flex-col justify-center items-center bg-gray-50">
                      <h2>55</h2>
                      <p className='text-gray-300'>يوم</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter dir="rtl" className="flex justify-center items-stretch gap-2 w-[100%]">
                <Button dir="rtl" className="font-bold flex hover:bg-[--primary] hover:text-white gap-2 bg-transparent font-bold text-gray-600 w-[100%] border-2 border-gray-100">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.04229 4.56223C4.03235 4.45222 4.04543 4.34134 4.08071 4.23666C4.11599 4.13198 4.17269 4.03579 4.24719 3.95423C4.32169 3.87268 4.41237 3.80753 4.51344 3.76295C4.61451 3.71837 4.72376 3.69534 4.83422 3.69531H14.476C14.5951 3.69536 14.7127 3.72215 14.82 3.77371C14.9274 3.82527 15.0218 3.90027 15.0962 3.99319C15.1707 4.0861 15.2234 4.19456 15.2504 4.31055C15.2773 4.42654 15.2779 4.54711 15.2521 4.66336L14.4374 8.33556C14.2972 8.96662 13.946 9.53101 13.4418 9.93549C12.9375 10.34 12.3104 10.5604 11.6639 10.5602H7.17934C6.47022 10.5603 5.78673 10.2951 5.26321 9.81677C4.7397 9.33845 4.41402 8.68162 4.3502 7.97538L4.04229 4.56223ZM5.2069 4.83151L5.48186 7.87312C5.52017 8.29706 5.71573 8.69132 6.03008 8.97834C6.34443 9.26535 6.75481 9.42435 7.18048 9.42404H11.6651C12.0528 9.42394 12.429 9.29161 12.7314 9.04889C13.0338 8.80617 13.2444 8.46757 13.3285 8.089L14.0522 4.83151H5.2069Z" fill="#333333" />
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1.69141 1.78685C1.69141 1.63618 1.75126 1.49168 1.8578 1.38514C1.96434 1.2786 2.10884 1.21875 2.25951 1.21875H4.2524C4.39137 1.21889 4.52546 1.26996 4.62931 1.36229C4.73316 1.45463 4.79956 1.58182 4.81596 1.71981L5.27271 5.58403C5.29034 5.7338 5.24775 5.88443 5.15432 6.0028C5.06088 6.12117 4.92425 6.19757 4.77449 6.21519C4.62472 6.23282 4.47409 6.19023 4.35572 6.0968C4.23736 6.00336 4.16096 5.86674 4.14333 5.71697L3.74679 2.35381H2.25951C2.10884 2.35381 1.96434 2.29396 1.8578 2.18742C1.75126 2.08088 1.69141 1.93752 1.69141 1.78685ZM6.80431 13.5272C6.95498 13.5272 7.09948 13.4674 7.20602 13.3608C7.31256 13.2543 7.37241 13.1098 7.37241 12.9591C7.37241 12.8084 7.31256 12.6639 7.20602 12.5574C7.09948 12.4509 6.95498 12.391 6.80431 12.391C6.65364 12.391 6.50914 12.4509 6.4026 12.5574C6.29606 12.6639 6.23621 12.8084 6.23621 12.9591C6.23621 13.1098 6.29606 13.2543 6.4026 13.3608C6.50914 13.4674 6.65364 13.5272 6.80431 13.5272ZM6.80431 14.6634C7.02812 14.6634 7.24974 14.6193 7.45652 14.5337C7.66329 14.448 7.85118 14.3225 8.00943 14.1642C8.16769 14.006 8.29323 13.8181 8.37888 13.6113C8.46453 13.4045 8.50861 13.1829 8.50861 12.9591C8.50861 12.7353 8.46453 12.5137 8.37888 12.3069C8.29323 12.1001 8.16769 11.9123 8.00943 11.754C7.85118 11.5957 7.66329 11.4702 7.45652 11.3845C7.24974 11.2989 7.02812 11.2548 6.80431 11.2548C6.3523 11.2548 5.91881 11.4344 5.59919 11.754C5.27957 12.0736 5.10001 12.5071 5.10001 12.9591C5.10001 13.4111 5.27957 13.8446 5.59919 14.1642C5.91881 14.4839 6.3523 14.6634 6.80431 14.6634ZM11.9877 13.5272C12.1383 13.5272 12.2828 13.4674 12.3894 13.3608C12.4959 13.2543 12.5558 13.1098 12.5558 12.9591C12.5558 12.8084 12.4959 12.6639 12.3894 12.5574C12.2828 12.4509 12.1383 12.391 11.9877 12.391C11.837 12.391 11.6925 12.4509 11.586 12.5574C11.4794 12.6639 11.4196 12.8084 11.4196 12.9591C11.4196 13.1098 11.4794 13.2543 11.586 13.3608C11.6925 13.4674 11.837 13.5272 11.9877 13.5272ZM11.9877 14.6634C12.2115 14.6634 12.4331 14.6193 12.6399 14.5337C12.8466 14.448 13.0345 14.3225 13.1928 14.1642C13.351 14.006 13.4766 13.8181 13.5622 13.6113C13.6479 13.4045 13.692 13.1829 13.692 12.9591C13.692 12.7353 13.6479 12.5137 13.5622 12.3069C13.4766 12.1001 13.351 11.9123 13.1928 11.754C13.0345 11.5957 12.8466 11.4702 12.6399 11.3845C12.4331 11.2989 12.2115 11.2548 11.9877 11.2548C11.5357 11.2548 11.1022 11.4344 10.7825 11.754C10.4629 12.0736 10.2834 12.5071 10.2834 12.9591C10.2834 13.4111 10.4629 13.8446 10.7825 14.1642C11.1022 14.4839 11.5357 14.6634 11.9877 14.6634Z" fill="#333333" />
                  </svg>
                  أضف للسلة</Button>
                <div className="border-2 p-2 hover:bg-[--primary] hover:text-white text-gray-400 flex items-center justify-center rounded-[5px]">
                  <i className="fa-regular fa-heart"></i>
                </div>
              </CardFooter>
            </div>
            <div className="w-[auto] w-[235px] flex justify-center items-center relative">
              <img className="w-[118px] lg:h-[100%] lg:w-[235px] max-w-none overflow-hidden" src="../../src/assets/images/Home/11.jfif" alt="" />
            </div>
          </Card>
        </div>
        <div className="relative flex-1">
          <span className="new bg-[--primary] relative top-[60px] left-[17%] md:left-[65%] lg:left-[calc(100%-212px)] text-white p-2 z-[1]">جديد</span>
          <Card className='flex flex-col-reverse md:flex-row border justify-end w-[100%] overflow-hidden'>
            <div className="w-[100%] max-w-[100%]">
              <CardContent dir="rtl" className="p-[--spacing-lg] md:p-[--spacing-xl]">
                <div className="grid w-full items-center gap-[2px] sm:gap-[4px]">
                  <div className="text-[--primary] space-y-1.5 text-[14px]">
                    موبايلات
                  </div>
                  <div className="space-y-1.5 font-bold text-gray-600 text-[18px]">
                    موبايل ابل ايفون 14 (128 جيجابايت)
                  </div>
                  <div className="space-y-1.5 text-gray-400 text-[--spacing-xl]">
                    شاشة سوبر ريتينا XDR مقاس 6.1 بوصة
                  </div>
                  <div className="space-y-1.5 text-[14px] text-gray-300">
                    <i className="text-[#FFC62A] fa-solid fa-star"></i>
                    <i className="text-[#FFC62A] fa-solid fa-star"></i>
                    <i className="text-[#FFC62A] fa-solid fa-star"></i>
                    <i className="text-[#FFC62A] fa-solid fa-star"></i>
                    <i className="text-[#FFC62A] fa-solid fa-star"></i>
                  </div>
                  <div className="flex space-y-1.5 gap-3 font-bold text-[14px] text-[#F55157]">
                    250.00 رس <del className="font-normal text-gray-300">350.00 ر.س</del>
                  </div>
                  <div className='flex gap-2 font-bold mt-3'>
                    <div className="flex-1 flex py-1 flex-col justify-center items-center bg-gray-50">
                      <h2>02</h2>
                      <p className='text-gray-300'>يوم</p>
                    </div>
                    <div className="flex-1 flex py-1 flex-col justify-center items-center bg-gray-50">
                      <h2>16</h2>
                      <p className='text-gray-300'>ساعة</p>
                    </div>
                    <div className="flex-1 flex py-1 flex-col justify-center items-center bg-gray-50">
                      <h2>55</h2>
                      <p className='text-gray-300'>دقيقة</p>
                    </div>
                    <div className="flex-1 flex py-1 flex-col justify-center items-center bg-gray-50">
                      <h2>55</h2>
                      <p className='text-gray-300'>يوم</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter dir="rtl" className="flex justify-center items-stretch gap-2 w-[100%]">
                <Button dir="rtl" className="font-bold flex hover:bg-[--primary] hover:text-white gap-2 bg-transparent font-bold text-gray-600 w-[100%] border-2 border-gray-100"><svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.04229 4.56223C4.03235 4.45222 4.04543 4.34134 4.08071 4.23666C4.11599 4.13198 4.17269 4.03579 4.24719 3.95423C4.32169 3.87268 4.41237 3.80753 4.51344 3.76295C4.61451 3.71837 4.72376 3.69534 4.83422 3.69531H14.476C14.5951 3.69536 14.7127 3.72215 14.82 3.77371C14.9274 3.82527 15.0218 3.90027 15.0962 3.99319C15.1707 4.0861 15.2234 4.19456 15.2504 4.31055C15.2773 4.42654 15.2779 4.54711 15.2521 4.66336L14.4374 8.33556C14.2972 8.96662 13.946 9.53101 13.4418 9.93549C12.9375 10.34 12.3104 10.5604 11.6639 10.5602H7.17934C6.47022 10.5603 5.78673 10.2951 5.26321 9.81677C4.7397 9.33845 4.41402 8.68162 4.3502 7.97538L4.04229 4.56223ZM5.2069 4.83151L5.48186 7.87312C5.52017 8.29706 5.71573 8.69132 6.03008 8.97834C6.34443 9.26535 6.75481 9.42435 7.18048 9.42404H11.6651C12.0528 9.42394 12.429 9.29161 12.7314 9.04889C13.0338 8.80617 13.2444 8.46757 13.3285 8.089L14.0522 4.83151H5.2069Z" fill="#333333" />
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M1.69141 1.78685C1.69141 1.63618 1.75126 1.49168 1.8578 1.38514C1.96434 1.2786 2.10884 1.21875 2.25951 1.21875H4.2524C4.39137 1.21889 4.52546 1.26996 4.62931 1.36229C4.73316 1.45463 4.79956 1.58182 4.81596 1.71981L5.27271 5.58403C5.29034 5.7338 5.24775 5.88443 5.15432 6.0028C5.06088 6.12117 4.92425 6.19757 4.77449 6.21519C4.62472 6.23282 4.47409 6.19023 4.35572 6.0968C4.23736 6.00336 4.16096 5.86674 4.14333 5.71697L3.74679 2.35381H2.25951C2.10884 2.35381 1.96434 2.29396 1.8578 2.18742C1.75126 2.08088 1.69141 1.93752 1.69141 1.78685ZM6.80431 13.5272C6.95498 13.5272 7.09948 13.4674 7.20602 13.3608C7.31256 13.2543 7.37241 13.1098 7.37241 12.9591C7.37241 12.8084 7.31256 12.6639 7.20602 12.5574C7.09948 12.4509 6.95498 12.391 6.80431 12.391C6.65364 12.391 6.50914 12.4509 6.4026 12.5574C6.29606 12.6639 6.23621 12.8084 6.23621 12.9591C6.23621 13.1098 6.29606 13.2543 6.4026 13.3608C6.50914 13.4674 6.65364 13.5272 6.80431 13.5272ZM6.80431 14.6634C7.02812 14.6634 7.24974 14.6193 7.45652 14.5337C7.66329 14.448 7.85118 14.3225 8.00943 14.1642C8.16769 14.006 8.29323 13.8181 8.37888 13.6113C8.46453 13.4045 8.50861 13.1829 8.50861 12.9591C8.50861 12.7353 8.46453 12.5137 8.37888 12.3069C8.29323 12.1001 8.16769 11.9123 8.00943 11.754C7.85118 11.5957 7.66329 11.4702 7.45652 11.3845C7.24974 11.2989 7.02812 11.2548 6.80431 11.2548C6.3523 11.2548 5.91881 11.4344 5.59919 11.754C5.27957 12.0736 5.10001 12.5071 5.10001 12.9591C5.10001 13.4111 5.27957 13.8446 5.59919 14.1642C5.91881 14.4839 6.3523 14.6634 6.80431 14.6634ZM11.9877 13.5272C12.1383 13.5272 12.2828 13.4674 12.3894 13.3608C12.4959 13.2543 12.5558 13.1098 12.5558 12.9591C12.5558 12.8084 12.4959 12.6639 12.3894 12.5574C12.2828 12.4509 12.1383 12.391 11.9877 12.391C11.837 12.391 11.6925 12.4509 11.586 12.5574C11.4794 12.6639 11.4196 12.8084 11.4196 12.9591C11.4196 13.1098 11.4794 13.2543 11.586 13.3608C11.6925 13.4674 11.837 13.5272 11.9877 13.5272ZM11.9877 14.6634C12.2115 14.6634 12.4331 14.6193 12.6399 14.5337C12.8466 14.448 13.0345 14.3225 13.1928 14.1642C13.351 14.006 13.4766 13.8181 13.5622 13.6113C13.6479 13.4045 13.692 13.1829 13.692 12.9591C13.692 12.7353 13.6479 12.5137 13.5622 12.3069C13.4766 12.1001 13.351 11.9123 13.1928 11.754C13.0345 11.5957 12.8466 11.4702 12.6399 11.3845C12.4331 11.2989 12.2115 11.2548 11.9877 11.2548C11.5357 11.2548 11.1022 11.4344 10.7825 11.754C10.4629 12.0736 10.2834 12.5071 10.2834 12.9591C10.2834 13.4111 10.4629 13.8446 10.7825 14.1642C11.1022 14.4839 11.5357 14.6634 11.9877 14.6634Z" fill="#333333" />
                </svg>
                  أضف للسلة</Button>
                <div className="border-2 p-2 hover:bg-[--primary] hover:text-white text-gray-400 flex items-center justify-center rounded-[5px]">
                  <i className="fa-regular fa-heart"></i>
                </div>
              </CardFooter>
            </div>
            <div className="w-[auto] w-[235px] flex justify-center items-center relative">
              <img className="w-[118px] lg:h-[100%] lg:w-[235px] max-w-none overflow-hidden" src="../../src/assets/images/Home/11.jfif" alt="" />
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Offers
