import React from 'react'
import Post from './Post'

export default class Posts extends React.Component {
    state = {
        loading: true,
        posts: null
    };

    async componentDidMount() {
        const url = "https://tiktok33.p.rapidapi.com/trending/feed";
        const headers = { 
            "x-rapidapi-host": "tiktok33.p.rapidapi.com",
		    "x-rapidapi-key": "b7a86b94e5msh7cd344678f32b85p140c33jsnb8a8a6573afb"
        };
        const response = await fetch(url, {headers});
        if (response.ok){
            const data = await response.json();
            console.log(data);
            this.setState({ posts: data, loading: false });
        } else {
            console.log(response.statusText);
            this.setState({ posts: false, loading: false, error: response.statusText });
        }
    }

    render(){
        if (this.state.loading) {
            return <div>loading...</div>;
        }
      
        if (!this.state.posts) {
            return <div>didn't get a post - {this.state.error}</div>;
        }

        return (
            <div className="app__videos">
                    { this.state.posts.map((post, index) => {
                            return <Post post={post} key={index} />
                        })}
            </div>
        );
    }
}