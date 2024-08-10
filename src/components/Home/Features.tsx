import { Fragment } from 'react/jsx-runtime'
import CardSvg from '../../assets/SVG/CardSvg'
import CarSvg from '../../assets/SVG/CarSvg'
import ChargeSvg from '../../assets/SVG/ChargeSvg'
import { Separator } from '../ui/separator'

const Features = () => {
  let features=[
    {svg:<CarSvg />,name:"منتجات مضمونه"},
    {svg:<ChargeSvg />,name:"شحن مجاني"},
    {svg:<CardSvg />,name:"مدفوعات آمنة"}
  ]
  return (
    <div className='border gap-8 rounded-[5px] justify-between flex-col md:flex-row py-8 md:p-8 flex my-9 items-center' dir='rtl'>
      {features.map((feature,i)=>(
        <Fragment key={i}>
        <div className='flex-1 flex gap-3 items-center'>
        {feature.svg}
        <div>
          <h2 className='font-bold text-xl'>{feature.name}</h2>
          <p className='text-gray-400'>مدفوعات آمنة أقساط تصل إلى 12 شهرًا</p>
        </div>
      </div>
      { i!=2 && <>
      <Separator className='hidden md:block w-[2px] h-[70px]' orientation="vertical" />
      <Separator className='md:hidden w-[100%] h-[2px]' orientation="horizontal" />
      </>}
      </Fragment>)
      )}
    </div>
  )
}

export default Features
