

const Blog = ({blog}) => {
    const {id,question,answer}=blog;
    return (
        <div className="border  m-3 shadow-lg shadow-slate-400 rounded-xl">
            <h2 className="text-3xl border rounded-xl bg-slate-700 text-white p-3">{id}.{question}</h2>
            
            <p className="p-3">Ans: {answer}</p>
        </div>
    );
};

export default Blog;