import React from 'react'
import { useForm } from 'react-hook-form'
// eslint-disable-next-line no-unused-vars
import axios from 'axios'

export default function ContactForm(){
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm()

  async function onSubmit(data){
    // For demo we just log — replace with API endpoint later
    try {
      await new Promise(res => setTimeout(res, 700)) // mimic network
      console.log('Contact form submitted', data)
      alert('Thank you — we will get back to you soon.')
      reset()
    } catch (err) {
      alert('Failed to submit. Try again.',err)
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 card max-w-2xl">
      <h3 className="text-lg font-semibold">Contact / Registration</h3>

      <div>
        <label className="text-sm">Full name</label>
        <input {...register('name', { required: 'Name required' })} className="w-full mt-1 rounded-md p-3 border dark:border-slate-700 input-focus" placeholder="Your full name"/>
        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name.message}</p>}
      </div>

      <div>
        <label className="text-sm">Email</label>
        <input {...register('email', { required: 'Email required', pattern: { value: /\S+@\S+\.\S+/, message: 'Invalid email' }})} className="w-full mt-1 rounded-md p-3 border dark:border-slate-700 input-focus" placeholder="you@example.com"/>
        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email.message}</p>}
      </div>

      <div>
        <label className="text-sm">Phone (optional)</label>
        <input {...register('phone')} className="w-full mt-1 rounded-md p-3 border dark:border-slate-700 input-focus" placeholder="Phone"/>
      </div>

      <div>
        <label className="text-sm">Message / Why you'd like to join</label>
        <textarea {...register('message', { required: 'Please add a short message' })} className="w-full mt-1 rounded-md p-3 border dark:border-slate-700 input-focus" rows="4"></textarea>
        {errors.message && <p className="text-xs text-red-500 mt-1">{errors.message.message}</p>}
      </div>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={isSubmitting} className="px-4 py-2 rounded-lg bg-brand text-white">{isSubmitting ? 'Sending...' : 'Send Message'}</button>
        <button type="button" onClick={()=>{reset()}} className="px-4 py-2 rounded-lg border dark:border-slate-700">Reset</button>
      </div>
    </form>
  )
}
