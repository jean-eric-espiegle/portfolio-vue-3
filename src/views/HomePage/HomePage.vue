<template>
    <div class="page-container">
        <nav>
            <ul>
                <li v-if="this.page==='home'" class="active"><a>Home</a></li>
                <li v-else><a href="#">Home</a></li>
                <li v-if="this.page==='contact'" class="active"><a href="#">Contact</a></li>
                <li v-else><a href="#">Contact</a></li>
                <li v-if="this.page==='about'" class="active"><a href="#">About</a></li>
                <li v-else><a href="#">About</a></li>
            </ul>
            <a class="logout" href="#">logout</a>
        </nav>
        <div class="lower-container">
            <FancyCarousel />
            <div class="home-container">
                <div class="profile-card">
                    <div class="top">
                        <div class="pp">
                            <img src="" alt="">
                        </div>
                        <div class="intro">
                            <h1>Jean-Eric Espiegle</h1>
                            <h2>Back End/Junior Front End Developer</h2>
                            <hr />
                            <div class="desc">
                                <p>
                                    Python Django Expert | 
                                    REST API Architect | 
                                    Database Architecture | Front-End 
                                    Implementations | 
                                    API Consumption | 
                                    Responsive Web Applications | 
                                    Website Performance Enhancement 
                                </p>
                            </div>
                        </div>
                    </div>
                    <hr />
                    <div class="tabs">
                        <a href="#">Soft Skills</a>
                        <a href="#">Technical Knowledge</a>
                        <a href="#">Experiences</a>
                        <a href="#">Socials & Links</a>
                    </div>
                    <hr />
                </div>
            </div>
        </div>
    </div>
    <footer>
        <div class="divider"></div>
        <p>designed and developed by</p>
        <h2>Jean-Eric Espiegle</h2>
    </footer>
</template>

<script>
import FancyCarousel from './homepageComponents/FancyCarousel.vue'
export default {
    name: "HomePage",
    data(){
        return{
            page: 'home',
        }
    },
    components:{
        FancyCarousel
    }
}
</script>

<style scoped>
.tabs{
    width: 100%;
    height: 5%;
    display: flex;
    flex-direction: row;
}

.tabs a{
    display: flex;
    width: 24.5%;
    height: 100%;
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    text-transform: lowercase;
    align-items: center;
    justify-content: center;
}

hr{
    height: 2px;
    border: none;
    background: linear-gradient(to right, transparent,#A9928A,transparent);
}
.top{
    display: flex;
    flex-direction: row;
    height: 30%;
    margin-bottom: 2.5%;
    align-items: center;
}
.top hr{
    width: 85%;
    height: 3px;
    margin-top: 1%;
    margin-bottom: 1.5%;
    background: linear-gradient(to right,#A9928A,transparent) !important;
}
.profile-card{
    width: 70%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border: 2px solid #938C8C;
    border-radius: 10px;
    padding: 1%;
    color: #938C8C !important;
}
.top .intro{
    width: 70%;
    margin-left: 5%;
    text-transform: uppercase;
}

.top .intro h2
{
    font-weight: bolder !important;
}
.top .intro h1{
    font-weight: bolder !important;
}

.top .intro p{
    text-transform: lowercase;
    font-weight: bolder !important;
}
.top .pp{
    width: 25%;
    height: 100%;
    border:1px solid white;
    border-radius: 10px;;
    background-color: white;
    filter: drop-shadow(2px 2px 5px #fffefe);
}
.home-container{
    width: 100%;
    height: 92.5%;
    padding: 5%;
    padding-bottom:7.5% !important;
    display: flex;
    flex-direction: row;
    justify-content: center;
}
.home-container .ghub{
    width: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
}

.home-container .ghub iframe{
    width: 47.5%;
    height: 25%;
    overflow: hidden;
    border-radius: 10px;
    padding: 0;
    background-color: white;
}

.lower-container{
    display: flex;
    flex-direction: row;
    height: 100%;
}
    .page-container{
        width: 100%;
        height: 100%;
    }

    nav{
        width: 100%;
        height: 5%;
        background-color: #94948E;
        display: flex;
        flex-direction: row;
    }

    nav ul{
        width: 30%;
        height: 100%;
        list-style-type:none;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    nav ul li{
        height: 100%;
        width: 25%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    nav ul li a{
        display: flex;
        text-decoration: none;
        color:#3B322C;
        font-weight: bolder;
        font-size: 1.25em;
        text-transform: lowercase;
        height: 100%;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        width: 100%;
    }

    nav ul li a:hover{
        background-color: #3b322c00;
        transform: scale(1.1);
        color: #2f2824;
    }

    .active a{
        background-color: #938C8C;
        font-size: 1.375em;
        color: #2f2824;
    }

    .active a:hover{
        background-color: #938C8C;
        transform: scale(1) !important;
    }

    .logout{
        position: fixed;
        right: 0;
        top: 0;
        text-decoration: none;
        color:#2f2824;
        font-size: 1.6em;
        font-weight: bolder;
        height: 5%;
        width: 10%;
        text-align: center;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        float: right;
    }

    .logout:hover{
        background-color: #94948e00;
        font-size: 1.7em;
    }

    footer{
        position:fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 7.5%;
        padding-bottom: 0.5%;
        background: #94948E;
        color: black;
    }
    footer p{
        color: white;
        font-weight: bold;
    }
    .divider{
        display: block;
        z-index: 20;
        width: 100%;
        height: 50%;
        background: linear-gradient(to bottom,#3B322C,#94948e00);
    }
    footer h2{
        margin: 0 !important;
        padding: 0;
        line-height: 1;
        font-weight:700;
    }
</style>