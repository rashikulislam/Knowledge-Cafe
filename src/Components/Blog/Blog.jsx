import { FaRegBookmark } from "react-icons/fa";
const Blog = ({blog, markHandle, readTime}) => {
    const {cover_img, author, posted_date, reading_time, title,hashtags
    } = blog;
    
  return (
    <div className="space-y-4 mt-8">
        <img className="w-full" src={cover_img} alt="" />
        <div className="flex justify-between">
            <div className="flex">
            <img className="w-14" src={author.author_img} alt="" />
            <div className="ml-3">
            <h2>{author.name}</h2>
            <span>{posted_date
            }</span>
            </div>
            </div>
            <div>
                <span>{reading_time} min read</span>
                <button onClick={() => markHandle(blog)} className="ml-2">{<FaRegBookmark />}</button>
            </div>
        </div>
        <h2 className="text-2xl font-semibold w-1/3">{title}</h2>
        <div>
            {
                hashtags.map(hash => <span><a href="">#{hash}</a></span>)
            }
        </div>
        <div>
        <button onClick={() => readTime(reading_time)} className="underline">Mark As Read</button>
        </div>
    </div>
  )
}

export default Blog