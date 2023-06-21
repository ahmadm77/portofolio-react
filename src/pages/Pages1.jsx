import "../style/style.css"
import logo from "../asets/1.jpg"
import yt from "../asets/2Y.jpg"
import ig from "../asets/4IG.jpg"
import fb from "../asets/F1.jpg"
import tt from "../asets/T3.jpg"
import git from "../asets/github.png"

export default function Home(){
    return (
        <div>
            <div class="Bintang" >
            <div class="Bersinar">
                <br/>
                <br/>
                <br/>
                <img class="profil" src={logo} width="150px"/>
                <br/>
                <br/>
                <span class="hallo">Hallo Gue</span>
                <br/>
                <br/>
                <h3> MAD UNYU</h3>
                <h5>Drag Racing</h5>
                <div class="footer-social-icons">
                <ul class="social-icons">
                        <li><a href="https://web.facebook.com/Teamsg212/" class="social-icon"><i class="fa fa-facebook"></i><img src={fb} alt=""/></a></li>
                        <li><a href="https://www.instagram.com/_ahmadm77/" class="social-icon"><i class="fa fa-instagram"></i><img src={ig}  alt=""/></a></li>
                        <li><a href="https://www.tiktok.com/@madunyuu" class="social-icon"><i class="fa fa-tiktok"></i><img src={tt} /> </a></li>
                        <li><a href="https://www.youtube.com/channel/UCj1zxZnjR85fICpNDWgmfGA" class="social-icon"><i class="fa fa-youtube"></i> <img src={yt}  alt=""/></a></li>
                        <li><a href="https://github.com/ahmadm77" class="social-icon"><i class="fa fa-github"></i><img src={git}  alt="" /></a></li>
                    </ul>


        </div>
        </div>
        </div>
        </div>
        
    )
}