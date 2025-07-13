import Navbar from "../components/Navbar";
import LeaderboardComponent from "../components/LeaderboardComponent";
import Footer from "../components/Footer";
import '../page_styles/Leaderboard.css';

const Leaderboard_data = [
    { 
        pos: 1, 
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphonk.fandom.com%2Fwiki%2FIkfiresonn&psig=AOvVaw01wdr5DnFbszrgUoHQZMD5&ust=1752433654767000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjI8Z2CuI4DFQAAAAAdAAAAABAE" , 
        name: "Name 1", 
        playtime: "10:00:00" 
    },
    { 
        pos: 2,
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphonk.fandom.com%2Fwiki%2FIkfiresonn&psig=AOvVaw01wdr5DnFbszrgUoHQZMD5&ust=1752433654767000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjI8Z2CuI4DFQAAAAAdAAAAABAE" ,
        name: "Name 2", 
        playtime: "9:00:00" 
    },
    { 
        pos: 3, 
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphonk.fandom.com%2Fwiki%2FIkfiresonn&psig=AOvVaw01wdr5DnFbszrgUoHQZMD5&ust=1752433654767000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjI8Z2CuI4DFQAAAAAdAAAAABAE" ,
        name: "Name 3", 
        playtime: "8:00:00" 
    },
    { 
        pos: 4, 
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphonk.fandom.com%2Fwiki%2FIkfiresonn&psig=AOvVaw01wdr5DnFbszrgUoHQZMD5&ust=1752433654767000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjI8Z2CuI4DFQAAAAAdAAAAABAE" ,
        name: "Name 4", 
        playtime: "7:00:00" 
    },
    { 
        pos: 5, 
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphonk.fandom.com%2Fwiki%2FIkfiresonn&psig=AOvVaw01wdr5DnFbszrgUoHQZMD5&ust=1752433654767000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjI8Z2CuI4DFQAAAAAdAAAAABAE" ,
        name: "Name 5", 
        playtime: "6:00:00" 
    },
    { 
        pos: 6, 
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphonk.fandom.com%2Fwiki%2FIkfiresonn&psig=AOvVaw01wdr5DnFbszrgUoHQZMD5&ust=1752433654767000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjI8Z2CuI4DFQAAAAAdAAAAABAE" ,
        name: "Name 6", 
        playtime: "5:00:00" 
    },
    { 
        pos: 7, 
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphonk.fandom.com%2Fwiki%2FIkfiresonn&psig=AOvVaw01wdr5DnFbszrgUoHQZMD5&ust=1752433654767000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjI8Z2CuI4DFQAAAAAdAAAAABAE" ,
        name: "Name 7", 
        playtime: "4:00:00"
    },
    { 
        pos: 8, 
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphonk.fandom.com%2Fwiki%2FIkfiresonn&psig=AOvVaw01wdr5DnFbszrgUoHQZMD5&ust=1752433654767000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjI8Z2CuI4DFQAAAAAdAAAAABAE" ,
        name: "Name 8", 
        playtime: "3:00:00" 
    },
    { 
        pos: 9, 
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphonk.fandom.com%2Fwiki%2FIkfiresonn&psig=AOvVaw01wdr5DnFbszrgUoHQZMD5&ust=1752433654767000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjI8Z2CuI4DFQAAAAAdAAAAABAE" ,
        name: "Name 9", 
        playtime: "2:00:00" 
    },
    { 
        pos: 10, 
        img: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fphonk.fandom.com%2Fwiki%2FIkfiresonn&psig=AOvVaw01wdr5DnFbszrgUoHQZMD5&ust=1752433654767000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCMjI8Z2CuI4DFQAAAAAdAAAAABAE" ,
        name: "Name 10", 
        playtime: "1:00:00"
    }
];


function LeaderboardPage(){
    return(
        <div className="LeaderboardPage">
            <Navbar/>
            <main>
                <LeaderboardComponent data={Leaderboard_data}/>
            </main>
            <Footer />
        </div>
    );
}

export default LeaderboardPage;