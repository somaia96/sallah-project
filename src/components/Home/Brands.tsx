import Head from './Head'

const Brands = () => {
  let imgs = ["oppo", "joyroom", "samsung", "oppo", "joyroom"]
  return (
    <div className='py-[--spacing-3xl]'>
      <Head title="الماركات التجارية" description='يمكنك التسوق من خلال الماركات التجارية' />
      <div className="content [filter:grayscale(1)] flex justify-between items-stretch gap-5 max-h-[100px]">
        {imgs.map((img,i) => (
          <div key={i} className='flex-1 overflow-hidden p-3 flex justify-center items-center border rounded-[5px]'>
            <img src={`../../src/assets/images/Home/${img}.png`} alt="" />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Brands
