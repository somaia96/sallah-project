const More = () => {
  let imgs = [34, 3, 24];
  return (
    <div className='flex flex-col gap-5 md:flex-row py-8'>
      {imgs.map((img) => (
        <div key={img} className='bg-[#FDDCDD] font-bold flex flex-1 flex-col gap-5 p-7 rounded items-center text-center text-lg'>
          <div><img src={`../../src/assets/images/Home/${img}.png`} alt="" /></div>
          <h2>معالجة أسرع وأكثر ثراءً</h2>
          <p className='text-gray-400'>أسرع من EXPEED 4 ، يعالج EXPEED 5 بسرعة 45.7 ميجابكسل من البيانات لتقليل التشويش</p>
          <span>تسوق الآن</span>
        </div>
      )
      )}
    </div>
  )
}

export default More