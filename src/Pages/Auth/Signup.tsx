import React, { FormEvent, useState } from 'react'
import { BiSkipNext } from 'react-icons/bi'
import meloLogo from './../../assets/melo-logo.png'
import { IoMdCloudUpload } from 'react-icons/io'
import { MdDoneAll, MdOutlineCancel } from 'react-icons/md'
import { useAdmin } from '../../Context/AdminContext'
import { ToastContainer, toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import './Signup.css'

const Signup = () => {
    const { newCompany }: any = useAdmin()
    const [step, setStep] = useState(1)
    const [formData, setFormData] = useState<Values>
        ({
            name: '',
            tinNumber: undefined,
            telephone: undefined,
            email: '',
            logoImageStr: 'https://res.cloudinary.com//image/upload/v1664001919/download_fnln5v.png',
            managerName: '',
            managerTelephone: undefined,
            managerEmail: '',
            address: {
                district: '',
                sector: '',
                cell: '',
                village: '',
            },

        })

        const navigate = useNavigate();

    interface Values {
        name: string
        tinNumber: number | undefined
        email: string,
        telephone: number | undefined
        logoImageStr: string,
        managerName: string
        managerTelephone: number | undefined
        managerEmail: string
        address: AddressObject
    }

    interface AddressObject {
        district: string,
        sector: string,
        cell: string,
        village: string,
    }

    const previewFile = () => {
        const file = document.querySelector('#logoImageUploadInput') as HTMLInputElement
        const reader = new FileReader()
        reader.addEventListener('loadend', () => {
            setFormData({ ...formData, logoImageStr: reader.result as string })
        })
        if (file.files) {
            reader.readAsDataURL(file.files[0])
        }
    }

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        console.log(formData);
        const data = await newCompany(formData)
        console.log(data)
        if (!data.status) {
            toast.error(`${data.data.message}`)
            return
        }
        toast.success(`${data.data.message}`)
        navigate("/register/docs");
    }

    const handleChange =
        (prop: keyof Values) => (event: React.ChangeEvent<HTMLInputElement>) => {
            setFormData({ ...formData, [prop]: event.target.value });
        };

    return (


       
        <div className='Signup'>
            
            <form className='w-full h-full flex items-center justify-center' onSubmit={handleSubmit}>
                <div className='smm20: sm:w-6/12 md:w-5/12 xl:w-4/12 h-fit relative rounded-xl bg-white flex flex-col items-center justify-center'>
                    <img src={meloLogo} className='w-24 h-24 mt-8' alt="" />
                    <h2 className='text-black text-3xl font-poppins font-semibold my-8'>Signup</h2>

                    {
                        step === 1 ?

                            <div className='px-4 mmsm:px-8 mb-24 mmsm:mb-32 w-full flex flex-col items-center justify-center'>
                                <div className='w-full flex my-1 flex-col items-start justify-center'>
                                  
                                    <input required={true} value={formData.name} onChange={handleChange('name')} placeholder='enter your username' type="text" className='p-2 text-lg bg-cblink/10 font-poppins font-medium text-black placeholder:text-gray-500 placeholder:text-lg placeholder:font-poppins rounded w-full outline-0 border-0 h-12 mb-2' />
                                </div>
                                
                                <div className='w-full flex my-1 flex-col items-start justify-center'>
                                
                                    <input required={true} value={formData.telephone} onChange={handleChange('telephone')} placeholder='your phone number' type={"telephone"} className='p-2 text-lg bg-cblink/10 font-poppins font-medium text-black placeholder:text-gray-500 placeholder:text-lg placeholder:font-poppins rounded w-full outline-0 border-0 h-12 mb-2' />
                                </div>
                                <div className='w-full flex my-1 flex-col items-start justify-center'>
                                  
                                    <input required={true} value={formData.email} onChange={handleChange('email')} placeholder='your email' type="email" className='p-2 text-lg bg-cblink/10 font-poppins font-medium text-black placeholder:text-gray-500 placeholder:text-lg placeholder:font-poppins rounded w-full outline-0 border-0 h-12 mb-2' />
                                </div>
                            </div>
                            :
                            step === 2 ?
                                <div className='px-4 mmsm:px-8 mb-24 mmsm:mb-32 w-3/4 flex flex-col items-center justify-center'>
                                    <div className='w-full flex my-1 flex-row items-center justify-between py-2 text-lg text-black'>
                                        <span className={`bg-cblink/10 ${formData.logoImageStr ? 'font-semibold text-black' : 'text-gray-500 bg-cblink/10'} status font-poppins p-2.5 rounded  w-9/12`}>{
                                            formData.logoImageStr === 'https://res.cloudinary.com//image/upload/v1664001919/download_fnln5v.png' ?
                                                'No file was uploaded'
                                                :
                                                'Logo was uploaded ✅'
                                        }
                                        </span>
                                        {
                                            formData.logoImageStr === 'https://res.cloudinary.com//image/upload/v1664001919/download_fnln5v.png' ?
                                                null
                                                :
                                                <span title='Change Logo' className='cursor-pointer' onClick={() => setFormData({ ...formData, logoImageStr: 'https://res.cloudinary.com//image/upload/v1664001919/download_fnln5v.png' })}><MdOutlineCancel color='#160370' size={30} /></span>
                                        }
                                        <label htmlFor="logoImageUploadInput" id='logoImageUploadLabel' className='w-12 h-12 cursor-pointer bg-cblink rounded-full text-white flex items-center justify-center'><IoMdCloudUpload color='white' size={30} /></label>
                                    </div>
                                    <input required={true} accept='image/*' onChange={previewFile} placeholder='' type="file" id='logoImageUploadInput' className='hidden  placeholder:text-gray-500 placeholder:text-lg placeholder:font-poppins rounded w-full outline-0 border-0 h-12 mb-2' />
                                    <div className='w-full flex my-1 flex-col items-start justify-center'>
                                        <span className={` text-sm font-poppins text-cblink`}>Manager Name</span>
                                        <input required={true} value={formData.managerName} onChange={handleChange('managerName')} placeholder='' type="text" className='p-2 text-lg bg-cblink/10 font-poppins font-medium text-black placeholder:text-gray-500 placeholder:text-lg placeholder:font-poppins rounded w-full outline-0 border-0 h-12 mb-2' />
                                    </div>
                                    <div className='w-full flex my-1 flex-col items-start justify-center'>
                                        <span className={`text-sm font-poppins text-cblink`}>Manager Phone</span>
                                        <input required={true} value={formData.managerTelephone} onChange={handleChange('managerTelephone')} placeholder='' type="number" className='p-2 text-lg bg-cblink/10 font-poppins font-medium text-black placeholder:text-gray-500 placeholder:text-lg placeholder:font-poppins rounded w-full outline-0 border-0 h-12 mb-2' />
                                    </div>
                                    <div className='w-full flex my-1 flex-col items-start justify-center'>
                                        <span className={`text-sm font-poppins text-cblink`}>Manager Email</span>
                                        <input required={true} value={formData.managerEmail} onChange={handleChange('managerEmail')} placeholder='' type="text" className='p-2 text-lg bg-cblink/10 font-poppins font-medium text-black placeholder:text-gray-500 placeholder:text-lg placeholder:font-poppins rounded w-full outline-0 border-0 h-12 mb-2' />
                                    </div>

                                </div>
                                :
                                <div className='px-4 mmsm:px-8 mb-24 mmsm:mb-32 w-full flex flex-col items-center justify-center'>
                                    <div className='w-full flex my-1 flex-col items-start justify-center'>
                                        <span className={`text-sm font-poppins text-cblink`}>District</span>
                                        <input required={true} value={formData.address.district} onChange={(e) => setFormData({ ...formData, address: { ...formData.address, district: e.target.value } })} placeholder='e.g Kicukiro' type="text" className='p-2 text-lg bg-cblink/10 font-poppins font-medium text-black placeholder:text-gray-500 placeholder:text-lg placeholder:font-poppins rounded w-full outline-0 border-0 h-12 mb-2' />
                                    </div>
                                    <div className='w-full flex my-1 flex-col items-start justify-center'>
                                        <span className={`text-sm font-poppins text-cblink`}>Sector</span>
                                        <input required={true} value={formData.address.sector} onChange={(e) => setFormData({ ...formData, address: { ...formData.address, sector: e.target.value } })} placeholder='e.g Kanombe' type="text" className='p-2 text-lg bg-cblink/10 font-poppins font-medium text-black placeholder:text-gray-500 placeholder:text-lg placeholder:font-poppins rounded w-full outline-0 border-0 h-12 mb-2' />
                                    </div>
                                    <div className='w-full flex my-1 flex-col items-start justify-center'>
                                        <span className={`text-sm font-poppins text-cblink`}>Cell</span>
                                        <input required={true} value={formData.address.cell} onChange={(e) => setFormData({ ...formData, address: { ...formData.address, cell: e.target.value } })} placeholder='e.g Gatenga' type="text" className='p-2 text-lg bg-cblink/10 font-poppins font-medium text-black placeholder:text-gray-500 placeholder:text-lg placeholder:font-poppins rounded w-full outline-0 border-0 h-12 mb-2' />
                                    </div>
                                </div>

                    }
                    <div className='py-4 w-full mt-8 scale-75 mmsm:scale-100 bg-inherit flex items-center justify-between mmsm:justify-around rounded-b-lg mmsm:px-4 absolute h-fit left-0 right-0 bottom-0' style={{bottom: '30px'}}>
                        <button onClick={() => {
                            step === 1
                                ?
                                null :
                                setStep(step - 1)
                        }} className={` text-white px-2 mmsm:px-4 py-2 rounded flex items-center justify-center text-xl ${step === 1 ? ' cursor-not-allowed bg-cblink/20' : 'bg-cblink cursor-pointer'} `} disabled={step===1} type='button'>Back <BiSkipNext className='rotate-180 text-3xl ml-3' color='white' style={{bottom: '25px'}} /></button>
                        <button onClick={() => {
                            step === 3
                                ?
                                null
                                :
                                setStep(step + 1)
                        }} className='bg-cblink text-white px-2 mmsm:px-4 py-2 rounded flex items-center justify-center text-xl cursor-pointer' type={`${step === 3 ? 'submit' : 'button'}`}>{
                                step === 3
                                    ?
                                    <>
                                        <span>Finish</span>
                                        <MdDoneAll className='text-3xl ml-3' color='white' />
                                    </>
                                    :
                                    <>
                                        <span>Next</span>
                                        <BiSkipNext className='text-3xl ml-3' color='white' />
                                    </>
                            }</button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Signup
