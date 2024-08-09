"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { User, MailIcon, ArrowRightIcon, MessageSquare, PhoneCall } from "lucide-react";

const Form = () => {
  return <form method="POST" className='flex flex-col gap-y-4'>
    {/* input */}
    <div className='relative flex items-center'>
      <Input type='name' id='name' placeholder='Full name' />
      <User className='absolute right-6' size={20} />
    </div>
    {/* input */}
    <div className='relative flex items-center'>
      <Input type='email' id='email' placeholder='Email address' />
      <MailIcon className='absolute right-6' size={20} />
    </div>
    {/* input */}
    <div className='relative flex items-center'>
      <Input type='phone' id='phone' placeholder='Phone number' />
      <PhoneCall className='absolute right-6' size={20} />
    </div>
    {/* Text Area */}
    <div className='relative flex items-center'>
      <Textarea type='message' id='message' placeholder='Type your message' />
      <MessageSquare className='absolute top-7 right-6' size={20} />
    </div>
    <Button type='submit' className='flex items-center max-w-[166px]'>Lets Talk
      <ArrowRightIcon size={20} />
    </Button>
  </form>;
};

export default Form;
