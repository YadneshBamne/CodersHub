import React, { useEffect } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, Controller } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { BarLoader } from "react-spinners";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import Header from "@/components/header";
import AddTopicDrawer from "@/components/add-topic-drawer";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  topic_id: z.string().min(1, { message: "Select or add a new topic" }),
  requirements: z.string().min(1, { message: "Requirements are required" }),
});

const AddResources = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      topic_id: "",
      requirements: "",
    },
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data); // For frontend, just log the form data
  };

  return (
    <>
    <Header/>
    <div>
      <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
        Add Resources
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-4 pb-0"
      >
        <Input placeholder="Resource title" {...register("title")} />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <Textarea placeholder="Resource Description" {...register("description")} />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <div className="flex items-center gap-4">
          <Controller
            name="topic_id"
            control={control}
            render={({ field }) => (
              <Select value={field.value} onValueChange={field.onChange}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter by topics">
                    {field.value ? field.value : "Topics"}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {/* Topics will be dynamic in real implementation */}
                    <SelectItem value="1">Topic 1</SelectItem>
                    <SelectItem value="2">Topic 2</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          <AddTopicDrawer />
        </div>
        {errors.topic_id && (
          <p className="text-red-500">{errors.topic_id.message}</p>
        )}

        <Controller
          name="requirements"
          control={control}
          render={({ field }) => (
            <MDEditor value={field.value || ""} onChange={field.onChange} />
          )}
        />
        {errors.requirements && (
          <p className="text-red-500">{errors.requirements.message}</p>
        )}

        <Button type="submit" variant="destructive" size="lg" className="mt-2">
          Add Resource
        </Button>
      </form>
    </div>
    </>
  );
};

export default AddResources;
