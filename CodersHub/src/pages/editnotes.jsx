// import React, { useEffect } from "react";
// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm, Controller } from "react-hook-form";
// import { z } from "zod";
// import { Input } from "@/components/ui/input";
// import { Textarea } from "@/components/ui/textarea";
// import {
//   Select,
//   SelectTrigger,
//   SelectValue,
//   SelectContent,
//   SelectGroup,
//   SelectItem,
// } from "@/components/ui/select";
// import { getTopics } from "@/api/api-topics";
// import useFetch from "@/hooks/use-fetch";
// import { useUser } from "@clerk/clerk-react";
// import { BarLoader } from "react-spinners";
// import MDEditor from "@uiw/react-md-editor";
// import { Button } from "@/components/ui/button";
// import { updateNote, getNoteById } from "@/api/api-Notes";
// import { useNavigate, useParams } from "react-router-dom";
// import AddTopicDrawer from "@/components/add-topic-drawer";

// const schema = z.object({
//   title: z.string().min(1, { message: "Title is required" }),
//   description: z.string().min(1, { message: "Description is required" }),
//   topic_id: z.string().min(1, { message: "Select or add a new topic" }),
// });

// const EditNotes = () => {
//   const { isLoaded, user } = useUser();
//   const navigate = useNavigate();
//   const { noteId } = useParams(); // Get the note ID from URL parameters

//   const {
//     register,
//     control,
//     handleSubmit,
//     reset,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(schema),
//   });

//   const {
//     fn: fnTopics,
//     data: topics,
//     loading: loadingTopics,
//   } = useFetch(getTopics);

//   const {
//     fn: fnGetNote,
//     data: noteData,
//     loading: loadingNote,
//   } = useFetch(getNoteById);

//   const {
//     fn: fnUpdateNote,
//     loading: loadingUpdateNote,
//     error: errorUpdateNote,
//     data: dataUpdateNote,
//   } = useFetch(updateNote);

//   // Fetch topics and note data on component mount
//   useEffect(() => {
//     if (isLoaded) {
//       fnTopics();
//       fnGetNote(noteId);
//     }
//   }, [isLoaded, noteId]);

//   // Populate form with existing note data
//   useEffect(() => {
//     if (noteData) {
//       reset({
//         title: noteData.title,
//         description: noteData.description,
//         topic_id: noteData.topic_id.toString(),
//         requirements: noteData.requirements
//       });
//     }
//   }, [noteData, reset]);

//   const onSubmit = (data) => {
//     fnUpdateNote({
//       id: noteId,
//       ...data,
//       recruiter_id: user.id,
//     });
//   };

//   // Navigate back to notes page after successful update
//   useEffect(() => {
//     if (dataUpdateNote && !loadingUpdateNote) {
//       navigate("/notes");
//     }
//   }, [dataUpdateNote, loadingUpdateNote]);

//   if (!isLoaded || loadingTopics || loadingNote) {
//     return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
//   }

//   return (
//     <div>
//       <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
//         Edit Note
//       </h1>
//       <form
//         onSubmit={handleSubmit(onSubmit)}
//         className="flex flex-col gap-4 p-4 pb-0"
//       >
//         <Input placeholder="Note title" {...register("title")} />
//         {errors.title && <p className="text-red-500">{errors.title.message}</p>}

//         <Textarea placeholder="Note Description" {...register("description")} />
//         {errors.description && (
//           <p className="text-red-500">{errors.description.message}</p>
//         )}

//         <div className="flex items-center gap-4">
//           <Controller
//             name="topic_id"
//             control={control}
//             render={({ field }) => (
//               <Select value={field.value} onValueChange={field.onChange}>
//                 <SelectTrigger>
//                   <SelectValue placeholder="Filter by topics">
//                     {field.value
//                       ? topics?.find((topic) => topic.id === field.value)?.name
//                       : "Topics"}
//                   </SelectValue>
//                 </SelectTrigger>
//                 <SelectContent>
//                   <SelectGroup>
//                     {topics?.map(({ name, id }) => (
//                       <SelectItem key={id} value={id.toString()}>
//                         {name}
//                       </SelectItem>
//                     ))}
//                   </SelectGroup>
//                 </SelectContent>
//               </Select>
//             )}
//           />
//           <AddTopicDrawer fetchTopics={fnTopics} />
//         </div>
//         {errors.topic_id && (
//           <p className="text-red-500">{errors.topic_id.message}</p>
//         )}

//         <Controller
//           name="requirements"
//           control={control}
//           render={({ field }) => (
//             <MDEditor value={field.value || ""} onChange={field.onChange} />
//           )}
//         />
//         {errors.requirements && (
//           <p className="text-red-500">{errors.requirements.message}</p>
//         )}

//         {errorUpdateNote && (
//           <p className="text-red-500">{errorUpdateNote.message}</p>
//         )}

//         {loadingUpdateNote && <BarLoader width={"100%"} color="#36d7b7" />}

//         <div className="flex gap-4">
//           <Button type="submit" variant="blue" size="lg" className="mt-2">
//             Update Note
//           </Button>
//           <Button 
//             type="button" 
//             variant="outline" 
//             size="lg" 
//             className="mt-2"
//             onClick={() => navigate("/notes")}
//           >
//             Cancel
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default EditNotes;


import { useEffect } from "react";
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
import { getTopics } from "@/api/api-topics";
import useFetch from "@/hooks/use-fetch";
import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";
import MDEditor from "@uiw/react-md-editor";
import { Button } from "@/components/ui/button";
import { updateNote, getNoteById } from "@/api/api-Notes";
import { useNavigate, useParams } from "react-router-dom";
import AddTopicDrawer from "@/components/add-topic-drawer";

const schema = z.object({
  title: z.string().min(1, { message: "Title is required" }),
  description: z.string().min(1, { message: "Description is required" }),
  topic_id: z.string().min(1, { message: "Select or add a new topic" }),
  requirements: z.string().optional(),
});

const EditNotes = () => {
  const { isLoaded, user } = useUser();
  const navigate = useNavigate();
  const { noteId } = useParams();

  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isDirty },
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      title: "",
      description: "",
      topic_id: "",
      requirements: "",
    },
  });

  const {
    fn: fnTopics,
    data: topics,
    loading: loadingTopics,
  } = useFetch(getTopics);

  const {
    fn: fnGetNote,
    data: noteData,
    loading: loadingNote,
  } = useFetch(getNoteById);

  const {
    fn: fnUpdateNote,
    loading: loadingUpdateNote,
    error: errorUpdateNote,
    data: dataUpdateNote,
  } = useFetch(updateNote);

  // Fetch topics and note data on component mount
  useEffect(() => {
    if (isLoaded && noteId) {
      fnTopics();
      fnGetNote(noteId);
    }
  }, [isLoaded, noteId]);

  // Populate form with existing note data
  useEffect(() => {
    if (noteData) {
      reset({
        title: noteData.title || "",
        description: noteData.description || "",
        topic_id: noteData.topic_id ? noteData.topic_id.toString() : "",
        requirements: noteData.requirements || "",
      });
    }
  }, [noteData, reset]);

  const onSubmit = async (data) => {
    try {
      await fnUpdateNote({
        id: noteId,
        ...data,
        recruiter_id: user.id,
      });
    } catch (error) {
      console.error("Error updating note:", error);
    }
  };

  // Navigate back to notes page after successful update
  useEffect(() => {
    if (dataUpdateNote && !loadingUpdateNote) {
      navigate("/notes");
    }
  }, [dataUpdateNote, loadingUpdateNote, navigate]);

  if (!isLoaded || loadingTopics || loadingNote) {
    return <BarLoader className="mb-4" width={"100%"} color="#36d7b7" />;
  }

  return (
    <div>
      <h1 className="gradient-title font-extrabold text-5xl sm:text-7xl text-center pb-8">
        Edit Note
      </h1>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col gap-4 p-4 pb-0"
      >
        <Controller
          name="title"
          control={control}
          render={({ field }) => (
            <Input
              placeholder="Note title"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.title && <p className="text-red-500">{errors.title.message}</p>}

        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <Textarea
              placeholder="Note Description"
              {...field}
              value={field.value || ""}
            />
          )}
        />
        {errors.description && (
          <p className="text-red-500">{errors.description.message}</p>
        )}

        <div className="flex items-center gap-4">
          <Controller
            name="topic_id"
            control={control}
            render={({ field }) => (
              <Select
                value={field.value || ""}
                onValueChange={field.onChange}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Filter by topics">
                    {field.value && topics
                      ? topics.find((topic) => topic.id.toString() === field.value)?.name
                      : "Topics"}
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {topics?.map(({ name, id }) => (
                      <SelectItem key={id} value={id.toString()}>
                        {name}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            )}
          />
          <AddTopicDrawer fetchTopics={fnTopics} />
        </div>
        {errors.topic_id && (
          <p className="text-red-500">{errors.topic_id.message}</p>
        )}

        <Controller
          name="requirements"
          control={control}
          render={({ field }) => (
            <MDEditor
              value={field.value || ""}
              onChange={(value) => {
                field.onChange(value);
                setValue("requirements", value, { shouldDirty: true });
              }}
            />
          )}
        />
        {errors.requirements && (
          <p className="text-red-500">{errors.requirements.message}</p>
        )}

        {errorUpdateNote && (
          <p className="text-red-500">{errorUpdateNote.message}</p>
        )}

        {loadingUpdateNote && <BarLoader width={"100%"} color="#36d7b7" />}

        <div className="flex gap-4">
          <Button 
            type="submit" 
            variant="blue" 
            size="lg" 
            className="mt-2"
            disabled={loadingUpdateNote || !isDirty}
          >
            Update Note
          </Button>
          <Button 
            type="button" 
            variant="outline" 
            size="lg" 
            className="mt-2"
            onClick={() => navigate("/notes")}
          >
            Cancel
          </Button>
        </div>
      </form>
    </div>
  );
};

export default EditNotes;