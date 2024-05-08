import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/router";
import { FormInput } from "@/utils/types";
import { createPost } from "@/services/postServices";
import { usePosts } from "@/context/postContext";
import { useSnackbar } from "notistack";

const schema = yup
  .object({
    title: yup.string().required("Title is required"),
    body: yup.string().required("Body is required"),
  })
  .required();

const CreatePost = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { addPost } = usePosts();
  const { enqueueSnackbar } = useSnackbar();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormInput>({
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormInput> = async (data) => {
    try {
      const newPost = await createPost(data);
      addPost(newPost);
      setIsLoading(false);
      enqueueSnackbar("Post successfully created", { variant: "success" });

      router.push("/");
    } catch (error) {
      if (error) {
        enqueueSnackbar("An error has occurred", { variant: "error" });
        setIsLoading(false);
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto mt-20 p-6 bg-white rounded-lg shadow-md">
      <form onSubmit={handleSubmit(onSubmit)} className="px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            title
          </label>
          <input
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
              errors.title ? "border-red-500" : ""
            }`}
            type="text"
            placeholder="Title"
            {...register("title")}
            disabled={isLoading}
            id="title"
          />
          {errors.title && (
            <p className="text-red-500 text-xs italic">
              {errors.title.message}
            </p>
          )}
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            body
          </label>
          <textarea
            className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline  ${
              errors.body ? "border-red-500" : ""
            }`}
            {...register("body")}
            id="body"
            placeholder="Body"
            disabled={isLoading}
          />
          {errors.body && (
            <p className="text-red-500 text-xs italic">{errors.body.message}</p>
          )}
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            {isLoading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreatePost;
