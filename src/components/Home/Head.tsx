import { Button } from '../ui/button'
type info={
  title:string,
  description:string
}
const Head = ({title,description}:info) => {
  return (
    <div className='flex py-5 items-center justify-between' dir='rtl'>
      <div className='flex-1'>
        <h2 className='font-bold text-xl'>{title}</h2>
        <p className='text-gray-400'>{description}</p>
        </div>
        <Button className='border text-teal-400 border-[--primary]'>عرض الكل</Button>
    </div>
  )
}

export default Head
