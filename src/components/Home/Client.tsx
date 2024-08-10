import ClientSvg from '../../assets/SVG/ClientSvg'
import Stars from '../stars/Stars'
import Head from './Head'

const Client = () => {
  return (
    <div className='py-5'>
      <Head title="اراء العملاء" description="يتم استعراض بعض آراء وتعليقات المستخدمين" />
      <div className='flex flex-col md:flex-row gap-5'>
        {Array.from({ length: 4 }).map((_,i)=>(
          <div key={i} className='rounded border flex flex-col p-5 font-bold gap-5'>
          <div className="header flex justify-between items-center">
            <div className="qoute">
              <ClientSvg/>
            </div>
            <div className="stars flex gap-2">
              <Stars star={5} />
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
        ))}
      </div>
    </div>
  )
}

export default Client
