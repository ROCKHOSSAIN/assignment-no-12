import React, { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import useAxiousPublic from '../../hooks/useAxiosPublic';
import JoditEditor from 'jodit-react';
import { FaCaretRight } from 'react-icons/fa';
const AddBlog = () => {
    const editor = useRef(null)
    const [content, setContent] = useState('')

    const handleblogSubmit = async (data) => {
        // Check if passwords match
        // const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
        // const image_hosting_api = `https://api.imgbb.com/1/upload?expiration=600&key=${image_hosting_key}`
        // const imageFile = { image: data.photoUrl[0] }
        // console.log(imageFile)
        // const imageRes = await useAxiousPublic.post(image_hosting_api, imageFile, {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //     }
        // });
        // const imageUrl = imageRes.data.data.display_url;
        data.content = content;
        console.log(data);

    };

    return (
        <div>
            <form className="card-body"onSubmit={handleblogSubmit}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Title</span>
                    </label>
                    <input type="text" placeholder="Title Name" name='title' className="input input-bordered" required />
                </div>
                <div className="flex flex-col">
                        <label className="block mb-2" htmlFor="image">
                           Thumbnail Image:
                        </label>
                        <input
                            className="border border-gray-300 p-2"
                           placeholder="https://"
                            id="image"
                            name="image"
                            // defaultValue={image}
                        />
                    </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text-alt">Blog Content</span>
                    </label>
                    <JoditEditor
                        ref={editor}
                        value={content}
                        onChange={(newContent) => setContent(newContent)}
                    />
                </div>
                <button className='btn bg-red-700 hover:bg-red-700 mt-10 text-white'>
                    Create <FaCaretRight></FaCaretRight>
                </button>
            </form>
        </div>
    );
};

export default AddBlog;