import React from "react"

export default class User extends React.Component {

    state = {
        loading: true,
        posts: null
    };

    async componentDidMount() {
        const url = "https://tiktok33.p.rapidapi.com/user/info/"+ this.props.user;
        const headers = { 
            "x-rapidapi-host": "tiktok33.p.rapidapi.com",
		    "x-rapidapi-key": "b7a86b94e5msh7cd344678f32b85p140c33jsnb8a8a6573afb"
        };
        const response = await fetch(url, {headers});
        const data = await response.json();
        this.setState({ user: data, loading: false });
    }

    render(){
        if (this.state.loading) {
            return <div>loading...</div>;
        }
      
        if (!this.state.posts) {
            return <div>didn't get a user</div>;
        }

        return (
            <div className="app__user">
                <div className="nav">
                    <span className="material-icons back">arrow_back_ios</span>
                    <span className="nickName">{this.state.user.nickname}</span>
                    <span>
                    <span className="material-icons">notifications</span>
                    <span className="material-icons subscribe">more_horiz</span>
                    </span>
                </div>
                <div className="userAvatar">
                    <img src='https://pbs.twimg.com/profile_images/473506797462896640/_M0JJ0v8.png' alt=""/>
                    <p>@{this.state.user.uniqueId}</p>
                </div>
                <div className="userInfo">
                    <div className="followers">
                        <p>{this.state.user.stats.followerCount}</p>
                        <span>Followers</span>
                    </div>
                    <div className="follows">
                        <p>{this.state.user.stats.followingCount}</p>
                        <span>Follows</span>
                    </div>
                    <div className="likes">
                        <p>{this.state.user.stats.heartCount}</p>
                        <span>Likes</span>
                    </div>
                </div>
                {/* <div>{this.itemList.map((item) => { return {item.stats.playCount} })}</div> */}
            </div>
        );
    }
}