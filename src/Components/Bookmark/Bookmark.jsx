const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
  return (
    <div className="mt-4 bg-white p-2 rounded-lg">
        <h3 className="text-xl">{title}</h3>
    </div>
  )
}

export default Bookmark