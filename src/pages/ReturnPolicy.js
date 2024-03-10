import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react'
import React, { useState } from 'react'
import { BsPlus } from 'react-icons/bs'

const data = [
    {
        id: 0,
        name: 'What Is a Return Policy?',
    },
    {
        id: 1,
        name: 'Who Needs a Return Policy?',
    },
    {
        id: 2,
        name: 'Benefits of Having a Return and Refund Policy',
    },
    {
        id: 3,
        name: 'What Your Return Policy Should Include',
    },
    {
        id: 4,
        name: 'Where to Display Your Return Policy',
    },
    {
        id: 5,
        name: 'Tips To Make the Most of Your Return and Refund Policy',
    },
    {
        id: 6,
        name: 'Return Policy Examples',
    },
    {
        id: 7,
        name: 'Return Policy FAQ',
    },
    {
        id: 8,
        name: 'Standard Return & Refund Policy Template (Free Download)',
    },
    {
        id: 9,
        name: 'Summary',
    },
]

const ReturnPolicy = () => {
    const [open, setOpen] = useState(0);

    const handleData = (val) => {
        setOpen(open === val ? '' : val)
    }
    return (
        <div>
            <div className='bg-[#fff] md:p-[50px] p-5'>
                <div className='max-w-[940px] w-full mx-auto'>
                    <h3 className='text-center md:text-[30px] text-[16px] font-semibold mb-5'>Return Policy</h3>
                    <div className=' mt-3 flex flex-col gap-5'>
                        {data.map((val, i) =>
                            <Accordion key={i} open={open === val.id}>
                                <AccordionHeader onClick={() => handleData(val.id)} className='focus:outline-none acc-header flex items-center justify-between w-full sm:text-base text-sm py-2'>
                                    <div>{val.name}</div>
                                    <BsPlus className='text-[22px]' />
                                </AccordionHeader>
                                <AccordionBody className="py-2">
                                    <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae delectus, non iure eveniet, harum quaerat ab, quia eos dolorum consequuntur quis amet placeat. Sunt.
                                    </p>
                                </AccordionBody>
                            </Accordion>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ReturnPolicy