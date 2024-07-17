import React from 'react'
import Head from './Head'

const Client = () => {
  return (
    <div className='py-5'>
      <Head title="اراء العملاء" description="بيتم استعراض بعض آراء وتعليقات المستخدمين" />
      <div className='flex flex-col md:flex-row gap-5'>
        <div className='rounded border flex flex-col p-5 font-bold gap-5'>
          <div className="header flex justify-between items-center">
            <div className="qoute">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6582_1153)">
                  <path d="M0.00680363 22.2073C0.00680363 26.4144 3.41715 29.8247 7.62422 29.8247C11.8314 29.8247 15.2417 26.4144 15.2417 22.2073C15.2417 18.0001 11.8314 14.5898 7.62422 14.5898C6.7596 14.5898 5.93196 14.7406 5.15716 15.0062C6.87141 5.17453 14.5382 -1.16578 7.4311 4.05242C-0.449598 9.83881 -0.00163658 21.9745 0.00718155 22.1969C0.00718155 22.2003 0.00680363 22.2034 0.00680363 22.2073Z" fill="#EEEEEE" />
                  <path d="M16.7646 22.2073C16.7646 26.4144 20.175 29.8247 24.3821 29.8247C28.5892 29.8247 31.9996 26.4144 31.9996 22.2073C31.9996 18.0001 28.5892 14.5898 24.3821 14.5898C23.5174 14.5898 22.6898 14.7406 21.915 15.0062C23.6292 5.17453 31.296 -1.16578 24.1889 4.05242C16.3082 9.83881 16.7561 21.9745 16.765 22.1969C16.765 22.2003 16.7646 22.2034 16.7646 22.2073Z" fill="#EEEEEE" />
                </g>
                <defs>
                  <clipPath id="clip0_6582_1153">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="stars flex gap-2">
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
            </div>
          </div>
          <p className='text-gray-400' dir='rtl'>استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً</p>
          <div className="footer flex gap-2 items-center" dir='rtl'>
            <div className="logo overflow-hidden flex justify-center items-center w-[60px] h-[60px] rounded-[50%]">
              <img className='h-[100%]' src="../../src/assets/images/Home/6.jfif" alt="" />
            </div>
            <div>
              <h2>محمد السيد</h2>
              <p className='text-gray-400'>مهندس إستشارى لدى شركة سلة</p>
            </div>
          </div>
        </div>
        <div className='rounded border flex flex-col p-5 font-bold gap-5'>
          <div className="header flex justify-between items-center">
            <div className="qoute">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6582_1153)">
                  <path d="M0.00680363 22.2073C0.00680363 26.4144 3.41715 29.8247 7.62422 29.8247C11.8314 29.8247 15.2417 26.4144 15.2417 22.2073C15.2417 18.0001 11.8314 14.5898 7.62422 14.5898C6.7596 14.5898 5.93196 14.7406 5.15716 15.0062C6.87141 5.17453 14.5382 -1.16578 7.4311 4.05242C-0.449598 9.83881 -0.00163658 21.9745 0.00718155 22.1969C0.00718155 22.2003 0.00680363 22.2034 0.00680363 22.2073Z" fill="#EEEEEE" />
                  <path d="M16.7646 22.2073C16.7646 26.4144 20.175 29.8247 24.3821 29.8247C28.5892 29.8247 31.9996 26.4144 31.9996 22.2073C31.9996 18.0001 28.5892 14.5898 24.3821 14.5898C23.5174 14.5898 22.6898 14.7406 21.915 15.0062C23.6292 5.17453 31.296 -1.16578 24.1889 4.05242C16.3082 9.83881 16.7561 21.9745 16.765 22.1969C16.765 22.2003 16.7646 22.2034 16.7646 22.2073Z" fill="#EEEEEE" />
                </g>
                <defs>
                  <clipPath id="clip0_6582_1153">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="stars flex gap-2">
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
            </div>
          </div>
          <p className='text-gray-400' dir='rtl'>استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً</p>
          <div className="footer flex gap-2 items-center" dir='rtl'>
            <div className="logo overflow-hidden flex justify-center items-center w-[60px] h-[60px] rounded-[50%]">
              <img className='h-[100%]' src="../../src/assets/images/Home/6.jfif" alt="" />
            </div>
            <div>
              <h2>محمد السيد</h2>
              <p className='text-gray-400'>مهندس إستشارى لدى شركة سلة</p>
            </div>
          </div>
        </div>
        <div className='rounded border flex flex-col p-5 font-bold gap-5'>
          <div className="header flex justify-between items-center">
            <div className="qoute">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_6582_1153)">
                  <path d="M0.00680363 22.2073C0.00680363 26.4144 3.41715 29.8247 7.62422 29.8247C11.8314 29.8247 15.2417 26.4144 15.2417 22.2073C15.2417 18.0001 11.8314 14.5898 7.62422 14.5898C6.7596 14.5898 5.93196 14.7406 5.15716 15.0062C6.87141 5.17453 14.5382 -1.16578 7.4311 4.05242C-0.449598 9.83881 -0.00163658 21.9745 0.00718155 22.1969C0.00718155 22.2003 0.00680363 22.2034 0.00680363 22.2073Z" fill="#EEEEEE" />
                  <path d="M16.7646 22.2073C16.7646 26.4144 20.175 29.8247 24.3821 29.8247C28.5892 29.8247 31.9996 26.4144 31.9996 22.2073C31.9996 18.0001 28.5892 14.5898 24.3821 14.5898C23.5174 14.5898 22.6898 14.7406 21.915 15.0062C23.6292 5.17453 31.296 -1.16578 24.1889 4.05242C16.3082 9.83881 16.7561 21.9745 16.765 22.1969C16.765 22.2003 16.7646 22.2034 16.7646 22.2073Z" fill="#EEEEEE" />
                </g>
                <defs>
                  <clipPath id="clip0_6582_1153">
                    <rect width="32" height="32" fill="white" />
                  </clipPath>
                </defs>
              </svg>
            </div>
            <div className="stars flex gap-2">
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
              <i className="text-[#FFC62A] fa-solid fa-star"></i>
            </div>
          </div>
          <p className='text-gray-400' dir='rtl'>استخدمنا سلة قبل أربع سنوات ثم غادرناها قبل أن يكون فيها خيارات ترقية مدفوعة، خسرنا مبالغ كبيرة جدا في عمل متجر وتعبنا جدا في التعامل مع المبرمجين . ثم عدنا لمنصة سلة ووجدنا تطورا هائلاً وعملا مميزاً</p>
          <div className="footer flex gap-2 items-center" dir='rtl'>
            <div className="logo overflow-hidden flex justify-center items-center w-[60px] h-[60px] rounded-[50%]">
              <img className='h-[100%]' src="../../src/assets/images/Home/6.jfif" alt="" />
            </div>
            <div>
              <h2>محمد السيد</h2>
              <p className='text-gray-400'>مهندس إستشارى لدى شركة سلة</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Client
