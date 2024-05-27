import React, { useState } from 'react'
import { Accordion, AccordionBody, AccordionHeader } from '@material-tailwind/react';
import { BsPlus } from 'react-icons/bs';

const data = [
    {
        id: 0,
        name: 'How we use your information',
        Description: `
        We collect and use your information to provide you with a seamless shopping experience 
        and to improve our services. This includes:<br/>
        ● Processing your orders and managing your account.<br/>
        ● Communicating with you about your orders, account status, and customer support 
        inquiries.<br/>
        ● Personalizing your shopping experience and recommending products based on your 
        preferences and browsing history.<br/>
        ● Analyzing data to enhance our website's functionality and optimize your user 
        experience.<br/>
        ● Complying with legal obligations, including tax and accounting requirements.`,
    },
    {
        id: 1,
        name: 'Sharing information',
        Description: `
        We may share your information with trusted third parties for specific purposes, such as:<br/>
        ● Payment processing and fraud prevention.<br/>
        ● Shipping and delivery of your orders.<br/>
        ● Marketing and advertising, as described below.<br/>
        ● Legal and regulatory compliance when required by law.<br/>
        ● We will never sell your personal information to third parties.
       `,
    },
    {
        id: 2,
        name: 'Marketing messages',
        Description: `
        We may send you marketing communications if you have given us permission to do so or if 
        you have previously purchased goods or services from us. You can opt out of these 
        communications at any time by following the instructions provided in each message or by 
        updating your marketing preferences in your account settings.`,
    },
    {
        id: 3,
        name: 'July 2023 Marketing Preference Changes',
        Description: `
        As of July 2023, we have updated our marketing preferences. If you previously opted out of 
        marketing messages, your preferences will remain unchanged unless you decide to update 
        them in your account settings.`,
    },
    {
        id: 5,
        name: 'Seeing adverts for the website',
        Description: `
        We may use your information to show you targeted advertisements on third-party websites and social media platforms. These advertisements may be based on your browsing behavior on our website. You can manage your advertising preferences by adjusting your settings on these platforms.`,
    },
    {
        id: 6,
        name: 'Keeping your information',
        Description: `
        We collect and use your information to provide you with a seamless shopping experience 
        and to improve our services. This includes:
        ● Processing your orders and managing your account.
        ● Communicating with you about your orders, account status, and customer support 
        inquiries.
        ● Personalizing your shopping experience and recommending products based on your 
        preferences and browsing history.
        ● Analyzing data to enhance our website's functionality and optimize your user 
        experience.
        ● Complying with legal obligations, including tax and accounting requirements.`,
    },
    {
        id: 7,
        name: 'Your rights',
        Description: `
        We collect and use your information to provide you with a seamless shopping experience 
        and to improve our services. This includes:
        ● Processing your orders and managing your account.
        ● Communicating with you about your orders, account status, and customer support 
        inquiries.
        ● Personalizing your shopping experience and recommending products based on your 
        preferences and browsing history.
        ● Analyzing data to enhance our website's functionality and optimize your user 
        experience.
        ● Complying with legal obligations, including tax and accounting requirements.`,
    },
    {
        id: 8,
        name: 'Changes to how we protect your Privacy',
        Description: `
        We collect and use your information to provide you with a seamless shopping experience 
        and to improve our services. This includes:
        ● Processing your orders and managing your account.
        ● Communicating with you about your orders, account status, and customer support 
        inquiries.
        ● Personalizing your shopping experience and recommending products based on your 
        preferences and browsing history.
        ● Analyzing data to enhance our website's functionality and optimize your user 
        experience.
        ● Complying with legal obligations, including tax and accounting requirements.`,
    },
    {
        id: 9,
        name: 'Cookies',
        Description: `
        We collect and use your information to provide you with a seamless shopping experience 
        and to improve our services. This includes:
        ● Processing your orders and managing your account.
        ● Communicating with you about your orders, account status, and customer support 
        inquiries.
        ● Personalizing your shopping experience and recommending products based on your 
        preferences and browsing history.
        ● Analyzing data to enhance our website's functionality and optimize your user 
        experience.
        ● Complying with legal obligations, including tax and accounting requirements.`,
    },
    {
        id: 10,
        name: 'How to contact us',
        Description: `
        We collect and use your information to provide you with a seamless shopping experience 
        and to improve our services. This includes:
        ● Processing your orders and managing your account.
        ● Communicating with you about your orders, account status, and customer support 
        inquiries.
        ● Personalizing your shopping experience and recommending products based on your 
        preferences and browsing history.
        ● Analyzing data to enhance our website's functionality and optimize your user 
        experience.
        ● Complying with legal obligations, including tax and accounting requirements.`,
    },
];


const PrivacyPolicy = () => {
    const [open, setOpen] = useState(0);

    const handleData = (val) => {
        setOpen(open === val ? '' : val)
    }
    return (
        <div>
            <div className='bg-[#fff] md:p-[50px] p-5'>
                <div className='max-w-[940px] w-full mx-auto'>
                    <h3 className='text-center md:text-[30px] text-[16px] font-semibold mb-5'>Privacy Policy</h3>
                    <div className=' mt-3 flex flex-col gap-5'>
                        {data.map((val, i) =>
                            <Accordion key={i} open={open === val.id}>
                                <AccordionHeader onClick={() => handleData(val.id)} className='focus:outline-none acc-header flex items-center justify-between w-full sm:text-base text-sm py-2'>
                                    <div>{val.name}</div>
                                    <BsPlus className='text-[22px]' />
                                </AccordionHeader>
                                <AccordionBody className="py-2">
                                <div dangerouslySetInnerHTML={{ __html: val.Description }} />
                                </AccordionBody>
                            </Accordion>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PrivacyPolicy