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
		    "x-rapidapi-key": "c1257dc04cmshd888bbb072eb770p1f2b8ajsnbf16d4cd1d66"
        };
        const response = await fetch(url, {headers});
        if (response.ok){
            const data = await response.json();
            console.log(data);
            this.setState({ user: data, loading: false });
        } else {
            console.log(response.statusText);
            this.setState({ user: false, loading: false, error: response.statusText });
        }
    }

    render(){
        if (this.state.loading) {
            return <div>loading...</div>;
        }
      
        if (!this.state.user) {
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