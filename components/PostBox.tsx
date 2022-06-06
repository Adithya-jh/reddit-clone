import { useSession } from 'next-auth/react'
import React, { useState } from 'react'
import Avatar from './Avatar'
import {LinkIcon, PhotographIcon} from '@heroicons/react/outline'
import {useForm }from 'react-hook-form'

type FormData = {
    postTitle: string
    postBody: string
    postImage: string
    subreddit: string

}


function PostBox() {
    const {data: session} = useSession()

    const {
        register,
        setValue,
        handleSubmit,
        watch,
        formState: {errors},
    } = useForm<FormData>()

    const [imageBoxOpen,setImageBoxOpen] = useState<boolean>(false)




  return (
    <form className="sticky top-16 z-50 rounded-md border border-gray-300 bg-white p-2">
        <div className="flex items-center space-x-3">
            {/* Avatar */}
            <Avatar />
            <input 
            {...register('postTitle',{required : true})}
            disabled={!session}
            className="flex-1 rounded-md bg-gray-50 p-2 pl-5 outline-none"

            type="text" placeholder={session ? "Create a post by entering a title": "SignIn to enter a post" }/>

            <PhotographIcon className={`h-6 text-gray-300 cursor-pointer`}/>
            <LinkIcon className="h-6 text-gray-300"/>
        </div>

        {!!watch('postTitle') &&  (
            <div className="flex flex-col py-2">
                <div className="flex items-center px-2">
                    <p className="min-w-[90px]">Body:</p>
                    <input type="text" 
                    className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                    placeholder="Text (optional)"
                    {...register('postBody')}
                    />

                </div>

                <div className="flex items-center px-2">
                    <p className="min-w-[90px]">Subreddit:</p>
                    <input type="text" 
                    className="m-2 flex-1 bg-blue-50 p-2 outline-none"
                    placeholder="i.e subreddit"
                    {...register('subreddit')}
                    />

                </div>

            </div>
        )}

    </form>
  )
}

export default PostBox