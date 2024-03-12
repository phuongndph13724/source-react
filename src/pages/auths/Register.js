import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import {  apiRegister, apiSignin } from '../../services/apis/auths'

const Register = () => {
    const navigate = useNavigate()
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm()

    const onSubmitRegister = async (data) => {
        try {
            const newData = {
                ...data,
                role : 1
            }
            await apiRegister(newData)
            navigate('/auth/login')
            // localStorage.setItem('userReact', JSON.stringify(user?.data))
            navigate('/')
        } catch (error) {
            console.log(error);
        }
        
    }
 

  return (
    <div className='w-full flex justify-center'>
        <form action="" onSubmit={handleSubmit(onSubmitRegister)} className='flex flex-col mt-8 bg-gray-300 w-[400px] rounded-[8px] p-4'>
            <div className='flex flex-col gap-4'>
                <label htmlFor="">Họ và tên</label>
                <input {...register('fullName', { required : true, minLength : 3})} type="text" name='fullName' />
            </div>
            {errors?.email?.type === "required" ? <p className='text-red-600'>Nhập vào giá trị email!</p> : ""}
            <div className='flex flex-col gap-4'>
                <label htmlFor="">Email</label>
                <input {...register('email', { required : true, minLength : 3})} type="email" name='email' />
            </div>
            {errors?.email?.type === "required" ? <p className='text-red-600'>Nhập vào giá trị email!</p> : ""}
            <div className='flex flex-col gap-4'>
                <label htmlFor="">Password</label>
                <input {...register('password', { required : true, minLength : 3})} type="password" name='password' />
            </div>
            {errors?.password?.type === "required" ? <p className='text-red-600'>Nhập vào giá trị password!</p> : ""}
            <div className='flex flex-col gap-4'>
                <label htmlFor="">Địa chỉ</label>
                <input {...register('address', { required : true, minLength : 3})} type="text" name='address' />
            </div>
            <div className='flex flex-col gap-4'>
                <label htmlFor="">Số điện thoại</label>
                <input {...register('phoneNumber', { required : true, minLength : 3})} type="text" name='phoneNumber' />
            </div>
            <button className='p-2 rounded bg-blue-400 mt-4'>Đăng ký</button>
        </form>
    </div>
  )
}

export default Register