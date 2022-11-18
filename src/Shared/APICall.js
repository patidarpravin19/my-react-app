import { useEffect, useState } from "react";
import ConfirmDialog from "./Common/Components/Confirm";
import { deleteData, getData, saveData } from "./Services/UserService";

export default function APICall() {
    const page = 5;
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    useEffect(() => {
        getData(page).then((response) => {
            setPosts(response)
        }).catch((error) => {
            console.log("api error", error);
        })
    }, [])


    const handleSubmit = (e) => {
        e.preventDefault();
        let data = {
            title: title,
            body: body,
            userId: Math.random().toString(36).slice(2),
        }
        saveData(data).then((response) => {
            setPosts((posts) => [response, ...posts]);
            setTitle('');
            setBody('');
        }).catch((error) => {
            console.log("api postData", error);
        })
    }
    
    const confirm= (isConfirmed)=>{
        debugger
    }
    const deletePost = (id) => {   
        return (
            <ConfirmDialog />
        )    
        // deleteData(id).then((res) => {
        //     setPosts(
        //         posts.filter((post) => {
        //             return post.id !== id
        //         })
        //     )
        //     console.log("success deletePost", res)
        // }).catch((err) => {
        //     console.log("error deletePost", err)
        // })
    }
    return (
        <>
            <div className="posts-container">
                {posts.map((post) => {
                    return (
                        <div className="post-card" key={post.id}>
                            <h2 className="post-title">{post.title}</h2>
                            <p className="post-body">{post.body}</p>
                            <div className="button">
                                <div className="delete-btn">
                                    <button className="btn btn-danger"  onClick={() => deletePost(post.id)}>Delete</button>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="app">
                <div className="add-post-container">
                    <form onSubmit={handleSubmit}>
                        <input type="text" className="form-control" value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                        <textarea name="" className="form-control" id="" cols="5" rows="5"
                            value={body} onChange={(e) => setBody(e.target.value)}
                        ></textarea>
                        <button type="submit">Add Post</button>
                    </form>
                </div>
            </div>
        </>
    )
}