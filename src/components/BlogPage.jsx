    

    const BlogPage = () => {
    const blogs = [
        {
        id: 1,
        title: "The truth about self-care",
        date: "December 15, 2021",
        description:
            "What is self-care? We often hear about taking care of your physical appearance, your skin, your hair, and your hygiene. Some people would say that self care is about taking...",
        imageUrl:
            "https://img.goodfon.ru/original/1920x1080/c/7a/devushka-karina-scnceva.jpg",
        },
        {
        id: 2,
        title: "Everything you need to know about hydration",
        date: "December 15, 2021",
        description:
            "Drinking enough water is crucial to maintaining your body’s well-being. We've all heard it: Our bodies are made up of 70% water which makes it essential to good function...",
        imageUrl:
            "https://www.wallpaperuse.com/wallp/0-705_m.jpg",
        },
        
    ];

    return (
        <div className="bg-gray-100 min-h-screen p-6">
        <div className="grid md:grid-cols-2 gap-20">
            {blogs.map((blog) => (
            <div
                key={blog.id}
                className="bg-white rounded-lg overflow-hidden shadow-lg"
            >
                <img
                src={blog.imageUrl}
                alt={blog.title}
                className="w-500 h-500 object-cover" 
                />
                <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-800 mb-2">
                    {blog.title}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{blog.date}</p>
                <p className="text-gray-700">{blog.description}</p>
                </div>
            </div>
            ))}
        </div>
        </div>
    );
    };

    export default BlogPage;
