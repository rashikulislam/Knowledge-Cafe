import Bookmark from "../Bookmark/Bookmark"

const Bookmarks = ({ bookmarks, time }) => {
    return (
        <div className="md:w-1/3">
            <div className="text-2xl font-semibold mt-6 ml-10 bg-slate-200 p-6 rounded-lg">
                <h3>Spent Time: {time}</h3>
            </div>
        <div className="text-2xl font-semibold mt-6 ml-10 bg-slate-200 p-6 rounded-lg">
            
            Bookmarked Blogs: {bookmarks.length}
            {
                bookmarks.map(bookmark => <Bookmark bookmark={bookmark}></Bookmark>)
            }
        </div>
        </div>
    )
}

export default Bookmarks