// eslint-disable react/prop-types
import { useUser } from "@clerk/clerk-react";
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Heart, Trash2Icon } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { BarLoader } from "react-spinners";

const ResourcesCard = ({
  blog,
  isMyBlog = false,
  savedInit = false,
  onBlogSaved = () => {},
}) => {
  const [saved, setSaved] = useState(savedInit);
  const { user } = useUser();

  const handleSaveBlog = () => {
    // Mock save blog functionality
    setSaved(!saved);
    onBlogSaved();
  };

  const handleDeleteBlog = () => {
    // Mock delete blog functionality
    onBlogSaved();
  };

  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="flex justify-between font-bold">
          {blog.title}
          {isMyBlog && (
            <Trash2Icon
              fill="red"
              size={18}
              className="text-red-300 cursor-pointer"
              onClick={handleDeleteBlog}
            />
          )}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 flex-1">
        <div className="flex justify-between">
          {blog.topic && (
            <img src={blog.topic.topic_logo_url} alt="topic" className="w-20" />
          )}
        </div>
        <hr />
        {blog.description.substring(0, blog.description.indexOf("."))}
      </CardContent>
      <CardFooter className="flex gap-2">
        <Link to={`/notes/${blog.id}`} className="flex-1">
          <Button variant="secondary" className="w-full">
            Download
          </Button>
        </Link>

        {!isMyBlog && (
          <Button
            variant="outline"
            className="w-15"
            onClick={handleSaveBlog}
          >
            {saved ? (
              <Heart size={20} stroke="red" fill="red" />
            ) : (
              <Heart size={20} />
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default ResourcesCard;
