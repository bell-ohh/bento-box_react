// pages/Home.jsx
//WRITE HTML INSIDE RETURN
import image1 from '/assets/illustration-create-post.webp'
import image2 from '/assets/illustration-ai-content.webp'
import image3 from '/assets/illustration-five-stars.webp'
import image4 from '/assets/illustration-schedule-posts.webp'
import image5 from '/assets/illustration-multiple-platforms.webp'
import image6 from '/assets/illustration-consistent-schedule.webp'
import image7 from '/assets/illustration-audience-growth.webp'
import image8 from '/assets/illustration-grow-followers.webp'

export default function Home() {
    return (
        <div>
            <div className="first-grid">
                <div className="third-grid">
                    <div className="fifth-grid">
                        <div className="seventh-grid">
                            <p className="p1">Social media with AI <span class="gold">10X</span></p>
                            <p className="p1"><i>Faster</i> with AI</p>
                            <img src={image1} />
                            <p className="p2">Over 4,000 5-star reiews</p>
                        </div>
                        <div className="eight-grid">
                            <div className="ninth-grid">
                                <img src={image2} />                            <p>Manage multiple accounts and platforms.</p>
                            </div>
                            <div className="tenth-grid">
                                <p>Maintain a consistence posting schedule.</p>
                                <img src={image3} />                        </div>
                        </div>
                    </div>
                    <div className="eleventh-grid">
                        <p className="p3">Schedule to Social media.</p>
                        <img src={image4} />
                        <p className="p4">Optimize post timings to publish post content at the perfect time for your audience.</p>
                    </div>
                </div>
                <div className="fourth-grid">
                    <div className="twelvth-grid">
                        <p className="p5"> {'>'} 56%</p>
                        <p className="p6">faster audience growth</p>
                        <img src={image5} />               
                         </div>
                    <div className="thirteenth-grid">
                        <img src={image6} />
                        <p>Grow followers with non-stop content.</p>
                    </div>
                </div>
            </div>
            <div className="second-grid">
                <div className="header1">
                    <p>Create and schedule content <i className="highlight">quicker.</i></p>
                    <img src={image7} />            
                        </div>
                <div className="footer1">
                    <p>Write your content using AI</p>
                    <img src={image8} />
                </div>
            </div>
        </div>

    )
}